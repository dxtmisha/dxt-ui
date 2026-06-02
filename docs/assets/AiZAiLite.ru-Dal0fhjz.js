import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiZAiLite - Легковесный класс Z.ai (Zhipu AI)`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aizailite`,children:`Класс AiZAiLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiZAiLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),`, сконфигурированную для Zhipu AI (Z.ai). Он переопределяет метод инициализации клиента для перенаправления всех запросов на OpenAI-совместимый эндпоинт Z.ai.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Совместимость с OpenAI`}),` — наследует все возможности `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),`, включая генерацию текста, буферы промптов и мультимодальные структуры.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выделенный эндпоинт`}),` — автоматически настраивает клиент OpenAI с базовым URL-адресом Z.ai (`,(0,c.jsx)(n.code,{children:`https://api.z.ai/api/paas/v4`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiZAiLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API-ключ для сервиса Z.ai.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — начальный идентификатор модели (например, 'glm-4').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiZAiLite } from '@dxtmisha/scripts'

const ai = new AiZAiLite(process.env.ZAI_API_KEY, 'glm-4')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(n.p,{children:[`Этот класс переопределяет хук инициализации `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Создает экземпляр клиента `,(0,c.jsx)(n.code,{children:`OpenAI`}),` с базовым URL-адресом Z.ai и предоставленным ключом.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};