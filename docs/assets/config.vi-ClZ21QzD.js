import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/10. Cấu hình (design.config.json)`}),`
`,(0,c.jsx)(t.h1,{id:`cấu-hình-designconfigjson-cho-ai--tạo-kiểu-dữ-liệu`,children:`Cấu hình design.config.json cho AI & Tạo kiểu dữ liệu`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`design.config.json`}),` là trung tâm điều khiển tập trung để quản lý các tham số tạo tài liệu AI, biên dịch khai báo kiểu TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), quét mã nguồn và kết nối các mô hình ngôn ngữ.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp cấu hình được đặt ở thư mục gốc của monorepo hoặc thư mục gốc của từng package. Các package có thể ghi đè cài đặt cơ sở và kế thừa thông qua cơ chế `,(0,c.jsx)(t.code,{children:`"extends"`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-cấu-hình-tối-thiểu-cho-ai`,children:`Ví dụ cấu hình tối thiểu cho AI`}),`
`,(0,c.jsxs)(t.p,{children:[`Để bộ sinh `,(0,c.jsx)(t.code,{children:`dxt-types`}),` và bộ tổng hợp lời nhắc `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),` hoạt động, chỉ cần chỉ định thông tin nhà cung cấp AI:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-cấu-hình-đầy-đủ-cho-dts--kiểu-ai`,children:`Ví dụ cấu hình đầy đủ cho .d.ts & Kiểu AI`}),`
`,(0,c.jsx)(t.p,{children:`Dưới đây là ví dụ cấu hình đầy đủ bao gồm toàn bộ các tham số kiểm soát quá trình biên dịch khai báo và xây dựng ngữ cảnh AI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "extends": "../../design.config.json",
  "packagePrefix": "@dxtmisha",
  "typesPaths": [
    "src"
  ],
  "typesMatch": [
    "Button",
    "Input"
  ],
  "typesExclude": [
    "\\\\.wiki\\\\.(d\\\\.)?ts$",
    "wiki/",
    "library/"
  ],
  "typesWithoutVue": false,
  "typesDir": "ai-types-temp",
  "distDir": "dist",
  "aiResourcesDir": "ai-resources",
  "promptScanDepth": 6,
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  },
  "aiTypesConcurrency": 8
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`giải-thích-các-thuộc-tính-cho-ai--tạo-kiểu-dữ-liệu`,children:`Giải thích các thuộc tính cho AI & Tạo kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`1-cài-đặt-kết-nối-nhà-cung-cấp-ai`,children:`1. Cài đặt kết nối nhà cung cấp AI`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`'gemini'`}),`) — Nhà cung cấp trí tuệ nhân tạo để tối ưu hóa JSDoc và tạo mô tả. Hỗ trợ:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gemini`}),` — Google Gemini API chính thức (qua `,(0,c.jsx)(t.code,{children:`@google/genai`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`gemini-cli`}),` — Gọi qua giao diện dòng lệnh Gemini CLI cục bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`openai`}),` — Các mô hình OpenAI (GPT-4o, GPT-4o-mini và các endpoint tương thích).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`claude`}),` — Anthropic Claude API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`claude-cli`}),` / `,(0,c.jsx)(t.code,{children:`claude-agent`}),` — Gọi qua CLI/Agent của Anthropic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zai`}),` — Zhipu AI (dòng mô hình GLM).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — Định danh chính xác của mô hình AI (ví dụ: `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — Khóa API để xác thực với nhà cung cấp đã chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` (`,(0,c.jsx)(t.code,{children:`object`}),`) — Đối tượng tùy chỉnh nâng cao (ví dụ: nhiệt độ tạo `,(0,c.jsx)(t.code,{children:`temperature: 0.2`}),`, giới hạn token, tiêu đề tùy chỉnh).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiTypesConcurrency`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`8`}),`) — Số lượng tệp định nghĩa kiểu tối đa được AI xử lý đồng thời trong quá trình chạy `,(0,c.jsx)(t.code,{children:`dxt-types`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-tham-số-quét-và-biên-dịch-dts`,children:`2. Tham số quét và biên dịch .d.ts`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesPaths`})}),` (`,(0,c.jsx)(t.code,{children:`string[]`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`['src']`}),`) — Mảng đường dẫn thư mục mã nguồn được quét để trích xuất khai báo TypeScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesMatch`})}),` (`,(0,c.jsx)(t.code,{children:`string | string[]`}),`) — Chuỗi mẫu hoặc biểu thức chính quy để lọc và chỉ đưa vào các component hoặc tệp cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesExclude`})}),` (`,(0,c.jsx)(t.code,{children:`string | string[]`}),`) — Mảng biểu thức chính quy hoặc đường dẫn loại trừ tệp phụ trợ, tiện ích kiểm thử và wiki nội bộ khỏi phân tích kiểu (ví dụ: `,(0,c.jsx)(t.code,{children:`["\\\\.wiki\\\\.(d\\\\.)?ts$", "wiki/", "library/"]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesWithoutVue`})}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`false`}),`) — Chuyển đổi chế độ biên dịch. Đặt thành `,(0,c.jsx)(t.code,{children:`true`}),` cho các package thuần TypeScript/JavaScript không có component `,(0,c.jsx)(t.code,{children:`.vue`}),` để bỏ qua `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` và sử dụng `,(0,c.jsx)(t.code,{children:`tsc`}),` tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`typesDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`'ai-types-temp'`}),`) — Tên thư mục tạm nơi `,(0,c.jsx)(t.code,{children:`dxt-types`}),` trích xuất tệp `,(0,c.jsx)(t.code,{children:`.d.ts`}),` thô trước khi lọc AST và loại bỏ thuộc tính private.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`distDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`'dist'`}),`) — Thư mục chứa bundle đã build, được bộ tạo sử dụng để đối chiếu chữ ký export.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-tích-hợp-vào-lời-nhắc-hệ-thống`,children:`3. Tích hợp vào lời nhắc hệ thống`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiResourcesDir`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`'ai-resources'`}),`) — Thư mục chứa hướng dẫn chuyên sâu. `,(0,c.jsx)(t.code,{children:`dxt-types`}),` quét thư mục này và điền vào khối `,(0,c.jsx)(t.code,{children:`## Mandatory Rules`}),` trong `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`promptScanDepth`})}),` (`,(0,c.jsx)(t.code,{children:`number`}),`, mặc định: `,(0,c.jsx)(t.code,{children:`6`}),`) — Độ sâu quét đệ quy tối đa khi tìm kiếm package và tổng hợp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`packagePrefix`})}),` (`,(0,c.jsx)(t.code,{children:`string`}),`) — Tiền tố scope của monorepo (ví dụ: `,(0,c.jsx)(t.code,{children:`@dxtmisha`}),` hoặc `,(0,c.jsx)(t.code,{children:`@my-org`}),`) dùng để định dạng đường dẫn import trong prompt.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kế-thừa-và-bảo-mật-khóa-api-cục-bộ-local`,children:`Kế thừa và Bảo mật Khóa API cục bộ (.local)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Kế thừa (`,(0,c.jsx)(t.code,{children:`extends`}),`):`]}),`
Trong monorepo, cấu hình cơ sở nằm ở thư mục gốc, các package trong `,(0,c.jsx)(t.code,{children:`packages/*`}),` kế thừa qua `,(0,c.jsx)(t.code,{children:`"extends": "../../design.config.json"`}),`, chỉ ghi đè các tham số đặc thù của mình (`,(0,c.jsx)(t.code,{children:`typesWithoutVue`}),`, `,(0,c.jsx)(t.code,{children:`typesPaths`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Khóa cục bộ (`,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`):`]}),`
Để tránh commit API key cá nhân (`,(0,c.jsx)(t.code,{children:`aiKey`}),`) lên Git, hãy tạo tệp `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),` cạnh tệp cấu hình chính. Các script sẽ tự động ghi đè thuộc tính cục bộ lên cấu hình cơ sở. Đảm bảo `,(0,c.jsx)(t.code,{children:`*.local.json`}),` đã có trong `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};