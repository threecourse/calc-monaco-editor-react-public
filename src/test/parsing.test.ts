import * as parserFacade from 'domain/ParserFacade'

function checkError(actualError: parserFacade.Error, expectedError: parserFacade.Error) {
    it(`should have startLine ${expectedError.startLine}`, function () {
        expect(actualError.startLine).toBe( expectedError.startLine);
    });
    it(`should have endLine ${expectedError.endLine}`, function () {
        expect(actualError.endLine).toBe( expectedError.endLine);
    });
    it(`should have startCol ${expectedError.startCol}`, function () {
        expect(actualError.startCol).toBe( expectedError.startCol);
    });
    it(`should have endCol ${expectedError.endCol}`, function () {
        expect(actualError.endCol).toBe( expectedError.endCol);
    });
    it(`should have message ${expectedError.message}`, function () {
        expect(actualError.message).toBe( expectedError.message);
    });
}

function checkErrors(actualErrors: parserFacade.Error[], expectedErrors: parserFacade.Error[]) {
    it(`should have ${expectedErrors.length} error(s)`, function (){
        expect(actualErrors.length).toBe( expectedErrors.length);
    });
    let i;
    for (i = 0; i < expectedErrors.length; i++) {
        checkError(actualErrors[i], expectedErrors[i]);
    }
}

function parseAndCheckErrors(input: string, expectedErrors: parserFacade.Error[]) {
    const errors = parserFacade.validate(input);
    checkErrors(errors, expectedErrors);
}

it('Basic parsing', () => {
    expect(parserFacade.parseTreeStr("")).toBe( "(compilationUnit <EOF>)")
    expect(parserFacade.parseTreeStr("input a\n")).toBe( "(compilationUnit (input input a (eol \\n)) <EOF>)")
    expect(parserFacade.parseTreeStr("output a\n")).toBe( "(compilationUnit (output output a (eol \\n)) <EOF>)")
    expect(parserFacade.parseTreeStr("a = b + 1\n")).toBe( "(compilationUnit (calc a = (expression (expression b) + (expression 1)) (eol \\n)) <EOF>)")
    expect(parserFacade.parseTreeStr("input i\no = i + 1\noutput o\n")).toBe( "(compilationUnit (input input i (eol \\n)) (calc o = (expression (expression i) + (expression 1)) (eol \\n)) (output output o (eol \\n)) <EOF>)")
});

describe('Validation of simple errors on single lines', function () {
    describe('should have recognize missing operand', function () {
        parseAndCheckErrors("o = i + \n", [
            new parserFacade.Error(1, 1, 8, 9, "mismatched input '\\n' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
    describe('should have recognize extra operator', function () {
        parseAndCheckErrors("o = i +* 2 \n", [
            new parserFacade.Error(1, 1, 7, 8, "extraneous input '*' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
});

describe('Validation of simple errors in small scripts', function () {
    describe('should have recognize missing operand', function () {
        const input = "input i\no = i + \noutput o\n";
        parseAndCheckErrors(input, [
            new parserFacade.Error(2, 2, 8, 9, "mismatched input '\\n' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
    describe('should have recognize extra operator', function () {
        const input = "input i\no = i +* 2 \noutput o\n";
        parseAndCheckErrors(input, [
            new parserFacade.Error(2, 2, 7, 8, "extraneous input '*' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
});

describe('Validation of examples being edited', function () {
    describe('deleting number from division', function () {
        const input = "input a\n" +
            "b = a * 2\n" +
            "c = (a - b) / \n" +
            "output c\n";
        parseAndCheckErrors(input, [
            new parserFacade.Error(3, 3, 14, 15, "mismatched input '\\n' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
    describe('deleting number from multiplication', function () {
        const input = "input a\n" +
            "b = a * \n" +
            "c = (a - b) / 3\n" +
            "output c\n";
        parseAndCheckErrors(input, [
            new parserFacade.Error(2, 2, 8, 9, "mismatched input '\\n' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
    describe('adding plus to expression', function () {
        const input = "input a\n" +
            "b = a * 2 +\n" +
            "c = (a - b) / 3\n" +
            "output c\n";
        parseAndCheckErrors(input, [
            new parserFacade.Error(2, 2, 11, 12, "mismatched input '\\n' expecting {NUMBER_LIT, ID, '(', '-'}")
        ]);
    });
});

describe('Unrecognized tokens cause errors', function () {
    describe('extra dollor before identifier', function () {
        const input = "input a\n" +
            "$b = a * 2\n" +
            "c = (a - b) / 3\n" +
            "output c\n";
        parseAndCheckErrors(input, [
            new parserFacade.Error(2, 2, 0, 1, "extraneous input '$' expecting {<EOF>, 'input', 'output', ID}")
        ]);
    });
});
