import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/sleep - Tạm dừng thực thi`}),`
`,(0,c.jsx)(n.h1,{id:`sleep`,children:(0,c.jsx)(n.code,{children:`sleep`})}),`
`,(0,c.jsx)(n.p,{children:`Tạm dừng thực thi trong một số mili giây nhất định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ms: number`}),` — Số mili giây để tạm dừng thực thi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<void>`}),` — Một promise sẽ giải quyết sau khoảng thời gian chờ đã chỉ định.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { sleep } from '@dxtmisha/functional-basic'

async function performTask() {
  console.log('Bắt đầu công việc')
  // Đợi 2 giây
  await sleep(2000)
  console.log('Công việc tiếp tục sau 2 giây')
}

performTask()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};