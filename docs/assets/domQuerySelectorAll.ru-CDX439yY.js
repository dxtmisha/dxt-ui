import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(s){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/ru/functional-basic/Functions/domQuerySelectorAll - Выбор элементов в DOM"}),`
`,e.jsx(n.h1,{id:"domqueryselectorall",children:e.jsx(n.code,{children:"domQuerySelectorAll"})}),`
`,e.jsxs(n.p,{children:["Ищет и возвращает список всех HTML-элементов, соответствующих указанным CSS-селекторам. Возвращаемый результат представляет собой статический (не живой) ",e.jsx(n.code,{children:"NodeList"}),"."]}),`
`,e.jsxs(n.p,{children:["Функция проверяет наличие браузерного (DOM) окружения посредством вызова ",e.jsx(n.code,{children:"isDomRuntime()"}),". На сервере или в среде без DOM возвращается ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — Строка, содержащая один или несколько селекторов для поиска."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"}),`
`,e.jsx(n.code,{children:"NodeListOf<E> | undefined"})," — Коллекцию найденных элементов (может быть пустой, если ничего не найдено), либо ",e.jsx(n.code,{children:"undefined"}),", если DOM недоступен."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Поиск всех элементов с определенным классом
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default};
