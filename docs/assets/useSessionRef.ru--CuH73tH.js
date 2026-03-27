import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useSessionRef - Управление сессией хранения`}),`
`,(0,c.jsx)(n.h1,{id:`usesessionref`,children:(0,c.jsx)(n.code,{children:`useSessionRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable для управления реактивными данными в `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`. Использует паттерн singleton — элементы с одинаковым именем разделяют одно и то же реактивное состояние.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — название ключа в `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — значение по умолчанию, если в хранилище ничего не найдено.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Ref<T | undefined>`}),` — реактивная ссылка на значение в сессии хранения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSessionRef } from '@dxtmisha/functional'

const userSession = useSessionRef('user-data', { loggedIn: false })

// Изменение значения автоматически обновляет sessionStorage
userSession.value.loggedIn = true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};