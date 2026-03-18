import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/StylesToClassFull - Генератор полных названий классов"}),`
`,s.jsx(n.h1,{id:"класс-stylestoclassfull",children:"Класс StylesToClassFull"}),`
`,s.jsxs(n.p,{children:["Класс ",s.jsx(n.code,{children:"StylesToClassFull"})," предназначен для создания CSS-правил, где селектор предоставляется в виде полной строки. В отличие от ",s.jsx(n.code,{children:"StylesToClass"}),", этот класс всегда создает CSS-блок, даже если он не содержит внутренних свойств."]}),`
`,s.jsx(n.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Обязательная генерация"})," — Всегда создает CSS-блок с указанным селектором."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Поддержка полного селектора"})," — Напрямую использует предоставленную строку в качестве CSS-селектора без дополнительной обработки."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Автоматическая обертка блока"})," — Корректно оборачивает содержимое в стандартные фигурные скобки CSS ",s.jsx(n.code,{children:"{}"}),"."]}),`
`]}),`
`,s.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(n.p,{children:["Инициализируйте преобразователь ",s.jsx(n.code,{children:"StylesToClassFull"})," с помощью необходимого свойства и функции контента для правил стиля."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Параметры:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"property: PropertyItemsItem"})," — текущая ветка дерева свойств, которая обрабатывается."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"space: string"})," — строка отступа (например, ",s.jsx(n.code,{children:'"  "'})," или ",s.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"first?: boolean"})," — указывает, является ли этот элемент первым на текущем уровне (необязательно, по умолчанию: ",s.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { StylesToClassFull } from '@dxtmisha/scripts'

// Использование в логике преобразования
const converter = new StylesToClassFull(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,s.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"make(): string[]"})," — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке."]}),`
`]})]})}function j(e={}){const{wrapper:n}={...r(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(l,{...e})}):l(e)}export{j as default};
