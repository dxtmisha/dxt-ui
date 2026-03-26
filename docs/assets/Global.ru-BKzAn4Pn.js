import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Global - Глобальные данные`}),`
`,(0,c.jsx)(n.h1,{id:`класс-global`,children:`Класс Global`}),`
`,(0,c.jsxs)(n.p,{children:[`Статический служебный класс для хранения и получения глобальных данных приложения. Данные записываются `,(0,c.jsx)(n.strong,{children:`один раз`}),` при инициализации и после этого доступны только для чтения. Используется для передачи конфигурации или серверных данных в клиентскую часть приложения.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Инициализация один раз`}),` — метод `,(0,c.jsx)(n.code,{children:`add`}),` работает только при первом вызове; повторные вызовы игнорируются.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глубокое копирование`}),` — данные копируются через `,(0,c.jsx)(n.code,{children:`copyObjectLite`}),`, изолируя их от внешних изменений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Без управления состоянием`}),` — предназначен исключительно для статической конфигурации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Статический доступ`}),` — все методы класса статические, что исключает необходимость создания экземпляров (`,(0,c.jsx)(n.code,{children:`new Global()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(n.p,{children:`Поскольку класс статический, его методы можно вызывать напрямую.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

// Устанавливается один раз (например, при загрузке приложения)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Получаем значение по ключу
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(data: Record<string, any>): void`}),` — Сохраняет глобальные данные. Работает `,(0,c.jsx)(n.strong,{children:`только при первом вызове`}),`. Последующие вызовы игнорируются.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<R>(name: string): R`}),` — Возвращает значение по ключу из сохраненных глобальных данных.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,(0,c.jsx)(n.h3,{id:`инициализация-при-старте-приложения`,children:`Инициализация при старте приложения`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// main.ts (выполняется один раз перед монтированием приложения)
Global.add(window.__SERVER_DATA__ ?? {})

// В любом другом месте кода
const serverId = Global.get('serverId')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};