import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/isString - Kiểm tra dữ liệu chuỗi ký tự"}),`
`,n.jsx(i.h1,{id:"isstring",children:n.jsx(i.code,{children:"isString"})}),`
`,n.jsx(i.p,{children:"Tác vụ rà quét cơ bản nhưng không kém phần vững vàng nhằm phán định mức độ xác thực một hạt giống dữ liệu có mang kết cấu chuỗi ký tự (string) hay không."}),`
`,n.jsxs(i.p,{children:["Khối mã này tựa vào bài toán kiểm tra cốt lõi tiêu chuẩn ",n.jsx(i.code,{children:"typeof value === 'string'"})," đảm bảo không có bất kỳ kẽ hở nào khi khẳng định căn cước của thành phần thông số là chữ nguyên mẫu primitive string. Màn chắn an ninh tuyệt hảo giúp thanh trừng trơn tru tất cả mọi chủng loại lai vãng khác ngoài string, đá bay cả con số, luận lý boolean, cho đến mảng mớ hỗn độn như object và cặn dư undefined."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"value: T"})," — Dữ liệu mang thể chất lung tung bất kỳ chờ được giám duyệt."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"boolean"})," — Trả tay chốt ",n.jsx(i.code,{children:"true"})," liền nếu cục dữ liệu thuộc đích thị tộc đường lối string. Hiện ",n.jsx(i.code,{children:"false"})," ở mọi kịch bản ngược ngạo lại. Nó cũng đính kèm vinh dự mang băng gạc cộp mác lớp Type Guard cho TypeScript khoanh phễu đặc trị kiểu cách lại chỉ còn ",n.jsx(i.code,{children:"string"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Chào thế giới!')) // true
console.log(isString('')) // true (chuỗi rỗng tinh cũng là chuỗi)

// Hất cẳng dị thường
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function d(t={}){const{wrapper:i}={...h(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(c,{...t})}):c(t)}export{d as default};
