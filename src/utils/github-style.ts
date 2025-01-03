export const githubStyle = `
body {
  font-family:      Helvetica, arial, sans-serif;
  font-size:        14px;
  line-height:      1.4em;
  background-color: white;
  padding-top:      10px;
  padding-bottom:   10px;
  padding-left:     25px;
  padding-right:    25px; }

body > *:first-child {
  margin-top:   0 !important; }
body > *:last-child {
  margin-bottom:0 !important; }

/* Smooth scrolling */
@media screen and (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/*Links*/
a {
  color:            #3973ad;
  text-decoration:  none;}
a:hover{
  /* text-decoration: underline; */
  color:            #4183C4;
}
a.absent {
  color:            #cc0000; }
a.anchor {
  display:          block;
  padding-left:     30px;
  margin-left:      -30px;
  cursor:           pointer;
  position:         absolute;
  top:              0;
  left:             0;
  bottom:           0; }

/*Headlines*/
h1, h2, h3, h4, h5, h6 {
  margin:       20px 0 10px;
  padding:      0;
  line-height:  1.4em;
  font-weight:  bold;
  -webkit-font-smoothing: antialiased;
  cursor:       text;
  position:   relative; }

h1 tt, h1 code {
  font-size: inherit; }

h2 tt, h2 code {
  font-size: inherit; }

h3 tt, h3 code {
  font-size: inherit; }

h4 tt, h4 code {
  font-size: inherit; }

h5 tt, h5 code {
  font-size: inherit; }

h6 tt, h6 code {
  font-size: inherit; }

h1 {
  font-size: 28px;
  color: black; }

h2 {
  font-size: 24px;
  border-bottom: 1px solid #cccccc;
  color: black; }

h3 {
  font-size: 18px; }

h4 {
  font-size: 16px; }

h5 {
  font-size: 14px; }

h6 {
  color: #777777;
  font-size: 14px; }

p, blockquote, ul, ol, dl, li, table, pre {
  margin: 15px 0; }

/*Margins and paddings of the first line content*/
body > h2:first-child {
  margin-top: 0;
  padding-top: 0; }
body > h1:first-child {
  margin-top: 0;
  padding-top: 0; }
  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0; }
body > h3:first-child, body > h4:first-child, body > h5:first-child, body > h6:first-child {
  margin-top: 0;
  padding-top: 0; }

a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0; }

h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
  margin-top: 0;
}

/*Lists*/
ul li,ol li{
  margin-top:     .15em;
  margin-bottom:  .15em;
}
ul li li{
  margin-left:    -15px;
}
ul ul,ul ol,ol ol,ol ul{
  margin-top:     0;
  margin-bottom:  0em;
}

/*Footnotes*/
a[href^="#fn:"]:after{
    content:        ')';
    font-size:      0.83em;
    vertical-align: super;
    line-height:    0;
}
/*Highlights the BG of current jumped-to footnote:*/
li:target {
    background-color: #e8fef6;
}
.footnotes > ol > li > p {
    display:        inline;
}
.footnotes ol {
    list-style:     none;
    counter-reset:  footnotes;
    padding-left:   15px;
}
.footnotes ol li {
    counter-increment:footnotes;
}
.footnotes ol li:before {
    /* background-color: #e8fef6; */
    font-weight:      bold;
    /* counter-reset: footnotes; */
    content:          counters(footnotes, ".") ")";
}
.footnotes li {
    padding-bottom:     0.45em;
}
.footnotes {
    /* only use is for border, background-color of block */
	/* border: dashed 0px #f4f5f8; */
	background-color: #f4f5f8;
	padding:          0em 0em 0.25em 0em;
}
/*.footnotes:before{
    content:        "Footnotes";
    font-size:      1.2em;
    font-weight:    bold;
    line-height:    2.5em;
    padding-left:   0.5em;
}*/

/*TOC (for DEVONthink Markdown documents; for other editors, try e.g. ".toc")*/
.TOC {
    background:     #f4f5f8 none repeat scroll 0 0; //f3f6f6
    border:         0px solid #aaa;
    border-radius:  10px;
    display:        table;
    font-size:      95%;
    margin-bottom:  1em;
    padding-left:   2px;
    padding-top:    2px;
    padding-bottom: 2px;
    padding-right:  2px;
    width:          100%;
}

/*uncomment if you'd like to automatically add a title to your TOC:*/
/*.TOC:before {
    content:        "Table of Contents";
    font-weight:    bold;
    font-size:      1.1em;
    color:          #3973ad;
    padding-left:   1em;
    margin-bottom: -1em;
    line-height:    3em;
}*/

.TOC li, .TOC ul, .TOC ul li{
    list-style:     decimal;
}

.top-link {
  transition:       all .25s ease-in-out;
  position:         fixed;
  bottom:           0;
  right:            0;
  display:          inline-flex;
  color:            #000000;

  cursor:           pointer;
  align-items:      center;
  justify-content:  center;
  margin:           0 2em 2em 0;
  border-radius:    50%;
  padding:          .25em;
  width:            1em;
  height:           1em;
  background-color: #F8F8F8;
}

/*Check-Boxes/To-Do-Boxes (doesn't work in DEVONthink Markdown documents)*/
/* ul li.checkbox {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: #b2b2b2;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #b2b2b2;
  border-radius: 0.15em;
} */

/* input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: #b2b2b2;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #b2b2b2;
  border-radius: 0.15em;
}

input[type="checkbox"]::before {
  content: " ";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:checked::after {
  content: "_";
  color: #cdef9a;
  box-shadow: inset 4em 2em #cdef9a;
}

.task-list-item {
  list-style-type: none;
  margin-top: 0px;
  margin-bottom: 0px;
}

.task-list-item input {
  margin: 0 0.2em .25em -1.6em;
  vertical-align: middle;
  padding-bottom: 0px;
  opacity: 1;
} */

/*Definition lists*/
dl {
  padding:            0; }
  dl dt {
    font-size:        14px;
    font-weight:      bold;
    font-style:       italic;
    padding:          0;
    margin:           15px 0 5px; }
    dl dt:first-child {
      padding:        0; }
    dl dt > :first-child {
      margin-top:     0; }
    dl dt > :last-child {
      margin-bottom:  0; }
  dl dd {
    margin:           0 0 15px;
    padding:          0 15px; }
    dl dd > :first-child {
      margin-top:     0; }
    dl dd > :last-child {
      margin-bottom:  0; }

/*Quotes*/
blockquote {
  border-left:        4px solid #dddddd;
  padding:            0 15px;
  font-style:         normal;
  color:              #5598c1; }  /* 777777 */
  blockquote > :first-child {
    margin-top:       0; }
  blockquote > :last-child {
    margin-bottom:    0; }

/*Tables*/
table {
  padding:            0;border-collapse: collapse;
  margin-left:        auto;
  margin-right:       auto;
  text-align:         center;}
  table tr {
    /* border-top: 1px solid #cccccc; */
    background-color: white;
    margin:           0;
    padding:          0; }
    table tr:nth-child(2n) {
      background-color: #f8f8f8; }
    table tr th {
      font-weight:    bold;
      /* border: 0.5px solid #cccccc; */
      /* border-left: 0.5px solid #cccccc;
      border-right: 0.5px solid #cccccc; */
      background-color: #eefbff;
      font-size:      14px;
      margin:         0;
      padding:        0.4em 0.35em 0.4em 0.35em; }
    table tr td {
      /* border: 1px solid #cccccc; */
      margin:         0;
       font-size:     14px;
       padding:       5px 5px; }
    table tr th :first-child, table tr td :first-child {
      margin-top:     0; }
    table tr th :last-child, table tr td :last-child {
      margin-bottom:  0; }

/*Images*/
img {
  max-width: 100%;}
/*Alternative: center Images*/
/* img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto; }
*/

/*Span*/
span.frame {
  display:      block;
  overflow:     hidden;
}
span.frame > span {
    border:     1px solid #dddddd;
    display:    block;
    float:      left;
    overflow:   hidden;
    margin:     13px 0 0;
    padding:    7px;
    width:      auto;
}
span.frame span img {
    display:    block;
    float:      left;
}
span.frame span span {
    clear:      both;
    color:      #333333;
    display:    block;
    padding:    5px 0 0;
}
span.align-center {
  display:      block;
  overflow:     hidden;
  clear:        both;
}
span.align-center > span {
    display:    block;
    overflow:   hidden;
    margin:     13px auto 0;
    text-align: center;
}
span.align-center span img {
    margin:     0 auto;
    text-align: center;
}
span.align-right {
  display:      block;
  overflow:     hidden;
  clear:        both;
}
span.align-right > span {
    display:    block;
    overflow:   hidden;
    margin:     13px 0 0;
    text-align: right;
}
span.align-right span img {
    margin:     0;
    text-align: right;
}
span.float-left {
  display:      block;
  margin-right: 13px;
  overflow:     hidden;
  float:        left;
}
span.float-left span {
    margin:     13px 0 0;
}
span.float-right {
  display:      block;
  margin-left:  13px;
  overflow:     hidden;
  float:        right;
}
span.float-right > span {
    display:    block;
    overflow:   hidden;
    margin:     13px auto 0;
    text-align: right;
}

/*Code blocks*/
code, tt {
    margin:             0 2px;
    padding:            0 5px;
    white-space:        nowrap;
    border:             1px solid #eaeaea;
    background-color:   #f8f8f8;
    border-radius:      3px;
}

pre code {
    margin:             0;
    padding:            0;
    white-space:        pre;
    border:             none;
    background:         transparent;
}

.highlight pre {
    background-color:   #f8f8f8;
    border:             1px solid #cccccc;
    font-size:          13px;
    line-height:        19px;
    overflow:           auto;
    padding:            6px 10px;
    border-radius:      3px;
}

/*Preformatted text*/
pre {
    background-color:   #f8f8f8;
    border:             1px solid #cccccc;
    /*font-size:          13px;*/
    font-size:          0.90em !important;
    line-height:        1.6em !important; //19px
    overflow:           auto;
    padding:            6px 10px;
    border-radius:      3px;
}
pre code, pre tt {
    background-color:   transparent;
    border:             none;
}

/*Superscript text*/
sup {
    font-size:          0.83em;
    vertical-align:     super;
    line-height:        0;
}

/*Subscript text*/
sub {
    font-size:          0.83em;
    vertical-align:     sub;
    line-height:        0;
}

/*Define keyboard input*/
kbd {
  display:            inline-block;
  padding:            3px 5px;
  font-size:          11px;
  line-height:        10px;
  color:              #555;
  vertical-align:     middle;
  background-color:   #fcfcfc;
  border:             solid 1px #ccc;
  border-bottom-color:#bbb;
  border-radius:      3px;
  box-shadow:         inset 0 -1px 0 #bbb
}

/*Color of highlighted text*/
mark {
  background-color: #fdfdcc;
  color: black;
}

/*Adjustments for printing*/
* {
	-webkit-print-color-adjust: exact;
}
@media screen and (min-width: 914px) {
    body {
        width:              854px;
        margin:             0 auto;
    }
}
@media print {
	table, pre {
		page-break-inside:  avoid;
	}
	pre {
		word-wrap:          break-word;
	}
  body {
    padding:                2cm;
  }
}
`