## Integrate "Writing a browser based editor using Monaco and ANTLR" with React

## requirements

* node 16.18.0
* python 3.9.9
* poetry

## install

* install python packages (for task-runner)
  * `poetry install`
* install npm packages
  * `yarn`

## usage

* get antlr 
  * `poetry run inv get-antlr`
* generate lexer and parser
  * `poetry run inv generate-lexer`
  * `poetry run inv generate-parser`
* run app
  * `yarn dev`

## changes

* integrate with react
  * used @monaco-editor/react package 
* upgrade antlr to 4.11.1
  * to follow esm
* changed frontend framework to vite-based

## reference

* "Writing a browser based editor using Monaco and ANTLR"
  * https://tomassetti.me/writing-a-browser-based-editor-using-monaco-and-antlr/
  * https://github.com/Strumenta/calc-monaco-editor

* @monaco-editor/react
  * https://github.com/suren-atoyan/monaco-react

