import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useFormattersRef - Định dạng danh sách`}),`
`,(0,c.jsx)(n.h1,{id:`useformattersref`,children:(0,c.jsx)(n.code,{children:`useFormattersRef`})}),`
`,(0,c.jsx)(n.p,{children:`Một bộ composable để định dạng phản hồi danh sách dữ liệu dựa trên các quy tắc được chỉ định cho từng thuộc tính.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefType<List>`}),` — danh sách dữ liệu nguồn (Ref hoặc ComputedRef).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — cài đặt định dạng cho từng thuộc tính:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: FormattersType`}),` — loại định dạng (`,(0,c.jsx)(n.code,{children:`currency`}),`, `,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`name`}),`, `,(0,c.jsx)(n.code,{children:`number`}),`, `,(0,c.jsx)(n.code,{children:`plural`}),`, `,(0,c.jsx)(n.code,{children:`unit`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: object`}),` — cài đặt bổ sung cho loại định dạng cụ thể (ví dụ: mã tiền tệ, định dạng ngày tháng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: function`}),` — hàm tùy chỉnh để chuyển đổi giá trị.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listFormat: ComputedRef<FormattersReturn<List, Options>>`}),` — danh sách dữ liệu đã được định dạng. Đối với mỗi thuộc tính được chỉ định trong `,(0,c.jsx)(n.code,{children:`options`}),`, một trường `,(0,c.jsx)(n.code,{children:`{property}Format`}),` tương ứng sẽ được thêm vào các mục.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — kiểu tùy chọn định dạng cho từng thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersListProp`}),` — kiểu danh sách nguồn (có thể là một mảng hoặc một mục duy nhất).`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`kiến-trúc-computed-lazy-getter-động`,children:[`Kiến trúc: `,(0,c.jsx)(n.code,{children:`computed`}),` Lazy (Getter động)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Composable này trả về `,(0,c.jsx)(n.code,{children:`listFormat`}),` dưới dạng native JavaScript getter.
Điều này cho phép bạn gọi `,(0,c.jsx)(n.code,{children:`useFormattersRef()`}),` `,(0,c.jsx)(n.strong,{children:`bên ngoài vòng đời của component Vue`}),` (ví dụ: toàn cục hoặc trong các store).
Đối tượng `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` được tạo và lưu vào bộ nhớ đệm bởi Vue trong lần đầu tiên thuộc tính được truy cập trong quá trình destructuring:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// ComputedRef được tạo trong quá trình destructuring ở setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Quan trọng`}),`: Tránh truy cập getter "thông qua dấu chấm" nhiều lần (ví dụ: `,(0,c.jsx)(n.code,{children:`result.listFormat`}),`). Luôn phân rã (destructure) kết quả một lần ở cấp độ `,(0,c.jsx)(n.code,{children:`setup`}),` để đảm bảo chỉ có một phiên bản của thuộc tính `,(0,c.jsx)(n.code,{children:`computed`}),` được tạo ra.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useFormattersRef } from '@dxtmisha/functional'
import { FormattersType } from '@dxtmisha/functional-basic'

const items = ref([
  { id: 1, price: 100, firstName: 'Hùng', lastName: 'Nguyễn' },
  { id: 2, price: 250, firstName: 'Lan', lastName: 'Trần' }
])

const { listFormat } = useFormattersRef(items, {
  price: { type: FormattersType.currency },
  name: { type: FormattersType.name }
})

// listFormat.value sẽ chứa:
// [
//   { ..., priceFormat: '100,00 ₫', nameFormat: 'Nguyễn Hùng' },
//   { ..., priceFormat: '250,00 ₫', nameFormat: 'Trần Lan' }
// ]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};