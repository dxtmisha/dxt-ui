import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-ai-doc - Trình tạo Sinh Bằng AI`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-ai-doc`,children:`dxt-ai-doc`}),`
`,(0,c.jsxs)(t.p,{children:[`Tập lệnh `,(0,c.jsx)(t.code,{children:`ai-doc.ts`}),` là một công cụ tạo tài liệu tự động dựa trên trí tuệ nhân tạo (AI) cho dự án. Nó sử dụng `,(0,c.jsx)(t.code,{children:`vite-node`}),` để chạy một luồng công việc phân tích mã nguồn phân tích TypeScript (lớp, composables và các hàm), giao tiếp với một mô hình AI để tóm tắt hoặc giải thích mã nguồn và tạo hoặc cập nhật các tệp tài liệu MDX.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lời nhắc AI theo Ngữ cảnh`}),`: Tạo tài liệu bằng cách sử dụng các định dạng câu lệnh (prompt) tối ưu tuỳ thuộc vào loại phân tích tệp (ví dụ Class, Composable hoặc Function tiêu chuẩn).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ Đa Ngôn ngữ`}),`: Có khả năng tự động đưa ngôn ngữ được yêu cầu tạo tài liệu (`,(0,c.jsx)(t.code,{children:`[wikiLanguage]`}),`) vào phần mô tả của câu lệnh AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biên dịch Thời gian thực`}),`: Trước khi gửi giao tiếp ngữ cảnh tới AI, quá trình sẽ tạo ra một bộ thực thi (build context) để nhận dạng cấu trúc dữ liệu theo TypeScript một cách chính xác.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Tập lệnh phối hợp một số quá trình cốt lõi nhằm tự động hóa việc tạo tài liệu cho dự án của bạn:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Nó đọc danh sách tệp từ các thư mục được chỉ định trong tệp cấu hình thuộc tính của dự án.`}),`
`,(0,c.jsx)(t.li,{children:`Phân loại cấu trúc mã nguồn (Lớp, Composable, Hàm tiêu chuẩn) để chuẩn bị ngữ cảnh chuyên dụng cho loại mã nguồn đó.`}),`
`,(0,c.jsx)(t.li,{children:`Thực hiện quá trình biên dịch mã ngay trong thời gian thực nhằm nắm bắt thông tin dữ liệu TypeScript chính xác.`}),`
`,(0,c.jsx)(t.li,{children:`Nó tổng hợp mọi bối cảnh và kết hợp với các mẫu câu lệnh để gửi đi phân tích bởi mô hình AI.`}),`
`,(0,c.jsxs)(t.li,{children:[`Giải mã phản hồi cuối cùng và trực tiếp tạo mới hoặc cập nhật các tệp `,(0,c.jsx)(t.code,{children:`MDX`}),` tài liệu bên trong hệ thống dự án.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsxs)(t.p,{children:[`Cấu hình của trình tạo AI được định nghĩa tập trung trong tệp `,(0,c.jsx)(t.code,{children:`design.config.json`}),` của dự án của bạn. `,(0,c.jsx)(t.strong,{children:`Hãy tạo tệp này tại thư mục gốc của dự án.`}),` Làm theo các bước chính xác dưới đây để thiết lập:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Thiết lập các tham số AI trong `,(0,c.jsx)(t.code,{children:`design.config.json`})]}),`:
Bạn cần thêm trực tiếp khóa API (API key), loại mô hình mục tiêu và ngôn ngữ tạo tài liệu vào trong đối tượng cấu hình dự án.`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "wikiLanguage": "vi",
  "aiType": "gemini",
  "aiModel": "gemini-2.0-flash",
  "aiKey": "API_KEY_CUA_BAN"
}
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình các thư mục cần quét`}),`:
Trực tiếp trong tệp `,(0,c.jsx)(t.code,{children:`design.config.json`}),`, cấu hình cho nó biết thư mục nào nên được theo dõi và quét thông qua thuộc tính mảng `,(0,c.jsx)(t.code,{children:`aiDocDirectory`}),`. (Các thư mục mặc định là `,(0,c.jsx)(t.code,{children:`/classes/`}),`, `,(0,c.jsx)(t.code,{children:`/composables/`}),`, và `,(0,c.jsx)(t.code,{children:`/functions/`}),`).`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiDocDirectory": [
    "/path/to/my/classes/",
    "/path/to/my/composables/"
  ]
}
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chạy lệnh`}),`:
Công cụ tạo mã tập lệnh được đăng ký trong `,(0,c.jsx)(t.code,{children:`package.json`}),` với tên gọi thành phần thuộc nhánh `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`. Bạn chỉ việc đơn giản chạy lệnh `,(0,c.jsx)(t.code,{children:`dxt-ai-doc`}),` qua `,(0,c.jsx)(t.code,{children:`npx`}),` hoặc `,(0,c.jsx)(t.code,{children:`npm`}),`:`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-ai-doc
`})}),`
`,`Tập lệnh không yêu cầu sử dụng thêm đối số vì toàn bộ tài nguyên sẽ được tự nhận diện và cập nhật dự theo thông số lưu trữ qua `,(0,c.jsx)(t.code,{children:`design.config.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`thông-tin-chi-tiết-bổ-sung`,children:`Thông tin chi tiết bổ sung`}),`
`,(0,c.jsx)(t.h3,{id:`phụ-thuộc-vào-quá-trình-biên-dịch`,children:`Phụ thuộc vào quá trình Biên dịch`}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ tạo tài liệu phụ thuộc rất nhiều vào quá trình biên dịch (build) của dự án. `,(0,c.jsxs)(t.strong,{children:[`Nó sẽ chạy lệnh `,(0,c.jsx)(t.code,{children:`npm run build`})]}),` trong một thư mục tạm thời (`,(0,c.jsx)(t.code,{children:`dist-temporary`}),`) để có thể nắm bắt chính xác các định nghĩa TypeScript, các thành phần xuất (exports) và cấu trúc của dự án. `,(0,c.jsx)(t.strong,{children:`Nếu dự án của bạn có lỗi TypeScript hoặc bị lỗi trong quá trình biên dịch, tập lệnh tạo tài liệu AI sẽ gặp lỗi (fail).`})]}),`
`,(0,c.jsx)(t.h3,{id:`loại-trừ-các-tệp-chỉ-thị-bỏ-qua`,children:`Loại trừ các Tệp (Chỉ thị bỏ qua)`}),`
`,(0,c.jsxs)(t.p,{children:[`Ngoài ra, bạn có thể ngăn không cho `,(0,c.jsx)(t.code,{children:`dxt-ai-doc`}),` tiếp cận và xử lý đối với những tệp cụ thể bằng cách thêm chỉ thị `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` vào bất kỳ đâu trong tệp.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};