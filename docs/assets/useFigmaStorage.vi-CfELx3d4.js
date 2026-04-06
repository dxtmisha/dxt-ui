import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Composables/useFigmaStorage - Quản lý lưu trữ`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmastorage`,children:(0,c.jsx)(n.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable để quản lý dữ liệu trong `,(0,c.jsx)(n.code,{children:`PluginData`}),` của Figma. Nó sử dụng mô hình singleton để đảm bảo rằng nhiều lần gọi với cùng một khóa và node sẽ trả về cùng một thực thể `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên khóa duy nhất cho mục lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item?: PluginDataMixin`}),` — (Tùy chọn) node Figma nơi dữ liệu được lưu trữ. Mặc định là `,(0,c.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache?: number`}),` — (Tùy chọn) thời gian lưu bộ nhớ đệm tính bằng giây (TTL).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`FigmaStorage<T>`}),` — một thực thể của lớp `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` để quản lý dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma-code'

// 1. Khởi tạo lưu trữ cho cài đặt plugin
const settings = useFigmaStorage('settings')

// 2. Truy xuất dữ liệu với giá trị mặc định
const theme = settings.get('dark')

// 3. Cập nhật dữ liệu
settings.set('light')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};