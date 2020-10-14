(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{528:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"搭建-hexo-blog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-hexo-blog"}},[t._v("#")]),t._v(" 搭建 Hexo Blog")]),t._v(" "),s("p",[s("code",[t._v("Hexo")]),t._v(" 需要 "),s("code",[t._v("Git")]),t._v(" 和 "),s("code",[t._v("Node")]),t._v(" 的支持，所以烦请各位想用 "),s("code",[t._v("Hexo")]),t._v(" 搭建博客的同学自行安装 "),s("code",[t._v("Git")]),t._v(" 和 "),s("code",[t._v("Node")]),t._v("，然后再来阅读本文档。")]),t._v(" "),s("h2",{attrs:{id:"安装-hexo-脚手架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-hexo-脚手架"}},[t._v("#")]),t._v(" 安装 "),s("code",[t._v("hexo")]),t._v(" 脚手架")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("➜  ~ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g hexo-cli\n/usr/local/bin/hexo -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/local/lib/node_modules/hexo-cli/bin/hexo\n+ hexo-cli@3.1.0\nadded "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("67")]),t._v(" packages from "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("317")]),t._v(" contributors "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(".685s\n")])])]),s("p",[t._v("如果因为权限问题安装失败的，那么在命令前添加 "),s("code",[t._v("sudo")]),t._v("，输入密码后就可以安装了")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/1.png",alt:"图1，安装hexo-cli"}})]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("hexo -v")]),t._v(" 可以检查 "),s("code",[t._v("hexo-cli")]),t._v(" 是否安装成功")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("➜  ~ hexo -v\nhexo-cli: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),t._v(".0\nos: Darwin "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19.0")]),t._v(".0 darwin x64\nnode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.12")]),t._v(".0\nv8: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.7")]),t._v(".299.13-node.12\nuv: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.32")]),t._v(".0\nzlib: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".11\nbrotli: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".7\nares: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.15")]),t._v(".0\nmodules: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),t._v("\nnghttp2: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.39")]),t._v(".2\nnapi: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nllhttp: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".4\nhttp_parser: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8")]),t._v(".0\nopenssl: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1d\ncldr: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("35.1")]),t._v("\nicu: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.2")]),t._v("\ntz: 2019a\nunicode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v("\n")])])]),s("h2",{attrs:{id:"创建-hexo-博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-hexo-博客"}},[t._v("#")]),t._v(" 创建 "),s("code",[t._v("hexo")]),t._v(" 博客")]),t._v(" "),s("p",[t._v("通过终端进入您想要创建博客的文件夹中，执行初始化命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("hexo init\n")])])]),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/2.png",alt:"图2"}})]),t._v(" "),s("p",[t._v("创建完毕后，我们可以看到生成了很多的文件及文件夹，如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/3.png",alt:"图3"}})]),t._v(" "),s("p",[t._v("其中比较主要的有：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v("          //用于存放博客的 markdown 文件，以及静态文件\n│   └── _posts      //博客的 markdown 文件\n├── themes          //存放博客主题\n└── _config.yml     //我们博客的配置文件，可以配置title、主题、发布地址等\n")])])]),s("p",[t._v("到这里，博客基本算是创建完毕了。")]),t._v(" "),s("h2",{attrs:{id:"预览博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览博客"}},[t._v("#")]),t._v(" 预览博客")]),t._v(" "),s("p",[t._v("在终端中，执行 "),s("code",[t._v("hexo s")]),t._v(" 启动服务器，我们就可以在浏览器中看到我们博客了。默认情况下，访问网址为 "),s("code",[t._v("http：//localhost：4000/")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/4.png",alt:"图4"}})]),t._v(" "),s("h2",{attrs:{id:"发布博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布博客"}},[t._v("#")]),t._v(" 发布博客")]),t._v(" "),s("p",[t._v("本章讲述的是将博客发布到 "),s("code",[t._v("GitHub")]),t._v(" 上，如果想发布到自己的服务器上，请酌情修改，基本上大同小异。")]),t._v(" "),s("h3",{attrs:{id:"建立一个博客仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立一个博客仓库"}},[t._v("#")]),t._v(" 建立一个博客仓库")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("我们需要准备一个 "),s("code",[t._v("GitHub")]),t._v(" 账号")]),t._v(" "),s("p",[t._v("首先我们需要一个GitHub账号，我想大家应该都有这个吧，如果没有请自行申请，这里我就不做赘述了。")])]),t._v(" "),s("li",[s("p",[t._v("创建一个用于存放博客的仓库")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/5.png",alt:"图5"}})]),t._v(" "),s("p",[t._v("网上大多数的人都建议创建一个如图所示的项目，即"),s("code",[t._v("xxx.github.io")]),t._v("，红框中的内容与账户名保持一致。PS.忽略图中红色的报错，我这边报错是因为我已经创建了相同名字的项目✧(≖ ◡ ≖✿)")]),t._v(" "),s("p",[s("strong",[t._v("小声哔哔：")]),s("br"),t._v("\n通过我的测试，其实项目起什么名字并不重要，都可以访问到，我觉得大多数人以"),s("code",[t._v("xxx.github.io")]),t._v("当项目名字，只是为了后期访问好看罢了🙄")])])]),t._v(" "),s("h3",{attrs:{id:"安装博客发布工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装博客发布工具"}},[t._v("#")]),t._v(" 安装博客发布工具")]),t._v(" "),s("p",[t._v("为了方便快捷的将我们本地的博客发布到 "),s("code",[t._v("GitHub")]),t._v(" 上，建议大家安装 "),s("code",[t._v("hexo-deployer-git")]),t._v(" 自动部署发布工具。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装插件")]),t._v(" "),s("p",[t._v("在博客的根目录执行 "),s("code",[t._v("npm install hexo-deployer-git --save")]),t._v(" "),s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/6.png",alt:"图6"}})])]),t._v(" "),s("li",[s("p",[t._v("修改配置文件")]),t._v(" "),s("p",[t._v("发布工具安装完毕后，我们还需要在"),s("code",[t._v("_config.yml")]),t._v("文件中配置一下我们的GitHub的地址，否则我们上传到哪去呢，是不是？<(￣︶￣)>")]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("_config.yml")]),t._v("文件，搜索"),s("code",[t._v("deploy")]),t._v("，这个就是我们要配置的地方了，如果没有就在文件的最后添加下面的代码。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("deploy：\n type： "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n repo： github上的项目地址\n")])])]),s("p",[s("strong",[t._v("注：")]),s("br"),t._v("\n1.上面的配置中，冒号和你填写的内容间一定要有个空格，这是标准的格式，没得谈！！！"),s("br"),t._v("\n2.有的同学可能会问可不可以发布到某个分支上，答案是不能。原因请看下图，箭头所指处，明确说明"),s("code",[t._v("User pages must be built from the master branch.")]),t._v(" "),s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/7.png",alt:"图7"}})])])]),t._v(" "),s("h3",{attrs:{id:"编译-部署博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译-部署博客"}},[t._v("#")]),t._v(" 编译&部署博客")]),t._v(" "),s("p",[t._v("接下来就剩下发布这一步了，在终端中进入博客的根目录，执行：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("hexo clean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hexo d\n")])])]),s("p",[t._v("当您看到 "),s("code",[t._v("INFO Deploy done： git")]),t._v(" 时，就说明您的博客成功发布到GitHub上了，通过访问 "),s("code",[t._v("http：//xxx.github.io/")]),t._v("，就可以访问到您的博客了，记得把 "),s("code",[t._v("xxx")]),t._v(" 换成您的项目名。\n"),s("img",{attrs:{src:"http://img.zhangpeng.site/2017/11/26/8.png",alt:"图8"}})]),t._v(" "),s("h3",{attrs:{id:"日常更新博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日常更新博客"}},[t._v("#")]),t._v(" 日常更新博客")]),t._v(" "),s("p",[t._v("当新写了博客文章，或者是修改了主题，仅需通过终端，进入本地博客的根目录，执行"),s("code",[t._v("hexo clean && hexo g && hexo d")]),t._v("。然后就可以在博客中看到最新的文章或是主题了。")]),t._v(" "),s("h2",{attrs:{id:"附"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附"}},[t._v("#")]),t._v(" 附")]),t._v(" "),s("p",[t._v("具体Hexo的命令，可以在"),s("RouterLink",{attrs:{to:"/learn/https：//hexo.io/zh-cn/docs/"}},[t._v("Hexo官网")]),t._v("中找到")],1),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("Title: 搭建 Hexo Blog")]),t._v(" "),s("p",[t._v("Date: 2017.11.26")]),t._v(" "),s("p",[t._v("Author: zhangpeng")]),t._v(" "),s("p",[t._v("Github: "),s("a",{attrs:{href:"https://github.com/fullstack-zhangpeng",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/fullstack-zhangpeng"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);