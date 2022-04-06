// backgournd.htmlで動作→Scriptが読み込まれているだけのページ

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.pageAction.setIcon({
        tabId: tabId, 
        path:  "img/icon.png"
    });
    chrome.pageAction.show(tabId);
});

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details){
        return {"requestHeaders": details.requestHeaders};
    },
    {
        urls: [
            "http://*/*"
        ],
    },
    [
        "requestHeaders",
        "blocking"
    ]
);

chrome.webRequest.onHeadersReceived.addListener(
    function(details){
        var isMsgpack = false;
        details.responseHeaders.forEach(function(header) {
            if (header.name === "Content-Type" && header.value === "application/x-msgpack") {
                isMsgpack = true;
                header.value = "text/html";
            }
        });
        console.log("isMsgpack:", isMsgpack);
        return {"responseHeaders": details.responseHeaders};
    },
    {
        urls: [
            "http://*/*"
        ]
    },
    [
        "responseHeaders",
        "blocking"
    ]
);

//var issues = {};
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){

console.log("request---------");
console.log(request);
console.log("sender---------");
console.log(sender);

//        chrome.pageAction.show(sender.tab.id);
//        issues[sender.tab.id] = request.issues;
        sendResponse({tabid:sender.tab.id});
    }
);
