import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ScrollbarWidth - Độ rộng thanh cuộn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-scrollbarwidth`,children:`Lớp ScrollbarWidth`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp tĩnh để đo độ rộng thanh cuộn của trình duyệt một cách bất đồng bộ. Kết quả được lưu vào `,(0,c.jsx)(n.code,{children:`DataStorage`}),` và chỉ tính lại một lần mỗi phiên.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm`}),` — độ rộng chỉ được đo một lần, sau đó đọc từ bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đo bất đồng bộ`}),` — sử dụng `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` để có kết quả chính xác sau khi vẽ lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện thanh cuộn phủ`}),` — `,(0,c.jsx)(n.code,{children:`is()`}),` kiểm tra xem thanh cuộn có phải "overlay" không (rộng ≤ 8px), điển hình cho macOS và trình duyệt di động.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này là `,(0,c.jsx)(n.strong,{children:`tĩnh (static)`}),`. Các phương thức có thể được gọi trực tiếp mà không cần tạo instance của đối tượng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm (Caching)`}),` — dữ liệu được lưu trong `,(0,c.jsx)(n.code,{children:`DataStorage`}),` và không được tính toán lại trong các lần gọi tiếp theo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính kiên định (Persistence)`}),` — giá trị được bảo toàn qua các lần tải lại trang (session storage).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Gọi phương thức tĩnh
const width = await ScrollbarWidth.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): Promise<number>`}),` — độ rộng thanh cuộn tính bằng pixel. Lần đầu tiên đo qua phần tử DOM tạm thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): Promise<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu thanh cuộn là overlay (rộng ≤ 8px, macOS / di động).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — không cần bù đắp độ rộng
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};