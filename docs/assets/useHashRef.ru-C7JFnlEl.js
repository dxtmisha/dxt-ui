import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useHashRef - Работа с Hash`}),`
`,(0,c.jsx)(n.h1,{id:`usehashref`,children:(0,c.jsx)(n.code,{children:`useHashRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable для работы с хэшем URL (часть после `,(0,c.jsx)(n.code,{children:`#`}),`). Позволяет создавать реактивные переменные, которые автоматически синхронизируются с определенным ключом в хэше.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название ключа в хэше.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — Значение по умолчанию, если ключ отсутствует в хэше.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Возвращает (`,(0,c.jsx)(n.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Реактивную ссылку на значение в хэше.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useHashRef } from '@dxtmisha/functional'

// Создание ссылки на значение 'step' в хэше URL
const step = useHashRef('step', '1')

// Обновление значения (автоматически обновляет URL: #step=2)
step.value = '2'

// При изменении хэша пользователем вручную или через браузер, 
// значение step.value обновится автоматически.
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};