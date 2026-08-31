import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initPluginApiCache - Khởi tạo bộ nhớ đệm API`}),`
`,(0,c.jsx)(t.h1,{id:`initpluginapicache`,children:(0,c.jsx)(t.code,{children:`initPluginApiCache`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm để cấu hình và khởi tạo hệ thống lưu trữ đệm API. Nó sử dụng bộ lưu trữ tích hợp của Nitro (`,(0,c.jsx)(t.code,{children:`useStorage`}),`) để lưu, lấy và xóa các mục trong bộ nhớ đệm. Nó cũng bao gồm việc xử lý lỗi thông qua `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`storageKey: string`}),` (mặc định `,(0,c.jsx)(t.code,{children:`'Ui_ApiCache'`}),`) — Tiền tố khóa cho bộ lưu trữ Nitro.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStepAgeClearOld?: number`}),` — Ngưỡng tuổi của bộ nhớ đệm để tự động xóa dữ liệu cũ.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initPluginApiCache } from '@dxtmisha/nitro-basic'

initPluginApiCache('my-custom-cache', 3600)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};