import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/bin/dxt-ai-doc - Trình tạo Sinh Bằng AI"}),`
`,n.jsx(c.h1,{id:"dxt-ai-doc",children:"dxt-ai-doc"}),`
`,n.jsxs(c.p,{children:["Tập lệnh ",n.jsx(c.code,{children:"ai-doc.ts"})," là một công cụ tạo tài liệu tự động dựa trên trí tuệ nhân tạo (AI) cho dự án. Nó sử dụng ",n.jsx(c.code,{children:"vite-node"})," để chạy một luồng công việc phân tích mã nguồn phân tích TypeScript (lớp, composables và các hàm), giao tiếp với một mô hình AI để tóm tắt hoặc giải thích mã nguồn và tạo hoặc cập nhật các tệp tài liệu MDX."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lời nhắc AI theo Ngữ cảnh"}),": Tạo tài liệu bằng cách sử dụng các định dạng câu lệnh (prompt) tối ưu tuỳ thuộc vào loại phân tích tệp (ví dụ Class, Composable hoặc Function tiêu chuẩn)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ Đa Ngôn ngữ"}),": Có khả năng tự động đưa ngôn ngữ được yêu cầu tạo tài liệu (",n.jsx(c.code,{children:"[wikiLanguage]"}),") vào phần mô tả của câu lệnh AI."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Biên dịch Thời gian thực"}),": Trước khi gửi giao tiếp ngữ cảnh tới AI, quá trình sẽ tạo ra một bộ thực thi (build context) để nhận dạng cấu trúc dữ liệu theo TypeScript một cách chính xác."]}),`
`]}),`
`,n.jsx(c.h2,{id:"nó-hoạt-động-như-thế-nào",children:"Nó hoạt động như thế nào?"}),`
`,n.jsx(c.p,{children:"Tập lệnh phối hợp một số quá trình cốt lõi nhằm tự động hóa việc tạo tài liệu cho dự án của bạn:"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsx(c.li,{children:"Nó đọc danh sách tệp từ các thư mục được chỉ định trong tệp cấu hình thuộc tính của dự án."}),`
`,n.jsx(c.li,{children:"Phân loại cấu trúc mã nguồn (Lớp, Composable, Hàm tiêu chuẩn) để chuẩn bị ngữ cảnh chuyên dụng cho loại mã nguồn đó."}),`
`,n.jsx(c.li,{children:"Thực hiện quá trình biên dịch mã ngay trong thời gian thực nhằm nắm bắt thông tin dữ liệu TypeScript chính xác."}),`
`,n.jsx(c.li,{children:"Nó tổng hợp mọi bối cảnh và kết hợp với các mẫu câu lệnh để gửi đi phân tích bởi mô hình AI."}),`
`,n.jsxs(c.li,{children:["Giải mã phản hồi cuối cùng và trực tiếp tạo mới hoặc cập nhật các tệp ",n.jsx(c.code,{children:"MDX"})," tài liệu bên trong hệ thống dự án."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cách-thiết-lập-và-khởi-chạy",children:"Cách thiết lập và khởi chạy"}),`
`,n.jsxs(c.p,{children:["Cấu hình của trình tạo AI được định nghĩa tập trung trong tệp ",n.jsx(c.code,{children:"design.config.json"})," của dự án của bạn. ",n.jsx(c.strong,{children:"Hãy tạo tệp này tại thư mục gốc của dự án."})," Làm theo các bước chính xác dưới đây để thiết lập:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Thiết lập các tham số AI trong ",n.jsx(c.code,{children:"design.config.json"})]}),`:
Bạn cần thêm trực tiếp khóa API (API key), loại mô hình mục tiêu và ngôn ngữ tạo tài liệu vào trong đối tượng cấu hình dự án.`,`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-json",children:`{
  "wikiLanguage": "vi",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "API_KEY_CUA_BAN"
}
`})}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cấu hình các thư mục cần quét"}),`:
Trực tiếp trong tệp `,n.jsx(c.code,{children:"design.config.json"}),", cấu hình cho nó biết thư mục nào nên được theo dõi và quét thông qua thuộc tính mảng ",n.jsx(c.code,{children:"aiDocDirectory"}),". (Các thư mục mặc định là ",n.jsx(c.code,{children:"/classes/"}),", ",n.jsx(c.code,{children:"/composables/"}),", và ",n.jsx(c.code,{children:"/functions/"}),").",`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-json",children:`{
  "aiDocDirectory": [
    "/path/to/my/classes/",
    "/path/to/my/composables/"
  ]
}
`})}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chạy lệnh"}),`:
Công cụ tạo mã tập lệnh được đăng ký trong `,n.jsx(c.code,{children:"package.json"})," với tên gọi thành phần thuộc nhánh ",n.jsx(c.code,{children:"@dxtmisha/scripts"}),". Bạn chỉ việc đơn giản chạy lệnh ",n.jsx(c.code,{children:"dxt-ai-doc"})," qua ",n.jsx(c.code,{children:"npx"})," hoặc ",n.jsx(c.code,{children:"npm"}),":",`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-bash",children:`npx dxt-ai-doc
`})}),`
`,"Tập lệnh không yêu cầu sử dụng thêm đối số vì toàn bộ tài nguyên sẽ được tự nhận diện và cập nhật dự theo thông số lưu trữ qua ",n.jsx(c.code,{children:"design.config.json"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"thông-tin-chi-tiết-bổ-sung",children:"Thông tin chi tiết bổ sung"}),`
`,n.jsx(c.h3,{id:"phụ-thuộc-vào-quá-trình-biên-dịch",children:"Phụ thuộc vào quá trình Biên dịch"}),`
`,n.jsxs(c.p,{children:["Công cụ tạo tài liệu phụ thuộc rất nhiều vào quá trình biên dịch (build) của dự án. ",n.jsxs(c.strong,{children:["Nó sẽ chạy lệnh ",n.jsx(c.code,{children:"npm run build"})]})," trong một thư mục tạm thời (",n.jsx(c.code,{children:"dist-temporary"}),") để có thể nắm bắt chính xác các định nghĩa TypeScript, các thành phần xuất (exports) và cấu trúc của dự án. ",n.jsx(c.strong,{children:"Nếu dự án của bạn có lỗi TypeScript hoặc bị lỗi trong quá trình biên dịch, tập lệnh tạo tài liệu AI sẽ gặp lỗi (fail)."})]}),`
`,n.jsx(c.h3,{id:"loại-trừ-các-tệp-chỉ-thị-bỏ-qua",children:"Loại trừ các Tệp (Chỉ thị bỏ qua)"}),`
`,n.jsxs(c.p,{children:["Ngoài ra, bạn có thể ngăn không cho ",n.jsx(c.code,{children:"dxt-ai-doc"})," tiếp cận và xử lý đối với những tệp cụ thể bằng cách thêm chỉ thị ",n.jsx(c.code,{children:"// wiki:build-none"})," vào bất kỳ đâu trong tệp."]})]})}function p(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{p as default};
