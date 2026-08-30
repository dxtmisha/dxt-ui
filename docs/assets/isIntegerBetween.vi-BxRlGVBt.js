import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isIntegerBetween - Kiểm tra lọt khe số nguyên`}),`
`,(0,c.jsx)(t.h1,{id:`isintegerbetween`,children:(0,c.jsx)(t.code,{children:`isIntegerBetween`})}),`
`,(0,c.jsx)(t.p,{children:`Rà soát cẩn thận xem một con số cụ thể có đang lọt lỏm ngay bên trong lằn ranh phân cách thuộc một phạm vi số nguyên đã được xác lập hay không.`}),`
`,(0,c.jsxs)(t.p,{children:[`Biên độ rào chắn sẽ được cắm mốc bằng cách làm tròn xuống trị số trung tâm (`,(0,c.jsx)(t.code,{children:`between`}),`). Hàm chỉ xác thực thành công khi con số đưa vào đem ra đọ kiếm có độ lớn hơn hoặc bằng mức sàn giới hạn dưới, đồng thời buộc phải mang trị số vĩnh viễn nhỏ hơn mốc số nguyên nối tiếp ngay ngay liền kề sau đó.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Tóm tắt công thức toán học: `,(0,c.jsx)(t.code,{children:`floor(between) <= value < floor(between) + 1`})]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — Trị giá được điền lên để kiểm thử.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`between: number`}),` — Con số chủ đạo để ấn định khoanh vùng phạm vi (qua áp dụng thuật toán làm tròn xuống).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Tín hiệu trả về `,(0,c.jsx)(t.code,{children:`true`}),` miễn sao trị số nằm gọn trong khoảng không gian vòng đệm số lượng đã khoanh vùng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Không gian kẹp: [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};