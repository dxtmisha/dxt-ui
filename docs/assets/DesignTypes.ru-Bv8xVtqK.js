import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/scripts/Classes/DesignTypes - Генератор типов для ИИ"}),`
`,n.jsx(s.h1,{id:"класс-designtypes",children:"Класс DesignTypes"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"DesignTypes"})," — это специализированная утилита, предназначенная для сокращения разрыва между сложными определениями типов в коде и ИИ-помощниками по кодированию. Она автоматизирует извлечение, очистку и сжатие файлов деклараций TypeScript (",n.jsx(s.code,{children:".d.ts"}),"), используя ИИ для создания гипер-минималистичной версии системы типов проекта, которая обеспечивает максимальный контекст при минимальном потреблении токенов."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматическое обнаружение"})," — рекурсивно сканирует директории сборки для поиска релевантных файлов деклараций типов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеллектуальная фильтрация"})," — автоматически исключает внутренние пропсы конструкторов и второстепенные типы логики, сохраняя публичные API."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Сжатие на базе ИИ"})," — использует промпты LLM для удаления ненужных метаданных (импортов, комментариев, пустых строк) и консолидации определений."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Единый вывод"})," — объединяет несколько фрагментированных файлов деклараций в одну связную библиотеку типов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Оптимизация контекста"})," — приоритизирует интерфейсы, перечисления и алиасы типов, наиболее важные для понимания ИИ."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(s.p,{children:"Инициализируйте генератор, указав исходную директорию, где расположены скомпилированные файлы деклараций."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"dir: string"})," — путь к входной директории (по умолчанию ",n.jsx(s.code,{children:"'dist'"}),")."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { DesignTypes } from '@dxtmisha/scripts'

const generator = new DesignTypes('packages/core/dist')
generator.make()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): void"})," — запускает полный конвейер генерации: обнаружение, объединение, обработку ИИ и сохранение."]}),`
`]}),`
`,n.jsx(s.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(s.h3,{id:"конвейер-генерации-типов",children:"Конвейер генерации типов"}),`
`,n.jsxs(s.p,{children:["При выполнении ",n.jsx(s.code,{children:"make()"})," класс координирует многоэтапный рабочий процесс:"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Фильтрация файлов (",n.jsx(s.code,{children:"getListByFilter"}),")"]}),": движок сканирует директорию на наличие файлов ",n.jsx(s.code,{children:".d.ts"}),", отфильтровывая детали внутренней реализации, такие как ",n.jsx(s.code,{children:"props.d.ts"})," или ",n.jsx(s.code,{children:"types.d.ts"})," внутри папок конструкторов."]}),`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Валидация контента (",n.jsx(s.code,{children:"isContent"}),")"]}),": проверяет, что каждый файл действительно содержит значимые определения типов (интерфейсы, типы или перечисления) перед обработкой."]}),`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Консолидация (",n.jsx(s.code,{children:"toOneFile"}),")"]}),": содержимое всех идентифицированных файлов объединяется в одну большую строку, помеченную путями к оригинальным файлам для контекста."]}),`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Трансформация ИИ (",n.jsx(s.code,{children:"toAiEdit"}),")"]}),": объединенный контент отправляется ИИ-помощнику со специфическими инструкциями по удалению шаблонного кода, неанглийских комментариев и минимизации синтаксиса."]}),`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Сохранение (",n.jsx(s.code,{children:"save"}),")"]}),": финальная библиотека типов высокой плотности сохраняется по настроенному пути вывода (обычно указанному в ",n.jsx(s.code,{children:"UI_FILE_AI_TYPES"}),")."]}),`
`]}),`
`,n.jsx(s.h3,{id:"кейс-внедрение-контекста-для-ии",children:"Кейс: Внедрение контекста для ИИ"}),`
`,n.jsx(s.p,{children:"Основная цель этого класса — создание «артефакта знаний», который может быть внедрен в системный промпт LLM, работающих над проектом. Предоставляя чистый, сжатый обзор всех доступных типов и интерфейсов, ИИ может писать типобезопасный код и понимать архитектуру компонентов с значительно более высокой точностью и меньшими затратами."})]})}function j(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
