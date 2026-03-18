import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/StylesToContainer - Генератор Container Query"}),`
`,n.jsx(e.h1,{id:"класс-stylestocontainer",children:"Класс StylesToContainer"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"StylesToContainer"})," отвечает за создание CSS-запросов ",n.jsx(e.code,{children:"@container"})," на основе свойств дизайна. Он реализует логику для обертывания вложенных правил стилей в блок container query."]}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обертка Container Query"})," — Автоматически оборачивает созданный контент стилей в правило ",n.jsx(e.code,{children:"@container"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическое разрешение запроса"})," — Использует значение свойства дизайна для определения условия container query."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление отступами"})," — Корректно обрабатывает отступы блоков и необязательные начальные пустые строки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте преобразователь ",n.jsx(e.code,{children:"StylesToContainer"})," с помощью необходимого свойства и функции контента для вложенных правил."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"property: PropertyItemsItem"})," — текущая ветка дерева свойств, которая обрабатывается."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"space: string"})," — строка отступа (например, ",n.jsx(e.code,{children:'"  "'})," или ",n.jsx(e.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"content?: () => string[]"})," — вызываемая функция, которая возвращает массив строк, представляющих внутренние правила стиля."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first?: boolean"})," — указывает, является ли этот элемент первым на текущем уровне (необязательно, по умолчанию: ",n.jsx(e.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { StylesToContainer } from '@dxtmisha/scripts'

// Использование в логике преобразования
const converter = new StylesToContainer(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): string[]"})," — Основная точка входа. Организует преобразование и добавляет необходимый отступ к каждой строке."]}),`
`]})]})}function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
