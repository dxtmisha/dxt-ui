import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Tạo Tài liệu (Wiki & IDE)`}),`
`,(0,c.jsx)(n.h1,{id:`hình-thành-tài-liệu-công-khai-và-hỗ-trợ-ide`,children:`Hình thành Tài liệu Công khai và Hỗ trợ IDE`}),`
`,(0,c.jsx)(n.p,{children:`Việc viết và duy trì tài liệu theo cách thủ công (Storybook, MDX, gợi ý IDE) cho một hệ thống thiết kế chứa hàng nghìn component và trạng thái là một công việc khổng lồ thường dẫn đến sự sai lệch giữa mã nguồn và tài liệu.`}),`
`,(0,c.jsxs)(n.p,{children:[`Package `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` tự động hóa hoàn toàn quy trình này bằng cách tạo ra các tài liệu trực tiếp từ siêu dữ liệu (metadata) của component.`]}),`
`,(0,c.jsx)(n.h2,{id:`tích-hợp-ide-designwikistorm`,children:`Tích hợp IDE (DesignWikiStorm)`}),`
`,(0,c.jsxs)(n.p,{children:[`Để đảm bảo trải nghiệm tốt nhất cho nhà phát triển khi sử dụng thư viện DXT UI trong các trình soạn thảo như IntelliJ IDEA hoặc WebStorm, package script sẽ tạo ra một file `,(0,c.jsx)(n.code,{children:`web-types.json`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`DesignWikiStorm thực hiện việc gì:`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích:`}),` Lớp này quét toàn bộ thư viện component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất Siêu dữ liệu:`}),` Nó trích xuất tất cả các thẻ HTML, props, sự kiện (emits), slots và CSS modifiers từ logic trừu tượng và các file `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định dạng:`}),` Script định dạng dữ liệu này theo lược đồ chuẩn Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả:`}),` Khi import DXT UI vào dự án, nhà phát triển ngay lập tức nhận được IntelliSense (tự động hoàn thành mã, gợi ý kiểu prop và tài liệu khi di chuột) ngay trong trình soạn thảo của họ mà không cần mở trình duyệt.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tài-liệu-tương-tác-designwiki`,children:`Tài liệu Tương tác (DesignWiki)`}),`
`,(0,c.jsx)(n.p,{children:`Ngoài việc hỗ trợ IDE, các script còn tự động hóa việc tạo tài liệu người dùng cho Storybook và các Wiki nội bộ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc điểm của việc tạo tài liệu:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignWiki`}),`, cùng với `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),`, lấy cấu hình của component và tự động tạo ra các file `,(0,c.jsx)(n.code,{children:`.stories.ts`}),` (ví dụ tương tác) và `,(0,c.jsx)(n.code,{children:`.mdx`}),` (hướng dẫn bằng văn bản).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tài liệu luôn phản ánh trạng thái thực tế của mã nguồn vì nó được xây dựng từ chính file `,(0,c.jsx)(n.code,{children:`properties.json`}),` dùng để tạo các component. Bảng prop (prop tables), các giá trị khả dụng và design token được cập nhật hoàn toàn tự động.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-lệnh-chính`,children:`Các lệnh chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-wiki-storm`})}),` — quét tất cả các component và xây dựng file `,(0,c.jsx)(n.code,{children:`web-types.json`}),` để hỗ trợ tính năng tự động hoàn thành trong các IDE của JetBrains.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component-wiki`})}),` — kích hoạt quá trình tạo các component Storybook và file MDX cho danh mục component trực quan.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};