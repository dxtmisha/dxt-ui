import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional-basic/Functions/getObjectNoUndefined - Удаление свойств со значением-исключением"}),`
`,n.jsx(e.h1,{id:"getobjectnoundefined",children:n.jsx(e.code,{children:"getObjectNoUndefined"})}),`
`,n.jsxs(e.p,{children:["Создает и возвращает новый объект, в который скопированы только те свойства исходного объекта или массива, значения которых ",n.jsx(e.strong,{children:"не равны"})," значению-исключению (строгое сравнение). По умолчанию значением-исключением является ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:"Функция полезна для очистки данных перед отправкой на сервер или для нормализации объектов. При передаче массива индексы будут преобразованы в строковые ключи результирующего объекта."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T"})," — Исходный объект или массив (где ",n.jsx(e.code,{children:"T extends Record<string | number, any>"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"exception: any"})," — Значение, свойства с которым будут исключены. По умолчанию равно ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"T"})," — Новый объект, очищенный от свойств с указанным значением."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

const user = {
  name: 'John',
  age: 25,
  description: undefined, // Будет удалено (по умолчанию)
  status: 'guest'
}

console.log(getObjectNoUndefined(user)) 
// { name: 'John', age: 25, status: 'guest' }

// Удалить свойства со значением 'guest'
console.log(getObjectNoUndefined(user, 'guest'))
// { name: 'John', age: 25, description: undefined }
`})})]})}function a(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{a as default};
