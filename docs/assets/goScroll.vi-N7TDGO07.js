import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/goScroll - Thay đổi cuộn nhanh`}),`
`,(0,c.jsx)(t.h1,{id:`goscroll`,children:(0,c.jsx)(t.code,{children:`goScroll`})}),`
`,(0,c.jsx)(t.p,{children:`Thay đổi nhanh vị trí cuộn tại phần tử đến phần tử yêu cầu.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selector: string`}),` — phần tử được chọn, vị trí cuộn của nó cần được thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementTo: HTMLElement | undefined`}),` — phần tử mà bạn cần cuộn đến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementCenter: HTMLElement`}),` — phần tử cần được căn giữa.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector('.container')
const target = document.querySelector('.target')

goScroll('.container', target)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};