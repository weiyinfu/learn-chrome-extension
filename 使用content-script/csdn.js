/**
 * CSDN去广告
 * */
function hide(ele) {
    console.log('hide', ele)
    var a = document.querySelectorAll(ele)
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = 'none'
    }
    return a.length > 0
}

function doHide() {
    hide("#wrapper")
    hide("#layerd")
    hide(".csdn-tracking-statistics")
    hide("#nav_show_top_stop")
}

var cnt = 0

function time() {
    cnt += 1
    if (cnt > 3) return
    doHide()
    setTimeout(time, cnt * 1000)
}

time()