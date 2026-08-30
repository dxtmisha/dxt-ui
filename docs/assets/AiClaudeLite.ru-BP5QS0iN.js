import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiClaudeLite - Легковесный класс Claude AI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aiclaudelite`,children:`Класс AiClaudeLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` представляет собой легковесную реализацию `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`, которая оборачивает Anthropic SDK. Он обеспечивает поддержку накопления контекста промптов, мультимодального ввода (изображений) и надежной генерации текста с использованием моделей Claude.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мультимодальная поддержка`}),` — преобразует накопленные изображения в ожидаемый Anthropic формат base64 для блоков контента типа `,(0,c.jsx)(t.code,{children:`image`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Структурированная обработка контента`}),` — форматирует как простой текст, так и изображения base64 в структурированное содержимое сообщения перед отправкой запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Извлечение текста`}),` — анализирует массив блоков контента из ответа Anthropic и объединяет текстовые блоки для возврата чистой строки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiClaudeLite`}),` требует ручной передачи учетных данных через конструктор.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API-ключ для сервиса Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — начальный идентификатор модели (например, 'claude-3-5-sonnet-20241022').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeLite } from '@dxtmisha/scripts'

const ai = new AiClaudeLite(process.env.ANTHROPIC_API_KEY, 'claude-3-5-sonnet-20241022')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`внутренние-хуки-реализации`,children:`Внутренние хуки реализации`}),`
`,(0,c.jsxs)(t.p,{children:[`Эти защищенные методы реализуют обязательный интерфейс расширения `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Инициализирует экземпляр клиента `,(0,c.jsx)(t.code,{children:`Anthropic`}),` с использованием предоставленного ключа.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): any`}),` — Преобразует накопленные `,(0,c.jsx)(t.code,{children:`images`}),` в структурированный массив `,(0,c.jsx)(t.code,{children:`{ type: 'image', source: { ... } }`}),` для Claude.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): any`}),` — Преобразует накопленное дополнительное содержимое `,(0,c.jsx)(t.code,{children:`contents`}),` в структурированный массив `,(0,c.jsx)(t.code,{children:`{ type: 'text', text: content }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Выполняет вызов API `,(0,c.jsx)(t.code,{children:`messages.create`}),`, передавая все отформатированные блоки, и парсит текстовый ответ.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};