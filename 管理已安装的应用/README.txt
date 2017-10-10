本节涉及到的Chrome插件API：
1、创建tab
    chrome.tabs.create({
        'url': 'https://chrome.google.com/webstore',
        'selected': true
    })
2、获取全部应用
    chrome.management.getAll(function(res){console.log(JSON.stringify(res))})
3、