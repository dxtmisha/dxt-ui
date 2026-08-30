import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/3. Tạo gói (Package Creation)`}),`
`,(0,c.jsx)(t.h1,{id:`hướng-dẫn-khởi-tạo-gói-monorepo-package-creation`,children:`Hướng dẫn Khởi tạo Gói Monorepo (Package Creation)`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong hệ thống thiết kế `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`, quy trình tạo các gói (package) và thư viện mới trong monorepo được tự động hóa hoàn toàn thông qua công cụ dòng lệnh `,(0,c.jsx)(t.code,{children:`dxt-package`}),`. Lập trình viên không còn phải tự tay cấu hình quy trình biên dịch, viết tệp TypeScript, tạo `,(0,c.jsx)(t.code,{children:`package.json`}),` hay kết nối mô-đun mới vào Storybook.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-package`}),` (tệp thực thi `,(0,c.jsx)(t.code,{children:`bin/design-package.ts`}),`, lớp `,(0,c.jsx)(t.code,{children:`PackageInit`}),`) quét monorepo để tìm các thư mục trống và thiết lập ngay một không gian làm việc hoàn chỉnh với tất cả các tệp và tích hợp cần thiết chỉ trong chưa đầy một giây.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-ưu-điểm-vượt-trội`,children:`Các ưu điểm vượt trội`}),`
`,(0,c.jsx)(t.h3,{id:`1-môi-trường-chuẩn-hóa-loại-bỏ-công-việc-lặp-lại-zero-boilerplate`,children:`1. Môi trường chuẩn hóa loại bỏ công việc lặp lại (Zero Boilerplate)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thay vì phải tạo hàng chục tệp cấu hình thủ công, lập trình viên chỉ cần tạo duy nhất một thư mục trống trong `,(0,c.jsx)(t.code,{children:`packages/`}),`. Tiện ích tự động tạo toàn bộ cơ sở hạ tầng: TypeScript, Vite, các tập lệnh xây dựng, kiểm thử và phát hành.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-tự-động-tích-hợp-vào-storybook`,children:`2. Tự động tích hợp vào Storybook`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi một gói được khởi tạo, tập lệnh sẽ tự động cập nhật cấu hình `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),` trong `,(0,c.jsx)(t.code,{children:`packages/storybook`}),`, thêm đường dẫn tài liệu MDX và câu chuyện của gói mới. Bạn có thể xem ngay trên Storybook mà không cần chỉnh sửa cấu hình thủ công.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-tích-hợp-sẵn-chuẩn-ai-và-định-kiểu-nghiêm-ngặt`,children:`3. Tích hợp sẵn chuẩn AI và Định kiểu nghiêm ngặt`}),`
`,(0,c.jsxs)(t.p,{children:[`Mỗi gói mới đều có sẵn cấu trúc `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`, tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` và điểm xuất chuẩn `,(0,c.jsx)(t.code,{children:`src/library.ts`}),` với định kiểu TypeScript chặt chẽ.`]}),`
`,(0,c.jsx)(t.h2,{id:`quy-trình-từng-bước-những-việc-cần-làm`,children:`Quy trình từng bước (Những việc cần làm)`}),`
`,(0,c.jsx)(t.h3,{id:`bước-1-tạo-thư-mục-trống-cho-gói`,children:`Bước 1. Tạo thư mục trống cho gói`}),`
`,(0,c.jsxs)(t.p,{children:[`Bên trong thư mục `,(0,c.jsx)(t.code,{children:`packages/`}),`, tạo một thư mục trống với tên gói theo chuẩn kebab-case (ví dụ: `,(0,c.jsx)(t.code,{children:`media-player`}),` hoặc `,(0,c.jsx)(t.code,{children:`notifications`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`mkdir packages/media-player
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-2-khởi-chạy-lệnh-tạo-gói`,children:`Bước 2. Khởi chạy lệnh tạo gói`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy lệnh `,(0,c.jsx)(t.code,{children:`dxt-package`}),` trong terminal của bạn:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsx)(t.p,{children:`Trình tạo sẽ tự động phát hiện thư mục trống và giải nén toàn bộ các tệp cần thiết:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Initializing package of type: library with templates: undefined
Package init in: packages/media-player
Update storybook...
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-3-kiểm-tra-cấu-trúc-được-tạo`,children:`Bước 3. Kiểm tra cấu trúc được tạo`}),`
`,(0,c.jsx)(t.p,{children:`Bên trong thư mục mới, toàn bộ môi trường phát triển đã sẵn sàng:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`packages/media-player/
├── package.json               # Tệp kê khai với dependencies, build scripts và exports
├── tsconfig.json              # Cấu hình TypeScript cơ sở
├── tsconfig.app.json          # Cấu hình đóng gói ứng dụng
├── tsconfig.node.json         # Cấu hình môi trường Node.js
├── vite.config.ts             # Cấu hình xây dựng thư viện Vite
├── .gitignore                 # Bỏ qua tệp cục bộ và bản dựng
├── README.md                  # Tài liệu hướng dẫn gói
├── LICENSE                    # Giấy phép dự án (MIT)
├── CHANGELOG.md               # Nhật ký thay đổi phiên bản
├── ai-prompt.md               # Ngữ cảnh hệ thống dành cho AI
├── ai-memory.md               # Bộ nhớ cục bộ dành cho trợ lý AI
├── src/
│   ├── library.ts             # Điểm xuất chính (barrel export)
│   ├── config.ts              # Cấu hình và hằng số của gói
│   └── types.ts               # Kiểu dữ liệu và giao diện (interfaces)
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-4-các-tùy-chọn-lệnh-loại-gói-và-mẫu-tùy-chỉnh`,children:`Bước 4. Các tùy chọn lệnh (Loại gói và Mẫu tùy chỉnh)`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`dxt-package`}),` hỗ trợ các tùy chọn dòng lệnh linh hoạt:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mặc định (Thư viện TypeScript)`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chỉ định loại gói (ví dụ: vue)`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Áp dụng mẫu tùy chỉnh`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --type vue --templates "template1,template2"
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chỉ định thư mục cơ sở tùy chỉnh`}),`:`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-package --dir custom-packages
`})}),`
`,(0,c.jsx)(t.p,{children:`Các tùy chọn khả dụng:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--type`}),` (`,(0,c.jsx)(t.code,{children:`-t`}),`): Loại mẫu gói. Mặc định là `,(0,c.jsx)(t.code,{children:`library`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--templates`}),`: Thư mục chứa các mẫu gói.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--dir`}),` (`,(0,c.jsx)(t.code,{children:`-d`}),`): Thư mục gói đích. Mặc định là `,(0,c.jsx)(t.code,{children:`packages`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy `,(0,c.jsx)(t.code,{children:`npx dxt-package --help`}),` để in ra danh sách đầy đủ các tùy chọn khả dụng.`]}),`
`,(0,c.jsx)(t.h2,{id:`tích-hợp-gói-tự-động`,children:`Tích hợp gói tự động`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Storybook (`,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),`)`]}),`: Tự động thêm `,(0,c.jsx)(t.code,{children:"../../${name}/src/**/*.mdx"}),` và `,(0,c.jsx)(t.code,{children:"../../${name}/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tên gói và Tiền tố`}),`: Tự động tạo tên định dạng `,(0,c.jsx)(t.code,{children:`@dxtmisha/<name>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Các tập lệnh tiêu chuẩn trong `,(0,c.jsx)(t.code,{children:`package.json`})]}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"dev"`}),`: Khởi chạy máy chủ phát triển Vite.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"build"`}),`: Biên dịch gói thư viện (`,(0,c.jsx)(t.code,{children:`vite build`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"test"`}),`: Chạy kiểm thử tự động với Vitest.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"prepublishOnly"`}),`: Tự động biên dịch lại trước khi phát hành.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),`: Xuất bản lên npm registry công khai (`,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-so-với-tạo-thủ-công`,children:`Ưu điểm so với tạo thủ công`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo tức thì`}),`: Toàn bộ quá trình diễn ra trong chưa đầy 1 giây.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độ chính xác kiến trúc 100%`}),`: Loại bỏ hoàn toàn lỗi cấu hình Vite, TypeScript và xuất tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính gắn kết monorepo`}),`: Tự động đăng ký Storybook và đồng bộ tiêu chuẩn quản lý phiên bản.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};