import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/convectorTypography - Форматирование значений типографики`}),`
`,(0,c.jsx)(t.h1,{id:`convectortypography`,children:(0,c.jsx)(t.code,{children:`convectorTypography`})}),`
`,(0,c.jsx)(t.p,{children:`Функция нормализует токены дизайна типографики, преобразуя простые строковые значения в стандартные базовые конфигурации шрифтов.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — элемент свойства токена дизайна для преобразования.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — функция напрямую изменяет свойство `,(0,c.jsx)(t.code,{children:`value`}),` переданного объекта `,(0,c.jsx)(t.code,{children:`item`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`принцип-работы`,children:`Принцип работы`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет, является ли `,(0,c.jsx)(t.code,{children:`item.value`}),` строкой. Если да, она оборачивает строку в объект с ключом `,(0,c.jsx)(t.code,{children:`basic`}),` для обеспечения совместимости со сложными адаптивными структурами типографики: `,(0,c.jsx)(t.code,{children:`{ basic: item.value }`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorTypography } from '@dxtmisha/scripts'

const item = { value: '16px/1.5 Inter' }
convectorTypography(item)

console.log(item.value) // { basic: "16px/1.5 Inter" }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};