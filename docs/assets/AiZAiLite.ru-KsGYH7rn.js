import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiZAiLite - Легковесный класс Z.ai (Zhipu AI)`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aizailite`,children:`Класс AiZAiLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),`, сконфигурированную для Zhipu AI (Z.ai). Он переопределяет метод инициализации клиента для перенаправления всех запросов на OpenAI-совместимый эндпоинт Z.ai.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Совместимость с OpenAI`}),` — наследует все возможности `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),`, включая генерацию текста, буферы промптов и мультимодальные структуры.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Выделенный эндпоинт`}),` — автоматически настраивает клиент OpenAI с базовым URL-адресом Z.ai (`,(0,c.jsx)(t.code,{children:`https://api.z.ai/api/paas/v4`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiZAiLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API-ключ для сервиса Z.ai.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — начальный идентификатор модели (например, 'glm-4').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiZAiLite } from '@dxtmisha/scripts'

const ai = new AiZAiLite(process.env.ZAI_API_KEY, 'glm-4')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(t.p,{children:[`Этот класс переопределяет хук инициализации `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Создает экземпляр клиента `,(0,c.jsx)(t.code,{children:`OpenAI`}),` с базовым URL-адресом Z.ai и предоставленным ключом.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};