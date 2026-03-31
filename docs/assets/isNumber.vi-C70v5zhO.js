import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isNumber - Kiểm tra tính chất con số`}),`
`,(0,c.jsx)(n.h1,{id:`isnumber`,children:(0,c.jsx)(n.code,{children:`isNumber`})}),`
`,(0,c.jsx)(n.p,{children:`Tiện ích chuyên biệt có khả năng nhìn thấu vấn đề liệu một yếu tố đưa qua phân tích trần định có hoàn toàn được cấu trúc dưới tư cách một bảng mạch thể loại con số chuẩn xác hay không.`}),`
`,(0,c.jsxs)(n.p,{children:[`Tính năng hoạt động tương thích hoàn hảo kiểu loại cấu thành `,(0,c.jsx)(n.code,{children:`typeof value === 'number'`}),` nên mặc định cho qua các con số dương, số âm và kể cả thông số dị dạng toán học như `,(0,c.jsx)(n.code,{children:`NaN`}),`. Phi thường hơn, nó nhận thu và xử lý tốt ngay cả những xâu chuỗi văn bản thông qua thuật toán giải mã RegEx để bóc xem phần tử chuỗi truyền vào thực sự mang cấu trúc định dạng chuẩn số hay không (ủng hộ cả số âm và số có phần thập phân).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Mức giá trị thập cẩm bất kỳ để khảo sát.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Giải phóng biến kiểm tra `,(0,c.jsx)(n.code,{children:`true`}),` nếu nguồn căn thuộc thể trạng chữ số lý thuyết hay hệ thống dải văn bản cấu tạo chỉ bởi số liệu đơn thuần. Sẽ cho ra `,(0,c.jsx)(n.code,{children:`false`}),` khi có bất trắc nào dính lẫn kí tự ngoại vi ngoài chữ số.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Chấp thuận dòng chuỗi số liệu)

console.log(isNumber('-50')) // true (Hỗ trợ chuỗi chứa số âm)
console.log(isNumber('3.14')) // true (Hỗ trợ cấu trúc số thập phân)
console.log(isNumber('15a')) // false (Vì pha trộn lẫn với kí tự chữ a)
console.log(isNumber(null)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};