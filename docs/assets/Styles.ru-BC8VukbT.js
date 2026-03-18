import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/Styles - Оркестратор стилей"}),`
`,s.jsx(e.h1,{id:"класс-styles",children:"Класс Styles"}),`
`,s.jsxs(e.p,{children:["Класс ",s.jsx(e.code,{children:"Styles"})," является центральным оркестратором для создания всех системных файлов, связанных со стилями, внутри дизайн-системы. Он управляет инициализацией корневых переменных, базовых классов, SCSS-свойств и специфичных для дизайна настроек стилей."]}),`
`,s.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Системная генерация"})," — Координирует создание файлов ",s.jsx(e.code,{children:"vars"}),", ",s.jsx(e.code,{children:"classes"}),", ",s.jsx(e.code,{children:"properties"})," и ",s.jsx(e.code,{children:"list"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Инициализация корневых переменных"})," — Использует ",s.jsx(e.code,{children:"StylesRoot"})," для создания глобальных CSS-переменных."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Управление базовыми классами"})," — Использует ",s.jsx(e.code,{children:"StylesClasses"})," для генерации стандартных утилитарных классов."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Настройка с учетом дизайна"})," — Автоматически создает файлы ",s.jsx(e.code,{children:"main"}),", ",s.jsx(e.code,{children:"basic"})," и ",s.jsx(e.code,{children:"style"}),", адаптированные для конкретных дизайнов."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Интеграция с SCSS"})," — Преобразует данные о свойствах в структуры, совместимые с SCSS, используя ",s.jsx(e.code,{children:"PropertiesScss"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Автоматическая чистка"})," — Отфильтровывает лишние данные, чтобы файлы списков оставались чистыми."]}),`
`]}),`
`,s.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(e.p,{children:["Инициализируйте оркестратор ",s.jsx(e.code,{children:"Styles"}),". Он внутренне управляет экземпляром ",s.jsx(e.code,{children:"Properties"})," для получения данных дизайна."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,s.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"make(): this"})," — Основная точка входа. Запускает полный цикл генерации для всех дизайнов."]}),`
`]}),`
`,s.jsx(e.h3,{id:"внутренняя-инициализация",children:"Внутренняя инициализация"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"initRoot(items: PropertiesItems): this"})," — Генерирует глобальные переменные и записывает их в файл ",s.jsx(e.code,{children:"vars"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"initClasses(items: PropertiesItems): this"})," — Генерирует базовые классы и отдельные файлы классов."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"initProperties(items: PropertiesItems): this"})," — Генерирует структуры свойств SCSS."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"initList(items: PropertiesItems): this"})," — Генерирует очищенный список свойств для ссылок."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"initBasic(design: string): this"})," — Генерирует базовые файлы подключения и стилевые привязки для конкретного дизайна."]}),`
`]})]})}function j(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{j as default};
