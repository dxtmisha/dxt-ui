import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/ScrollbarWidth - Độ rộng thanh cuộn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-scrollbarwidth`,children:`Lớp ScrollbarWidth`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp tĩnh để đo độ rộng thanh cuộn của trình duyệt một cách bất đồng bộ. Kết quả được lưu vào `,(0,c.jsx)(t.code,{children:`DataStorage`}),` và chỉ tính lại một lần mỗi phiên.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm`}),` — độ rộng chỉ được đo một lần, sau đó đọc từ bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đo bất đồng bộ`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` để có kết quả chính xác sau khi vẽ lại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát hiện thanh cuộn phủ`}),` — `,(0,c.jsx)(t.code,{children:`is()`}),` kiểm tra xem thanh cuộn có phải "overlay" không (rộng ≤ 8px), điển hình cho macOS và trình duyệt di động.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này là `,(0,c.jsx)(t.strong,{children:`tĩnh (static)`}),`. Các phương thức có thể được gọi trực tiếp mà không cần tạo instance của đối tượng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm (Caching)`}),` — dữ liệu được lưu trong `,(0,c.jsx)(t.code,{children:`DataStorage`}),` và không được tính toán lại trong các lần gọi tiếp theo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính kiên định (Persistence)`}),` — giá trị được bảo toàn qua các lần tải lại trang (session storage).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Gọi phương thức tĩnh
const width = await ScrollbarWidth.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): Promise<number>`}),` — độ rộng thanh cuộn tính bằng pixel. Lần đầu tiên đo qua phần tử DOM tạm thời.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): Promise<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu thanh cuộn là overlay (rộng ≤ 8px, macOS / di động).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — không cần bù đắp độ rộng
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};