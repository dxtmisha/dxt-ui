import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiGoogleLite - Интеграция с Google Gemini AI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aigooglelite`,children:`Класс AiGoogleLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Конкретная реализация класса `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` для работы с Google Gemini AI (через клиент `,(0,c.jsx)(t.code,{children:`GoogleGenAI`}),`). Этот класс предоставляет удобный способ взаимодействия с моделями Gemini, беря на себя аутентификацию, накопление контекста и генерацию контента.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с Google Gemini`}),` — прямое подключение к генеративным моделям ИИ от Google.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Мультимодальная поддержка`}),` — поддержка текстовых и визуальных (изображений) входных данных для запросов генерации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Накопление контекста`}),` — наследует надежную механику построения сложных промптов, включая изображения и составные части текста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Унифицированный процесс`}),` — предоставляет последовательный интерфейс для выбора модели и генерации, скрывая детали низкоуровневого клиента.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, указав ваш API-ключ и идентификатор целевой модели.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — ваш API-ключ Google AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — идентификатор модели Gemini (например, `,(0,c.jsx)(t.code,{children:`'gemini-1.5-flash'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiGoogleLite } from '@dxtmisha/scripts'

const ai = new AiGoogleLite('ВАШ_API_КЛЮЧ', 'gemini-1.5-flash')

// Установка опционального префикса (системного промпта)
ai.addPrompt('Вы — технический писатель.')

// Генерация ответа
const response = await ai.generate('Объясните возможности класса AiGoogleLite.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — основная точка взаимодействия. Объединяет весь накопленный контекст (префикс, изображения, части текста) и выполняет запрос.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — обновляет API-ключ и переинициализирует внутренний клиент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — переключает активную модель для последующих запросов.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(t.p,{children:[`Эти методы позволяют накопить данные перед вызовом `,(0,c.jsx)(t.code,{children:`generate()`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — добавляет постоянный текстовый префикс (полезно для системных инструкций).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — добавляет текстовую часть к промпту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addImage(image: AiImageItem): this`}),` — добавляет изображение (base64) к запросу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — очищает все накопленные части текста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetImages(): this`}),` — очищает все накопленные изображения.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getContents(): string[]`}),` — возвращает список накопленных частей текста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImages(): AiImageList`}),` — возвращает список накопленных изображений.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(t.p,{children:`Представляет изображение для мультимодальных запросов.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string`}),` — MIME-тип изображения (например, `,(0,c.jsx)(t.code,{children:`'image/png'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base64: string`}),` — данные изображения в формате base64.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(t.p,{children:[`Массив элементов `,(0,c.jsx)(t.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};