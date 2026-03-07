import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/isNumber - Kiểm tra tính chất con số"}),`
`,n.jsx(t.h1,{id:"isnumber",children:n.jsx(t.code,{children:"isNumber"})}),`
`,n.jsx(t.p,{children:"Tiện ích chuyên biệt có khả năng nhìn thấu vấn đề liệu một yếu tố đưa qua phân tích trần định có hoàn toàn được cấu trúc dưới tư cách một bảng mạch thể loại con số chuẩn xác hay không."}),`
`,n.jsxs(t.p,{children:["Tính năng hoạt động tương thích hoàn hảo kiểu loại cấu thành ",n.jsx(t.code,{children:"typeof value === 'number'"})," nên mặc định cho qua các con số dương, số âm và kể cả thông số dị dạng toán học như ",n.jsx(t.code,{children:"NaN"}),". Phi thường hơn, nó nhận thu và xử lý tốt ngay cả những xâu chuỗi văn bản thông qua thuật toán giải mã RegEx để bóc xem phần tử chuỗi truyền vào thực sự mang cấu trúc định dạng chuẩn số hay không (ủng hộ cả số âm và số có phần thập phân)."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: any"})," — Mức giá trị thập cẩm bất kỳ để khảo sát."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"boolean"})," — Giải phóng biến kiểm tra ",n.jsx(t.code,{children:"true"})," nếu nguồn căn thuộc thể trạng chữ số lý thuyết hay hệ thống dải văn bản cấu tạo chỉ bởi số liệu đơn thuần. Sẽ cho ra ",n.jsx(t.code,{children:"false"})," khi có bất trắc nào dính lẫn kí tự ngoại vi ngoài chữ số."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Chấp thuận dòng chuỗi số liệu)

console.log(isNumber('-50')) // true (Hỗ trợ chuỗi chứa số âm)
console.log(isNumber('3.14')) // true (Hỗ trợ cấu trúc số thập phân)
console.log(isNumber('15a')) // false (Vì pha trộn lẫn với kí tự chữ a)
console.log(isNumber(null)) // false
`})})]})}function a(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{a as default};
