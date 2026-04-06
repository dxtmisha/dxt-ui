import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/MetaOg - Thẻ meta Open Graph`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-metaog`,children:`Lớp MetaOg`}),`
`,(0,c.jsxs)(n.p,{children:[`Kế thừa `,(0,c.jsx)(n.code,{children:`MetaManager`}),`. Quản lý các thẻ meta giao thức `,(0,c.jsx)(n.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` — được mạng xã hội (Facebook, VK, v.v.) sử dụng để tạo bản xem trước liên kết.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Sử dụng thuộc tính `,(0,c.jsx)(n.code,{children:`property`}),` (không phải `,(0,c.jsx)(n.code,{children:`name`}),`) cho các thẻ meta, theo tiêu chuẩn Open Graph.`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để quản lý dữ liệu Open Graph, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`new MetaOg()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tính năng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kế thừa`}),` — mở rộng `,(0,c.jsx)(n.code,{children:`MetaManager`}),`, sử dụng thuộc tính `,(0,c.jsx)(n.code,{children:`property`}),` để quản lý các thẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêu chuẩn`}),` — đi kèm với danh sách được định nghĩa sẵn của tất cả các thẻ giao thức `,(0,c.jsx)(n.a,{href:`https://ogp.me/`,rel:`nofollow`,children:`Open Graph`}),` chính.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

const og = new MetaOg()
`})}),`
`,(0,c.jsx)(n.h2,{id:`thẻ-được-hỗ-trợ`,children:`Thẻ được hỗ trợ`}),`
`,(0,c.jsxs)(n.p,{children:[`Quản lý các thẻ `,(0,c.jsx)(n.code,{children:`og:*`}),` sau: `,(0,c.jsx)(n.code,{children:`og:title`}),`, `,(0,c.jsx)(n.code,{children:`og:type`}),`, `,(0,c.jsx)(n.code,{children:`og:url`}),`, `,(0,c.jsx)(n.code,{children:`og:image`}),`, `,(0,c.jsx)(n.code,{children:`og:description`}),`, `,(0,c.jsx)(n.code,{children:`og:locale`}),`, `,(0,c.jsx)(n.code,{children:`og:site_name`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`getter`,children:`Getter`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — tiêu đề trang cho bản xem trước.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getType(): MetaOpenGraphType`}),` — loại nội dung (ví dụ: `,(0,c.jsx)(n.code,{children:`'website'`}),`, `,(0,c.jsx)(n.code,{children:`'article'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(): string`}),` — URL chính của trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImage(): string`}),` — URL hình ảnh xem trước.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDescription(): string`}),` — mô tả trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocale(): string`}),` — locale theo định dạng `,(0,c.jsx)(n.code,{children:`en_US`}),`, `,(0,c.jsx)(n.code,{children:`vi_VN`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSiteName(): string`}),` — tên website.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setter`,children:`Setter`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả setter cập nhật thẻ tương ứng trong DOM và trả về `,(0,c.jsx)(n.code,{children:`this`}),` để chuỗi phương thức.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setTitle(title: string): this`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: MetaOpenGraphType): this`}),` — loại: `,(0,c.jsx)(n.code,{children:`'website'`}),`, `,(0,c.jsx)(n.code,{children:`'article'`}),`, `,(0,c.jsx)(n.code,{children:`'book'`}),`, `,(0,c.jsx)(n.code,{children:`'music.song'`}),`, v.v.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setUrl(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setImage(url: string): this`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setDescription(description: string): this`})}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setLocale(locale: string): this`}),` — định dạng: `,(0,c.jsx)(n.code,{children:`'vi_VN'`}),`, `,(0,c.jsx)(n.code,{children:`'en_US'`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`setSiteName(siteName: string): this`})}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { MetaOg } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};