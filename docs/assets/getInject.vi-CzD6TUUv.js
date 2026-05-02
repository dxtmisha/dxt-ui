import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/getInject - Lấy giá trị được inject`}),`
`,(0,c.jsx)(n.h1,{id:`getinject`,children:(0,c.jsx)(n.code,{children:`getInject`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích dùng để lấy an toàn giá trị được inject theo tên từ instance Vue hiện tại. Nếu không có instance component đang hoạt động hoặc giá trị chưa được cung cấp, hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của khóa inject.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T | undefined`}),` — Giá trị được inject nếu tồn tại, ngược lại trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Gọi `,(0,c.jsx)(n.code,{children:`getInject<string>('theme')`}),` trong `,(0,c.jsx)(n.code,{children:`setup()`}),` để lấy giá trị đã được `,(0,c.jsx)(n.code,{children:`provide`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nếu key không tồn tại hoặc không có component instance hiện tại, kết quả sẽ là `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};