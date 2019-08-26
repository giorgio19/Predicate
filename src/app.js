const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const ipcRenderer = require('electron').ipcRenderer

const fs = require('fs');
const latex = require('node-latex');
// const remote = require('electron').remote;
// const dialog = remote.require('electron').dialog;
const SlickCompiler = require('./Antlr/SlickCompiler').SlickCompiler
const Quill = require('quill');
window.$ = window.jQuery = require('jquery');

const padding = '     ';
const spacing = 5;
const equalsUnicode = '\u003D';
const impliesUnicode = '\u21D2';
const followsFromUnicode = '\u21d0';
const lessThanUnicode = '\u003C';
const greaterThanUnicode = '\u003E';
const doesNotEqualUnicode = '\u2260';
const leftBracketUnicode = '\u3008';
const rightBracketUnicode = '\u3009';
const hintUnicode = padding + leftBracketUnicode + '  ' + rightBracketUnicode;
const textSubUnicode = '\u2254';
const genQuantifierUnicode = '\u2605';
const lessThanOrEqUnicode = '\u2264';
const greaterThanorEqUnicode = '\u2265';
const elementOfUnicode = '\u2208';
const notElementOfUnicode = '\u2209';
const properSubsetOfUnicode = '\u2282';
const subsetOfUnicode = '\u2286';
const properSupersetOfUnicode = '\u2283';
const supersetOfUnicode = '\u2287';
const notProperSubsetOfUnicode = '\u2284';
const notSubsetOf = '\u2288';
const notProperSupersetOfUnicode = '\u2285';
const notSupersetOfUnicode = '\u2289';
const unionUnicode = '\u222a';
const intersectionUnicode = '\u2229';
const emptySetUnicode = '\u2205';
const conjunctionUnicode = '\u22c0';
const disjunctionUnicode = '\u22c1';
const equivalesUnicode = '\u2261';
const notEquivalesUnicode = '\u2262';
const doesNotImplyUnicode = '\u21cf';
const doesNotFollowFromUnicode = '\u21cd';
const universalQuantifierUnicode = '\u2200';
const existentialQuanitiferUnicode = '\u2203';
const endProofUnicode = '\u2571';
const integerUnicode = '\u2124';
const naturalUnicode = '\u2115';
const rationalUnicode = '\u211a';
const realUnicode = '\u211d';
const nextUnicode = '\u25cb';
const untilUnicode = '\u02af';
const alwaysUnicode = '\u25a1';
const eventuallyUnicode = '\u25c7';
const booleanSymbol = '𝔹';
const plusUnicode = '\u002B';

var bindings = {
	//for indented line
	padEnter: {
		key: 13,
		shiftKey: true,
		handler: function (range, context) {
			this.quill.insertText(range.index, '\n     ')
		}
	},

	//open and close ()[]{}
	parenthesis: {
		key: '9',
		shiftKey: true,
		handler: function (range, context) {
			this.quill.insertText(range.index, ' (  ) ');
			this.quill.setSelection(range.index + 3);
		}
	},
	curlyBrackets: {
		key: 219,
		shiftKey: true,
		handler: function (range, context) {
			this.quill.insertText(range.index, ' {  } ');
			this.quill.setSelection(range.index + 3);
		}
	},
	exerciseBrackets: {
		key: 219,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, '[[[' + '\n\n' + ']]]')
			this.quill.setSelection(range.index + 3);
		}
	},
	brackets: {
		key: 219,
		handler: function (range, context) {
			this.quill.insertText(range.index, ' [  ] ');
			this.quill.setSelection(range.index + 3);
		}
	},
	//left-hint
	leftBracket: {
		key: 'b',
		empty: false,
		prefix: /;l$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + leftBracketUnicode + ' ');
		}
	},
	//right-hint
	rightBracket: {
		key: 'b',
		empty: false,
		prefix: /;r$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + rightBracketUnicode + ' ');
		}
	},

	//hint bindings with inline bindings
	implies: {
		key: 'm',
		empty: false,
		prefix: /;i$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, impliesUnicode + hintUnicode);
				this.quill.setSelection(range.index + 6);
			} else {
				this.quill.insertText(range.index - 2, ' ' + impliesUnicode + ' ');
				// this.quill.setSelection(range.index + 1);
			}
		}
	},
	doesNotImply: {
		key: 'm',
		empty: false,
		prefix: /;ni$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + doesNotImplyUnicode + ' ');
		}
	},
	follows: {
		key: 'f',
		empty: false,
		prefix: /;f$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, followsFromUnicode + hintUnicode);
				this.quill.setSelection(range.index + 6);
			} else {
				this.quill.insertText(range.index - 2, ' ' + followsFromUnicode + ' ');
				// this.quill.setSelection(range.index + 1);
			}
		}
	},
	doesNotFF: {
		key: 'f',
		empty: false,
		prefix: /;nf$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + doesNotFollowFromUnicode + ' ');
		}
	},
	equals: { //may only need hint version
		key: 'q',
		empty: false,
		prefix: /;e$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, equalsUnicode + "  " + hintUnicode);
				this.quill.setSelection(range.index + 8);
			} else { //inline so would only be using equivales
				this.quill.insertText(range.index - 2, " " + equivalesUnicode + " ");
			}
		}
	},
	doesNotEquivale: {
		key: 'q',
		empty: false,
		prefix: /;ne$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + notEquivalesUnicode + ' ');
		}
	},
	less: {
		key: 't',
		empty: false,
		prefix: /;l$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, lessThanUnicode + "  " + hintUnicode);
				this.quill.setSelection(range.index + 8);
			} else {
				this.quill.insertText(range.index - 2, ' ' + lessThanUnicode + ' ');
				// this.quill.setSelection(range.index + 1);
			}
		}
	},
	lessE: {
		key: 'e',
		empty: false,
		prefix: /;l$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, lessThanOrEqUnicode + "  " + hintUnicode);
				this.quill.setSelection(range.index + 8);
			} else {
				this.quill.insertText(range.index - 2, ' ' + lessThanOrEqUnicode + ' ');
				// this.quill.setSelection(range.index + 1);
			}
		}
	},
	greater: {
		key: 't',
		empty: false,
		prefix: /;g$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, greaterThanUnicode + "  " + hintUnicode);
				this.quill.setSelection(range.index + 8);
			} else {
				this.quill.insertText(range.index - 2, ' ' + greaterThanUnicode + ' ');
				// this.quill.setSelection(range.index + 1);
			}
		}
	},
	greaterE: {
		key: 'e',
		empty: false,
		prefix: /;g$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			if (context.offset == 2) {
				this.quill.insertText(range.index - 2, greaterThanorEqUnicode + "  " + hintUnicode);
				this.quill.setSelection(range.index + 8);
			} else {
				this.quill.insertText(range.index - 2, ' ' + greaterThanorEqUnicode + ' ');
				// this.quill.setSelection(range.index + 1);
			}
		}
	},

	//non-hint bindings
	itRelation: {
		key: 't',
		empty: false,
		prefix: /;i$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ≺ ');
		}
	},
	ratRelation: {
		key: 't',
		empty: false,
		prefix: /;ra$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ⪯ ');
		}
	},
	inverseIt: {
		key: 't',
		empty: false,
		prefix: /;ii$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ≻ ');
		}
	},
	inverseRat: {
		key: 't',
		empty: false,
		prefix: /;ira$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 4, 4);
			this.quill.insertText(range.index - 4, ' ⪰ ');
		}
	},
	equivales: {
		key: 187,
		empty: false,
		prefix: /=$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + equivalesUnicode + ' ');
		}
	},
	notEquivales: {
		key: 187,
		empty: false,
		prefix: /!$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + notEquivalesUnicode + ' ');
		}
	},
	conjunction: {
		key: 'n',
		empty: false,
		prefix: /;a$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + conjunctionUnicode + ' ');
		}
	},
	conjunction2: {
		key: '7',
		shiftKey: true,
		empty: false,
		prefix: /&$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + conjunctionUnicode + ' ');
		}
	},
	disjunction: {
		key: 'r',
		empty: false,
		prefix: /;o$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + disjunctionUnicode + ' ');
		}
	},
	disjunction2: {
		key: 220,
		shiftKey: true,
		empty: false,
		prefix: /[|]$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + disjunctionUnicode + ' ');
		}
	},
	not: {
		key: '1',
		shiftKey: true,
		empty: false,
		prefix: /!$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ¬ ');
		}
	},
	textSub: {
		key: 187,
		empty: false,
		prefix: /:$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + textSubUnicode + ' ');
		}
	},
	arrow: {
		key: 190,
		shiftKey: true,
		empty: false,
		prefix: /-$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' → ');
		}
	},
	elementOf: {
		key: 'l',
		empty: false,
		prefix: /;e$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + elementOfUnicode + ' ');
		}
	},
	notElementOf: {
		key: 'l',
		empty: false,
		prefix: /;ne$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + notElementOfUnicode + ' ');
		}
	},
	union: {
		key: 'n',
		empty: false,
		prefix: /;u$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + unionUnicode + ' ');
		}
	},
	union2: {
		key: 220,
		empty: false,
		prefix: /[|]$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + unionUnicode + ' ');
		}
	},
	intersect: {
		key: 'n',
		empty: false,
		prefix: /;i$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + intersectionUnicode + ' ');
		}
	},
	intersect2: {
		key: '7',
		empty: false,
		prefix: /&$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ' + intersectionUnicode + ' ');
		}
	},
	division: {
		key: 191,
		empty: false,
		prefix: /[/]$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ÷ ');
		}
	},
	mult: {
		key: '8',
		shiftKey: true,
		empty: false,
		prefix: /[*]$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, ' ⋅ ');
		}
	},
	star: {
		key: 't',
		empty: false,
		prefix: /;s$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + genQuantifierUnicode);
		}
	},
	forAll: {
		key: 'a',
		empty: false,
		prefix: /;f$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + universalQuantifierUnicode);
		}
	},
	exists: {
		key: 'x',
		empty: false,
		prefix: /;e$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + existentialQuanitiferUnicode);
		}
	},
	properSub: {
		key: 'b',
		empty: false,
		prefix: /;S$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + properSubsetOfUnicode + ' ');
		}
	},
	notPropSub: {
		key: 'b',
		empty: false,
		prefix: /;nS$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + notProperSubsetOfUnicode + ' ');
		}
	},
	properSup: {
		key: 'p',
		empty: false,
		prefix: /;S$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, ' ' + properSupersetOfUnicode + ' ');
		}
	},
	notPropSup: {
		key: 'p',
		empty: false,
		prefix: /;nS$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + notProperSupersetOfUnicode + ' ');
		}
	},

	//heuristics
	header: {
		key: 'd',
		empty: false,
		prefix: /;hea$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 4, 4);
			this.quill.insertText(range.index - 4, 'Name:\t\t\t\t\nPin:\t\t\t\t\t\nClass:\t\t\t\t\nAssignment:\t\n\nProve ');
		}
	},
	exercise: {
		key: 'e',
		shiftKey: true,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'Exercise ' + '\n\n[[[' + '\n\n' + ']]]')
			this.quill.setSelection(range.index + 8);
		}
	},
	prove: {
		key: 'p',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'Prove ');
		}
	},
	proof: {
		key: 'p',
		shiftKey: true,
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'Proof:\n     ');
		}
	},
	endProof: {
		key: 'd',
		empty: false,
		prefix: /;en$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, ' ' + endProofUnicode + endProofUnicode);
		}
	},
	newProof: {
		key: 'w',
		empty: false,
		prefix: /;ne$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 3, 3);
			this.quill.insertText(range.index - 3, '\n------------------------------\n');
		}
	},
	showEquiv: {
		key: '1',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'by showing equivalence to a previous theorem');
		}
	},
	lhsEq: {
		key: '2',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'by showing the LHS is equivalent to the RHS');
		}
	},
	rhsEqL: {
		key: '3',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'by showing RHS is equivalent to the LHS');
		}
	},
	lhsI: {
		key: '4',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'by showing the LHS implies the RHS');
		}
	},
	lhsF: {
		key: '5',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'by showing the LHS follows from the RHS');
		}
	},
	assume: {
		key: '6',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, 'by assuming the conjuncts of the antecedent');
		}
	},
	whichIs: {
		key: 'w',
		empty: false,
		prefix: /;$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 1, 1);
			this.quill.insertText(range.index - 1, '\nwhich is ');
		}
	},
	textSubHeur: {
		key: 's',
		empty: false,
		prefix: /;t$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, 'textual subsitution ');
		}
	},

	//quantifier with formatting
	genQuant: {
		key: 'q',
		shiftKey: true,
		empty: false,
		prefix: /;g$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, '(' + genQuantifierUnicode + ' |  : ) ');
			this.quill.setSelection(range.index);
		}
	},
	universalQuant: {
		key: 'q',
		shiftKey: true,
		empty: false,
		prefix: /;u$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, '(' + universalQuantifierUnicode + ' |  : ) ');
			this.quill.setSelection(range.index);
		}
	},
	existentialQuant: {
		key: 'q',
		shiftKey: true,
		empty: false,
		prefix: /;e$/,
		handler: function (range, context) {
			this.quill.deleteText(range.index - 2, 2);
			this.quill.insertText(range.index - 2, '(' + existentialQuanitiferUnicode + ' |  : ) ');
			this.quill.setSelection(range.index);
		}
	}
}

var editor = new Quill('#editor', {
  modules: {
    toolbar: false,
    keyboard: {bindings: bindings}
  },
  placeholder: '     Enter your proof...',
  theme: 'snow'
});

//used for saving and loading filesw
var loadedfs;

//function to produce pdf
function print() {
var text = editor.getText();
  var compiler = new SlickCompiler();
  const input = compiler.compile(text);
  dialog.showSaveDialog({filters: [{name: 'pdf', extensions: ['pdf']},
  ]}, function(filename){
    const output = fs.createWriteStream(filename);
    const pdf = latex(input).pipe(output);
    pdf.on('error', err => console.error(err));
  });
  console.log(text);
  console.log(input);

}

//save as a .txt file
function saveFile() {
    if(!loadedfs) {
        dialog.showSaveDialog({ filters: [
            { name: 'txt', extensions: ['txt'] }
        ]}, function(filename) {
            if(filename === undefined) return;
            writeToFile(editor, filename);
        });
    }
    else {
        writeToFile(editor, loadedfs);
    }
}

//load in a .txt file
function loadFile() {
    dialog.showOpenDialog({ filters: [
        { name: 'txt', extensions: ['txt'] },
    ]}, function(filenames) {
        if(filenames === undefined) return;
        var filename = filenames[0];
        readFromFile(editor, filename);
        loadedfs = filename;
    })
}


//helper functions
function writeToFile(editor, filename) {
    var html = editor.getText();
    fs.writeFile(filename, html, function(err) {
        if(err) {
            return console.log(err);
        }
    });
}

function readFromFile(editor, filename) {
    fs.readFile(filename, "utf-8", function(err, data) {
        if(err) {
            console.log(err);
        }
        editor.setText(data);
    });
}

function theoremShow(){
	$('div.start').toggleClass("squeeze");
	$("div.contStart").toggleClass("theoremInline");
	$("div.tCont").toggleClass("theoremShow");
}

function popOut() {

	$("#slider").hide();
  document.getElementById("container").classList.toggle("resize");
  document.getElementById("pred").classList.toggle("recenter")
  ipcRenderer.send('resize');
	theoremShow();
	//may want to hide and uncheck slider
}


ipcRenderer.on('popIn', function(event, arg){
	console.log('communicated between three pages');
});
