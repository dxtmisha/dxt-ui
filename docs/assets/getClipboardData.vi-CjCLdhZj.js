import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getClipboardData - Lấy dữ liệu từ khay nhớ tạm`}),`
`,(0,c.jsx)(n.h1,{id:`getclipboarddata`,children:(0,c.jsx)(n.code,{children:`getClipboardData`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất bất đồng bộ văn bản từ khay nhớ tạm (clipboard).`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này chủ yếu cố gắng lấy dữ liệu văn bản từ sự kiện `,(0,c.jsx)(n.code,{children:`ClipboardEvent`}),` được cung cấp (ví dụ: khi xử lý sự kiện `,(0,c.jsx)(n.code,{children:`paste`}),`). Nếu sự kiện không được cung cấp hoặc không chứa dữ liệu, nó sẽ chuyển sang cách đọc trực tiếp từ khay nhớ tạm hệ thống bằng `,(0,c.jsx)(n.code,{children:`navigator.clipboard.readText()`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Lưu ý: Việc sử dụng `,(0,c.jsx)(n.code,{children:`navigator.clipboard.readText()`}),` yêu cầu ngữ cảnh an toàn (HTTPS) và có thể yêu cầu người dùng cấp quyền đọc khay nhớ tạm rõ ràng trong một số trình duyệt.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event?: ClipboardEvent`}),` — Sự kiện khay nhớ tạm (tùy chọn) phát sinh trong quá trình cắt, sao chép hoặc dán.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string>`}),` — Một promise hoạt động và giải quyết/trả về chuỗi nội dung của khay nhớ tạm, hoặc trả về một chuỗi rỗng nếu truy xuất thất bại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getClipboardData } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};