import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/getClipboardData - Lấy dữ liệu từ khay nhớ tạm"}),`
`,n.jsx(t.h1,{id:"getclipboarddata",children:n.jsx(t.code,{children:"getClipboardData"})}),`
`,n.jsx(t.p,{children:"Trích xuất bất đồng bộ văn bản từ khay nhớ tạm (clipboard)."}),`
`,n.jsxs(t.p,{children:["Hàm này chủ yếu cố gắng lấy dữ liệu văn bản từ sự kiện ",n.jsx(t.code,{children:"ClipboardEvent"})," được cung cấp (ví dụ: khi xử lý sự kiện ",n.jsx(t.code,{children:"paste"}),"). Nếu sự kiện không được cung cấp hoặc không chứa dữ liệu, nó sẽ chuyển sang cách đọc trực tiếp từ khay nhớ tạm hệ thống bằng ",n.jsx(t.code,{children:"navigator.clipboard.readText()"}),"."]}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["Lưu ý: Việc sử dụng ",n.jsx(t.code,{children:"navigator.clipboard.readText()"})," yêu cầu ngữ cảnh an toàn (HTTPS) và có thể yêu cầu người dùng cấp quyền đọc khay nhớ tạm rõ ràng trong một số trình duyệt."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"event?: ClipboardEvent"})," — Sự kiện khay nhớ tạm (tùy chọn) phát sinh trong quá trình cắt, sao chép hoặc dán."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"Promise<string>"})," — Một promise hoạt động và giải quyết/trả về chuỗi nội dung của khay nhớ tạm, hoặc trả về một chuỗi rỗng nếu truy xuất thất bại."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getClipboardData } from '@dxtmisha/functional-basic'

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
`})})]})}function u(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{u as default};
