import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/scripts/Classes/AiDocItem - Генератор документации функций через ИИ"}),`
`,n.jsx(i.h1,{id:"класс-aidocitem",children:"Класс AiDocItem"}),`
`,n.jsx(i.p,{children:"Специализированный класс для генерации и обновления документации TypeScript-функций с помощью ИИ. Он упрощает создание подробных описаний функций, пояснений к параметрам и примеров использования."}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Оптимизация для функций"})," — использует специальные шаблоны (",n.jsx(i.code,{children:"aiDocFunctionPrompt.en.txt"}),"), разработанные для документирования логики и алгоритмов."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Визуальное единство"})," — использует эталонные данные из ",n.jsx(i.code,{children:"demoDocEn.mdx"})," для создания документации, соответствующей стандартам проекта."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Полный рабочий процесс"})," — берет на себя все этапы: от чтения исходной функции до записи финального MDX-файла."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Умные метаданные"})," — автоматически определяет корректный путь в Wiki и формирует стандартизированный заголовок страницы."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(i.p,{children:["Инициализируйте ",n.jsx(i.code,{children:"AiDocItem"}),", указав путь к проекту и метаданные целевого файла."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Параметры:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — базовый путь к директории проекта."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: GitFileItem"})," — информация о конкретном файле функции."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiDocItem } from '@dxtmisha/scripts'

const functionDoc = new AiDocItem('/src/functions', gitFileItem)

// Запуск генерации документации
await functionDoc.make()
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): Promise<void>"})," — управляет полным процессом документирования: проверкой обновлений, подготовкой контекста для ИИ и записью результатов."]}),`
`]}),`
`,n.jsx(i.h3,{id:"метаданные",children:"Метаданные"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTitle(): string"})," — формирует стандартизированный заголовок для страницы документации функции."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getPathWiki(): string[]"})," — рассчитывает путь хранения в Wiki на основе расположения файла."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — проверяет, помечен ли исходный файл маркером ",n.jsx(i.code,{children:"// wiki:build-none"})," для пропуска генерации."]}),`
`]}),`
`,n.jsx(i.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(i.p,{children:"Представляет информацию о файле, управляемом Git."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — относительный путь к файлу."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"pathByOS: string"})," — абсолютный путь, специфичный для ОС."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"date: string"})," — дата последнего изменения."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: any"})," — зарезервировано для дополнительных метаданных."]}),`
`]})]})}function j(e={}){const{wrapper:i}={...c(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{j as default};
