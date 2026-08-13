import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiGoogle - Автоконфигурируемый Google Gemini AI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aigoogle`,children:`Класс AiGoogle`}),`
`,(0,c.jsxs)(t.p,{children:[`Высокоуровневая реализация интеграции с Google Gemini AI. Класс `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` расширяет `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),` и автоматически инициализирует себя, используя API-ключ и идентификатор модели, указанные в файлах конфигурации проекта.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Инициализация без конфигурации`}),` — автоматически загружает учетные данные API и настройки модели из окружения проекта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`На базе Gemini`}),` — предоставляет доступ к современным генеративным моделям от Google.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Наследуемая надежность`}),` — включает все функции `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, такие как мультимодальная поддержка (текст + изображения) и накопление сложных промптов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Упрощенный процесс`}),` — идеально подходит для использования внутри движка документирования проекта, где не требуется ручная настройка.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`В отличие от `,(0,c.jsx)(t.code,{children:`AiGoogleLite`}),`, класс `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` не требует параметров конструктора, так как он получает настройки из `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// При необходимости можно переключить модель
ai.setModel('gemini-1.5-pro')

// Генерация ответа
const response = await ai.generate('Создайте краткое описание проекта.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Унаследовано) Объединяет накопленный контекст и выполняет запрос к ИИ.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Унаследовано) Обновляет API-ключ и переинициализирует внутренний клиент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Унаследовано) Переключает активную модель.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Унаследовано) Добавляет постоянный текстовый префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Унаследовано) Добавляет текстовую часть к промпту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addImage(image: AiImageItem): this`}),` — (Унаследовано) Добавляет изображение (base64) к запросу.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Унаследовано) Очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Унаследовано) Очищает все накопленные части текста.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetImages(): this`}),` — (Унаследовано) Очищает все накопленные изображения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(t.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(t.p,{children:`Представляет изображение для мультимодальных запросов.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string`}),` — MIME-тип изображения.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base64: string`}),` — данные изображения в формате base64.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(t.p,{children:[`Массив элементов `,(0,c.jsx)(t.code,{children:`AiImageItem`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};