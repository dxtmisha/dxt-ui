import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/functional-basic/Functions/executeFunction - Выполнение функции или возврат значения"}),`
`,n.jsx(e.h1,{id:"executefunction",children:n.jsx(e.code,{children:"executeFunction"})}),`
`,n.jsx(e.p,{children:"Утилита, которая проверяет переданный аргумент. Если аргумент является функцией, он выполняется, и функция возвращает результат этого выполнения. В противном случае, переданный аргумент возвращается как есть (без изменений)."}),`
`,n.jsx(e.p,{children:"Это полезно для параметров, которые могут быть как статическим значением, так и функцией, вычисляющей это значение по требованию (например, для ленивых вычислений или значений по умолчанию)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: T | FunctionArgs<any, T>"})," — Значение любого типа или функция, возвращающая значение типа ",n.jsx(e.code,{children:"T"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"T"})," — Результат выполнения функции или переданное значение."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { executeFunction } from '@dxtmisha/functional-basic'

// Передаем статическое значение
console.log(executeFunction('Привет')) // 'Привет'

// Передаем функцию
const lazyValue = () => {
  return 'Загружено лениво'
}
console.log(executeFunction(lazyValue)) // 'Загружено лениво'
`})})]})}function a(c={}){const{wrapper:e}={...o(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{a as default};
