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
  "badges-html",
  "contextual-badge-varition-html",
  "pill-badges-html",
  "collapse-html",
  "accordion-html",
  "simple-pagination-html",
  "working-icon-html",
  "disable-active-states-html",
  "sizing-html",
  "alignment-html",
  "sizing-lg-html",
  "img-round-corner-html",
  "img-circle-html",
  "img-thumbnail-html",
];
var c = [
  "badges-code",
  "contextual-badge-varition-code",
  "pill-badges-code",
  "collapse-code",
  "accordion-code",
  "simple-pagination-code",
  "working-icon-code",
  "disable-active-states-code",
  "sizing-code",
  "alignment-code",
  "sizing-lg-code",
  "img-round-corner-code",
  "img-circle-code",
  "img-thumbnail-code",
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
