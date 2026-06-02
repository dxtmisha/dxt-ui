import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaClientStorage - Quản lý bộ nhớ client`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmaclientstorage`,children:(0,c.jsx)(n.code,{children:`useFigmaClientStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp bọc phản hồi cho bộ nhớ client của Figma. Nó đồng bộ hóa một Vue `,(0,c.jsx)(n.code,{children:`shallowRef`}),` với `,(0,c.jsx)(n.code,{children:`clientStorage`}),` của plugin, cho phép lưu trữ dữ liệu bền vững trên máy tính của người dùng với các cập nhật tự động.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên khóa trong bộ nhớ client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T`}),` — Giá trị mặc định nếu không tìm thấy dữ liệu trong bộ nhớ.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<T | undefined>`}),` — Một tham chiếu phản hồi đến giá trị được lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Một giá trị logic phản hồi cho biết liệu quá trình lấy dữ liệu ban đầu có đang diễn ra hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaClientStorage } from '@dxtmisha/figma-ref'

const { item: theme, loading } = useFigmaClientStorage('app-theme', 'light')

// Các cập nhật cho theme.value sẽ tự động được lưu vào clientStorage của Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};