import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/isElementVisible - Проверка видимости элемента`}),`
`,(0,c.jsx)(t.h1,{id:`iselementvisible`,children:(0,c.jsx)(t.code,{children:`isElementVisible`})}),`
`,(0,c.jsx)(t.p,{children:`Проверяет, является ли элемент видимым (не скрыт через CSS и находится в DOM).
Элемент может находиться за пределами экрана и при этом считаться видимым.`}),`
`,(0,c.jsxs)(t.p,{children:[`При наличии поддержки в браузере функция использует высокопроизводительный нативный метод `,(0,c.jsx)(t.code,{children:`checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })`}),`. В средах без его поддержки выполняется фолбэк с проверкой стилей (`,(0,c.jsx)(t.code,{children:`display`}),`, `,(0,c.jsx)(t.code,{children:`visibility`}),`, `,(0,c.jsx)(t.code,{children:`opacity`}),`) и геометрических размеров элемента (`,(0,c.jsx)(t.code,{children:`offsetWidth`}),`, `,(0,c.jsx)(t.code,{children:`offsetHeight`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectors?: ElementOrString<E>`}),` — селекторы для сопоставления или Element.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),`, если элемент является видимым, иначе `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isElementVisible } from '@dxtmisha/functional-basic'

const div = document.createElement('div')
document.body.appendChild(div)
console.log(isElementVisible(div)) // true

div.style.display = 'none'
console.log(isElementVisible(div)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};