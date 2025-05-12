var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-1-1",
  "level": "1",
  "url": "sec-section-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section 1.1",
  "body": " Section 1.1  Text of section.  The equation is famous.  Here is the quadratic formula:      A Venn diagram of two overlapping sets A and B.    See for a visualization of the overlap.  Example of Level Curves  Below is an interactive Desmos graph of level curves.  "
},
{
  "id": "venn-sets",
  "level": "2",
  "url": "sec-section-1-1.html#venn-sets",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A Venn diagram of two overlapping sets A and B.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "img-test-sec",
  "level": "1",
  "url": "img-test-sec.html",
  "type": "Section",
  "number": "2.1",
  "title": "Test Image Section",
  "body": " Test Image Section   Test image directly in main.ptx    "
},
{
  "id": "venn-direct",
  "level": "2",
  "url": "img-test-sec.html#venn-direct",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Test image directly in main.ptx   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
