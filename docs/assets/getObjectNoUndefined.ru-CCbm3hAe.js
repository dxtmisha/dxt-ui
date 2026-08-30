import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getObjectNoUndefined - Удаление свойств со значением-исключением`}),`
`,(0,c.jsx)(t.h1,{id:`getobjectnoundefined`,children:(0,c.jsx)(t.code,{children:`getObjectNoUndefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Создает и возвращает новый объект, в который скопированы только те свойства исходного объекта или массива, значения которых `,(0,c.jsx)(t.strong,{children:`не равны`}),` значению-исключению (строгое сравнение). По умолчанию значением-исключением является `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Функция полезна для очистки данных перед отправкой на сервер или для нормализации объектов. При передаче массива индексы будут преобразованы в строковые ключи результирующего объекта.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: T`}),` — Исходный объект или массив (где `,(0,c.jsx)(t.code,{children:`T extends Record<string | number, any>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`exception: any`}),` — Значение, свойства с которым будут исключены. По умолчанию равно `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Новый объект, очищенный от свойств с указанным значением.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};