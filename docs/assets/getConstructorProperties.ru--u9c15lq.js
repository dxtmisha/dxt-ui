import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/scripts/Functions/getConstructorProperties - Получение свойств конструкторов"}),`
`,e.jsx(r.h1,{id:"getconstructorproperties",children:e.jsx(r.code,{children:"getConstructorProperties"})}),`
`,e.jsxs(r.p,{children:["Функция возвращает свойства указанных конструкторов, считывая их файлы ",e.jsx(r.code,{children:"properties.json"}),"."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Параметры:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"names: string[]"})," — список названий конструкторов."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Возвращает:"}),`
`,e.jsx(r.code,{children:"PropertyList"})," — объект, где ключи — названия конструкторов, а значения — их свойства."]}),`
`,e.jsx(r.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,e.jsxs(r.p,{children:["Функция перебирает переданные имена и формирует путь к файлу ",e.jsx(r.code,{children:"properties.json"})," для каждого конструктора. Для загрузки данных используется метод ",e.jsx(r.code,{children:"PropertiesFile.readFile"}),"."]}),`
`,e.jsx(r.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { getConstructorProperties } from '@dxtmisha/scripts'

const properties = getConstructorProperties(['Button', 'Input'])
// { Button: { ... }, Input: { ... } }
`})})]})}function x(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
