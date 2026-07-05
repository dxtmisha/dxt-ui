import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/rules - Quy tắc hệ thống và Hàm trợ giúp`}),`
`,(0,c.jsx)(n.h1,{id:`quy-tắc-hệ-thống-rules`,children:`Quy tắc hệ thống (Rules)`}),`
`,(0,c.jsxs)(n.p,{children:[`Thư viện `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),` cung cấp các hàm hỗ trợ cấp thấp để kiểm tra kiểu dữ liệu, duyệt cấu trúc dữ liệu dạng cây (Sass map), xử lý chuỗi và trích xuất bộ chọn (selectors).`]}),`
`,(0,c.jsx)(n.h2,{id:`hàm-trợ-giúp`,children:`Hàm trợ giúp`}),`
`,(0,c.jsx)(n.h3,{id:`thuộc-tính-css--selector`,children:`Thuộc tính CSS & Selector`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isCustomVar($value): Boolean`}),` — Kiểm tra xem một giá trị có được định dạng dưới dạng CSS Custom Property hay không (ví dụ: bắt đầu bằng `,(0,c.jsx)(n.code,{children:`var(`}),` và kết thúc bằng `,(0,c.jsx)(n.code,{children:`)`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstSelector($selector: &): String`}),` — Trích xuất tên của bộ chọn (selector) đơn giản đầu tiên từ ngữ cảnh lồng nhau hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`bản-đồ--dữ-liệu-sass-maps`,children:`Bản đồ & Dữ liệu (Sass Maps)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMapItem($map, $index, $default: null): Any`}),` — Duyệt đệ quy qua một cấu trúc bản đồ lồng nhau bằng danh sách các khóa hoặc lấy giá trị bằng một khóa duy nhất. Trả về `,(0,c.jsx)(n.code,{children:`$default`}),` nếu không tìm thấy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMapByIndex($map, $index, $default: null): Any`}),` — Lấy trực tiếp giá trị từ bản đồ bằng khóa của nó, trả về `,(0,c.jsx)(n.code,{children:`$default`}),` nếu khóa không tồn tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setMapItem($map, $index, $value): Map`}),` — Hợp nhất hoặc thiết lập một cặp khóa-giá trị trong bản đồ và trả về bản đồ đã cập nhật.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xử-lý-chuỗi`,children:`Xử lý Chuỗi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`strToList($value, $separator: '.'): List`}),` — Tách một chuỗi thành danh sách các chuỗi con bằng ký tự phân tách được chỉ định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`strReplace($value, $pattern, $replacement): String`}),` — Thay thế đệ quy tất cả các lần xuất hiện của một chuỗi tìm kiếm bằng chuỗi thay thế trong chuỗi đích.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};