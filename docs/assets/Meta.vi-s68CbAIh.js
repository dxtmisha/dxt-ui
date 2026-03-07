import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/Meta - Quản lý thẻ meta SEO"}),`
`,e.jsx(n.h1,{id:"lớp-meta",children:"Lớp Meta"}),`
`,e.jsxs(n.p,{children:["Facade thống nhất để quản lý tất cả thẻ meta của tài liệu. Kế thừa ",e.jsx(n.code,{children:"MetaManager"})," và kết hợp thẻ HTML tiêu chuẩn, Open Graph (",e.jsx(n.code,{children:"MetaOg"}),") và Twitter Card (",e.jsx(n.code,{children:"MetaTwitter"}),") vào một giao diện duy nhất."]}),`
`,e.jsx(n.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Điểm quản lý duy nhất"})," — một đối tượng quản lý ",e.jsx(n.code,{children:"<title>"}),", thẻ meta ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"og:*"})," và ",e.jsx(n.code,{children:"twitter:*"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Đồng bộ hóa"})," — ",e.jsx(n.code,{children:"setTitle"}),", ",e.jsx(n.code,{children:"setImage"}),", ",e.jsx(n.code,{children:"setCanonical"}),", ",e.jsx(n.code,{children:"setSiteName"})," tự động cập nhật các thẻ tương ứng trong cả ba hệ thống."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hậu tố tiêu đề"})," — hỗ trợ tự động thêm tên trang web vào tiêu đề trang."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tương thích SSR"})," — ",e.jsx(n.code,{children:"html()"})," tạo HTML đầy đủ của tất cả thẻ."]}),`
`]}),`
`,e.jsx(n.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()
`})}),`
`,e.jsxs(n.p,{children:["Tự động tạo các instance ",e.jsx(n.code,{children:"MetaOg"})," và ",e.jsx(n.code,{children:"MetaTwitter"})," nội bộ."]}),`
`,e.jsx(n.h2,{id:"getter",children:"Getter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTitle(): string"})," — tiêu đề trang không có hậu tố."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getKeywords(): string"})," — thẻ meta ",e.jsx(n.code,{children:"keywords"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDescription(): string"})," — thẻ meta ",e.jsx(n.code,{children:"description"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImage(): string"})," — URL hình ảnh từ Open Graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getCanonical(): string"})," — URL chính."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getRobots(): MetaRobots"})," — thẻ meta ",e.jsx(n.code,{children:"robots"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAuthor(): string"})," — thẻ meta ",e.jsx(n.code,{children:"author"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSiteName(): string"})," — tên website từ Open Graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocale(): string"})," — locale từ Open Graph."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getOg(): MetaOg"})," — truy cập trực tiếp instance ",e.jsx(n.code,{children:"MetaOg"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTwitter(): MetaTwitter"})," — truy cập trực tiếp instance ",e.jsx(n.code,{children:"MetaTwitter"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"setter",children:"Setter"}),`
`,e.jsxs(n.p,{children:["Tất cả setter trả về ",e.jsx(n.code,{children:"this"})," để chuỗi phương thức."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setTitle(title: string)"})," — đặt ",e.jsx(n.code,{children:"document.title"})," (có hậu tố), ",e.jsx(n.code,{children:"og:title"})," và ",e.jsx(n.code,{children:"twitter:title"})," đồng thời."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setKeywords(keywords: string | string[])"})," — nhận chuỗi hoặc mảng; mảng tự động nối bằng dấu phẩy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setDescription(description: string)"})," — đặt ",e.jsx(n.code,{children:'<meta name="description">'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setImage(image: string)"})," — đặt ",e.jsx(n.code,{children:"og:image"})," và ",e.jsx(n.code,{children:"twitter:image"})," đồng thời."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setCanonical(canonical: string)"})," — đặt ",e.jsx(n.code,{children:'<meta name="canonical">'}),", ",e.jsx(n.code,{children:"og:url"})," và ",e.jsx(n.code,{children:"twitter:url"})," đồng thời."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setRobots(robots: MetaRobots)"})," — đặt ",e.jsx(n.code,{children:'<meta name="robots">'})," (",e.jsx(n.code,{children:"'index, follow'"}),", ",e.jsx(n.code,{children:"'noindex, nofollow'"}),", v.v.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setAuthor(author: string)"})," — đặt ",e.jsx(n.code,{children:'<meta name="author">'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSiteName(siteName: string)"})," — đặt ",e.jsx(n.code,{children:"og:site_name"})," và ",e.jsx(n.code,{children:"twitter:site"})," đồng thời."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setLocale(locale: string)"})," — đặt ",e.jsx(n.code,{children:"og:locale"})," (định dạng: ",e.jsx(n.code,{children:"'vi_VN'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setSuffix(suffix?: string)"})," — hậu tố tiêu đề. ",e.jsx(n.code,{children:"setTitle('Bài viết')"})," + ",e.jsx(n.code,{children:"setSuffix('Trang web')"})," → ",e.jsx(n.code,{children:"'Bài viết - Trang web'"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"tạo-html",children:"Tạo HTML"}),`
`,e.jsx(n.h3,{id:"html-string",children:e.jsx(n.code,{children:"html(): string"})}),`
`,e.jsx(n.p,{children:"Tạo chuỗi HTML đầy đủ của tất cả thẻ meta: tiêu chuẩn + Open Graph + Twitter Card. Dùng cho SSR."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const meta = new Meta()
meta.setTitle('Bài viết').setDescription('Mô tả').setImage('https://example.com/img.jpg')

const html = meta.html()
// <meta name="description" content="Mô tả">
// <meta property="og:title" content="Bài viết">
// <meta property="og:image" content="https://example.com/img.jpg">
// <meta name="twitter:title" content="Bài viết">
// ...
`})}),`
`,e.jsx(n.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Meta } from '@dxtmisha/functional-basic'

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
`})})]})}function x(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{x as default};
