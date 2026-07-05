import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-build-publish-packages - Công Bố Gói`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-build-publish-packages`,children:`dxt-build-publish-packages`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-build-publish-packages`}),` cung cấp khả năng tự động công bố (publish) các gói npm trong không gian làm việc. Công cụ này sử dụng `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` và `,(0,c.jsx)(n.code,{children:`PackageFile`}),` để quét các thư mục thư viện hoạt động, theo dõi các phiên bản và công bố gói lên npm khi phát hiện phiên bản mới.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động quét Monorepo`}),`: Tự động phát hiện các thư mục gói đang hoạt động dưới `,(0,c.jsx)(n.code,{children:`/packages/`}),` có chứa tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm tăng dần dựa trên Phiên bản`}),`: Tránh các hoạt động công bố dư thừa bằng cách duy trì bộ nhớ đệm công bố cục bộ trong `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`. Nó chỉ kích hoạt các hoạt động công bố nếu phiên bản hiện tại của gói trong `,(0,c.jsx)(n.code,{children:`package.json`}),` thay đổi so với phiên bản được lưu trong bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết Tập lệnh Thông minh`}),`: Tự động thực thi tập lệnh `,(0,c.jsx)(n.code,{children:`"publish-to-npm"`}),` nếu nó được định nghĩa trong các tập lệnh của gói, và chuyển sang lệnh tiêu chuẩn `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),` nếu không tìm thấy tập lệnh đầu tiên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Loại trừ Công bố`}),`: Tự động bỏ qua các gói được đánh dấu là riêng tư (`,(0,c.jsx)(n.code,{children:`"private": true`}),`) hoặc có thuộc tính `,(0,c.jsx)(n.code,{children:`"ui-no-publish": true`}),` trong tệp `,(0,c.jsx)(n.code,{children:`package.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(n.p,{children:`Quy trình công bố gói tự động hóa việc kiểm tra và gửi lệnh công bố:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét Thư mục`}),`: Lớp `,(0,c.jsx)(n.code,{children:`BuildPublishPackages`}),` quét thư mục gói mục tiêu (mặc định là `,(0,c.jsx)(n.code,{children:`/packages/`}),`) và đọc tệp nhật ký bộ nhớ đệm công bố `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc & Xác thực`}),`: Đối với mỗi thư mục, nó khởi tạo một trình bao bọc `,(0,c.jsx)(n.code,{children:`PackageFile`}),` để xác minh rằng đó là một gói hợp lệ và không bị loại trừ khỏi quy trình công bố.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Công bố`}),`: Nếu phát hiện phiên bản mới hoặc gói chưa được ghi nhận trong bộ nhớ đệm:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nếu tồn tại tập lệnh `,(0,c.jsx)(n.code,{children:`"publish-to-npm"`}),`, nó sẽ thực thi `,(0,c.jsx)(n.code,{children:`npm run publish-to-npm`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ngược lại, nó sẽ thực thi lệnh `,(0,c.jsx)(n.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa Nhật ký`}),`: Sau khi công bố thành công một gói, phiên bản của nó được cập nhật trong bộ nhớ đệm trong bộ nhớ tạm (in-memory cache).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ Nhật ký`}),`: Nếu một hoặc nhiều gói được công bố thành công, bộ nhớ đệm cập nhật sẽ được lưu lại vào `,(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`thông-tin-chi-tiết-bổ-sung`,children:`Thông tin chi tiết bổ sung`}),`
`,(0,c.jsxs)(n.h3,{id:`tệp-bộ-nhớ-đệm-nhật-ký-ui-publishlogjson`,children:[`Tệp bộ nhớ đệm nhật ký (`,(0,c.jsx)(n.code,{children:`ui-publish.log.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Bộ nhớ đệm cục bộ được lưu trữ tại:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:`./logs/ui-publish.log.json
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn muốn buộc công bố lại tất cả các gói bất kể tính nhất quán của phiên bản, bạn có thể xóa tệp này hoặc đặt lại nội dung của nó thành dấu ngoặc nhọn trống `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`loại-trừ-các-gói-khỏi-quy-trình-công-bố`,children:`Loại trừ các gói khỏi quy trình công bố`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn muốn một gói được bỏ qua bởi trình công bố, hãy thêm một trong các thuộc tính sau vào tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` của gói đó:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "private": true
}
`})}),`
`,(0,c.jsx)(n.p,{children:`hoặc:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "ui-no-publish": true
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};