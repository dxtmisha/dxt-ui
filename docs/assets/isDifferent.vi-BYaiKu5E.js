import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isDifferent - Kiểm tra sự khác biệt của đối tượng`}),`
`,(0,c.jsx)(n.h1,{id:`isdifferent`,children:(0,c.jsx)(n.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(n.p,{children:`Tiến hành đánh giá xem hai đối tượng được cung cấp có khác biệt với nhau hay không.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm hoạt động thông qua việc so sánh đếm tổng số lượng khóa (thuộc tính) trong mỗi đối tượng. Khi mà số lượng khóa trên cả hai khớp nhau, hàm sẽ tiếp nối chạy một chuỗi theo dõi nghiêm ngặt giá trị trong các khóa thông qua vòng lặp tiện ích nội bộ `,(0,c.jsx)(n.code,{children:`forEach`}),` để biết chính xác có lệch lạc số liệu hay không.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ObjectItem<T>`}),` — Đối tượng chính (dữ liệu mới) được đem ra làm chủ thể xác nhận.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`old: ObjectItem<T>`}),` — Đối tượng tham chiếu (yếu tố lấy dữ liệu cũ).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu tìm ra sự sai khác giữa hai mẫu phân tích đối tượng (có thể ở lượng phân bổ khóa hoặc có thuộc tính khác xa với cấu trúc của mẫu bên cạnh), hoặc `,(0,c.jsx)(n.code,{children:`false`}),` nếu chúng đồng nhất chuẩn mực hoàn toàn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Đối tượng khác biệt tại trường phân tích \`active\`
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Mẫu đối tượng giống y hệt ở tất cả thông số
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};