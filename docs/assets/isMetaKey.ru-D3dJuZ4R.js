import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Functions/isMetaKey - Проверка нажатия клавиш-модификаторов`}),`
`,(0,c.jsx)(n.h1,{id:`ismetakey`,children:(0,c.jsx)(n.code,{children:`isMetaKey`})}),`
`,(0,c.jsx)(n.p,{children:`Проверяет, содержит ли событие клавиатуры активные клавиши-модификаторы (Command/Meta, Alt/Option, Control). Полезно для фильтрации ввода, когда нужно игнорировать комбинации клавиш (например, CMD+C, CTRL+V, ALT+TAB).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — объект события клавиатуры.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если нажата любая из клавиш `,(0,c.jsx)(n.code,{children:`metaKey`}),`, `,(0,c.jsx)(n.code,{children:`altKey`}),` или `,(0,c.jsx)(n.code,{children:`ctrlKey`}),`, иначе `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Поддерживаемые свойства события:`}),`
Функция проверяет следующие свойства:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`metaKey`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`altKey`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`ctrlKey`})}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isMetaKey } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isMetaKey(event)) {
    // Игнорировать комбинации клавиш-модификаторов
    return
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};