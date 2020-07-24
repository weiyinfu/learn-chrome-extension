function onload() {
  const bad = document.querySelectorAll(".question-disabled");
  for (let i = 0; i < bad.length; i++) {
    bad[i].parentElement.parentElement.parentElement.parentElement.style.display = 'none'
  }
  let descElement = document.querySelector("#currentPageDesc")
  if (!descElement) {
    const welcome = document.querySelector("#welcome").children[0]
    descElement = welcome.children[0].cloneNode(true);
    descElement.id = "currentPageDesc";
    welcome.append(descElement);
  }
  const trs = document.querySelectorAll(".question-list-table tr")
  descElement.innerText = "当前页面题数" + trs.length;
  setTimeout(onload,1000)
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(onload, 1000)
  }
}