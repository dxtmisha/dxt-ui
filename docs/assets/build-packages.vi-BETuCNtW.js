import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/bin/dxt-build-packages - Xây Dựng Gói`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-packages`,children:`dxt-build-packages`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-build-packages`}),` cung cấp khả năng tự động xây dựng (build) các gói npm đã thay đổi trong không gian làm việc. Công cụ này sử dụng `,(0,c.jsx)(n.code,{children:`BuildPackages`}),` và `,(0,c.jsx)(n.code,{children:`PackageFile`}),` để quét các thư mục thư viện hoạt động, theo dõi các phiên bản và biên dịch tăng dần các cấu trúc gói khi phát hiện thay đổi.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động quét Monorepo`}),`: Tự động phát hiện các thư mục gói đang hoạt động dưới `,(0,c.jsx)(n.code,{children:`/packages/`}),` có chứa tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm tăng dần dựa trên Phiên bản`}),`: Tránh các hoạt động xây dựng dư thừa bằng cách duy trì bộ nhớ đệm xây dựng cục bộ trong `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`. Nó chỉ kích hoạt các hoạt động xây dựng nếu phiên bản hiện tại của gói trong `,(0,c.jsx)(n.code,{children:`package.json`}),` thay đổi so với phiên bản được lưu trong bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết Tập lệnh Thông minh`}),`: Tự động thực thi tập lệnh `,(0,c.jsx)(n.code,{children:`"build-recovery"`}),` nếu nó được định nghĩa trong các tập lệnh của gói, và chuyển sang tập lệnh tiêu chuẩn `,(0,c.jsx)(n.code,{children:`"build"`}),` nếu không tìm thấy tập lệnh đầu tiên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Loại trừ Gói Thử nghiệm`}),`: Tự động bỏ qua các gói được đánh dấu là thử nghiệm (chứa `,(0,c.jsx)(n.code,{children:`"ui-test": true`}),` trong tệp `,(0,c.jsx)(n.code,{children:`package.json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(n.p,{children:`Quy trình biên dịch gói tự động hóa việc kiểm tra và gửi lệnh xây dựng:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét Thư mục`}),`: Lớp `,(0,c.jsx)(n.code,{children:`BuildPackages`}),` quét thư mục gói mục tiêu (mặc định là `,(0,c.jsx)(n.code,{children:`/packages/`}),`) và đọc tệp nhật ký bộ nhớ đệm xây dựng `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc & Xác thực`}),`: Đối với mỗi thư mục, nó khởi tạo một trình bao bọc `,(0,c.jsx)(n.code,{children:`PackageFile`}),` để xác minh rằng đó là một gói hợp lệ, không phải là gói thử nghiệm và phiên bản hiện tại của nó khác với phiên bản được ghi lại trong bộ nhớ đệm xây dựng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Xây dựng`}),`: Nếu yêu cầu cập nhật, nó sẽ kiểm tra các tập lệnh trong tệp `,(0,c.jsx)(n.code,{children:`package.json`}),`:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nếu tồn tại tập lệnh `,(0,c.jsx)(n.code,{children:`"build-recovery"`}),`, nó sẽ thực thi `,(0,c.jsx)(n.code,{children:`npm run build-recovery`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ngược lại, nếu tồn tại tập lệnh `,(0,c.jsx)(n.code,{children:`"build"`}),`, nó sẽ thực thi `,(0,c.jsx)(n.code,{children:`npm run build`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa Nhật ký`}),`: Sau khi biên dịch thành công một gói, phiên bản của nó được cập nhật trong bộ nhớ đệm trong bộ nhớ tạm (in-memory cache).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ Nhật ký`}),`: Nếu một hoặc nhiều gói được xây dựng thành công, bộ nhớ đệm cập nhật sẽ được lưu lại vào `,(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`thông-tin-chi-tiết-bổ-sung`,children:`Thông tin chi tiết bổ sung`}),`
`,(0,c.jsxs)(n.h3,{id:`tệp-bộ-nhớ-đệm-nhật-ký-ui-buildlogjson`,children:[`Tệp bộ nhớ đệm nhật ký (`,(0,c.jsx)(n.code,{children:`ui-build.log.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Bộ nhớ đệm cục bộ được lưu trữ tại:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`./logs/ui-build.log.json
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn muốn buộc xây dựng lại tất cả các gói bất kể tính nhất quán của phiên bản, bạn có thể xóa tệp này hoặc đặt lại nội dung của nó thành dấu ngoặc nhọn trống `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`loại-trừ-các-gói-thử-nghiệm`,children:`Loại trừ các gói thử nghiệm`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn muốn một gói được bỏ qua bởi trình xây dựng, hãy thêm thuộc tính sau vào tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` của gói đó:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "ui-test": true
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};