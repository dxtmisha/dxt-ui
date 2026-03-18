import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/StylesToVar - Преобразователь CSS-переменных"}),`
`,n.jsx(s.h1,{id:"класс-stylestovar",children:"Класс StylesToVar"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"StylesToVar"})," используется для преобразования свойств дизайна в переменные CSS. Он может обрабатывать отдельные переменные или обрабатывать все вложенные переменные внутри ветки."]}),`
`,n.jsx(s.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Пакетная обработка переменных"})," — Может перебирать ветку и генерировать объявления CSS-переменных для всех под-свойств, помеченных как переменные."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Генерация отдельных переменных"})," — Также может использоваться для генерации одной переменной для текущего свойства."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Преобразование цвета в RGB"})," — Автоматически преобразует значения цветов в формат RGB (обернутый в ",n.jsx(s.code,{children:"ui.toColorRbg"}),") для лучшей совместимости с управлением прозрачностью."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Поддержка прозрачности"})," — Генерирует дополнительные переменные ",n.jsx(s.code,{children:"-opacity"}),", если свойство содержит данные о прозрачности."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Нормализация значений"})," — Обеспечивает правильное экранирование значений и по умолчанию устанавливает ",n.jsx(s.code,{children:"unset"}),", если значение отсутствует."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Инициализируйте преобразователь ",n.jsx(s.code,{children:"StylesToVar"})," с помощью необходимой ветки свойств."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"property: PropertyItemsItem"})," — текущая обрабатываемая ветвь дерева свойств."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"space: string"})," — строка отступа."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"content?: () => string[]"})," — обычно не используется для блоков переменных."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"first?: boolean"})," — указывает, является ли элемент первым (необязательно)."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { StylesToVar } from '@dxtmisha/scripts'

const converter = new StylesToVar(property, '  ')
const result = converter.make()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): string[]"})," — Основная точка входа. Организует генерацию одной или нескольких CSS-переменных на основе структуры свойства."]}),`
`]})]})}function j(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
