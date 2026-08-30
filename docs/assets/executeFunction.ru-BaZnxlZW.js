import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/executeFunction - Выполнить функцию или вернуть значение`}),`
`,(0,c.jsx)(t.h1,{id:`executefunction`,children:(0,c.jsx)(t.code,{children:`executeFunction`})}),`
`,(0,c.jsxs)(t.p,{children:[`Универсальная утилита для обработки аргументов, которые могут быть как статическим значением, так и функцией. Если переданный аргумент является функцией, `,(0,c.jsx)(t.code,{children:`executeFunction`}),` выполняет его с указанными аргументами и возвращает результат. В противном случае возвращается сам аргумент.`]}),`
`,(0,c.jsx)(t.p,{children:`Этот паттерн крайне эффективен для реализации «ленивых» вычислений, динамических значений по умолчанию или свойств конфигурации, которые могут быть как фиксированными, так и вычисляемыми.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: T | ((...args: any[]) => T)`}),` — Значение для обработки. Может быть литералом или функцией, возвращающей тип `,(0,c.jsx)(t.code,{children:`T`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...args: any[]`}),` (опционально) — Аргументы, которые будут переданы в функцию, если `,(0,c.jsx)(t.code,{children:`callback`}),` является вызываемым.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Результат выполнения функции или само исходное значение.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// 1. Обработка статического значения
console.log(executeFunction('Привет')) // 'Привет'

// 2. Динамическое выполнение
const getLabel = (prefix: string) => \`\${prefix}: Текст\`
console.log(executeFunction(getLabel, 'Админ')) // 'Админ: Текст'

// 3. Гибкая логика вызова
const value = Math.random() > 0.5 ? 'Статика' : () => 'Вычислено'
console.log(executeFunction(value)) // 'Статика' или 'Вычислено'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};