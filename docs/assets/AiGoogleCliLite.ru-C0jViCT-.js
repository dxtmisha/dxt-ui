import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/scripts/Classes/AiGoogleCliLite - Google Gemini AI через CLI"}),`
`,n.jsx(e.h1,{id:"класс-aigoogleclilite",children:"Класс AiGoogleCliLite"}),`
`,n.jsxs(e.p,{children:["Специализированная реализация класса ",n.jsx(e.code,{children:"AiAbstract"}),", которая взаимодействует с ИИ Google Gemini через интерфейс командной строки (CLI) системы. Этот подход полезен в средах, где прямое использование SDK нежелательно или где используются существующие инструменты CLI."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Для работы этой реализации требуется установленная утилита ",n.jsx(e.code,{children:"gemini"})," CLI, доступная в переменной PATH вашей системы."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Работа через CLI"})," — выполняет запросы путем формирования и запуска системных команд оболочки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обработка длинных промптов"})," — автоматически создает временные файлы для передачи объемного содержимого промптов в CLI, обходя ограничения на длину командной строки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Чистое выполнение"})," — управляет собственным временным хранилищем (",n.jsx(e.code,{children:"./ai-tmp"}),") и выполняет очистку после каждого запроса."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Режим YOLO"})," — выполняет команды со строгими флагами вывода, чтобы результаты были лаконичными и не содержали лишних рассуждений ИИ."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте ",n.jsx(e.code,{children:"AiGoogleCliLite"}),", указав ваш API-ключ и нужную модель."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"key: string"})," — ваш API-ключ Google AI (передается в CLI через переменные окружения)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"model: string"})," — идентификатор модели для Gemini CLI."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { AiGoogleCliLite } from '@dxtmisha/scripts'

const ai = new AiGoogleCliLite('ВАШ_API_КЛЮЧ', 'gemini-1.5-flash')

// Генерация ответа
const response = await ai.generate('Проверь этот фрагмент кода.')
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"генерация",children:"Генерация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"generate(contents: string): Promise<string>"})," — основной метод взаимодействия. Компилирует контекст во временные файлы, выполняет команду CLI и возвращает очищенный результат."]}),`
`]}),`
`,n.jsx(e.h3,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setKey(key: string): this"})," — обновляет API-ключ для последующих вызовов CLI."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setModel(model: string): this"})," — переключает идентификатор активной модели."]}),`
`]}),`
`,n.jsx(e.h3,{id:"сбор-контекста",children:"Сбор контекста"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addPrompt(prompt: string): void"})," — устанавливает постоянный текстовый префикс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"addContent(content: string): this"})," — добавляет текстовую часть к накопительному промпту."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetPrompt(): void"})," — очищает постоянный префикс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"resetContents(): this"})," — очищает все накопленные части текста."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ограничения",children:"Ограничения"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Изображения"})," — в настоящее время реализация CLI не поддерживает передачу изображений (вызов ",n.jsx(e.code,{children:"addImage"})," не повлияет на генерацию)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Окружение"})," — зависит от доступности функции ",n.jsx(e.code,{children:"exec"})," и файловой системы для хранения временных данных."]}),`
`]})]})}function j(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
