# 基本结构
`manifest.json`是整个插件的说明书。

## 必需的字段
    "name": "My Extension",
    "version": "versionString",
    "manifest_version": 2,

用整数表示manifest文件自身格式的版本号，从chrome18开始，开发者指定版本号为2（2014年1月之后不可在用1，关于1和2的区别，可以参考如下文档 https://developer.chrome.com/extensions/manifestVersion ）
    
## 插件描述信息
    "description": "A plain text description",

    "icons": {
        "16": "icon16.png",
        "48": "icon48.png",
        "128": "icon128.png"
    },
    
128x128的图标将在webstore安装时候使用；48x48的图标在扩展管理页面需要这个图标；16x16的图标作为扩页面的fa网页图标
图标建议是png格式，因为png格式是对透明支持最好的,也可以用其他webkit支持的格式
注意：请只使用文档说明的图标大小。  
    
    "default_locale": "en"

支持国际化，可以指定默认语言。

## 浏览器行为信息
    "browser_action": {
        "default_icon": { // optional
                "16": "images/icon16.png", // optional
                "24": "images/icon24.png", // optional
                "32": "images/icon32.png" // optional
            },
        "default_title": "Google Mail", // optional; shown in tooltip
        "default_popup": "popup.html" // optional
    }
    
用 browser actions 可以在chrome主工具条的地址栏右侧增加一个图标

如果你想创建一个不总是可见的图标, 可以使用page action来代替browser action

default_popup当用户点击图标后出现，popup可以包含任意你想要的html内容，并且会自适应大小

此字段提供了一些API请参考（https://developer.chrome.com/extensions/browserAction）

例如：chrome.browserAction.onClicked.addListener(function(tab){...}) ,当用户点击图标时候的事件监听

# 权限列表
* tabs:允许chrome.tabs迭代时访问标签的url和tab属性
* activeTab:允许对当前标签页使用executeScript函数
