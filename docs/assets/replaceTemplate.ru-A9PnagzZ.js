import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/replaceTemplate - Подстановка значений в строку шаблона`}),`
`,(0,c.jsx)(n.h1,{id:`replacetemplate`,children:(0,c.jsx)(n.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Ищет в исходной строке маркеры вида `,(0,c.jsx)(n.code,{children:`[pattern]`}),` и заменяет их на значения из переданного объекта. Если значением маркера является функция, она автоматически вызывается, и в строку подставляется результат ее выполнения.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Строка шаблона с маркерами (например, `,(0,c.jsx)(n.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaces: Record<string, string | FunctionReturn<string>>`}),` — Объект с данными для замены, где ключ — имя маркера внутри скобок, а значение — строка или функция, возвращающая строку.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Новая строка с подставленными значениями.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Привет, [name]! Твой баланс: [balance].'
const data = {
  name: 'Иван',
  balance: () => '100$' // Функция вычисляется при подстановке
}

console.log(replaceTemplate(template, data)) 
// 'Привет, Иван! Твой баланс: 100$.'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};