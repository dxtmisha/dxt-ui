import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Functions/convectorTypography - Форматирование значений типографики`}),`
`,(0,c.jsx)(n.h1,{id:`convectortypography`,children:(0,c.jsx)(n.code,{children:`convectorTypography`})}),`
`,(0,c.jsx)(n.p,{children:`Функция нормализует токены дизайна типографики, преобразуя простые строковые значения в стандартные базовые конфигурации шрифтов.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — элемент свойства токена дизайна для преобразования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — функция напрямую изменяет свойство `,(0,c.jsx)(n.code,{children:`value`}),` переданного объекта `,(0,c.jsx)(n.code,{children:`item`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`принцип-работы`,children:`Принцип работы`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет, является ли `,(0,c.jsx)(n.code,{children:`item.value`}),` строкой. Если да, она оборачивает строку в объект с ключом `,(0,c.jsx)(n.code,{children:`basic`}),` для обеспечения совместимости со сложными адаптивными структурами типографики: `,(0,c.jsx)(n.code,{children:`{ basic: item.value }`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorTypography } from '@dxtmisha/scripts'

const item = { value: '16px/1.5 Inter' }
convectorTypography(item)

console.log(item.value) // { basic: "16px/1.5 Inter" }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};