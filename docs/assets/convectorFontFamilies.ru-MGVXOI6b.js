import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/convectorFontFamilies - Форматирование семейств шрифтов`}),`
`,(0,c.jsx)(t.h1,{id:`convectorfontfamilies`,children:(0,c.jsx)(t.code,{children:`convectorFontFamilies`})}),`
`,(0,c.jsx)(t.p,{children:`Функция преобразует необработанные строки семейств шрифтов в стандартные списки шрифтов CSS, добавляя системные резервные шрифты по умолчанию.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: PropertyItemInput`}),` — элемент свойства токена дизайна для преобразования.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`}),` — функция напрямую изменяет свойство `,(0,c.jsx)(t.code,{children:`value`}),` переданного объекта `,(0,c.jsx)(t.code,{children:`item`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`принцип-работы`,children:`Принцип работы`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция проверяет, является ли `,(0,c.jsx)(t.code,{children:`item.value`}),` строкой и не содержит ли она символов интерполяции в фигурных скобках `,(0,c.jsx)(t.code,{children:`{`}),` или `,(0,c.jsx)(t.code,{children:`}`}),`. Если оба условия выполняются, она оборачивает значение в одинарные кавычки и добавляет `,(0,c.jsx)(t.code,{children:`, sans-serif`}),` для обеспечения стандартного резервного поведения браузера.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { convectorFontFamilies } from '@dxtmisha/scripts'

const item = { value: 'Inter' }
convectorFontFamilies(item)

console.log(item.value) // "'Inter', sans-serif"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};