import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional/Composables/useSessionRef - Управление сессией хранения"}),`
`,e.jsx(n.h1,{id:"usesessionref",children:e.jsx(n.code,{children:"useSessionRef"})}),`
`,e.jsxs(n.p,{children:["Composable для управления реактивными данными в ",e.jsx(n.code,{children:"sessionStorage"}),". Использует паттерн singleton — элементы с одинаковым именем разделяют одно и то же реактивное состояние."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — название ключа в ",e.jsx(n.code,{children:"sessionStorage"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию, если в хранилище ничего не найдено."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ref<T | undefined>"})," — реактивная ссылка на значение в сессии хранения."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useSessionRef } from '@dxtmisha/functional'

const userSession = useSessionRef('user-data', { loggedIn: false })

// Изменение значения автоматически обновляет sessionStorage
userSession.value.loggedIn = true
`})})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{a as default};
