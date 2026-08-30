import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/6. Phát hành gói (Publish Packages)`}),`
`,(0,c.jsx)(t.h1,{id:`hướng-dẫn-phát-hành-gói-lên-npm-publish-packages`,children:`Hướng dẫn Phát hành Gói lên npm (Publish Packages)`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong hệ thống thiết kế `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`, quy trình phân phối và phát hành các gói monorepo lên registry npm được tự động hóa hoàn toàn thông qua công cụ dòng lệnh `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),`. Lập trình viên không còn phải kiểm tra phiên bản thủ công trên npm, di chuyển vào từng thư mục gói riêng lẻ hoặc lo lắng về xung đột phiên bản phát hành.`]}),`
`,(0,c.jsx)(t.p,{children:`Công cụ tự động quét thư mục các gói, kiểm tra bất đồng bộ phiên bản hiện tại trên registry npm công khai và xuất bản an toàn chỉ những gói đã được cập nhật.`}),`
`,(0,c.jsx)(t.h2,{id:`các-ưu-điểm-vượt-trội`,children:`Các ưu điểm vượt trội`}),`
`,(0,c.jsx)(t.h3,{id:`1-phân-tích-vi-sai-tự-động-với-npm-registry`,children:`1. Phân tích vi sai tự động với npm Registry`}),`
`,(0,c.jsxs)(t.p,{children:[`Trước khi phát hành, `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` thực hiện lệnh kiểm tra `,(0,c.jsx)(t.code,{children:`npm view <package> version`}),` cho từng gói. Chỉ những gói có phiên bản cục bộ mới hơn phiên bản trên npm (hoặc các gói xuất bản lần đầu) mới được phát hành.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-phát-hành-không-xung-đột-zero-conflicts`,children:`2. Phát hành không xung đột (Zero Conflicts)`}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ ngăn chặn hoàn toàn các lỗi `,(0,c.jsx)(t.code,{children:`E403`}),` / `,(0,c.jsx)(t.code,{children:`E409`}),` (Không thể ghi đè phiên bản đã tồn tại) bằng cách loại trừ triệt để việc xuất bản lại các gói không thay đổi.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-tự-động-cách-ly-các-gói-nội-bộ-và-riêng-tư`,children:`3. Tự động cách ly các gói nội bộ và riêng tư`}),`
`,(0,c.jsxs)(t.p,{children:[`Bộ điều phối tự động bỏ qua các gói riêng tư (`,(0,c.jsx)(t.code,{children:`"private": true`}),`) cũng như các gói được gắn cờ `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`quy-trình-từng-bước-những-việc-cần-làm`,children:`Quy trình từng bước (Những việc cần làm)`}),`
`,(0,c.jsx)(t.h3,{id:`bước-1-thiết-lập-cấu-hình-packagejson`,children:`Bước 1. Thiết lập cấu hình package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói, đảm bảo tên gói, phiên bản và tập lệnh phát hành được cấu hình chính xác:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/example-package",
  "version": "1.0.1",
  "scripts": {
    "publish-to-npm": "npm publish --access public"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-2-nâng-cấp-phiên-bản-gói-bump-version`,children:`Bước 2. Nâng cấp phiên bản gói (Bump Version)`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi các thay đổi mã nguồn đã sẵn sàng phát hành, tăng số phiên bản trong tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói mục tiêu (ví dụ: từ `,(0,c.jsx)(t.code,{children:`1.0.0`}),` lên `,(0,c.jsx)(t.code,{children:`1.0.1`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`bước-3-khởi-chạy-lệnh-phát-hành`,children:`Bước 3. Khởi chạy lệnh phát hành`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy lệnh `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` trong terminal từ thư mục gốc của monorepo:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-publish-packages
`})}),`
`,(0,c.jsx)(t.p,{children:`Bộ điều phối sẽ kiểm tra registry npm và chỉ xuất bản các gói đã được cập nhật:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Publish packages(14)...
Publish packages changed: 1
`})}),`
`,(0,c.jsx)(t.p,{children:`Nếu tất cả các gói trong monorepo đều khớp với phiên bản trên npm, sẽ không có hành động phát hành nào được thực hiện:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Publish packages(14)...
Publish packages - no changes
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-cờ-cấu-hình-trong-packagejson`,children:`Các cờ cấu hình trong package.json`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ui-no-publish`}),` (boolean)`]}),`: Nếu đặt là `,(0,c.jsx)(t.code,{children:`true`}),`, gói sẽ bị loại trừ khỏi quy trình phát hành bất kể phiên bản có thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`private`}),` (boolean)`]}),`: Các gói riêng tư sẽ tự động bị bỏ qua.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`publish-to-npm`}),` (script)`]}),`: Nếu được khai báo trong `,(0,c.jsx)(t.code,{children:`scripts`}),`, bộ điều phối sẽ thực thi `,(0,c.jsx)(t.code,{children:`npm run publish-to-npm`}),`. Ngược lại, lệnh dự phòng mặc định là `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-so-với-phát-hành-thủ-công`,children:`Ưu điểm so với phát hành thủ công`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn phát hành tuyệt đối`}),`: Loại bỏ sai sót của con người và lỗi phát hành nhầm gói.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát hành hàng loạt chỉ với một câu lệnh`}),`: Cho phép phát hành cập nhật đồng thời hàng chục gói monorepo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp liền mạch CI/CD`}),`: Hoàn hảo cho các luồng tự động hóa khi hợp nhất vào nhánh chính (main).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};