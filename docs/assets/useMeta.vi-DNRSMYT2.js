import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useMeta - Quản lý thẻ meta`}),`
`,(0,c.jsx)(n.h1,{id:`usemeta`,children:(0,c.jsx)(n.code,{children:`useMeta`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để quản lý phản ứng các thẻ meta (HTML, Open Graph, Twitter Card) với khả năng tự động đồng bộ hóa DOM. Sử dụng pattern singleton - tất cả các component đều chia sẻ cùng một trạng thái meta.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`title: Ref<string>`}),` — tiêu đề trang phản ứng (không có hậu tố).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description: Ref<string>`}),` — thẻ meta description phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyword: Ref<string>`}),` — thẻ meta keywords phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Ref<string>`}),` — URL hình ảnh phản ứng cho Open Graph / Twitter Card.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`canonical: Ref<string>`}),` — URL canonical phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`robots: Ref<MetaRobots>`}),` — chỉ thị robots phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`author: Ref<string>`}),` — thẻ meta author phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`siteName: Ref<string>`}),` — tên trang web phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHtmlMeta(): string`}),` — tạo chuỗi HTML cho tất cả các thẻ meta (hữu ích cho SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setSuffix(suffix: string): void`}),` — thiết lập hậu tố cho tiêu đề trang.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`meta: Meta`}),` — thực thể `,(0,c.jsx)(n.code,{children:`Meta`}),` cơ sở.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useMeta } from '@dxtmisha/functional'

const { title, description } = useMeta()

title.value = 'Tiêu đề trang của tôi'
description.value = 'Mô tả về trang web tuyệt vời của tôi'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};