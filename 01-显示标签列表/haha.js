function list2string(li) {
  let s = ""
  for (let i of li) {
    s += `<li>${i}</li>`
  }
  return `<ul>${s}</ul>`
}

chrome.tabs.query({}, (tabs) => {
  document.querySelector(".tabs").innerHTML = list2string(tabs.map(x => `<a href="${x.url}" target="_blank">${x.title}</a>`));
  document.querySelector(".tabKeys").innerHTML = list2string(Object.keys(tabs[0]));
  //查看以下Chrome所具有的属性列表
  document.querySelector(".chromeKeys").innerHTML = list2string(Object.keys(chrome));
});

function sendMessages() {
  chrome.tabs.executeScript({
    code: `document.write('haha')`
  });
  let script = 'document.body.style.backgroundColor="black";';
  chrome.tabs.executeScript({
    code: script,
  })
}
/**
 * Chrome插件对事件要求比较严格，尽量少用onclick，多用addEventListener
 * */
document.addEventListener('DOMContentLoaded', function () {
  const ele = document.querySelector("#sendMessages");
  ele.addEventListener("click", sendMessages)
})

