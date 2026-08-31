import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-build-packages - Xây Dựng Gói`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` cung cấp khả năng tự động xây dựng (build) tăng dần các gói npm trong không gian làm việc monorepo. Công cụ này sử dụng lớp `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` và trình bao bọc `,(0,c.jsx)(t.code,{children:`PackageFile`}),` để quét các thư mục gói, sắp xếp theo mức độ ưu tiên xây dựng, theo dõi phiên bản qua bộ nhớ đệm nhật ký cục bộ và chỉ biên dịch các gói có phiên bản được cập nhật.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét Monorepo`}),`: Quét thư mục gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`) và phát hiện tất cả các gói hoạt động có chứa tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sắp xếp theo thứ tự ưu tiên (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Tự động sắp xếp các gói dựa trên thuộc tính `,(0,c.jsx)(t.code,{children:`ui-priority`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),`), đảm bảo thứ tự xây dựng chính xác từ các tiện ích cơ sở đến các thành phần cấp cao.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),`: Ngăn chặn việc xây dựng lại các gói không thay đổi bằng cách theo dõi phiên bản trong `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. Quá trình biên dịch chỉ được kích hoạt khi phiên bản của gói thay đổi hoặc chưa được lưu trong bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết tập lệnh thông minh`}),`: Tự động chọn lệnh xây dựng đầu tiên có sẵn trong `,(0,c.jsx)(t.code,{children:`package.json`}),` theo thứ tự ưu tiên nghiêm ngặt: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, sau đó đến `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, rồi đến `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại trừ gói thử nghiệm`}),`: Tự động bỏ qua các gói được đánh dấu `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Quy trình biên dịch gói thực hiện theo các bước chi tiết sau:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quét và khởi tạo bộ nhớ đệm`}),`: Lớp `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` đọc bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` và quét thư mục chứa các gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc gói`}),`: Một phiên bản `,(0,c.jsx)(t.code,{children:`PackageFile`}),` được tạo cho mỗi thư mục, lọc ra các thư mục không phải là gói và các gói thử nghiệm (`,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sắp xếp theo độ ưu tiên`}),`: Các gói hợp lệ được sắp xếp theo thứ tự tăng dần của giá trị `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),` nếu không được chỉ định).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra tính nhất quán của phiên bản`}),`: So sánh phiên bản hiện tại trong `,(0,c.jsx)(t.code,{children:`package.json`}),` với phiên bản được lưu trong bộ nhớ đệm nhật ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi lệnh xây dựng`}),`: Nếu phiên bản gói khác biệt (hoặc chưa từng được xây dựng):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Tập lệnh xây dựng được xác định theo thứ tự ưu tiên trong `,(0,c.jsx)(t.code,{children:`package.json`}),`:`,`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Nếu `,(0,c.jsx)(t.code,{children:`"prepublishOnly"`}),` được định nghĩa, nó sẽ chạy `,(0,c.jsx)(t.code,{children:`npm run prepublishOnly`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ngược lại, nếu `,(0,c.jsx)(t.code,{children:`"build-recovery"`}),` được định nghĩa, nó sẽ chạy `,(0,c.jsx)(t.code,{children:`npm run build-recovery`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ngược lại, nếu `,(0,c.jsx)(t.code,{children:`"build"`}),` được định nghĩa, nó sẽ chạy `,(0,c.jsx)(t.code,{children:`npm run build`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cập nhật nhật ký`}),`: Khi xây dựng thành công, phiên bản mới của gói sẽ được ghi nhận vào bộ nhớ tạm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ bộ nhớ đệm`}),`: Nếu một hoặc nhiều gói được biên dịch (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), bộ nhớ đệm cập nhật sẽ được lưu lại vào `,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),`. Nếu không có gói nào cần cập nhật, nó sẽ ghi nhật ký `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`sử-dụng`,children:`Sử dụng`}),`
`,(0,c.jsx)(t.p,{children:`Chạy lệnh xây dựng gói thông qua CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hoặc cấu hình trong phần scripts của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` gốc:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build:packages": "dxt-build-packages"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`thông-tin-chi-tiết-bổ-sung`,children:`Thông tin chi tiết bổ sung`}),`
`,(0,c.jsxs)(t.h3,{id:`quản-lý-mức-độ-ưu-tiên-xây-dựng-ui-priority`,children:[`Quản lý mức độ ưu tiên xây dựng (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Để đảm bảo các thư viện nền tảng (ví dụ: các tiện ích cơ bản hoặc token thiết kế) được biên dịch trước các thành phần giao diện phụ thuộc, hãy chỉ định mức độ ưu tiên số trong tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói (số nhỏ hơn sẽ được xây dựng trước):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/functional-basic",
  "ui-priority": 100
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Các gói có `,(0,c.jsx)(t.code,{children:`ui-priority: 100`}),` sẽ được xây dựng trước các gói có độ ưu tiên mặc định `,(0,c.jsx)(t.code,{children:`500`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`tệp-bộ-nhớ-đệm-nhật-ký-ui-buildlogjson`,children:[`Tệp bộ nhớ đệm nhật ký (`,(0,c.jsx)(t.code,{children:`ui-build.log.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Bộ nhớ đệm phiên bản cục bộ được lưu trữ tại:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Để buộc xây dựng lại toàn bộ tất cả các gói bất kể tính nhất quán của phiên bản, hãy xóa tệp này hoặc đặt lại nội dung của nó thành `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`loại-trừ-các-gói-thử-nghiệm-ui-test`,children:[`Loại trừ các gói thử nghiệm (`,(0,c.jsx)(t.code,{children:`ui-test`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Để loại trừ một gói khỏi quy trình xây dựng tự động, hãy thêm cờ sau vào `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói đó:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};