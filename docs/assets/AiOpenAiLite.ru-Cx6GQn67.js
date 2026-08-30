import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiOpenAiLite - Легковесный класс OpenAI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiopenailite`,children:`Класс AiOpenAiLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`, которая оборачивает OpenAI SDK. Он обеспечивает полную поддержку накопления контекста промптов, мультимодального преобразования изображений в формат base64 и стабильного выполнения запросов генерации (чат-комплишенов).`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мультимодальная поддержка`}),` — преобразует накопленные изображения в структуру URL-адресов данных (`,(0,c.jsx)(t.code,{children:`data:mime;base64,data`}),`), необходимую для интерфейса блоков `,(0,c.jsx)(t.code,{children:`image_url`}),` OpenAI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Структурированная обработка контента`}),` — форматирует как текстовые инструкции, так и блоки изображений в единый список пользовательского контента перед отправкой запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Стандартная интеграция SDK`}),` — напрямую вызывает эндпоинт `,(0,c.jsx)(t.code,{children:`chat.completions.create`}),` и безопасно обрабатывает полученный результат (choices).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API-ключ для сервиса OpenAI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — начальный идентификатор модели (например, 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiOpenAiLite } from '@dxtmisha/scripts'

const ai = new AiOpenAiLite(process.env.OPENAI_API_KEY, 'gpt-4o')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(t.p,{children:[`Эти защищенные методы реализуют обязательный интерфейс расширения `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Инициализирует экземпляр клиента `,(0,c.jsx)(t.code,{children:`OpenAI`}),` с использованием предоставленного ключа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Преобразует накопленные `,(0,c.jsx)(t.code,{children:`images`}),` в структурированный массив `,(0,c.jsx)(t.code,{children:`{ type: 'image_url', image_url: { url: ... } }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Преобразует накопленное дополнительное содержимое `,(0,c.jsx)(t.code,{children:`contents`}),` в структурированный массив `,(0,c.jsx)(t.code,{children:`{ type: 'text', text: content }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Выполняет вызов API `,(0,c.jsx)(t.code,{children:`chat.completions.create`}),` и безопасно извлекает текстовое содержимое из первого элемента choices.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};