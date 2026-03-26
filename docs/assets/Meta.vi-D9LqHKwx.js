import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/Meta - Quản lý thẻ meta SEO`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-meta`,children:`Lớp Meta`}),`
`,(0,c.jsxs)(n.p,{children:[`Facade thống nhất để quản lý tất cả thẻ meta của tài liệu. Kế thừa `,(0,c.jsx)(n.code,{children:`MetaManager`}),` và kết hợp thẻ HTML tiêu chuẩn, Open Graph (`,(0,c.jsx)(n.code,{children:`MetaOg`}),`) và Twitter Card (`,(0,c.jsx)(n.code,{children:`MetaTwitter`}),`) vào một giao diện duy nhất.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điểm quản lý duy nhất`}),` — một đối tượng quản lý `,(0,c.jsx)(n.code,{children:`<title>`}),`, thẻ meta `,(0,c.jsx)(n.code,{children:`name`}),`, `,(0,c.jsx)(n.code,{children:`og:*`}),` và `,(0,c.jsx)(n.code,{children:`twitter:*`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa`}),` — `,(0,c.jsx)(n.code,{children:`setTitle`}),`, `,(0,c.jsx)(n.code,{children:`setImage`}),`, `,(0,c.jsx)(n.code,{children:`setCanonical`}),`, `,(0,c.jsx)(n.code,{children:`setSiteName`}),` tự động cập nhật các thẻ tương ứng trong cả ba hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hậu tố tiêu đề`}),` — hỗ trợ tự động thêm tên trang web vào tiêu đề trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tương thích SSR`}),` — `,(0,c.jsx)(n.code,{children:`html()`}),` tạo HTML đầy đủ của tất cả thẻ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để tạo một đối tượng quản lý siêu dữ liệu (meta-data), hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`new Meta()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa`}),` — hàm khởi tạo tự động khởi tạo registry cho các thẻ HTML tiêu chuẩn, Open Graph và Twitter Card.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp`}),` — ngay lập tức tạo các instance `,(0,c.jsx)(n.code,{children:`MetaOg`}),` và `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),` nội bộ.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
`})}),`
`,(0,c.jsx)(n.h2,{id:`getter`,children:`Getter`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — tiêu đề trang không có hậu tố.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getKeywords(): string`}),` — thẻ meta `,(0,c.jsx)(n.code,{children:`keywords`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — thẻ meta `,(0,c.jsx)(n.code,{children:`description`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — URL hình ảnh từ Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCanonical(): string`}),` — URL chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getRobots(): MetaRobots`}),` — thẻ meta `,(0,c.jsx)(n.code,{children:`robots`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAuthor(): string`}),` — thẻ meta `,(0,c.jsx)(n.code,{children:`author`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — tên website từ Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — locale từ Open Graph.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOg(): MetaOg`}),` — truy cập trực tiếp instance `,(0,c.jsx)(n.code,{children:`MetaOg`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTwitter(): MetaTwitter`}),` — truy cập trực tiếp instance `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setter`,children:`Setter`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả setter trả về `,(0,c.jsx)(n.code,{children:`this`}),` để chuỗi phương thức.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setTitle(title: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`document.title`}),` (có hậu tố), `,(0,c.jsx)(n.code,{children:`og:title`}),` và `,(0,c.jsx)(n.code,{children:`twitter:title`}),` đồng thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKeywords(keywords: string | string[])`}),` — nhận chuỗi hoặc mảng; mảng tự động nối bằng dấu phẩy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDescription(description: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`<meta name="description">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setImage(image: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`og:image`}),` và `,(0,c.jsx)(n.code,{children:`twitter:image`}),` đồng thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCanonical(canonical: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`<meta name="canonical">`}),`, `,(0,c.jsx)(n.code,{children:`og:url`}),` và `,(0,c.jsx)(n.code,{children:`twitter:url`}),` đồng thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRobots(robots: MetaRobots)`}),` — đặt `,(0,c.jsx)(n.code,{children:`<meta name="robots">`}),` (`,(0,c.jsx)(n.code,{children:`'index, follow'`}),`, `,(0,c.jsx)(n.code,{children:`'noindex, nofollow'`}),`, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setAuthor(author: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`<meta name="author">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSiteName(siteName: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`og:site_name`}),` và `,(0,c.jsx)(n.code,{children:`twitter:site`}),` đồng thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string)`}),` — đặt `,(0,c.jsx)(n.code,{children:`og:locale`}),` (định dạng: `,(0,c.jsx)(n.code,{children:`'vi_VN'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix?: string)`}),` — hậu tố tiêu đề. `,(0,c.jsx)(n.code,{children:`setTitle('Bài viết')`}),` + `,(0,c.jsx)(n.code,{children:`setSuffix('Trang web')`}),` → `,(0,c.jsx)(n.code,{children:`'Bài viết - Trang web'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tạo-html`,children:`Tạo HTML`}),`
`,(0,c.jsx)(n.h3,{id:`html-string`,children:(0,c.jsx)(n.code,{children:`html(): string`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo chuỗi HTML đầy đủ của tất cả thẻ meta: tiêu chuẩn + Open Graph + Twitter Card. Dùng cho SSR.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const meta = new Meta()
meta.setTitle('Bài viết').setDescription('Mô tả').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Mô tả">
// <meta property="og:title" content="Bài viết">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Bài viết">
// ...
`})}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Meta } from '@dxtmisha/functional-basic'

const meta = new Meta()
meta.setSuffix('Trang web của tôi')

meta
  .setTitle('Cách sử dụng Vue 3')
  .setDescription('Hướng dẫn toàn diện về Vue 3')
  .setKeywords(['vue', 'javascript', 'typescript'])
  .setImage('https://example.com/images/vue.jpg')
  .setCanonical('https://example.com/articles/vue-3')
  .setRobots('index, follow')
  .setAuthor('Nguyễn Văn An')
  .setSiteName('Trang web của tôi')
  .setLocale('vi_VN')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};