import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isFilled - Kiểm tra dữ liệu được điền`}),`
`,(0,c.jsx)(t.h1,{id:`isfilled`,children:(0,c.jsx)(t.code,{children:`isFilled`})}),`
`,(0,c.jsx)(t.p,{children:`Là một tiện ích đa năng để xét duyệt xem giá trị truyền vào có đang được lấp "đầy" dữ liệu cụ thể hay không. Cơ chế hàm này vận dụng thông minh các cách xử lý qua nhiều kiểu dữ liệu từ chuỗi ký tự, chữ số, kiểu quyết định, danh sách mảng cho tới khái niệm đối tượng nhằm giám định độ "trống" hiệu quả hơn việc xác nhận giá trị đúng/sai mặc định rập khuôn của JavaScript.`}),`
`,(0,c.jsxs)(t.p,{children:[`Khác với hàm xét nhánh điều kiện truthy (`,(0,c.jsx)(t.code,{children:`if (value)`}),`), `,(0,c.jsx)(t.code,{children:`isFilled`}),` sở hữu những ngoại lệ:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Quét các mảng (array) trả kết quả trống rỗng (`,(0,c.jsx)(t.code,{children:`false`}),`) nếu tham số `,(0,c.jsx)(t.code,{children:`.length`}),` của nó hiển thị bằng 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Xét diện đối tượng (object) là trống (`,(0,c.jsx)(t.code,{children:`false`}),`) khi tất cả các định danh nội trú bị gán ngược bằng `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tách bóc các thẻ định nghĩa ảo cấu tạo bằng lớp màng kiểu string ví dụ như `,(0,c.jsx)(t.code,{children:`'undefined'`}),`, `,(0,c.jsx)(t.code,{children:`'null'`}),`, `,(0,c.jsx)(t.code,{children:`'false'`}),`, `,(0,c.jsx)(t.code,{children:`'[]'`}),` và coi nó đều là trống.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Kể cả chuỗi `,(0,c.jsx)(t.code,{children:`'0'`}),` mặc định coi là rỗng hụt trừ khi có cấu hình thông báo ngoại lệ lọt qua nhờ tham số `,(0,c.jsx)(t.code,{children:`zeroTrue`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Mẫu giá trị bất kỳ được truyền đến để chèn thử nghiệm rà soát.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zeroTrue: boolean`}),` — (Tùy chọn) Nếu được áp bằng `,(0,c.jsx)(t.code,{children:`true`}),`, giá trị chuỗi `,(0,c.jsx)(t.code,{children:`'0'`}),` đó sẽ đột nhiên vượt cấp được hệ thống thâu nhận là có chữa dữ liệu (hoàn trả `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` (`,(0,c.jsx)(t.code,{children:`value is Exclude<T, EmptyValue>`}),`) — Kết suất gởi trả về `,(0,c.jsx)(t.code,{children:`true`}),` chừng nào mẫu số đang có mang dữ liệu thông tin, hoặc `,(0,c.jsx)(t.code,{children:`false`}),` nếu trắng tinh. Cánh cổng hàm hoạt động song song chức năng khóa loại chặt kiểu TypeScript `,(0,c.jsx)(t.code,{children:`EmptyValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isFilled } from '@dxtmisha/functional-basic'

console.log(isFilled('Một văn bản')) // true
console.log(isFilled(100)) // true
console.log(isFilled([1, 2, 3])) // true
console.log(isFilled({ data: 'ok' })) // true

// Tình huống giá trị cạn hụt
console.log(isFilled('')) // false
console.log(isFilled([])) // false
console.log(isFilled({ a: null })) // false
console.log(isFilled('null')) // false
console.log(isFilled('0')) // false

// Ứng dụng ngoại lệ zeroTrue
console.log(isFilled('0', true)) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};