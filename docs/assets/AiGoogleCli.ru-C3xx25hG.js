import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/scripts/Classes/AiGoogleCli - Автоконфигурируемый Google Gemini AI через CLI"}),`
`,n.jsx(e.h1,{id:"класс-aigooglecli",children:"Класс AiGoogleCli"}),`
`,n.jsxs(e.p,{children:["Высокоуровневая реализация для взаимодействия с ИИ Google Gemini через интерфейс командной строки (CLI) системы. Класс ",n.jsx(e.code,{children:"AiGoogleCli"})," расширяет ",n.jsx(e.code,{children:"AiGoogleCliLite"})," и упрощает работу, автоматически загружая необходимые API-ключ и идентификатор модели из настроек конфигурации проекта (",n.jsx(e.code,{children:"getConfigAi()"}),")."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Для работы этой реализации требуется установленная утилита ",n.jsx(e.code,{children:"gemini"})," CLI, доступная в переменной PATH вашей системы."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическая настройка"})," — не требует ручной инициализации ключей или моделей; все данные берутся из окружения проекта."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выполнение через CLI"})," — использует команды оболочки для выполнения запросов к ИИ, что делает его подходящим для определенных сред сборки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление временными файлами"})," — автоматически обрабатывает создание и удаление временных файлов промптов (",n.jsx(e.code,{children:"./ai-tmp"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Лаконичные ответы"})," — использует оптимизированные флаги CLI, чтобы ИИ возвращал прямые ответы без лишних вступлений."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"AiGoogleCli"})," готов к использованию без каких-либо аргументов конструктора."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Генерация ответа с использованием настроек проекта
const response = await ai.generate('Опиши изменения в проекте.')
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"генерация",children:"Генерация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"generate(contents: string): Promise<string>"})," — (Унаследовано) Анализирует ввод, управляет временными файлами и выполняет команду CLI для получения ответа."]}),`
`]}),`
`,n.jsx(e.h3,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setKey(key: string): this"})," — (Унаследовано) Позволяет вручную переопределить API-ключ при необходимости."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setModel(model: string): this"})," — (Унаследовано) Переключает идентификатор активной модели."]}),`
`]}),`
`,n.jsx(e.h3,{id:"сбор-контекста",children:"Сбор контекста"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addPrompt(prompt: string): void"})," — (Унаследовано) Устанавливает постоянный текстовый префикс (системные инструкции)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addContent(content: string): this"})," — (Унаследовано) Добавляет текстовую часть к совокупному запросу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetPrompt(): void"})," — (Унаследовано) Очищает постоянный префикс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetContents(): this"})," — (Унаследовано) Очищает все накопленные части текста."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ограничения",children:"Ограничения"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Мультимодальность"})," — как и базовый класс, эта реализация в настоящее время не поддерживает ввод изображений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Системные зависимости"})," — требуется наличие инструмента ",n.jsx(e.code,{children:"gemini"})," CLI и соответствующих прав файловой системы для работы с временными данными."]}),`
`]})]})}function j(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
