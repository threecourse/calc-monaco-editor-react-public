// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,14,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,
1,0,5,0,26,8,0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,57,8,
5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,65,8,5,10,5,12,5,68,9,5,1,5,0,1,10,6,0,2,4,
6,8,10,0,2,1,0,12,13,1,0,10,11,71,0,15,1,0,0,0,2,32,1,0,0,0,4,34,1,0,0,0,
6,38,1,0,0,0,8,42,1,0,0,0,10,56,1,0,0,0,12,14,3,4,2,0,13,12,1,0,0,0,14,17,
1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,21,1,0,0,0,17,15,1,0,0,0,18,20,3,
8,4,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,27,1,0,
0,0,23,21,1,0,0,0,24,26,3,6,3,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,
0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,
33,5,2,0,0,33,3,1,0,0,0,34,35,5,3,0,0,35,36,5,6,0,0,36,37,3,2,1,0,37,5,1,
0,0,0,38,39,5,4,0,0,39,40,5,6,0,0,40,41,3,2,1,0,41,7,1,0,0,0,42,43,5,6,0,
0,43,44,5,9,0,0,44,45,3,10,5,0,45,46,3,2,1,0,46,9,1,0,0,0,47,48,6,5,-1,0,
48,57,5,5,0,0,49,57,5,6,0,0,50,51,5,7,0,0,51,52,3,10,5,0,52,53,5,8,0,0,53,
57,1,0,0,0,54,55,5,10,0,0,55,57,3,10,5,1,56,47,1,0,0,0,56,49,1,0,0,0,56,
50,1,0,0,0,56,54,1,0,0,0,57,66,1,0,0,0,58,59,10,3,0,0,59,60,7,0,0,0,60,65,
3,10,5,4,61,62,10,2,0,0,62,63,7,1,0,0,63,65,3,10,5,3,64,58,1,0,0,0,64,61,
1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,11,1,0,0,0,68,66,1,
0,0,0,6,15,21,27,56,64,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CalcParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, null, null, "'input'", "'output'", null, 
                            null, "'('", "')'", "'='", "'-'", "'+'", "'*'", 
                            "'/'" ];
    static symbolicNames = [ null, "WS", "NL", "INPUT_KW", "OUTPUT_KW", 
                             "NUMBER_LIT", "ID", "LPAREN", "RPAREN", "EQUAL", 
                             "MINUS", "PLUS", "MUL", "DIV", "UNRECOGNIZED" ];
    static ruleNames = [ "compilationUnit", "eol", "input", "output", "calc", 
                         "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalcParser.ruleNames;
        this.literalNames = CalcParser.literalNames;
        this.symbolicNames = CalcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	compilationUnit() {
	    let localctx = new CompilationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalcParser.RULE_compilationUnit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 12;
	            localctx._input = this.input();
	            localctx.inputs.push(localctx._input);
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 18;
	            localctx._calc = this.calc();
	            localctx.calcs.push(localctx._calc);
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 24;
	            localctx._output = this.output();
	            localctx.outputs.push(localctx._output);
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(CalcParser.EOF);
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
	}



	eol() {
	    let localctx = new EolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalcParser.RULE_eol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(CalcParser.NL);
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
	}



	input() {
	    let localctx = new InputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalcParser.RULE_input);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(CalcParser.INPUT_KW);
	        this.state = 35;
	        this.match(CalcParser.ID);
	        this.state = 36;
	        this.eol();
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
	}



	output() {
	    let localctx = new OutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalcParser.RULE_output);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(CalcParser.OUTPUT_KW);
	        this.state = 39;
	        this.match(CalcParser.ID);
	        this.state = 40;
	        this.eol();
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
	}



	calc() {
	    let localctx = new CalcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalcParser.RULE_calc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        localctx.target = this.match(CalcParser.ID);
	        this.state = 43;
	        this.match(CalcParser.EQUAL);
	        this.state = 44;
	        localctx.value = this.expression(0);
	        this.state = 45;
	        this.eol();
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
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, CalcParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 48;
	            this.match(CalcParser.NUMBER_LIT);
	            break;
	        case 6:
	            this.state = 49;
	            this.match(CalcParser.ID);
	            break;
	        case 7:
	            this.state = 50;
	            this.match(CalcParser.LPAREN);
	            this.state = 51;
	            this.expression(0);
	            this.state = 52;
	            this.match(CalcParser.RPAREN);
	            break;
	        case 10:
	            this.state = 54;
	            this.match(CalcParser.MINUS);
	            this.state = 55;
	            this.expression(1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 64;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_expression);
	                    this.state = 58;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 59;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 60;
	                    this.expression(4);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_expression);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 62;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 63;
	                    this.expression(3);
	                    break;

	                } 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	}


}

CalcParser.EOF = antlr4.Token.EOF;
CalcParser.WS = 1;
CalcParser.NL = 2;
CalcParser.INPUT_KW = 3;
CalcParser.OUTPUT_KW = 4;
CalcParser.NUMBER_LIT = 5;
CalcParser.ID = 6;
CalcParser.LPAREN = 7;
CalcParser.RPAREN = 8;
CalcParser.EQUAL = 9;
CalcParser.MINUS = 10;
CalcParser.PLUS = 11;
CalcParser.MUL = 12;
CalcParser.DIV = 13;
CalcParser.UNRECOGNIZED = 14;

CalcParser.RULE_compilationUnit = 0;
CalcParser.RULE_eol = 1;
CalcParser.RULE_input = 2;
CalcParser.RULE_output = 3;
CalcParser.RULE_calc = 4;
CalcParser.RULE_expression = 5;

class CompilationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_compilationUnit;
        this._input = null; // InputContext
        this.inputs = []; // of InputContexts
        this._calc = null; // CalcContext
        this.calcs = []; // of CalcContexts
        this._output = null; // OutputContext
        this.outputs = []; // of OutputContexts
    }

	EOF() {
	    return this.getToken(CalcParser.EOF, 0);
	};

	input = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InputContext);
	    } else {
	        return this.getTypedRuleContext(InputContext,i);
	    }
	};

	calc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CalcContext);
	    } else {
	        return this.getTypedRuleContext(CalcContext,i);
	    }
	};

	output = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OutputContext);
	    } else {
	        return this.getTypedRuleContext(OutputContext,i);
	    }
	};


}



class EolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_eol;
    }

	NL() {
	    return this.getToken(CalcParser.NL, 0);
	};


}



class InputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_input;
    }

	INPUT_KW() {
	    return this.getToken(CalcParser.INPUT_KW, 0);
	};

	ID() {
	    return this.getToken(CalcParser.ID, 0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};


}



class OutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_output;
    }

	OUTPUT_KW() {
	    return this.getToken(CalcParser.OUTPUT_KW, 0);
	};

	ID() {
	    return this.getToken(CalcParser.ID, 0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};


}



class CalcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_calc;
        this.target = null; // Token
        this.value = null; // ExpressionContext
    }

	EQUAL() {
	    return this.getToken(CalcParser.EQUAL, 0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	ID() {
	    return this.getToken(CalcParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_expression;
        this.operator = null; // Token
    }

	NUMBER_LIT() {
	    return this.getToken(CalcParser.NUMBER_LIT, 0);
	};

	ID() {
	    return this.getToken(CalcParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(CalcParser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(CalcParser.RPAREN, 0);
	};

	MINUS() {
	    return this.getToken(CalcParser.MINUS, 0);
	};

	MUL() {
	    return this.getToken(CalcParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CalcParser.DIV, 0);
	};

	PLUS() {
	    return this.getToken(CalcParser.PLUS, 0);
	};


}




CalcParser.CompilationUnitContext = CompilationUnitContext; 
CalcParser.EolContext = EolContext; 
CalcParser.InputContext = InputContext; 
CalcParser.OutputContext = OutputContext; 
CalcParser.CalcContext = CalcContext; 
CalcParser.ExpressionContext = ExpressionContext; 
