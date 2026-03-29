import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Composables/useBroadcastValueRef - Синхронизация данных между вкладками`}),`
`,(0,c.jsx)(n.h1,{id:`usebroadcastvalueref`,children:(0,c.jsx)(n.code,{children:`useBroadcastValueRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable для создания реактивной переменной, значение которой синхронизируется между всеми открытыми вкладками браузера в рамках одного домена. Использует `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` через класс `,(0,c.jsx)(n.code,{children:`BroadcastMessage`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — уникальное имя значения. Будет использовано для создания канала связи.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — значение по умолчанию. Может быть статичным или функцией.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Возвращает:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Ref<T | string | undefined>`}),` — реактивная ссылка на значение. При изменении значения в одной вкладке, оно автоматически обновится во всех остальных.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Использует паттерн `,(0,c.jsx)(n.strong,{children:`Singleton`}),`: при вызове с тем же именем `,(0,c.jsx)(n.code,{children:`name`}),` в рамках одного приложения, вернется та же самая ссылка `,(0,c.jsx)(n.code,{children:`Ref`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Автоматически оборачивает имя в префикс `,(0,c.jsx)(n.code,{children:`broadcast--`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Вкладка 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Вкладка 2 (тот же домен)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value автоматически станет 'online'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};