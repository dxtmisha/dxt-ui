import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/sleep - Tạm dừng thực thi`}),`
`,(0,c.jsx)(t.h1,{id:`sleep`,children:(0,c.jsx)(t.code,{children:`sleep`})}),`
`,(0,c.jsx)(t.p,{children:`Tạm dừng thực thi trong một số mili giây nhất định.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ms: number`}),` — Số mili giây để tạm dừng thực thi.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<void>`}),` — Một promise sẽ giải quyết sau khoảng thời gian chờ đã chỉ định.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sleep } from '@dxtmisha/functional-basic'

async function performTask() {
  console.log('Bắt đầu công việc')
  // Đợi 2 giây
  await sleep(2000)
  console.log('Công việc tiếp tục sau 2 giây')
}

performTask()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};