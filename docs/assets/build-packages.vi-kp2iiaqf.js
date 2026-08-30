import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/5. Xây dựng gói (Build Packages)`}),`
`,(0,c.jsx)(t.h1,{id:`hướng-dẫn-xây-dựng-gói-monorepo-build-packages`,children:`Hướng dẫn Xây dựng Gói Monorepo (Build Packages)`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong hệ thống thiết kế `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`, quy trình biên dịch toàn bộ các gói liên kết trong monorepo được tự động hóa hoàn toàn nhờ công cụ dòng lệnh `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),`. Lập trình viên không còn phải quản lý thứ tự biên dịch thủ công hoặc mất thời gian biên dịch lại các gói không thay đổi.`]}),`
`,(0,c.jsx)(t.p,{children:`Công cụ đảm nhận toàn bộ quy trình biên dịch, tự động phân tích đồ thị phụ thuộc thông qua trọng số ưu tiên và áp dụng bộ nhớ đệm tăng dần thông minh.`}),`
`,(0,c.jsx)(t.h2,{id:`các-ưu-điểm-vượt-trội`,children:`Các ưu điểm vượt trội`}),`
`,(0,c.jsx)(t.h3,{id:`1-bộ-nhớ-đệm-thông-minh-và-biên-dịch-tăng-dần-tức-thì`,children:`1. Bộ nhớ đệm thông minh và biên dịch tăng dần tức thì`}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` theo dõi trạng thái các gói đã biên dịch thông qua tệp bộ nhớ đệm cục bộ `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. Nếu mã nguồn và phiên bản của gói không thay đổi so với lần xây dựng trước, bước biên dịch sẽ được bỏ qua ngay lập tức.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-đảm-bảo-thứ-tự-biên-dịch-qua-độ-ưu-tiên-ui-priority`,children:[`2. Đảm bảo thứ tự biên dịch qua độ ưu tiên (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Mỗi gói trong `,(0,c.jsx)(t.code,{children:`package.json`}),` có thể khai báo độ ưu tiên biên dịch `,(0,c.jsx)(t.code,{children:`ui-priority`}),`. Bộ điều phối sắp xếp thứ tự biên dịch theo giá trị tăng dần, đảm bảo các thư viện nền tảng cơ sở (`,(0,c.jsx)(t.code,{children:`functional`}),`, `,(0,c.jsx)(t.code,{children:`styles`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`) được xây dựng trước các thành phần giao diện (`,(0,c.jsx)(t.code,{children:`d1`}),`) và tài liệu.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-tự-động-tìm-kiếm-tập-lệnh-biên-dịch`,children:`3. Tự động tìm kiếm tập lệnh biên dịch`}),`
`,(0,c.jsxs)(t.p,{children:[`Bộ điều phối tự động xác định câu lệnh biên dịch tối ưu cho từng gói theo thứ tự ưu tiên: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`quy-trình-từng-bước-những-việc-cần-làm`,children:`Quy trình từng bước (Những việc cần làm)`}),`
`,(0,c.jsx)(t.h3,{id:`bước-1-thiết-lập-cấu-hình-packagejson`,children:`Bước 1. Thiết lập cấu hình package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của mỗi gói, đảm bảo đã khai báo tập lệnh biên dịch và độ ưu tiên `,(0,c.jsx)(t.code,{children:`ui-priority`}),` nếu cần:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/example-package",
  "version": "1.0.0",
  "ui-priority": 400,
  "scripts": {
    "build": "vite build",
    "prepublishOnly": "npm run build"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-2-khởi-chạy-lệnh-xây-dựng`,children:`Bước 2. Khởi chạy lệnh xây dựng`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy lệnh `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` trong terminal của bạn:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Bộ điều phối sẽ quét thư mục `,(0,c.jsx)(t.code,{children:`packages/`}),`, sắp xếp các gói theo độ ưu tiên và chỉ biên dịch các gói có sự thay đổi về phiên bản:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Build packages(14)...
Build packages changed: 2
`})}),`
`,(0,c.jsx)(t.p,{children:`Nếu không có gói nào cần cập nhật, bộ điều phối sẽ kết thúc chỉ trong tích tắc:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Build packages(14)...
Build packages - no changes
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-3-kiểm-tra-tệp-nhật-ký-bộ-nhớ-đệm`,children:`Bước 3. Kiểm tra tệp nhật ký bộ nhớ đệm`}),`
`,(0,c.jsxs)(t.p,{children:[`Sau khi hoàn tất biên dịch, các phiên bản gói đã xây dựng được lưu tự động vào `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "@dxtmisha/functional-basic": "1.0.0",
  "@dxtmisha/functional": "1.0.0",
  "@dxtmisha/styles": "1.0.0",
  "@dxtmisha/constructor": "1.0.0",
  "@dxtmisha/d1": "1.0.0"
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-4-tái-biên-dịch-khi-cập-nhật-mã`,children:`Bước 4. Tái biên dịch khi cập nhật mã`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi bạn chỉnh sửa mã nguồn của gói và tăng số phiên bản trong `,(0,c.jsx)(t.code,{children:`package.json`}),`, việc chạy lại `,(0,c.jsx)(t.code,{children:`npx dxt-build-packages`}),` sẽ tự động phát hiện sự khác biệt phiên bản so với nhật ký và chỉ xây dựng lại gói đã sửa đổi.`]}),`
`,(0,c.jsxs)(t.h2,{id:`quản-lý-mức-độ-ưu-tiên-biên-dịch-ui-priority`,children:[`Quản lý mức độ ưu tiên biên dịch (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Thuộc tính số `,(0,c.jsx)(t.code,{children:`ui-priority`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),` xác định trình tự biên dịch. Số càng nhỏ thì gói càng được biên dịch trước:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`100 – 200 (Tiện ích cơ sở và Styles)`}),`: Các thư viện nền tảng không phụ thuộc nội bộ (`,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`300 – 400 (Lớp trừu tượng và Hàm dựng)`}),`: Lõi thành phần và giao thức (`,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/mcp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`500 (Độ ưu tiên mặc định)`}),`: Các thư viện thành phần giao diện người dùng (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/figma`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`600 – 900 (Tích hợp và Tài liệu)`}),`: Các gói ứng dụng và tài liệu cấp cao (`,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/storybook`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-cờ-cấu-hình-trong-packagejson`,children:`Các cờ cấu hình trong package.json`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-priority`}),` (number)`]}),`: Trọng số ưu tiên trong hàng đợi biên dịch (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-test`}),` (boolean)`]}),`: Nếu đặt là `,(0,c.jsx)(t.code,{children:`true`}),`, gói được coi là gói thử nghiệm và bị loại trừ khỏi quy trình xây dựng tự động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thứ tự ưu tiên tập lệnh`}),`: Bộ điều phối kiểm tra `,(0,c.jsx)(t.code,{children:`scripts`}),` và thực thi lệnh đầu tiên tìm thấy: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, sau đó đến `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, cuối cùng là `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-so-với-xây-dựng-thủ-công`,children:`Ưu điểm so với xây dựng thủ công`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiết kiệm tới 90% thời gian`}),`: Chỉ biên dịch các mô-đun thực sự có thay đổi phiên bản.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại bỏ lỗi phụ thuộc`}),`: Đảm bảo các thư viện cấp thấp luôn được biên dịch trước các thành phần phụ thuộc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Minh bạch tuyệt đối`}),`: Ghi lại đầy đủ trạng thái các bản dựng trong tệp nhật ký cục bộ.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};