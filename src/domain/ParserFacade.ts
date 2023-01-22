/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment,@typescript-eslint/prefer-ts-expect-error */
import antlr4 from "antlr4"
// @ts-ignore
import CalcLexer from "antlr/generated/CalcLexer"
// @ts-ignore
import CalcParser from "antlr/generated/CalcParser"
import Recognizer from "antlr4/Recognizer";
import RecognitionException from "antlr4/error/RecognitionException";
import error = antlr4.error
import InputStream = antlr4.InputStream
import CommonTokenStream = antlr4.CommonTokenStream
import DefaultErrorStrategy = error.DefaultErrorStrategy
import Token = antlr4.Token
import Parser = antlr4.Parser

class ConsoleErrorListener extends error.ErrorListener {
    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException) {
        console.log("ERROR " + msg);
    }
}

export class Error {
    startLine: number;
    endLine: number;
    startCol: number;
    endCol: number;
    message: string;

    constructor(startLine: number, endLine: number, startCol: number, endCol: number, message: string) {
        this.startLine = startLine;
        this.endLine = endLine;
        this.startCol = startCol;
        this.endCol = endCol;
        this.message = message;
    }

}

class CollectorErrorListener extends error.ErrorListener {

    private readonly errors : Error[] = []

    constructor(errors: Error[]) {
        super()
        this.errors = errors
    }

    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException) {
        let endColumn = column + 1;
        if (offendingSymbol.text !== null) {
            endColumn = column + offendingSymbol.text.length;
        }
        this.errors.push(new Error(line, line, column, endColumn, msg));
    }

}

export function createLexer(input: string): CalcLexer {
    const chars = new InputStream(input);
    const lexer = new CalcLexer(chars);

    // @ts-ignore
    lexer.strictMode = false;

    return lexer;
}

export function getTokens(input: string) : Token[] {
    return createLexer(input).getAllTokens()
}

function createParser(input: string): CalcParser {
    const lexer = createLexer(input);

    return createParserFromLexer(lexer);
}

function createParserFromLexer(lexer: antlr4.Lexer): CalcParser {
    const tokens = new CommonTokenStream(lexer);

    return new CalcParser(tokens);
}

function parseTree(input: string): antlr4.ParserRuleContext {
    const parser = createParser(input);

    return parser.compilationUnit();
}

export function parseTreeStr(input: string): string {
    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ConsoleErrorListener());

    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new ConsoleErrorListener());

    const tree = parser.compilationUnit();

    return tree.toStringTree(parser.ruleNames, parser);
}

class CalcErrorStrategy extends DefaultErrorStrategy {

    reportUnwantedToken(recognizer: Parser) {
        return super.reportUnwantedToken(recognizer);
    }

    singleTokenDeletion(recognizer: Parser): antlr4.Token {
        const nextTokenType = recognizer.getTokenStream().LA(2);
        if (recognizer.getTokenStream().LA(1) === CalcParser.NL) {
            // @ts-ignore
            return null;
        }
        const expecting = this.getExpectedTokens(recognizer);
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (expecting.contains(nextTokenType) as boolean) {
            this.reportUnwantedToken(recognizer);
            recognizer.consume(); // simply delete extra token
            // we want to return the token we're actually matching
            const matchedSymbol = recognizer.getCurrentToken();
            this.reportMatch(recognizer); // we know current token is correct

            return matchedSymbol;
        } else {
            // @ts-ignore
            return null;
        }
    }

    getExpectedTokens = function(recognizer: Parser) {
        return recognizer.getExpectedTokens();
    };

    reportMatch = (recognizer: Parser) => {
        this.endErrorCondition(recognizer);
    };

}

export function validate(input: string) : Error[] {
    const errors : Error[] = [];

    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ConsoleErrorListener());

    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new CollectorErrorListener(errors));
    parser._errHandler = new CalcErrorStrategy();

    const tree = parser.compilationUnit();

    return errors;
}
