import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Composables/useAi - Получение экземпляра AI`}),`
`,(0,c.jsx)(n.h1,{id:`useai`,children:(0,c.jsx)(n.code,{children:`useAi`})}),`
`,(0,c.jsx)(n.p,{children:`Композабл для получения экземпляра AI на основе текущей конфигурации.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`AiAbstract | undefined`}),` — экземпляр класса AI (например, `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` или `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),`) в зависимости от настроенного типа AI, или `,(0,c.jsx)(n.code,{children:`undefined`}),`, если тип не распознан или не настроен.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[`Композабл считывает тип AI из `,(0,c.jsx)(n.code,{children:`PropertiesConfig.getAiType()`}),` и возвращает новый экземпляр соответствующего класса:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'gemini'`}),` возвращает новый экземпляр `,(0,c.jsx)(n.code,{children:`AiGoogle`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'gemini-cli'`}),` возвращает новый экземпляр `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Другие типы возвращают `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Использование экземпляра AI
  const response = await ai.generate('Привет, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};