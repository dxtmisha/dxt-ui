import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const c={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/isSelected - Kiểm tra dữ liệu được lựa chọn"}),`
`,n.jsx(c.h1,{id:"isselected",children:n.jsx(c.code,{children:"isSelected"})}),`
`,n.jsxs(c.p,{children:["Một hệ thống tiện ích chuyên dùng đa nhiệm có trách nhiệm tra cứu cẩn thận xem một giá trị đã cấp xuất hiện có chuẩn xác trùng khớp với tiêu chí lựa chọn (",n.jsx(c.code,{children:"selected"}),") đã đặt ra hay không. Hàm này liên hoạt thông minh chạy nhiều sách lược giám kiểm phụ thuộc chủ yếu vào thể trạng định danh tham số gốc rễ của đích đến:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kháng cự chống độc:"})," Nếu mồi thử thách (",n.jsx(c.code,{children:"value"}),") trống rỗng mang mã ",n.jsx(c.code,{children:"null"})," hoặc ",n.jsx(c.code,{children:"undefined"}),", bộ hàm lập tức đóng băng chốt hạ đáp số gãy gọn ",n.jsx(c.code,{children:"false"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"So sánh nhóm mảng:"})," Trong bối cảnh thông số đầu đạn ",n.jsx(c.code,{children:"selected"})," rải thảm là tập hợp danh sách mảng ",n.jsx(c.code,{children:"[]"}),", luồng điện sẽ tự động khởi tạo lệnh chà xát ",n.jsx(c.code,{children:".includes(value)"})," bới tung mảng để kiếm mồi nhắm trùng gốc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Độ chính xác chuyển hóa chữ số:"})," Trong trường điện từ khi mà cả đối phương kiểm và mẫu vật (",n.jsx(c.code,{children:"value"})," lẫn ",n.jsx(c.code,{children:"selected"}),") gián tiếp hội tủ đủ yếu tố đặc thù để ép làm cấu trúc con số thuần (được bảo vệ thông qua hàm ",n.jsx(c.code,{children:"isNumber()"}),"), kịch bản script sẽ tự gọt rũa vỏ bọc String và đồng hoá chúng làm bản mô phỏng Số chuẩn mực (VD: gỡ rối ",n.jsx(c.code,{children:"'5'"})," trở nên đồng dạng tuyệt đối cùng số ",n.jsx(c.code,{children:"5"})," chân phương)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chốt hẻm sau cùng:"})," Bế tắc trước vạn rào kẽm trên, máy chủ ép buộc trả về hình thái soi rọi trực tiếp đối chiếu qua cân bằng ",n.jsx(c.code,{children:"value === selected"}),"."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: T"})," — Mục đơn giá trị cốt lõi đệ lên đợi xác thực ngắm bắn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"selected: T | T[] | S"})," — Tấm bia đỡ đạn đóng vai nguyên lý so sánh chủ lực để đối thoại. Dữ kiện có thể nằm ngửa ở dạng đơn lẻ hoặc gói gọn thành băng đạn danh sách liên hồi (mảng array)."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
`,n.jsx(c.code,{children:"boolean"})," — In dấu ra ",n.jsx(c.code,{children:"true"})," nương theo điều kiện dữ kiện đầu vào đồng loã trót lọt với chốt đích cài cắm, nảy số ",n.jsx(c.code,{children:"false"})," trái ngang."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { isSelected } from '@dxtmisha/functional-basic'

// Quét đối chất cô lập 
console.log(isSelected('apple', 'apple')) // true
console.log(isSelected('apple', 'banana')) // false

// Nã đạn đọ đối sánh với vòng lặp băng đạn nhóm Mảng
console.log(isSelected(2, [1, 2, 3])) // true
console.log(isSelected('dog', ['cat', 'mouse'])) // false

// Bản kiểm siêu thông minh gỡ lớp vỏ dạng chữ hoá đổi về số (string vs number)
console.log(isSelected('5', 5)) // true

// Sâu bùn hố bom
console.log(isSelected(null, 1)) // false
`})})]})}function m(e={}){const{wrapper:c}={...h(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
