import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isIntegerBetween - Kiểm tra lọt khe số nguyên`}),`
`,(0,c.jsx)(n.h1,{id:`isintegerbetween`,children:(0,c.jsx)(n.code,{children:`isIntegerBetween`})}),`
`,(0,c.jsx)(n.p,{children:`Rà soát cẩn thận xem một con số cụ thể có đang lọt lỏm ngay bên trong lằn ranh phân cách thuộc một phạm vi số nguyên đã được xác lập hay không.`}),`
`,(0,c.jsxs)(n.p,{children:[`Biên độ rào chắn sẽ được cắm mốc bằng cách làm tròn xuống trị số trung tâm (`,(0,c.jsx)(n.code,{children:`between`}),`). Hàm chỉ xác thực thành công khi con số đưa vào đem ra đọ kiếm có độ lớn hơn hoặc bằng mức sàn giới hạn dưới, đồng thời buộc phải mang trị số vĩnh viễn nhỏ hơn mốc số nguyên nối tiếp ngay ngay liền kề sau đó.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Tóm tắt công thức toán học: `,(0,c.jsx)(n.code,{children:`floor(between) <= value < floor(between) + 1`})]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: number`}),` — Trị giá được điền lên để kiểm thử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`between: number`}),` — Con số chủ đạo để ấn định khoanh vùng phạm vi (qua áp dụng thuật toán làm tròn xuống).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Tín hiệu trả về `,(0,c.jsx)(n.code,{children:`true`}),` miễn sao trị số nằm gọn trong khoảng không gian vòng đệm số lượng đã khoanh vùng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Không gian kẹp: [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};