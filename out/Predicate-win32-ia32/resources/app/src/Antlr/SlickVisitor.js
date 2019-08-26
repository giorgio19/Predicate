// Generated from Slick.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SlickParser.

function SlickVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SlickVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SlickVisitor.prototype.constructor = SlickVisitor;

// Visit a parse tree produced by SlickParser#doc.
SlickVisitor.prototype.visitDoc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#proof.
SlickVisitor.prototype.visitProof = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#standardProof.
SlickVisitor.prototype.visitStandardProof = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#startExpo.
SlickVisitor.prototype.visitStartExpo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#endExpo.
SlickVisitor.prototype.visitEndExpo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#proofHead.
SlickVisitor.prototype.visitProofHead = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#sep.
SlickVisitor.prototype.visitSep = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#TheoremHeader.
SlickVisitor.prototype.visitTheoremHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#ExerciseHeader.
SlickVisitor.prototype.visitExerciseHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#BibleTheorem.
SlickVisitor.prototype.visitBibleTheorem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#AdHocTheorem.
SlickVisitor.prototype.visitAdHocTheorem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#method.
SlickVisitor.prototype.visitMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#PreviousTheoremMethod.
SlickVisitor.prototype.visitPreviousTheoremMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#LeftEquivalesRightMethod.
SlickVisitor.prototype.visitLeftEquivalesRightMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#RightEquivalesLeftMethod.
SlickVisitor.prototype.visitRightEquivalesLeftMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#LeftImpliesRightMethod.
SlickVisitor.prototype.visitLeftImpliesRightMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#RightFollowsLeftMethod.
SlickVisitor.prototype.visitRightFollowsLeftMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#AssumingConjunctsMethod.
SlickVisitor.prototype.visitAssumingConjunctsMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#ContradictionMethod.
SlickVisitor.prototype.visitContradictionMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#ContrapositiveMethod.
SlickVisitor.prototype.visitContrapositiveMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#caseProof.
SlickVisitor.prototype.visitCaseProof = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#caseVariable.
SlickVisitor.prototype.visitCaseVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#caseList.
SlickVisitor.prototype.visitCaseList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#case1.
SlickVisitor.prototype.visitCase1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#case2.
SlickVisitor.prototype.visitCase2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#caseProof1.
SlickVisitor.prototype.visitCaseProof1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#caseProof2.
SlickVisitor.prototype.visitCaseProof2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#step.
SlickVisitor.prototype.visitStep = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#ImplicationExpr.
SlickVisitor.prototype.visitImplicationExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#EquivalenceExpr.
SlickVisitor.prototype.visitEquivalenceExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#Atom.
SlickVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#RelativeExpr.
SlickVisitor.prototype.visitRelativeExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#SetEnumExpr.
SlickVisitor.prototype.visitSetEnumExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#ArrayExpr.
SlickVisitor.prototype.visitArrayExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#FunctionCallExpr.
SlickVisitor.prototype.visitFunctionCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#AdditionExpr.
SlickVisitor.prototype.visitAdditionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#LeibnizExpr.
SlickVisitor.prototype.visitLeibnizExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#SetCompExpr.
SlickVisitor.prototype.visitSetCompExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#GeneralExpr.
SlickVisitor.prototype.visitGeneralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#InverseCallExpr.
SlickVisitor.prototype.visitInverseCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#ParenExpr.
SlickVisitor.prototype.visitParenExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#QuantExpr.
SlickVisitor.prototype.visitQuantExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#JunctionExpr.
SlickVisitor.prototype.visitJunctionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#TSExpr.
SlickVisitor.prototype.visitTSExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#UnaryPrefixExpr.
SlickVisitor.prototype.visitUnaryPrefixExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#EmptyRExpr.
SlickVisitor.prototype.visitEmptyRExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#hint.
SlickVisitor.prototype.visitHint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#hintOp.
SlickVisitor.prototype.visitHintOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#varlist.
SlickVisitor.prototype.visitVarlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#exprlist.
SlickVisitor.prototype.visitExprlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#emptyRangeExpr.
SlickVisitor.prototype.visitEmptyRangeExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#quantifiedExpr.
SlickVisitor.prototype.visitQuantifiedExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#setEnumeration.
SlickVisitor.prototype.visitSetEnumeration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#setComprehension.
SlickVisitor.prototype.visitSetComprehension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#inverseCall.
SlickVisitor.prototype.visitInverseCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#FunctionDot.
SlickVisitor.prototype.visitFunctionDot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#FunctionParen.
SlickVisitor.prototype.visitFunctionParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SlickParser#typedVar.
SlickVisitor.prototype.visitTypedVar = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SlickVisitor = SlickVisitor;