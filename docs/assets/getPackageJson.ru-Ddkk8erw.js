import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/scripts/Functions/getPackageJson - Получение содержимого package.json"}),`
`,e.jsx(n.h1,{id:"getpackagejson",children:e.jsx(n.code,{children:"getPackageJson"})}),`
`,e.jsxs(n.p,{children:["Функция возвращает содержимое файла ",e.jsx(n.code,{children:"package.json"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"Record<string, any> | undefined"})," — содержимое файла ",e.jsx(n.code,{children:"package.json"})," или ",e.jsx(n.code,{children:"undefined"}),", если файл не удалось прочитать."]}),`
`,e.jsx(n.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,e.jsxs(n.p,{children:["Функция использует метод ",e.jsx(n.code,{children:"PropertiesFile.readFile"})," для загрузки содержимого файла ",e.jsx(n.code,{children:"package.json"}),", указанного в глобальной конфигурации."]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}
`})})]})}function j(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{j as default};
