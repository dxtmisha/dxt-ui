import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/scripts/Functions/getNameDirByPaths - Получение имени последней директории"}),`
`,e.jsx(n.h1,{id:"getnamedirbypaths",children:e.jsx(n.code,{children:"getNameDirByPaths"})}),`
`,e.jsx(n.p,{children:"Функция возвращает имя последней директории из переданного массива сегментов пути."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paths: PropertiesFilePath"})," — массив сегментов пути."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"string"})," — имя последней директории."]}),`
`,e.jsx(n.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,e.jsxs(n.p,{children:["Функция объединяет переданные сегменты пути с помощью ",e.jsx(n.code,{children:"PropertiesFile.joinPath"}),", затем снова разбивает их на сегменты директорий с помощью ",e.jsx(n.code,{children:"PropertiesFile.splitForDir"})," и возвращает последний элемент результирующего массива."]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getNameDirByPaths } from '@dxtmisha/scripts'

getNameDirByPaths(['src', 'components', 'button']) // 'button'
`})})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default};
