import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-package - Khởi tạo Cấu trúc Package`}),`
`,(0,c.jsx)(n.h1,{id:`dxt-package`,children:`dxt-package`}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`dxt-package`}),` tự động hóa việc khởi tạo cấu trúc package mới và môi trường phát triển dựa trên các mẫu được xác định trước. Dưới mui xe, nó sử dụng các lớp `,(0,c.jsx)(n.code,{children:`PackageInit`}),` và `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` để xử lý các thư mục package trống và tạo bộ khung nền tảng cho chúng.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động Quét Thư mục`}),`: Tự động quét thư mục cơ sở được định cấu hình (mặc định là `,(0,c.jsx)(n.code,{children:`packages/`}),`) và xác định các thư mục package trống cần được khởi tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo khung dựa trên mẫu`}),`: Hỗ trợ áp dụng các mẫu cụ thể để tùy chỉnh quá trình tạo, điều chỉnh cấu trúc khung dựa trên `,(0,c.jsx)(n.code,{children:`type`}),` của package được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình Linh hoạt`}),`: Cho phép ghi đè loại package mặc định, các mẫu và thư mục cơ sở đích thông qua các đối số dòng lệnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-thức-hoạt-động`,children:`Cách thức hoạt động?`}),`
`,(0,c.jsx)(n.p,{children:`Quy trình khởi tạo package giúp đơn giản hóa việc tạo các package mới:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Script đọc các đối số được cung cấp để xác định `,(0,c.jsx)(n.code,{children:`type`}),` của package (mặc định là `,(0,c.jsx)(n.code,{children:`library`}),`), các `,(0,c.jsx)(n.code,{children:`templates`}),` và thư mục đích `,(0,c.jsx)(n.code,{children:`dir`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Nó quét thư mục đích để tìm bất kỳ thư mục trống nào (các thư mục không chứa phần tử con).`}),`
`,(0,c.jsxs)(n.li,{children:[`Đối với mỗi thư mục trống được tìm thấy, nó khởi tạo một phiên bản `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, truyền vào đường dẫn package, loại và các mẫu.`]}),`
`,(0,c.jsx)(n.li,{children:`Sau đó, hệ thống xử lý các cấu hình này để tạo ra các tệp bắt buộc và cấu trúc môi trường cho package, giúp nó sẵn sàng để phát triển.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình-và-khởi-chạy`,children:`Cấu hình và khởi chạy`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo các thư mục package trống mới được tạo với loại `,(0,c.jsx)(n.code,{children:`library`}),` mặc định, hãy chạy:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Để chỉ định một loại package tùy chỉnh (ví dụ: `,(0,c.jsx)(n.code,{children:`vue`}),`), hãy chạy:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue
`})}),`
`,(0,c.jsx)(n.p,{children:`Để chỉ định loại tùy chỉnh và áp dụng các mẫu cụ thể, hãy truyền chúng dưới dạng đối số:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue "template1,template2"
`})}),`
`,(0,c.jsx)(n.p,{children:`Bạn cũng có thể chỉ định một thư mục cơ sở tùy chỉnh làm đối số thứ ba:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npx dxt-package vue "template1" "packages/custom-dir"
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-được-tạo`,children:`Cấu trúc được tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khi lệnh xử lý một thư mục trống, nó sẽ tạo ra các tệp cơ sở cần thiết cho loại package và các mẫu đã cho. Điều này thường bao gồm các tệp cấu trúc, cấu hình cơ bản và điểm truy cập, biến một thư mục trống thành một môi trường package đầy đủ chức năng trong không gian làm việc.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};