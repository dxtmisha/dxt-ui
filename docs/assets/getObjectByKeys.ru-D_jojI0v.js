import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/getObjectByKeys - Объект по списку ключей"}),`
`,n.jsx(e.h1,{id:"getobjectbykeys",children:n.jsx(e.code,{children:"getObjectByKeys"})}),`
`,n.jsxs(e.p,{children:["Создает и возвращает новый объект, в который копируются только свойства с указанными ключами из исходного объекта. Свойства, которых нет в исходном объекте или значение которых равно ",n.jsx(e.code,{children:"undefined"}),", игнорируются при копировании."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Record<string, any>"})," — Исходный объект с данными."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keys: string[]"})," — Массив строковых ключей, которые необходимо извлечь."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"Record<string, any>"})," — Новый объект, содержащий только найденные выбранные свойства. Одноименные значения, равные ",n.jsx(e.code,{children:"undefined"}),", не попадут в результат."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined пропускаются
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{x as default};
