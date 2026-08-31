import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initPluginBasic - Khởi tạo Plugin Nitro cơ bản`}),`
`,(0,c.jsx)(t.h1,{id:`initpluginbasic`,children:(0,c.jsx)(t.code,{children:`initPluginBasic`})}),`
`,(0,c.jsx)(t.p,{children:`Một hàm khởi tạo cho các khả năng cơ bản trong ứng dụng Nitro. Hiện tại, nó chịu trách nhiệm chính trong việc cấu hình bộ nhớ đệm API bằng cách sử dụng cấu hình được cung cấp.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_ : NitroApp`}),` — Thực thể ứng dụng Nitro.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config: NitroAppBasicConfig`}),` — Đối tượng cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappbasicconfig`,children:`NitroAppBasicConfig`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: object`}),` — Cài đặt API.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStorageKey: string`}),` — tiền tố khóa sẽ được sử dụng trong bộ lưu trữ Nitro cho bộ nhớ đệm (mặc định `,(0,c.jsx)(t.code,{children:`Ui_ApiCache`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStepAgeClearOld: number`}),` — ngưỡng tuổi của bộ nhớ đệm mà sau đó các mục cũ sẽ bị xóa.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initPluginBasic } from '@dxtmisha/nitro-basic'

export default defineNitroPlugin((nitroApp) => {
  initPluginBasic(nitroApp, {
    api: {
      cacheStorageKey: 'my_app_cache',
      cacheStepAgeClearOld: 3600000 // 1 giờ
    }
  })
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};