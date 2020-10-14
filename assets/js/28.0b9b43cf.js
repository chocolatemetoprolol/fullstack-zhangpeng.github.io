(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{507:function(t,a,s){"use strict";s.r(a);var n=s(4),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"double-转-nsstring-出现精度异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#double-转-nsstring-出现精度异常"}},[t._v("#")]),t._v(" double 转 NSString 出现精度异常")]),t._v(" "),s("p",[t._v("在日常开发中，后台再给我们返回数字类型的数据时，很有可能是带小数点的。我们只能用 "),s("code",[t._v("float")]),t._v(" 或者 "),s("code",[t._v("double")]),t._v(" 去接，我们如果需要显示给用户时，就会造成精度异常。")]),t._v(" "),s("h2",{attrs:{id:"错误事例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误事例"}},[t._v("#")]),t._v(" 错误事例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"double"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("79.04")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面是服务端给我们返回的 "),s("code",[t._v("response")]),t._v("，我们将它转为字典.")]),t._v(" "),s("div",{staticClass:"language-objc extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[t._v("NSDictionary "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSJSONSerialization JSONObjectWithData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("data options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSString stringWithFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"转换错误的结果为%@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"double"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/09/08/1.jpeg",alt:"image"}})]),t._v(" "),s("p",[t._v("到这，也许有人会说：在转字符串时，加上保留的位数就可以了。但其实这样做并不是太合理。因为我们根本不服务端后台会给我们返回什么数据，所以我们不知道该保留几位小数。同理，我们也不能采取切割字符串的方式去保留小数位数。")]),t._v(" "),s("h2",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),s("p",[t._v("采用苹果提供的NSDecimalNumber解决此问题。")]),t._v(" "),s("div",{staticClass:"language-objc extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"double"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" doubleValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSString stringWithFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"%f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nNSDecimalNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSDecimalNumber decimalNumberWithString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSString stringWithFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"转换成功的结果为%@"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stringValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/09/08/1.jpeg",alt:"image"}})]),t._v(" "),s("p",[t._v("本文的所有代码均以上传至 "),s("code",[t._v("GitHub")]),t._v("，如需"),s("a",{attrs:{href:"https://github.com/fullstack-zhangpeng/P_App_OC.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("自取"),s("OutboundLink")],1),t._v("~")]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("Title: double 转 NSString 出现精度异常")]),t._v(" "),s("p",[t._v("Date: 2017.09.08")]),t._v(" "),s("p",[t._v("Author: zhangpeng")]),t._v(" "),s("p",[t._v("Github: "),s("a",{attrs:{href:"https://github.com/fullstack-zhangpeng",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/fullstack-zhangpeng"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);