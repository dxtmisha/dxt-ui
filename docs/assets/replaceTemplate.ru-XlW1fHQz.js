import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/replaceTemplate - Подстановка значений в строку шаблона"}),`
`,n.jsx(e.h1,{id:"replacetemplate",children:n.jsx(e.code,{children:"replaceTemplate"})}),`
`,n.jsxs(e.p,{children:["Ищет в исходной строке маркеры вида ",n.jsx(e.code,{children:"[pattern]"})," и заменяет их на значения из переданного объекта. Если значением маркера является функция, она автоматически вызывается, и в строку подставляется результат ее выполнения."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string"})," — Строка шаблона с маркерами (например, ",n.jsx(e.code,{children:"[name]"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replaces: Record<string, string | FunctionReturn<string>>"})," — Объект с данными для замены, где ключ — имя маркера внутри скобок, а значение — строка или функция, возвращающая строку."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Новая строка с подставленными значениями."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { replaceTemplate } from '@dxtmisha/functional-basic'

const template = 'Привет, [name]! Твой баланс: [balance].'
const data = {
  name: 'Иван',
  balance: () => '100$' // Функция вычисляется при подстановке
}

console.log(replaceTemplate(template, data)) 
// 'Привет, Иван! Твой баланс: 100$.'
`})})]})}function m(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{m as default};
