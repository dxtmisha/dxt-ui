import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Functions/setRef - Обновление значения`}),`
`,(0,c.jsx)(t.h1,{id:`setref`,children:(0,c.jsx)(t.code,{children:`setRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Утилитарная функция, которая обновляет значение реактивной переменной `,(0,c.jsx)(t.code,{children:`Ref`}),`. Она включает встроенную проверку, гарантирующую, что обновление происходит только в том случае, если новое значение отличается от текущего, что предотвращает лишние срабатывания реактивности.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<T>`}),` — Реактивный элемент (`,(0,c.jsx)(t.code,{children:`Ref`}),`) для обновления.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Новое значение для присвоения `,(0,c.jsx)(t.code,{children:`Ref`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { setRef } from '@dxtmisha/functional'

const status = ref('idle')

// Обновляет значение на 'loading'
setRef(status, 'loading')

// Этот вызов будет проигнорирован, так как значение уже 'loading'
setRef(status, 'loading')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};