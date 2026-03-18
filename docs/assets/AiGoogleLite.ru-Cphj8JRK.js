import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/AiGoogleLite - Интеграция с Google Gemini AI"}),`
`,e.jsx(n.h1,{id:"класс-aigooglelite",children:"Класс AiGoogleLite"}),`
`,e.jsxs(n.p,{children:["Конкретная реализация класса ",e.jsx(n.code,{children:"AiAbstract"})," для работы с Google Gemini AI (через клиент ",e.jsx(n.code,{children:"GoogleGenAI"}),"). Этот класс предоставляет удобный способ взаимодействия с моделями Gemini, беря на себя аутентификацию, накопление контекста и генерацию контента."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с Google Gemini"})," — прямое подключение к генеративным моделям ИИ от Google."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Мультимодальная поддержка"})," — поддержка текстовых и визуальных (изображений) входных данных для запросов генерации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Накопление контекста"})," — наследует надежную механику построения сложных промптов, включая изображения и составные части текста."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Унифицированный процесс"})," — предоставляет последовательный интерфейс для выбора модели и генерации, скрывая детали низкоуровневого клиента."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Инициализируйте ",e.jsx(n.code,{children:"AiGoogleLite"}),", указав ваш API-ключ и идентификатор целевой модели."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key: string"})," — ваш API-ключ Google AI."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"model: string"})," — идентификатор модели Gemini (например, ",e.jsx(n.code,{children:"'gemini-1.5-flash'"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AiGoogleLite } from '@dxtmisha/scripts'

const ai = new AiGoogleLite('ВАШ_API_КЛЮЧ', 'gemini-1.5-flash')

// Установка опционального префикса (системного промпта)
ai.addPrompt('Вы — технический писатель.')

// Генерация ответа
const response = await ai.generate('Объясните возможности класса AiGoogleLite.')
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"генерация",children:"Генерация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"generate(contents: string): Promise<string>"})," — основная точка взаимодействия. Объединяет весь накопленный контекст (префикс, изображения, части текста) и выполняет запрос."]}),`
`]}),`
`,e.jsx(n.h3,{id:"конфигурация",children:"Конфигурация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKey(key: string): this"})," — обновляет API-ключ и переинициализирует внутренний клиент."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setModel(model: string): this"})," — переключает активную модель для последующих запросов."]}),`
`]}),`
`,e.jsx(n.h3,{id:"сбор-контекста",children:"Сбор контекста"}),`
`,e.jsxs(n.p,{children:["Эти методы позволяют накопить данные перед вызовом ",e.jsx(n.code,{children:"generate()"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addPrompt(prompt: string): void"})," — добавляет постоянный текстовый префикс (полезно для системных инструкций)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addContent(content: string): this"})," — добавляет текстовую часть к промпту."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addImage(image: AiImageItem): this"})," — добавляет изображение (base64) к запросу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetPrompt(): void"})," — очищает постоянный префикс."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetContents(): this"})," — очищает все накопленные части текста."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetImages(): this"})," — очищает все накопленные изображения."]}),`
`]}),`
`,e.jsx(n.h3,{id:"информация",children:"Информация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getContents(): string[]"})," — возвращает список накопленных частей текста."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImages(): AiImageList"})," — возвращает список накопленных изображений."]}),`
`]}),`
`,e.jsx(n.h2,{id:"типы",children:"Типы"}),`
`,e.jsx(n.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,e.jsx(n.p,{children:"Представляет изображение для мультимодальных запросов."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mime: string"})," — MIME-тип изображения (например, ",e.jsx(n.code,{children:"'image/png'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"base64: string"})," — данные изображения в формате base64."]}),`
`]}),`
`,e.jsx(n.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,e.jsxs(n.p,{children:["Массив элементов ",e.jsx(n.code,{children:"AiImageItem"}),"."]})]})}function j(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
