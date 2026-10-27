import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isObject - Khảo sát bản chất đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`isobject`,children:(0,c.jsx)(t.code,{children:`isObject`})}),`
`,(0,c.jsx)(t.p,{children:`Công cụ tiện nghi cấp cơ sở rèn đúc chuyên cho nhu cầu tra soát nhanh gọn và an toàn để chốt chắc chắn một biến truyền vào có thực thể thuộc dòng tộc đối tượng object thuần hay không.`}),`
`,(0,c.jsxs)(t.p,{children:[`Vì đặc thù lạ lùng của mã JavaScript, câu lệnh `,(0,c.jsx)(t.code,{children:`typeof null`}),` luôn giở mặt báo ra chữ `,(0,c.jsx)(t.code,{children:`'object'`}),`, đây vốn dĩ luôn là nguyên nhân chôn giấu bao rủi ro trục trặc mờ ám. Vượt qua yếu huyệt này, hàm kiểm tra bật lên màng bảo mật rà quét truthy gắt gao (`,(0,c.jsx)(t.code,{children:`Boolean(value)`}),`) nhằm triệt tiêu thẳng cánh cái nhãn `,(0,c.jsx)(t.code,{children:`null`}),` dối trá và sau đó bắt đầu điều tra tính xác định object nguyên nghĩa. Xin chú ý cặn kẽ vì các mảng (`,(0,c.jsx)(t.code,{children:`[]`}),`) rễ gốc trong Javascript mặc định coi là một dạng đối tượng phái sinh nên thử nghiệm lên tính năng này thì vẫn vạch ra `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: unknown`}),` — Giá trị đầu vào cần kiểm tra thuộc bất kỳ kiểu nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`<T = unknown>`}),` — Generic tùy chọn để định kiểu cho các giá trị bên trong `,(0,c.jsx)(t.code,{children:`ObjectItem<T>`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`value is ObjectItem<T>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` khi giá trị là đối tượng (`,(0,c.jsx)(t.code,{children:`typeof value === 'object'`}),` và không phải `,(0,c.jsx)(t.code,{children:`null`}),`, bao gồm cả mảng). Đóng vai trò là Type Guard trong TypeScript giúp thu hẹp kiểu của giá trị về `,(0,c.jsx)(t.code,{children:`ObjectItem<T>`}),` (`,(0,c.jsx)(t.code,{children:`Record<string, T>`}),`). Trả về `,(0,c.jsx)(t.code,{children:`false`}),` cho các kiểu nguyên thủy, `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),` và hàm.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Các mảng danh sách đều có chung bản chất là đối tượng ẩn sau Javascript!)

// Thanh trừng triệt để ma trận cạm bẫy JS
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};