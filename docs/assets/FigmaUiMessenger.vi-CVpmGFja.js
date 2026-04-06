import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma/Classes/FigmaUiMessenger - Trình nhắn tin UI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmauimessenger`,children:`Lớp FigmaUiMessenger`}),`
`,(0,c.jsxs)(n.p,{children:[`Trình nhắn tin cho phía UI Figma (frontend). Nó xử lý việc gửi tin nhắn đến plugin Figma và lắng nghe tin nhắn từ plugin bằng API `,(0,c.jsx)(n.code,{children:`postMessage`}),` của trình duyệt.`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Kế thừa từ `,(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaUiMessenger } from '@dxtmisha/figma'

const messenger = new FigmaUiMessenger()
  .make()
  .add('plugin-update', (data) => console.log('Plugin:', data))
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-công-khai`,children:`Các phương thức công khai`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo trình lắng nghe tin nhắn bằng sự kiện `,(0,c.jsx)(n.code,{children:`message`}),` của đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`. Nên được gọi một lần để bắt đầu nhận tin nhắn từ plugin (backend).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Đăng ký một trình lắng nghe cho một loại tin nhắn cụ thể đến từ plugin (backend).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh duy nhất cho loại tin nhắn cần lắng nghe.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (message: Message) => void`}),` — hàm sẽ thực thi khi có một tin nhắn phù hợp đến từ plugin.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.add('selection-changed', (data) => {
  renderSidebar(data.nodes)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsx)(n.p,{children:`Gửi một tin nhắn đến phía backend của plugin Figma.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh của tin nhắn (loại).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — (Tùy chọn) Dữ liệu payload để gửi đến plugin.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.post('create-rectangles', { count: 5, color: '#FF0000' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};