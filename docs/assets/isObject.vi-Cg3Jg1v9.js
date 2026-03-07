import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/isObject - Khảo sát bản chất đối tượng"}),`
`,n.jsx(t.h1,{id:"isobject",children:n.jsx(t.code,{children:"isObject"})}),`
`,n.jsx(t.p,{children:"Công cụ tiện nghi cấp cơ sở rèn đúc chuyên cho nhu cầu tra soát nhanh gọn và an toàn để chốt chắc chắn một biến truyền vào có thực thể thuộc dòng tộc đối tượng object thuần hay không."}),`
`,n.jsxs(t.p,{children:["Vì đặc thù lạ lùng của mã JavaScript, câu lệnh ",n.jsx(t.code,{children:"typeof null"})," luôn giở mặt báo ra chữ ",n.jsx(t.code,{children:"'object'"}),", đây vốn dĩ luôn là nguyên nhân chôn giấu bao rủi ro trục trặc mờ ám. Vượt qua yếu huyệt này, hàm kiểm tra bật lên màng bảo mật rà quét truthy gắt gao (",n.jsx(t.code,{children:"Boolean(value)"}),") nhằm triệt tiêu thẳng cánh cái nhãn ",n.jsx(t.code,{children:"null"})," dối trá và sau đó bắt đầu điều tra tính xác định object nguyên nghĩa. Xin chú ý cặn kẽ vì các mảng (",n.jsx(t.code,{children:"[]"}),") rễ gốc trong Javascript mặc định coi là một dạng đối tượng phái sinh nên thử nghiệm lên tính năng này thì vẫn vạch ra ",n.jsx(t.code,{children:"true"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: T"})," — Giá trị đưa tới thực nghiệm khảo lược thông số."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"boolean"})," — Phát nhượng hồi thư ",n.jsx(t.code,{children:"true"})," nếu thể xác định đúng khớp đối tượng hoặc mảng liên kết (arrays). Đáp số lại chỉ toàn ",n.jsx(t.code,{children:"false"})," văng vào mặt nhóm tham số kiểu vô ngã ",n.jsx(t.code,{children:"null"}),", đơn nguyên primitives, hay khối định luật functions. Cùng vận hành làm bức thành rào cản Type Guard khoanh thu vùng định loại xuống ",n.jsx(t.code,{children:"Record<any, any>"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { isObject } from '@dxtmisha/functional-basic'

console.log(isObject({ id: 1 })) // true
console.log(isObject([1, 2, 3])) // true (Các mảng danh sách đều có chung bản chất là đối tượng ẩn sau Javascript!)

// Thanh trừng triệt để ma trận cạm bẫy JS
console.log(isObject(null)) // false
console.log(isObject(100)) // false
console.log(isObject('string')) // false
`})})]})}function d(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{d as default};
