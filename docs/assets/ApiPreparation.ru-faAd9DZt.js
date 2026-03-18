import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/ApiPreparation - Подготовка API запросов"}),`
`,n.jsx(e.h1,{id:"класс-apipreparation",children:"Класс ApiPreparation"}),`
`,n.jsxs(e.p,{children:["Класс, специально разработанный для обработки задач и побочных эффектов непосредственно до и после выполнения API-запроса. Представляет собой хуки (",n.jsx(e.code,{children:"callback"})," и ",n.jsx(e.code,{children:"callbackEnd"}),") для перехвата запросов, выполнения манипуляций или запуска глобальной логики, такой как индикаторы загрузки."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выполнение перед запросом"})," — хук в жизненном цикле API непосредственно перед фактическим вызовом ",n.jsx(e.code,{children:"fetch"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Анализ после запроса"})," — выполнение логики сразу после завершения запроса с доступом к объекту ",n.jsx(e.code,{children:"Response"})," и конфигурации исходного запроса."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Контроль параллелизма"})," — гарантирует корректное разрешение перекрывающихся хуков без конфликтов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Внедрение данных"})," — хуки после запроса могут возвращать данные или флаг ",n.jsx(e.code,{children:"reset"}),", которые могут повлиять на общую обработку ответа API."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"ApiPreparation()"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ApiPreparation } from '@dxtmisha/functional'

// 1. Простая инициализация
const preparation = new ApiPreparation()

// 2. Установка колбэка перед запросом
preparation.set(async (apiFetch) => {
  console.log('Подготовка запроса к:', apiFetch.path)
})

// 3. Установка колбэка после запроса
preparation.setEnd(async (query, apiFetch) => {
  console.log('Запрос завершен со статусом:', query.status)
  return { reset: false }
})
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(active: boolean, apiFetch: ApiFetch): Promise<void>"})," — Выполняет логику подготовки перед выполнением запроса."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>"})," — Выполняет анализ после завершения запроса."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"set(callback: (apiFetch: ApiFetch) => Promise<void>): this"})," — Устанавливает колбэк, который запускается перед запросом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this"})," — Устанавливает колбэк, который запускается после завершения запроса."]}),`
`]})]})}function p(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
