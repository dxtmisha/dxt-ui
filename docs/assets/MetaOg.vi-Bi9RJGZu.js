import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/MetaOg - Thẻ meta Open Graph"}),`
`,e.jsx(n.h1,{id:"lớp-metaog",children:"Lớp MetaOg"}),`
`,e.jsxs(n.p,{children:["Kế thừa ",e.jsx(n.code,{children:"MetaManager"}),". Quản lý các thẻ meta giao thức ",e.jsx(n.a,{href:"https://ogp.me/",rel:"nofollow",children:"Open Graph"})," — được mạng xã hội (Facebook, VK, v.v.) sử dụng để tạo bản xem trước liên kết."]}),`
`,e.jsxs(n.p,{children:["Sử dụng thuộc tính ",e.jsx(n.code,{children:"property"})," (không phải ",e.jsx(n.code,{children:"name"}),") cho các thẻ meta, theo tiêu chuẩn Open Graph."]}),`
`,e.jsx(n.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,e.jsxs(n.p,{children:["Để quản lý dữ liệu Open Graph, hãy gọi hàm khởi tạo ",e.jsx(n.code,{children:"new MetaOg()"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tính năng:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kế thừa"})," — mở rộng ",e.jsx(n.code,{children:"MetaManager"}),", sử dụng thuộc tính ",e.jsx(n.code,{children:"property"})," để quản lý các thẻ."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tiêu chuẩn"})," — đi kèm với danh sách được định nghĩa sẵn của tất cả các thẻ giao thức ",e.jsx(n.a,{href:"https://ogp.me/",rel:"nofollow",children:"Open Graph"})," chính."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,e.jsx(n.h2,{id:"thẻ-được-hỗ-trợ",children:"Thẻ được hỗ trợ"}),`
`,e.jsxs(n.p,{children:["Quản lý các thẻ ",e.jsx(n.code,{children:"og:*"})," sau: ",e.jsx(n.code,{children:"og:title"}),", ",e.jsx(n.code,{children:"og:type"}),", ",e.jsx(n.code,{children:"og:url"}),", ",e.jsx(n.code,{children:"og:image"}),", ",e.jsx(n.code,{children:"og:description"}),", ",e.jsx(n.code,{children:"og:locale"}),", ",e.jsx(n.code,{children:"og:site_name"}),"."]}),`
`,e.jsx(n.h2,{id:"getter",children:"Getter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getTitle(): string"})," — tiêu đề trang cho bản xem trước."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getType(): MetaOpenGraphType"})," — loại nội dung (ví dụ: ",e.jsx(n.code,{children:"'website'"}),", ",e.jsx(n.code,{children:"'article'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getUrl(): string"})," — URL chính của trang."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getImage(): string"})," — URL hình ảnh xem trước."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getDescription(): string"})," — mô tả trang."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLocale(): string"})," — locale theo định dạng ",e.jsx(n.code,{children:"en_US"}),", ",e.jsx(n.code,{children:"vi_VN"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSiteName(): string"})," — tên website."]}),`
`]}),`
`,e.jsx(n.h2,{id:"setter",children:"Setter"}),`
`,e.jsxs(n.p,{children:["Tất cả setter cập nhật thẻ tương ứng trong DOM và trả về ",e.jsx(n.code,{children:"this"})," để chuỗi phương thức."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setTitle(title: string): this"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setType(type: MetaOpenGraphType): this"})," — loại: ",e.jsx(n.code,{children:"'website'"}),", ",e.jsx(n.code,{children:"'article'"}),", ",e.jsx(n.code,{children:"'book'"}),", ",e.jsx(n.code,{children:"'music.song'"}),", v.v."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setUrl(url: string): this"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setImage(url: string): this"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setDescription(description: string): this"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setLocale(locale: string): this"})," — định dạng: ",e.jsx(n.code,{children:"'vi_VN'"}),", ",e.jsx(n.code,{children:"'en_US'"}),"."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"setSiteName(siteName: string): this"})}),`
`]}),`
`,e.jsx(n.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()

og
  .setTitle('Bài viết của tôi')
  .setType('article')
  .setUrl('https://example.com/article/1')
  .setImage('https://example.com/images/cover.jpg')
  .setDescription('Mô tả bài viết của tôi')
  .setLocale('vi_VN')
  .setSiteName('Trang web của tôi')

// Cho SSR
const html = og.html()
// '<meta property="og:title" content="Bài viết của tôi">...'
`})})]})}function x(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{x as default};
