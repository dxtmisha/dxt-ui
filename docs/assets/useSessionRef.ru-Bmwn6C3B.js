import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useSessionRef - Управление сессией хранения`}),`
`,(0,c.jsx)(t.h1,{id:`usesessionref`,children:(0,c.jsx)(t.code,{children:`useSessionRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для управления реактивными данными в `,(0,c.jsx)(t.code,{children:`sessionStorage`}),`. Использует паттерн singleton — элементы с одинаковым именем разделяют одно и то же реактивное состояние.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — название ключа в `,(0,c.jsx)(t.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | (() => T)`}),` — значение по умолчанию, если в хранилище ничего не найдено.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Ref<T | undefined>`}),` — реактивная ссылка на значение в сессии хранения.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSessionRef } from '@dxtmisha/functional'

const userSession = useSessionRef('user-data', { loggedIn: false })

// Изменение значения автоматически обновляет sessionStorage
userSession.value.loggedIn = true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};