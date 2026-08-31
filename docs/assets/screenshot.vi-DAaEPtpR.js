import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/8. Ngữ cảnh trực quan (Ảnh chụp màn hình)`}),`
`,(0,c.jsx)(t.h1,{id:`ngữ-cảnh-trực-quan-ai-screenshot`,children:`Ngữ cảnh trực quan (ai-screenshot)`}),`
`,(0,c.jsxs)(t.p,{children:[`Một trong những khả năng mạnh mẽ nhất của cơ sở hạ tầng AIDD trong `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` là cung cấp cho trí tuệ nhân tạo không chỉ các hợp đồng TypeScript dạng văn bản, mà còn cả `,(0,c.jsx)(t.strong,{children:`ngữ cảnh trực quan`}),` của giao diện thực tế. Điều này cho phép các mô hình AI đa phương thức (multimodal) quan sát bố cục component, khoảng cách (padding/margin), độ đổ bóng và cách áp dụng token thiết kế.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Chức năng này được quản lý thông qua thư mục `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`, với các tệp được sinh tự động bằng lệnh `,(0,c.jsx)(t.code,{children:`dxt-screenshot`}),` (dựa trên class `,(0,c.jsx)(t.code,{children:`DesignScreenshot`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động-dưới-nền`,children:`Cơ chế hoạt động dưới nền`}),`
`,(0,c.jsx)(t.p,{children:`Bộ sinh ngữ cảnh trực quan hoạt động hoàn toàn tự động theo quy trình sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`1. Khởi động máy chủ phát triển:`}),` Script khởi chạy máy chủ dev cục bộ của package (`,(0,c.jsx)(t.code,{children:`npm run dev`}),`) qua tiến trình con (child process).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`2. Bắt URL cục bộ:`}),` Công cụ phân tích luồng xuất console (stdout) theo thời gian thực để trích xuất địa chỉ đang chạy (ví dụ: `,(0,c.jsx)(t.code,{children:`http://localhost:5173`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`3. Khởi chạy trình duyệt Headless:`}),` Sau khi lấy được URL, một phiên bản trình duyệt không đầu (headless browser) sẽ truy cập vào trang mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`4. Chụp trạng thái giao diện:`}),` Trình duyệt chụp toàn bộ màn hình ở độ phân giải cao dưới dạng ảnh `,(0,c.jsx)(t.code,{children:`.webp`}),` tối ưu dung lượng, đồng thời trích xuất toàn bộ cây DOM kết xuất và các style CSS thực tế được áp dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`5. Dọn dẹp tiến trình:`}),` Script tắt tiến trình máy chủ dev một cách an toàn và lưu toàn bộ tệp vào thư mục `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nội-dung-thư-mục-ai-screenshot`,children:`Nội dung thư mục ai-screenshot/`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi tạo, thư mục gốc của package sẽ chứa:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-*.webp`})}),` — Bộ ảnh chụp giao diện định dạng WebP sắc nét và nhẹ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-code.html`})}),` — Cây DOM kết xuất hoàn chỉnh với đầy đủ class và thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`screenshot-styles.css`})}),` — Bảng mã CSS thực tế được áp dụng cho các phần tử trang.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`tích-hợp-vào-lời-nhắc-hệ-thống-và-mcp`,children:`Tích hợp vào lời nhắc hệ thống và MCP`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi chạy `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`, đường dẫn tới tất cả các tệp trong `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),` được tự động nhúng vào danh mục package của `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-code.html'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-styles.css'
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Ngoài ra, `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` chuyển đổi các ảnh chụp thành tài nguyên đa phương tiện cho giao thức Model Context Protocol với định dạng MIME chuẩn (`,(0,c.jsx)(t.code,{children:`image/webp`}),`, `,(0,c.jsx)(t.code,{children:`text/html`}),`, `,(0,c.jsx)(t.code,{children:`text/css`}),`), cho phép các AI agent đa phương thức truy vấn trực tiếp qua công cụ.`]}),`
`,(0,c.jsx)(t.h2,{id:`yêu-cầu-thiết-kế-trang-trưng-bày-showcase-cho-ai-đa-phương-thức`,children:`Yêu cầu thiết kế trang trưng bày (Showcase) cho AI đa phương thức`}),`
`,(0,c.jsx)(t.p,{children:`Mục tiêu cốt lõi của ngữ cảnh trực quan trong AIDD là giúp các mô hình đa phương thức đối chiếu chính xác thiết kế (ví dụ: ảnh chụp Figma) với các component có sẵn trong thư viện.`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi lập trình viên yêu cầu trợ lý AI xây dựng giao diện theo bản thiết kế, mô hình chỉ đọc văn bản thường không thể liên kết hình ảnh với mã nguồn và sẽ tự dựng các thẻ `,(0,c.jsx)(t.code,{children:`div`}),` thủ công cùng CSS tùy biến. Nhờ có bộ ảnh chụp component, AI sẽ lập tức nhận diện: `,(0,c.jsxs)(t.em,{children:[`"Khối này trong thiết kế chính là `,(0,c.jsx)(t.code,{children:`<MyCustomCard variant="elevated">`}),`, và thanh lọc là `,(0,c.jsx)(t.code,{children:`<FilterPanel isCompact>`}),`"`]}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Để đạt độ chính xác cao nhất, trang trưng bày component (demo showcase) cần tuân thủ các quy tắc thiết kế sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hiển thị rõ ràng tên component và props:`}),`
Bên cạnh mỗi component được render, cần hiển thị trực quan tên component và danh sách props/variants được áp dụng (ví dụ: `,(0,c.jsx)(t.code,{children:`Button [variant="primary", size="sm"]`}),` hoặc `,(0,c.jsx)(t.code,{children:`Input [disabled=true, isError=true]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khung hình đồng nhất giữa giao diện và hợp đồng mã:`}),`
Các nhãn chú thích dạng chữ giúp AI đa phương thức nắm bắt đồng thời cả kết quả hiển thị (độ bóng, khoảng cách, viền) và tổ hợp props chính xác tạo ra nó chỉ trong một bức ảnh duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại bỏ việc viết lại giao diện thủ công:`}),`
Sau khi nhận diện component qua ảnh chụp, AI sẽ sử dụng ngay component chuẩn của thư viện với các props hợp lệ thay vì tạo mã HTML/CSS dư thừa từ đầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`chạy-lệnh-tạo-ảnh-chụp`,children:`Chạy lệnh tạo ảnh chụp`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Qua npm script trong thư mục package:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run screenshot
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Qua npx CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-screenshot
`})}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};