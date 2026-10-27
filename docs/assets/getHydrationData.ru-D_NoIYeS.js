import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Functions/getHydrationData - Извлечение данных гидратации из тега скрипта`}),`
`,(0,c.jsx)(t.h1,{id:`gethydrationdata`,children:(0,c.jsx)(t.code,{children:`getHydrationData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилита для извлечения и парсинга JSON-данных из тега `,(0,c.jsx)(t.code,{children:`<script>`}),` в DOM по его `,(0,c.jsx)(t.code,{children:`id`}),` (обычно сгенерированного на сервере с помощью `,(0,c.jsx)(t.code,{children:`getElementSafeScript`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`В браузерном окружении (`,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`) функция находит элемент `,(0,c.jsx)(t.code,{children:`<script>`}),` по `,(0,c.jsx)(t.code,{children:`id`}),`, парсит его `,(0,c.jsx)(t.code,{children:`textContent`}),` как JSON и опционально удаляет тег `,(0,c.jsx)(t.code,{children:`<script>`}),` из DOM (по умолчанию `,(0,c.jsx)(t.code,{children:`remove = true`}),`). Если элемент не найден, не является тегом `,(0,c.jsx)(t.code,{children:`<script>`}),`, функция вызвана в SSR-окружении или произошла ошибка парсинга JSON (которая регистрируется через `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` с `,(0,c.jsx)(t.code,{children:`group: 'hydration'`}),`, `,(0,c.jsx)(t.code,{children:`code: 'error'`}),`), функция безопасно возвращает `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Уникальный идентификатор (ID) тега скрипта.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue: T`}),` — Значение по умолчанию, если тег скрипта не найден или данные невалидны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove?: boolean`}),` — Удалять ли элемент скрипта из DOM после чтения (по умолчанию `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Распарсенные данные из тега скрипта или `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getHydrationData } from '@dxtmisha/functional-basic'

// В DOM присутствует:
// <script id="hydration-data" type="application/json">{"user":"Misha"}<\/script>

const data = getHydrationData('hydration-data', { user: 'Guest' })
console.log(data) // { user: 'Misha' }
// Тег <script id="hydration-data"> автоматически удаляется из DOM
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};