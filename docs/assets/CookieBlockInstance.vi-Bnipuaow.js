import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/CookieBlockInstance - Phiên bản trạng thái truy cập Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cookieblockinstance`,children:`Lớp CookieBlockInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`CookieBlockInstance`}),` chịu trách nhiệm quản lý trạng thái truy cập cookie ở cấp độ phiên bản (instance). Nó cung cấp một trạng thái cục bộ để chặn hoặc cho phép các thao tác cookie, điều này rất quan trọng để cách ly các yêu cầu trong Server-Side Rendering (SSR) hoặc khi cần nhiều ngữ cảnh độc lập.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bao gồm tích hợp chặt chẽ với `,(0,c.jsx)(n.code,{children:`DataStorage`}),` để lưu trữ trạng thái chặn đáng tin cậy.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dựa trên phiên bản (Instance-Based)`}),` — cho phép tạo các phiên bản riêng biệt với trạng thái chặn của riêng chúng`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp DataStorage`}),` — tự động lưu trữ trạng thái chặn bằng cách sử dụng lớp `,(0,c.jsx)(n.code,{children:`DataStorage`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tương thích với SSR`}),` — được thiết kế để hoạt động trơn tru trong môi trường phía máy chủ bằng cách tận dụng mô hình singleton-mỗi-yêu-cầu khi được bao bọc bởi `,(0,c.jsx)(n.code,{children:`CookieBlock`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Cập nhật trạng thái truy cập cookie. Khi đặt thành `,(0,c.jsx)(n.code,{children:`true`}),`, chặn tất cả hoạt động ghi cookie trong ngữ cảnh của phiên bản này.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: boolean`}),` — trạng thái mới cần thiết lập`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): boolean`}),` — Trả về trạng thái truy cập cookie hiện tại. `,(0,c.jsx)(n.code,{children:`true`}),` nếu cookie bị chặn, `,(0,c.jsx)(n.code,{children:`false`}),` nếu ngược lại`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsxs)(n.p,{children:[`Mặc dù `,(0,c.jsx)(n.code,{children:`CookieBlockInstance`}),` có thể được sử dụng trực tiếp, nhưng thông thường nó được truy cập thông qua lớp bọc tĩnh `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`. Tuy nhiên, đối với logic chuyên biệt, bạn có thể khởi tạo nó theo cách thủ công:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

const cookieBlock = new CookieBlockInstance()

// Lấy trạng thái hiện tại
console.log(cookieBlock.get()) // false (mặc định)

// Đặt trạng thái thành bị chặn
cookieBlock.set(true)

console.log(cookieBlock.get()) // true
`})}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-trực-tiếp`,children:`Sử dụng trực tiếp`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

const cookieBlock = new CookieBlockInstance()

// Lấy trạng thái hiện tại
console.log(cookieBlock.get()) // false (mặc định)

// Đặt trạng thái thành bị chặn
cookieBlock.set(true)

console.log(cookieBlock.get()) // true

// Mở chặn
cookieBlock.set(false)

console.log(cookieBlock.get()) // false
`})}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-qua-cookieblock`,children:`Sử dụng qua CookieBlock`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieBlock } from '@dxtmisha/functional-basic'

// CookieBlock tự động tạo phiên bản cách ly cho mỗi yêu cầu
CookieBlock.set(true)

// Trạng thái có thể truy cập qua các phương thức tĩnh
if (CookieBlock.get()) {
  console.log('Cookies bị chặn trong ngữ cảnh hiện tại')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`ngữ-cảnh-độc-lập`,children:`Ngữ cảnh độc lập`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieBlockInstance } from '@dxtmisha/functional-basic'

// Tạo các phiên bản độc lập
const block1 = new CookieBlockInstance()
const block2 = new CookieBlockInstance()

block1.set(true)

console.log(block1.get()) // true
console.log(block2.get()) // false (phiên bản độc lập)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};