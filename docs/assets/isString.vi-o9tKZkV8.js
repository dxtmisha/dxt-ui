import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isString - Kiểm tra dữ liệu chuỗi ký tự`}),`
`,(0,c.jsx)(n.h1,{id:`isstring`,children:(0,c.jsx)(n.code,{children:`isString`})}),`
`,(0,c.jsx)(n.p,{children:`Tác vụ rà quét cơ bản nhưng không kém phần vững vàng nhằm phán định mức độ xác thực một hạt giống dữ liệu có mang kết cấu chuỗi ký tự (string) hay không.`}),`
`,(0,c.jsxs)(n.p,{children:[`Khối mã này tựa vào bài toán kiểm tra cốt lõi tiêu chuẩn `,(0,c.jsx)(n.code,{children:`typeof value === 'string'`}),` đảm bảo không có bất kỳ kẽ hở nào khi khẳng định căn cước của thành phần thông số là chữ nguyên mẫu primitive string. Màn chắn an ninh tuyệt hảo giúp thanh trừng trơn tru tất cả mọi chủng loại lai vãng khác ngoài string, đá bay cả con số, luận lý boolean, cho đến mảng mớ hỗn độn như object và cặn dư undefined.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Dữ liệu mang thể chất lung tung bất kỳ chờ được giám duyệt.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Trả tay chốt `,(0,c.jsx)(n.code,{children:`true`}),` liền nếu cục dữ liệu thuộc đích thị tộc đường lối string. Hiện `,(0,c.jsx)(n.code,{children:`false`}),` ở mọi kịch bản ngược ngạo lại. Nó cũng đính kèm vinh dự mang băng gạc cộp mác lớp Type Guard cho TypeScript khoanh phễu đặc trị kiểu cách lại chỉ còn `,(0,c.jsx)(n.code,{children:`string`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Chào thế giới!')) // true
console.log(isString('')) // true (chuỗi rỗng tinh cũng là chuỗi)

// Hất cẳng dị thường
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};