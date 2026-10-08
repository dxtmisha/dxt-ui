import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/# Giới thiệu`}),`
`,(0,c.jsx)(t.h1,{id:`dxtmishamedia`,children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`,rel:`nofollow`,children:`@dxtmisha/media`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` là gói tài nguyên đa phương tiện, biểu tượng vector và tập dữ liệu địa lý gọn nhẹ cho hệ thống thiết kế DXT UI và các ứng dụng web hiện đại. Gói cung cấp khả năng phân loại định dạng tệp, siêu dữ liệu mạng xã hội, cờ các quốc gia vector và dữ liệu địa lý ISO 3166-1 theo cấu trúc module tối ưu hóa tree-shaking và hoàn toàn không phụ thuộc vào thư viện ngoài.`]}),`
`,(0,c.jsx)(t.h2,{id:`cài-đặt`,children:`Cài đặt`}),`
`,(0,c.jsx)(t.p,{children:`Cài đặt thư viện qua npm:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm i @dxtmisha/media
`})}),`
`,(0,c.jsx)(t.h2,{id:`tại-sao-nên-dùng-thư-viện-này`,children:`Tại sao nên dùng thư viện này?`}),`
`,(0,c.jsx)(t.p,{children:`Hầu hết các ứng dụng web đều gặp các tác vụ xử lý tệp tin, liên kết mạng xã hội và định danh quốc tế (mã vùng điện thoại, chọn quốc gia, hiển thị cờ). Việc tự quản lý các thư mục SVG rời rạc hoặc sao chép mã phân loại MIME giữa các dự án dễ gây ra lỗi không đồng nhất và làm nặng dự án.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` giải quyết triệt để các vấn đề này:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Không có phụ thuộc runtime bên ngoài`}),` — chỉ bao gồm các tài sản SVG tối ưu, dữ liệu thuần và các lớp TypeScript gọn nhẹ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ Tree-shaking`}),` — chỉ nạp những tệp, cờ hoặc biểu tượng mạng xã hội thực sự cần thiết.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độc lập với framework & An toàn cho SSR`}),` — hoạt động trơn tru trong Vue 3, Nuxt, React, Vite và Node.js.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsx)(t.h3,{id:`1-phân-loại-tệp--biểu-tượng-vector`,children:`1. Phân loại tệp & Biểu tượng Vector`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFile`})}),` — phân tích đường dẫn URL, tên tệp, phần mở rộng và đối tượng `,(0,c.jsx)(t.code,{children:`File`}),` của trình duyệt. Trích xuất tên cơ sở, xác định danh mục tệp (hình ảnh, video, tài liệu, lưu trữ, v.v.) và phân giải biểu tượng vector SVG.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFiles`})}),` — sổ đăng ký siêu dữ liệu tĩnh hỗ trợ tra cứu hơn 85 phần mở rộng tệp, khớp định dạng MIME và biểu tượng trung tính cấp danh mục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaFileIcon`})}),` — sổ đăng ký tập trung cho phép thêm hoặc ghi đè biểu tượng SVG tùy chỉnh trên phạm vi toàn cục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`fileIcons`}),` & `,(0,c.jsx)(t.code,{children:`registerFileIcons`})]}),` — truy cập toàn bộ từ điển biểu tượng qua `,(0,c.jsx)(t.code,{children:`fileIcons`}),` hoặc đăng ký tất cả biểu tượng mặc định vào `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` chỉ bằng một lệnh gọi `,(0,c.jsx)(t.code,{children:`registerFileIcons`}),` từ `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-mạng-xã-hội--đường-dẫn-hồ-sơ`,children:`2. Mạng xã hội & Đường dẫn hồ sơ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`MediaSocial`})}),` — cấu hình và hỗ trợ hơn 35 nền tảng mạng xã hội phổ biến (GitHub, Telegram, LinkedIn, X, WeChat, Zalo, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý URL & Tên người dùng`}),` — tự động tạo liên kết hồ sơ chuẩn (`,(0,c.jsx)(t.code,{children:`getUrl`}),`) và trích xuất tên người dùng thuần từ URL (`,(0,c.jsx)(t.code,{children:`getValue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`socialIcons`}),` & `,(0,c.jsx)(t.code,{children:`registerSocialIcons`})]}),` — truy cập từ điển biểu tượng thương hiệu vector qua `,(0,c.jsx)(t.code,{children:`socialIcons`}),` hoặc đăng ký toàn bộ vào `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` qua `,(0,c.jsx)(t.code,{children:`registerSocialIcons`}),` từ `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-quốc-kỳ--dữ-liệu-địa-lý`,children:`3. Quốc kỳ & Dữ liệu địa lý`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hơn 250 Quốc kỳ`}),` — tệp vector SVG cho tất cả các quốc gia và vùng lãnh thổ theo chuẩn ISO 3166-1 alpha-2 qua `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sprite WebP hiệu năng cao`}),` — tích hợp sẵn ảnh sprite raster (`,(0,c.jsx)(t.code,{children:`flags.webp`}),`) kèm kiểu dáng CSS (`,(0,c.jsx)(t.code,{children:`style.css`}),`) giúp tải nhanh danh sách cờ dài mà không tốn tài nguyên mạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Bộ dữ liệu địa lý (`,(0,c.jsx)(t.code,{children:`geo.json`}),`)`]}),` — tên quốc gia, mã ISO, mã số điện thoại quốc tế, định dạng mặt nạ số điện thoại và múi giờ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-đường-dẫn-xuất-subpath-exports`,children:`Các đường dẫn xuất (Subpath Exports)`}),`
`,(0,c.jsx)(t.p,{children:`Thư viện được chia nhỏ thành các đường dẫn độc lập để tối ưu hóa kích thước gói:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Điểm truy cập chính của thư viện (lớp, danh mục, dữ liệu địa lý)
import { MediaFile, MediaFiles, MediaSocial, geo } from '@dxtmisha/media'

// Từ điển biểu tượng tệp và hàm đăng ký hàng loạt
import { fileIcons, registerFileIcons } from '@dxtmisha/media/files'

// Nhập trực tiếp quốc kỳ vector
import { UsSvg, VnSvg, JpSvg } from '@dxtmisha/media/flags'

// Từ điển biểu tượng mạng xã hội và hàm đăng ký hàng loạt
import { socialIcons, registerSocialIcons } from '@dxtmisha/media/socials'
`})}),`
`,(0,c.jsx)(t.h2,{id:`nguyên-tắc-thiết-kế`,children:`Nguyên tắc thiết kế`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zero Dependencies`}),` — hoàn toàn độc lập, không phát sinh chi phí runtime của bên thứ ba.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểu dữ liệu chặt chẽ`}),` — hỗ trợ TypeScript hoàn chỉnh với các enum (`,(0,c.jsx)(t.code,{children:`MediaFileCategory`}),`, `,(0,c.jsx)(t.code,{children:`MediaFileGroup`}),`, `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`) và interface rõ ràng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hiệu năng vượt trội`}),` — chia nhỏ tài nguyên giúp giảm tối đa dung lượng tệp khi đóng gói ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sẵn sàng cho SSR`}),` — vận hành an toàn và đồng nhất trên cả client và server.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/media`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};