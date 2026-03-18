import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/AiDocItemClasses - Генератор документации классов через ИИ"}),`
`,s.jsx(n.h1,{id:"класс-aidocitemclasses",children:"Класс AiDocItemClasses"}),`
`,s.jsx(n.p,{children:"Специализированный класс для генерации и обновления документации TypeScript-классов с помощью ИИ. Он автоматизирует весь процесс: от чтения исходного кода и сбора контекста до взаимодействия с моделями ИИ и создания стандартизированных MDX-файлов документации."}),`
`,s.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Автоматизированная генерация"})," — управляет полным циклом создания документации на основе определения класса."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"На основе шаблонов"})," — использует специализированные шаблоны промптов (",s.jsx(n.code,{children:"aiDocClassPrompt.en.txt"}),") для обеспечения согласованных ответов ИИ."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Демо-ориентированность"})," — использует эталонные демонстрационные файлы (",s.jsx(n.code,{children:"demoClassEn.mdx"}),"), чтобы помочь ИИ в визуальном форматировании."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Умная логика"})," — автоматически определяет пути в Wiki и заголовки на основе структуры исходного файла."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Защита процесса сборки"})," — интегрируется с системой сборки, гарантируя, что документируется только корректный, компилируемый код."]}),`
`]}),`
`,s.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(n.p,{children:["Инициализируйте ",s.jsx(n.code,{children:"AiDocItemClasses"}),", указав путь к исходному коду и информацию о целевом файле."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Параметры:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"path: string"})," — базовый путь к директории проекта."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"item: GitFileItem"})," — информация о конкретном TypeScript-файле класса."]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { AiDocItemClasses } from '@dxtmisha/scripts'

const classDoc = new AiDocItemClasses('/src/classes', gitFileItem)

// Запуск генерации документации
await classDoc.make()
`})}),`
`,s.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"make(): Promise<void>"})," — запускает цикл документирования: проверяет наличие обновлений, подготавливает контекст, вызывает ИИ и записывает результаты."]}),`
`]}),`
`,s.jsx(n.h3,{id:"метаданные",children:"Метаданные"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"getTitle(): string"})," — формирует стандартизированный заголовок для страницы документации."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"getPathWiki(): string[]"})," — рассчитывает путь хранения в Wiki на основе расположения файла."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"isBuildDisabled(): boolean"})," — проверяет, помечен ли файл маркером ",s.jsx(n.code,{children:"// wiki:build-none"})," для пропуска обработки."]}),`
`]}),`
`,s.jsx(n.h2,{id:"типы",children:"Типы"}),`
`,s.jsx(n.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,s.jsx(n.p,{children:"Представляет информацию о файле, управляемом Git."}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"path: string"})," — относительный путь к файлу."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"pathByOS: string"})," — абсолютный путь, специфичный для ОС."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"date: string"})," — дата последнего изменения."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"item: any"})," — зарезервировано для дополнительных метаданных."]}),`
`]})]})}function j(i={}){const{wrapper:n}={...l(),...i.components};return n?s.jsx(n,{...i,children:s.jsx(e,{...i})}):e(i)}export{j as default};
