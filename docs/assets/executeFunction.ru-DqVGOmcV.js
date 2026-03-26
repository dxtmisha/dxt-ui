import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Functions/executeFunction - Выполнение функции или возврат значения`}),`
`,(0,c.jsx)(n.h1,{id:`executefunction`,children:(0,c.jsx)(n.code,{children:`executeFunction`})}),`
`,(0,c.jsx)(n.p,{children:`Утилита, которая проверяет переданный аргумент. Если аргумент является функцией, он выполняется, и функция возвращает результат этого выполнения. В противном случае, переданный аргумент возвращается как есть (без изменений).`}),`
`,(0,c.jsx)(n.p,{children:`Это полезно для параметров, которые могут быть как статическим значением, так и функцией, вычисляющей это значение по требованию (например, для ленивых вычислений или значений по умолчанию).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T | FunctionArgs<any, T>`}),` — Значение любого типа или функция, возвращающая значение типа `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Результат выполнения функции или переданное значение.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// Передаем статическое значение
console.log(executeFunction('Привет')) // 'Привет'

// Передаем функцию
const lazyValue = () => {
  return 'Загружено лениво'
}
console.log(executeFunction(lazyValue)) // 'Загружено лениво'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};