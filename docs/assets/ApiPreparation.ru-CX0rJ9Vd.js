import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ApiPreparation - Подготовка API запросов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apipreparation`,children:`Класс ApiPreparation`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс, специально разработанный для обработки задач и побочных эффектов непосредственно до и после выполнения API-запроса. Представляет собой хуки (`,(0,c.jsx)(n.code,{children:`callback`}),` и `,(0,c.jsx)(n.code,{children:`callbackEnd`}),`) для перехвата запросов, выполнения манипуляций или запуска глобальной логики, такой как индикаторы загрузки.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Выполнение перед запросом`}),` — хук в жизненном цикле API непосредственно перед фактическим вызовом `,(0,c.jsx)(n.code,{children:`fetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Анализ после запроса`}),` — выполнение логики сразу после завершения запроса с доступом к объекту `,(0,c.jsx)(n.code,{children:`Response`}),` и конфигурации исходного запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контроль параллелизма`}),` — гарантирует корректное разрешение перекрывающихся хуков без конфликтов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Внедрение данных`}),` — хуки после запроса могут возвращать данные или флаг `,(0,c.jsx)(n.code,{children:`reset`}),`, которые могут повлиять на общую обработку ответа API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`ApiPreparation()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiPreparation } from '@dxtmisha/functional'

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
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(active: boolean, apiFetch: ApiFetch): Promise<void>`}),` — Выполняет логику подготовки перед выполнением запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>`}),` — Выполняет анализ после завершения запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Устанавливает колбэк, который запускается перед запросом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Устанавливает колбэк, который запускается после завершения запроса.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};