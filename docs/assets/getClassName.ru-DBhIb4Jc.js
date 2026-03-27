import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/getClassName - Получение имени класса из свойств`}),`
`,(0,c.jsx)(n.h1,{id:`getclassname`,children:(0,c.jsx)(n.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая извлекает свойство `,(0,c.jsx)(n.code,{children:`class`}),` из заданного объекта свойств. Она гарантирует, что возвращаемое значение является строкой, что полезно для единообразного получения имен классов при рендеринге компонентов или элементов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props?: T`}),` — Объект свойств компонента, который может содержать свойство `,(0,c.jsx)(n.code,{children:`class`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Имя класса в виде строки, если оно существует и является строкой, в противном случае `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getClassName } from '@dxtmisha/functional'

// Возвращает 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Возвращает undefined, так как 'class' отсутствует
const className2 = getClassName({ otherProp: 1 })

// Возвращает undefined, так как 'class' не является строкой
const className3 = getClassName({ class: 123 })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};