import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/computedByLanguage - Thuộc tính computed theo ngôn ngữ`}),`
`,(0,c.jsx)(n.h1,{id:`computedbylanguage`,children:(0,c.jsx)(n.code,{children:`computedByLanguage`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một thuộc tính computed phản ứng tự động tính toán lại khi ngôn ngữ hiện tại hoặc các phụ thuộc bên trong getter thay đổi.`}),`
`,(0,c.jsx)(n.h3,{id:`cách-thức-hoạt-động`,children:`Cách thức hoạt động`}),`
`,(0,c.jsx)(n.p,{children:`Hàm thực hiện các kiểm tra theo thứ tự sau:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra ngôn ngữ`}),`: Xác minh rằng ngôn ngữ đã được thiết lập thông qua `,(0,c.jsx)(n.code,{children:`GeoRef.get().value`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra điều kiện`}),`: Nếu tham số `,(0,c.jsx)(n.code,{children:`conditions`}),` được cung cấp, nó sẽ được gọi để kiểm tra bổ sung (ví dụ: kiểm tra quyền truy cập hoặc trạng thái tải dữ liệu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Getter chính`}),`: Nếu cả hai kiểm tra trên đều vượt qua, `,(0,c.jsx)(n.code,{children:`getter`}),` sẽ được gọi. Nếu nó trả về một giá trị (không phải `,(0,c.jsx)(n.code,{children:`undefined`}),`), giá trị đó sẽ trở thành kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tùy chọn dự phòng`}),`: Nếu bất kỳ kiểm tra nào thất bại hoặc `,(0,c.jsx)(n.code,{children:`getter`}),` trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`, `,(0,c.jsx)(n.code,{children:`getterNone`}),` sẽ được thực thi/trả về.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: ComputedGetter<R>`}),` — Logic chính để lấy giá trị. Chỉ được gọi nếu ngôn ngữ đã thiết lập và các điều kiện được thỏa mãn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getterNone: R | (() => R)`}),` — Giá trị dự phòng hoặc hàm trả về giá trị đó. Đóng vai trò là "Phương án B". Mặc định: `,(0,c.jsx)(n.code,{children:`() => undefined`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: () => boolean`}),` — Một hàm điều kiện. Đóng vai trò là "người gác cổng" (gatekeeper): nếu nó trả về `,(0,c.jsx)(n.code,{children:`false`}),`, `,(0,c.jsx)(n.code,{children:`getter`}),` chính thậm chí sẽ không được kích hoạt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`debugOptions?: DebuggerOptions`}),` — Tùy chọn dùng để gỡ lỗi các phép tính phản ứng, được hỗ trợ bởi Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R>`}),` — Thuộc tính computed phản ứng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Sử dụng cơ bản
const label = computedByLanguage(() => translateKey('hello'))

// Với giá trị dự phòng
const title = computedByLanguage(
  () => translateKey('page.title'),
  () => 'Untitled'
)

// Với điều kiện bổ sung
const isReady = ref(true)
const content = computedByLanguage(
  () => translateKey('content'),
  () => 'Loading...',
  () => isReady.value
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};