import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(t){const s={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/functional/Functions/toBinds - Объединение нескольких объектов свойств"}),`
`,n.jsx(s.h1,{id:"tobinds",children:n.jsx(s.code,{children:"toBinds"})}),`
`,n.jsxs(s.p,{children:["Последовательно объединяет несколько объектов свойств с помощью ",n.jsx(s.code,{children:"toBind"}),". Эта функция полезна для объединения нескольких уровней свойств (например, значений по умолчанию, свойств компонентов и модификаторов состояния), гарантируя правильное объединение свойств ",n.jsx(s.code,{children:"class"})," и ",n.jsx(s.code,{children:"style"}),", а не их перезапись."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"...values: (ItemList | undefined)[]"})," — Список объектов свойств для объединения."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"}),`
`,n.jsx(s.code,{children:"ConstrBind<R>"})," — Конечный объединенный объект свойств."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { toBinds } from '@dxtmisha/functional'

const defaults = { class: 'btn', id: 'gen-id' }
const props = { class: 'btn--primary', title: 'Нажми меня' }
const state = { class: 'is-loading', style: { opacity: 0.5 } }

const finalBind = toBinds(defaults, props, state)
/* 
Результат: { 
  id: 'gen-id', 
  title: 'Нажми меня',
  class: [['btn', 'btn--primary'], 'is-loading'], 
  style: { opacity: 0.5 } 
}
*/
`})})]})}function x(t={}){const{wrapper:s}={...i(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(e,{...t})}):e(t)}export{x as default};
