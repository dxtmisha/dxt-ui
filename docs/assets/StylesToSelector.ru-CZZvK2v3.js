import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/StylesToSelector - Генератор CSS-селекторов"}),`
`,e.jsx(n.h1,{id:"класс-stylestoselector",children:"Класс StylesToSelector"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"StylesToSelector"})," отвечает за создание CSS-селекторов для под-свойств, таких как псевдоклассы (",e.jsx(n.code,{children:":hover"}),", ",e.jsx(n.code,{children:":active"}),") или целевые состояния компонентов. Он интеллектуально определяет, использовать ли прямой псевдокласс или миксин."]}),`
`,e.jsx(n.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Динамическая генерация селекторов"})," — Автоматически преобразует имена свойств в соответствующие CSS-селекторы."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с миксинами"})," — Распознает определенные состояния, такие как ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"active"}),", ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"disabled"})," и ",e.jsx(n.code,{children:"readonly"}),", и использует соответствующие SCSS-миксины."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Контекстно-зависимое разрешение классов"})," — Определяет, принадлежит ли под-свойство основному классу компонента, для оптимизации параметров миксина."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление отступами"})," — Обеспечивает правильную структуру блоков и вертикальные отступы."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Инициализируйте преобразователь ",e.jsx(n.code,{children:"StylesToSelector"})," с помощью необходимого свойства и функции контента."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — текущая обрабатываемая ветвь дерева свойств."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — строка отступа."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — указывает, является ли элемент первым (необязательно)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToSelector } from '@dxtmisha/scripts'

const converter = new StylesToSelector(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — Основная точка входа. Организует разрешение селектора и обертку блоков. Генерирует вывод только при наличии внутреннего контента."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
