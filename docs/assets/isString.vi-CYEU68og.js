import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isString - Kiểm tra dữ liệu chuỗi ký tự`}),`
`,(0,c.jsx)(t.h1,{id:`isstring`,children:(0,c.jsx)(t.code,{children:`isString`})}),`
`,(0,c.jsx)(t.p,{children:`Tác vụ rà quét cơ bản nhưng không kém phần vững vàng nhằm phán định mức độ xác thực một hạt giống dữ liệu có mang kết cấu chuỗi ký tự (string) hay không.`}),`
`,(0,c.jsxs)(t.p,{children:[`Khối mã này tựa vào bài toán kiểm tra cốt lõi tiêu chuẩn `,(0,c.jsx)(t.code,{children:`typeof value === 'string'`}),` đảm bảo không có bất kỳ kẽ hở nào khi khẳng định căn cước của thành phần thông số là chữ nguyên mẫu primitive string. Màn chắn an ninh tuyệt hảo giúp thanh trừng trơn tru tất cả mọi chủng loại lai vãng khác ngoài string, đá bay cả con số, luận lý boolean, cho đến mảng mớ hỗn độn như object và cặn dư undefined.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Dữ liệu mang thể chất lung tung bất kỳ chờ được giám duyệt.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Trả tay chốt `,(0,c.jsx)(t.code,{children:`true`}),` liền nếu cục dữ liệu thuộc đích thị tộc đường lối string. Hiện `,(0,c.jsx)(t.code,{children:`false`}),` ở mọi kịch bản ngược ngạo lại. Nó cũng đính kèm vinh dự mang băng gạc cộp mác lớp Type Guard cho TypeScript khoanh phễu đặc trị kiểu cách lại chỉ còn `,(0,c.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Chào thế giới!')) // true
console.log(isString('')) // true (chuỗi rỗng tinh cũng là chuỗi)

// Hất cẳng dị thường
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};