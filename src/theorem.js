const theoremsStr = require('./Antlr/theoremsFormat.json');
$(document).ready(function () {
	createTable();
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
});

function createTable() {
	// $("#accBegin").prepend("<input id='search' type='text' placeholder='Search..'>");
	// $("#accBegin").append("$\\text{Theorem Sections}$");
	var theorems = theoremsStr.theorems;
	var i = 0;
	var str = "<button class='accordion' style='top:70px;'>" + theorems[i].section + "</button><div class='panel'><table>" +
		"<tr>" +
		"<th>Rule</th>" +
		"<th>Name</th>" +
		"<th>Equation</th>" +
		"</tr><tr/>";
	str += "<tr><td>(" + theorems[i].rule.bold() + ")</td>";
	theorems[i].name != undefined ? str += "<td class = name>" + theorems[i].name + "</td>" : str += "<td class = name> </td>";
	str += "<td class='eq'>" + theorems[i].eq + "</td></tr>";
	for (i = 1; i < theorems.length; i++) {
		if (theorems[i].section != undefined) {
			str += "</table></div><button class='accordion'>" + theorems[i].section + "</button><div class='panel'><table>" +
				"<tr>" +
				"<th>Rule</th>" +
				"<th id = 'tName'>Name</th>" +
				"<th>Equation</th>" +
				"</tr><tr/>";
			str += "<tr><td>(" + theorems[i].rule.bold() + ")</td>";
			theorems[i].name != undefined ? str += "<td class = name>" + theorems[i].name + "</td>" : str += "<td class = name> </td>";
			str += "<td class='eq'>" + theorems[i].eq + "</td></tr>";
		} else {
			str += "<tr><td>" + "(" + theorems[i].rule.bold() + ")" + "</td>";
			theorems[i].name != undefined ? str += "<td class = name>" + theorems[i].name + "</td>" : str += "<td class = name> </td>";
			str += "<td class='eq'>" + theorems[i].eq + "</td></tr>";
		}
	}
	$("#theorems").append(str);
}


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

MathJax.Hub.Queue(["Typeset", MathJax.Hub, createTable.bible]);
