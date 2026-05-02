import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ResumableTimer - Bộ hẹn giờ có thể tạm dừng`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-resumabletimer`,children:`Lớp ResumableTimer`}),`
`,(0,c.jsx)(n.p,{children:`Lớp chuyên dùng để tạo bộ hẹn giờ có thể tạm dừng, tiếp tục, thiết lập lại và xóa bỏ. Nó hữu ích cho các thành phần giao diện người dùng cần theo dõi thời gian đã trôi qua ngay cả khi bị gián đoạn, chẳng hạn như thanh tiến trình, thông báo tự động đóng hoặc các slide.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạm dừng & Tiếp tục`}),` — dừng đếm ngược và tiếp tục sau đó từ chính xác mili giây đã dừng lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi hoàn thành`}),` — theo dõi rõ ràng xem bộ hẹn giờ đã kết thúc thực thi hay chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logic mạnh mẽ`}),` — xử lý các trường hợp biên như tiếp tục khi thời gian đã trôi qua hết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao diện mượt mà (Fluent Interface)`}),` — các phương thức trả về `,(0,c.jsx)(n.code,{children:`this`}),`, cho phép gọi chuỗi phương thức.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`ResumableTimer(callback, delay, blockStart)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: FunctionVoid`}),` — hàm sẽ được gọi sau khoảng thời gian trễ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay: number = 320`}),` — thời gian trễ tính bằng mili giây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`blockStart: boolean = false`}),` — nếu là true, bộ hẹn giờ sẽ không bắt đầu ngay lập tức.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ResumableTimer } from '@dxtmisha/functional-basic'

// 1. Khởi tạo cơ bản (bắt đầu ngay lập tức)
const timer = new ResumableTimer(() => {
  console.log('Hết giờ!')
}, 5000)

// 2. Khởi tạo không bắt đầu ngay
const delayedTimer = new ResumableTimer(
  () => console.log('Nhiệm vụ bắt đầu!'),
  3000,
  true
)

delayedTimer.resume() // Bắt đầu thủ công
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý`,children:`Quản lý`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resume(): this`}),` — Bắt đầu hoặc tiếp tục bộ hẹn giờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pause(): this`}),` — Tạm dừng bộ hẹn giờ và tính toán thời gian còn lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Xóa hoàn toàn trạng thái hiện tại và khởi động lại với độ trễ ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`clear(): this`}),` — Dừng hoàn toàn bộ hẹn giờ và thiết lập lại tất cả các trạng thái nội bộ.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};