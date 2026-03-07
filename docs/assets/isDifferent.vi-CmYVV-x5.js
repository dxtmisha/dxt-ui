import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(i){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/isDifferent - Kiểm tra sự khác biệt của đối tượng"}),`
`,n.jsx(t.h1,{id:"isdifferent",children:n.jsx(t.code,{children:"isDifferent"})}),`
`,n.jsx(t.p,{children:"Tiến hành đánh giá xem hai đối tượng được cung cấp có khác biệt với nhau hay không."}),`
`,n.jsxs(t.p,{children:["Hàm hoạt động thông qua việc so sánh đếm tổng số lượng khóa (thuộc tính) trong mỗi đối tượng. Khi mà số lượng khóa trên cả hai khớp nhau, hàm sẽ tiếp nối chạy một chuỗi theo dõi nghiêm ngặt giá trị trong các khóa thông qua vòng lặp tiện ích nội bộ ",n.jsx(t.code,{children:"forEach"})," để biết chính xác có lệch lạc số liệu hay không."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: ObjectItem<T>"})," — Đối tượng chính (dữ liệu mới) được đem ra làm chủ thể xác nhận."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"old: ObjectItem<T>"})," — Đối tượng tham chiếu (yếu tố lấy dữ liệu cũ)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"boolean"})," — Trả về ",n.jsx(t.code,{children:"true"})," nếu tìm ra sự sai khác giữa hai mẫu phân tích đối tượng (có thể ở lượng phân bổ khóa hoặc có thuộc tính khác xa với cấu trúc của mẫu bên cạnh), hoặc ",n.jsx(t.code,{children:"false"})," nếu chúng đồng nhất chuẩn mực hoàn toàn."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Đối tượng khác biệt tại trường phân tích \`active\`
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Mẫu đối tượng giống y hệt ở tất cả thông số
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function m(i={}){const{wrapper:t}={...e(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(c,{...i})}):c(i)}export{m as default};
