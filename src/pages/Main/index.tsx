import Editor, {BeforeMount, OnMount} from "@monaco-editor/react";
import {CalcTokensProvider} from "../../domain/CalcTokensProvider";
import {validate} from "domain/ParserFacade";

export const Main: React.FC = () => {

    const onBeforeMount: BeforeMount = (monaco) => {

        monaco.languages.register({ id: 'calc' })
        monaco.languages.setTokensProvider('calc', new CalcTokensProvider());
        const literalFg = '3b8737';
        const idFg = '344482';
        const symbolsFg = '000000';
        const keywordFg = '7132a8';
        const errorFg = 'ff0000';

        monaco.editor.defineTheme('myCoolTheme', {
            base: 'vs',
            inherit: false,
            rules: [
                { token: 'number_lit.calc',   foreground: literalFg },
                { token: 'id.calc',           foreground: idFg,       fontStyle: 'italic' },
                { token: 'lparen.calc',       foreground: symbolsFg },
                { token: 'rparen.calc',       foreground: symbolsFg },
                { token: 'equal.calc',        foreground: symbolsFg },
                { token: 'minus.calc',        foreground: symbolsFg },
                { token: 'plus.calc',         foreground: symbolsFg },
                { token: 'div.calc',          foreground: symbolsFg },
                { token: 'mul.calc',          foreground: symbolsFg },
                { token: 'input_kw.calc',     foreground: keywordFg,  fontStyle: 'bold' },
                { token: 'output_kw.calc',    foreground: keywordFg,  fontStyle: 'bold' },
                { token: 'unrecognized.calc', foreground: errorFg }
            ],
            colors: {}
        })
    }

    const onMount: OnMount = (editor, monaco) => {
        editor.onDidChangeModelContent(function () {
            const code = editor.getValue()
            const syntaxErrors = validate(code);
            const monacoErrors = [];
            for (const e of syntaxErrors) {
                monacoErrors.push({
                    startLineNumber: e.startLine,
                    startColumn: e.startCol,
                    endLineNumber: e.endLine,
                    endColumn: e.endCol,
                    message: e.message,
                    severity: monaco.MarkerSeverity.Error
                });
            };
            // window.syntaxErrors = syntaxErrors;
            const model = monaco.editor.getModels()[0];
            monaco.editor.setModelMarkers(model, "owner", monacoErrors);
        });
    }

    const value = [
        'input salary',
        'input nEmployees',
        'input revenues',
        'input otherExpenses',
        'input taxRate',
        '',
        'totalExpenses = salary * nEmployees + otherExpenses',
        'grossProfit = revenues - totalExpenses',
        'totalTaxes = grossProfit * (taxRate / 100)',
        'profit = profit - totalTaxes',
        '',
        'output totalTaxes',
        'output profit',
        ''
    ].join('\n')

    return (
        <Editor
            height="60vh"
            language="calc"
            theme="myCoolTheme"
            value={value}
            beforeMount={onBeforeMount}
            onMount={onMount}
        />
    );
}
