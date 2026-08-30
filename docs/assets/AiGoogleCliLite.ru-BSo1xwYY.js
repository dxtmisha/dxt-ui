import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/AiGoogleCliLite - Google Gemini AI через CLI`}),`
`,(0,c.jsx)(t.h1,{id:`класс-aigoogleclilite`,children:`Класс AiGoogleCliLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Специализированная реализация класса `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`, которая взаимодействует с ИИ Google Gemini через интерфейс командной строки (CLI) системы. Этот подход полезен в средах, где прямое использование SDK нежелательно или где используются существующие инструменты CLI.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Для работы этой реализации требуется установленная утилита `,(0,c.jsx)(t.code,{children:`gemini`}),` CLI, доступная в переменной PATH вашей системы.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Работа через CLI`}),` — выполняет запросы прямым запуском CLI `,(0,c.jsx)(t.code,{children:`gemini`}),` с массивом аргументов через `,(0,c.jsx)(t.code,{children:`execFile`}),`, без системной оболочки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Обработка длинных промптов`}),` — автоматически создает временные файлы для передачи объемного содержимого промптов в CLI, обходя ограничения на длину командной строки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Чистое выполнение`}),` — управляет собственным временным хранилищем (`,(0,c.jsx)(t.code,{children:`./ai-tmp`}),`) и выполняет очистку после каждого запроса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Режим YOLO`}),` — выполняет команды со строгими флагами вывода, чтобы результаты были лаконичными и не содержали лишних рассуждений ИИ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте `,(0,c.jsx)(t.code,{children:`AiGoogleCliLite`}),`, указав ваш API-ключ и нужную модель.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — ваш API-ключ Google AI (передается в CLI через переменные окружения).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — идентификатор модели для Gemini CLI.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiGoogleCliLite } from '@dxtmisha/scripts'

const ai = new AiGoogleCliLite('ВАШ_API_КЛЮЧ', 'gemini-1.5-flash')

// Генерация ответа
const response = await ai.generate('Проверь этот фрагмент кода.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — основной метод взаимодействия. Компилирует контекст во временные файлы, выполняет команду CLI и возвращает очищенный результат.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — обновляет API-ключ для последующих вызовов CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — переключает идентификатор активной модели.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — устанавливает постоянный текстовый префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — добавляет текстовую часть к накопительному промпту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — очищает все накопленные части текста.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ограничения`,children:`Ограничения`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Изображения`}),` — в настоящее время реализация CLI не поддерживает передачу изображений (вызов `,(0,c.jsx)(t.code,{children:`addImage`}),` не повлияет на генерацию).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Окружение`}),` — зависит от доступности функции `,(0,c.jsx)(t.code,{children:`execFile`}),` и файловой системы для хранения временных данных.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};