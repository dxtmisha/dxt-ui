import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-build-packages - Xây dựng gói`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ `,(0,c.jsx)(t.code,{children:`dxt-build-packages`}),` cung cấp khả năng tự động xây dựng tăng dần các gói npm trong không gian làm việc monorepo. Công cụ này sử dụng lớp `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` và lớp bọc `,(0,c.jsx)(t.code,{children:`PackageFile`}),` để quét các thư mục gói, sắp xếp chúng theo mức độ ưu tiên, theo dõi các thay đổi phiên bản qua nhật ký bộ nhớ đệm cục bộ và chỉ biên dịch các gói có phiên bản được cập nhật.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét Monorepo`}),`: Quét thư mục gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`) và phát hiện tất cả các gói hoạt động có chứa tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sắp xếp theo thứ tự ưu tiên (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`: Tự động sắp xếp các gói dựa trên trường `,(0,c.jsx)(t.code,{children:`ui-priority`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),`), đảm bảo các phần phụ thuộc được xây dựng theo đúng thứ tự từ các tiện ích cơ bản đến các thành phần cấp cao.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),`: Ngăn chặn việc xây dựng lại các gói không thay đổi bằng cách theo dõi phiên bản trong tệp nhật ký cục bộ. Quá trình biên dịch chỉ được kích hoạt khi phiên bản của gói thay đổi hoặc chưa được lưu trong bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Mã xây dựng tùy chỉnh (`,(0,c.jsx)(t.code,{children:`--code`}),`)`]}),`: Cho phép ghi đè lệnh xây dựng (ví dụ: `,(0,c.jsx)(t.code,{children:`dxt-build-packages --code=types`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tệp nhật ký tùy chỉnh & Đồng bộ hóa `,(0,c.jsx)(t.code,{children:`.gitignore`}),` (`,(0,c.jsx)(t.code,{children:`--log`}),`)`]}),`: Cho phép chỉ định tên/đường dẫn tệp nhật ký (ví dụ: `,(0,c.jsx)(t.code,{children:`--log=ui-types`}),`), tự động đăng ký đường dẫn vào `,(0,c.jsx)(t.code,{children:`.gitignore`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết tập lệnh thông minh`}),`: Tự động chọn lệnh xây dựng đầu tiên có sẵn trong `,(0,c.jsx)(t.code,{children:`package.json`}),` theo thứ tự ưu tiên nghiêm ngặt: `,(0,c.jsx)(t.code,{children:`prepublishOnly`}),`, sau đó đến `,(0,c.jsx)(t.code,{children:`build-recovery`}),`, sau đó đến `,(0,c.jsx)(t.code,{children:`build`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại trừ gói thử nghiệm`}),`: Tự động bỏ qua các gói được đánh dấu bằng `,(0,c.jsx)(t.code,{children:`"ui-test": true`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-thức-hoạt-động`,children:`Cách thức hoạt động`}),`
`,(0,c.jsx)(t.p,{children:`Quy trình biên dịch gói chạy qua các bước sau:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quét và khởi tạo bộ nhớ đệm`}),`: Lớp `,(0,c.jsx)(t.code,{children:`BuildPackages`}),` đọc bộ nhớ đệm (`,(0,c.jsx)(t.code,{children:`./logs/ui-build.log.json`}),` hoặc tệp tùy chỉnh) và quét thư mục chứa các gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc gói`}),`: Một thể hiện của `,(0,c.jsx)(t.code,{children:`PackageFile`}),` được tạo cho mỗi thư mục, lọc bỏ các thư mục không phải gói và các gói thử nghiệm (`,(0,c.jsx)(t.code,{children:`"ui-test": true`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sắp xếp theo thứ tự ưu tiên`}),`: Các gói hợp lệ được sắp xếp theo thứ tự tăng dần dựa trên giá trị `,(0,c.jsx)(t.code,{children:`ui-priority`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`500`}),` nếu không được chỉ định).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra tính nhất quán của phiên bản`}),`: So sánh phiên bản hiện tại trong `,(0,c.jsx)(t.code,{children:`package.json`}),` với nhật ký phiên bản đã lưu trong bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi xây dựng`}),`: Nếu phiên bản gói khác biệt (hoặc chưa từng được xây dựng):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Nếu có `,(0,c.jsx)(t.code,{children:`--code`}),`, thực thi lệnh được chỉ định hoặc `,(0,c.jsx)(t.code,{children:`npm run <code-name>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ngược lại, tập lệnh xây dựng được giải quyết từ `,(0,c.jsx)(t.code,{children:`package.json`}),` theo mức ưu tiên (`,(0,c.jsx)(t.code,{children:`prepublishOnly`}),` -> `,(0,c.jsx)(t.code,{children:`build-recovery`}),` -> `,(0,c.jsx)(t.code,{children:`build`}),`).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cập nhật nhật ký`}),`: Khi xây dựng thành công, phiên bản gói được ghi lại trong bộ nhớ tạm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ bộ nhớ đệm & Cập nhật .gitignore`}),`: Nếu một hoặc nhiều gói được biên dịch (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), bộ nhớ đệm cập nhật sẽ được lưu lại vào đĩa và đường dẫn tệp nhật ký được thêm vào `,(0,c.jsx)(t.code,{children:`.gitignore`}),`. Nếu không có gói nào cần cập nhật, nó sẽ ghi nhật ký `,(0,c.jsx)(t.code,{children:`Build packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`sử-dụng`,children:`Sử dụng`}),`
`,(0,c.jsx)(t.p,{children:`Chạy lệnh xây dựng qua CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`# Xây dựng tăng dần mặc định
npx dxt-build-packages

# Xây dựng kiểu dữ liệu với tệp nhật ký riêng
npx dxt-build-packages --code=types --log=ui-types
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hoặc định cấu hình trong các tập lệnh `,(0,c.jsx)(t.code,{children:`package.json`}),` ở thư mục gốc của monorepo:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "build:packages": "dxt-build-packages",
    "build:types": "dxt-build-packages --code=types --log=ui-types"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-tùy-chọn-cli-có-sẵn`,children:`Các tùy chọn CLI có sẵn`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-c, --code <CODE>`}),`: Lệnh xây dựng tùy chỉnh hoặc tên tập lệnh npm (ví dụ: `,(0,c.jsx)(t.code,{children:`types`}),` hoặc `,(0,c.jsx)(t.code,{children:`npm run build:prod`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-d, --dir <DIR>`}),`: Đường dẫn thư mục gói (mặc định là `,(0,c.jsx)(t.code,{children:`packages`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`-l, --log <LOG>`}),`: Tên hoặc đường dẫn tệp nhật ký tùy chỉnh (mặc định là `,(0,c.jsx)(t.code,{children:`ui-build.log.json`}),` trong thư mục `,(0,c.jsx)(t.code,{children:`logs/`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`thông-tin-bổ-sung`,children:`Thông tin bổ sung`}),`
`,(0,c.jsxs)(t.h3,{id:`quản-lý-mức-độ-ưu-tiên-ui-priority`,children:[`Quản lý mức độ ưu tiên (`,(0,c.jsx)(t.code,{children:`ui-priority`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Để đảm bảo các thư viện cơ sở (ví dụ: các tiện ích cơ bản hoặc token thiết kế) được biên dịch trước các thành phần UI phụ thuộc, hãy chỉ định mức độ ưu tiên bằng số trong `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói (số nhỏ hơn sẽ thực thi trước):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "name": "@dxtmisha/functional-basic",
  "ui-priority": 100
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Các gói có `,(0,c.jsx)(t.code,{children:`ui-priority: 100`}),` sẽ được xây dựng trước các gói có mức ưu tiên mặc định `,(0,c.jsx)(t.code,{children:`500`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`loại-trừ-gói-thử-nghiệm-ui-test`,children:[`Loại trừ gói thử nghiệm (`,(0,c.jsx)(t.code,{children:`ui-test`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Để loại trừ một gói khỏi quá trình xây dựng tự động, hãy thêm cờ sau vào `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};