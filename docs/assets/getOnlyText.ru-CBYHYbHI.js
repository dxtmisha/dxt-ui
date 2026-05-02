import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getOnlyText - Извлечение букв, цифр и пробелов из строки`}),`
`,(0,c.jsx)(n.h1,{id:`getonlytext`,children:(0,c.jsx)(n.code,{children:`getOnlyText`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита, которая возвращает из строки только буквы, цифры и пробелы, удаляя знаки препинания, специальные символы и прочие знаки.`}),`
`,(0,c.jsx)(n.p,{children:`Это полезно для очистки пользовательского ввода или подготовки текста к упрощенной обработке, когда требуется только алфавитно-цифровое содержимое.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: any`}),` — Текст для обработки.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Строка, содержащая только буквы, цифры или пробелы.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getOnlyText } from '@dxtmisha/functional-basic'

console.log(getOnlyText('Hello, World!')) // 'Hello World'
console.log(getOnlyText('Цена: 100 руб.')) // 'Цена 100 руб'
console.log(getOnlyText('Текст с символами: #@!%')) // 'Текст с символами'
console.log(getOnlyText(12345)) // '12345'
console.log(getOnlyText(null)) // ''
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};