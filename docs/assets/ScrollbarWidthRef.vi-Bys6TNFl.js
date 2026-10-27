import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/ScrollbarWidthRef - Chiều rộng thanh cuộn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-scrollbarwidthref`,children:`Lớp ScrollbarWidthRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp bọc phản ứng cho phép đo thanh cuộn bất đồng bộ. Trong môi trường DOM, lớp yêu cầu cờ và chiều rộng pixel độc lập qua `,(0,c.jsx)(t.code,{children:`ScrollbarWidth`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trạng thái ban đầu`}),` — `,(0,c.jsx)(t.code,{children:`item`}),` là undefined, `,(0,c.jsx)(t.code,{children:`width`}),` là 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả độc lập`}),` — cờ và chiều rộng có thể hoàn tất theo thứ tự bất kỳ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn SSR`}),` — không yêu cầu đo trình duyệt ngoài môi trường DOM.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor()`})}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`is`}),` cho biết cờ đã có giá trị: cả `,(0,c.jsx)(t.code,{children:`true`}),` và `,(0,c.jsx)(t.code,{children:`false`}),` đều làm trạng thái sẵn sàng thành true. Điều này không đảm bảo promise chiều rộng độc lập đã hoàn tất. Lớp đo một lần khi tạo, không đăng ký resize. Không có phương thức công khai ngoài hàm dựng.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = /*#__PURE__*/ new ScrollbarWidthRef()
const ready = scrollbar.is
const width = scrollbar.width
`})}),`
`,(0,c.jsx)(t.h2,{id:`thuộc-tính`,children:`Thuộc tính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<boolean | undefined>`}),` — Kết quả ScrollbarWidth.is(): true khi chiều rộng đo được khác -1 và không quá 8 pixel; ban đầu undefined.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: Ref<number>`}),` — Chiều rộng pixel; ban đầu 0, cập nhật độc lập.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is: ComputedRef<boolean>`}),` — Đúng khi item có giá trị, không phụ thuộc giá trị cờ hoặc chiều rộng đã sẵn sàng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.p,{children:`Không có phương thức công khai; sử dụng các thuộc tính được mô tả ở trên.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};