import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/StylesToMedia - Генератор медиа-запросов"}),`
`,e.jsx(n.h1,{id:"класс-stylestomedia",children:"Класс StylesToMedia"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"StylesToMedia"})," отвечает за создание CSS-запросов ",e.jsx(n.code,{children:"@media"})," на основе свойств дизайна. Он реализует логику для обертывания вложенных правил стилей в блок медиа-запроса."]}),`
`,e.jsx(n.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Обертка Медиа-запроса"})," — Автоматически оборачивает созданный контент стилей в правило ",e.jsx(n.code,{children:"@media screen and ..."}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Динамическое разрешение запроса"})," — Использует имя свойства дизайна для определения условия медиа-запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление отступами"})," — Корректно обрабатывает отступы блоков и необязательные начальные пустые строки."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Инициализируйте преобразователь ",e.jsx(n.code,{children:"StylesToMedia"})," с помощью необходимого свойства и функции контента для вложенных правил."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"property: PropertyItemsItem"})," — текущая ветка дерева свойств, которая обрабатывается."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"space: string"})," — строка отступа (например, ",e.jsx(n.code,{children:'"  "'})," или ",e.jsx(n.code,{children:'"\\t"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"first?: boolean"})," — указывает, является ли этот элемент первым на текущем уровне (необязательно, по умолчанию: ",e.jsx(n.code,{children:"true"}),")."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { StylesToMedia } from '@dxtmisha/scripts'

// Использование в логике преобразования
const converter = new StylesToMedia(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(): string[]"})," — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
