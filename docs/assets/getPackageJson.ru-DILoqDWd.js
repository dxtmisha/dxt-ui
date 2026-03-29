import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Functions/getPackageJson - Получение содержимого package.json`}),`
`,(0,c.jsx)(n.h1,{id:`getpackagejson`,children:(0,c.jsx)(n.code,{children:`getPackageJson`})}),`
`,(0,c.jsxs)(n.p,{children:[`Функция возвращает содержимое файла `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, any> | undefined`}),` — содержимое файла `,(0,c.jsx)(n.code,{children:`package.json`}),` или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если файл не удалось прочитать.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция использует метод `,(0,c.jsx)(n.code,{children:`PropertiesFile.readFile`}),` для загрузки содержимого файла `,(0,c.jsx)(n.code,{children:`package.json`}),`, указанного в глобальной конфигурации.`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};