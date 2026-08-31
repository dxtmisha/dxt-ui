import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignFigma - Lớp tích hợp Layout Figma`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designfigma`,children:`Lớp DesignFigma`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` cung cấp hành vi bộ điều khiển cốt lõi để kết nối với REST API của Figma và trích xuất các tọa độ layout cũng như cấu trúc hình ảnh vector. Nó trừu tượng hóa việc ủy quyền mã thông báo và đơn giản hóa các yêu cầu hình ảnh nút hàng loạt thành các quy trình bất đồng bộ sạch sẽ.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý`}),`: Yêu cầu bắt buộc phải có gói đăng ký Figma doanh nghiệp (Figma Enterprise hoặc Organization) để sử dụng lớp này và giao tiếp với các điểm cuối Figma mục tiêu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ủy quyền API Tách biệt`}),` — Tự động tìm lại các thuộc tính hệ thống để truy xuất mã thông báo Figma đang hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tùy chọn Tạo sinh SVG`}),` — Yêu cầu các nút với thẻ ID được bảo toàn và tham số viền chữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi Mạng An toàn`}),` — Xử lý các lỗi mạng và giới hạn API một cách mượt mờ, trả về các giá trị dự phòng `,(0,c.jsx)(t.code,{children:`undefined`}),` an toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo một phiên bản `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` mới với thông tin xác thực tệp Figma được yêu cầu.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileKey: string`}),` — ID duy nhất của tệp Figma mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nodeId?: string`}),` — ID nút cụ thể bên trong tệp cần nhắm mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`token?: string`}),` — Mã thông báo Figma API tùy chọn. Mặc định là `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getFigmaToken()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignFigma } from '@dxtmisha/scripts'

const integrator = new DesignFigma('abc123xyz456', '1-24')
await integrator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Phương thức điều phối chính kích hoạt quá trình truy xuất tài nguyên vector và in bản đồ kết quả ra console.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`await integrator.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`initimage`,children:(0,c.jsx)(t.code,{children:`initImage`})}),`
`,(0,c.jsx)(t.p,{children:`Yêu cầu các URL hình ảnh layout vector từ Figma API cho các ID nút được chỉ định dưới định dạng SVG.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<Record<string, string> | undefined>`}),` — Một hứa hẹn (promise) phân giải thành một đối tượng ánh xạ các ID nút tới các URL SVG tương ứng của chúng, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` khi xảy ra lỗi.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const images = await integrator.initImage()
console.log(images) // { "1-24": "https://..." }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};