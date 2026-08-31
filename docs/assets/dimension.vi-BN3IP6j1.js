import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/dimension - Kích thước và tỷ lệ`}),`
`,(0,c.jsx)(t.h1,{id:`hệ-thống-kích-thước`,children:`Hệ thống kích thước`}),`
`,(0,c.jsx)(t.p,{children:`Thư viện cung cấp các mixin và function để quản lý kích thước, tỷ lệ và tỷ lệ khung hình sử dụng các biến CSS.`}),`
`,(0,c.jsx)(t.h2,{id:`các-function`,children:`Các Function`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getWidthByRatio($value: String): String`}),` — Trả về chiều rộng từ chuỗi tỷ lệ khung hình (ví dụ: '16/9' -> 16).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHeightByRatio($value: String): String`}),` — Trả về chiều cao từ chuỗi tỷ lệ khung hình.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-mixin`,children:`Các Mixin`}),`
`,(0,c.jsx)(t.h3,{id:`kích-thước-cơ-bản`,children:`Kích thước cơ bản`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width($value: String | Number)`}),` — Thiết lập thuộc tính `,(0,c.jsx)(t.code,{children:`width`}),` và biến `,(0,c.jsx)(t.code,{children:`--sys-width`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height($value: String | Number)`}),` — Thiết lập thuộc tính `,(0,c.jsx)(t.code,{children:`height`}),` và biến `,(0,c.jsx)(t.code,{children:`--sys-height`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`widthBasis($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(t.code,{children:`width`}),`, `,(0,c.jsx)(t.code,{children:`flex-basis`}),`, và giới hạn `,(0,c.jsx)(t.code,{children:`max-width`}),` thành 100%.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`heightBasis($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(t.code,{children:`height`}),`, `,(0,c.jsx)(t.code,{children:`flex-basis`}),`, và giới hạn `,(0,c.jsx)(t.code,{children:`max-height`}),` thành 100%.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kích-thước-đáp-ứng-viewport`,children:`Kích thước đáp ứng (Viewport)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`widthDevice($value: String | Number)`}),` — Thiết lập chiều rộng theo đơn vị viewport động (`,(0,c.jsx)(t.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`heightDevice($value: String | Number)`}),` — Thiết lập chiều cao theo đơn vị viewport động (`,(0,c.jsx)(t.code,{children:`dvh`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxWidthDevice($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(t.code,{children:`max-width`}),` theo đơn vị viewport động (`,(0,c.jsx)(t.code,{children:`dvw`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxHeightDevice($value: String | Number)`}),` — Thiết lập `,(0,c.jsx)(t.code,{children:`max-height`}),` theo đơn vị viewport động (`,(0,c.jsx)(t.code,{children:`dvh`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tỷ-lệ-khung-hình-và-hình-dạng`,children:`Tỷ lệ khung hình và Hình dạng`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatio($value: String | Number)`}),` — Thiết lập thuộc tính `,(0,c.jsx)(t.code,{children:`aspect-ratio`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatioWidth($value: String | Number)`}),` — Bí danh của mixin `,(0,c.jsx)(t.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aspectRatioHeight($value: String | Number)`}),` — Bí danh của mixin `,(0,c.jsx)(t.code,{children:`aspectRatio`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`squared($value: String | Number)`}),` — Áp dụng `,(0,c.jsx)(t.code,{children:`widthBasis`}),` và thiết lập `,(0,c.jsx)(t.code,{children:`aspect-ratio: 1/1`}),` để tạo hình vuông.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`circle($value: String | Number)`}),` — Áp dụng mixin `,(0,c.jsx)(t.code,{children:`squared`}),` và thiết lập `,(0,c.jsx)(t.code,{children:`border-radius: 100%`}),` để tạo hình tròn.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};