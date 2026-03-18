import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional/Composables/useHashRef - Работа с Hash"}),`
`,n.jsx(e.h1,{id:"usehashref",children:n.jsx(e.code,{children:"useHashRef"})}),`
`,n.jsxs(e.p,{children:["Composable для работы с хэшем URL (часть после ",n.jsx(e.code,{children:"#"}),"). Позволяет создавать реактивные переменные, которые автоматически синхронизируются с определенным ключом в хэше."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Название ключа в хэше."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"defaultValue?: T | (() => T)"})," — Значение по умолчанию, если ключ отсутствует в хэше."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Возвращает (",n.jsx(e.code,{children:"Ref<T>"}),"):"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Реактивную ссылку на значение в хэше."}),`
`]}),`
`,n.jsx(e.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useHashRef } from '@dxtmisha/functional'

// Создание ссылки на значение 'step' в хэше URL
const step = useHashRef('step', '1')

// Обновление значения (автоматически обновляет URL: #step=2)
step.value = '2'

// При изменении хэша пользователем вручную или через браузер, 
// значение step.value обновится автоматически.
`})})]})}function x(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
