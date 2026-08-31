import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Composables/useBroadcastValueRef - Синхронизация данных между вкладками`}),`
`,(0,c.jsx)(t.h1,{id:`usebroadcastvalueref`,children:(0,c.jsx)(t.code,{children:`useBroadcastValueRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable для создания реактивной переменной, значение которой синхронизируется между всеми открытыми вкладками браузера в рамках одного домена. Использует `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` через класс `,(0,c.jsx)(t.code,{children:`BroadcastMessage`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — уникальное имя значения. Будет использовано для создания канала связи.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — значение по умолчанию. Может быть статичным или функцией.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Ref<T | string | undefined>`}),` — реактивная ссылка на значение. При изменении значения в одной вкладке, оно автоматически обновится во всех остальных.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Использует паттерн `,(0,c.jsx)(t.strong,{children:`Singleton`}),`: при вызове с тем же именем `,(0,c.jsx)(t.code,{children:`name`}),` в рамках одного приложения, вернется та же самая ссылка `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Автоматически оборачивает имя в префикс `,(0,c.jsx)(t.code,{children:`broadcast--`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Вкладка 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Вкладка 2 (тот же домен)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value автоматически станет 'online'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};