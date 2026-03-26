import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/bin/dxt-component-wiki - Tài Liệu Thành Phần Bằng AI`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-component-wiki`,children:`dxt-component-wiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-component-wiki`}),` chịu trách nhiệm tự động hóa việc tạo ra các tài liệu AI chuyên sâu bao gồm tài liệu định dạng MDX, khai báo TypeScript theo loại (`,(0,c.jsx)(n.code,{children:`types.ts`}),`) và các bản phân tích Storybook cho hệ thống thiết kế.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sinh Tệp Phân mảnh bằng AI`}),`: Với một đường dẫn đến các thành phần gốc, bộ thực thi AI có khả năng định nghĩa hoàn toàn mới hoặc cập nhật thông minh cho những tệp định hướng tiêu chuẩn như ghi chú `,(0,c.jsx)(n.code,{children:`MDX`}),`, cấu trúc `,(0,c.jsx)(n.code,{children:`types.ts`}),`, hay `,(0,c.jsx)(n.code,{children:`stories.ts`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cơ chế Sao lưu Kế thừa`}),`: Tiện ích lưu trữ an toàn các phiên bản trước được thay thế của tệp bằng cách gán thêm hậu tố `,(0,c.jsx)(n.code,{children:`__old.txt`}),` mỗi khi có những biến đổi dữ liệu, ngăn chặn sự mất mát mã nguồn vô ý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tùy biến Thao tác AI`}),`: Bao gồm khả năng tích hợp sẵn nhằm dễ dàng đính kèm lệnh hoặc dòng mô tả bổ sung của người dùng vào với câu lện prompt trước khi thực thi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(n.p,{children:`Luồng Tạo sinh Tài liệu AI xử lý dựa trên một đường dẫn thành phần đã có hiệu lực từ trước:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Nó chạy tiến trình nền thiết kế mô phỏng nhằm đồng bộ tài nguyên xuất ra một hệ sinh thái phân phối tạm thời. Cho phép hệ thống ghi chú chính xác các hành vi của TypeScript.`}),`
`,(0,c.jsxs)(n.li,{children:[`Nó truy vấn cấu hình cài đặt của bạn thông qua vị trí tệp để đặt bộ định dạng ngôn ngữ nội bộ cho prompt (ví dụ: `,(0,c.jsx)(n.code,{children:`componentPrompt.vi.txt`}),`) cũng như tổng hợp cả dữ liệu thực sự nguyên bản (Ghi chú MDX, nguồn Vue gốc, việc xây dựng mẫu storybook).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Một hồi đáp hợp nhất được gửi về từ mô hình ngôn ngữ lớn có khả năng chia tách các phân đoạn mã hóa mới trên bộ trích xuất `,(0,c.jsx)(n.code,{children:`ComponentWikiFile`}),` trực tiếp đổ vào bên trong hệ thống kho lưu trữ của bạn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsxs)(n.p,{children:[`Cấu hình của trình tạo AI được định nghĩa tập trung trong tệp `,(0,c.jsx)(n.code,{children:`design.config.json`}),` của dự án của bạn. `,(0,c.jsx)(n.strong,{children:`Hãy tạo tệp này tại thư mục gốc của dự án.`}),` Làm theo các bước sau để thiết lập:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Thiết lập các tham số AI trong `,(0,c.jsx)(n.code,{children:`design.config.json`})]}),`:
Bạn cần thêm trực tiếp khóa API (API key), loại mô hình mục tiêu và ngôn ngữ tạo tài liệu vào trong đối tượng cấu hình dự án. Tham số `,(0,c.jsx)(n.code,{children:`wikiLanguage`}),` chịu trách nhiệm quy định cả ngôn ngữ phân tích bên trong MDX và cả câu lệnh (prompt) cơ sở tự động được triệu hồi cho riêng ngôn ngữ đó (ví dụ, `,(0,c.jsx)(n.code,{children:`componentPrompt.vi.txt`}),`).`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "wikiLanguage": "vi",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "API_KEY_CUA_BAN"
}
`})}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Tạo sinh Tài liệu AI đối với một thành phần`}),`:
Trong tình huống cần phân tích qua AI đối với 1 thành phần cụ thể, vui lòng đáp ứng tên của đường dẫn tương đối trỏ đến nó (ví dụ như `,(0,c.jsx)(n.code,{children:`Button`}),`). Bên cạnh đó, bạn cũng có quyền tùy chọn đính kèm riêng chỉ thị thông qua thông số tùy biến cuối:`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-component-wiki <component-path> "[optional-prompt-instruction]"
`})}),`
`,(0,c.jsx)(n.strong,{children:`Ví dụ:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-component-wiki "ButtonBase" "Hãy đảm bảo rằng tài liệu đề cập đến việc nó bị vô hiệu hóa (disabled) theo mặc định"
`})}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`thông-tin-chi-tiết-bổ-sung`,children:`Thông tin chi tiết bổ sung`}),`
`,(0,c.jsx)(n.h3,{id:`phụ-thuộc-vào-quá-trình-biên-dịch-cấu-trúc-hệ-thống`,children:`Phụ thuộc vào quá trình Biên dịch cấu trúc hệ thống`}),`
`,(0,c.jsxs)(n.p,{children:[`Khả năng sinh tự động với bộ chứa dữ liệu AI phối hợp cực kỳ chặt chẽ với những trạng thái chương trình thời gian thực. Theo đó kĩ thuật sẽ khởi tạo ra luồng thông dịch `,(0,c.jsx)(n.code,{children:`npm run build`}),` trong suốt môi trường chạy `,(0,c.jsx)(n.code,{children:`dist-temporary`}),`. `,(0,c.jsx)(n.strong,{children:`Nếu dự án hiện tại rơi vào thất bại từ quá trình biên dịch dữ liệu hay cấu trúc TypeScript của hệ thống sinh ra lỗi chập chội bất kỳ, tài nguyên thực thi văn cảnh tài liệu tự sinh bởi AI đó sẽ ngay lập tức đối mặt với thất bại lỗi toàn tập.`})]}),`
`,(0,c.jsxs)(n.h3,{id:`sinh-cơ-chế-lưu-trữ-tự-động-__oldtxt`,children:[`Sinh cơ chế Lưu Trữ Tự động (`,(0,c.jsx)(n.code,{children:`__old.txt`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Ngay khi cơ chế của tệp `,(0,c.jsx)(n.code,{children:`ComponentWikiFile`}),` kết luận rằng sự đổi mới đến từ tài nguyên sau khi xử lý chênh lệch tính phân bổ về mã với độ đậm khác xa so với cấu tạo sẵn có. Một mô hình hoạt động thông minh sẽ tích cực lưu giữ lại thực thể dữ liệu gốc với đuôi mở rộng dưới dạng `,(0,c.jsx)(n.code,{children:`[tên_tệp]__old.txt`}),` thiết lập nên khả năng quay về phương pháp mã hồi phục (roll-back) không phức tạp nào.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};