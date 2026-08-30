import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/domContentLoaded - Thực thi callback khi DOMContentLoaded`}),`
`,(0,c.jsx)(t.h1,{id:`domcontentloaded`,children:(0,c.jsx)(t.code,{children:`domContentLoaded`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực thi một hàm callback khi sự kiện `,(0,c.jsx)(t.code,{children:`DOMContentLoaded`}),` được kích hoạt.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu DOM đã được tải xong (`,(0,c.jsx)(t.code,{children:`document.readyState`}),` là `,(0,c.jsx)(t.code,{children:`'interactive'`}),` hoặc `,(0,c.jsx)(t.code,{children:`'complete'`}),`) hoặc khi thực thi trong môi trường không có DOM (như SSR), hàm callback sẽ được thực thi ngay lập tức.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T | Promise<T>`}),` — Hàm callback được thực thi khi DOM được tải xong.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — Một promise giải quyết với kết quả trả về của hàm callback.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domContentLoaded } from '@dxtmisha/functional-basic'

// 1. Sử dụng cơ bản với hàm đồng bộ
domContentLoaded(() => {
  console.log('DOM đã sẵn sàng!')
  document.getElementById('app')?.classList.add('ready')
})

// 2. Chờ kết quả của hàm bất đồng bộ
const data = await domContentLoaded(async () => {
  const element = document.querySelector('#content')
  return element?.textContent
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};