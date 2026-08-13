import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isElementVisible - Kiểm tra xem phần tử có hiển thị không`}),`
`,(0,c.jsx)(t.h1,{id:`iselementvisible`,children:(0,c.jsx)(t.code,{children:`isElementVisible`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem một phần tử có hiển thị hay không (không bị ẩn bởi CSS và có trong DOM).
Một phần tử có thể nằm ngoài màn hình và vẫn được coi là hiển thị.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectors: ElementOrString<E>`}),` — bộ chọn để khớp hoặc một Element.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu phần tử có hiển thị, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isElementVisible } from '@dxtmisha/functional-basic'

const div = document.createElement('div')
document.body.appendChild(div)
console.log(isElementVisible(div)) // true

div.style.display = 'none'
console.log(isElementVisible(div)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};