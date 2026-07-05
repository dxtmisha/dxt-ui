import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/! Giới thiệu về gói`}),`
`,(0,c.jsx)(n.h1,{id:`hệ-sinh-thái-kịch-bản-scripts`,children:`Hệ sinh thái kịch bản (Scripts)`}),`
`,(0,c.jsxs)(n.p,{children:[`Gói `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` là một bộ công cụ tự động hóa CLI và các tập lệnh phát triển mạnh mẽ được thiết kế đặc biệt để tạo khung (scaffolding), biên dịch, tài liệu hóa và kiểm tra trực quan các thành phần trong hệ thống thiết kế.`]}),`
`,(0,c.jsx)(n.p,{children:`Nó liên kết chặt chẽ giữa thành phần giao diện, các bảng kiểu (styles), các token thiết kế và tài liệu hệ thống nhằm loại bỏ các tác vụ lặp đi lặp lại và duy trì mã nguồn sạch sẽ, dễ mở rộng.`}),`
`,(0,c.jsx)(n.h2,{id:`các-phân-hệ-chính`,children:`Các phân hệ chính`}),`
`,(0,c.jsx)(n.h3,{id:`1-tạo-khung-component--tài-liệu`,children:`1. Tạo Khung Component & Tài liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component`})}),`: Tự động tạo các mẫu thành phần Vue, tệp giao diện thuộc tính (`,(0,c.jsx)(n.code,{children:`props.ts`}),`), tệp kiểu dáng và xuất bản nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component-wiki`})}),`: Tạo tài liệu và các tệp MDX wiki cho thành phần thông qua mô hình AI của Gemini hoặc Claude.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-constructor`})}),`: Tạo khung mã nguồn của các lớp dựng logic (constructors) và các cấu hình cho thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-biên-dịch--quản-lý-kiểu-thiết-kế`,children:`2. Biên dịch & Quản lý Kiểu Thiết kế`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-ui`})}),`: Trình điều phối trung tâm quản lý việc biên dịch kiểu dáng, danh sách thành phần, xuất bản kiểu dữ liệu và cập nhật tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-types`})}),`: Trích xuất và nén các khai báo TypeScript (`,(0,c.jsx)(n.code,{children:`.d.ts`}),`) thành các hướng dẫn kiểu được tối ưu hóa cho AI (`,(0,c.jsx)(n.code,{children:`ai-types.md`}),` và `,(0,c.jsx)(n.code,{children:`ai-developer.md`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-wiki-storm`})}),`: Định dạng các thuộc tính và sự kiện của thành phần thành tệp `,(0,c.jsx)(n.code,{children:`web-types.json`}),` để phục vụ tính năng tự động hoàn thành trong các JetBrains IDE (WebStorm, IntelliJ IDEA).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`3-tự-động-hóa-bản-dựng--xuất-bản`,children:`3. Tự động hóa Bản dựng & Xuất bản`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-build-functional`})}),`: Biên dịch động các xuất bản lại (re-export) của các hàm phản hồi từ gói cốt lõi `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-build-packages`})}),`: Quét không gian làm việc và biên dịch tăng dần (incremental) chỉ với các gói có sự thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-build-publish-packages`})}),`: Tự động hóa quá trình xây dựng và xuất bản các gói cập nhật trong không gian làm việc.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`4-tiện-ích-và-kiểm-tra-giao-diện`,children:`4. Tiện ích và Kiểm tra Giao diện`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-screenshot`})}),`: Khởi chạy dev server, sử dụng Puppeteer để chụp ảnh màn hình thành phần và xuất bản tệp HTML/CSS thô để phục vụ kiểm tra trực quan (visual audit).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-flags`})}),`: Biên dịch các tệp cờ quốc gia SVG thành bản đồ sprite và các lớp CSS tối ưu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-library`})}),`: Tự động hóa việc duy trì các điểm xuất bản (barrel files) trong tất cả các thư viện của gói.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-prompt`})}),`: Đóng gói các tiêu chuẩn SCSS, BEM và Vue thành một tệp lời nhắc hệ thống hợp nhất (`,(0,c.jsx)(n.code,{children:`ai-prompt.md`}),`) dành cho các trợ lý AI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tại-sao-nên-sử-dụng-gói-này`,children:`Tại sao nên sử dụng gói này?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Không còn Viết mã Rập khuôn`}),`: Tự động hóa hoàn toàn cấu trúc thư mục thành phần, các tệp CSS và các nhập khẩu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy trình Tối ưu hóa bởi AI`}),`: Sử dụng AI thế hệ mới để viết tài liệu chi tiết và giúp các trợ lý AI khác hiểu rõ hơn về API hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa Monorepo`}),`: Giảm thiểu tối đa chi phí quản lý các bản dựng và đồng bộ hóa các gói trong npm workspaces.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kho-lưu-trữ-nguồn`,children:`Kho lưu trữ nguồn`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/scripts`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/scripts`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};