import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional/Composables/useMeta - Quản lý thẻ meta"}),`
`,n.jsx(e.h1,{id:"usemeta",children:n.jsx(e.code,{children:"useMeta"})}),`
`,n.jsx(e.p,{children:"Composable để quản lý phản ứng các thẻ meta (HTML, Open Graph, Twitter Card) với khả năng tự động đồng bộ hóa DOM. Sử dụng pattern singleton - tất cả các component đều chia sẻ cùng một trạng thái meta."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"title: Ref<string>"})," — tiêu đề trang phản ứng (không có hậu tố)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"description: Ref<string>"})," — thẻ meta description phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keyword: Ref<string>"})," — thẻ meta keywords phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"image: Ref<string>"})," — URL hình ảnh phản ứng cho Open Graph / Twitter Card."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"canonical: Ref<string>"})," — URL canonical phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"robots: Ref<MetaRobots>"})," — chỉ thị robots phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"author: Ref<string>"})," — thẻ meta author phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"siteName: Ref<string>"})," — tên trang web phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHtmlMeta(): string"})," — tạo chuỗi HTML cho tất cả các thẻ meta (hữu ích cho SSR)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"meta: Meta"})," — thực thể ",n.jsx(e.code,{children:"Meta"})," cơ sở."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useMeta } from '@dxtmisha/functional'

const { title, description } = useMeta()

title.value = 'Tiêu đề trang của tôi'
description.value = 'Mô tả về trang web tuyệt vời của tôi'
`})})]})}function x(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{x as default};
