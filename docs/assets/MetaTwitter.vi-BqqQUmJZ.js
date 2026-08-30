import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/MetaTwitter - Thẻ meta Twitter Card`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-metatwitter`,children:`Lớp MetaTwitter`}),`
`,(0,c.jsxs)(t.p,{children:[`Kế thừa `,(0,c.jsx)(t.code,{children:`MetaManager`}),`. Quản lý các thẻ meta `,(0,c.jsx)(t.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` — được Twitter/X sử dụng để tạo thẻ khi chia sẻ liên kết.`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để quản lý dữ liệu Twitter Card, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`new MetaTwitter()`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kế thừa`}),` — mở rộng `,(0,c.jsx)(t.code,{children:`MetaManager`}),`, sử dụng thuộc tính `,(0,c.jsx)(t.code,{children:`name`}),` tiêu chuẩn để quản lý các thẻ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêu chuẩn`}),` — đi kèm với danh sách được định nghĩa sẵn của tất cả các thẻ giao thức `,(0,c.jsx)(t.a,{href:`https://developer.twitter.com/en/docs/twitter-for-websites/cards`,rel:`nofollow`,children:`Twitter Card`}),` chính.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

const twitter = new MetaTwitter()
`})}),`
`,(0,c.jsx)(t.h2,{id:`thẻ-được-hỗ-trợ`,children:`Thẻ được hỗ trợ`}),`
`,(0,c.jsxs)(t.p,{children:[`Quản lý các thẻ `,(0,c.jsx)(t.code,{children:`twitter:*`}),` sau: `,(0,c.jsx)(t.code,{children:`twitter:card`}),`, `,(0,c.jsx)(t.code,{children:`twitter:site`}),`, `,(0,c.jsx)(t.code,{children:`twitter:creator`}),`, `,(0,c.jsx)(t.code,{children:`twitter:url`}),`, `,(0,c.jsx)(t.code,{children:`twitter:title`}),`, `,(0,c.jsx)(t.code,{children:`twitter:description`}),`, `,(0,c.jsx)(t.code,{children:`twitter:image`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`getter`,children:`Getter`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCard(): MetaTwitterCard`}),` — loại thẻ (`,(0,c.jsx)(t.code,{children:`'summary'`}),`, `,(0,c.jsx)(t.code,{children:`'summary_large_image'`}),`, `,(0,c.jsx)(t.code,{children:`'app'`}),`, `,(0,c.jsx)(t.code,{children:`'player'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSite(): string`}),` — @username của tài khoản website hoặc thương hiệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCreator(): string`}),` — @username của tác giả nội dung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(): string`}),` — URL trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — tiêu đề thẻ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — mô tả thẻ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — URL hình ảnh.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`setter`,children:`Setter`}),`
`,(0,c.jsxs)(t.p,{children:[`Tất cả setter cập nhật thẻ trong DOM và trả về `,(0,c.jsx)(t.code,{children:`this`}),` để chuỗi phương thức.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCard(card: MetaTwitterCard): this`}),` — loại thẻ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSite(site: string): this`}),` — @username website.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCreator(creator: string): this`}),` — @username tác giả.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setImage(image: string): this`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaTwitter } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};