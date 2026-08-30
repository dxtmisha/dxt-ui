import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma/Composables/useFigmaStorage - Quản lý lưu trữ`}),`
`,(0,c.jsx)(t.h1,{id:`usefigmastorage`,children:(0,c.jsx)(t.code,{children:`useFigmaStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable để quản lý dữ liệu trong `,(0,c.jsx)(t.code,{children:`PluginData`}),` của Figma. Nó sử dụng mô hình singleton để đảm bảo rằng nhiều lần gọi với cùng một khóa và node sẽ trả về cùng một thực thể `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên khóa duy nhất cho mục lưu trữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item?: PluginDataMixin`}),` — (Tùy chọn) node Figma nơi dữ liệu được lưu trữ. Mặc định là `,(0,c.jsx)(t.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cache?: number`}),` — (Tùy chọn) thời gian lưu bộ nhớ đệm tính bằng giây (TTL).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FigmaStorage<T>`}),` — một thực thể của lớp `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),` để quản lý dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage } from '@dxtmisha/figma'

// 1. Khởi tạo lưu trữ cho cài đặt plugin
const settings = useFigmaStorage('settings')

// 2. Truy xuất dữ liệu với giá trị mặc định
const theme = settings.get('dark')

// 3. Cập nhật dữ liệu
settings.set('light')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};