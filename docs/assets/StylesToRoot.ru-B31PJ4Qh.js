import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/StylesToRoot - Генератор блоков At-Root"}),`
`,n.jsx(e.h1,{id:"класс-stylestoroot",children:"Класс StylesToRoot"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"StylesToRoot"})," используется для обертывания блока вложенных правил в директиву CSS ",n.jsx(e.code,{children:"@at-root"}),". Это полезно для выноса правил из их текущей области видимости в корень таблицы стилей."]}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обертка At-Root"})," — Автоматически оборачивает созданный контент в блок ",n.jsx(e.code,{children:"@at-root"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическое включение селектора"})," — Добавляет имя свойства (выступающее как расширение селектора) к директиве ",n.jsx(e.code,{children:"@at-root"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление отступами"})," — Обрабатывает стандартные отступы блоков и начальные пустые строки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте преобразователь ",n.jsx(e.code,{children:"StylesToRoot"})," с помощью необходимого свойства и функции контента."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"property: PropertyItemsItem"})," — текущая обрабатываемая ветвь дерева свойств."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"space: string"})," — строка отступа."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first?: boolean"})," — указывает, является ли элемент первым (необязательно)."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { StylesToRoot } from '@dxtmisha/scripts'

const converter = new StylesToRoot(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): string[]"})," — Основная точка входа. Организует процесс обертывания контента в структуру ",n.jsx(e.code,{children:"@at-root"}),"."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{j as default};
