import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getClipboardData - Lấy dữ liệu từ khay nhớ tạm`}),`
`,(0,c.jsx)(t.h1,{id:`getclipboarddata`,children:(0,c.jsx)(t.code,{children:`getClipboardData`})}),`
`,(0,c.jsx)(t.p,{children:`Trích xuất bất đồng bộ văn bản từ khay nhớ tạm (clipboard).`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này chủ yếu cố gắng lấy dữ liệu văn bản từ sự kiện `,(0,c.jsx)(t.code,{children:`ClipboardEvent`}),` được cung cấp (ví dụ: khi xử lý sự kiện `,(0,c.jsx)(t.code,{children:`paste`}),`). Nếu sự kiện không được cung cấp hoặc không chứa dữ liệu, nó sẽ chuyển sang cách đọc trực tiếp từ khay nhớ tạm hệ thống bằng `,(0,c.jsx)(t.code,{children:`navigator.clipboard.readText()`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Lưu ý: Việc sử dụng `,(0,c.jsx)(t.code,{children:`navigator.clipboard.readText()`}),` yêu cầu ngữ cảnh an toàn (HTTPS) và có thể yêu cầu người dùng cấp quyền đọc khay nhớ tạm rõ ràng trong một số trình duyệt.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event?: ClipboardEvent`}),` — Sự kiện khay nhớ tạm (tùy chọn) phát sinh trong quá trình cắt, sao chép hoặc dán.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Một promise hoạt động và giải quyết/trả về chuỗi nội dung của khay nhớ tạm, hoặc trả về một chuỗi rỗng nếu truy xuất thất bại.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getClipboardData } from '@dxtmisha/functional-basic'

// Sử dụng trực tiếp
document.querySelector('#paste-btn')?.addEventListener('click', async () => {
  const text = await getClipboardData()
  console.log('Đoạn văn trong khay nhớ:', text)
})

// Sử dụng trong trình xử lý sự kiện 'paste'
document.addEventListener('paste', async (event) => {
  const text = await getClipboardData(event)
  console.log('Đoạn văn vừa dán:', text)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};