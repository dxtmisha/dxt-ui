import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Functions/goScroll - Быстрое изменение скролла"}),`
`,n.jsx(e.h1,{id:"goscroll",children:n.jsx(e.code,{children:"goScroll"})}),`
`,n.jsx(e.p,{children:"Быстрое изменение скролла у элемента к нужному элементу."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selector: string"})," — выбранный элемент, положение скролла которого надо изменить."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementTo: HTMLElement | undefined"})," — элемент, до которого надо проскроллить."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementCenter: HTMLElement"})," — элемент, который надо центрировать."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector('.container')
const target = document.querySelector('.target')

goScroll('.container', target)
`})})]})}function x(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{x as default};
