import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isNumber - Kiểm tra tính chất con số`}),`
`,(0,c.jsx)(t.h1,{id:`isnumber`,children:(0,c.jsx)(t.code,{children:`isNumber`})}),`
`,(0,c.jsx)(t.p,{children:`Tiện ích chuyên biệt có khả năng nhìn thấu vấn đề liệu một yếu tố đưa qua phân tích trần định có hoàn toàn được cấu trúc dưới tư cách một bảng mạch thể loại con số chuẩn xác hay không.`}),`
`,(0,c.jsxs)(t.p,{children:[`Tính năng hoạt động tương thích hoàn hảo kiểu loại cấu thành `,(0,c.jsx)(t.code,{children:`typeof value === 'number'`}),` nên mặc định cho qua các con số dương, số âm và kể cả thông số dị dạng toán học như `,(0,c.jsx)(t.code,{children:`NaN`}),`. Phi thường hơn, nó nhận thu và xử lý tốt ngay cả những xâu chuỗi văn bản thông qua thuật toán giải mã RegEx để bóc xem phần tử chuỗi truyền vào thực sự mang cấu trúc định dạng chuẩn số hay không (ủng hộ cả số âm và số có phần thập phân).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — Mức giá trị thập cẩm bất kỳ để khảo sát.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Giải phóng biến kiểm tra `,(0,c.jsx)(t.code,{children:`true`}),` nếu nguồn căn thuộc thể trạng chữ số lý thuyết hay hệ thống dải văn bản cấu tạo chỉ bởi số liệu đơn thuần. Sẽ cho ra `,(0,c.jsx)(t.code,{children:`false`}),` khi có bất trắc nào dính lẫn kí tự ngoại vi ngoài chữ số.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Chấp thuận dòng chuỗi số liệu)

console.log(isNumber('-50')) // true (Hỗ trợ chuỗi chứa số âm)
console.log(isNumber('3.14')) // true (Hỗ trợ cấu trúc số thập phân)
console.log(isNumber('15a')) // false (Vì pha trộn lẫn với kí tự chữ a)
console.log(isNumber(null)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};