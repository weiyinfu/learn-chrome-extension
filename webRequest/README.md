https://stackoverflow.com/questions/18534771/chrome-extension-how-to-get-http-response-body


From the article itself: The drawback for this method is that we have to keep the Chrome DevTools open all the time because DevTools extensions are only activated when DevTools is open
```js
chrome.devtools.network.onRequestFinished.addListener(request => {
request.getContent((body) => {
if (request.request && request.request.url) {
if (request.request.url.includes('facebook.com')) {

         //continue with custom code
         var bodyObj = JSON.parse(body);//etc.
      }
}
});
});
```
