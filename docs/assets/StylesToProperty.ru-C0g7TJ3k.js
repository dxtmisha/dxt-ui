import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/StylesToProperty - Генератор CSS-свойств"}),`
`,n.jsx(e.h1,{id:"класс-stylestoproperty",children:"Класс StylesToProperty"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"StylesToProperty"})," отвечает за преобразование свойств дизайна в стандартные CSS-свойства или вызовы SCSS-миксинов. Он управляет генерацией переменных, специальным форматированием свойств и вспомогательными значениями для таких параметров, как прозрачность."]}),`
`,n.jsx(e.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартные CSS-свойства"})," — Генерирует пары свойство-значение (например, ",n.jsx(e.code,{children:"margin-top: 10px;"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с SCSS-миксинами"})," — Автоматически преобразует определенные свойства в вызовы миксинов, если они зарегистрированы в ",n.jsx(e.code,{children:"styleTypes"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Генерация CSS-переменных"})," — Может генерировать пользовательские CSS-переменные, если для свойства установлен флаг ",n.jsx(e.code,{children:"varKey"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Инициализация вспомогательных значений"})," — Автоматически включает вызовы инициализации для свойств, связанных с прозрачностью, если базовое свойство отсутствует."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Сортировка и отступы"})," — Добавляет вертикальные отступы между свойствами при изменении индекса сортировки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте преобразователь ",n.jsx(e.code,{children:"StylesToProperty"})," с текущей веткой свойств."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"property: PropertyItemsItem"})," — текущая обрабатываемая ветвь дерева свойств."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"space: string"})," — строка отступа."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"content?: () => string[]"})," — обычно не используется для свойств, так как они являются конечными узлами."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first?: boolean"})," — указывает, является ли элемент первым (необязательно)."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): string[]"})," — Основная точка входа. Организует преобразование, включая генерацию переменных и разрешение миксинов."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
