import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/getClassName - Получение имени класса из свойств`}),`
`,(0,c.jsx)(t.h1,{id:`getclassname`,children:(0,c.jsx)(t.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, которая извлекает свойство `,(0,c.jsx)(t.code,{children:`class`}),` из заданного объекта свойств. Она гарантирует, что возвращаемое значение является строкой, что полезно для единообразного получения имен классов при рендеринге компонентов или элементов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Объект свойств компонента, который может содержать свойство `,(0,c.jsx)(t.code,{children:`class`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Имя класса в виде строки, если оно существует и является строкой, в противном случае `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getClassName } from '@dxtmisha/functional'

// Возвращает 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Возвращает undefined, так как 'class' отсутствует
const className2 = getClassName({ otherProp: 1 })

// Возвращает undefined, так как 'class' не является строкой
const className3 = getClassName({ class: 123 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};