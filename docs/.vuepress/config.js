module.exports = {
    title: "blog",
    description: 'Just a blog site',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        subSidebar: 'auto',
        valineConfig: {
            appId: 'Wc0xV1kr4C46mVbpgmA5jTgO-gzGzoHsz',// your appId
            appKey: 'e1wHasMdWtVIzwqc1PhqkQh9', // your appKey
        },
        author: 'zhangpeng',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            // { text: 'Guide', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/fullstack-zhangpeng' },
        ],
        sidebar: [
            {
                title: 'Golang',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'go/go-command',
                    'go/go'
                ]
            },
            {
                title: 'Flutter',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'flutter/install-flutter'
                ]
            },
            {
                title: 'iOS',   // 必要的
                //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'ios/initializer',
                    'ios/create-pod',
                    'ios/sandbox',
                    'ios/block-statement',
                    'ios/rac-eventbus-rxjava',
                    'ios/dynamic-icon',
                    'ios/sirikit',
                    'ios/gcd',
                    'ios/cocoapods',
                    'ios/message-forwarding',
                    'ios/nsmethodsignature-nsinvocation',
                    'ios/build-failed',
                    'ios/hook-system-delegate-method',
                    'ios/create-qr-code',
                    'ios/wkwebview',
                    'ios/interview',
                    'ios/double-to-nsstring',
                    'ios/widget-development',
                    'ios/widget-configuration',
                    'ios/read-pdf-with-cryptographic-seal'
                ]
            },
            {
                title: 'LeetCode',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'leetcode/two-sum',
                    'leetcode/valid-parentheses'
                ]
            },
            {
                title: 'Mac',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'mac/update-git-version',
                    'mac/install-charles-certificate',
                    'mac/a-better-terminal',
                    'mac/reinstall-mac-system'
                ]
            },
            {
                title: 'Ubuntu',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'ubuntu/install-mysql'
                ]
            },
            {
                title: '随见随学',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'learn/clean-up-git-repository',
                    'learn/judge-algorithm-quality',
                    'learn/keep-alive-ssh',
                    'learn/introduction-to-shell',
                    'learn/introduction-to-appleScript',
                    'learn/set-up-hexo-blog',
                ]
            },
            {
                title: '基础知识',   // 必要的
                // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                // sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    'basicknowledge/date-formatter',
                    'basicknowledge/introduction-to-restful',
                    'basicknowledge/http-status-code',
                    'basicknowledge/bit-operation',
                    'basicknowledge/uri-url-urn',
                ]
            },
        ],
    }
}