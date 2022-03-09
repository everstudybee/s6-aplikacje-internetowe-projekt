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
  "stacked-horizontal-html",
  "mobile-desktop-html",
  "mobile-tablet-desktop-html",
  "responsive-column-reset-html",
  "offsetting-column-html",
  "gutter-html",
  "order-classes-html",
  "nesting-html",
];
var c = [
  
  "stacked-horizontal-code",
  "mobile-desktop-code",
  "mobile-tablet-desktop-code",
  "responsive-column-reset-code",
  "offsetting-column-code",
  "gutter-code",
  "order-classes-code",
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