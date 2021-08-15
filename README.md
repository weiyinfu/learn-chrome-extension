
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