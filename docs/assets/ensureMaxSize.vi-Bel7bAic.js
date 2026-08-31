import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/ensureMaxSize - Thay đổi kích thước ảnh theo kích thước tối đa`}),`
`,(0,c.jsx)(t.h1,{id:`ensuremaxsize`,children:(0,c.jsx)(t.code,{children:`ensureMaxSize`})}),`
`,(0,c.jsx)(t.p,{children:`Đảm bảo rằng hình ảnh không vượt quá kích thước tối đa bằng cách thay đổi kích thước nếu cần thiết. Hàm trả về ảnh dưới dạng chuỗi Base64.`}),`
`,(0,c.jsx)(t.p,{children:`Hàm này hữu ích cho việc tối ưu hóa hình ảnh trước khi tải chúng lên máy chủ, giúp giảm việc sử dụng băng thông và yêu cầu lưu trữ.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: Uint8Array`}),` — Tệp ảnh dưới dạng `,(0,c.jsx)(t.code,{children:`Uint8Array`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compress: number`}),` (không bắt buộc, mặc định: `,(0,c.jsx)(t.code,{children:`0.56`}),`) — Kích thước tối đa theo tỷ lệ với kích thước gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` (không bắt buộc, mặc định: `,(0,c.jsx)(t.code,{children:`'image/jpeg'`}),`) — Định dạng MIME cho ảnh đầu ra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<string>`}),` — Trả về một promise được hoàn thành với chuỗi Base64 của ảnh đã thay đổi kích thước.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ensureMaxSize } from '@dxtmisha/functional-basic'

async function processImage(u8array: Uint8Array) {
  const base64 = await ensureMaxSize(u8array, 0.8, 'image/webp')
  console.log(base64) // 'data:image/webp;base64,...'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};