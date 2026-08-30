import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getOnlyText - Извлечение букв, цифр и пробелов из строки`}),`
`,(0,c.jsx)(t.h1,{id:`getonlytext`,children:(0,c.jsx)(t.code,{children:`getOnlyText`})}),`
`,(0,c.jsx)(t.p,{children:`Утилита, которая возвращает из строки только буквы, цифры и пробелы, удаляя знаки препинания, специальные символы и прочие знаки.`}),`
`,(0,c.jsx)(t.p,{children:`Это полезно для очистки пользовательского ввода или подготовки текста к упрощенной обработке, когда требуется только алфавитно-цифровое содержимое.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: any`}),` — Текст для обработки.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Строка, содержащая только буквы, цифры или пробелы.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getOnlyText } from '@dxtmisha/functional-basic'

console.log(getOnlyText('Hello, World!')) // 'Hello World'
console.log(getOnlyText('Цена: 100 руб.')) // 'Цена 100 руб'
console.log(getOnlyText('Текст с символами: #@!%')) // 'Текст с символами'
console.log(getOnlyText(12345)) // '12345'
console.log(getOnlyText(null)) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};