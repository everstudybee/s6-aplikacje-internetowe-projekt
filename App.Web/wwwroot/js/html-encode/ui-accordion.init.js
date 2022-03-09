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
  "accordion1-html",
  "accordion2-html",
  "accordion3-html",
];
var c = [

  "accordion1-code",
  "accordion2-code",
  "accordion3-code",
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