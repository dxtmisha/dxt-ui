import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/AiGoogleCli - Автоконфигурируемый Google Gemini AI через CLI`}),`
`,(0,c.jsx)(n.h1,{id:`класс-aigooglecli`,children:`Класс AiGoogleCli`}),`
`,(0,c.jsxs)(n.p,{children:[`Высокоуровневая реализация для взаимодействия с ИИ Google Gemini через интерфейс командной строки (CLI) системы. Класс `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` расширяет `,(0,c.jsx)(n.code,{children:`AiGoogleCliLite`}),` и упрощает работу, автоматически загружая необходимые API-ключ и идентификатор модели из настроек конфигурации проекта (`,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Для работы этой реализации требуется установленная утилита `,(0,c.jsx)(n.code,{children:`gemini`}),` CLI, доступная в переменной PATH вашей системы.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая настройка`}),` — не требует ручной инициализации ключей или моделей; все данные берутся из окружения проекта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение через CLI`}),` — использует команды оболочки для выполнения запросов к ИИ, что делает его подходящим для определенных сред сборки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление временными файлами`}),` — автоматически обрабатывает создание и удаление временных файлов промптов (`,(0,c.jsx)(n.code,{children:`./ai-tmp`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Лаконичные ответы`}),` — использует оптимизированные флаги CLI, чтобы ИИ возвращал прямые ответы без лишних вступлений.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` готов к использованию без каких-либо аргументов конструктора.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Генерация ответа с использованием настроек проекта
const response = await ai.generate('Опиши изменения в проекте.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`генерация`,children:`Генерация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — (Унаследовано) Анализирует ввод, управляет временными файлами и выполняет команду CLI для получения ответа.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — (Унаследовано) Позволяет вручную переопределить API-ключ при необходимости.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — (Унаследовано) Переключает идентификатор активной модели.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`сбор-контекста`,children:`Сбор контекста`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — (Унаследовано) Устанавливает постоянный текстовый префикс (системные инструкции).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — (Унаследовано) Добавляет текстовую часть к совокупному запросу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — (Унаследовано) Очищает постоянный префикс.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — (Унаследовано) Очищает все накопленные части текста.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ограничения`,children:`Ограничения`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Мультимодальность`}),` — как и базовый класс, эта реализация в настоящее время не поддерживает ввод изображений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Системные зависимости`}),` — требуется наличие инструмента `,(0,c.jsx)(n.code,{children:`gemini`}),` CLI и соответствующих прав файловой системы для работы с временными данными.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};