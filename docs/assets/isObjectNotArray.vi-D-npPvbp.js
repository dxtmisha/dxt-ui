import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isObjectNotArray - Phân định đối tượng loại trừ mảng`}),`
`,(0,c.jsx)(n.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(n.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kích chạy quá trình bảo tra chuyên sâu triệt để, củng cố rằng mẫu thử nghiệm là một khối đối tượng đặc sệt kiểu dáng mộc cổ điển `,(0,c.jsx)(n.code,{children:`{}`}),` (Mẫu Record) mà lại đồng thời `,(0,c.jsx)(n.strong,{children:`tuyệt đối không đội lốt mảng (array) trá hình`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Chịu lệ thuộc vào gốc rễ cốt lõi Javascript khi mà chức năng `,(0,c.jsx)(n.code,{children:`isObject`}),` nền móng lại bao dung cấp quyền `,(0,c.jsx)(n.code,{children:`true`}),` bừa bãi cho cả các khung mảng lưới, tính năng điều giải này khắc phục hẳn lỗ thủng logic cực đoan trên. Mồi lửa châm ngòi qua dòng chắp vá đan xen giữa khuôn luật gốc `,(0,c.jsx)(n.code,{children:`isObject(value)`}),` kết bè mảng cùng vòng lưới xét nghiệm thắt chặt an ninh `,(0,c.jsx)(n.code,{children:`!Array.isArray(value)`}),`. Nhờ vậy, chuỗi mảng hoàn toàn dứt điểm bị phong sát ngoài cổng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Thông thể truyền vào cần quét độ định danh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Nhấc lên rào tín phát `,(0,c.jsx)(n.code,{children:`true`}),` thu hẹp trên cục diện độc nhất dành cho đối tượng chính cống thuần tuý dạng `,(0,c.jsx)(n.code,{children:`{ key: 'value' }`}),`. Phạt cờ văng thông điệp `,(0,c.jsx)(n.code,{children:`false`}),` khi chống cự với các thể loại mảng `,(0,c.jsx)(n.code,{children:`[]`}),`, bóng ma null, kịch bản hàm chạy functions hay đơn thuần bao vật liệu mạt vụn primitives. Tỏa sáng qua chức tước khiên giáp Type Guard tước bỏ tàn độc tất cả các khả năng liên can null/undefined hay vũng nước mảng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Kịch bản gật đầu thành công chót lọt
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Góc khuất được càn quét an toàn lảng tránh
console.log(isObjectNotArray([1, 2, 3])) // false (Hàng đạo cụ kiểm tra mảng chối bỏ array không nề hà!)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};