import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useCookieRef - Quản lý Cookie`}),`
`,(0,c.jsx)(t.h1,{id:`usecookieref`,children:(0,c.jsx)(t.code,{children:`useCookieRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một composable để làm việc với Cookie trình duyệt. Nó cho phép tạo các biến phản ứng tự động đồng bộ hóa với Cookie. Ngoài ra, nó cũng hỗ trợ đồng bộ hóa giữa các tab trình duyệt thông qua `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên cookie.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: T | string | (() => (T | string))`}),` — Giá trị mặc định. Có thể là một giá trị tĩnh hoặc một hàm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: CookieOptions`}),` — Các tham số bổ sung để quản lý cookie (expires, path, domain, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Trả về (`,(0,c.jsx)(t.code,{children:`Ref<T | string | undefined>`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Một tham chiếu phản ứng đến giá trị trong cookie.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useCookieRef } from '@dxtmisha/functional'

// Tạo tham chiếu đến cookie 'theme' với giá trị mặc định là 'light'
const theme = useCookieRef('theme', 'light', { age: 365 * 24 * 60 * 60 })

// Cập nhật giá trị (tự động lưu vào cookie)
theme.value = 'dark'

// Giá trị sẽ được đồng bộ hóa trên tất cả các tab trình duyệt trong thời gian thực
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};