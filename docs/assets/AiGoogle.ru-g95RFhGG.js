import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"@dxtmisha/ru/scripts/Classes/AiGoogle - Автоконфигурируемый Google Gemini AI"}),`
`,e.jsx(n.h1,{id:"класс-aigoogle",children:"Класс AiGoogle"}),`
`,e.jsxs(n.p,{children:["Высокоуровневая реализация интеграции с Google Gemini AI. Класс ",e.jsx(n.code,{children:"AiGoogle"})," расширяет ",e.jsx(n.code,{children:"AiGoogleLite"})," и автоматически инициализирует себя, используя API-ключ и идентификатор модели, указанные в файлах конфигурации проекта."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Инициализация без конфигурации"})," — автоматически загружает учетные данные API и настройки модели из окружения проекта."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"На базе Gemini"})," — предоставляет доступ к современным генеративным моделям от Google."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Наследуемая надежность"})," — включает все функции ",e.jsx(n.code,{children:"AiGoogleLite"}),", такие как мультимодальная поддержка (текст + изображения) и накопление сложных промптов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Упрощенный процесс"})," — идеально подходит для использования внутри движка документирования проекта, где не требуется ручная настройка."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["В отличие от ",e.jsx(n.code,{children:"AiGoogleLite"}),", класс ",e.jsx(n.code,{children:"AiGoogle"})," не требует параметров конструктора, так как он получает настройки из ",e.jsx(n.code,{children:"getConfigAi()"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// При необходимости можно переключить модель
ai.setModel('gemini-1.5-pro')

// Генерация ответа
const response = await ai.generate('Создайте краткое описание проекта.')
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"генерация",children:"Генерация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"generate(contents: string): Promise<string>"})," — (Унаследовано) Объединяет накопленный контекст и выполняет запрос к ИИ."]}),`
`]}),`
`,e.jsx(n.h3,{id:"конфигурация",children:"Конфигурация"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKey(key: string): this"})," — (Унаследовано) Обновляет API-ключ и переинициализирует внутренний клиент."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setModel(model: string): this"})," — (Унаследовано) Переключает активную модель."]}),`
`]}),`
`,e.jsx(n.h3,{id:"сбор-контекста",children:"Сбор контекста"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addPrompt(prompt: string): void"})," — (Унаследовано) Добавляет постоянный текстовый префикс."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addContent(content: string): this"})," — (Унаследовано) Добавляет текстовую часть к промпту."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addImage(image: AiImageItem): this"})," — (Унаследовано) Добавляет изображение (base64) к запросу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetPrompt(): void"})," — (Унаследовано) Очищает постоянный префикс."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetContents(): this"})," — (Унаследовано) Очищает все накопленные части текста."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resetImages(): this"})," — (Унаследовано) Очищает все накопленные изображения."]}),`
`]}),`
`,e.jsx(n.h2,{id:"типы",children:"Типы"}),`
`,e.jsx(n.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,e.jsx(n.p,{children:"Представляет изображение для мультимодальных запросов."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mime: string"})," — MIME-тип изображения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"base64: string"})," — данные изображения в формате base64."]}),`
`]}),`
`,e.jsx(n.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,e.jsxs(n.p,{children:["Массив элементов ",e.jsx(n.code,{children:"AiImageItem"}),"."]})]})}function j(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
