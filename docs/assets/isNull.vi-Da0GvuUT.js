import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function l(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/isNull - Kiểm định null hoặc undefined"}),`
`,n.jsx(e.h1,{id:"isnull",children:n.jsx(e.code,{children:"isNull"})}),`
`,n.jsxs(e.p,{children:["Một chiêu thức thẩm định hết mực khắt khe, duy chỉ theo dấu nhắm thẳng vào duy nhất hai định mục đó là thông số ",n.jsx(e.code,{children:"null"})," hoặc ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsxs(e.p,{children:["Thoát ly hẳn hoàn toàn ra khỏi cách phủ định falsy phổ cập đi kèm như kiểu ",n.jsx(e.code,{children:"!value"})," (có thể vô tình bắt nhầm cả con số ",n.jsx(e.code,{children:"0"}),", dải xâu chuỗi rỗng thênh thang ",n.jsx(e.code,{children:"''"}),", hay ngay cả boolean lật ngược ",n.jsx(e.code,{children:"false"}),"), hàm logic đơn độc này sẽ nhẹ nhàng lánh sang mọi thứ tạp nham đó và chiếu thẳng cốt lỗi vào một vùng không chứa bất kì cái gì cả."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — Giá trị bất luận loại nào được bệ lên bàn mổ soi thử độ tồn tại."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"boolean"})," — Gõ thông điệp ",n.jsx(e.code,{children:"true"})," bất cứ kì khoảnh khắc nào đối diện bằng nhãn trúng tâm phác hoạ ",n.jsx(e.code,{children:"null"})," hay mã ",n.jsx(e.code,{children:"undefined"}),". Trợ thủ siêu phàm này cùng đút túi chức năng bộ bảo vệ type guard TypeScript để cắt chặt giới hạn ép khuôn theo cấu kiện ",n.jsx(e.code,{children:"Undefined"})," (",n.jsx(e.code,{children:"null | undefined"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isNull } from '@dxtmisha/functional-basic'

console.log(isNull(null)) // true
console.log(isNull(undefined)) // true

// Cạm bẫy giá trị falsy khác vẫn ra kết quả false
console.log(isNull(0)) // false
console.log(isNull('')) // false
console.log(isNull(false)) // false
`})})]})}function a(c={}){const{wrapper:e}={...h(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(l,{...c})}):l(c)}export{a as default};
