import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/domQuerySelectorAll - Выбор элементов в DOM`}),`
`,(0,c.jsx)(n.h1,{id:`domqueryselectorall`,children:(0,c.jsx)(n.code,{children:`domQuerySelectorAll`})}),`
`,(0,c.jsxs)(n.p,{children:[`Ищет и возвращает список всех HTML-элементов, соответствующих указанным CSS-селекторам. Возвращаемый результат представляет собой статический (не живой) `,(0,c.jsx)(n.code,{children:`NodeList`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет наличие браузерного (DOM) окружения посредством вызова `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. На сервере или в среде без DOM возвращается `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectors: string`}),` — Строка, содержащая один или несколько селекторов для поиска.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`NodeListOf<E> | undefined`}),` — Коллекцию найденных элементов (может быть пустой, если ничего не найдено), либо `,(0,c.jsx)(n.code,{children:`undefined`}),`, если DOM недоступен.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Поиск всех элементов с определенным классом
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};