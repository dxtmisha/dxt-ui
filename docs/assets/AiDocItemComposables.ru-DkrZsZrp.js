import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/AiDocItemComposables - Генератор документации композаблов через ИИ"}),`
`,n.jsx(e.h1,{id:"класс-aidocitemcomposables",children:"Класс AiDocItemComposables"}),`
`,n.jsx(e.p,{children:"Специализированный класс для генерации и обновления документации Vue-композаблов (Composables) с помощью ИИ. Он автоматизирует процесс анализа функций композиции, сбора контекста и создания высококачественной MDX-документации."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ориентированность на Composables"})," — использует специальные шаблоны (",n.jsx(e.code,{children:"aiDocComposablePrompt.en.txt"}),"), адаптированные для документирования функций композиции."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Визуальные демо"})," — включает эталонные данные из ",n.jsx(e.code,{children:"demoComposableEn.mdx"})," для поддержания единого стиля документации композаблов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Полная автоматизация"})," — берет на себя технические этапы: чтение кода, проверку статуса сборки и запись финальных результатов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умная маршрутизация"})," — автоматически рассчитывает подходящий путь хранения в Wiki и заголовок страницы."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте ",n.jsx(e.code,{children:"AiDocItemComposables"}),", указав путь к проекту и метаданные целевого файла."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — базовый путь к директории проекта."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: GitFileItem"})," — информация о конкретном файле композабла."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Запуск генерации документации
await composableDoc.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): Promise<void>"})," — выполняет полный цикл документирования: проверяет наличие обновлений, подготавливает контекст для ИИ и записывает результат."]}),`
`]}),`
`,n.jsx(e.h3,{id:"метаданные",children:"Метаданные"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getTitle(): string"})," — формирует стандартизированный заголовок для документации композабла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getPathWiki(): string[]"})," — рассчитывает путь в Wiki на основе расположения файла в проекте."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isBuildDisabled(): boolean"})," — проверяет, содержит ли исходный файл маркер ",n.jsx(e.code,{children:"// wiki:build-none"}),", чтобы пропустить генерацию."]}),`
`]}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(e.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(e.p,{children:"Представляет информацию о файле, управляемом Git."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — относительный путь к файлу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pathByOS: string"})," — абсолютный путь, специфичный для ОС."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date: string"})," — дата последнего изменения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: any"})," — зарезервировано для дополнительных метаданных."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
