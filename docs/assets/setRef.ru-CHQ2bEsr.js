import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Functions/setRef - Обновление значения`}),`
`,(0,c.jsx)(n.h1,{id:`setref`,children:(0,c.jsx)(n.code,{children:`setRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Утилитарная функция, которая обновляет значение реактивной переменной `,(0,c.jsx)(n.code,{children:`Ref`}),`. Она включает встроенную проверку, гарантирующую, что обновление происходит только в том случае, если новое значение отличается от текущего, что предотвращает лишние срабатывания реактивности.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T>`}),` — Реактивный элемент (`,(0,c.jsx)(n.code,{children:`Ref`}),`) для обновления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Новое значение для присвоения `,(0,c.jsx)(n.code,{children:`Ref`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Обновляет значение на 'loading'
setRef(status, 'loading')

// Этот вызов будет проигнорирован, так как значение уже 'loading'
setRef(status, 'loading')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};