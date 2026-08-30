import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/nitro-basic/Functions/getContextValue - Получение значения контекста`}),`
`,(0,c.jsx)(t.h1,{id:`getcontextvalue`,children:(0,c.jsx)(t.code,{children:`getContextValue`})}),`
`,(0,c.jsx)(t.p,{children:`Утилитарная функция, которая извлекает определенное значение из активного контекста серверного рендеринга (SSR) приложения по его ключу.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — Ключ значения, которое необходимо извлечь (например, `,(0,c.jsx)(t.code,{children:`'headers'`}),`, `,(0,c.jsx)(t.code,{children:`'storage'`}),` или `,(0,c.jsx)(t.code,{children:`'cookie'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`any | undefined`}),` — Извлеченное значение из контекста, или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если контекст не активен или ключ не существует.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getContextValue } from '@dxtmisha/nitro-basic'

// Получение куки или заголовков из активного контекста запроса во время SSR:
const cookies = getContextValue<string>('cookie')
const headers = getContextValue<Headers>('headers')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};