import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/computedAsync - Thuộc tính computed bất đồng bộ`}),`
`,(0,c.jsx)(n.h1,{id:`computedasync`,children:(0,c.jsx)(n.code,{children:`computedAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một thuộc tính computed có thể xử lý các getter bất đồng bộ. Khác với `,(0,c.jsx)(n.code,{children:`computed`}),` thông thường của Vue, `,(0,c.jsx)(n.code,{children:`computedAsync`}),` cho phép truyền vào hàm bất đồng bộ, hàm đồng bộ, hoặc giá trị trực tiếp — kết quả sẽ tự động được giải quyết và trở thành một computed ref phản ứng. Khởi tạo ở chế độ lazy (lười biếng) và chỉ xảy ra khi truy cập thuộc tính lần đầu tiên.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: (() => Promise<R>) | (() => R) | R`}),` — Hàm bất đồng bộ, hàm đồng bộ, hoặc giá trị trực tiếp dùng để tính toán kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ignore?: R`}),` — Giá trị cần bỏ qua (sẽ không được thiết lập vào kết quả).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`debugOptions?: DebuggerOptions`}),` — Tùy chọn dùng để gỡ lỗi các phép tính phản ứng, được hỗ trợ bởi Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R | undefined>`}),` — Một computed ref phản ứng chứa kết quả đã được giải quyết từ getter.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedAsync } from '@dxtmisha/functional'

// Getter bất đồng bộ
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Getter đồng bộ
const label = computedAsync(() => 'Hello, World!')

// Giá trị trực tiếp
const count = computedAsync(42)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};