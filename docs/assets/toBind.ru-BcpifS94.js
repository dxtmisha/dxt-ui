import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/toBind - Глубокое объединение свойств`}),`
`,(0,c.jsx)(t.h1,{id:`tobind`,children:(0,c.jsx)(t.code,{children:`toBind`})}),`
`,(0,c.jsxs)(t.p,{children:[`Объединяет два объекта свойств, интеллектуально обрабатывая свойства `,(0,c.jsx)(t.code,{children:`class`}),` и `,(0,c.jsx)(t.code,{children:`style`}),`. Если оба объекта содержат классы или стили, они объединяются в массив для предотвращения перезаписи. Другие свойства из второго объекта (`,(0,c.jsx)(t.code,{children:`value`}),`) перезапишут свойства в первом объекте (`,(0,c.jsx)(t.code,{children:`extra`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`как-это-работает-механизм-слияния`,children:`Как это работает (Механизм слияния)`}),`
`,(0,c.jsx)(t.p,{children:`Функция принимает два объекта и возвращает новый объект, объединяя их свойства по следующим правилам:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обычные свойства:`}),` Свойства из второго объекта (`,(0,c.jsx)(t.code,{children:`value`}),`) заменяют свойства с таким же именем из первого объекта (`,(0,c.jsx)(t.code,{children:`extra`}),`). Это стандартное поведение оператора spread (`,(0,c.jsx)(t.code,{children:`...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`class`}),`:`]}),` Если свойство `,(0,c.jsx)(t.code,{children:`class`}),` присутствует `,(0,c.jsx)(t.strong,{children:`только в одном`}),` из объектов, оно переносится как есть. Если же класс указан `,(0,c.jsx)(t.strong,{children:`в обоих`}),` объектах, функция не перезаписывает их, а объединяет в массив `,(0,c.jsx)(t.code,{children:`[extra.class, value.class]`}),`. Это позволяет сохранить все классы, переданные в компонент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Свойство `,(0,c.jsx)(t.code,{children:`style`}),`:`]}),` Работает аналогично классам. Присутствие стилей в обоих объектах приведет к их объединению в массив `,(0,c.jsx)(t.code,{children:`[extra.style, value.style]`}),`, что необходимо для корректного применения всех стилей средствами Vue.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extra: ItemList`}),` — Базовый объект свойств (например, свойства по умолчанию или внутренние).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ItemList`}),` — Объект свойств для объединения с базовым (например, пользовательские свойства).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — Объединенный объект свойств.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toBind } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};