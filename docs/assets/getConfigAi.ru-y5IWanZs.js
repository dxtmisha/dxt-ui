import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/getConfigAi - Получение конфигурации ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`getconfigai`,children:(0,c.jsx)(t.code,{children:`getConfigAi`})}),`
`,(0,c.jsx)(t.p,{children:`Функция возвращает конфигурацию ИИ, включая API ключ и модель.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`[string, string]`}),` — кортеж с API ключом и названием модели.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция извлекает значения конфигурации из класса `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),`, который управляет настройками уровня проекта.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getConfigAi } from '@dxtmisha/scripts'

const [apiKey, model] = getConfigAi()
console.log(\`API Key: \${apiKey}, Model: \${model}\`)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};