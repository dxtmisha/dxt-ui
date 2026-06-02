import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/ru/figma-code/Functions/makeFigmaTexts - Отслеживание текстовых элементов`}),`
`,(0,l.jsx)(n.h1,{id:`makefigmatexts`,children:(0,l.jsx)(n.code,{children:`makeFigmaTexts`})}),`
`,(0,l.jsxs)(n.p,{children:[`Утилита для автоматизации процесса отслеживания изменений выделения в Figma. Она настраивает глобальный слушатель события `,(0,l.jsx)(n.code,{children:`selectionchange`}),`, который при каждом срабатывании собирает данные о текстовых элементах и скриншоты текущей страницы, отправляя их в интерфейс (UI) плагина.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Параметры:`}),`
Отсутствуют.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { makeFigmaTexts } from '@dxtmisha/figma-code'

// Инициализация в основной части плагина (обычно в code.ts)
makeFigmaTexts()

// Теперь при каждом изменении выделения пользователем, 
// UI будет получать обновленные данные о текстах и скриншоты.
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};