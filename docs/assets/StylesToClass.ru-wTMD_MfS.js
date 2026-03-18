import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/StylesToClass - Генератор CSS-классов"}),`
`,s.jsx(n.h1,{id:"класс-stylestoclass",children:"Класс StylesToClass"}),`
`,s.jsxs(n.p,{children:["Класс ",s.jsx(n.code,{children:"StylesToClass"})," используется для создания стандартных CSS-правил (селекторов и их содержимого) на основе свойств дизайна. Он гарантирует, что блоки создаются только в том случае, если они содержат вложенные правила."]}),`
`,s.jsx(n.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Выборочная генерация"})," — Создает вывод только в том случае, если вызываемая функция ",s.jsx(n.code,{children:"content()"})," возвращает непустой массив."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Разрешение селектора"})," — Использует имя свойства дизайна в качестве CSS-селектора."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Автоматическая обертка блока"})," — Корректно оборачивает свойства в стандартные фигурные скобки CSS ",s.jsx(n.code,{children:"{}"}),"."]}),`
`]}),`
`,s.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,s.jsxs(n.p,{children:["Инициализируйте преобразователь ",s.jsx(n.code,{children:"StylesToClass"})," с помощью необходимого свойства и функции контента для вложенных правил стиля."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Параметры:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"property: PropertyItemsItem"})," — текущая ветка дерева свойств, которая обрабатывается."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"space: string"})," — строка отступа (например, ",s.jsx(n.code,{children:'"  "'})," или ",s.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих внутренние стили."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"first?: boolean"})," — указывает, является ли этот элемент первым на текущем уровне (необязательно, по умолчанию: ",s.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { StylesToClass } from '@dxtmisha/scripts'

// Использование в логике преобразования
const converter = new StylesToClass(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,s.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,s.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"make(): string[]"})," — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке."]}),`
`]})]})}function j(e={}){const{wrapper:n}={...l(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(r,{...e})}):r(e)}export{j as default};
