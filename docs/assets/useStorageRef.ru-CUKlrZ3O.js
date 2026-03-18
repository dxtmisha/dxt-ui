import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/ru/functional/Composables/useStorageRef - Управление локальным хранилищем"}),`
`,e.jsx(n.h1,{id:"usestorageref",children:e.jsx(n.code,{children:"useStorageRef"})}),`
`,e.jsxs(n.p,{children:["Composable для управления реактивными данными в ",e.jsx(n.code,{children:"localStorage"})," с автоматической синхронизацией между разными вкладками/окнами. Использует паттерн singleton."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — название ключа в ",e.jsx(n.code,{children:"localStorage"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию, если в хранилище ничего не найдено."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache?: number"})," — время кэширования в секундах."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Возвращает:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ref<T | undefined>"})," — реактивная ссылка на значение в локальном хранилище."]}),`
`]}),`
`,e.jsx(n.h2,{id:"пример-использования",children:"Пример использования"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { useStorageRef } from '@dxtmisha/functional'

const settings = useStorageRef('app-settings', { theme: 'dark' })

// Обновления здесь синхронизируются с localStorage и другими открытыми вкладками
settings.value.theme = 'light'
`})})]})}function x(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
