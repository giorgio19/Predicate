const theoremsStr = require('./Antlr/theoremsFormat.json');

MathJax.Hub.Config({
	extensions: [
		"tex2jax.js",
		"MathEvents.js",
		"MathZoom.js",
		"toMathML.js",
		"TeX/noErrors.js",
		"TeX/noUndefined.js",
		"TeX/AMSmath.js",
		"TeX/AMSsymbols.js",
		"Safe.js"
	],
	jax: ["input/TeX", "output/CommonHTML"],
	messageStyle: "none",
	showMathMenu: false,
	skipStartupTypeset: true,
	tex2jax: {
		inlineMath: [
			["$", "$"],
			["\\(", "\\)"]
		],
		displayMath: [
			["$$", "$$"],
			["\\[", "\\]"]
		],
		processEscapes: true,
		processEnvironments: true,
		preview: "none"
	},
	TeX: {
		Macros: {
			lbag: "{\\lbrace\\hspace{-.2em}|\\;}",
			rbag: "{\\;|\\hspace{-.2em}\\rbrace}",
		}
	}
});

MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


$(document).ready(function () {
  createTable();
});

function createTable(){
    var theorems = theoremsStr.theorems;
    var tr;
    for (var i = 0; i < theorems.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + "(" + theorems[i].rule.bold() + ")" + "</td>");
        theorems[i].name != undefined ? tr.append("<td class = name>" + theorems[i].name + "</td>") : tr.append("<td class = name> </td>");
        theorems[i].eq != undefined ?
          tr.append("<td class='eq'>" + theorems[i].eq + "</td>")
          : tr.append("<td class='eq'>" + theorems[i].eqa + "</td>");
        $('table').append(tr);
    }

}
