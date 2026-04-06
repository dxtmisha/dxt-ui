import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiGoogle - Автоконфигурируемый Google Gemini AI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aigoogle`,children:`Класс AiGoogle`}),`
`,(0,c.jsxs)(n.p,{children:[`Высокоуровневая реализация интеграции с Google Gemini AI. Класс `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` расширяет `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),` и автоматически инициализирует себя, используя API-ключ и идентификатор модели, указанные в файлах конфигурации проекта.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация без конфигурации`}),` — автоматически загружает учетные данные API и настройки модели из окружения проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`На базе Gemini`}),` — предоставляет доступ к современным генеративным моделям от Google.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Наследуемая надежность`}),` — включает все функции `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),`, такие как мультимодальная поддержка (текст + изображения) и накопление сложных промптов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Упрощенный процесс`}),` — идеально подходит для использования внутри движка документирования проекта, где не требуется ручная настройка.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`В отличие от `,(0,c.jsx)(n.code,{children:`AiGoogleLite`}),`, класс `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` не требует параметров конструктора, так как он получает настройки из `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// При необходимости можно переключить модель
ai.setModel('gemini-1.5-pro')

// Генерация ответа
const response = await ai.generate('Создайте краткое описание проекта.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — (Унаследовано) Объединяет накопленный контекст и выполняет запрос к ИИ.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — (Унаследовано) Обновляет API-ключ и переинициализирует внутренний клиент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — (Унаследовано) Переключает активную модель.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — (Унаследовано) Добавляет постоянный текстовый префикс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — (Унаследовано) Добавляет текстовую часть к промпту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addImage(image: AiImageItem): this`}),` — (Унаследовано) Добавляет изображение (base64) к запросу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — (Унаследовано) Очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — (Унаследовано) Очищает все накопленные части текста.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetImages(): this`}),` — (Унаследовано) Очищает все накопленные изображения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(n.p,{children:`Представляет изображение для мультимодальных запросов.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mime: string`}),` — MIME-тип изображения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`base64: string`}),` — данные изображения в формате base64.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(n.p,{children:[`Массив элементов `,(0,c.jsx)(n.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};