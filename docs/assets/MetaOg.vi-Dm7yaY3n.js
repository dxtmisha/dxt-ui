import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/MetaOg - Thẻ meta Open Graph`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-metaog`,children:`Lớp MetaOg`}),`
`,(0,c.jsxs)(t.p,{children:[`Kế thừa `,(0,c.jsx)(t.code,{children:`MetaManager`}),`. Quản lý các thẻ meta giao thức `,(0,c.jsx)(t.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` — được mạng xã hội (Facebook, VK, v.v.) sử dụng để tạo bản xem trước liên kết.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Sử dụng thuộc tính `,(0,c.jsx)(t.code,{children:`property`}),` (không phải `,(0,c.jsx)(t.code,{children:`name`}),`) cho các thẻ meta, theo tiêu chuẩn Open Graph.`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để quản lý dữ liệu Open Graph, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`new MetaOg()`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kế thừa`}),` — mở rộng `,(0,c.jsx)(t.code,{children:`MetaManager`}),`, sử dụng thuộc tính `,(0,c.jsx)(t.code,{children:`property`}),` để quản lý các thẻ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêu chuẩn`}),` — đi kèm với danh sách được định nghĩa sẵn của tất cả các thẻ giao thức `,(0,c.jsx)(t.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` chính.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,(0,c.jsx)(t.h2,{id:`thẻ-được-hỗ-trợ`,children:`Thẻ được hỗ trợ`}),`
`,(0,c.jsxs)(t.p,{children:[`Quản lý các thẻ `,(0,c.jsx)(t.code,{children:`og:*`}),` sau: `,(0,c.jsx)(t.code,{children:`og:title`}),`, `,(0,c.jsx)(t.code,{children:`og:type`}),`, `,(0,c.jsx)(t.code,{children:`og:url`}),`, `,(0,c.jsx)(t.code,{children:`og:image`}),`, `,(0,c.jsx)(t.code,{children:`og:description`}),`, `,(0,c.jsx)(t.code,{children:`og:locale`}),`, `,(0,c.jsx)(t.code,{children:`og:site_name`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`getter`,children:`Getter`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — tiêu đề trang cho bản xem trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getType(): MetaOpenGraphType`}),` — loại nội dung (ví dụ: `,(0,c.jsx)(t.code,{children:`'website'`}),`, `,(0,c.jsx)(t.code,{children:`'article'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(): string`}),` — URL chính của trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImage(): string`}),` — URL hình ảnh xem trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDescription(): string`}),` — mô tả trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocale(): string`}),` — locale theo định dạng `,(0,c.jsx)(t.code,{children:`en_US`}),`, `,(0,c.jsx)(t.code,{children:`vi_VN`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSiteName(): string`}),` — tên website.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`setter`,children:`Setter`}),`
`,(0,c.jsxs)(t.p,{children:[`Tất cả setter cập nhật thẻ tương ứng trong DOM và trả về `,(0,c.jsx)(t.code,{children:`this`}),` để chuỗi phương thức.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: MetaOpenGraphType): this`}),` — loại: `,(0,c.jsx)(t.code,{children:`'website'`}),`, `,(0,c.jsx)(t.code,{children:`'article'`}),`, `,(0,c.jsx)(t.code,{children:`'book'`}),`, `,(0,c.jsx)(t.code,{children:`'music.song'`}),`, v.v.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setImage(url: string): this`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setLocale(locale: string): this`}),` — định dạng: `,(0,c.jsx)(t.code,{children:`'vi_VN'`}),`, `,(0,c.jsx)(t.code,{children:`'en_US'`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`setSiteName(siteName: string): this`})}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};