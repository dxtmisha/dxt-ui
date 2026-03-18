import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/bin/dxt-component-wiki - Tài Liệu Thành Phần Bằng AI"}),`
`,n.jsx(h.h1,{id:"dxt-component-wiki",children:"dxt-component-wiki"}),`
`,n.jsxs(h.p,{children:["Lệnh ",n.jsx(h.code,{children:"dxt-component-wiki"})," chịu trách nhiệm tự động hóa việc tạo ra các tài liệu AI chuyên sâu bao gồm tài liệu định dạng MDX, khai báo TypeScript theo loại (",n.jsx(h.code,{children:"types.ts"}),") và các bản phân tích Storybook cho hệ thống thiết kế."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Sinh Tệp Phân mảnh bằng AI"}),": Với một đường dẫn đến các thành phần gốc, bộ thực thi AI có khả năng định nghĩa hoàn toàn mới hoặc cập nhật thông minh cho những tệp định hướng tiêu chuẩn như ghi chú ",n.jsx(h.code,{children:"MDX"}),", cấu trúc ",n.jsx(h.code,{children:"types.ts"}),", hay ",n.jsx(h.code,{children:"stories.ts"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Cơ chế Sao lưu Kế thừa"}),": Tiện ích lưu trữ an toàn các phiên bản trước được thay thế của tệp bằng cách gán thêm hậu tố ",n.jsx(h.code,{children:"__old.txt"})," mỗi khi có những biến đổi dữ liệu, ngăn chặn sự mất mát mã nguồn vô ý."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tùy biến Thao tác AI"}),": Bao gồm khả năng tích hợp sẵn nhằm dễ dàng đính kèm lệnh hoặc dòng mô tả bổ sung của người dùng vào với câu lện prompt trước khi thực thi."]}),`
`]}),`
`,n.jsx(h.h2,{id:"nó-hoạt-động-như-thế-nào",children:"Nó hoạt động như thế nào?"}),`
`,n.jsx(h.p,{children:"Luồng Tạo sinh Tài liệu AI xử lý dựa trên một đường dẫn thành phần đã có hiệu lực từ trước:"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsx(h.li,{children:"Nó chạy tiến trình nền thiết kế mô phỏng nhằm đồng bộ tài nguyên xuất ra một hệ sinh thái phân phối tạm thời. Cho phép hệ thống ghi chú chính xác các hành vi của TypeScript."}),`
`,n.jsxs(h.li,{children:["Nó truy vấn cấu hình cài đặt của bạn thông qua vị trí tệp để đặt bộ định dạng ngôn ngữ nội bộ cho prompt (ví dụ: ",n.jsx(h.code,{children:"componentPrompt.vi.txt"}),") cũng như tổng hợp cả dữ liệu thực sự nguyên bản (Ghi chú MDX, nguồn Vue gốc, việc xây dựng mẫu storybook)."]}),`
`,n.jsxs(h.li,{children:["Một hồi đáp hợp nhất được gửi về từ mô hình ngôn ngữ lớn có khả năng chia tách các phân đoạn mã hóa mới trên bộ trích xuất ",n.jsx(h.code,{children:"ComponentWikiFile"})," trực tiếp đổ vào bên trong hệ thống kho lưu trữ của bạn."]}),`
`]}),`
`,n.jsx(h.h2,{id:"cách-thiết-lập-và-khởi-chạy",children:"Cách thiết lập và khởi chạy"}),`
`,n.jsxs(h.p,{children:["Cấu hình của trình tạo AI được định nghĩa tập trung trong tệp ",n.jsx(h.code,{children:"design.config.json"})," của dự án của bạn. ",n.jsx(h.strong,{children:"Hãy tạo tệp này tại thư mục gốc của dự án."})," Làm theo các bước sau để thiết lập:"]}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsxs(h.strong,{children:["Thiết lập các tham số AI trong ",n.jsx(h.code,{children:"design.config.json"})]}),`:
Bạn cần thêm trực tiếp khóa API (API key), loại mô hình mục tiêu và ngôn ngữ tạo tài liệu vào trong đối tượng cấu hình dự án. Tham số `,n.jsx(h.code,{children:"wikiLanguage"})," chịu trách nhiệm quy định cả ngôn ngữ phân tích bên trong MDX và cả câu lệnh (prompt) cơ sở tự động được triệu hồi cho riêng ngôn ngữ đó (ví dụ, ",n.jsx(h.code,{children:"componentPrompt.vi.txt"}),").",`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-json",children:`{
  "wikiLanguage": "vi",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "API_KEY_CUA_BAN"
}
`})}),`
`]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Thực thi Tạo sinh Tài liệu AI đối với một thành phần"}),`:
Trong tình huống cần phân tích qua AI đối với 1 thành phần cụ thể, vui lòng đáp ứng tên của đường dẫn tương đối trỏ đến nó (ví dụ như `,n.jsx(h.code,{children:"Button"}),"). Bên cạnh đó, bạn cũng có quyền tùy chọn đính kèm riêng chỉ thị thông qua thông số tùy biến cuối:",`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-bash",children:`npx dxt-component-wiki <component-path> "[optional-prompt-instruction]"
`})}),`
`,n.jsx(h.strong,{children:"Ví dụ:"}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-bash",children:`npx dxt-component-wiki "ButtonBase" "Hãy đảm bảo rằng tài liệu đề cập đến việc nó bị vô hiệu hóa (disabled) theo mặc định"
`})}),`
`]}),`
`]}),`
`,n.jsx(h.h2,{id:"thông-tin-chi-tiết-bổ-sung",children:"Thông tin chi tiết bổ sung"}),`
`,n.jsx(h.h3,{id:"phụ-thuộc-vào-quá-trình-biên-dịch-cấu-trúc-hệ-thống",children:"Phụ thuộc vào quá trình Biên dịch cấu trúc hệ thống"}),`
`,n.jsxs(h.p,{children:["Khả năng sinh tự động với bộ chứa dữ liệu AI phối hợp cực kỳ chặt chẽ với những trạng thái chương trình thời gian thực. Theo đó kĩ thuật sẽ khởi tạo ra luồng thông dịch ",n.jsx(h.code,{children:"npm run build"})," trong suốt môi trường chạy ",n.jsx(h.code,{children:"dist-temporary"}),". ",n.jsx(h.strong,{children:"Nếu dự án hiện tại rơi vào thất bại từ quá trình biên dịch dữ liệu hay cấu trúc TypeScript của hệ thống sinh ra lỗi chập chội bất kỳ, tài nguyên thực thi văn cảnh tài liệu tự sinh bởi AI đó sẽ ngay lập tức đối mặt với thất bại lỗi toàn tập."})]}),`
`,n.jsxs(h.h3,{id:"sinh-cơ-chế-lưu-trữ-tự-động-__oldtxt",children:["Sinh cơ chế Lưu Trữ Tự động (",n.jsx(h.code,{children:"__old.txt"}),")"]}),`
`,n.jsxs(h.p,{children:["Ngay khi cơ chế của tệp ",n.jsx(h.code,{children:"ComponentWikiFile"})," kết luận rằng sự đổi mới đến từ tài nguyên sau khi xử lý chênh lệch tính phân bổ về mã với độ đậm khác xa so với cấu tạo sẵn có. Một mô hình hoạt động thông minh sẽ tích cực lưu giữ lại thực thể dữ liệu gốc với đuôi mở rộng dưới dạng ",n.jsx(h.code,{children:"[tên_tệp]__old.txt"})," thiết lập nên khả năng quay về phương pháp mã hồi phục (roll-back) không phức tạp nào."]})]})}function p(t={}){const{wrapper:h}={...c(),...t.components};return h?n.jsx(h,{...t,children:n.jsx(i,{...t})}):i(t)}export{p as default};
