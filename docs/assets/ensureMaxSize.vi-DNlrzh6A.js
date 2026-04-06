import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/ensureMaxSize - Thay đổi kích thước ảnh theo kích thước tối đa`}),`
`,(0,c.jsx)(n.h1,{id:`ensuremaxsize`,children:(0,c.jsx)(n.code,{children:`ensureMaxSize`})}),`
`,(0,c.jsx)(n.p,{children:`Đảm bảo rằng hình ảnh không vượt quá kích thước tối đa bằng cách thay đổi kích thước nếu cần thiết. Hàm trả về ảnh dưới dạng chuỗi Base64.`}),`
`,(0,c.jsx)(n.p,{children:`Hàm này hữu ích cho việc tối ưu hóa hình ảnh trước khi tải chúng lên máy chủ, giúp giảm việc sử dụng băng thông và yêu cầu lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file: Uint8Array`}),` — Tệp ảnh dưới dạng `,(0,c.jsx)(n.code,{children:`Uint8Array`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compress: number`}),` (không bắt buộc, mặc định: `,(0,c.jsx)(n.code,{children:`0.56`}),`) — Kích thước tối đa theo tỷ lệ với kích thước gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` (không bắt buộc, mặc định: `,(0,c.jsx)(n.code,{children:`'image/jpeg'`}),`) — Định dạng MIME cho ảnh đầu ra.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<string>`}),` — Trả về một promise được hoàn thành với chuỗi Base64 của ảnh đã thay đổi kích thước.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ensureMaxSize } from '@dxtmisha/functional-basic'

async function processImage(u8array: Uint8Array) {
  const base64 = await ensureMaxSize(u8array, 0.8, 'image/webp')
  console.log(base64) // 'data:image/webp;base64,...'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};