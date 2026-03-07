import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/getRequestString - Формирование строки запроса"}),`
`,n.jsx(e.h1,{id:"getrequeststring",children:n.jsx(e.code,{children:"getRequestString"})}),`
`,n.jsxs(e.p,{children:["Преобразует объект словаря в URL-формат (по умолчанию строку запроса для GET-параметров), где ключи и значения объединяются заданными разделителями. Перед формированием строки все значения приводятся к строке, очищаются от пробелов по краям и пропускаются через ",n.jsx(e.code,{children:"encodeURIComponent"})," для безопасной передачи через URL. Ключи сортируются в алфавитном порядке."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"request: Record<string, any>"})," — Объект с данными для преобразования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sign: string"})," — (Необязательно) Символ соединения между ключом и значением. По умолчанию ",n.jsx(e.code,{children:"="}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"separator: string"})," — (Необязательно) Разделитель между парами. По умолчанию ",n.jsx(e.code,{children:"&"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — Отформатированная и отсортированная строка."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'удобный стул'
}

console.log(getRequestString(params)) 
// 'page=2&search=%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%81%D1%82%D1%83%D0%BB&sort=desc'
`})})]})}function h(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{h as default};
