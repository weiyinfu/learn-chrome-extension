chrome.runtime.sendMessage({}, function(response) {
    var res = document.body.innerHTML;

    var bytes = [];
    var i = 0;
    var len = res.length;
    for (; i < len; ++i) {
    
    byte = res.charCodeAt(i) & 0xff;
      bytes.push(byte);
    }
    console.log("res", res);
    console.log("bytes---");
    console.log(bytes);

    var unpackVal = msgpack.unpack(bytes);

    console.log("unpackVal---");
    console.log(unpackVal);
});
