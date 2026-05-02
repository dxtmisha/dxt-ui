import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/MetaStatic - Quản lý Meta Tags (Static)`}),`
`,(0,c.jsx)(n.h1,{id:`class-metastatic`,children:`Class MetaStatic`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`MetaStatic`}),` là `,(0,c.jsx)(n.strong,{children:`điểm truy cập tĩnh`}),` để quản lý các thẻ meta của trang, dữ liệu Open Graph (OG) và Twitter Card. Nó hoạt động như một lớp vỏ bọc tĩnh (static wrapper) xung quanh một thực thể `,(0,c.jsx)(n.code,{children:`Meta`}),` được quản lý toàn cục, cung cấp một giao diện singleton sạch sẽ để quản lý SEO và chia sẻ mạng xã hội.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao diện tĩnh`}),` — Quản lý tiêu đề trang, mô tả và nhiều thứ khác mà không cần khởi tạo thủ công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý thống nhất`}),` — Tự động đồng bộ hóa tiêu đề và các thông tin khác trên các thẻ meta tiêu chuẩn, OG và Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cách ly trong SSR`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` để xử lý cách ly thực thể trong quá trình render phía máy chủ (server-side rendering).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Fluent API`}),` — Hỗ trợ kỹ thuật method chaining cho các phương thức thiết lập (setter).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập`,children:`Truy cập`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): Meta`}),` — Trả về thực entity `,(0,c.jsx)(n.code,{children:`Meta`}),` cơ sở.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOg(): MetaOg`}),` — Lấy thực thể `,(0,c.jsx)(n.code,{children:`MetaOg`}),` cho các thao tác Open Graph nâng cao.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTwitter(): MetaTwitter`}),` — Lấy thực thể `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),` cho các thao tác Twitter Card nâng cao.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lấy-dữ-liệu-getters`,children:`Lấy dữ liệu (Getters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — Lấy tiêu đề trang hiện tại (không bao gồm hậu tố).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — Lấy nội dung thẻ meta description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeywords(): string`}),` — Lấy các từ khóa hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — Lấy URL hình ảnh (từ cài đặt OG).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCanonical(): string`}),` — Lấy URL chuẩn (canonical).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getRobots(): MetaRobots`}),` — Lấy chỉ thị robots hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAuthor(): string`}),` — Lấy tên tác giả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — Lấy tên trang web (từ cài đặt OG).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — Lấy mã ngôn ngữ/khu vực (từ cài đặt OG).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thiết-lập-setters`,children:`Thiết lập (Setters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các phương thức thiết lập đều trả về `,(0,c.jsx)(n.code,{children:`typeof MetaStatic`}),` để hỗ trợ method chaining.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTitle(title: string): typeof MetaStatic`}),` — Thiết lập tiêu đề trang và cập nhật tiêu đề OG/Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDescription(description: string): typeof MetaStatic`}),` — Thiết lập thẻ meta description.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKeywords(keywords: string | string[]): typeof MetaStatic`}),` — Thiết lập từ khóa (chuỗi hoặc mảng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setImage(image: string): typeof MetaStatic`}),` — Thiết lập hình ảnh cho OG và Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCanonical(canonical: string): typeof MetaStatic`}),` — Thiết lập URL chuẩn và cập nhật URL cho OG/Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRobots(robots: MetaRobots): typeof MetaStatic`}),` — Thiết lập chỉ thị robots.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setAuthor(author: string): typeof MetaStatic`}),` — Thiết lập thẻ meta author.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSiteName(siteName: string): typeof MetaStatic`}),` — Thiết lập tên trang web cho OG và Twitter.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string): typeof MetaStatic`}),` — Thiết lập mã ngôn ngữ cho Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix?: string): typeof MetaStatic`}),` — Thiết lập hậu tố (ví dụ: " | My Site") được thêm vào cuối tiêu đề.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`đầu-ra`,children:`Đầu ra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`html(): string`}),` — Tạo ra một chuỗi đầy đủ các thẻ HTML meta cho tất cả các thuộc tính được quản lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`htmlTitle(): string`}),` — Tạo ra chuỗi tiêu đề an toàn với HTML.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiến-trúc`,children:`Kiến trúc`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`MetaStatic`}),` hoạt động như một `,(0,c.jsx)(n.strong,{children:`proxy tĩnh`}),`. Tất cả các cuộc gọi phương thức được chuyển tiếp đến một thực thể `,(0,c.jsx)(n.code,{children:`Meta`}),` nội bộ được quản lý thông qua `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`cách-ly-yêu-cầu-ssr`,children:`Cách ly yêu cầu (SSR)`}),`
`,(0,c.jsxs)(n.p,{children:[`Bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, `,(0,c.jsx)(n.code,{children:`MetaStatic`}),` đảm bảo rằng trong quá trình Render phía máy chủ (SSR), thông tin meta của một yêu cầu không bị rò rỉ sang yêu cầu khác. Mỗi yêu cầu có một bối cảnh cách ly riêng.`]}),`
`,(0,c.jsx)(n.h3,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { MetaStatic } from '@dxtmisha/functional-basic';

MetaStatic
  .setSuffix('Cửa hàng trực tuyến của tôi')
  .setTitle('Bộ sưu tập mùa hè')
  .setDescription('Khám phá các sản phẩm mới nhất của chúng tôi.')
  .setImage('https://example.com/cover.jpg')
  .setLocale('vi_VN');

console.log(MetaStatic.getTitle()); // "Bộ sưu tập mùa hè"
document.title; // "Bộ sưu tập mùa hè - Cửa hàng trực tuyến của tôi"
console.log(MetaStatic.htmlTitle()); // "Bộ sưu tập mùa hè - Cửa hàng trực tuyến của tôi"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};