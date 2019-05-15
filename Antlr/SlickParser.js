// Generated from Slick.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SlickListener = require('./SlickListener').SlickListener;
var SlickVisitor = require('./SlickVisitor').SlickVisitor;

var grammarFileName = "Slick.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003C\u0168\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002E\n\u0002\f\u0002\u000e\u0002H\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u0003L\n\u0003\u0003\u0004\u0005\u0004O\n\u0004\u0003\u0004",
    "\u0005\u0004R\n\u0004\u0003\u0004\u0005\u0004U\n\u0004\u0003\u0004\u0005",
    "\u0004X\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004^\n\u0004\f\u0004\u000e\u0004a\u000b\u0004\u0003\u0004\u0005\u0004",
    "d\n\u0004\u0003\u0004\u0005\u0004g\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0006\bp\n\b\r\b",
    "\u000e\bq\u0003\t\u0003\t\u0005\tv\n\t\u0003\t\u0003\t\u0005\tz\n\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0082\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00b6\n\f",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u00f3\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0007\u0015\u0115\n\u0015\f\u0015\u000e\u0015\u0118\u000b\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0007\u0018\u0122\n\u0018\f\u0018\u000e\u0018",
    "\u0125\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u012a",
    "\n\u0019\f\u0019\u000e\u0019\u012d\u000b\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0007\u001c\u0144\n\u001c\f\u001c\u000e\u001c\u0147\u000b",
    "\u001c\u0005\u001c\u0149\n\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0005\u001f\u0161\n\u001f\u0003 \u0003 \u0003 \u0005 \u0166",
    "\n \u0003 \u0002\u0003(!\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>\u0002\u0003\u0004\u0002",
    "==?@\u0002\u0178\u0002@\u0003\u0002\u0002\u0002\u0004K\u0003\u0002\u0002",
    "\u0002\u0006N\u0003\u0002\u0002\u0002\bh\u0003\u0002\u0002\u0002\nj",
    "\u0003\u0002\u0002\u0002\fl\u0003\u0002\u0002\u0002\u000eo\u0003\u0002",
    "\u0002\u0002\u0010y\u0003\u0002\u0002\u0002\u0012\u0081\u0003\u0002",
    "\u0002\u0002\u0014\u0083\u0003\u0002\u0002\u0002\u0016\u00b5\u0003\u0002",
    "\u0002\u0002\u0018\u00b7\u0003\u0002\u0002\u0002\u001a\u00c1\u0003\u0002",
    "\u0002\u0002\u001c\u00c7\u0003\u0002\u0002\u0002\u001e\u00cc\u0003\u0002",
    "\u0002\u0002 \u00cf\u0003\u0002\u0002\u0002\"\u00d2\u0003\u0002\u0002",
    "\u0002$\u00d5\u0003\u0002\u0002\u0002&\u00d8\u0003\u0002\u0002\u0002",
    "(\u00f2\u0003\u0002\u0002\u0002*\u0119\u0003\u0002\u0002\u0002,\u011c",
    "\u0003\u0002\u0002\u0002.\u011e\u0003\u0002\u0002\u00020\u0126\u0003",
    "\u0002\u0002\u00022\u012e\u0003\u0002\u0002\u00024\u0136\u0003\u0002",
    "\u0002\u00026\u013f\u0003\u0002\u0002\u00028\u014c\u0003\u0002\u0002",
    "\u0002:\u0154\u0003\u0002\u0002\u0002<\u0160\u0003\u0002\u0002\u0002",
    ">\u0162\u0003\u0002\u0002\u0002@F\u0005\u0004\u0003\u0002AB\u0005\u000e",
    "\b\u0002BC\u0005\u0004\u0003\u0002CE\u0003\u0002\u0002\u0002DA\u0003",
    "\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002",
    "FG\u0003\u0002\u0002\u0002G\u0003\u0003\u0002\u0002\u0002HF\u0003\u0002",
    "\u0002\u0002IL\u0005\u0006\u0004\u0002JL\u0005\u0018\r\u0002KI\u0003",
    "\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002L\u0005\u0003\u0002\u0002",
    "\u0002MO\u0005\u0010\t\u0002NM\u0003\u0002\u0002\u0002NO\u0003\u0002",
    "\u0002\u0002OQ\u0003\u0002\u0002\u0002PR\u0005\b\u0005\u0002QP\u0003",
    "\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002\u0002\u0002",
    "SU\u0005\f\u0007\u0002TS\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002UW\u0003\u0002\u0002\u0002VX\u0007\u0003\u0002\u0002WV\u0003\u0002",
    "\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y_\u0005",
    "&\u0014\u0002Z[\u0005*\u0016\u0002[\\\u0005&\u0014\u0002\\^\u0003\u0002",
    "\u0002\u0002]Z\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002\u0002",
    "a_\u0003\u0002\u0002\u0002bd\u0007C\u0002\u0002cb\u0003\u0002\u0002",
    "\u0002cd\u0003\u0002\u0002\u0002df\u0003\u0002\u0002\u0002eg\u0005\n",
    "\u0006\u0002fe\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002g\u0007",
    "\u0003\u0002\u0002\u0002hi\u00075\u0002\u0002i\t\u0003\u0002\u0002\u0002",
    "jk\u00075\u0002\u0002k\u000b\u0003\u0002\u0002\u0002lm\u0007\u0004\u0002",
    "\u0002m\r\u0003\u0002\u0002\u0002np\u0007\u0005\u0002\u0002on\u0003",
    "\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002",
    "qr\u0003\u0002\u0002\u0002r\u000f\u0003\u0002\u0002\u0002su\u0005\u0012",
    "\n\u0002tv\u0005\u0014\u000b\u0002ut\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vz\u0003\u0002\u0002\u0002wx\u0007\u0006\u0002\u0002",
    "xz\u00077\u0002\u0002ys\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002",
    "\u0002z\u0011\u0003\u0002\u0002\u0002{|\u00076\u0002\u0002|}\u0007\u0007",
    "\u0002\u0002}~\u00077\u0002\u0002~\u0082\u0007\b\u0002\u0002\u007f\u0080",
    "\u00076\u0002\u0002\u0080\u0082\u0005(\u0015\u0002\u0081{\u0003\u0002",
    "\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0082\u0013\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\t\u0002\u0002\u0084\u0085\u0005\u0016",
    "\f\u0002\u0085\u0015\u0003\u0002\u0002\u0002\u0086\u0087\u0007\n\u0002",
    "\u0002\u0087\u0088\u0007\u000b\u0002\u0002\u0088\u0089\u0007\f\u0002",
    "\u0002\u0089\u008a\u0007\r\u0002\u0002\u008a\u008b\u0007\u000e\u0002",
    "\u0002\u008b\u00b6\u0007\u000f\u0002\u0002\u008c\u008d\u0007\n\u0002",
    "\u0002\u008d\u008e\u0007\u0010\u0002\u0002\u008e\u008f\u0007\u0011\u0002",
    "\u0002\u008f\u0090\u0007\u0012\u0002\u0002\u0090\u0091\u0007\u0013\u0002",
    "\u0002\u0091\u0092\u0007\f\u0002\u0002\u0092\u0093\u0007\u0010\u0002",
    "\u0002\u0093\u00b6\u0007\u0014\u0002\u0002\u0094\u0095\u0007\n\u0002",
    "\u0002\u0095\u0096\u0007\u0010\u0002\u0002\u0096\u0097\u0007\u0014\u0002",
    "\u0002\u0097\u0098\u0007\u0012\u0002\u0002\u0098\u0099\u0007\u0013\u0002",
    "\u0002\u0099\u009a\u0007\f\u0002\u0002\u009a\u009b\u0007\u0010\u0002",
    "\u0002\u009b\u00b6\u0007\u0011\u0002\u0002\u009c\u009d\u0007\n\u0002",
    "\u0002\u009d\u009e\u0007\u0010\u0002\u0002\u009e\u009f\u0007\u0011\u0002",
    "\u0002\u009f\u00a0\u0007\u0015\u0002\u0002\u00a0\u00a1\u0007\u0010\u0002",
    "\u0002\u00a1\u00b6\u0007\u0014\u0002\u0002\u00a2\u00a3\u0007\n\u0002",
    "\u0002\u00a3\u00a4\u0007\u0010\u0002\u0002\u00a4\u00a5\u0007\u0014\u0002",
    "\u0002\u00a5\u00a6\u0007\u0016\u0002\u0002\u00a6\u00a7\u0007\u0017\u0002",
    "\u0002\u00a7\u00a8\u0007\u0010\u0002\u0002\u00a8\u00b6\u0007\u0011\u0002",
    "\u0002\u00a9\u00aa\u0007\u0018\u0002\u0002\u00aa\u00ab\u0007\u0010\u0002",
    "\u0002\u00ab\u00ac\u0007\u0019\u0002\u0002\u00ac\u00ad\u0007\u001a\u0002",
    "\u0002\u00ad\u00ae\u0007\u0010\u0002\u0002\u00ae\u00b6\u0007\u001b\u0002",
    "\u0002\u00af\u00b6\u0007\u001c\u0002\u0002\u00b0\u00b1\u0007\u001d\u0002",
    "\u0002\u00b1\u00b2\u0007\u0010\u0002\u0002\u00b2\u00b3\u0007\u001e\u0002",
    "\u0002\u00b3\u00b4\u0007\u0003\u0002\u0002\u00b4\u00b6\u0005(\u0015",
    "\u0002\u00b5\u0086\u0003\u0002\u0002\u0002\u00b5\u008c\u0003\u0002\u0002",
    "\u0002\u00b5\u0094\u0003\u0002\u0002\u0002\u00b5\u009c\u0003\u0002\u0002",
    "\u0002\u00b5\u00a2\u0003\u0002\u0002\u0002\u00b5\u00a9\u0003\u0002\u0002",
    "\u0002\u00b5\u00af\u0003\u0002\u0002\u0002\u00b5\u00b0\u0003\u0002\u0002",
    "\u0002\u00b6\u0017\u0003\u0002\u0002\u0002\u00b7\u00b8\u0005\u0012\n",
    "\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9\u00ba\u0007\u001f\u0002",
    "\u0002\u00ba\u00bb\u0007 \u0002\u0002\u00bb\u00bc\u0007!\u0002\u0002",
    "\u00bc\u00bd\u00079\u0002\u0002\u00bd\u00be\u0005\u001c\u000f\u0002",
    "\u00be\u00bf\u0005\"\u0012\u0002\u00bf\u00c0\u0005$\u0013\u0002\u00c0",
    "\u0019\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\t\u0002\u0002\u00c2",
    "\u00c3\u0007\u001f\u0002\u0002\u00c3\u00c4\u0007\"\u0002\u0002\u00c4",
    "\u00c5\u0007!\u0002\u0002\u00c5\u00c6\u00079\u0002\u0002\u00c6\u001b",
    "\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007#\u0002\u0002\u00c8\u00c9",
    "\u0007$\u0002\u0002\u00c9\u00ca\u0005\u001e\u0010\u0002\u00ca\u00cb",
    "\u0005 \u0011\u0002\u00cb\u001d\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0007%\u0002\u0002\u00cd\u00ce\u0005(\u0015\u0002\u00ce\u001f\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\u0007&\u0002\u0002\u00d0\u00d1\u0005",
    "(\u0015\u0002\u00d1!\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007%\u0002",
    "\u0002\u00d3\u00d4\u0005\u0006\u0004\u0002\u00d4#\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0007&\u0002\u0002\u00d6\u00d7\u0005\u0006\u0004",
    "\u0002\u00d7%\u0003\u0002\u0002\u0002\u00d8\u00d9\u0005(\u0015\u0002",
    "\u00d9\'\u0003\u0002\u0002\u0002\u00da\u00db\b\u0015\u0001\u0002\u00db",
    "\u00dc\u00079\u0002\u0002\u00dc\u00dd\u0007\'\u0002\u0002\u00dd\u00de",
    "\u0005(\u0015\u0002\u00de\u00df\u0007)\u0002\u0002\u00df\u00f3\u0003",
    "\u0002\u0002\u0002\u00e0\u00f3\u00054\u001b\u0002\u00e1\u00f3\u0005",
    ":\u001e\u0002\u00e2\u00f3\u0005<\u001f\u0002\u00e3\u00e4\u0007+\u0002",
    "\u0002\u00e4\u00f3\u0005(\u0015\u0013\u00e5\u00f3\u00052\u001a\u0002",
    "\u00e6\u00f3\u00054\u001b\u0002\u00e7\u00f3\u00078\u0002\u0002\u00e8",
    "\u00f3\u00079\u0002\u0002\u00e9\u00f3\u0007-\u0002\u0002\u00ea\u00f3",
    "\u0007.\u0002\u0002\u00eb\u00f3\u0007;\u0002\u0002\u00ec\u00f3\u0005",
    "6\u001c\u0002\u00ed\u00f3\u00058\u001d\u0002\u00ee\u00ef\u0007\u0007",
    "\u0002\u0002\u00ef\u00f0\u0005(\u0015\u0002\u00f0\u00f1\u0007\b\u0002",
    "\u0002\u00f1\u00f3\u0003\u0002\u0002\u0002\u00f2\u00da\u0003\u0002\u0002",
    "\u0002\u00f2\u00e0\u0003\u0002\u0002\u0002\u00f2\u00e1\u0003\u0002\u0002",
    "\u0002\u00f2\u00e2\u0003\u0002\u0002\u0002\u00f2\u00e3\u0003\u0002\u0002",
    "\u0002\u00f2\u00e5\u0003\u0002\u0002\u0002\u00f2\u00e6\u0003\u0002\u0002",
    "\u0002\u00f2\u00e7\u0003\u0002\u0002\u0002\u00f2\u00e8\u0003\u0002\u0002",
    "\u0002\u00f2\u00e9\u0003\u0002\u0002\u0002\u00f2\u00ea\u0003\u0002\u0002",
    "\u0002\u00f2\u00eb\u0003\u0002\u0002\u0002\u00f2\u00ec\u0003\u0002\u0002",
    "\u0002\u00f2\u00ed\u0003\u0002\u0002\u0002\u00f2\u00ee\u0003\u0002\u0002",
    "\u0002\u00f3\u0116\u0003\u0002\u0002\u0002\u00f4\u00f5\f\u0010\u0002",
    "\u0002\u00f5\u00f6\u0007<\u0002\u0002\u00f6\u0115\u0005(\u0015\u0011",
    "\u00f7\u00f8\f\u000f\u0002\u0002\u00f8\u00f9\u0007,\u0002\u0002\u00f9",
    "\u0115\u0005(\u0015\u0010\u00fa\u00fb\f\u000e\u0002\u0002\u00fb\u00fc",
    "\u0007=\u0002\u0002\u00fc\u0115\u0005(\u0015\u000f\u00fd\u00fe\f\r\u0002",
    "\u0002\u00fe\u00ff\u0007>\u0002\u0002\u00ff\u0115\u0005(\u0015\u000e",
    "\u0100\u0101\f\f\u0002\u0002\u0101\u0102\u0007?\u0002\u0002\u0102\u0115",
    "\u0005(\u0015\r\u0103\u0104\f\u000b\u0002\u0002\u0104\u0105\u0007@\u0002",
    "\u0002\u0105\u0115\u0005(\u0015\f\u0106\u0107\f\u0019\u0002\u0002\u0107",
    "\u0108\u0007\'\u0002\u0002\u0108\u0109\u0005.\u0018\u0002\u0109\u010a",
    "\u0007(\u0002\u0002\u010a\u010b\u00050\u0019\u0002\u010b\u010c\u0007",
    ")\u0002\u0002\u010c\u0115\u0003\u0002\u0002\u0002\u010d\u010e\f\u0018",
    "\u0002\u0002\u010e\u010f\u0007\'\u0002\u0002\u010f\u0110\u00079\u0002",
    "\u0002\u0110\u0111\u0007*\u0002\u0002\u0111\u0112\u0005(\u0015\u0002",
    "\u0112\u0113\u0007)\u0002\u0002\u0113\u0115\u0003\u0002\u0002\u0002",
    "\u0114\u00f4\u0003\u0002\u0002\u0002\u0114\u00f7\u0003\u0002\u0002\u0002",
    "\u0114\u00fa\u0003\u0002\u0002\u0002\u0114\u00fd\u0003\u0002\u0002\u0002",
    "\u0114\u0100\u0003\u0002\u0002\u0002\u0114\u0103\u0003\u0002\u0002\u0002",
    "\u0114\u0106\u0003\u0002\u0002\u0002\u0114\u010d\u0003\u0002\u0002\u0002",
    "\u0115\u0118\u0003\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002",
    "\u0116\u0117\u0003\u0002\u0002\u0002\u0117)\u0003\u0002\u0002\u0002",
    "\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u011a\u0005,\u0017\u0002",
    "\u011a\u011b\u00074\u0002\u0002\u011b+\u0003\u0002\u0002\u0002\u011c",
    "\u011d\t\u0002\u0002\u0002\u011d-\u0003\u0002\u0002\u0002\u011e\u0123",
    "\u0005> \u0002\u011f\u0120\u0007*\u0002\u0002\u0120\u0122\u0005> \u0002",
    "\u0121\u011f\u0003\u0002\u0002\u0002\u0122\u0125\u0003\u0002\u0002\u0002",
    "\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002",
    "\u0124/\u0003\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002",
    "\u0126\u012b\u0005(\u0015\u0002\u0127\u0128\u0007*\u0002\u0002\u0128",
    "\u012a\u0005(\u0015\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u012a",
    "\u012d\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012b",
    "\u012c\u0003\u0002\u0002\u0002\u012c1\u0003\u0002\u0002\u0002\u012d",
    "\u012b\u0003\u0002\u0002\u0002\u012e\u012f\u0007\u0007\u0002\u0002\u012f",
    "\u0130\u0007A\u0002\u0002\u0130\u0131\u0005.\u0018\u0002\u0131\u0132",
    "\u0007/\u0002\u0002\u0132\u0133\u0007\u0003\u0002\u0002\u0133\u0134",
    "\u0005(\u0015\u0002\u0134\u0135\u0007\b\u0002\u0002\u01353\u0003\u0002",
    "\u0002\u0002\u0136\u0137\u0007\u0007\u0002\u0002\u0137\u0138\u0007A",
    "\u0002\u0002\u0138\u0139\u0005.\u0018\u0002\u0139\u013a\u0007/\u0002",
    "\u0002\u013a\u013b\u0005(\u0015\u0002\u013b\u013c\u0007\u0003\u0002",
    "\u0002\u013c\u013d\u0005(\u0015\u0002\u013d\u013e\u0007\b\u0002\u0002",
    "\u013e5\u0003\u0002\u0002\u0002\u013f\u0148\u00070\u0002\u0002\u0140",
    "\u0145\u0005(\u0015\u0002\u0141\u0142\u0007*\u0002\u0002\u0142\u0144",
    "\u0005(\u0015\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0144\u0147",
    "\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0145\u0146",
    "\u0003\u0002\u0002\u0002\u0146\u0149\u0003\u0002\u0002\u0002\u0147\u0145",
    "\u0003\u0002\u0002\u0002\u0148\u0140\u0003\u0002\u0002\u0002\u0148\u0149",
    "\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014b",
    "\u00071\u0002\u0002\u014b7\u0003\u0002\u0002\u0002\u014c\u014d\u0007",
    "0\u0002\u0002\u014d\u014e\u0005> \u0002\u014e\u014f\u0007/\u0002\u0002",
    "\u014f\u0150\u0005(\u0015\u0002\u0150\u0151\u0007\u0003\u0002\u0002",
    "\u0151\u0152\u0005(\u0015\u0002\u0152\u0153\u00071\u0002\u0002\u0153",
    "9\u0003\u0002\u0002\u0002\u0154\u0155\u00072\u0002\u0002\u0155\u0156",
    "\u00073\u0002\u0002\u0156\u0157\u0005<\u001f\u0002\u0157;\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u00079\u0002\u0002\u0159\u015a\u00073\u0002",
    "\u0002\u015a\u0161\u0005(\u0015\u0002\u015b\u015c\u00079\u0002\u0002",
    "\u015c\u015d\u0007\u0007\u0002\u0002\u015d\u015e\u00050\u0019\u0002",
    "\u015e\u015f\u0007\b\u0002\u0002\u015f\u0161\u0003\u0002\u0002\u0002",
    "\u0160\u0158\u0003\u0002\u0002\u0002\u0160\u015b\u0003\u0002\u0002\u0002",
    "\u0161=\u0003\u0002\u0002\u0002\u0162\u0165\u00079\u0002\u0002\u0163",
    "\u0164\u0007\u0003\u0002\u0002\u0164\u0166\u0007:\u0002\u0002\u0165",
    "\u0163\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166",
    "?\u0003\u0002\u0002\u0002\u0019FKNQTW_cfquy\u0081\u00b5\u00f2\u0114",
    "\u0116\u0123\u012b\u0145\u0148\u0160\u0165"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'Proof'", "'-'", "'Exercise'", "'('", 
                     "')'", "'by'", "'showing'", "'equivalence'", "'to'", 
                     "'a'", "'previous'", "'theorem'", "'the'", "'LHS'", 
                     "'is'", "'equivalent'", "'RHS'", "'implies'", "'follows'", 
                     "'from'", "'assuming'", "'conjuncts'", "'of'", "'antecedent'", 
                     "'contradiction'", "'proving'", "'contrapositive'", 
                     "'case'", "'analysis'", "'on'", "'anlaysis'", "'Must'", 
                     "'prove'", "'(1)'", "'(2)'", "'['", "'\u2254'", "']'", 
                     "','", "'\u00AC'", "'%'", "'true'", "'false'", "'|'", 
                     "'{'", "'}'", "'inv'", "'.'", null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, "'\u2571\u2571'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "COMMENT", "EXPO", "PROVE", 
                      "RULENUM", "EVAR", "VAR", "TYPE", "NUM", "ADDOP", 
                      "RELOP", "JOP", "IMPOP", "EQOP", "QUANTIFIER", "WS", 
                      "END" ];

var ruleNames =  [ "doc", "proof", "standardProof", "startExpo", "endExpo", 
                   "proofHead", "sep", "header", "theorem", "method", "methodName", 
                   "caseProof", "caseVariable", "caseList", "case1", "case2", 
                   "caseProof1", "caseProof2", "step", "expr", "hint", "hintOp", 
                   "varlist", "exprlist", "emptyRangeExpr", "quantifiedExpr", 
                   "setEnumeration", "setComprehension", "inverseCall", 
                   "functionCall", "typedVar" ];

function SlickParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SlickParser.prototype = Object.create(antlr4.Parser.prototype);
SlickParser.prototype.constructor = SlickParser;

Object.defineProperty(SlickParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SlickParser.EOF = antlr4.Token.EOF;
SlickParser.T__0 = 1;
SlickParser.T__1 = 2;
SlickParser.T__2 = 3;
SlickParser.T__3 = 4;
SlickParser.T__4 = 5;
SlickParser.T__5 = 6;
SlickParser.T__6 = 7;
SlickParser.T__7 = 8;
SlickParser.T__8 = 9;
SlickParser.T__9 = 10;
SlickParser.T__10 = 11;
SlickParser.T__11 = 12;
SlickParser.T__12 = 13;
SlickParser.T__13 = 14;
SlickParser.T__14 = 15;
SlickParser.T__15 = 16;
SlickParser.T__16 = 17;
SlickParser.T__17 = 18;
SlickParser.T__18 = 19;
SlickParser.T__19 = 20;
SlickParser.T__20 = 21;
SlickParser.T__21 = 22;
SlickParser.T__22 = 23;
SlickParser.T__23 = 24;
SlickParser.T__24 = 25;
SlickParser.T__25 = 26;
SlickParser.T__26 = 27;
SlickParser.T__27 = 28;
SlickParser.T__28 = 29;
SlickParser.T__29 = 30;
SlickParser.T__30 = 31;
SlickParser.T__31 = 32;
SlickParser.T__32 = 33;
SlickParser.T__33 = 34;
SlickParser.T__34 = 35;
SlickParser.T__35 = 36;
SlickParser.T__36 = 37;
SlickParser.T__37 = 38;
SlickParser.T__38 = 39;
SlickParser.T__39 = 40;
SlickParser.T__40 = 41;
SlickParser.T__41 = 42;
SlickParser.T__42 = 43;
SlickParser.T__43 = 44;
SlickParser.T__44 = 45;
SlickParser.T__45 = 46;
SlickParser.T__46 = 47;
SlickParser.T__47 = 48;
SlickParser.T__48 = 49;
SlickParser.COMMENT = 50;
SlickParser.EXPO = 51;
SlickParser.PROVE = 52;
SlickParser.RULENUM = 53;
SlickParser.EVAR = 54;
SlickParser.VAR = 55;
SlickParser.TYPE = 56;
SlickParser.NUM = 57;
SlickParser.ADDOP = 58;
SlickParser.RELOP = 59;
SlickParser.JOP = 60;
SlickParser.IMPOP = 61;
SlickParser.EQOP = 62;
SlickParser.QUANTIFIER = 63;
SlickParser.WS = 64;
SlickParser.END = 65;

SlickParser.RULE_doc = 0;
SlickParser.RULE_proof = 1;
SlickParser.RULE_standardProof = 2;
SlickParser.RULE_startExpo = 3;
SlickParser.RULE_endExpo = 4;
SlickParser.RULE_proofHead = 5;
SlickParser.RULE_sep = 6;
SlickParser.RULE_header = 7;
SlickParser.RULE_theorem = 8;
SlickParser.RULE_method = 9;
SlickParser.RULE_methodName = 10;
SlickParser.RULE_caseProof = 11;
SlickParser.RULE_caseVariable = 12;
SlickParser.RULE_caseList = 13;
SlickParser.RULE_case1 = 14;
SlickParser.RULE_case2 = 15;
SlickParser.RULE_caseProof1 = 16;
SlickParser.RULE_caseProof2 = 17;
SlickParser.RULE_step = 18;
SlickParser.RULE_expr = 19;
SlickParser.RULE_hint = 20;
SlickParser.RULE_hintOp = 21;
SlickParser.RULE_varlist = 22;
SlickParser.RULE_exprlist = 23;
SlickParser.RULE_emptyRangeExpr = 24;
SlickParser.RULE_quantifiedExpr = 25;
SlickParser.RULE_setEnumeration = 26;
SlickParser.RULE_setComprehension = 27;
SlickParser.RULE_inverseCall = 28;
SlickParser.RULE_functionCall = 29;
SlickParser.RULE_typedVar = 30;


function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.proof = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ProofContext);
    } else {
        return this.getTypedRuleContext(ProofContext,i);
    }
};

DocContext.prototype.sep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SepContext);
    } else {
        return this.getTypedRuleContext(SepContext,i);
    }
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.DocContext = DocContext;

SlickParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SlickParser.RULE_doc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.proof();
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__2) {
            this.state = 63;
            this.sep();
            this.state = 64;
            this.proof();
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_proof;
    return this;
}

ProofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProofContext.prototype.constructor = ProofContext;

ProofContext.prototype.standardProof = function() {
    return this.getTypedRuleContext(StandardProofContext,0);
};

ProofContext.prototype.caseProof = function() {
    return this.getTypedRuleContext(CaseProofContext,0);
};

ProofContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterProof(this);
	}
};

ProofContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitProof(this);
	}
};

ProofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitProof(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.ProofContext = ProofContext;

SlickParser.prototype.proof = function() {

    var localctx = new ProofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SlickParser.RULE_proof);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 71;
            this.standardProof();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 72;
            this.caseProof();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StandardProofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_standardProof;
    return this;
}

StandardProofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StandardProofContext.prototype.constructor = StandardProofContext;

StandardProofContext.prototype.step = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StepContext);
    } else {
        return this.getTypedRuleContext(StepContext,i);
    }
};

StandardProofContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

StandardProofContext.prototype.startExpo = function() {
    return this.getTypedRuleContext(StartExpoContext,0);
};

StandardProofContext.prototype.proofHead = function() {
    return this.getTypedRuleContext(ProofHeadContext,0);
};

StandardProofContext.prototype.hint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HintContext);
    } else {
        return this.getTypedRuleContext(HintContext,i);
    }
};

StandardProofContext.prototype.END = function() {
    return this.getToken(SlickParser.END, 0);
};

StandardProofContext.prototype.endExpo = function() {
    return this.getTypedRuleContext(EndExpoContext,0);
};

StandardProofContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterStandardProof(this);
	}
};

StandardProofContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitStandardProof(this);
	}
};

StandardProofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitStandardProof(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.StandardProofContext = StandardProofContext;

SlickParser.prototype.standardProof = function() {

    var localctx = new StandardProofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SlickParser.RULE_standardProof);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__3 || _la===SlickParser.PROVE) {
            this.state = 75;
            this.header();
        }

        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.EXPO) {
            this.state = 78;
            this.startExpo();
        }

        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__1) {
            this.state = 81;
            this.proofHead();
        }

        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__0) {
            this.state = 84;
            this.match(SlickParser.T__0);
        }

        this.state = 87;
        this.step();
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SlickParser.RELOP - 59)) | (1 << (SlickParser.IMPOP - 59)) | (1 << (SlickParser.EQOP - 59)))) !== 0)) {
            this.state = 88;
            this.hint();
            this.state = 89;
            this.step();
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.END) {
            this.state = 96;
            this.match(SlickParser.END);
        }

        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.EXPO) {
            this.state = 99;
            this.endExpo();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StartExpoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_startExpo;
    return this;
}

StartExpoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartExpoContext.prototype.constructor = StartExpoContext;

StartExpoContext.prototype.EXPO = function() {
    return this.getToken(SlickParser.EXPO, 0);
};

StartExpoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterStartExpo(this);
	}
};

StartExpoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitStartExpo(this);
	}
};

StartExpoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitStartExpo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.StartExpoContext = StartExpoContext;

SlickParser.prototype.startExpo = function() {

    var localctx = new StartExpoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SlickParser.RULE_startExpo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(SlickParser.EXPO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EndExpoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_endExpo;
    return this;
}

EndExpoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndExpoContext.prototype.constructor = EndExpoContext;

EndExpoContext.prototype.EXPO = function() {
    return this.getToken(SlickParser.EXPO, 0);
};

EndExpoContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterEndExpo(this);
	}
};

EndExpoContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitEndExpo(this);
	}
};

EndExpoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitEndExpo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.EndExpoContext = EndExpoContext;

SlickParser.prototype.endExpo = function() {

    var localctx = new EndExpoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SlickParser.RULE_endExpo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(SlickParser.EXPO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProofHeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_proofHead;
    return this;
}

ProofHeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProofHeadContext.prototype.constructor = ProofHeadContext;


ProofHeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterProofHead(this);
	}
};

ProofHeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitProofHead(this);
	}
};

ProofHeadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitProofHead(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.ProofHeadContext = ProofHeadContext;

SlickParser.prototype.proofHead = function() {

    var localctx = new ProofHeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SlickParser.RULE_proofHead);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(SlickParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_sep;
    return this;
}

SepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SepContext.prototype.constructor = SepContext;


SepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSep(this);
	}
};

SepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSep(this);
	}
};

SepContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitSep(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.SepContext = SepContext;

SlickParser.prototype.sep = function() {

    var localctx = new SepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SlickParser.RULE_sep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 108;
            this.match(SlickParser.T__2);
            this.state = 111; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SlickParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;


 
HeaderContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TheoremHeaderContext(parser, ctx) {
	HeaderContext.call(this, parser);
    HeaderContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TheoremHeaderContext.prototype = Object.create(HeaderContext.prototype);
TheoremHeaderContext.prototype.constructor = TheoremHeaderContext;

SlickParser.TheoremHeaderContext = TheoremHeaderContext;

TheoremHeaderContext.prototype.theorem = function() {
    return this.getTypedRuleContext(TheoremContext,0);
};

TheoremHeaderContext.prototype.method = function() {
    return this.getTypedRuleContext(MethodContext,0);
};
TheoremHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterTheoremHeader(this);
	}
};

TheoremHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitTheoremHeader(this);
	}
};

TheoremHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitTheoremHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExerciseHeaderContext(parser, ctx) {
	HeaderContext.call(this, parser);
    HeaderContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExerciseHeaderContext.prototype = Object.create(HeaderContext.prototype);
ExerciseHeaderContext.prototype.constructor = ExerciseHeaderContext;

SlickParser.ExerciseHeaderContext = ExerciseHeaderContext;

ExerciseHeaderContext.prototype.RULENUM = function() {
    return this.getToken(SlickParser.RULENUM, 0);
};
ExerciseHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterExerciseHeader(this);
	}
};

ExerciseHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitExerciseHeader(this);
	}
};

ExerciseHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitExerciseHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SlickParser.HeaderContext = HeaderContext;

SlickParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SlickParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.state = 119;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SlickParser.PROVE:
            localctx = new TheoremHeaderContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.theorem();
            this.state = 115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SlickParser.T__6) {
                this.state = 114;
                this.method();
            }

            break;
        case SlickParser.T__3:
            localctx = new ExerciseHeaderContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.match(SlickParser.T__3);
            this.state = 118;
            this.match(SlickParser.RULENUM);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TheoremContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_theorem;
    return this;
}

TheoremContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TheoremContext.prototype.constructor = TheoremContext;


 
TheoremContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AdHocTheoremContext(parser, ctx) {
	TheoremContext.call(this, parser);
    TheoremContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdHocTheoremContext.prototype = Object.create(TheoremContext.prototype);
AdHocTheoremContext.prototype.constructor = AdHocTheoremContext;

SlickParser.AdHocTheoremContext = AdHocTheoremContext;

AdHocTheoremContext.prototype.PROVE = function() {
    return this.getToken(SlickParser.PROVE, 0);
};

AdHocTheoremContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
AdHocTheoremContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterAdHocTheorem(this);
	}
};

AdHocTheoremContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitAdHocTheorem(this);
	}
};

AdHocTheoremContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitAdHocTheorem(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BibleTheoremContext(parser, ctx) {
	TheoremContext.call(this, parser);
    TheoremContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BibleTheoremContext.prototype = Object.create(TheoremContext.prototype);
BibleTheoremContext.prototype.constructor = BibleTheoremContext;

SlickParser.BibleTheoremContext = BibleTheoremContext;

BibleTheoremContext.prototype.PROVE = function() {
    return this.getToken(SlickParser.PROVE, 0);
};

BibleTheoremContext.prototype.RULENUM = function() {
    return this.getToken(SlickParser.RULENUM, 0);
};
BibleTheoremContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterBibleTheorem(this);
	}
};

BibleTheoremContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitBibleTheorem(this);
	}
};

BibleTheoremContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitBibleTheorem(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SlickParser.TheoremContext = TheoremContext;

SlickParser.prototype.theorem = function() {

    var localctx = new TheoremContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SlickParser.RULE_theorem);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BibleTheoremContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.match(SlickParser.PROVE);
            this.state = 122;
            this.match(SlickParser.T__4);
            this.state = 123;
            this.match(SlickParser.RULENUM);
            this.state = 124;
            this.match(SlickParser.T__5);
            break;

        case 2:
            localctx = new AdHocTheoremContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.match(SlickParser.PROVE);
            this.state = 126;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;

MethodContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitMethod(this);
	}
};

MethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.MethodContext = MethodContext;

SlickParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SlickParser.RULE_method);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(SlickParser.T__6);
        this.state = 130;
        this.methodName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;


 
MethodNameContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PreviousTheoremMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreviousTheoremMethodContext.prototype = Object.create(MethodNameContext.prototype);
PreviousTheoremMethodContext.prototype.constructor = PreviousTheoremMethodContext;

SlickParser.PreviousTheoremMethodContext = PreviousTheoremMethodContext;

PreviousTheoremMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterPreviousTheoremMethod(this);
	}
};

PreviousTheoremMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitPreviousTheoremMethod(this);
	}
};

PreviousTheoremMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitPreviousTheoremMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RightEquivalesLeftMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RightEquivalesLeftMethodContext.prototype = Object.create(MethodNameContext.prototype);
RightEquivalesLeftMethodContext.prototype.constructor = RightEquivalesLeftMethodContext;

SlickParser.RightEquivalesLeftMethodContext = RightEquivalesLeftMethodContext;

RightEquivalesLeftMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterRightEquivalesLeftMethod(this);
	}
};

RightEquivalesLeftMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitRightEquivalesLeftMethod(this);
	}
};

RightEquivalesLeftMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitRightEquivalesLeftMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RightFollowsLeftMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RightFollowsLeftMethodContext.prototype = Object.create(MethodNameContext.prototype);
RightFollowsLeftMethodContext.prototype.constructor = RightFollowsLeftMethodContext;

SlickParser.RightFollowsLeftMethodContext = RightFollowsLeftMethodContext;

RightFollowsLeftMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterRightFollowsLeftMethod(this);
	}
};

RightFollowsLeftMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitRightFollowsLeftMethod(this);
	}
};

RightFollowsLeftMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitRightFollowsLeftMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LeftEquivalesRightMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeftEquivalesRightMethodContext.prototype = Object.create(MethodNameContext.prototype);
LeftEquivalesRightMethodContext.prototype.constructor = LeftEquivalesRightMethodContext;

SlickParser.LeftEquivalesRightMethodContext = LeftEquivalesRightMethodContext;

LeftEquivalesRightMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterLeftEquivalesRightMethod(this);
	}
};

LeftEquivalesRightMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitLeftEquivalesRightMethod(this);
	}
};

LeftEquivalesRightMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitLeftEquivalesRightMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ContrapositiveMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ContrapositiveMethodContext.prototype = Object.create(MethodNameContext.prototype);
ContrapositiveMethodContext.prototype.constructor = ContrapositiveMethodContext;

SlickParser.ContrapositiveMethodContext = ContrapositiveMethodContext;

ContrapositiveMethodContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ContrapositiveMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterContrapositiveMethod(this);
	}
};

ContrapositiveMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitContrapositiveMethod(this);
	}
};

ContrapositiveMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitContrapositiveMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssumingConjunctsMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssumingConjunctsMethodContext.prototype = Object.create(MethodNameContext.prototype);
AssumingConjunctsMethodContext.prototype.constructor = AssumingConjunctsMethodContext;

SlickParser.AssumingConjunctsMethodContext = AssumingConjunctsMethodContext;

AssumingConjunctsMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterAssumingConjunctsMethod(this);
	}
};

AssumingConjunctsMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitAssumingConjunctsMethod(this);
	}
};

AssumingConjunctsMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitAssumingConjunctsMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LeftImpliesRightMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeftImpliesRightMethodContext.prototype = Object.create(MethodNameContext.prototype);
LeftImpliesRightMethodContext.prototype.constructor = LeftImpliesRightMethodContext;

SlickParser.LeftImpliesRightMethodContext = LeftImpliesRightMethodContext;

LeftImpliesRightMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterLeftImpliesRightMethod(this);
	}
};

LeftImpliesRightMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitLeftImpliesRightMethod(this);
	}
};

LeftImpliesRightMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitLeftImpliesRightMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ContradictionMethodContext(parser, ctx) {
	MethodNameContext.call(this, parser);
    MethodNameContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ContradictionMethodContext.prototype = Object.create(MethodNameContext.prototype);
ContradictionMethodContext.prototype.constructor = ContradictionMethodContext;

SlickParser.ContradictionMethodContext = ContradictionMethodContext;

ContradictionMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterContradictionMethod(this);
	}
};

ContradictionMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitContradictionMethod(this);
	}
};

ContradictionMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitContradictionMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SlickParser.MethodNameContext = MethodNameContext;

SlickParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SlickParser.RULE_methodName);
    try {
        this.state = 179;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PreviousTheoremMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this.match(SlickParser.T__7);
            this.state = 133;
            this.match(SlickParser.T__8);
            this.state = 134;
            this.match(SlickParser.T__9);
            this.state = 135;
            this.match(SlickParser.T__10);
            this.state = 136;
            this.match(SlickParser.T__11);
            this.state = 137;
            this.match(SlickParser.T__12);
            break;

        case 2:
            localctx = new LeftEquivalesRightMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.match(SlickParser.T__7);
            this.state = 139;
            this.match(SlickParser.T__13);
            this.state = 140;
            this.match(SlickParser.T__14);
            this.state = 141;
            this.match(SlickParser.T__15);
            this.state = 142;
            this.match(SlickParser.T__16);
            this.state = 143;
            this.match(SlickParser.T__9);
            this.state = 144;
            this.match(SlickParser.T__13);
            this.state = 145;
            this.match(SlickParser.T__17);
            break;

        case 3:
            localctx = new RightEquivalesLeftMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 146;
            this.match(SlickParser.T__7);
            this.state = 147;
            this.match(SlickParser.T__13);
            this.state = 148;
            this.match(SlickParser.T__17);
            this.state = 149;
            this.match(SlickParser.T__15);
            this.state = 150;
            this.match(SlickParser.T__16);
            this.state = 151;
            this.match(SlickParser.T__9);
            this.state = 152;
            this.match(SlickParser.T__13);
            this.state = 153;
            this.match(SlickParser.T__14);
            break;

        case 4:
            localctx = new LeftImpliesRightMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 154;
            this.match(SlickParser.T__7);
            this.state = 155;
            this.match(SlickParser.T__13);
            this.state = 156;
            this.match(SlickParser.T__14);
            this.state = 157;
            this.match(SlickParser.T__18);
            this.state = 158;
            this.match(SlickParser.T__13);
            this.state = 159;
            this.match(SlickParser.T__17);
            break;

        case 5:
            localctx = new RightFollowsLeftMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 160;
            this.match(SlickParser.T__7);
            this.state = 161;
            this.match(SlickParser.T__13);
            this.state = 162;
            this.match(SlickParser.T__17);
            this.state = 163;
            this.match(SlickParser.T__19);
            this.state = 164;
            this.match(SlickParser.T__20);
            this.state = 165;
            this.match(SlickParser.T__13);
            this.state = 166;
            this.match(SlickParser.T__14);
            break;

        case 6:
            localctx = new AssumingConjunctsMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 167;
            this.match(SlickParser.T__21);
            this.state = 168;
            this.match(SlickParser.T__13);
            this.state = 169;
            this.match(SlickParser.T__22);
            this.state = 170;
            this.match(SlickParser.T__23);
            this.state = 171;
            this.match(SlickParser.T__13);
            this.state = 172;
            this.match(SlickParser.T__24);
            break;

        case 7:
            localctx = new ContradictionMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 173;
            this.match(SlickParser.T__25);
            break;

        case 8:
            localctx = new ContrapositiveMethodContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 174;
            this.match(SlickParser.T__26);
            this.state = 175;
            this.match(SlickParser.T__13);
            this.state = 176;
            this.match(SlickParser.T__27);
            this.state = 177;
            this.match(SlickParser.T__0);
            this.state = 178;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseProofContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_caseProof;
    return this;
}

CaseProofContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseProofContext.prototype.constructor = CaseProofContext;

CaseProofContext.prototype.theorem = function() {
    return this.getTypedRuleContext(TheoremContext,0);
};

CaseProofContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

CaseProofContext.prototype.caseList = function() {
    return this.getTypedRuleContext(CaseListContext,0);
};

CaseProofContext.prototype.caseProof1 = function() {
    return this.getTypedRuleContext(CaseProof1Context,0);
};

CaseProofContext.prototype.caseProof2 = function() {
    return this.getTypedRuleContext(CaseProof2Context,0);
};

CaseProofContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCaseProof(this);
	}
};

CaseProofContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCaseProof(this);
	}
};

CaseProofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCaseProof(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.CaseProofContext = CaseProofContext;

SlickParser.prototype.caseProof = function() {

    var localctx = new CaseProofContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SlickParser.RULE_caseProof);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.theorem();
        this.state = 182;
        this.match(SlickParser.T__6);
        this.state = 183;
        this.match(SlickParser.T__28);
        this.state = 184;
        this.match(SlickParser.T__29);
        this.state = 185;
        this.match(SlickParser.T__30);
        this.state = 186;
        this.match(SlickParser.VAR);
        this.state = 187;
        this.caseList();
        this.state = 188;
        this.caseProof1();
        this.state = 189;
        this.caseProof2();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseVariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_caseVariable;
    return this;
}

CaseVariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseVariableContext.prototype.constructor = CaseVariableContext;

CaseVariableContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

CaseVariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCaseVariable(this);
	}
};

CaseVariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCaseVariable(this);
	}
};

CaseVariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCaseVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.CaseVariableContext = CaseVariableContext;

SlickParser.prototype.caseVariable = function() {

    var localctx = new CaseVariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SlickParser.RULE_caseVariable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(SlickParser.T__6);
        this.state = 192;
        this.match(SlickParser.T__28);
        this.state = 193;
        this.match(SlickParser.T__31);
        this.state = 194;
        this.match(SlickParser.T__30);
        this.state = 195;
        this.match(SlickParser.VAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_caseList;
    return this;
}

CaseListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseListContext.prototype.constructor = CaseListContext;

CaseListContext.prototype.case1 = function() {
    return this.getTypedRuleContext(Case1Context,0);
};

CaseListContext.prototype.case2 = function() {
    return this.getTypedRuleContext(Case2Context,0);
};

CaseListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCaseList(this);
	}
};

CaseListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCaseList(this);
	}
};

CaseListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCaseList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.CaseListContext = CaseListContext;

SlickParser.prototype.caseList = function() {

    var localctx = new CaseListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SlickParser.RULE_caseList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(SlickParser.T__32);
        this.state = 198;
        this.match(SlickParser.T__33);
        this.state = 199;
        this.case1();
        this.state = 200;
        this.case2();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Case1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_case1;
    return this;
}

Case1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Case1Context.prototype.constructor = Case1Context;

Case1Context.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Case1Context.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCase1(this);
	}
};

Case1Context.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCase1(this);
	}
};

Case1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCase1(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.Case1Context = Case1Context;

SlickParser.prototype.case1 = function() {

    var localctx = new Case1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SlickParser.RULE_case1);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(SlickParser.T__34);
        this.state = 203;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Case2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_case2;
    return this;
}

Case2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Case2Context.prototype.constructor = Case2Context;

Case2Context.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Case2Context.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCase2(this);
	}
};

Case2Context.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCase2(this);
	}
};

Case2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCase2(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.Case2Context = Case2Context;

SlickParser.prototype.case2 = function() {

    var localctx = new Case2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SlickParser.RULE_case2);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(SlickParser.T__35);
        this.state = 206;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseProof1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_caseProof1;
    return this;
}

CaseProof1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseProof1Context.prototype.constructor = CaseProof1Context;

CaseProof1Context.prototype.standardProof = function() {
    return this.getTypedRuleContext(StandardProofContext,0);
};

CaseProof1Context.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCaseProof1(this);
	}
};

CaseProof1Context.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCaseProof1(this);
	}
};

CaseProof1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCaseProof1(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.CaseProof1Context = CaseProof1Context;

SlickParser.prototype.caseProof1 = function() {

    var localctx = new CaseProof1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SlickParser.RULE_caseProof1);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(SlickParser.T__34);
        this.state = 209;
        this.standardProof();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaseProof2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_caseProof2;
    return this;
}

CaseProof2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaseProof2Context.prototype.constructor = CaseProof2Context;

CaseProof2Context.prototype.standardProof = function() {
    return this.getTypedRuleContext(StandardProofContext,0);
};

CaseProof2Context.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterCaseProof2(this);
	}
};

CaseProof2Context.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitCaseProof2(this);
	}
};

CaseProof2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitCaseProof2(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.CaseProof2Context = CaseProof2Context;

SlickParser.prototype.caseProof2 = function() {

    var localctx = new CaseProof2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SlickParser.RULE_caseProof2);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(SlickParser.T__35);
        this.state = 212;
        this.standardProof();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_step;
    return this;
}

StepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepContext.prototype.constructor = StepContext;

StepContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StepContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterStep(this);
	}
};

StepContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitStep(this);
	}
};

StepContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitStep(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.StepContext = StepContext;

SlickParser.prototype.step = function() {

    var localctx = new StepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SlickParser.RULE_step);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ImplicationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ImplicationExprContext.prototype = Object.create(ExprContext.prototype);
ImplicationExprContext.prototype.constructor = ImplicationExprContext;

SlickParser.ImplicationExprContext = ImplicationExprContext;

ImplicationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ImplicationExprContext.prototype.IMPOP = function() {
    return this.getToken(SlickParser.IMPOP, 0);
};
ImplicationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterImplicationExpr(this);
	}
};

ImplicationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitImplicationExpr(this);
	}
};

ImplicationExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitImplicationExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EquivalenceExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EquivalenceExprContext.prototype = Object.create(ExprContext.prototype);
EquivalenceExprContext.prototype.constructor = EquivalenceExprContext;

SlickParser.EquivalenceExprContext = EquivalenceExprContext;

EquivalenceExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

EquivalenceExprContext.prototype.EQOP = function() {
    return this.getToken(SlickParser.EQOP, 0);
};
EquivalenceExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterEquivalenceExpr(this);
	}
};

EquivalenceExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitEquivalenceExpr(this);
	}
};

EquivalenceExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitEquivalenceExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomContext.prototype = Object.create(ExprContext.prototype);
AtomContext.prototype.constructor = AtomContext;

SlickParser.AtomContext = AtomContext;

AtomContext.prototype.EVAR = function() {
    return this.getToken(SlickParser.EVAR, 0);
};

AtomContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

AtomContext.prototype.NUM = function() {
    return this.getToken(SlickParser.NUM, 0);
};
AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelativeExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelativeExprContext.prototype = Object.create(ExprContext.prototype);
RelativeExprContext.prototype.constructor = RelativeExprContext;

SlickParser.RelativeExprContext = RelativeExprContext;

RelativeExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RelativeExprContext.prototype.RELOP = function() {
    return this.getToken(SlickParser.RELOP, 0);
};
RelativeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterRelativeExpr(this);
	}
};

RelativeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitRelativeExpr(this);
	}
};

RelativeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitRelativeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetEnumExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetEnumExprContext.prototype = Object.create(ExprContext.prototype);
SetEnumExprContext.prototype.constructor = SetEnumExprContext;

SlickParser.SetEnumExprContext = SetEnumExprContext;

SetEnumExprContext.prototype.setEnumeration = function() {
    return this.getTypedRuleContext(SetEnumerationContext,0);
};
SetEnumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetEnumExpr(this);
	}
};

SetEnumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetEnumExpr(this);
	}
};

SetEnumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitSetEnumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayExprContext.prototype = Object.create(ExprContext.prototype);
ArrayExprContext.prototype.constructor = ArrayExprContext;

SlickParser.ArrayExprContext = ArrayExprContext;

ArrayExprContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

ArrayExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ArrayExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterArrayExpr(this);
	}
};

ArrayExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitArrayExpr(this);
	}
};

ArrayExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitArrayExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionCallExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExprContext.prototype = Object.create(ExprContext.prototype);
FunctionCallExprContext.prototype.constructor = FunctionCallExprContext;

SlickParser.FunctionCallExprContext = FunctionCallExprContext;

FunctionCallExprContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};
FunctionCallExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterFunctionCallExpr(this);
	}
};

FunctionCallExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitFunctionCallExpr(this);
	}
};

FunctionCallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitFunctionCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AdditionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditionExprContext.prototype = Object.create(ExprContext.prototype);
AdditionExprContext.prototype.constructor = AdditionExprContext;

SlickParser.AdditionExprContext = AdditionExprContext;

AdditionExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AdditionExprContext.prototype.ADDOP = function() {
    return this.getToken(SlickParser.ADDOP, 0);
};
AdditionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterAdditionExpr(this);
	}
};

AdditionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitAdditionExpr(this);
	}
};

AdditionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitAdditionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LeibnizExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LeibnizExprContext.prototype = Object.create(ExprContext.prototype);
LeibnizExprContext.prototype.constructor = LeibnizExprContext;

SlickParser.LeibnizExprContext = LeibnizExprContext;

LeibnizExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

LeibnizExprContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};
LeibnizExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterLeibnizExpr(this);
	}
};

LeibnizExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitLeibnizExpr(this);
	}
};

LeibnizExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitLeibnizExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetCompExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetCompExprContext.prototype = Object.create(ExprContext.prototype);
SetCompExprContext.prototype.constructor = SetCompExprContext;

SlickParser.SetCompExprContext = SetCompExprContext;

SetCompExprContext.prototype.setComprehension = function() {
    return this.getTypedRuleContext(SetComprehensionContext,0);
};
SetCompExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetCompExpr(this);
	}
};

SetCompExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetCompExpr(this);
	}
};

SetCompExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitSetCompExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GeneralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GeneralExprContext.prototype = Object.create(ExprContext.prototype);
GeneralExprContext.prototype.constructor = GeneralExprContext;

SlickParser.GeneralExprContext = GeneralExprContext;

GeneralExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
GeneralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterGeneralExpr(this);
	}
};

GeneralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitGeneralExpr(this);
	}
};

GeneralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitGeneralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InverseCallExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InverseCallExprContext.prototype = Object.create(ExprContext.prototype);
InverseCallExprContext.prototype.constructor = InverseCallExprContext;

SlickParser.InverseCallExprContext = InverseCallExprContext;

InverseCallExprContext.prototype.inverseCall = function() {
    return this.getTypedRuleContext(InverseCallContext,0);
};
InverseCallExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterInverseCallExpr(this);
	}
};

InverseCallExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitInverseCallExpr(this);
	}
};

InverseCallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitInverseCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

SlickParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParenExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterParenExpr(this);
	}
};

ParenExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitParenExpr(this);
	}
};

ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function QuantExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QuantExprContext.prototype = Object.create(ExprContext.prototype);
QuantExprContext.prototype.constructor = QuantExprContext;

SlickParser.QuantExprContext = QuantExprContext;

QuantExprContext.prototype.quantifiedExpr = function() {
    return this.getTypedRuleContext(QuantifiedExprContext,0);
};
QuantExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterQuantExpr(this);
	}
};

QuantExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitQuantExpr(this);
	}
};

QuantExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitQuantExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function JunctionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

JunctionExprContext.prototype = Object.create(ExprContext.prototype);
JunctionExprContext.prototype.constructor = JunctionExprContext;

SlickParser.JunctionExprContext = JunctionExprContext;

JunctionExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

JunctionExprContext.prototype.JOP = function() {
    return this.getToken(SlickParser.JOP, 0);
};
JunctionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterJunctionExpr(this);
	}
};

JunctionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitJunctionExpr(this);
	}
};

JunctionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitJunctionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TSExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TSExprContext.prototype = Object.create(ExprContext.prototype);
TSExprContext.prototype.constructor = TSExprContext;

SlickParser.TSExprContext = TSExprContext;

TSExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

TSExprContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

TSExprContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};
TSExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterTSExpr(this);
	}
};

TSExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitTSExpr(this);
	}
};

TSExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitTSExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryPrefixExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPrefixExprContext.prototype = Object.create(ExprContext.prototype);
UnaryPrefixExprContext.prototype.constructor = UnaryPrefixExprContext;

SlickParser.UnaryPrefixExprContext = UnaryPrefixExprContext;

UnaryPrefixExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnaryPrefixExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterUnaryPrefixExpr(this);
	}
};

UnaryPrefixExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitUnaryPrefixExpr(this);
	}
};

UnaryPrefixExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitUnaryPrefixExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyRExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyRExprContext.prototype = Object.create(ExprContext.prototype);
EmptyRExprContext.prototype.constructor = EmptyRExprContext;

SlickParser.EmptyRExprContext = EmptyRExprContext;

EmptyRExprContext.prototype.emptyRangeExpr = function() {
    return this.getTypedRuleContext(EmptyRangeExprContext,0);
};
EmptyRExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterEmptyRExpr(this);
	}
};

EmptyRExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitEmptyRExpr(this);
	}
};

EmptyRExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitEmptyRExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SlickParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, SlickParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ArrayExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 217;
            this.match(SlickParser.VAR);
            this.state = 218;
            this.match(SlickParser.T__36);
            this.state = 219;
            this.expr(0);
            this.state = 220;
            this.match(SlickParser.T__38);
            break;

        case 2:
            localctx = new QuantExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 222;
            this.quantifiedExpr();
            break;

        case 3:
            localctx = new InverseCallExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 223;
            this.inverseCall();
            break;

        case 4:
            localctx = new FunctionCallExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 224;
            this.functionCall();
            break;

        case 5:
            localctx = new UnaryPrefixExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 225;
            this.match(SlickParser.T__40);
            this.state = 226;
            this.expr(17);
            break;

        case 6:
            localctx = new EmptyRExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 227;
            this.emptyRangeExpr();
            break;

        case 7:
            localctx = new QuantExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 228;
            this.quantifiedExpr();
            break;

        case 8:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 229;
            this.match(SlickParser.EVAR);
            break;

        case 9:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 230;
            this.match(SlickParser.VAR);
            break;

        case 10:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 231;
            this.match(SlickParser.T__42);
            break;

        case 11:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 232;
            this.match(SlickParser.T__43);
            break;

        case 12:
            localctx = new AtomContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 233;
            this.match(SlickParser.NUM);
            break;

        case 13:
            localctx = new SetEnumExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 234;
            this.setEnumeration();
            break;

        case 14:
            localctx = new SetCompExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 235;
            this.setComprehension();
            break;

        case 15:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 236;
            this.match(SlickParser.T__4);
            this.state = 237;
            this.expr(0);
            this.state = 238;
            this.match(SlickParser.T__5);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 276;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 274;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AdditionExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 242;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 243;
                    this.match(SlickParser.ADDOP);
                    this.state = 244;
                    this.expr(15);
                    break;

                case 2:
                    localctx = new GeneralExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 245;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 246;
                    this.match(SlickParser.T__41);
                    this.state = 247;
                    this.expr(14);
                    break;

                case 3:
                    localctx = new RelativeExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 248;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 249;
                    this.match(SlickParser.RELOP);
                    this.state = 250;
                    this.expr(13);
                    break;

                case 4:
                    localctx = new JunctionExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 252;
                    this.match(SlickParser.JOP);
                    this.state = 253;
                    this.expr(12);
                    break;

                case 5:
                    localctx = new ImplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 254;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 255;
                    this.match(SlickParser.IMPOP);
                    this.state = 256;
                    this.expr(11);
                    break;

                case 6:
                    localctx = new EquivalenceExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 257;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 258;
                    this.match(SlickParser.EQOP);
                    this.state = 259;
                    this.expr(10);
                    break;

                case 7:
                    localctx = new TSExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 260;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 261;
                    this.match(SlickParser.T__36);
                    this.state = 262;
                    this.varlist();
                    this.state = 263;
                    this.match(SlickParser.T__37);
                    this.state = 264;
                    this.exprlist();
                    this.state = 265;
                    this.match(SlickParser.T__38);
                    break;

                case 8:
                    localctx = new LeibnizExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, SlickParser.RULE_expr);
                    this.state = 267;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 268;
                    this.match(SlickParser.T__36);
                    this.state = 269;
                    this.match(SlickParser.VAR);
                    this.state = 270;
                    this.match(SlickParser.T__39);
                    this.state = 271;
                    this.expr(0);
                    this.state = 272;
                    this.match(SlickParser.T__38);
                    break;

                } 
            }
            this.state = 278;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function HintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_hint;
    return this;
}

HintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HintContext.prototype.constructor = HintContext;

HintContext.prototype.hintOp = function() {
    return this.getTypedRuleContext(HintOpContext,0);
};

HintContext.prototype.COMMENT = function() {
    return this.getToken(SlickParser.COMMENT, 0);
};

HintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterHint(this);
	}
};

HintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitHint(this);
	}
};

HintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitHint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.HintContext = HintContext;

SlickParser.prototype.hint = function() {

    var localctx = new HintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SlickParser.RULE_hint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.hintOp();
        this.state = 280;
        this.match(SlickParser.COMMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HintOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_hintOp;
    return this;
}

HintOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HintOpContext.prototype.constructor = HintOpContext;

HintOpContext.prototype.RELOP = function() {
    return this.getToken(SlickParser.RELOP, 0);
};

HintOpContext.prototype.IMPOP = function() {
    return this.getToken(SlickParser.IMPOP, 0);
};

HintOpContext.prototype.EQOP = function() {
    return this.getToken(SlickParser.EQOP, 0);
};

HintOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterHintOp(this);
	}
};

HintOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitHintOp(this);
	}
};

HintOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitHintOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.HintOpContext = HintOpContext;

SlickParser.prototype.hintOp = function() {

    var localctx = new HintOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SlickParser.RULE_hintOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SlickParser.RELOP - 59)) | (1 << (SlickParser.IMPOP - 59)) | (1 << (SlickParser.EQOP - 59)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_varlist;
    return this;
}

VarlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarlistContext.prototype.constructor = VarlistContext;

VarlistContext.prototype.typedVar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypedVarContext);
    } else {
        return this.getTypedRuleContext(TypedVarContext,i);
    }
};

VarlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterVarlist(this);
	}
};

VarlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitVarlist(this);
	}
};

VarlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitVarlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.VarlistContext = VarlistContext;

SlickParser.prototype.varlist = function() {

    var localctx = new VarlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SlickParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.typedVar();
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__39) {
            this.state = 285;
            this.match(SlickParser.T__39);
            this.state = 286;
            this.typedVar();
            this.state = 291;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_exprlist;
    return this;
}

ExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprlistContext.prototype.constructor = ExprlistContext;

ExprlistContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterExprlist(this);
	}
};

ExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitExprlist(this);
	}
};

ExprlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitExprlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.ExprlistContext = ExprlistContext;

SlickParser.prototype.exprlist = function() {

    var localctx = new ExprlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SlickParser.RULE_exprlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.expr(0);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SlickParser.T__39) {
            this.state = 293;
            this.match(SlickParser.T__39);
            this.state = 294;
            this.expr(0);
            this.state = 299;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmptyRangeExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_emptyRangeExpr;
    return this;
}

EmptyRangeExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyRangeExprContext.prototype.constructor = EmptyRangeExprContext;

EmptyRangeExprContext.prototype.QUANTIFIER = function() {
    return this.getToken(SlickParser.QUANTIFIER, 0);
};

EmptyRangeExprContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

EmptyRangeExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

EmptyRangeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterEmptyRangeExpr(this);
	}
};

EmptyRangeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitEmptyRangeExpr(this);
	}
};

EmptyRangeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitEmptyRangeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.EmptyRangeExprContext = EmptyRangeExprContext;

SlickParser.prototype.emptyRangeExpr = function() {

    var localctx = new EmptyRangeExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SlickParser.RULE_emptyRangeExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.match(SlickParser.T__4);
        this.state = 301;
        this.match(SlickParser.QUANTIFIER);
        this.state = 302;
        this.varlist();
        this.state = 303;
        this.match(SlickParser.T__44);
        this.state = 304;
        this.match(SlickParser.T__0);
        this.state = 305;
        this.expr(0);
        this.state = 306;
        this.match(SlickParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuantifiedExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_quantifiedExpr;
    return this;
}

QuantifiedExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantifiedExprContext.prototype.constructor = QuantifiedExprContext;

QuantifiedExprContext.prototype.QUANTIFIER = function() {
    return this.getToken(SlickParser.QUANTIFIER, 0);
};

QuantifiedExprContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

QuantifiedExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

QuantifiedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterQuantifiedExpr(this);
	}
};

QuantifiedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitQuantifiedExpr(this);
	}
};

QuantifiedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitQuantifiedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.QuantifiedExprContext = QuantifiedExprContext;

SlickParser.prototype.quantifiedExpr = function() {

    var localctx = new QuantifiedExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SlickParser.RULE_quantifiedExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(SlickParser.T__4);
        this.state = 309;
        this.match(SlickParser.QUANTIFIER);
        this.state = 310;
        this.varlist();
        this.state = 311;
        this.match(SlickParser.T__44);
        this.state = 312;
        this.expr(0);
        this.state = 313;
        this.match(SlickParser.T__0);
        this.state = 314;
        this.expr(0);
        this.state = 315;
        this.match(SlickParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SetEnumerationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_setEnumeration;
    return this;
}

SetEnumerationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetEnumerationContext.prototype.constructor = SetEnumerationContext;

SetEnumerationContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

SetEnumerationContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetEnumeration(this);
	}
};

SetEnumerationContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetEnumeration(this);
	}
};

SetEnumerationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitSetEnumeration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.SetEnumerationContext = SetEnumerationContext;

SlickParser.prototype.setEnumeration = function() {

    var localctx = new SetEnumerationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SlickParser.RULE_setEnumeration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(SlickParser.T__45);
        this.state = 326;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__4 || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (SlickParser.T__40 - 41)) | (1 << (SlickParser.T__42 - 41)) | (1 << (SlickParser.T__43 - 41)) | (1 << (SlickParser.T__45 - 41)) | (1 << (SlickParser.T__47 - 41)) | (1 << (SlickParser.EVAR - 41)) | (1 << (SlickParser.VAR - 41)) | (1 << (SlickParser.NUM - 41)))) !== 0)) {
            this.state = 318;
            this.expr(0);
            this.state = 323;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SlickParser.T__39) {
                this.state = 319;
                this.match(SlickParser.T__39);
                this.state = 320;
                this.expr(0);
                this.state = 325;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 328;
        this.match(SlickParser.T__46);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SetComprehensionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_setComprehension;
    return this;
}

SetComprehensionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetComprehensionContext.prototype.constructor = SetComprehensionContext;

SetComprehensionContext.prototype.typedVar = function() {
    return this.getTypedRuleContext(TypedVarContext,0);
};

SetComprehensionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

SetComprehensionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterSetComprehension(this);
	}
};

SetComprehensionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitSetComprehension(this);
	}
};

SetComprehensionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitSetComprehension(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.SetComprehensionContext = SetComprehensionContext;

SlickParser.prototype.setComprehension = function() {

    var localctx = new SetComprehensionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SlickParser.RULE_setComprehension);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(SlickParser.T__45);
        this.state = 331;
        this.typedVar();
        this.state = 332;
        this.match(SlickParser.T__44);
        this.state = 333;
        this.expr(0);
        this.state = 334;
        this.match(SlickParser.T__0);
        this.state = 335;
        this.expr(0);
        this.state = 336;
        this.match(SlickParser.T__46);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InverseCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_inverseCall;
    return this;
}

InverseCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InverseCallContext.prototype.constructor = InverseCallContext;

InverseCallContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

InverseCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterInverseCall(this);
	}
};

InverseCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitInverseCall(this);
	}
};

InverseCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitInverseCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.InverseCallContext = InverseCallContext;

SlickParser.prototype.inverseCall = function() {

    var localctx = new InverseCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SlickParser.RULE_inverseCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(SlickParser.T__47);
        this.state = 339;
        this.match(SlickParser.T__48);
        this.state = 340;
        this.functionCall();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;


 
FunctionCallContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FunctionDotContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionDotContext.prototype = Object.create(FunctionCallContext.prototype);
FunctionDotContext.prototype.constructor = FunctionDotContext;

SlickParser.FunctionDotContext = FunctionDotContext;

FunctionDotContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

FunctionDotContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
FunctionDotContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterFunctionDot(this);
	}
};

FunctionDotContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitFunctionDot(this);
	}
};

FunctionDotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitFunctionDot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionParenContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionParenContext.prototype = Object.create(FunctionCallContext.prototype);
FunctionParenContext.prototype.constructor = FunctionParenContext;

SlickParser.FunctionParenContext = FunctionParenContext;

FunctionParenContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

FunctionParenContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};
FunctionParenContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterFunctionParen(this);
	}
};

FunctionParenContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitFunctionParen(this);
	}
};

FunctionParenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitFunctionParen(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SlickParser.FunctionCallContext = FunctionCallContext;

SlickParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SlickParser.RULE_functionCall);
    try {
        this.state = 350;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FunctionDotContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 342;
            this.match(SlickParser.VAR);
            this.state = 343;
            this.match(SlickParser.T__48);
            this.state = 344;
            this.expr(0);
            break;

        case 2:
            localctx = new FunctionParenContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 345;
            this.match(SlickParser.VAR);
            this.state = 346;
            this.match(SlickParser.T__4);
            this.state = 347;
            this.exprlist();
            this.state = 348;
            this.match(SlickParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TypedVarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SlickParser.RULE_typedVar;
    return this;
}

TypedVarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypedVarContext.prototype.constructor = TypedVarContext;

TypedVarContext.prototype.VAR = function() {
    return this.getToken(SlickParser.VAR, 0);
};

TypedVarContext.prototype.TYPE = function() {
    return this.getToken(SlickParser.TYPE, 0);
};

TypedVarContext.prototype.enterRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.enterTypedVar(this);
	}
};

TypedVarContext.prototype.exitRule = function(listener) {
    if(listener instanceof SlickListener ) {
        listener.exitTypedVar(this);
	}
};

TypedVarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SlickVisitor ) {
        return visitor.visitTypedVar(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SlickParser.TypedVarContext = TypedVarContext;

SlickParser.prototype.typedVar = function() {

    var localctx = new TypedVarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SlickParser.RULE_typedVar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(SlickParser.VAR);
        this.state = 355;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SlickParser.T__0) {
            this.state = 353;
            this.match(SlickParser.T__0);
            this.state = 354;
            this.match(SlickParser.TYPE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SlickParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 19:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SlickParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 23);
		case 7:
			return this.precpred(this._ctx, 22);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SlickParser = SlickParser;
