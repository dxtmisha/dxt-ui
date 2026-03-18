import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/ru/scripts/Functions/getDirname - Получение имени текущей директории"}),`
`,n.jsx(e.h1,{id:"getdirname",children:n.jsx(e.code,{children:"getDirname"})}),`
`,n.jsx(e.p,{children:"Функция возвращает имя текущей директории, обрабатывая как среды CommonJS, так и ESM."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"string"})," — имя текущей директории."]}),`
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,n.jsxs(e.p,{children:["Функция проверяет, имеет ли среда встроенную поддержку ",n.jsx(e.code,{children:"__dirname"})," (используя ",n.jsx(e.code,{children:"hasNativeDirname"}),"). Если да, возвращается ",n.jsx(e.code,{children:"__dirname"}),". В противном случае имя директории вычисляется на основе ",n.jsx(e.code,{children:"import.meta.url"}),"."]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function x(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{x as default};
