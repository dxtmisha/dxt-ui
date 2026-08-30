import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/getPackageJson - Получение содержимого package.json`}),`
`,(0,c.jsx)(t.h1,{id:`getpackagejson`,children:(0,c.jsx)(t.code,{children:`getPackageJson`})}),`
`,(0,c.jsxs)(t.p,{children:[`Функция возвращает содержимое файла `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: PropertiesFilePath`}),` — опциональный путь к директории или файлу `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, any> | undefined`}),` — содержимое файла `,(0,c.jsx)(t.code,{children:`package.json`}),` или `,(0,c.jsx)(t.code,{children:`undefined`}),`, если файл не удалось прочитать.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция использует метод `,(0,c.jsx)(t.code,{children:`PropertiesFile.readFile`}),` для загрузки содержимого файла `,(0,c.jsx)(t.code,{children:`package.json`}),`. Если передан параметр `,(0,c.jsx)(t.code,{children:`path`}),`, то файл считывается по указанному пути, иначе считывается стандартный `,(0,c.jsx)(t.code,{children:`package.json`}),`, указанный в конфигурации.`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getPackageJson } from '@dxtmisha/scripts'

const packageJson = getPackageJson()
if (packageJson) {
  console.log(\`Package Name: \${packageJson.name}\`)
}

const customPackageJson = getPackageJson(['packages', 'functional'])
if (customPackageJson) {
  console.log(\`Custom Package Name: \${customPackageJson.name}\`)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};