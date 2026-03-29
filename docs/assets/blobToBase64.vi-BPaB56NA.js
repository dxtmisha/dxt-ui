import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/blobToBase64 - Chuyển đổi Blob thành Base64`}),`
`,(0,c.jsx)(n.h1,{id:`blobtobase64`,children:(0,c.jsx)(n.code,{children:`blobToBase64`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm chuyển đổi bất đồng bộ các đối tượng `,(0,c.jsx)(n.code,{children:`Blob`}),` hoặc `,(0,c.jsx)(n.code,{children:`File`}),` thành chuỗi kiểu Base64 (Data URL).`]}),`
`,(0,c.jsx)(n.p,{children:`Điều này hữu ích khi chuẩn bị các tệp cục bộ (ví dụ: hình ảnh do người dùng tải lên) để xem trước trực tiếp trên trình duyệt hoặc gửi dạng chuỗi văn bản lên máy chủ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`blob: Blob`}),` — Đối tượng `,(0,c.jsx)(n.code,{children:`Blob`}),` (hoặc `,(0,c.jsx)(n.code,{children:`File`}),`) cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string | ArrayBuffer | null>`}),` — Trả về một promise sẽ được hoàn thành với chuỗi Base64 (Data URL) hoặc bị từ chối với một lỗi nếu việc đọc tệp thất bại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { blobToBase64 } from '@dxtmisha/functional-basic'

async function uploadFile(file: File) {
  try {
    const base64String = await blobToBase64(file)
    console.log(base64String) // 'data:image/png;base64,iVBORw0KGgo...'
  } catch (error) {
    console.error('Lỗi khi đọc tệp', error)
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};