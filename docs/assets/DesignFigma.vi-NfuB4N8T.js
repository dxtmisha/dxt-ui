import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignFigma - Lớp tích hợp Layout Figma`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designfigma`,children:`Lớp DesignFigma`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` cung cấp hành vi bộ điều khiển cốt lõi để kết nối với REST API của Figma và trích xuất các tọa độ layout cũng như cấu trúc hình ảnh vector. Nó trừu tượng hóa việc ủy quyền mã thông báo và đơn giản hóa các yêu cầu hình ảnh nút hàng loạt thành các quy trình bất đồng bộ sạch sẽ.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Lưu ý`}),`: Yêu cầu bắt buộc phải có gói đăng ký Figma doanh nghiệp (Figma Enterprise hoặc Organization) để sử dụng lớp này và giao tiếp với các điểm cuối Figma mục tiêu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ủy quyền API Tách biệt`}),` — Tự động tìm lại các thuộc tính hệ thống để truy xuất mã thông báo Figma đang hoạt động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tùy chọn Tạo sinh SVG`}),` — Yêu cầu các nút với thẻ ID được bảo toàn và tham số viền chữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Mạng An toàn`}),` — Xử lý các lỗi mạng và giới hạn API một cách mượt mờ, trả về các giá trị dự phòng `,(0,c.jsx)(n.code,{children:`undefined`}),` an toàn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo một phiên bản `,(0,c.jsx)(n.code,{children:`DesignFigma`}),` mới với thông tin xác thực tệp Figma được yêu cầu.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey: string`}),` — ID duy nhất của tệp Figma mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId?: string`}),` — ID nút cụ thể bên trong tệp cần nhắm mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`token?: string`}),` — Mã thông báo Figma API tùy chọn. Mặc định là `,(0,c.jsx)(n.code,{children:`PropertiesConfig.getFigmaToken()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignFigma } from '@dxtmisha/scripts'

const integrator = new DesignFigma('abc123xyz456', '1-24')
await integrator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Phương thức điều phối chính kích hoạt quá trình truy xuất tài nguyên vector và in bản đồ kết quả ra console.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await integrator.make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`initimage`,children:(0,c.jsx)(n.code,{children:`initImage`})}),`
`,(0,c.jsx)(n.p,{children:`Yêu cầu các URL hình ảnh layout vector từ Figma API cho các ID nút được chỉ định dưới định dạng SVG.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<Record<string, string> | undefined>`}),` — Một hứa hẹn (promise) phân giải thành một đối tượng ánh xạ các ID nút tới các URL SVG tương ứng của chúng, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` khi xảy ra lỗi.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const images = await integrator.initImage()
console.log(images) // { "1-24": "https://..." }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};