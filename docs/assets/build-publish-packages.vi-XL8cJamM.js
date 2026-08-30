import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/7. Lệnh/dxt-build-publish-packages - Công Bố Gói`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-build-publish-packages`,children:`dxt-build-publish-packages`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-build-publish-packages`}),` cung cấp khả năng tự động công bố (publish) tăng dần các gói npm trong không gian làm việc monorepo. Công cụ này sử dụng lớp `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` và trình bao bọc `,(0,c.jsx)(t.code,{children:`PackageFile`}),` để quét các thư mục gói, xác minh các bản cập nhật phiên bản qua bộ nhớ đệm nhật ký cục bộ và công bố các bản phát hành mới lên sổ đăng ký npm.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động quét Monorepo`}),`: Phát hiện các thư mục gói hoạt động dưới `,(0,c.jsx)(t.code,{children:`/packages/`}),` có chứa tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tăng dần theo phiên bản`}),`: Tránh các hoạt động công bố dư thừa bằng cách duy trì sổ đăng ký phiên bản cục bộ trong `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`. Quá trình công bố chỉ được kích hoạt khi phiên bản của gói trong `,(0,c.jsx)(t.code,{children:`package.json`}),` khác với giá trị đã lưu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết tập lệnh thông minh`}),`: Tự động thực thi tập lệnh `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),` nếu được định nghĩa trong `,(0,c.jsx)(t.code,{children:`package.json`}),`, chuyển về mặc định `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa phiên bản cơ sở`}),`: Tự động ghi lại các gói chưa theo dõi vào bộ nhớ đệm trong lần chạy đầu tiên mà không gửi các lệnh công bố không mong muốn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại trừ công bố`}),`: Tự động bỏ qua các gói được đánh dấu là riêng tư (`,(0,c.jsx)(t.code,{children:`"private": true`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),`) hoặc được gắn cờ `,(0,c.jsx)(t.code,{children:`"ui-no-publish": true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ghi nhật ký luồng theo thời gian thực`}),`: Chuyển tiếp toàn bộ luồng stdout và stderr của các lệnh công bố trực tiếp ra bảng điều khiển.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Quy trình công bố gói tự động hóa việc xác minh phiên bản và gửi phát hành:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quét và khởi tạo bộ nhớ đệm`}),`: Lớp `,(0,c.jsx)(t.code,{children:`BuildPublishPackages`}),` đọc bộ nhớ đệm công bố `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),` và quét thư mục gói (`,(0,c.jsx)(t.code,{children:`packages/`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc & Xác thực`}),`: Đối với mỗi thư mục, nó khởi tạo trình bao bọc `,(0,c.jsx)(t.code,{children:`PackageFile`}),` để xác minh rằng `,(0,c.jsx)(t.code,{children:`package.json`}),` tồn tại và không bị loại trừ (`,(0,c.jsx)(t.code,{children:`!packageFile.isNoPublish()`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra trạng thái công bố`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký cơ sở`}),`: Nếu gói chưa có trong bộ nhớ đệm nhật ký (`,(0,c.jsx)(t.code,{children:`this.log[name] === undefined`}),`), phiên bản hiện tại của gói sẽ được ghi vào bộ nhớ đệm mà không chạy lệnh công bố.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nâng cấp phiên bản`}),`: Nếu gói đã được ghi nhật ký và phiên bản của nó trong `,(0,c.jsx)(t.code,{children:`package.json`}),` khác với bộ nhớ đệm (`,(0,c.jsx)(t.code,{children:`isUpdate`}),`):`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Nếu tồn tại tập lệnh `,(0,c.jsx)(t.code,{children:`"publish-to-npm"`}),`, nó sẽ thực thi `,(0,c.jsx)(t.code,{children:`npm run publish-to-npm`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ngược lại, nó sẽ thực thi `,(0,c.jsx)(t.code,{children:`npm publish --access public`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa nhật ký`}),`: Sau khi công bố thành công một gói, phiên bản của nó được cập nhật trong bộ nhớ tạm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu trữ nhật ký`}),`: Nếu một hoặc nhiều gói được đăng ký hoặc công bố (`,(0,c.jsx)(t.code,{children:`changed > 0`}),`), bộ nhớ đệm cập nhật sẽ được lưu lại vào `,(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json`}),`. Nếu không có gói nào cần thay đổi, nó sẽ ghi nhật ký `,(0,c.jsx)(t.code,{children:`Publish packages - no changes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`sử-dụng`,children:`Sử dụng`}),`
`,(0,c.jsx)(t.p,{children:`Chạy lệnh công bố thông qua CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-build-publish-packages
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hoặc cấu hình trong phần scripts của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` gốc:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "publish:packages": "dxt-build-publish-packages"
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`thông-tin-chi-tiết-bổ-sung`,children:`Thông tin chi tiết bổ sung`}),`
`,(0,c.jsxs)(t.h3,{id:`tệp-bộ-nhớ-đệm-nhật-ký-ui-publishlogjson`,children:[`Tệp bộ nhớ đệm nhật ký (`,(0,c.jsx)(t.code,{children:`ui-publish.log.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Bộ nhớ đệm phiên bản cục bộ được lưu trữ tại:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`./logs/ui-publish.log.json
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn muốn buộc công bố lại tất cả các gói bất kể tính nhất quán của phiên bản, bạn có thể xóa tệp này hoặc đặt lại nội dung của nó thành `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`loại-trừ-các-gói-khỏi-quy-trình-công-bố`,children:`Loại trừ các gói khỏi quy trình công bố`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn muốn một gói được bỏ qua bởi trình công bố, hãy thêm một trong các thuộc tính sau vào tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói đó:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "private": true
}
`})}),`
`,(0,c.jsx)(t.p,{children:`hoặc:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ui-no-publish": true
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`lệnh-công-bố-tùy-chỉnh`,children:`Lệnh công bố tùy chỉnh`}),`
`,(0,c.jsxs)(t.p,{children:[`Bạn có thể xác định một tập lệnh công bố tùy chỉnh bên trong phần `,(0,c.jsx)(t.code,{children:`scripts`}),` của tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của gói:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "publish-to-npm": "npm publish --access public --tag next"
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};