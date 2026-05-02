import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/getObjectNoUndefined - Удаление свойств со значением-исключением`}),`
`,(0,c.jsx)(n.h1,{id:`getobjectnoundefined`,children:(0,c.jsx)(n.code,{children:`getObjectNoUndefined`})}),`
`,(0,c.jsxs)(n.p,{children:[`Создает и возвращает новый объект, в который скопированы только те свойства исходного объекта или массива, значения которых `,(0,c.jsx)(n.strong,{children:`не равны`}),` значению-исключению (строгое сравнение). По умолчанию значением-исключением является `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Функция полезна для очистки данных перед отправкой на сервер или для нормализации объектов. При передаче массива индексы будут преобразованы в строковые ключи результирующего объекта.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T`}),` — Исходный объект или массив (где `,(0,c.jsx)(n.code,{children:`T extends Record<string | number, any>`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`exception: any`}),` — Значение, свойства с которым будут исключены. По умолчанию равно `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Новый объект, очищенный от свойств с указанным значением.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};