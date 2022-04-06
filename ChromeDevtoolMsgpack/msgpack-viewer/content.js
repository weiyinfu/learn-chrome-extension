const msgpack = require("msgpack-lite");

function str2arraybuffer(s) {
    const buf = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) {
        buf[i] = s.charCodeAt(i);
    }
    return buf;
}

function go() {
    const s = document.body.childNodes[0].innerText;
    const buf = str2arraybuffer(s);
    console.log(buf.length, buf)
    console.log(msgpack.decode(buf))
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        go();
    }
}