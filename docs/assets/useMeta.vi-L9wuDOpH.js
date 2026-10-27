import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useMeta - Quản lý thẻ meta`}),`
`,(0,c.jsx)(t.h1,{id:`usemeta`,children:(0,c.jsx)(t.code,{children:`useMeta`})}),`
`,(0,c.jsx)(t.p,{children:`Composable để quản lý phản ứng các thẻ meta (HTML, Open Graph, Twitter Card) với khả năng tự động đồng bộ hóa DOM. Sử dụng pattern singleton - tất cả các component đều chia sẻ cùng một trạng thái meta.`}),`
`,(0,c.jsxs)(t.p,{children:[`Nên sử dụng `,(0,c.jsx)(t.code,{children:`setTitle()`}),`, `,(0,c.jsx)(t.code,{children:`setDescription()`}),` và các phương thức `,(0,c.jsx)(t.code,{children:`set…`}),` khác để thay đổi giá trị. Vẫn hỗ trợ gán trực tiếp vào các ref công khai: metadata được cập nhật đồng bộ khi SSR, còn các thay đổi trong trình duyệt được gộp thành một lần cập nhật.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`title: Ref<string>`}),` — tiêu đề trang phản ứng (không có hậu tố).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description: Ref<string>`}),` — thẻ meta description phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyword: Ref<string>`}),` — thẻ meta keywords phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`image: Ref<string>`}),` — URL hình ảnh phản ứng cho Open Graph / Twitter Card.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`canonical: Ref<string>`}),` — URL canonical phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`robots: Ref<MetaRobots>`}),` — chỉ thị robots phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`author: Ref<string>`}),` — thẻ meta author phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`siteName: Ref<string>`}),` — tên trang web phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHtmlMeta(): string`}),` — tạo chuỗi HTML cho tất cả các thẻ meta (hữu ích cho SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTitle(value: string): void`}),` — thiết lập tiêu đề trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKeywords(value: string): void`}),` — thiết lập từ khóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDescription(value: string): void`}),` — thiết lập mô tả trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setImage(value: string): void`}),` — thiết lập URL hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCanonical(value: string): void`}),` — thiết lập URL canonical.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRobots(value: MetaRobots): void`}),` — thiết lập chỉ thị robots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setAuthor(value: string): void`}),` — thiết lập tác giả.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSiteName(value: string): void`}),` — thiết lập tên trang web.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSuffix(suffix: string): void`}),` — thiết lập hậu tố cho tiêu đề trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`meta: Meta`}),` — thực thể `,(0,c.jsx)(t.code,{children:`Meta`}),` cơ sở.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useMeta } from '@dxtmisha/functional'

const { setTitle, setDescription } = useMeta()

setTitle('Tiêu đề trang của tôi')
setDescription('Mô tả về trang web tuyệt vời của tôi')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};