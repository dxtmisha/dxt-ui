import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function n(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/StylesProperties - Диспетчер преобразования свойств"}),`
`,e.jsx(s.h1,{id:"класс-stylesproperties",children:"Класс StylesProperties"}),`
`,e.jsxs(s.p,{children:["Класс ",e.jsx(s.code,{children:"StylesProperties"})," выступает в роли центрального диспетчера для преобразования свойств дизайна в SCSS. Он обходит ветви свойств и делегирует фактическое преобразование специализированным классам ",e.jsx(s.code,{children:"StylesTo*"})," в зависимости от типа переменной свойства."]}),`
`,e.jsx(s.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Диспетчеризация по типу"})," — Автоматически выбирает нужный преобразователь (например, ",e.jsx(s.code,{children:"StylesToVar"}),", ",e.jsx(s.code,{children:"StylesToProperty"}),", ",e.jsx(s.code,{children:"StylesToSelector"}),") на основе ",e.jsx(s.code,{children:"PropertyType"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Рекурсивная обработка"})," — Обрабатывает вложенные структуры свойств, рекурсивно инициализируя себя для подветвей."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Управление вспомогательными блоками"})," — Интеллектуально оборачивает селекторы и псевдоэлементы в блоки ",e.jsx(s.code,{children:"& { ... }"}),", когда они являются частью более крупной вложенной структуры."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Отслеживание отступов"})," — Управляет и увеличивает уровни отступов при переходе во вложенные ветви свойств."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Сохранение состояния"})," — Отслеживает, обрабатывается ли первый элемент в блоке, для правильного управления вертикальными отступами."]}),`
`]}),`
`,e.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(s.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(s.code,{children:"StylesProperties(space, property, parent)"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"space: string"})," — строка отступа."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"property: PropertyItemsItem"})," — текущая обрабатываемая ветвь дерева свойств."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"parent?: PropertyItem"})," — родительский элемент свойства (необязательно)."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Инициализация StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,e.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"make(): string[]"})," — Основная точка входа. Обходит свойства в текущей ветке и возвращает массив строк SCSS, представляющих преобразованные правила."]}),`
`]})]})}function p(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{p as default};
