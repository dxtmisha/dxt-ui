import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/# UI Figma/# Lưu trữ dữ liệu`}),`
`,(0,c.jsx)(t.h1,{id:`làm-việc-với-bộ-nhớ-storage`,children:`Làm việc với bộ nhớ (Storage)`}),`
`,(0,c.jsx)(t.p,{children:`Figma cung cấp hai cơ chế chính để lưu dữ liệu: bộ nhớ người dùng cục bộ và bộ nhớ tài liệu dùng chung. Thư viện cung cấp các trình bao bọc (wrapper) được định kiểu cho cả hai phương pháp, giúp truy cập và đồng bộ hóa thuận tiện.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`Về phía mã của plugin, cần phải khởi tạo các trình lắng nghe tin nhắn để đồng bộ hóa dữ liệu với giao diện.`}),`
`,(0,c.jsx)(t.h3,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupStorage, setupClientStorage } from '@dxtmisha/figma-code'

// Kích hoạt trình lắng nghe cho cả hai loại bộ nhớ
setupStorage()
setupClientStorage()
`})}),`
`,(0,c.jsx)(t.h3,{id:`sử-dụng-trực-tiếp`,children:`Sử dụng trực tiếp`}),`
`,(0,c.jsx)(t.p,{children:`Bạn có thể làm việc với dữ liệu bộ nhớ trực tiếp trong mã backend:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaStorage, FigmaClientStorage } from '@dxtmisha/figma-code'

// Bộ nhớ tài liệu dùng chung
const storage = FigmaStorage.getInstance<string>('project-theme')
storage.set('dark')

// Bộ nhớ người dùng cá nhân
const client = FigmaClientStorage.getInstance<boolean>('show-onboarding')
await client.set(true)
`})}),`
`,(0,c.jsx)(t.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Trong giao diện plugin, dữ liệu có thể truy cập được thông qua các hook phản hồi tự động đồng bộ hóa với backend.`}),`
`,(0,c.jsx)(t.h3,{id:`sử-dụng-phản-hồi-vue`,children:`Sử dụng phản hồi (Vue)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaStorage, useFigmaClientStorage } from '@dxtmisha/figma-ref'

// Đồng bộ hóa với tài liệu
const { item: theme } = useFigmaStorage('project-theme', 'light')

// Đồng bộ hóa với cài đặt cá nhân của người dùng
const { item: isSeen } = useFigmaClientStorage('show-onboarding', false)

// Khi .value thay đổi, dữ liệu sẽ tự động được gửi đến Figma
theme.value = 'dark'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};