import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const c={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/isObjectNotArray - Phân định đối tượng loại trừ mảng"}),`
`,n.jsx(c.h1,{id:"isobjectnotarray",children:n.jsx(c.code,{children:"isObjectNotArray"})}),`
`,n.jsxs(c.p,{children:["Kích chạy quá trình bảo tra chuyên sâu triệt để, củng cố rằng mẫu thử nghiệm là một khối đối tượng đặc sệt kiểu dáng mộc cổ điển ",n.jsx(c.code,{children:"{}"})," (Mẫu Record) mà lại đồng thời ",n.jsx(c.strong,{children:"tuyệt đối không đội lốt mảng (array) trá hình"}),"."]}),`
`,n.jsxs(c.p,{children:["Chịu lệ thuộc vào gốc rễ cốt lõi Javascript khi mà chức năng ",n.jsx(c.code,{children:"isObject"})," nền móng lại bao dung cấp quyền ",n.jsx(c.code,{children:"true"})," bừa bãi cho cả các khung mảng lưới, tính năng điều giải này khắc phục hẳn lỗ thủng logic cực đoan trên. Mồi lửa châm ngòi qua dòng chắp vá đan xen giữa khuôn luật gốc ",n.jsx(c.code,{children:"isObject(value)"})," kết bè mảng cùng vòng lưới xét nghiệm thắt chặt an ninh ",n.jsx(c.code,{children:"!Array.isArray(value)"}),". Nhờ vậy, chuỗi mảng hoàn toàn dứt điểm bị phong sát ngoài cổng."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: T"})," — Thông thể truyền vào cần quét độ định danh."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
`,n.jsx(c.code,{children:"boolean"})," — Nhấc lên rào tín phát ",n.jsx(c.code,{children:"true"})," thu hẹp trên cục diện độc nhất dành cho đối tượng chính cống thuần tuý dạng ",n.jsx(c.code,{children:"{ key: 'value' }"}),". Phạt cờ văng thông điệp ",n.jsx(c.code,{children:"false"})," khi chống cự với các thể loại mảng ",n.jsx(c.code,{children:"[]"}),", bóng ma null, kịch bản hàm chạy functions hay đơn thuần bao vật liệu mạt vụn primitives. Tỏa sáng qua chức tước khiên giáp Type Guard tước bỏ tàn độc tất cả các khả năng liên can null/undefined hay vũng nước mảng."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Kịch bản gật đầu thành công chót lọt
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Góc khuất được càn quét an toàn lảng tránh
console.log(isObjectNotArray([1, 2, 3])) // false (Hàng đạo cụ kiểm tra mảng chối bỏ array không nề hà!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function d(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(i,{...t})}):i(t)}export{d as default};
