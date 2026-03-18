import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/MetaTwitter - Thẻ meta Twitter Card"}),`
`,e.jsx(t.h1,{id:"lớp-metatwitter",children:"Lớp MetaTwitter"}),`
`,e.jsxs(t.p,{children:["Kế thừa ",e.jsx(t.code,{children:"MetaManager"}),". Quản lý các thẻ meta ",e.jsx(t.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards",rel:"nofollow",children:"Twitter Card"})," — được Twitter/X sử dụng để tạo thẻ khi chia sẻ liên kết."]}),`
`,e.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,e.jsxs(t.p,{children:["Để quản lý dữ liệu Twitter Card, hãy gọi hàm khởi tạo ",e.jsx(t.code,{children:"new MetaTwitter()"}),"."]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Tính năng:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Kế thừa"})," — mở rộng ",e.jsx(t.code,{children:"MetaManager"}),", sử dụng thuộc tính ",e.jsx(t.code,{children:"name"})," tiêu chuẩn để quản lý các thẻ."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tiêu chuẩn"})," — đi kèm với danh sách được định nghĩa sẵn của tất cả các thẻ giao thức ",e.jsx(t.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards",rel:"nofollow",children:"Twitter Card"})," chính."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,e.jsx(t.h2,{id:"thẻ-được-hỗ-trợ",children:"Thẻ được hỗ trợ"}),`
`,e.jsxs(t.p,{children:["Quản lý các thẻ ",e.jsx(t.code,{children:"twitter:*"})," sau: ",e.jsx(t.code,{children:"twitter:card"}),", ",e.jsx(t.code,{children:"twitter:site"}),", ",e.jsx(t.code,{children:"twitter:creator"}),", ",e.jsx(t.code,{children:"twitter:url"}),", ",e.jsx(t.code,{children:"twitter:title"}),", ",e.jsx(t.code,{children:"twitter:description"}),", ",e.jsx(t.code,{children:"twitter:image"}),"."]}),`
`,e.jsx(t.h2,{id:"getter",children:"Getter"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCard(): MetaTwitterCard"})," — loại thẻ (",e.jsx(t.code,{children:"'summary'"}),", ",e.jsx(t.code,{children:"'summary_large_image'"}),", ",e.jsx(t.code,{children:"'app'"}),", ",e.jsx(t.code,{children:"'player'"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getSite(): string"})," — @username của tài khoản website hoặc thương hiệu."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getCreator(): string"})," — @username của tác giả nội dung."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getUrl(): string"})," — URL trang."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getTitle(): string"})," — tiêu đề thẻ."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getDescription(): string"})," — mô tả thẻ."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"getImage(): string"})," — URL hình ảnh."]}),`
`]}),`
`,e.jsx(t.h2,{id:"setter",children:"Setter"}),`
`,e.jsxs(t.p,{children:["Tất cả setter cập nhật thẻ trong DOM và trả về ",e.jsx(t.code,{children:"this"})," để chuỗi phương thức."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCard(card: MetaTwitterCard): this"})," — loại thẻ."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setSite(site: string): this"})," — @username website."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"setCreator(creator: string): this"})," — @username tác giả."]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setUrl(url: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setTitle(title: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setDescription(description: string): this"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"setImage(image: string): this"})}),`
`]}),`
`,e.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()

twitter
  .setCard('summary_large_image')
  .setSite('@mycompany')
  .setCreator('@author')
  .setTitle('Tiêu đề bài đăng')
  .setDescription('Mô tả ngắn')
  .setUrl('https://example.com/post/1')
  .setImage('https://example.com/images/preview.jpg')

// Cho SSR
const html = twitter.html()
// '<meta name="twitter:card" content="summary_large_image">...'
`})})]})}function x(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as default};
