import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/scripts/Composables/useAi - Получение экземпляра AI"}),`
`,e.jsx(n.h1,{id:"useai",children:e.jsx(n.code,{children:"useAi"})}),`
`,e.jsx(n.p,{children:"Композабл для получения экземпляра AI на основе текущей конфигурации."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"AiAbstract | undefined"})," — экземпляр класса AI (например, ",e.jsx(n.code,{children:"AiGoogle"})," или ",e.jsx(n.code,{children:"AiGoogleCli"}),") в зависимости от настроенного типа AI, или ",e.jsx(n.code,{children:"undefined"}),", если тип не распознан или не настроен."]}),`
`,e.jsx(n.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,e.jsxs(n.p,{children:["Композабл считывает тип AI из ",e.jsx(n.code,{children:"PropertiesConfig.getAiType()"})," и возвращает новый экземпляр соответствующего класса:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'gemini'"})," возвращает новый экземпляр ",e.jsx(n.code,{children:"AiGoogle"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'gemini-cli'"})," возвращает новый экземпляр ",e.jsx(n.code,{children:"AiGoogleCli"}),"."]}),`
`,e.jsxs(n.li,{children:["Другие типы возвращают ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример",children:"Пример"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Использование экземпляра AI
  const response = await ai.generate('Привет, AI!')
  console.log(response)
}
`})})]})}function j(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
