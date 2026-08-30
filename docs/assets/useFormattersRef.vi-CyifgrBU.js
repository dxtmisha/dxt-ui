import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useFormattersRef - Định dạng danh sách`}),`
`,(0,c.jsx)(t.h1,{id:`useformattersref`,children:(0,c.jsx)(t.code,{children:`useFormattersRef`})}),`
`,(0,c.jsx)(t.p,{children:`Một bộ composable để định dạng phản hồi danh sách dữ liệu dựa trên các quy tắc được chỉ định cho từng thuộc tính.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefType<List>`}),` — danh sách dữ liệu nguồn (Ref hoặc ComputedRef).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: Options`}),` — cài đặt định dạng cho từng thuộc tính:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: FormattersType`}),` — loại định dạng (`,(0,c.jsx)(t.code,{children:`currency`}),`, `,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`name`}),`, `,(0,c.jsx)(t.code,{children:`number`}),`, `,(0,c.jsx)(t.code,{children:`plural`}),`, `,(0,c.jsx)(t.code,{children:`unit`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: object`}),` — cài đặt bổ sung cho loại định dạng cụ thể (ví dụ: mã tiền tệ, định dạng ngày tháng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: function`}),` — hàm tùy chỉnh để chuyển đổi giá trị.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listFormat: ComputedRef<FormattersReturn<List, Options>>`}),` — danh sách dữ liệu đã được định dạng. Đối với mỗi thuộc tính được chỉ định trong `,(0,c.jsx)(t.code,{children:`options`}),`, một trường `,(0,c.jsx)(t.code,{children:`{property}Format`}),` tương ứng sẽ được thêm vào các mục.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Options extends FormattersOptionsList`}),` — kiểu tùy chọn định dạng cho từng thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`List extends FormattersListProp`}),` — kiểu danh sách nguồn (có thể là một mảng hoặc một mục duy nhất).`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`kiến-trúc-computed-lazy-getter-động`,children:[`Kiến trúc: `,(0,c.jsx)(t.code,{children:`computed`}),` Lazy (Getter động)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Composable này trả về `,(0,c.jsx)(t.code,{children:`listFormat`}),` dưới dạng native JavaScript getter.
Điều này cho phép bạn gọi `,(0,c.jsx)(t.code,{children:`useFormattersRef()`}),` `,(0,c.jsx)(t.strong,{children:`bên ngoài vòng đời của component Vue`}),` (ví dụ: toàn cục hoặc trong các store).
Đối tượng `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` được tạo và lưu vào bộ nhớ đệm bởi Vue trong lần đầu tiên thuộc tính được truy cập trong quá trình destructuring:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// ComputedRef được tạo trong quá trình destructuring ở setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Quan trọng`}),`: Tránh truy cập getter "thông qua dấu chấm" nhiều lần (ví dụ: `,(0,c.jsx)(t.code,{children:`result.listFormat`}),`). Luôn phân rã (destructure) kết quả một lần ở cấp độ `,(0,c.jsx)(t.code,{children:`setup`}),` để đảm bảo chỉ có một phiên bản của thuộc tính `,(0,c.jsx)(t.code,{children:`computed`}),` được tạo ra.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};