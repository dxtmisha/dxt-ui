import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/functional/Composables/useLoadingRef - Статус загрузки"}),`
`,n.jsx(e.h1,{id:"useloadingref",children:n.jsx(e.code,{children:"useLoadingRef"})}),`
`,n.jsx(e.p,{children:"Composable для получения глобального статуса загрузки."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Возвращает:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ShallowRef<boolean>"})," — реактивная ссылка на текущий статус загрузки."]}),`
`]}),`
`,n.jsx(e.h2,{id:"пример-использования",children:"Пример использования"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useLoadingRef } from '@dxtmisha/functional'

const isLoading = useLoadingRef()

// Используйте isLoading.value в вашем шаблоне или логике
`})})]})}function m(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{m as default};
