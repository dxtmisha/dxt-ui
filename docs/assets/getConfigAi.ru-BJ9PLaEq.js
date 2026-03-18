import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/scripts/Functions/getConfigAi - Получение конфигурации ИИ"}),`
`,n.jsx(e.h1,{id:"getconfigai",children:n.jsx(e.code,{children:"getConfigAi"})}),`
`,n.jsx(e.p,{children:"Функция возвращает конфигурацию ИИ, включая API ключ и модель."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"[string, string]"})," — кортеж с API ключом и названием модели."]}),`
`,n.jsx(e.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,n.jsxs(e.p,{children:["Функция извлекает значения конфигурации из класса ",n.jsx(e.code,{children:"PropertiesConfig"}),", который управляет настройками уровня проекта."]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:"import { getConfigAi } from '@dxtmisha/scripts'\n\nconst [apiKey, model] = getConfigAi()\nconsole.log(`API Key: ${apiKey}, Model: ${model}`)\n"})})]})}function m(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
