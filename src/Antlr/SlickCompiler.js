// // SlickCompiler.js

var antlr4 = require('antlr4/index');
const SlickListener = require('./SlickListener.js').SlickListener;
const SlickLexer = require('./SlickLexer.js').SlickLexer;
const SlickParser = require('./SlickParser.js').SlickParser;
const fs = require('fs');
const theoremsStr = require('./theorems.json');



class SlickCompiler extends SlickListener {
  constructor() {
    super();
    this.bible = {};
    let theorems = theoremsStr.theorems;
    for (let i = 0; i < theorems.length; i++) {
      let theorem = theorems[i];
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? "\\textbf{" + theorem.name + "}: ": " ") + theorem.eq;
    }
    this.preamble =
  '\\documentclass[11pt]{amsart} \n' +
  '\\usepackage{times} \n' +
  '\\usepackage{amssymb,latexsym}\n' +
  '\\usepackage[usenames, dvipsnames]{color}\n' +
  // '\\usepackage{ wasysym } \n\n' +

  '\\newcommand{\\lgap}{12pt}                            % Line gap \n' +
  '\\newcommand{\\slgap}{4pt}                            % Small line gap \n' +
  '\\newcommand{\\equivs}{\\ensuremath{\\;\\equiv\\;}}       % Equivales with space \n' +
  '\\newcommand{\\equivss}{\\ensuremath{\\;\\;\\equiv\\;\\;}}  % Equivales with double space \n' +
  '\\newcommand{\\nequiv}{\\ensuremath{\\not\\equiv}}       % Inequivalent \n' +
  '\\newcommand{\\impl}{\\ensuremath{\\Rightarrow}}        % Implies \n' +
  '\\newcommand{\\nimpl}{\\ensuremath{\\not\\Rightarrow}}   % Does not imply \n' +
  '\\newcommand{\\foll}{\\ensuremath{\\Leftarrow}}         % Follows from \n' +
  '\\newcommand{\\nfoll}{\\ensuremath{\\not\\Leftarrow}}    % Does not follow from \n' +
  '\\newcommand{\\proofbreak}{\\\\ \\\\ \\\\ \\\\} \n\n' +
  '% These macros are used for quantifications. Thanks to David Gries for sharing \n' +
  '\\newcommand{\\thedr}{\\rule[-.25ex]{.32mm}{1.75ex}}   % Symbol that separates dummy from range in quantification \n' +
  '\\newcommand{\\dr}{\\;\\,\\thedr\\,\\;}                    % Symbol that separates dummy from range, with spacing \n' +
  '\\newcommand{\\rb}{:}                                 % Symbol that separates range from body in quantification \n' +
  '\\newcommand{\\drrb}{\\;\\thedr\\,{:}\\;}                 % Symbol that separates dummy from body when range is missing \n' +
  '\\newcommand{\\all}{\\forall}                          % Universal quantification \n' +
  '\\newcommand{\\ext}{\\exists}                          % Existential quantification \n' +
  '\\newcommand{\\Gll} {\\langle}                         % Open hint \n' +
  '\\newcommand{\\Ggg} {\\rangle}                         % Close hint \n\n' +

  '% Proof \n' +
  '\\newcommand{\\Step}[1]{\\>{$#1$}} \n' +
  '\\newcommand{\\Hint}[1] {\\\\=\\>\\>\\ \\ \\ $\\Gll$\\ \\text{#1}\\ $\\Ggg$ \\\\}   % Single line hint \n' +
  '\\newcommand{\\done}{{\\color{BurntOrange} \\ \\ $//$}} \n\n' +

  '% Math symbols \\n' +
  '\\newcommand{\\nat}{\\mathbb{N}} \n' +
  '\\newcommand{\\real}{\\mathbb{R}} \n' +
  '\\newcommand{\\integer}{\\mathbb{Z}} \n' +
  '\\newcommand{\\bool}{\\mathbb{B}} \n\n' +

  '% Single and double quotes \n' +
  '\\newcommand{\\Lq}{\\mbox{`}} \n' +
  '\\newcommand{\\Rq}{\\mbox{\'}} \n' +
  '\\newcommand{\\Lqq}{\\mbox{``}} \n' +
  '\\newcommand{\\Rqq}{\\mbox{\'\'}} \n\n' +


  '\\oddsidemargin  0.0in \n' +
  '\\evensidemargin 0.0in \n' +
  '\\textwidth      6.5in \n' +
  '\\headheight     0.0in \n' +
  '\\topmargin      0.0in \n' +
  '\\textheight=9.0in \n' +
  '\\parindent=0in \n' +
  '\\pagestyle{empty} \n\n' +

  '\\begin{document} \n' +
  '\\begin{tabbing} \n' +
  '99.\\;\\=(m)\\;\\=\\kill \n';

    this.latex = {
          '⋀' : '\\wedge',
          '⋁' : '\\vee',
          '=' : '=',
          '≠' : '\\neq',
          '≡' : '\\equiv',
          '⇒' : '\\Rightarrow',
          '⇐' : '\\Leftarrow',
          '¬' : '\\neg',
          '≢' : '\\not \\equiv',
          '≔' : ':=',
          '*' : "\\star",
          '%' : "\\star",
          '∀' : "\\forall",
          '∃' : "\\exists",
          '∑' : "\\Sigma",
          '∏' : "\\Pi",
          '<' : '<',
          '>' : '>',
          '≤' : '\\leq',
          '≥' : '\\geq',
          '+' : '+',
          '-' : '-',
          '∪' : '\\cup',
          '∩' : '\\cap',
          '|:': '\\drrb',
          '|' : '\\dr'
        };
    this.input;
    this.output = "";
    this.chars;
    this.lexer;
    this.tokens;
    this.parser;
    this.listener = new SlickListener();
    this.stack = [];

    this.listener.exitDoc = (ctx) => {
      this.output += this.preamble;
      while (this.stack.length > 0) {
        this.output += this.stack.shift() + "\n";
      }
       this.output += "\\end{tabbing}\\end{document}\n\n";
    }

    this.listener.exitStartExpo = (ctx) => {
    if (ctx.EXPO()) {
      let expo = ctx.EXPO().toString();
      expo = expo.substr(3);
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

    this.listener.exitEndExpo = (ctx) => {
      if (ctx.EXPO()) {
        let expo = ctx.EXPO().toString();
        expo = expo.substr(3);
        expo = this.removeFm(expo);
        expo = this.formatExpo(expo);
        this.stack.push("\\\\\n\\text{" + expo);
      }
    }

    this.listener.enterStandardProof = (ctx) => {
      this.lineCount = 0;
    }

    this.listener.exitStandardProof = (ctx) => {
      let proofText = "";
      for (let i = 0; i < this.lineCount; i++) {
        proofText = this.stack.pop() + "\n" + proofText;
      }
      if (ctx.END()) {
        proofText += "\\done\n";
      }
      let head = "";
      if (ctx.proofHead()) {
        head = "\\underline{Proof}\\\\\\\\\n";
      }
      this.stack.push(head + proofText);
      this.lineCount = 0;
    }

    // this.listener.exitProof = (ctx) => {
    //   this.stack.push("\\done\n");
    // }

    this.listener.exitTheoremHeader = (ctx) => {
      let str = "";
      if (ctx.method()) {
        str = this.stack.pop();
      }
      str = this.stack.pop() + str + "\\\\\n";
      this.stack.push(str);
    }

    this.listener.exitExerciseHeader = (ctx) => {
      this.stack.push("\\underline{Exercise " + ctx.RULENUM() + "}\\\\\\\\\n");
    }

    this.listener.exitSep = (ctx) => {
      this.stack.push("\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n");
    }

    this.listener.exitAtom = (ctx) => {
      this.stack.push(ctx.getText());
    }

    this.listener.exitJunctionExpr = (ctx) => {
      let rhs = this.stack.pop();
      let lhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitImplicationExpr = (ctx) => {
      let rhs = this.stack.pop();
      let lhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitEquivalenceExpr = (ctx) => {
      let rhs = this.stack.pop();
      let lhs = this.stack.pop();
      let x = lhs + " " + this.latex[ctx.EQOP()] + " " + rhs;
      this.stack.push(x);
    }

    this.listener.exitUnaryPrefixExpr = (ctx) => {
      let rhs = this.stack.pop();
      let x = "\\neg " + rhs;
      this.stack.push(x);
    }

    this.listener.exitParenExpr = (ctx) => {
      let e = this.stack.pop();
      let x = "(" + e + ")";
      this.stack.push(x);
    }

    this.listener.exitLeibnizExpr = (ctx) => {
      let z = this.stack.pop();
      let v = ctx.VAR().getText();
      let e = this.stack.pop()
      let x = e + "^\{" + v + "\}_\{" + z + "\}";
      this.stack.push(x);
    }

    this.listener.exitStep = (ctx) => {
      this.stack.push("\\Step\{" + this.stack.pop() + "\}");
      this.lineCount++;
    }

    this.listener.exitHint = (ctx) => {
      let token = ctx.COMMENT().getText(); //this line does not generate a proper token
      token = token.substr(1, token.length - 2);
      token = this.removeFm(token);
      token = token.replace(/(\W)([B-Zb-z])(\W)/g, "$1\\textit{$2}$3");
      let op = this.stack.pop();
      this.stack.push("\\\\$" + this.latex[op] + "$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{" + token + "}\\ $\\Ggg$ \\\\");
      this.lineCount++;
    }

    this.listener.exitTheorem = (ctx) => {
      let theorem = this.bible[ctx.RULENUM().getText()];
      this.stack.push("Prove\\ " + theorem + "\\\\ \\\\\n");
    }

    this.listener.exitHintOp = (ctx) => {
      this.stack.push(ctx.getText());
    }

    this.listener.exitEmptyRangeExpr = (ctx) => {
      let q = this.latex[ctx.QUANTIFIER()];
      let body = this.stack.pop();
      let dummies = this.stack.pop();
      this.stack.push("(" + q + " " + dummies + " \\drrb " + body + ")");
    }

    this.listener.exitQuantifiedExpr = (ctx) => {
      let q = this.latex[ctx.QUANTIFIER()];
      let body = this.stack.pop();
      let range = this.stack.pop();
      let dummies = this.stack.pop();
      this.stack.push("(" + q + " " + dummies + " \\dr " + range + " : " + body + ")");
    }

    this.listener.exitBibleTheorem = (ctx) => {
      let proveOrReprove = ctx.PROVE();
      let theorem = this.bible[ctx.RULENUM()];
      this.stack.push("\\color{blue}" + proveOrReprove + "\\ " + theorem + "\\\\\n");
    }

    this.listener.exitAdHocTheorem = (ctx) => {
      let proveOrReprove = ctx.PROVE();
      let theorem = this.stack.pop();
      this.stack.push("\\color{blue}" + proveOrReprove + "\\ $" + theorem + "$\\\\\n")
    }

    this.listener.removeNewLine = () => {
      let e = this.stack.pop();
      e.replace(/\\\\\\\\$/, "\\\\");
      this.stack.push(e);
    }

    this.listener.exitAssumingConjunctsMethod = (ctx) => {
      this.stack.push("\\color{blue}by assuming the conjuncts of the antecedent\\\\\n");
    }

  this.listener.exitContradictionMethod = (ctx) => {
    this.stack.push("\\color{blue}by contradiction\\\\\n");
  }

  this.listener.exitContrapositiveMethod = (ctx) => {
    let cp = this.stack.pop();
    this.stack.push("\\color{blue}by proving the contrapositive: $" + cp + "$\\\\\n");
  }

  this.listener.exitPreviousTheoremMethod = (ctx) => {
    this.stack.push("\\color{blue}by showing equivalence to a previous theorem\\\\\n");
  }

  this.listener.exitLeftEquivalesRightMethod = (ctx) => {
    this.stack.push("\\color{blue}by showing the LHS is equivalent to the RHS\\\\\n");
  }

  this.listener.exitRightEquivalesLeftMethod = (ctx) => {
    this.stack.push("\\color{blue}by showing the RHS is equivalent to the LHS\\\\\n");
  }

  this.listener.exitRightFollowsLeftMethod = (ctx) => {
    this.stack.push("\\color{blue}by showing the RHS follows from the LHS\\\\\n");
  }

  this.listener.exitLeftImpliesRightMethod = (ctx) => {
    this.stack.push("\\color{blue}by showing the LHS implies the RHS\\\\\n");
  }

  this.listener.exitCaseProof = (ctx) => {
    let caseProof2 = this.stack.pop();
    let caseProof1 = this.stack.pop();
    let caseList = this.stack.pop();
    let theorem = this.stack.pop();
    this.stack.push(theorem + "\\color{blue}by case analysis on " + ctx.VAR() + "\\\\ \\\\\n"
        + caseList + "\\\\" + caseProof1 + caseProof2);
  }

  this.listener.exitCaseList = (ctx) => {
    let case2 = this.stack.pop();
    let case1 = this.stack.pop();
    this.stack.push("Must prove\\\\\\>" + case1 + "\\\\\\>" + case2
        + "\\\\");
  }

  this.listener.exitCase1 = (ctx) => {
    let e = this.stack.pop();
    this.stack.push("(1)\\>$" + e + "$");
  }

  this.listener.exitCase2 = (ctx) => {
    let e = this.stack.pop();
    this.stack.push("(2)\\>$" + e + "$");
  }

  this.listener.exitCaseProof1 = (ctx) => {
    let p = this.stack.pop();
    this.stack.push("(1) " + p + "\\\\\\\\");
  }

  this.listener.exitCaseProof2 = (ctx) => {
    let p = this.stack.pop();
    this.stack.push("(2) " + p);
  }

  this.listener.exitFunctionDot = (ctx) => {
    let e = this.stack.pop();
    this.stack.push(ctx.VAR() + "." + e);
  }

  this.listener.exitFunctionParen = (ctx) => {
    let e = this.stack.pop();
    this.stack.push(ctx.VAR() + "(" + e + ")");
  }

  this.listener.enterExprlist = (ctx) => {
    this.stack.push("XXXXXXXXXX");
  }

  this.listener.exitExprlist = (ctx) => {
    let str = "";
    let i = 0;
    let e = this.stack.pop();
    while (e !== "XXXXXXXXXX") {
      str = e + (i > 0? ", ": "") + str;
      e = this.stack.pop();
      i++;
    }
    this.stack.push(str);
  }

  this.listener.enterVarlist = (ctx) => {
    this.stack.push("VVVVVVVVVV");
  }

  this.listener.exitVarlist = (ctx) => {
    let str = "";
    let i = 0;
    let v = this.stack.pop();
    while (v !== "VVVVVVVVVV") {
      str = v + (i > 0? ", ": "") + str;
      v = this.stack.pop();
      i++;
    }
    this.stack.push(str);
  }

  this.listener.exitTypedVar = (ctx) => {
    this.stack.push(ctx.VAR() + (ctx.TYPE()? " : " + ctx.TYPE() : ""));
  }

  this.listener.exitRelativeExpr = (ctx) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    this.stack.push(lhs + " " + this.latex[ctx.RELOP()] + " " + rhs);
  }

  this.listener.exitAdditionExpr = (ctx) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    this.stack.push(lhs + " " + this.latex[ctx.ADDOP()] + " " + rhs);
  }

  this.listener.exitTSExpr = (ctx) => {
    let eList = this.stack.pop();
    let vList = this.stack.pop();
    let e = this.stack.pop();
    this.stack.push(e + "[" + vList + " := " + eList + "]");
  }

  this.listener.exitInverseCall = (ctx) => {
    let f = this.stack.pop();
    let finv = f.substr(0,1) + "^{-1}" + f.substr(1);
    this.stack.push(finv);
  }

  this.listener.exitArrayExpr = (ctx) => {
    let index = this.stack.pop();
    let arrayName = ctx.VAR();
    this.stack.push(arrayName + "[" + index + "]");
  }

  this.listener.exitGeneralExpr = (ctx) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    this.stack.push(lhs + " " + "\\star " + rhs);
  }


  }

  removeFm(s) {
    let ops = Object.keys(this.latex);
      for (let i = 0; i < ops.length; i++) {
        s = s.replace(new RegExp("\\" + ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
      }
      return s;
  }

  formatExpo(s) {
    s = s.replace(/\/\*/, "");
    s = s.replace(/\*\//, "");
    s = s.replace(/(\W)([B-Zb-z])(\W)/g, "$1\\textit{$2}$3");
    s = s.replace(/true/g, "\\textit{true}");
    s = s.replace(/false/g, "\\textit{false}");
    s = s.replace(/ /g, "\\ ");
    s = s.replace(/\n/g, "\}\\\\\n\\text\{");
    s = s.substr(0, s.length - 8);
    s += "\\\\\n"
    return s;
  }

  compile(data) {
    this.input = data;
    this.chars = new antlr4.InputStream(this.input);
    this.lexer = new SlickLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new SlickParser(this.tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.doc();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
    return this.output;
  }
}




exports.SlickCompiler = SlickCompiler;
