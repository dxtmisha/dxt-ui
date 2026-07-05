import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/dimension - Kích thước và tỷ lệ`}),`
`,(0,c.jsx)(n.h1,{id:`hệ-thống-kích-thước`,children:`Hệ thống kích thước`}),`
`,(0,c.jsx)(n.p,{children:`Thư viện cung cấp các mixin và function để quản lý kích thước, tỷ lệ và tỷ lệ khung hình sử dụng các biến CSS.`}),`
`,(0,c.jsx)(n.h2,{id:`các-function`,children:`Các Function`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getWidthByRatio($value: String): String`}),` — Trả về chiều rộng từ chuỗi tỷ lệ khung hình (ví dụ: '16/9' -> 16).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHeightByRatio($value: String): String`}),` — Trả về chiều cao từ chuỗi tỷ lệ khung hình.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-mixin`,children:`Các Mixin`}),`
`,(0,c.jsx)(n.h3,{id:`kích-thước-cơ-bản`,children:`Kích thước cơ bản`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width($value: String | Number)`}),` — Thiết lập thuộc tính `,(0,c.jsx)(n.code,{children:`width`}),` và biến `,(0,c.jsx)(n.code,{children:`--sys-width`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`height($value: String | Number)`}),` — Thiết lập thuộc tính `,(0,c.jsx)(n.code,{children:`height`}),` và biến `,(0,c.jsx)(n.code,{children:`--sys-height`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`widthBasis($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(n.code,{children:`width`}),`, `,(0,c.jsx)(n.code,{children:`flex-basis`}),`, và giới hạn `,(0,c.jsx)(n.code,{children:`max-width`}),` thành 100%.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`heightBasis($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(n.code,{children:`height`}),`, `,(0,c.jsx)(n.code,{children:`flex-basis`}),`, và giới hạn `,(0,c.jsx)(n.code,{children:`max-height`}),` thành 100%.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kích-thước-đáp-ứng-viewport`,children:`Kích thước đáp ứng (Viewport)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`widthDevice($value: String | Number)`}),` — Thiết lập chiều rộng theo đơn vị viewport động (`,(0,c.jsx)(n.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`heightDevice($value: String | Number)`}),` — Thiết lập chiều cao theo đơn vị viewport động (`,(0,c.jsx)(n.code,{children:`dvh`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxWidthDevice($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(n.code,{children:`max-width`}),` theo đơn vị viewport động (`,(0,c.jsx)(n.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maxHeightDevice($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(n.code,{children:`max-height`}),` theo đơn vị viewport động (`,(0,c.jsx)(n.code,{children:`dvh`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tỷ-lệ-khung-hình-và-hình-dạng`,children:`Tỷ lệ khung hình và Hình dạng`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatio($value: String | Number)`}),` — Thiết lập thuộc tính `,(0,c.jsx)(n.code,{children:`aspect-ratio`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatioWidth($value: String | Number)`}),` — Bí danh của mixin `,(0,c.jsx)(n.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`aspectRatioHeight($value: String | Number)`}),` — Bí danh của mixin `,(0,c.jsx)(n.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`squared($value: String | Number)`}),` — Áp dụng `,(0,c.jsx)(n.code,{children:`widthBasis`}),` và thiết lập `,(0,c.jsx)(n.code,{children:`aspect-ratio: 1/1`}),` để tạo hình vuông.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`circle($value: String | Number)`}),` — Áp dụng mixin `,(0,c.jsx)(n.code,{children:`squared`}),` và thiết lập `,(0,c.jsx)(n.code,{children:`border-radius: 100%`}),` để tạo hình tròn.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};