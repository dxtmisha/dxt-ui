import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/scripts/Functions/getComponentPaths - Получение путей компонентов"}),`
`,n.jsx(t.h1,{id:"getcomponentpaths",children:n.jsx(t.code,{children:"getComponentPaths"})}),`
`,n.jsx(t.p,{children:"Функция возвращает пути к компоненту, объединяя базовую директорию компонентов с указанным путем."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Параметры:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — путь к компоненту."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Возвращает:"}),`
`,n.jsx(t.code,{children:"string[]"})," — массив путей."]}),`
`,n.jsx(t.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,n.jsxs(t.p,{children:["Функция используется для формирования полного пути к компоненту на основе глобальной конфигурации проекта. Она использует константу ",n.jsx(t.code,{children:"UI_DIRS_COMPONENTS"}),", которая определяет базовую директорию для всех компонентов."]}),`
`,n.jsx(t.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getComponentPaths } from '@dxtmisha/scripts'

getComponentPaths('button') // ['src', 'components', 'button']
`})})]})}function x(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
