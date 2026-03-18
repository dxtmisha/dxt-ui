import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/ru/functional/Composables/useBroadcastValueRef - Синхронизация данных между вкладками"}),`
`,e.jsx(n.h1,{id:"usebroadcastvalueref",children:e.jsx(n.code,{children:"useBroadcastValueRef"})}),`
`,e.jsxs(n.p,{children:["Composable для создания реактивной переменной, значение которой синхронизируется между всеми открытыми вкладками браузера в рамках одного домена. Использует ",e.jsx(n.code,{children:"BroadcastChannel"})," через класс ",e.jsx(n.code,{children:"BroadcastMessage"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — уникальное имя значения. Будет использовано для создания канала связи."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | string | (() => (T | string))"})," — значение по умолчанию. Может быть статичным или функцией."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ref<T | string | undefined>"})," — реактивная ссылка на значение. При изменении значения в одной вкладке, оно автоматически обновится во всех остальных."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Особенности:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Использует паттерн ",e.jsx(n.strong,{children:"Singleton"}),": при вызове с тем же именем ",e.jsx(n.code,{children:"name"})," в рамках одного приложения, вернется та же самая ссылка ",e.jsx(n.code,{children:"Ref"}),"."]}),`
`,e.jsxs(n.li,{children:["Автоматически оборачивает имя в префикс ",e.jsx(n.code,{children:"broadcast--"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useBroadcastValueRef } from '@dxtmisha/functional'

// Вкладка 1
const userStatus = useBroadcastValueRef('user-status', 'offline')
userStatus.value = 'online'

// Вкладка 2 (тот же домен)
const userStatus = useBroadcastValueRef('user-status', 'offline')
// userStatus.value автоматически станет 'online'
`})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
