import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/ApiHeaders - Заголовки API-запросов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-apiheaders`,children:`Класс ApiHeaders`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для управления и слияния заголовков HTTP-запросов. Он обрабатывает заголовки по умолчанию, пользовательские заголовки для конкретных запросов и автоматическое назначение `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Заголовки по умолчанию`}),` — установите глобальные заголовки, такие как `,(0,c.jsx)(n.code,{children:`Authorization`}),` или `,(0,c.jsx)(n.code,{children:`X-App-Version`}),`, один раз.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамический Content-Type`}),` — автоматически управляет заголовком `,(0,c.jsx)(n.code,{children:`Content-Type`}),` (по умолчанию `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасное слияние`}),` — объединяет несколько источников заголовков без изменения исходных объектов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Валидация ввода`}),` — гарантирует, что для заголовков используются только допустимые объекты.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для инициализации объекта вызовите конструктор `,(0,c.jsx)(n.code,{children:`ApiHeaders()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiHeaders } from '@dxtmisha/functional'

// 1. Простая инициализация
const apiHeaders = new ApiHeaders()

// 2. Установка заголовков по умолчанию
apiHeaders.set({ 'X-App-Platform': 'web' })

// 3. Получение заголовков для запроса
const headers = apiHeaders.get({ 'Authorization': 'Bearer token123' })
// Результат: { 'X-App-Platform': 'web', 'Authorization': 'Bearer token123', 'Content-Type': 'application/json;charset=UTF-8' }
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined`}),` — Объединяет заголовки по умолчанию с пользовательскими и добавляет `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(headers: Record<string, string>): this`}),` — Устанавливает или обновляет заголовки по умолчанию.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};