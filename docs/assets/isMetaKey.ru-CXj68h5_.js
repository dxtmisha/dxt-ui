import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isMetaKey - Проверка нажатия клавиш-модификаторов`}),`
`,(0,c.jsx)(t.h1,{id:`ismetakey`,children:(0,c.jsx)(t.code,{children:`isMetaKey`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, содержит ли событие клавиатуры активные клавиши-модификаторы (Command/Meta, Alt/Option, Control). Полезно для фильтрации ввода, когда нужно игнорировать комбинации клавиш (например, CMD+C, CTRL+V, ALT+TAB).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — объект события клавиатуры.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если нажата любая из клавиш `,(0,c.jsx)(t.code,{children:`metaKey`}),`, `,(0,c.jsx)(t.code,{children:`altKey`}),` или `,(0,c.jsx)(t.code,{children:`ctrlKey`}),`, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Поддерживаемые свойства события:`}),`
Функция проверяет следующие свойства:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`metaKey`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`altKey`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`ctrlKey`})}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isMetaKey } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isMetaKey(event)) {
    // Игнорировать комбинации клавиш-модификаторов
    return
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};