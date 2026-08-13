import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isNull - Kiểm định null hoặc undefined`}),`
`,(0,c.jsx)(t.h1,{id:`isnull`,children:(0,c.jsx)(t.code,{children:`isNull`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một chiêu thức thẩm định hết mực khắt khe, duy chỉ theo dấu nhắm thẳng vào duy nhất hai định mục đó là thông số `,(0,c.jsx)(t.code,{children:`null`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Thoát ly hẳn hoàn toàn ra khỏi cách phủ định falsy phổ cập đi kèm như kiểu `,(0,c.jsx)(t.code,{children:`!value`}),` (có thể vô tình bắt nhầm cả con số `,(0,c.jsx)(t.code,{children:`0`}),`, dải xâu chuỗi rỗng thênh thang `,(0,c.jsx)(t.code,{children:`''`}),`, hay ngay cả boolean lật ngược `,(0,c.jsx)(t.code,{children:`false`}),`), hàm logic đơn độc này sẽ nhẹ nhàng lánh sang mọi thứ tạp nham đó và chiếu thẳng cốt lỗi vào một vùng không chứa bất kì cái gì cả.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Giá trị bất luận loại nào được bệ lên bàn mổ soi thử độ tồn tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Gõ thông điệp `,(0,c.jsx)(t.code,{children:`true`}),` bất cứ kì khoảnh khắc nào đối diện bằng nhãn trúng tâm phác hoạ `,(0,c.jsx)(t.code,{children:`null`}),` hay mã `,(0,c.jsx)(t.code,{children:`undefined`}),`. Trợ thủ siêu phàm này cùng đút túi chức năng bộ bảo vệ type guard TypeScript để cắt chặt giới hạn ép khuôn theo cấu kiện `,(0,c.jsx)(t.code,{children:`Undefined`}),` (`,(0,c.jsx)(t.code,{children:`null | undefined`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Cạm bẫy giá trị falsy khác vẫn ra kết quả false
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};