import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaStorage - Quản lý bộ nhớ tài liệu`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmastorage`,children:(0,c.jsx)(n.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp bọc phản hồi cho bộ nhớ chung của Figma (PluginData). Nó đồng bộ hóa một Vue `,(0,c.jsx)(n.code,{children:`shallowRef`}),` với dữ liệu được lưu trữ bên trong tài liệu Figma (toàn cục hoặc trên một node cụ thể), cho phép chia sẻ dữ liệu bền vững giữa tất cả người dùng của tệp.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên khóa trong bộ nhớ plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T`}),` — Giá trị mặc định nếu không tìm thấy dữ liệu trong bộ nhớ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id?: string`}),` — (Tùy chọn) Định danh (ID) của node để đính kèm bộ nhớ. Nếu không được cung cấp, gốc tài liệu sẽ được sử dụng.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T | undefined>`}),` — Một tham chiếu phản hồi đến giá trị được lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Một giá trị logic phản hồi cho biết liệu quá trình lấy dữ liệu ban đầu có đang diễn ra hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma-ref'

// Truy cập bộ nhớ cấp tài liệu
const { item: projectConfig, loading } = useFigmaStorage('project-config', { version: '1.0' })

// Các cập nhật sẽ tự động được lưu vào PluginData của Figma
projectConfig.value.version = '1.1'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};