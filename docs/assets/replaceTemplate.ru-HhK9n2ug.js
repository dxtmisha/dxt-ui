import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/replaceTemplate - Подстановка значений в строку шаблона`}),`
`,(0,c.jsx)(t.h1,{id:`replacetemplate`,children:(0,c.jsx)(t.code,{children:`replaceTemplate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Ищет в исходной строке маркеры вида `,(0,c.jsx)(t.code,{children:`[pattern]`}),` и заменяет их на значения из переданного объекта. Если значением маркера является функция, она автоматически вызывается, и в строку подставляется результат ее выполнения.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — Строка шаблона с маркерами (например, `,(0,c.jsx)(t.code,{children:`[name]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replaces: Record<string, string | FunctionReturn<string>>`}),` — Объект с данными для замены, где ключ — имя маркера внутри скобок, а значение — строка или функция, возвращающая строку.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Новая строка с подставленными значениями.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Привет, [name]! Твой баланс: [balance].'
const data = {
  name: 'Иван',
  balance: () => '100$' // Функция вычисляется при подстановке
}

console.log(replaceTemplate(template, data)) 
// 'Привет, Иван! Твой баланс: 100$.'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};