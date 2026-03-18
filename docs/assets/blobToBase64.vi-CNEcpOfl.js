import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/blobToBase64 - Chuyển đổi Blob thành Base64"}),`
`,n.jsx(i.h1,{id:"blobtobase64",children:n.jsx(i.code,{children:"blobToBase64"})}),`
`,n.jsxs(i.p,{children:["Hàm chuyển đổi bất đồng bộ các đối tượng ",n.jsx(i.code,{children:"Blob"})," hoặc ",n.jsx(i.code,{children:"File"})," thành chuỗi kiểu Base64 (Data URL)."]}),`
`,n.jsx(i.p,{children:"Điều này hữu ích khi chuẩn bị các tệp cục bộ (ví dụ: hình ảnh do người dùng tải lên) để xem trước trực tiếp trên trình duyệt hoặc gửi dạng chuỗi văn bản lên máy chủ."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"blob: Blob"})," — Đối tượng ",n.jsx(i.code,{children:"Blob"})," (hoặc ",n.jsx(i.code,{children:"File"}),") cần chuyển đổi."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"Promise<string | ArrayBuffer | null>"})," — Trả về một promise sẽ được hoàn thành với chuỗi Base64 (Data URL) hoặc bị từ chối với một lỗi nếu việc đọc tệp thất bại."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { blobToBase64 } from '@dxtmisha/functional-basic'

async function uploadFile(file: File) {
  try {
    const base64String = await blobToBase64(file)
    console.log(base64String) // 'data:image/png;base64,iVBORw0KGgo...'
  } catch (error) {
    console.error('Lỗi khi đọc tệp', error)
  }
}
`})})]})}function u(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(c,{...e})}):c(e)}export{u as default};
