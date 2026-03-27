import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/toBind - Глубокое объединение свойств`}),`
`,(0,c.jsx)(n.h1,{id:`tobind`,children:(0,c.jsx)(n.code,{children:`toBind`})}),`
`,(0,c.jsxs)(n.p,{children:[`Объединяет два объекта свойств, интеллектуально обрабатывая свойства `,(0,c.jsx)(n.code,{children:`class`}),` и `,(0,c.jsx)(n.code,{children:`style`}),`. Если оба объекта содержат классы или стили, они объединяются в массив для предотвращения перезаписи. Другие свойства из второго объекта (`,(0,c.jsx)(n.code,{children:`value`}),`) перезапишут свойства в первом объекте (`,(0,c.jsx)(n.code,{children:`extra`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`как-это-работает-механизм-слияния`,children:`Как это работает (Механизм слияния)`}),`
`,(0,c.jsx)(n.p,{children:`Функция принимает два объекта и возвращает новый объект, объединяя их свойства по следующим правилам:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обычные свойства:`}),` Свойства из второго объекта (`,(0,c.jsx)(n.code,{children:`value`}),`) заменяют свойства с таким же именем из первого объекта (`,(0,c.jsx)(n.code,{children:`extra`}),`). Это стандартное поведение оператора spread (`,(0,c.jsx)(n.code,{children:`...`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Свойство `,(0,c.jsx)(n.code,{children:`class`}),`:`]}),` Если свойство `,(0,c.jsx)(n.code,{children:`class`}),` присутствует `,(0,c.jsx)(n.strong,{children:`только в одном`}),` из объектов, оно переносится как есть. Если же класс указан `,(0,c.jsx)(n.strong,{children:`в обоих`}),` объектах, функция не перезаписывает их, а объединяет в массив `,(0,c.jsx)(n.code,{children:`[extra.class, value.class]`}),`. Это позволяет сохранить все классы, переданные в компонент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Свойство `,(0,c.jsx)(n.code,{children:`style`}),`:`]}),` Работает аналогично классам. Присутствие стилей в обоих объектах приведет к их объединению в массив `,(0,c.jsx)(n.code,{children:`[extra.style, value.style]`}),`, что необходимо для корректного применения всех стилей средствами Vue.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extra: ItemList`}),` — Базовый объект свойств (например, свойства по умолчанию или внутренние).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ItemList`}),` — Объект свойств для объединения с базовым (например, пользовательские свойства).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — Объединенный объект свойств.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toBind } from '@dxtmisha/functional'

const base = { class: 'btn', style: { color: 'red' }, id: 'my-btn' }
const mod = { class: 'btn--large', style: { margin: '10px' }, id: 'primary-btn' }

const result = toBind(base, mod)
/* 
Результат: { 
  id: 'primary-btn', 
  class: ['btn', 'btn--large'], 
  style: [{ color: 'red' }, { margin: '10px' }] 
}
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};