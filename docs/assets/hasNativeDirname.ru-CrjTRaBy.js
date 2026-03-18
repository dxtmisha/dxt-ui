import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Functions/hasNativeDirname - Проверка доступности __dirname"}),`
`,n.jsx(e.h1,{id:"hasnativedirname",children:n.jsx(e.code,{children:"hasNativeDirname"})}),`
`,n.jsxs(e.p,{children:["Функция проверяет, доступна ли глобальная переменная ",n.jsx(e.code,{children:"__dirname"})," в текущей среде."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если ",n.jsx(e.code,{children:"__dirname"})," определена, в противном случае ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,n.jsxs(e.p,{children:["Функция использует ",n.jsx(e.code,{children:"typeof __dirname !== 'undefined'"})," для определения того, поддерживает ли среда встроенное разрешение имен директорий (обычно в средах CommonJS)."]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Среда поддерживает встроенный __dirname')
}
`})})]})}function l(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{l as default};
