import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isObject - Khảo sát bản chất đối tượng`}),`
`,(0,c.jsx)(n.h1,{id:`isobject`,children:(0,c.jsx)(n.code,{children:`isObject`})}),`
`,(0,c.jsx)(n.p,{children:`Công cụ tiện nghi cấp cơ sở rèn đúc chuyên cho nhu cầu tra soát nhanh gọn và an toàn để chốt chắc chắn một biến truyền vào có thực thể thuộc dòng tộc đối tượng object thuần hay không.`}),`
`,(0,c.jsxs)(n.p,{children:[`Vì đặc thù lạ lùng của mã JavaScript, câu lệnh `,(0,c.jsx)(n.code,{children:`typeof null`}),` luôn giở mặt báo ra chữ `,(0,c.jsx)(n.code,{children:`'object'`}),`, đây vốn dĩ luôn là nguyên nhân chôn giấu bao rủi ro trục trặc mờ ám. Vượt qua yếu huyệt này, hàm kiểm tra bật lên màng bảo mật rà quét truthy gắt gao (`,(0,c.jsx)(n.code,{children:`Boolean(value)`}),`) nhằm triệt tiêu thẳng cánh cái nhãn `,(0,c.jsx)(n.code,{children:`null`}),` dối trá và sau đó bắt đầu điều tra tính xác định object nguyên nghĩa. Xin chú ý cặn kẽ vì các mảng (`,(0,c.jsx)(n.code,{children:`[]`}),`) rễ gốc trong Javascript mặc định coi là một dạng đối tượng phái sinh nên thử nghiệm lên tính năng này thì vẫn vạch ra `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Giá trị đưa tới thực nghiệm khảo lược thông số.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Phát nhượng hồi thư `,(0,c.jsx)(n.code,{children:`true`}),` nếu thể xác định đúng khớp đối tượng hoặc mảng liên kết (arrays). Đáp số lại chỉ toàn `,(0,c.jsx)(n.code,{children:`false`}),` văng vào mặt nhóm tham số kiểu vô ngã `,(0,c.jsx)(n.code,{children:`null`}),`, đơn nguyên primitives, hay khối định luật functions. Cùng vận hành làm bức thành rào cản Type Guard khoanh thu vùng định loại xuống `,(0,c.jsx)(n.code,{children:`Record<any, any>`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Các mảng danh sách đều có chung bản chất là đối tượng ẩn sau Javascript!)

// Thanh trừng triệt để ma trận cạm bẫy JS
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};