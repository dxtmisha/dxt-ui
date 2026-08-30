import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/rules - Quy tắc hệ thống và Hàm trợ giúp`}),`
`,(0,c.jsx)(t.h1,{id:`quy-tắc-hệ-thống-rules`,children:`Quy tắc hệ thống (Rules)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư viện `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` cung cấp các hàm hỗ trợ cấp thấp để kiểm tra kiểu dữ liệu, duyệt cấu trúc dữ liệu dạng cây (Sass map), xử lý chuỗi và trích xuất bộ chọn (selectors).`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-trợ-giúp`,children:`Hàm trợ giúp`}),`
`,(0,c.jsx)(t.h3,{id:`thuộc-tính-css--selector`,children:`Thuộc tính CSS & Selector`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCustomVar($value): Boolean`}),` — Kiểm tra xem một giá trị có được định dạng dưới dạng CSS Custom Property hay không (ví dụ: bắt đầu bằng `,(0,c.jsx)(t.code,{children:`var(`}),` và kết thúc bằng `,(0,c.jsx)(t.code,{children:`)`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstSelector($selector: &): String`}),` — Trích xuất tên của bộ chọn (selector) đơn giản đầu tiên từ ngữ cảnh lồng nhau hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`bản-đồ--dữ-liệu-sass-maps`,children:`Bản đồ & Dữ liệu (Sass Maps)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMapItem($map, $index, $default: null): Any`}),` — Duyệt đệ quy qua một cấu trúc bản đồ lồng nhau bằng danh sách các khóa hoặc lấy giá trị bằng một khóa duy nhất. Trả về `,(0,c.jsx)(t.code,{children:`$default`}),` nếu không tìm thấy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMapByIndex($map, $index, $default: null): Any`}),` — Lấy trực tiếp giá trị từ bản đồ bằng khóa của nó, trả về `,(0,c.jsx)(t.code,{children:`$default`}),` nếu khóa không tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMapItem($map, $index, $value): Map`}),` — Hợp nhất hoặc thiết lập một cặp khóa-giá trị trong bản đồ và trả về bản đồ đã cập nhật.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xử-lý-chuỗi`,children:`Xử lý Chuỗi`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strToList($value, $separator: '.'): List`}),` — Tách một chuỗi thành danh sách các chuỗi con bằng ký tự phân tách được chỉ định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`strReplace($value, $pattern, $replacement): String`}),` — Thay thế đệ quy tất cả các lần xuất hiện của một chuỗi tìm kiếm bằng chuỗi thay thế trong chuỗi đích.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};