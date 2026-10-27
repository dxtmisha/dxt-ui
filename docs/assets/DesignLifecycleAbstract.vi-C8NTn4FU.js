import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignLifecycleAbstract`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designlifecycleabstract`,children:`Lớp DesignLifecycleAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp cơ sở trừu tượng cho phụ thuộc có callback vòng đời đồng bộ. `,(0,c.jsx)(t.code,{children:`DesignLogicAbstract`}),` chỉ gọi các callback này trên đối tượng kế thừa lớp này.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Callback tùy chọn`}),` — có thể bỏ qua một hoặc cả hai callback.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp đồng đồng bộ`}),` — callback trả về `,(0,c.jsx)(t.code,{children:`void`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Gọi tường minh`}),` — khởi tạo phụ thuộc không tự chạy callback.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:`Kế thừa lớp trừu tượng này; không khởi tạo trực tiếp.`}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp không có phương thức công khai. Lớp con cung cấp các thuộc tính readonly `,(0,c.jsx)(t.code,{children:`onMounted?: () => void`}),` và `,(0,c.jsx)(t.code,{children:`onUnmounted?: () => void`}),`. Lớp con quản lý tác vụ bất đồng bộ và dọn dẹp.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignLifecycleAbstract } from '@dxtmisha/functional'

class Dependency extends DesignLifecycleAbstract {
  mounted = false
  override readonly onMounted = (): void => { this.mounted = true }
  override readonly onUnmounted = (): void => { this.mounted = false }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`thuộc-tính`,children:`Thuộc tính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onMounted: (() => void) | undefined`}),` — Callback gắn đồng bộ tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`onUnmounted: (() => void) | undefined`}),` — Callback dọn dẹp đồng bộ tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.p,{children:`Không có phương thức công khai; sử dụng các thuộc tính được mô tả ở trên.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};