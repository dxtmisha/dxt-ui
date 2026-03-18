import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/isIntegerBetween - Kiểm tra lọt khe số nguyên"}),`
`,n.jsx(e.h1,{id:"isintegerbetween",children:n.jsx(e.code,{children:"isIntegerBetween"})}),`
`,n.jsx(e.p,{children:"Rà soát cẩn thận xem một con số cụ thể có đang lọt lỏm ngay bên trong lằn ranh phân cách thuộc một phạm vi số nguyên đã được xác lập hay không."}),`
`,n.jsxs(e.p,{children:["Biên độ rào chắn sẽ được cắm mốc bằng cách làm tròn xuống trị số trung tâm (",n.jsx(e.code,{children:"between"}),"). Hàm chỉ xác thực thành công khi con số đưa vào đem ra đọ kiếm có độ lớn hơn hoặc bằng mức sàn giới hạn dưới, đồng thời buộc phải mang trị số vĩnh viễn nhỏ hơn mốc số nguyên nối tiếp ngay ngay liền kề sau đó."]}),`
`,n.jsxs(e.p,{children:["Tóm tắt công thức toán học: ",n.jsx(e.code,{children:"floor(between) <= value < floor(between) + 1"})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: number"})," — Trị giá được điền lên để kiểm thử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"between: number"})," — Con số chủ đạo để ấn định khoanh vùng phạm vi (qua áp dụng thuật toán làm tròn xuống)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"boolean"})," — Tín hiệu trả về ",n.jsx(e.code,{children:"true"})," miễn sao trị số nằm gọn trong khoảng không gian vòng đệm số lượng đã khoanh vùng."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isIntegerBetween } from '@dxtmisha/functional-basic'

// Không gian kẹp: [5, 6)
console.log(isIntegerBetween(5.2, 5.8)) // true (Math.floor(5.8) = 5)
console.log(isIntegerBetween(5.99, 5))  // true
console.log(isIntegerBetween(6, 5))     // false
`})})]})}function a(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{a as default};
