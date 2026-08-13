import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/domQuerySelectorAll - Выбор элементов в DOM`}),`
`,(0,c.jsx)(t.h1,{id:`domqueryselectorall`,children:(0,c.jsx)(t.code,{children:`domQuerySelectorAll`})}),`
`,(0,c.jsxs)(t.p,{children:[`Ищет и возвращает список всех HTML-элементов, соответствующих указанным CSS-селекторам. Возвращаемый результат представляет собой статический (не живой) `,(0,c.jsx)(t.code,{children:`NodeList`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет наличие браузерного (DOM) окружения посредством вызова `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`. На сервере или в среде без DOM возвращается `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectors: string`}),` — Строка, содержащая один или несколько селекторов для поиска.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`NodeListOf<E> | undefined`}),` — Коллекцию найденных элементов (может быть пустой, если ничего не найдено), либо `,(0,c.jsx)(t.code,{children:`undefined`}),`, если DOM недоступен.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Поиск всех элементов с определенным классом
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};