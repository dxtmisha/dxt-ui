import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/MetaTwitter - Thẻ meta Twitter Card`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-metatwitter`,children:`Lớp MetaTwitter`}),`
`,(0,c.jsxs)(n.p,{children:[`Kế thừa `,(0,c.jsx)(n.code,{children:`MetaManager`}),`. Quản lý các thẻ meta `,(0,c.jsx)(n.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` — được Twitter/X sử dụng để tạo thẻ khi chia sẻ liên kết.`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để quản lý dữ liệu Twitter Card, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`new MetaTwitter()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kế thừa`}),` — mở rộng `,(0,c.jsx)(n.code,{children:`MetaManager`}),`, sử dụng thuộc tính `,(0,c.jsx)(n.code,{children:`name`}),` tiêu chuẩn để quản lý các thẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêu chuẩn`}),` — đi kèm với danh sách được định nghĩa sẵn của tất cả các thẻ giao thức `,(0,c.jsx)(n.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` chính.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,(0,c.jsx)(n.h2,{id:`thẻ-được-hỗ-trợ`,children:`Thẻ được hỗ trợ`}),`
`,(0,c.jsxs)(n.p,{children:[`Quản lý các thẻ `,(0,c.jsx)(n.code,{children:`twitter:*`}),` sau: `,(0,c.jsx)(n.code,{children:`twitter:card`}),`, `,(0,c.jsx)(n.code,{children:`twitter:site`}),`, `,(0,c.jsx)(n.code,{children:`twitter:creator`}),`, `,(0,c.jsx)(n.code,{children:`twitter:url`}),`, `,(0,c.jsx)(n.code,{children:`twitter:title`}),`, `,(0,c.jsx)(n.code,{children:`twitter:description`}),`, `,(0,c.jsx)(n.code,{children:`twitter:image`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`getter`,children:`Getter`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCard(): MetaTwitterCard`}),` — loại thẻ (`,(0,c.jsx)(n.code,{children:`'summary'`}),`, `,(0,c.jsx)(n.code,{children:`'summary_large_image'`}),`, `,(0,c.jsx)(n.code,{children:`'app'`}),`, `,(0,c.jsx)(n.code,{children:`'player'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSite(): string`}),` — @username của tài khoản website hoặc thương hiệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCreator(): string`}),` — @username của tác giả nội dung.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(): string`}),` — URL trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — tiêu đề thẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — mô tả thẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — URL hình ảnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setter`,children:`Setter`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả setter cập nhật thẻ trong DOM và trả về `,(0,c.jsx)(n.code,{children:`this`}),` để chuỗi phương thức.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCard(card: MetaTwitterCard): this`}),` — loại thẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSite(site: string): this`}),` — @username website.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCreator(creator: string): this`}),` — @username tác giả.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setImage(image: string): this`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};