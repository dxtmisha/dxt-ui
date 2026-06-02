import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiOpenAiLite - Легковесный класс OpenAI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aiopenailite`,children:`Класс AiOpenAiLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`, которая оборачивает OpenAI SDK. Он обеспечивает полную поддержку накопления контекста промптов, мультимодального преобразования изображений в формат base64 и стабильного выполнения запросов генерации (чат-комплишенов).`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Мультимодальная поддержка`}),` — преобразует накопленные изображения в структуру URL-адресов данных (`,(0,c.jsx)(n.code,{children:`data:mime;base64,data`}),`), необходимую для интерфейса блоков `,(0,c.jsx)(n.code,{children:`image_url`}),` OpenAI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Структурированная обработка контента`}),` — форматирует как текстовые инструкции, так и блоки изображений в единый список пользовательского контента перед отправкой запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартная интеграция SDK`}),` — напрямую вызывает эндпоинт `,(0,c.jsx)(n.code,{children:`chat.completions.create`}),` и безопасно обрабатывает полученный результат (choices).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API-ключ для сервиса OpenAI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — начальный идентификатор модели (например, 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiOpenAiLite } from '@dxtmisha/scripts'

const ai = new AiOpenAiLite(process.env.OPENAI_API_KEY, 'gpt-4o')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(n.p,{children:[`Эти защищенные методы реализуют обязательный интерфейс расширения `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Инициализирует экземпляр клиента `,(0,c.jsx)(n.code,{children:`OpenAI`}),` с использованием предоставленного ключа.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): any`}),` — Преобразует накопленные `,(0,c.jsx)(n.code,{children:`images`}),` в структурированный массив `,(0,c.jsx)(n.code,{children:`{ type: 'image_url', image_url: { url: ... } }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): any`}),` — Преобразует накопленное дополнительное содержимое `,(0,c.jsx)(n.code,{children:`contents`}),` в структурированный массив `,(0,c.jsx)(n.code,{children:`{ type: 'text', text: content }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Выполняет вызов API `,(0,c.jsx)(n.code,{children:`chat.completions.create`}),` и безопасно извлекает текстовое содержимое из первого элемента choices.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};