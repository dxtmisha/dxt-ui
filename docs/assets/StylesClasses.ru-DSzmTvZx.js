import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/StylesClasses - Генератор базовых классов"}),`
`,s.jsx(e.h1,{id:"класс-stylesclasses",children:"Класс StylesClasses"}),`
`,s.jsxs(e.p,{children:["Класс ",s.jsx(e.code,{children:"StylesClasses"})," отвечает за создание базовых CSS-классов на основе свойств дизайна. Он фильтрует список свойств по таким категориям, как ",s.jsx(e.code,{children:"class"})," и ",s.jsx(e.code,{children:"theme"}),", и создает структуры отдельных классов."]}),`
`,s.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Фильтрация по категориям"})," — Специально нацелен на свойства, классифицированные как ",s.jsx(e.code,{children:"class"})," или ",s.jsx(e.code,{children:"theme"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Динамическая генерация классов"})," — Создает словарь блоков SCSS, где каждый ключ является именем класса."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Оркестрация зависимостей"})," — Использует ",s.jsx(e.code,{children:"StylesProperties"})," для генерации внутренних правил стиля (свойств, миксинов и т. д.) для каждого класса."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Управление импортом"})," — Автоматически включает необходимые директивы SCSS ",s.jsx(e.code,{children:"@use"})," для связывания созданных файлов классов."]}),`
`]}),`
`,s.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",s.jsx(e.code,{children:"StylesClasses(items)"}),"."]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Параметры:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"items: PropertiesItems"})," — объект для работы со списком свойств дизайна."]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация PropertiesItems
const items = new PropertiesItems(designData)

// 2. Инициализация StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,s.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"init(): StylesClassesItem"})," — Основная точка входа. Обрабатывает список свойств и возвращает объект, содержащий список необходимых импортов и сгенерированное содержимое классов."]}),`
`]}),`
`,s.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,s.jsx(e.h3,{id:"stylesclassesitem",children:"StylesClassesItem"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"data: string[]"})," — Массив операторов SCSS ",s.jsx(e.code,{children:"@use"})," для созданных файлов классов."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"classes: Record<string, string[]>"})," — Словарь, где каждый ключ — это имя класса, а значение — массив строк, представляющих содержимое SCSS этого класса."]}),`
`]})]})}function j(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{j as default};
