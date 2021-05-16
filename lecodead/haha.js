function onload() {
    let descElement = document.querySelector("#currentPageDesc")
    if (!descElement) {
        const welcome = document.querySelector("#welcome").children[0]
        descElement = welcome.children[0].cloneNode(true);
        descElement.id = "currentPageDesc";
        welcome.append(descElement);
    }
    const trs = document.querySelectorAll(".question-list-table tr")
    let count=0;
    for(let i=0;i<trs.length;i++){
        if(trs[i].querySelector(".question-disabled")){
            trs[i].style.display='none';
        }else{
            trs[i].style.display='table-row';
            count++;
        }
    }
    descElement.innerText = "当前页面题数" + count;
    setTimeout(onload, 1000)
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        setTimeout(onload, 1000)
    }
}