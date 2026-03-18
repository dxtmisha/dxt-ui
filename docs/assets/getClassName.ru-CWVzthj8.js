import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"@dxtmisha/ru/functional/Functions/getClassName - Получение имени класса из свойств"}),`
`,s.jsx(n.h1,{id:"getclassname",children:s.jsx(n.code,{children:"getClassName"})}),`
`,s.jsxs(n.p,{children:["Утилитарная функция, которая извлекает свойство ",s.jsx(n.code,{children:"class"})," из заданного объекта свойств. Она гарантирует, что возвращаемое значение является строкой, что полезно для единообразного получения имен классов при рендеринге компонентов или элементов."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Параметры:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"props?: T"})," — Объект свойств компонента, который может содержать свойство ",s.jsx(n.code,{children:"class"}),"."]}),`
`]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"Возвращает:"}),`
`,s.jsx(n.code,{children:"string | undefined"})," — Имя класса в виде строки, если оно существует и является строкой, в противном случае ",s.jsx(n.code,{children:"undefined"}),"."]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { getClassName } from '@dxtmisha/functional'

// Возвращает 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Возвращает undefined, так как 'class' отсутствует
const className2 = getClassName({ otherProp: 1 })

// Возвращает undefined, так как 'class' не является строкой
const className3 = getClassName({ class: 123 })
`})})]})}function x(e={}){const{wrapper:n}={...t(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(c,{...e})}):c(e)}export{x as default};
