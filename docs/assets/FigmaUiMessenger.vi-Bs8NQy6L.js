import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma/Classes/FigmaUiMessenger - Trình nhắn tin UI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-figmauimessenger`,children:`Lớp FigmaUiMessenger`}),`
`,(0,c.jsxs)(t.p,{children:[`Trình nhắn tin cho phía UI Figma (frontend). Nó xử lý việc gửi tin nhắn đến plugin Figma và lắng nghe tin nhắn từ plugin bằng API `,(0,c.jsx)(t.code,{children:`postMessage`}),` của trình duyệt.`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Kế thừa từ `,(0,c.jsx)(t.code,{children:`FigmaPostAbstract`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaUiMessenger } from '@dxtmisha/figma'

const messenger = new FigmaUiMessenger()
  .make()
  .add('plugin-update', (data) => console.log('Plugin:', data))
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-công-khai`,children:`Các phương thức công khai`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo trình lắng nghe tin nhắn bằng sự kiện `,(0,c.jsx)(t.code,{children:`message`}),` của đối tượng `,(0,c.jsx)(t.code,{children:`window`}),`. Nên được gọi một lần để bắt đầu nhận tin nhắn từ plugin (backend).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`add`,children:(0,c.jsx)(t.code,{children:`add`})}),`
`,(0,c.jsx)(t.p,{children:`Đăng ký một trình lắng nghe cho một loại tin nhắn cụ thể đến từ plugin (backend).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Mã định danh duy nhất cho loại tin nhắn cần lắng nghe.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (message: Message) => void`}),` — hàm sẽ thực thi khi có một tin nhắn phù hợp đến từ plugin.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.add('selection-changed', (data) => {
  renderSidebar(data.nodes)
})
`})}),`
`,(0,c.jsx)(t.h3,{id:`post`,children:(0,c.jsx)(t.code,{children:`post`})}),`
`,(0,c.jsx)(t.p,{children:`Gửi một tin nhắn đến phía backend của plugin Figma.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Mã định danh của tin nhắn (loại).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message: Message`}),` — (Tùy chọn) Dữ liệu payload để gửi đến plugin.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.post('create-rectangles', { count: 5, color: '#FF0000' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};