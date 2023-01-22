/* eslint-disable @typescript-eslint/no-unused-vars */
import antlr4 from "antlr4";
import {languages} from 'monaco-editor'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment,@typescript-eslint/prefer-ts-expect-error
// @ts-ignore
import CalcLexer from "antlr/generated/CalcLexer"
import Recognizer from "antlr4/Recognizer";
import Token from "antlr4/Token";
import RecognitionException from "antlr4/error/RecognitionException";
import {createLexer} from './ParserFacade'
import error = antlr4.error;
import ILineTokens = languages.ILineTokens;
import IToken = languages.IToken;

export class CalcState implements languages.IState {
    clone(): languages.IState {
        return new CalcState();
    }

    equals(other: languages.IState): boolean {
        return true;
    }
}

export class CalcTokensProvider implements languages.TokensProvider {
    getInitialState(): languages.IState {
        return new CalcState();
    }

    tokenize(line: string, state: languages.IState): languages.ILineTokens {
        // So far we ignore the state, which is not great for performance reasons
        return tokensForLine(line);
    }

}

const EOF = -1;

class CalcToken implements IToken {
    scopes: string;
    startIndex: number;

    constructor(ruleName: string, startIndex: number) {
        this.scopes = ruleName.toLowerCase() + ".calc";
        this.startIndex = startIndex;
    }
}

class CalcLineTokens implements ILineTokens {
    endState: languages.IState;
    tokens: languages.IToken[];

    constructor(tokens: languages.IToken[]) {
        this.endState = new CalcState();
        this.tokens = tokens;
    }
}

export function tokensForLine(input: string): languages.ILineTokens {
    const errorStartingPoints: number[] = [];

    class ErrorCollectorListener extends error.ErrorListener {
        syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException) {
            errorStartingPoints.push(column)
        }
    }

    const lexer = createLexer(input);
    lexer.removeErrorListeners();
    const errorListener = new ErrorCollectorListener();
    lexer.addErrorListener(errorListener);
    let done = false;
    const myTokens: languages.IToken[] = [];
    do {
        const token = lexer.nextToken();
        if (token == null) {
            done = true
        } else {
            // We exclude EOF
            if (token.type === EOF) {
                done = true;
            } else {
                const tokenTypeName = CalcLexer.symbolicNames[token.type] as string;
                const myToken = new CalcToken(tokenTypeName, token.column);
                myTokens.push(myToken);
            }
        }
    } while (!done);

    // Add all errors
    for (const e of errorStartingPoints) {
        myTokens.push(new CalcToken("error.calc", e));
    }
    myTokens.sort((a, b) => (a.startIndex > b.startIndex) ? 1 : -1)

    return new CalcLineTokens(myTokens);
}
