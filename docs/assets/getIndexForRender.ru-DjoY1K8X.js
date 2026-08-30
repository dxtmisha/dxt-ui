import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/getIndexForRender - Генерация ключа для рендеринга`}),`
`,(0,c.jsx)(t.h1,{id:`getindexforrender`,children:(0,c.jsx)(t.code,{children:`getIndexForRender`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, используемая для генерации уникального ключа (`,(0,c.jsx)(t.code,{children:`key`}),`) компонента. Ключ формируется `,(0,c.jsx)(t.strong,{children:`аддитивно`}),`: все идентифицированные части (включая имя компонента) соединяются через точку.`]}),`
`,(0,c.jsx)(t.h3,{id:`параметры`,children:`Параметры:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | any`}),` — Имя или тег компонента (база ключа).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Свойства компонента (используются для извлечения `,(0,c.jsx)(t.code,{children:`index`}),`, `,(0,c.jsx)(t.code,{children:`class`}),` и `,(0,c.jsx)(t.code,{children:`id`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: string`}),` — Необязательный внешний индекс.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`string | undefined`}),` — Сгенерированный составной ключ или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если ключ не может быть сгенерирован.`]}),`
`,(0,c.jsx)(t.h3,{id:`примеры-генерации`,children:`Примеры генерации:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getIndexForRender } from '@dxtmisha/functional'

// 1. Только имя
getIndexForRender('li') 
// => '.li'

// 2. Имя + внешний индекс
getIndexForRender('div', {}, 'row-1') 
// => '.div.row-1'

// 3. Имя + индекс из props + класс + id
getIndexForRender('button', { 
  index: 'primary', 
  class: 'btn-large', 
  id: 'submit-01' 
}) 
// => '.button.primary.btn-large.submit-01'

// 4. Полный набор (внешний аргумент + всё из props)
getIndexForRender('span', { 
  index: 'p-idx', 
  class: 'text-red', 
  id: 'id-99' 
}, 'arg-idx') 
// => '.span.arg-idx.p-idx.text-red.id-99'

// 5. Пустой случай
getIndexForRender(undefined)
// => undefined
`})}),`
`,(0,c.jsx)(t.h3,{id:`логика-сборки-ключа`,children:`Логика сборки ключа`}),`
`,(0,c.jsx)(t.p,{children:`Ключ собирается по цепочке:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.name`})}),` (если `,(0,c.jsx)(t.code,{children:`name`}),` является строкой)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .index`}),` (если передан аргумент `,(0,c.jsx)(t.code,{children:`index`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .props.index`}),` (если есть в свойствах и является строкой)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .className`}),` (если есть в свойствах)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`+ .props.id`}),` (if present in properties)`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};