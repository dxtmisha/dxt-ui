import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/ApiPreparation - Подготовка API запросов"}),`
`,e.jsx(n.h1,{id:"класс-apipreparation",children:"Класс ApiPreparation"}),`
`,e.jsxs(n.p,{children:["Класс, специально разработанный для обработки задач и побочных эффектов непосредственно до и после выполнения API-запроса. Представляет собой хуки (",e.jsx(n.code,{children:"callback"})," и ",e.jsx(n.code,{children:"callbackEnd"}),") для перехвата запросов, выполнения манипуляций или запуска глобальной логики, такой как индикаторы загрузки."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Выполнение перед запросом"})," — хук в жизненном цикле API непосредственно перед фактическим вызовом ",e.jsx(n.code,{children:"fetch"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Анализ после запроса"})," — выполнение логики сразу после завершения запроса с доступом к объекту ",e.jsx(n.code,{children:"Response"})," и конфигурации исходного запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Контроль параллелизма"})," — гарантирует корректное разрешение перекрывающихся хуков без конфликтов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Внедрение данных"})," — хуки после запроса могут возвращать данные или флаг ",e.jsx(n.code,{children:"reset"}),", которые могут повлиять на общую обработку ответа API."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ApiPreparation } from '@dxtmisha/functional'

const preparation = new ApiPreparation()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(active: boolean, apiFetch: ApiFetch): Promise<void>"})," — Выполняет логику подготовки перед выполнением запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>"})," — Выполняет анализ после завершения запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(callback: (apiFetch: ApiFetch) => Promise<void>): this"})," — Устанавливает колбэк, который запускается перед запросом."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this"})," — Устанавливает колбэк, который запускается после завершения запроса."]}),`
`]})]})}function p(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{p as default};
