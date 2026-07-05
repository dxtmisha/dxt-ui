import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Functions/convectorFontFamilies - Форматирование семейств шрифтов`}),`
`,(0,c.jsx)(n.h1,{id:`convectorfontfamilies`,children:(0,c.jsx)(n.code,{children:`convectorFontFamilies`})}),`
`,(0,c.jsx)(n.p,{children:`Функция преобразует необработанные строки семейств шрифтов в стандартные списки шрифтов CSS, добавляя системные резервные шрифты по умолчанию.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — элемент свойства токена дизайна для преобразования.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`}),` — функция напрямую изменяет свойство `,(0,c.jsx)(n.code,{children:`value`}),` переданного объекта `,(0,c.jsx)(n.code,{children:`item`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`принцип-работы`,children:`Принцип работы`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция проверяет, является ли `,(0,c.jsx)(n.code,{children:`item.value`}),` строкой и не содержит ли она символов интерполяции в фигурных скобках `,(0,c.jsx)(n.code,{children:`{`}),` или `,(0,c.jsx)(n.code,{children:`}`}),`. Если оба условия выполняются, она оборачивает значение в одинарные кавычки и добавляет `,(0,c.jsx)(n.code,{children:`, sans-serif`}),` для обеспечения стандартного резервного поведения браузера.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorFontFamilies } from '@dxtmisha/scripts'

const item = { value: 'Inter' }
convectorFontFamilies(item)

console.log(item.value) // "'Inter', sans-serif"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};