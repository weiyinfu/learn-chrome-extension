
# 创建级联菜单
通过指定id和parentId来确定父级菜单。  
```js
chrome.contextMenus.create({
    id: "OneTab",
    type: "normal",
    title: "OneTab",
});
chrome.contextMenus.create({
    id: "SendAllTabsToOneTab",
    type: "normal",
    title: "发送全部标签页至OneTab",
    parentId: "OneTab"
}, onMenuCreated);
```

# tab标签页的信息
其中比较有用的字段包括：
* active
* id
* title
* url

```plain
const tab={
    active: false
    audible: false
    autoDiscardable: true
    discarded: false
    favIconUrl: "http://open.chrome.360.cn/favicon.ico"
    height: 821
    highlighted: false
    id: 1999
    incognito: false
    index: 1
    mutedInfo: {muted: false}
    pinned: false
    selected: false
    status: "complete"
    title: "标签--扩展开发文档"
    url: "http://open.chrome.360.cn/extension_dev/tabs.html"
    width: 1440
    windowId: 2065
}
```

# 用户拖动标签的时候不能调用chrome.tabs.get

例如：代码
```js
chrome.tabs.onSelectionChanged.addListener((tabId, info) => {
    chrome.tabs.get(tabId, tab => {
        emitEvent({type: "select", tabId, info, tab})
    })
})
```
报错信息
```plain
Unchecked runtime.lastError: Tabs cannot be edited right now (user may be dragging a tab).
```

改正方法：使用定时器定时调用`chrome.tabs.get()`
```js
    chrome.tabs.onSelectionChanged.addListener((tabId, info) => {
        setTimeout(() => {
            chrome.tabs.get(tabId, tab => {
                emitEvent({type: "select", tabId, info, tab})
            })
        }, 150)
    })
```

# 推荐使用的chrome插件
* 有道词典Chrome画词插件
* 防止休眠或屏幕关闭
* Vue.js Devtool、React devtool、Redux devtool
* Stylus:样式管理器
* ModHeader：伪装header插件
* SwitchyOmega：代理切换工具
* AdblockPlus
* JSON Viewer
* video download helper，可以下载各种视频
* 防止休眠或屏幕关闭
* Vuejs devtools
* 有道词典Chrome划词插件
* Tampermonkey
* Stylus
* ProxySwitchyOmega
* ModHeader：修改header
* JSONViewer
* Charset：修改网站默认编码
* AdblockPlus
* 火狐标签页
* 附加组件管理
* 火狐新标签页
* 火狐主页
* 沙拉查词：划词查询，与有道词典划词插件是竞品
* 网页截图：网页截图工具
* Progressive Web Apps for Firefox：火狐PWA插件
* TreeStyleTab：树状标签页
* NewTabOverride
* DarkReader：夜间模式
* LeechBlock：封禁一些网站，坚决不看这些网站
* OneTab
* TabStash
# 我自己实现的Chrome插件
* lecodead：leetcode去广告插件
* 飞书目录
* 书签去重插件
* laterSee：一会儿再看
* 页面重写插件：新标签页重写、历史页重写、书签页重写
* feishu目录
* lecodead
* latersee
* TWP - Translate Web Pages：火狐上的网页翻译插件。
