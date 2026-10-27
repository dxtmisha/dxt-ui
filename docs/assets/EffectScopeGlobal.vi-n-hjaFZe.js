import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/EffectScopeGlobal - Phạm vi hiệu ứng toàn cục`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-effectscopeglobal`,children:`Lớp EffectScopeGlobal`}),`
`,(0,c.jsxs)(t.p,{children:[`Điểm truy cập tĩnh để chạy hiệu ứng trong phạm vi Vue tách rời được tạo lười. Phạm vi được lưu qua `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`; quyền sở hữu SSR phụ thuộc ngữ cảnh yêu cầu đã khởi tạo.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phạm vi lười`}),` — tạo khi gọi `,(0,c.jsx)(t.code,{children:`run()`}),` lần đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vòng đời tách rời`}),` — dừng phạm vi thành phần gọi không dừng các hiệu ứng này.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giữ kết quả`}),` — kết quả và lỗi callback được chuyển về bên gọi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` bằng ngữ cảnh yêu cầu hiện tại trước khi dùng SSR. Lớp không có phương thức dừng; callback nên trả hàm dọn dẹp khi bên gọi cần dừng riêng. Công việc bất đồng bộ sau `,(0,c.jsx)(t.code,{children:`await`}),` không tự thuộc phạm vi.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { ref, watch } from 'vue'

const source = /*#__PURE__*/ ref(0)
const observed = /*#__PURE__*/ ref(0)
const stop = /*#__PURE__*/ EffectScopeGlobal.run(() => watch(source, value => {
  observed.value = value
}))
stop?.()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thực-thi-hiệu-ứng`,children:`Thực thi hiệu ứng`}),`
`,(0,c.jsx)(t.h4,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`run<T>(fn: () => T): T | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Chạy callback đồng bộ trong phạm vi hiệu ứng tách rời đã lưu và trả kết quả.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fn: () => T`}),` — Callback chạy trong phạm vi tách rời.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Kết quả callback hoặc undefined khi phạm vi đã lưu không hoạt động.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ EffectScopeGlobal.run(() => 0)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};