# WKWebView 使用及注意事项

`WKWebView` 是苹果提供的用于在App中进行网页浏览的控件，
不过只能在 `iOS8` 后使用，如果还需要适配 `iOS7`，那我只能摆一张无奈脸了ㄟ( ▔, ▔ )ㄏ

#### WKWebView的优点
它相对于`UIWebView`有以下几个优点：
1. 性能和稳定性的大幅提高
2. 内存占用的减少
3. 支持更多HTML5特性
4. 60fps的刷新率以及内置手势的支持
5. 增加了新的代理方法，可控性更高

> [WebKit苹果官方链接](https://developer.apple.com/documentation/webkit?language=objc)

### 使用
#### 引入
要想使用`WKWebView`,一定要先引入:

```
#import <WebKit/WebKit.h>
```

#### 初始化WKWebView


```
// WKUserContentController对象为JavaScript提供了一种方式，可以将消息发送到web视图，并将用户脚本注入到web视图中。
WKUserContentController *userContentController = [[WKUserContentController alloc] init];
    
// 执行js，添加cookies
NSString *js = @"document.cookie='userId=zhangpeng'";
WKUserScript * cookieScript = [[WKUserScript alloc] initWithSource:js injectionTime:WKUserScriptInjectionTimeAtDocumentStart forMainFrameOnly:NO];
[userContentController addUserScript:cookieScript];
    
// 用于初始化web视图的属性集合。
WKWebViewConfiguration *config = [[WKWebViewConfiguration alloc] init];
config.userContentController = userContentController;
_config = config;
    
// 注入JS对象名称，当JS通过对象名称来调用时，我们可以在WKScriptMessageHandler代理中接收到
for (NSString *scriptMessage in self.scriptMessages) {
        
    [config.userContentController addScriptMessageHandler:self name:scriptMessage];
}
    
WKWebView *webView = [[WKWebView alloc] initWithFrame:CGRectMake(0, 0, kScreenW, kMainAreaHeightNoTab) configuration:config];
/*
    UIDelegate: web view的用户界面代理。
    WKUIDelegate类提供了代表网页呈现本地用户界面元素的方法。
*/
webView.UIDelegate = self;
/*
    navigationDelegate: web view的导航代理。
    WKNavigationDelegate协议的方法帮助您实现在web view接受、加载和完成导航请求过程中触发的自定义行为。
     */
webView.navigationDelegate = self;
[self.view addSubview:webView];
_webView = webView;
```

#### WKNavigationDelegate
##### WKWebView代理执行顺序

```
// 1.是否允许跳转
-(void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler{
    NSLog(@"%s", __func__);
    decisionHandler(WKNavigationActionPolicyAllow);
}

// 2.开始加载网页
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation {
    
    NSLog(@"%s", __func__);
}

// 3.知道返回内容之后，是否允许加载
-(void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler{
    
    NSLog(@"%s", __func__);
    decisionHandler(WKNavigationResponsePolicyAllow);
}

/// 4.当内容开始返回时调用
- (void)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation {
    
    NSLog(@"%s", __func__);
}

// 5.页面加载完成之后调用
- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {
    
    NSLog(@"%s", __func__);
}

// 当跳转失败时调用
- (void)webView:(WKWebView *)webView didFailNavigation:(WKNavigation *)navigation withError:(NSError *)error {
    
    NSLog(@"%s", __func__);
}

// 当web view加载内容失败时调用
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation {
    
    NSLog(@"%s", __func__);
}
```

```
// 是否继续打开，用在webView:decidePolicyForNavigationAction:decisionHandler:中
typedef NS_ENUM(NSInteger, WKNavigationActionPolicy) {
    WKNavigationActionPolicyCancel,
    WKNavigationActionPolicyAllow,
} API_AVAILABLE(macosx(10.10), ios(8.0));

// 是否继续加载，用在webView:decidePolicyForNavigationResponse:decisionHandler:中
typedef NS_ENUM(NSInteger, WKNavigationResponsePolicy) {
    WKNavigationResponsePolicyCancel,
    WKNavigationResponsePolicyAllow,
} API_AVAILABLE(macosx(10.10), ios(8.0));
```

##### WKWebView还有几个不常用但是要知道的代理

```
// 当由服务端进行重定向时触发
-(void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(null_unspecified WKNavigation *)navigation{
    
    NSLog(@"%s", __func__);
}

// 进行证书验证时触发
- (void)webView:(WKWebView *)webView didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition, NSURLCredential * _Nullable))completionHandler {

    NSLog(@"%s", __func__);

    NSURLCredential *card = [[NSURLCredential alloc]initWithTrust:challenge.protectionSpace.serverTrust];

    completionHandler(NSURLSessionAuthChallengeUseCredential, card);
}

// 当因为某些问题，导致webView进程终止时触发
- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView {
    
    NSLog(@"%s", __func__);
}
```
#### WKUIDelegate
##### 前端的`alert()`方法在客户端没有反应
这时，如果前端使用`alert()`弹出一个alert，在我们客户端中，我们并不会看到弹框。
因为还需要实现`- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler;`。

```
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler {
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:message preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleCancel handler:nil];
    [alert addAction:cancelAction];
    [self presentViewController:alert animated:YES completion:nil];
    
    completionHandler();
}
```

这个`message`就是前端通过alert()方法传递的内容。

**注：** 一定要实现`completionHandler();`，否则在某些情况下会造成Crash，详见[WKWebView那些坑](https://www.cnblogs.com/NSong/p/6489802.html)。

WKUIDelegate中，还有下面两个方法，可以看情况使用。

```
- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL result))completionHandler;

- (void)webView:(WKWebView *)webView runJavaScriptTextInputPanelWithPrompt:(NSString *)prompt defaultText:(nullable NSString *)defaultText initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(NSString * _Nullable result))completionHandler;
```

#### 与js交互
客户端与JS交互，需要前端同学进行一定的配合。但是如果前端忙到没有时间帮助我们，那我们也可以自己来，也就是一句话的事儿~~

##### 前端页面的工作

当网页中需要调用客户端中的方法时，可以通过下面的方式进行调用：

```
window.webkit.messageHandlers.test1.postMessage({msg: "test1"});
```

window.webkit.messageHandlers.**对象名**.postMessage(**传递参数**);

**对象名：**就是我们在初始化`WKWebView`时，通过`addScriptMessageHandler`注入的js对象名称；
**传递参数：**建议用json进行参数的传递，两边约定好的规范，可以提高开发的效率

##### 客户端的工作

在客户端中，我们可以在`- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message;`方法中响应，然后进行后续操作。

```
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    
    // 打印所传过来的参数，只支持NSNumber, NSString, NSDate, NSArray,
    // NSDictionary, and NSNull类型
    if ([message.name isEqualToString:@"test1"]) {
        
        NSLog(@"触发了test1");
        
    } else if ([message.name isEqualToString:@"test2"]) {
        
        NSLog(@"触发了test2");
        
    } else {
        
    }
}
```

通过查看`WKScriptMessage`，我们可以看到`name`和`body`两个属性，`name`就是注入的js对象名称，`body`就是前端传给我们的参数。
我们根据不同的`name`进行判断，执行不同的操作。


### 常见问题
#### 添加Cookies
* JS注入的Cookie，比如PHP代码在Cookie容器中取是取不到的， javascript document.cookie能读取到，浏览器中也能看到。
* NSMutableURLRequest 注入的PHP等动态语言直接能从$_COOKIE对象中获取到，但是js读取不到，浏览器也看不到。

所以我们的解决办法是：
1.在初始化时，通过js注入添加cookies

```
// WKUserContentController对象为JavaScript提供了一种方式，可以将消息发送到web视图，并将用户脚本注入到web视图中。
WKUserContentController *userContentController = [[WKUserContentController alloc] init];
    
// 执行js，添加cookies
NSString *js = @"document.cookie='userId=zhangpeng'";
WKUserScript * cookieScript = [[WKUserScript alloc] initWithSource:js injectionTime:WKUserScriptInjectionTimeAtDocumentStart forMainFrameOnly:NO];
[userContentController addUserScript:cookieScript];
```

2.给发出的request也添加上cookies

```
NSMutableURLRequest *request = [[NSMutableURLRequest alloc] initWithURL:url cachePolicy:NSURLRequestReloadIgnoringLocalCacheData timeoutInterval:20.0f];
[request setValue:@"userId=zhangpeng" forHTTPHeaderField:@"Cookie"];
[_webView loadRequest:request];
```

#### WKWebView内存泄漏
##### 问题描述
通过在dealloc方法打断点，可以看到控制器并没有走到dealloc方法，猜想是由于WKUserContentController对象的addScriptMessageHandler方法强引用了控制器本身，而控制器又强引用了webView,然后webView又强引用了configuration,configuration又强引用了WKUserContentController对象，最终造成了不能释放。通过搜索看到了[stackoverflow中的一个解决方案](https://stackoverflow.com/questions/26383031/wkwebview-causes-my-view-controller-to-leak)，最终解决了问题。

##### 解决方案

1.创建一个新类`WeakScriptMessageDelegate`

```
#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface WeakScriptMessageDelegate : NSObject

@property (nonatomic, weak) id<WKScriptMessageHandler> scriptDelegate;

- (instancetype)initWithDelegate:(id<WKScriptMessageHandler>)scriptDelegate;

@end
```

```
@implementation WeakScriptMessageDelegate

- (instancetype)initWithDelegate:(id<WKScriptMessageHandler>)scriptDelegate {
    
    self = [super init];
    if (self) {
        _scriptDelegate = scriptDelegate;
    }
    return self;
}

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    
    [self.scriptDelegate userContentController:userContentController didReceiveScriptMessage:message];
}

@end
```
2.在我们使用WKWebView的控制器中引入我们创建的那个类，将注入js对象的代码改为:

```
[config.userContentController addScriptMessageHandler:[[WeakScriptMessageDelegate alloc] initWithDelegate:self] name:scriptMessage];
```
3.在delloc方法中通过下面的方式移除注入的js对象

```
[self.config.userContentController removeScriptMessageHandlerForName:scriptMessage];
```

上面三步就可以解决控制器不能被释放的问题了。O(∩_∩)O~~

### 附：
1.[WKWebView那些坑](https://www.cnblogs.com/NSong/p/6489802.html)

### 本文代码已经上传到[P_App_OC](https://github.com/fullstack-zhangpeng/P_App_OC.git "Demo")


