import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/computedAsync - Thuộc tính computed bất đồng bộ`}),`
`,(0,c.jsx)(t.h1,{id:`computedasync`,children:(0,c.jsx)(t.code,{children:`computedAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thuộc tính computed có thể xử lý các getter bất đồng bộ. Khác với `,(0,c.jsx)(t.code,{children:`computed`}),` thông thường của Vue, `,(0,c.jsx)(t.code,{children:`computedAsync`}),` cho phép truyền vào hàm bất đồng bộ, hàm đồng bộ, hoặc giá trị trực tiếp — kết quả sẽ tự động được giải quyết và trở thành một computed ref phản ứng. Khởi tạo ở chế độ lazy (lười biếng) và chỉ xảy ra khi truy cập thuộc tính lần đầu tiên.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Chỉ lần tính toán hiện tại được cập nhật kết quả; kết quả và lỗi đến muộn từ các lần trước bị bỏ qua. Watcher thuộc về phạm vi hiệu ứng nơi thuộc tính được tạo, kể cả khi lần đọc đầu tiên xảy ra sau đó. Khi phạm vi dừng, các kết quả đang chờ không còn được áp dụng. Trên máy chủ, chỉ trả về `,(0,c.jsx)(t.code,{children:`initialState`}),` mà không thực thi getter.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Khi không truyền `,(0,c.jsx)(t.code,{children:`ignore`}),`, kết quả `,(0,c.jsx)(t.code,{children:`undefined`}),` sẽ xóa dữ liệu trước đó. Truyền rõ ràng `,(0,c.jsx)(t.code,{children:`undefined`}),` ở đối số thứ ba để giữ dữ liệu cũ khi nhận kết quả này. Lỗi từ getter hiện tại sẽ xóa dữ liệu và được chuyển tới `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` với nhóm `,(0,c.jsx)(t.code,{children:`functional`}),` và mã `,(0,c.jsx)(t.code,{children:`computed-async`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: (() => Promise<R>) | (() => R) | R`}),` — Hàm bất đồng bộ, hàm đồng bộ, hoặc giá trị trực tiếp dùng để tính toán kết quả.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initialState?: (() => R) | R`}),` — Giá trị ban đầu hoặc hàm được gọi một lần khi tạo thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignore?: R`}),` — Giá trị được truyền rõ ràng sẽ không được áp dụng vào kết quả. Nếu bỏ qua đối số này, không loại trừ giá trị nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`debugOptions?: DebuggerOptions`}),` — Tùy chọn dùng để gỡ lỗi các phép tính phản ứng, được hỗ trợ bởi Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R | undefined>`}),` — Một computed ref phản ứng chứa kết quả đã được giải quyết từ getter.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedAsync } from '@dxtmisha/functional'

// Trạng thái ban đầu
const status = computedAsync(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'online'
}, 'offline')
// status.value là 'offline' ngay lập tức, và 'online' sau 1 giây

// Getter bất đồng bộ
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Getter đồng bộ
const label = computedAsync(() => 'Hello, World!')

// Giá trị trực tiếp
const count = computedAsync(42)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};