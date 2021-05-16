function ignoreAll(){
  let buttons=document.querySelectorAll(".Zi--EyeSlash")
  for(let i=0;i<buttons.length;i++){
    buttons[i].parentElement.parentElement.click();
  }
}
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    const button=document.createElement("button")
    button.innerText="忽略全部"
    button.style.backgroundColor='blue'
    button.style.color='white'
    button.style.fontSize='20px'
    button.id='ignoreAll'
    button.onclick=ignoreAll;
    const parent=document.querySelector(".ToolsQuestionInvited-questionList")
    parent.insertBefore(button,parent.children[0])
  }
}


/**
 ,{
      "matches": ["https://www.zhihu.com/creator/featured-question/invited"],
      "css": [ ],
      "js": [ "zhihu.js"]
    }
 * */