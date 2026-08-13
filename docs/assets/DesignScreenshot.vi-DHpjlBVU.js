import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignScreenshot - Chụp ảnh màn hình tự động`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designscreenshot`,children:`Lớp DesignScreenshot`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignScreenshot`}),` là một tiện ích chuyên dụng dành cho nhà phát triển được thiết kế để tự động chụp ảnh màn hình của thành phần/trang, sao chép mã nguồn HTML và các định nghĩa kiểu CSS bằng cách khởi chạy một máy chủ phát triển cục bộ trong nền và quét nó bằng trình duyệt không đầu (headless browser).`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Khởi chạy Server`}),` — khởi chạy tiến trình con `,(0,c.jsx)(t.code,{children:`npm run dev`}),` trong nền và đọc dữ liệu luồng đầu ra của nó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Phát hiện Port`}),` — phân tích luồng đầu ra của terminal để trích xuất URL máy chủ cục bộ (`,(0,c.jsx)(t.code,{children:`http://localhost:...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quy trình Chụp Thống nhất`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`BrowserItem`}),` để chụp ảnh màn hình toàn trang, lấy mã nguồn HTML body và trích xuất các kiểu CSS đang hoạt động, ghi tất cả các tệp vào thư mục `,(0,c.jsx)(t.code,{children:`./ai-screenshot/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vòng lặp Tự kết thúc`}),` — tự động dừng tiến trình máy chủ con trong nền ngay khi việc chụp ảnh màn hình hoàn tất thành công để bảo toàn tài nguyên hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`DesignScreenshot`}),` có thể được khởi tạo với tiền tố đường dẫn tệp đầu ra tùy chọn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: string`}),` — (Tùy chọn) Tiền tố đường dẫn tệp đầu ra (mặc định: `,(0,c.jsx)(t.code,{children:`'./ai-screenshot/screenshot'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignScreenshot } from '@dxtmisha/scripts'

const capturer = new DesignScreenshot('./ai-screenshot/mockup-preview')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsx)(t.h4,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`Bắt đầu quá trình chụp ảnh màn hình: tạo cấu trúc thư mục đầu ra, khởi chạy máy chủ phát triển cục bộ và gắn các bộ lắng nghe luồng đầu ra để kích hoạt việc chụp ảnh màn hình.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`await capturer.make()
`})}),`
`,(0,c.jsx)(t.h4,{id:`makeurl`,children:(0,c.jsx)(t.code,{children:`makeUrl`})}),`
`,(0,c.jsx)(t.p,{children:`Trích xuất địa chỉ máy chủ cục bộ từ luồng đầu ra của lệnh terminal.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string`}),` — Khối dữ liệu stdout của terminal.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.h3,{id:`các-phương-thức--thuộc-tính-được-bảo-vệ-protected`,children:`Các Phương thức & Thuộc tính được Bảo vệ (Protected)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isReading: boolean`}),` — Cờ bảo vệ để ngăn chặn việc gọi chụp ảnh màn hình chồng chéo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url?: string`}),` — Địa chỉ máy chủ phát triển cục bộ được phát hiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener(): Promise<boolean>`}),` — Trình kích hoạt trình duyệt không đầu giúp chụp ảnh màn hình, mã HTML body và biểu kiểu kiểu CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`makeServer(): this`}),` — Khởi chạy tiến trình con `,(0,c.jsx)(t.code,{children:`npm run dev`}),` trong nền.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};