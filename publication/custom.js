console.log("custom.js loaded");
function ptxPrintSelector(selector) {
  const node = document.querySelector(selector);
  if (!node) {
    alert("Couldn't find the content to print.");
    return;
  }

  const w = window.open("", "_blank", "noopener,noreferrer");
  const doc = w.document;

  doc.open();
  doc.write(`<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Print</title>
  <style>
    body { font-family: serif; margin: 1in; }
    a { color: black; text-decoration: none; }
    .ptx-print-link { display: none !important; }
  </style>
</head>
<body>
  ${node.outerHTML}
</body>
</html>`);
  doc.close();

  w.focus();
  w.print();
  w.close();
}

document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("print-sec-01-01-notation");
  if (!link) return;

  link.classList.add("ptx-print-link");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    ptxPrintSelector("#sec-01-01-notation");
  });
});
