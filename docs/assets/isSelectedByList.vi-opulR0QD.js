import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/isSelectedByList - Kiểm tra lựa chọn theo danh sách"}),`
`,n.jsx(t.h1,{id:"isselectedbylist",children:n.jsx(t.code,{children:"isSelectedByList"})}),`
`,n.jsxs(t.p,{children:["Tác vụ phối khí vươn tầm nâng cấp sức mạnh cho hàm giám kiểm ",n.jsx(t.code,{children:"isSelected"})," cơ bản. Khả năng đặc biệt nhất của nó dùng để rà soát cẩn trọng nhằm khẳng định ",n.jsx(t.strong,{children:"mọi phần tử nội tại"})," đan xen bên trong một danh mục (",n.jsx(t.code,{children:"values"}),") đều ngoan ngoãn hoàn thành xuất sắc điều khoản tuyển binh (",n.jsx(t.code,{children:"selected"}),")."]}),`
`,n.jsxs(t.p,{children:["Trót lỡ ném vào tay chỉ vỏn vẹn đúng một kết hạt rời rạc phi tuyến mảng, hệ thống tự buông rèm thoái thác đẩy ngay công việc trở lại tay nhai nền móng ",n.jsx(t.code,{children:"isSelected"}),". Tuy vậy, màn kịch hay chỉ vỡ lở khi một dải mảng danh sách trút ào ạt vào khe ",n.jsx(t.code,{children:"values"}),". Ngay lập tức, hàm số sẽ thi triển tuyệt kỹ phòng tuyến chà xát ",n.jsx(t.code,{children:".every()"})," để ép cung, thu nạp thông tin chắn chắn 100% ",n.jsx(t.strong,{children:"từng binh lính bộ phận đơn vị bé nhỏ một"})," đều phải chiến thắng oanh liệt qua ngọn chông kiểm diệt cá nhân ",n.jsx(t.code,{children:"isSelected(item, selected)"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"values: T | T[]"})," — Một con cờ đơn tướng hoặc hẳn bầy mảng lính lác đan điền kẹp đội hình chờ dò la định mệnh."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"selected: T | T[]"})," — Phao tiêu đối chiếu mốc giới, được dùng làm bộ công cụ căn chỉnh chuẩn mực đối trọng (có thể là dòng mã chữ, định mức giá thành, hoặc kho chứa những tập tin quyền lực rào chuẩn)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"boolean"})," — Trao trả phiếu thắng ",n.jsx(t.code,{children:"true"})," với điều kiện duy nhất: tất thảy các binh phong biến thể rải rác đệ danh vào đều vượt rào điều kiện. Thiếu một tên, trượt liền lập tức."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Bức tường đồng chất lượng thắng thế triệt để cả danh sách khi so với 1 lõi tiêu chuẩn lẻ
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Tỏa sáng đăng quang mĩ mãn do cả tốp phần tử 'values' ung dung nương nằm gọn lỏn nội đô mảng 'selected'
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Sụp đổ tan tành. Do tội phạm 'date' ngoi mũi sủi bọt ra khỏi phạm trù vinh danh (mảng selected). Thuật toán .every() cắt thẻ false đuổi cổ. 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Một khi sài hao quẳng lẻ loi một hột tham số vào phễu values, nguyên hình tái lập lộ mặt nguyên gốc hoạt động y choang isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function g(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(h,{...e})}):h(e)}export{g as default};
