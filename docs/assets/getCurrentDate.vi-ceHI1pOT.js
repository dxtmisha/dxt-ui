import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getCurrentDate - Lấy ngày hiện tại`}),`
`,(0,c.jsx)(t.h1,{id:`getcurrentdate`,children:(0,c.jsx)(t.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về ngày hiện tại theo định dạng được chỉ định. Hàm này là một wrapper bao quanh lớp `,(0,c.jsx)(t.code,{children:`Datetime`}),` và cho phép bạn nhanh chóng lấy chuỗi thời gian hiện tại đã được định dạng.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cảnh báo (SSR):`}),` Việc sử dụng hàm này để render trong SSR có thể dẫn đến lỗi hydration mismatch vì thời gian hoặc múi giờ trên máy chủ có thể khác với thời gian trên máy khách. Khuyến khích chỉ sử dụng hàm này bên trong các hook phía máy khách (ví dụ: `,(0,c.jsx)(t.code,{children:`onMounted`}),` trong Vue hoặc `,(0,c.jsx)(t.code,{children:`useEffect`}),` trong React).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`format: GeoDate`}),` — loại định dạng ngày đầu ra (mặc định là `,(0,c.jsx)(t.code,{children:`'datetime'`}),`). Hỗ trợ các giá trị: `,(0,c.jsx)(t.code,{children:`'date'`}),`, `,(0,c.jsx)(t.code,{children:`'time'`}),`, `,(0,c.jsx)(t.code,{children:`'datetime'`}),`, `,(0,c.jsx)(t.code,{children:`'full'`}),` và các giá trị khác.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Ngày hiện tại dưới dạng chuỗi.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Định dạng chuẩn (datetime)
const now = getCurrentDate()
// Kết quả: "2024-03-15 14:30"

// Chỉ ngày
const date = getCurrentDate('date')
// Kết quả: "2024-03-15"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};