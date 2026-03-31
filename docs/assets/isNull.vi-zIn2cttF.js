import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isNull - Kiểm định null hoặc undefined`}),`
`,(0,c.jsx)(n.h1,{id:`isnull`,children:(0,c.jsx)(n.code,{children:`isNull`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một chiêu thức thẩm định hết mực khắt khe, duy chỉ theo dấu nhắm thẳng vào duy nhất hai định mục đó là thông số `,(0,c.jsx)(n.code,{children:`null`}),` hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Thoát ly hẳn hoàn toàn ra khỏi cách phủ định falsy phổ cập đi kèm như kiểu `,(0,c.jsx)(n.code,{children:`!value`}),` (có thể vô tình bắt nhầm cả con số `,(0,c.jsx)(n.code,{children:`0`}),`, dải xâu chuỗi rỗng thênh thang `,(0,c.jsx)(n.code,{children:`''`}),`, hay ngay cả boolean lật ngược `,(0,c.jsx)(n.code,{children:`false`}),`), hàm logic đơn độc này sẽ nhẹ nhàng lánh sang mọi thứ tạp nham đó và chiếu thẳng cốt lỗi vào một vùng không chứa bất kì cái gì cả.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Giá trị bất luận loại nào được bệ lên bàn mổ soi thử độ tồn tại.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Gõ thông điệp `,(0,c.jsx)(n.code,{children:`true`}),` bất cứ kì khoảnh khắc nào đối diện bằng nhãn trúng tâm phác hoạ `,(0,c.jsx)(n.code,{children:`null`}),` hay mã `,(0,c.jsx)(n.code,{children:`undefined`}),`. Trợ thủ siêu phàm này cùng đút túi chức năng bộ bảo vệ type guard TypeScript để cắt chặt giới hạn ép khuôn theo cấu kiện `,(0,c.jsx)(n.code,{children:`Undefined`}),` (`,(0,c.jsx)(n.code,{children:`null | undefined`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Cạm bẫy giá trị falsy khác vẫn ra kết quả false
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};