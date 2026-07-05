import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Composables/useQueryRef - Работа с Query`}),`
`,(0,c.jsx)(n.h1,{id:`usequeryref`,children:(0,c.jsx)(n.code,{children:`useQueryRef`})}),`
`,(0,c.jsx)(n.p,{children:`Composable для работы с query-параметрами URL (GET-параметры). Позволяет создавать реактивные переменные, которые автоматически синхронизируются с определенным ключом в строке запроса.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название ключа в query-параметрах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — Значение по умолчанию, если ключ отсутствует в query-параметрах.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Возвращает (`,(0,c.jsx)(n.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Реактивную ссылку на значение в query-параметрах.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useQueryRef } from '@dxtmisha/functional'

// Создание ссылки на значение 'step' в query-параметрах URL
const step = useQueryRef('step', '1')

// Обновление значения (автоматически обновляет URL: ?step=2)
step.value = '2'

// При изменении query-параметра пользователем вручную или через историю браузера,
// значение step.value обновится автоматически.
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};