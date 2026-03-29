import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isSelected - Kiểm tra dữ liệu được lựa chọn`}),`
`,(0,c.jsx)(n.h1,{id:`isselected`,children:(0,c.jsx)(n.code,{children:`isSelected`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hệ thống tiện ích chuyên dùng đa nhiệm có trách nhiệm tra cứu cẩn thận xem một giá trị đã cấp xuất hiện có chuẩn xác trùng khớp với tiêu chí lựa chọn (`,(0,c.jsx)(n.code,{children:`selected`}),`) đã đặt ra hay không. Hàm này liên hoạt thông minh chạy nhiều sách lược giám kiểm phụ thuộc chủ yếu vào thể trạng định danh tham số gốc rễ của đích đến:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kháng cự chống độc:`}),` Nếu mồi thử thách (`,(0,c.jsx)(n.code,{children:`value`}),`) trống rỗng mang mã `,(0,c.jsx)(n.code,{children:`null`}),` hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),`, bộ hàm lập tức đóng băng chốt hạ đáp số gãy gọn `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`So sánh nhóm mảng:`}),` Trong bối cảnh thông số đầu đạn `,(0,c.jsx)(n.code,{children:`selected`}),` rải thảm là tập hợp danh sách mảng `,(0,c.jsx)(n.code,{children:`[]`}),`, luồng điện sẽ tự động khởi tạo lệnh chà xát `,(0,c.jsx)(n.code,{children:`.includes(value)`}),` bới tung mảng để kiếm mồi nhắm trùng gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Độ chính xác chuyển hóa chữ số:`}),` Trong trường điện từ khi mà cả đối phương kiểm và mẫu vật (`,(0,c.jsx)(n.code,{children:`value`}),` lẫn `,(0,c.jsx)(n.code,{children:`selected`}),`) gián tiếp hội tủ đủ yếu tố đặc thù để ép làm cấu trúc con số thuần (được bảo vệ thông qua hàm `,(0,c.jsx)(n.code,{children:`isNumber()`}),`), kịch bản script sẽ tự gọt rũa vỏ bọc String và đồng hoá chúng làm bản mô phỏng Số chuẩn mực (VD: gỡ rối `,(0,c.jsx)(n.code,{children:`'5'`}),` trở nên đồng dạng tuyệt đối cùng số `,(0,c.jsx)(n.code,{children:`5`}),` chân phương).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chốt hẻm sau cùng:`}),` Bế tắc trước vạn rào kẽm trên, máy chủ ép buộc trả về hình thái soi rọi trực tiếp đối chiếu qua cân bằng `,(0,c.jsx)(n.code,{children:`value === selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Mục đơn giá trị cốt lõi đệ lên đợi xác thực ngắm bắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: T | T[] | S`}),` — Tấm bia đỡ đạn đóng vai nguyên lý so sánh chủ lực để đối thoại. Dữ kiện có thể nằm ngửa ở dạng đơn lẻ hoặc gói gọn thành băng đạn danh sách liên hồi (mảng array).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — In dấu ra `,(0,c.jsx)(n.code,{children:`true`}),` nương theo điều kiện dữ kiện đầu vào đồng loã trót lọt với chốt đích cài cắm, nảy số `,(0,c.jsx)(n.code,{children:`false`}),` trái ngang.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isSelected } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};