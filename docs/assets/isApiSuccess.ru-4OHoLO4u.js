import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/isApiSuccess - Проверка успешности ответа API"}),`
`,s.jsx(e.h1,{id:"isapisuccess",children:s.jsx(e.code,{children:"isApiSuccess"})}),`
`,s.jsx(e.p,{children:"Проверяет, является ли ответ API успешным."}),`
`,s.jsx(e.p,{children:"Проверка выполняется по следующим правилам:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Если данные являются массивом, это считается успехом."}),`
`,s.jsxs(e.li,{children:["Если данные являются объектом, успех определяется полями ",s.jsx(e.code,{children:"status === 'success'"})," или ",s.jsx(e.code,{children:"success === true"}),"."]}),`
`,s.jsxs(e.li,{children:["Если присутствует поле ",s.jsx(e.code,{children:"statusObject"}),", успех определяется кодом статуса HTTP (начинается с 2)."]}),`
`,s.jsx(e.li,{children:"Если ни одно из полей не присутствует, успех определяется глобальным статусом API."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Параметры:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"data: ApiData<T>"})," — данные ответа API."]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Возвращает:"}),`
`,s.jsx(e.code,{children:"boolean"})," — ",s.jsx(e.code,{children:"true"}),", если ответ успешен, иначе ",s.jsx(e.code,{children:"false"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { isApiSuccess } from '@dxtmisha/functional-basic'

console.log(isApiSuccess({ status: 'success' })) // true
console.log(isApiSuccess({ success: true })) // true
console.log(isApiSuccess([])) // true
`})})]})}function h(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(c,{...n})}):c(n)}export{h as default};
