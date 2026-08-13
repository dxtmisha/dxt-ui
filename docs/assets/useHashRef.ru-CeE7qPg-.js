import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useHashRef - Работа с Hash`}),`
`,(0,c.jsx)(t.h1,{id:`usehashref`,children:(0,c.jsx)(t.code,{children:`useHashRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для работы с хэшем URL (часть после `,(0,c.jsx)(t.code,{children:`#`}),`). Позволяет создавать реактивные переменные, которые автоматически синхронизируются с определенным ключом в хэше.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Название ключа в хэше.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | (() => T)`}),` — Значение по умолчанию, если ключ отсутствует в хэше.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Возвращает (`,(0,c.jsx)(t.code,{children:`Ref<T>`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Реактивную ссылку на значение в хэше.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useHashRef } from '@dxtmisha/functional'

// Создание ссылки на значение 'step' в хэше URL
const step = useHashRef('step', '1')

// Обновление значения (автоматически обновляет URL: #step=2)
step.value = '2'

// При изменении хэша пользователем вручную или через браузер, 
// значение step.value обновится автоматически.
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};