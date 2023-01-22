/* eslint-disable @typescript-eslint/prefer-ts-expect-error,@typescript-eslint/ban-ts-comment */
import * as parserFacade from 'domain/ParserFacade'
import Token from 'antlr4/Token';
import CalcLexer from "../antlr/generated/CalcLexer";

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

function checkToken(tokens: Token[], index: number, typeName: string , column: number, text: string) {
    it(`should have ${typeName} in position ${index}`, function () {
       // @ts-ignore
       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
       const lexerType: string = CalcLexer[typeName]

       expect(tokens[index].type).toBe(lexerType);
       expect(tokens[index].column).toBe(column);
       expect(tokens[index].text).toBe(text);
    });
}

describe('Basic lexing without spaces', function () {
    const tokens = parserFacade.getTokens("a=5");
    it('should return 3 tokens', function() {
     expect(tokens.length).toBe( 3);
    });
    checkToken(tokens, 0, 'ID', 0, "a");
    checkToken(tokens, 1, 'EQUAL', 1, "=");
    checkToken(tokens, 2, 'NUMBER_LIT', 2, "5");
});

describe('Basic lexing with spaces', function () {
    const tokens = parserFacade.getTokens("a = 5");
    it('should return 5 tokens', function() {
       expect(tokens.length).toBe( 5);
    });
    checkToken(tokens, 0, 'ID', 0, "a");
    checkToken(tokens, 1, 'WS', 1, " ");
    checkToken(tokens, 2, 'EQUAL', 2, "=");
    checkToken(tokens, 3, 'WS', 3, " ");
    checkToken(tokens, 4, 'NUMBER_LIT', 4, "5");
});