import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getExactSearchExp - Создание RegExp для точного поиска`}),`
`,(0,c.jsx)(t.h1,{id:`getexactsearchexp`,children:(0,c.jsx)(t.code,{children:`getExactSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита, создающая регистронезависимое регулярное выражение `,(0,c.jsx)(t.code,{children:`RegExp`}),` для поиска точного совпадения фразы (без якорей `,(0,c.jsx)(t.code,{children:`^`}),` и `,(0,c.jsx)(t.code,{children:`$`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от `,(0,c.jsx)(t.code,{children:`getSearchExp`}),`, эта функция ищет фразу целиком как непрерывную подстроку (с экранированием спецсимволов), не разделяя её на отдельные слова.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string`}),` — Строка поиска для точного сопоставления фразы.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Регулярное выражение с флагом `,(0,c.jsx)(t.code,{children:`i`}),` (без учёта регистра) и шаблоном `,(0,c.jsx)(t.code,{children:`(:value)`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello world')

regex.test('say hello world!')      // true — содержит точную фразу
regex.test('HELLO WORLD')           // true — без учёта регистра
regex.test('hello beautiful world') // false — слова разделены
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};