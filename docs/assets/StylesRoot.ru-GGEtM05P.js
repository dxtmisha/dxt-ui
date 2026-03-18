import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Classes/StylesRoot - Генератор корневых переменных"}),`
`,e.jsx(s.h1,{id:"класс-stylesroot",children:"Класс StylesRoot"}),`
`,e.jsxs(s.p,{children:["Класс ",e.jsx(s.code,{children:"StylesRoot"})," отвечает за генерацию глобального блока CSS ",e.jsx(s.code,{children:":root"})," из токенов дизайна. Он преобразует токены в CSS-переменные и интеллектуально разрешает сложные выражения ",e.jsx(s.code,{children:"calc()"})," для обеспечения совместимости с браузерами."]}),`
`,e.jsx(s.h2,{id:"ключевые-возможности",children:"Ключевые возможности"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Генерация блока Root"})," — Создает стандартную структуру ",e.jsx(s.code,{children:":root { ... }"}),", содержащую все токены дизайна."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Преобразование переменных"})," — Использует ",e.jsx(s.code,{children:"StylesToVar"})," для трансформации элементов свойств в валидные CSS-переменные."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Динамическое разрешение вычислений"})," — Рекурсивно разрешает выражения ",e.jsx(s.code,{children:"calc()"}),", которые ссылаются на другие переменные, гарантируя, что конечные значения будут предварительно вычислены, где это возможно."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Интеграция с SCSS"})," — Автоматически включает необходимые директивы SCSS ",e.jsx(s.code,{children:"@use"})," для определений свойств."]}),`
`]}),`
`,e.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(s.p,{children:["Для инициализации объекта вызовите конструктор ",e.jsx(s.code,{children:"StylesRoot(items)"}),"."]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Параметры:"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"items: PropertiesItems"})," — объект для работы со списком свойств дизайна."]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-typescript",children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Инициализация PropertiesItems
const items = new PropertiesItems(designData)

// 2. Инициализация StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,e.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"init(): string[]"})," — Основная точка входа. Обрабатывает список свойств, разрешает вычисления и возвращает массив строк, представляющих полный блок ",e.jsx(s.code,{children:":root"})," с его импортами."]}),`
`]})]})}function j(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
