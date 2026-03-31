import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/executePromise - Выполнение Promise или функции`}),`
`,(0,c.jsx)(n.h1,{id:`executepromise`,children:(0,c.jsx)(n.code,{children:`executePromise`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита, которая безопасно выполняет функцию и/или дожидается разрешения асинхронного результата (Promise).`}),`
`,(0,c.jsxs)(n.p,{children:[`Внутри используется функция `,(0,c.jsx)(n.code,{children:`executeFunction`}),`. Если передан аргумент в виде функции возвращающей промис, `,(0,c.jsx)(n.code,{children:`executePromise`}),` выполнит эту функцию и дождётся выполнения `,(0,c.jsx)(n.code,{children:`Promise`}),`. Если будет передано синхронное значение или обычная функция, возвращающая синхронное значение, утилита сразу вернёт этот результат.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (() => Promise<T>) | (() => T) | T`}),` — Значение, `,(0,c.jsx)(n.code,{children:`Promise`}),` или функция, способная вернуть `,(0,c.jsx)(n.code,{children:`Promise`}),` или обычное значение.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — Промис, разрешающийся в переданное или вычисленное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

// С асинхронной функцией
const fetchData = async () => {
  return await fetch('/api/data').then(res => res.json())
}
const result1 = await executePromise(fetchData)

// С обычной функцией
const staticData = () => 'Синхронные данные'
const result2 = await executePromise(staticData)

// Со статическим значением
const result3 = await executePromise('Данные')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};