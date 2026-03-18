import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/StylesToVirtual - Генератор псевдоэлементов"}),`
`,e.jsx(n.h1,{id:"класс-stylestovirtual",children:"Класс StylesToVirtual"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"StylesToVirtual"})," отвечает за создание CSS-псевдоэлементов (таких как ",e.jsx(n.code,{children:"::before"}),", ",e.jsx(n.code,{children:"::after"}),") и связанных с ними стилей."]}),`
`,e.jsx(n.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обертка псевдоэлементов"})," — Автоматически оборачивает контент в селектор ",e.jsx(n.code,{children:"&::[name]"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое свойство content"})," — Для псевдоэлементов, таких как ",e.jsx(n.code,{children:"before"})," и ",e.jsx(n.code,{children:"after"}),", автоматически внедряет ",e.jsx(n.code,{children:"content: ' ';"}),", если иное не указано."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление отступами"})," — Правильно обрабатывает отступы блоков и необязательные начальные пустые строки."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Инициализируйте преобразователь ",e.jsx(n.code,{children:"StylesToVirtual"})," с помощью необходимого свойства и функции контента."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — текущая обрабатываемая ветвь дерева свойств."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — строка отступа."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих стили для псевдоэлемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — указывает, является ли элемент первым (необязательно)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToVirtual } from '@dxtmisha/scripts'

const converter = new StylesToVirtual(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — Основная точка входа. Организует процесс обертывания вложенных стилей в блок псевдоэлемента."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
