import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/ru/figma-code/Functions/makeFigmaTexts - Отслеживание текстовых элементов`}),`
`,(0,l.jsx)(t.h1,{id:`makefigmatexts`,children:(0,l.jsx)(t.code,{children:`makeFigmaTexts`})}),`
`,(0,l.jsxs)(t.p,{children:[`Утилита для автоматизации процесса отслеживания изменений выделения в Figma. Она настраивает глобальный слушатель события `,(0,l.jsx)(t.code,{children:`selectionchange`}),`, который при каждом срабатывании собирает данные о текстовых элементах и скриншоты текущей страницы, отправляя их в интерфейс (UI) плагина.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Параметры:`}),`
Отсутствуют.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { makeFigmaTexts } from '@dxtmisha/figma-code'

// Инициализация в основной части плагина (обычно в code.ts)
makeFigmaTexts()

// Теперь при каждом изменении выделения пользователем, 
// UI будет получать обновленные данные о текстах и скриншоты.
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};