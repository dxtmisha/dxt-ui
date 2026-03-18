import{j as i}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{title:"@dxtmisha/ru/scripts/Classes/AiDocType - Менеджер типов AI-документации"}),`
`,i.jsx(e.h1,{id:"класс-aidoctype",children:"Класс AiDocType"}),`
`,i.jsx(e.p,{children:"Управляющий класс, который выступает в роли реестра и селектора для различных типов документации. Он определяет, какой специализированный обработчик (например, для классов, функций или композаблов) следует использовать для конкретного файла на основе его характеристик."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Динамическая регистрация"})," — позволяет добавлять новые типы документации в систему во время выполнения."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Умный выбор"})," — автоматически идентифицирует подходящий обработчик, перебирая зарегистрированные типы и выполняя их логику проверки."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Делегирование"})," — координирует создание экземпляров и выполнение специализированных обработчиков документации (реализаций ",i.jsx(e.code,{children:"AiDocItemAbstract"}),")."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Статический API"})," — предоставляет удобный статический интерфейс для глобального управления документацией без необходимости создания экземпляров класса."]}),`
`]}),`
`,i.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,i.jsxs(e.p,{children:[i.jsx(e.code,{children:"AiDocType"})," предназначен для использования через статические методы. Инициализация не требуется."]}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-typescript",children:`import { AiDocType } from '@dxtmisha/scripts'

// Движок использует этот класс внутри для обработки элементов файлов:
await AiDocType.make(gitFileItem)
`})}),`
`,i.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,i.jsx(e.h3,{id:"управление-документацией",children:"Управление документацией"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"make(item: GitFileItem): Promise<void>"})," — (Статический) Анализирует переданный элемент файла, выбирает соответствующий тип документации и запускает процесс генерации."]}),`
`]}),`
`,i.jsx(e.h3,{id:"управление-реестром",children:"Управление реестром"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"add(type: AiDocTypeItem): void"})," — (Статический) Регистрирует новый тип документации, добавляя его в начало приоритетного списка."]}),`
`]}),`
`,i.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,i.jsx(e.h3,{id:"aidoctypeitem",children:"AiDocTypeItem"}),`
`,i.jsx(e.p,{children:"Конфигурация для обработчика типа документации."}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"check: (item: GitFileItem) => boolean"})," — функция определения применимости обработчика к файлу."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"item: new (path: string, item: GitFileItem) => AiDocItemAbstract"})," — конструктор класса обработчика."]}),`
`]}),`
`,i.jsx(e.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,i.jsx(e.p,{children:"Представляет информацию о файле, управляемом Git."}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"path: string"})," — относительный путь к файлу."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"pathByOS: string"})," — абсолютный путь, специфичный для ОС."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"date: string"})," — дата последнего изменения."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"item: any"})," — зарезервировано для дополнительных метаданных."]}),`
`]})]})}function j(n={}){const{wrapper:e}={...c(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(s,{...n})}):s(n)}export{j as default};
