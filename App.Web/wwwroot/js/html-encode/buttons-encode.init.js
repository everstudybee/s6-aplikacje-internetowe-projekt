// var text = document.querySelector("#btn-general-html").innerHTML;

// function showHTML(text) {
//   var map = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&#039;",
//   };

//   return text.replace(/[&<>"']/g, function (m) {
//     return map[m];
//   });
// }
// document.querySelector("#btn-general-code").innerHTML =  showHTML(text);
var a = [
  "btn-general-html",
  "btn-tags-html",
  "btn-outline-html",
  "rounded-buttons-html",
  "rounded-outlined-html",
  "button-sizes-html",
  "button-sizes-rounded-html",
  "block-button-html",
  "rounded-block-btn-html",
  "block-outline-btn-html",
  "rounded-outline-block-html",
  "large-block-btn-html",
  "btn-genral-icon-html",
  "btn-icon-html",
  "rounded-btn-icon-html",
  "outline-btn-icon-html",
  "outline-btn2-icon-html",
  "rounded-btn2-icon-html",
  "btn-dropdown-html",
  "split-dropdown-html",
  "large-dropdown-html",
  "animated-drop-html",
  "animated-drop-icon-html",
  "circle-btn-html",
  "group-btn-html",
  "btn-toolbar-pagination-html",
  "btn-toolbar-input-group-html",
  "btn-toolbar-justify-input-html",
  "group-btn-sizing-html",
  "nesting-html",
];
var c = [
  
  "btn-general-code",
  "btn-tags-code",
  "btn-outline-code",
  "rounded-buttons-code",
  "rounded-outlined-code",
  "button-sizes-code",
  "button-sizes-rounded-code",
  "block-button-code",
  "rounded-block-btn-code",
  "block-outline-btn-code",
  "rounded-outline-block-code",
  "large-block-btn-code",
  "btn-genral-icon-code",
  "btn-icon-code",
  "rounded-btn-icon-code",
  "outline-btn-icon-code",
  "outline-btn2-icon-code",
  "rounded-btn2-icon-code",
  "btn-dropdown-code",
  "split-dropdown-code",
  "large-dropdown-code",
  "animated-drop-code",
  "animated-drop-icon-code",
  "circle-btn-code",
  "group-btn-code",
  "btn-toolbar-pagination-code",
  "btn-toolbar-input-group-code",
  "btn-toolbar-justify-input-code",
  "group-btn-sizing-code",
  "nesting-code",
];

function elem(ea) {
  return document.getElementById(ea).innerHTML;
}

for (var i = 0; i < a.length; i++) {
  var m = elem(a[i]);
  var b = m.split(">");
  var replaceBracket = i == b.length - 1 ? "" : "";
  document.getElementById(c[i]).textContent += m + replaceBracket + " \r\n";
}
