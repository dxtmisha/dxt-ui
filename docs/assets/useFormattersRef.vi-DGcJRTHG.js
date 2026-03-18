import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useFormattersRef - Định dạng danh sách"}),`
`,n.jsx(e.h1,{id:"useformattersref",children:n.jsx(e.code,{children:"useFormattersRef"})}),`
`,n.jsx(e.p,{children:"Một bộ composable để định dạng phản hồi danh sách dữ liệu dựa trên các quy tắc được chỉ định cho từng thuộc tính."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: RefType<List>"})," — danh sách dữ liệu nguồn (Ref hoặc ComputedRef)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options: Options"})," — cài đặt định dạng cho từng thuộc tính:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: FormattersType"})," — loại định dạng (",n.jsx(e.code,{children:"currency"}),", ",n.jsx(e.code,{children:"date"}),", ",n.jsx(e.code,{children:"name"}),", ",n.jsx(e.code,{children:"number"}),", ",n.jsx(e.code,{children:"plural"}),", ",n.jsx(e.code,{children:"unit"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: object"})," — cài đặt bổ sung cho loại định dạng cụ thể (ví dụ: mã tiền tệ, định dạng ngày tháng)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transformation?: function"})," — hàm tùy chỉnh để chuyển đổi giá trị."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listFormat: ComputedRef<FormattersReturn<List, Options>>"})," — danh sách dữ liệu đã được định dạng. Đối với mỗi thuộc tính được chỉ định trong ",n.jsx(e.code,{children:"options"}),", một trường ",n.jsx(e.code,{children:"{property}Format"})," tương ứng sẽ được thêm vào các mục."]}),`
`]}),`
`,n.jsx(e.h3,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Options extends FormattersOptionsList"})," — kiểu tùy chọn định dạng cho từng thuộc tính."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"List extends FormattersListProp"})," — kiểu danh sách nguồn (có thể là một mảng hoặc một mục duy nhất)."]}),`
`]}),`
`,n.jsxs(e.h2,{id:"kiến-trúc-computed-lazy-getter-động",children:["Kiến trúc: ",n.jsx(e.code,{children:"computed"})," Lazy (Getter động)"]}),`
`,n.jsxs(e.p,{children:["Composable này trả về ",n.jsx(e.code,{children:"listFormat"}),` dưới dạng native JavaScript getter.
Điều này cho phép bạn gọi `,n.jsx(e.code,{children:"useFormattersRef()"})," ",n.jsx(e.strong,{children:"bên ngoài vòng đời của component Vue"}),` (ví dụ: toàn cục hoặc trong các store).
Đối tượng `,n.jsx(e.code,{children:"ComputedRef"})," được tạo và lưu vào bộ nhớ đệm bởi Vue trong lần đầu tiên thuộc tính được truy cập trong quá trình destructuring:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ComputedRef được tạo trong quá trình destructuring ở setup()
const { listFormat } = useFormattersRef(items, { price: { type: FormattersType.currency } })
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Quan trọng"}),': Tránh truy cập getter "thông qua dấu chấm" nhiều lần (ví dụ: ',n.jsx(e.code,{children:"result.listFormat"}),"). Luôn phân rã (destructure) kết quả một lần ở cấp độ ",n.jsx(e.code,{children:"setup"})," để đảm bảo chỉ có một phiên bản của thuộc tính ",n.jsx(e.code,{children:"computed"})," được tạo ra."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function a(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{a as default};
