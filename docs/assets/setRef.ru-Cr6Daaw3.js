import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional/Functions/setRef - Обновление значения"}),`
`,n.jsx(e.h1,{id:"setref",children:n.jsx(e.code,{children:"setRef"})}),`
`,n.jsxs(e.p,{children:["Утилитарная функция, которая обновляет значение реактивной переменной ",n.jsx(e.code,{children:"Ref"}),". Она включает встроенную проверку, гарантирующую, что обновление происходит только в том случае, если новое значение отличается от текущего, что предотвращает лишние срабатывания реактивности."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: Ref<T>"})," — Реактивный элемент (",n.jsx(e.code,{children:"Ref"}),") для обновления."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Новое значение для присвоения ",n.jsx(e.code,{children:"Ref"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"}),`
`,n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Обновляет значение на 'loading'
setRef(status, 'loading')

// Этот вызов будет проигнорирован, так как значение уже 'loading'
setRef(status, 'loading')
`})})]})}function h(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{h as default};
