import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/# Chuẩn bị dự án`}),`
`,(0,c.jsx)(n.h1,{id:`chuẩn-bị-dự-án`,children:`Chuẩn bị dự án`}),`
`,(0,c.jsxs)(n.p,{children:[`Thư viện `,(0,c.jsx)(n.code,{children:`@dxtmisha/nitro-basic`}),` được thiết kế để hoạt động kết hợp với Nitro và Vue 3. Nó đảm bảo sự chuyển đổi mượt mà giữa quá trình render phía server và phía client. Dưới đây là hướng dẫn từng bước để tích hợp thư viện vào dự án của bạn.`]}),`
`,(0,c.jsx)(n.h2,{id:`1-cài-đặt-các-phần-phụ-thuộc`,children:`1. Cài đặt các phần phụ thuộc`}),`
`,(0,c.jsx)(n.p,{children:`Cài đặt các gói cần thiết. Ngoài bản thân thư viện, bạn sẽ cần Vue 3 và Vue Router:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @dxtmisha/nitro-basic vue vue-router
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-khởi-tạo-plugin-nitro`,children:`2. Khởi tạo Plugin Nitro`}),`
`,(0,c.jsx)(n.p,{children:`Để thiết lập môi trường server cơ bản (ví dụ: lưu đệm API), bạn cần đăng ký một plugin Nitro.`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo tệp `,(0,c.jsx)(n.code,{children:`server/plugins/ui.ts`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { definePlugin } from 'nitro'
import { initPluginBasic } from '@dxtmisha/nitro-basic/plugin'

export default definePlugin((nitroApp) => {
  initPluginBasic(nitroApp)
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`3-tạo-factory-ứng-dụng-maints`,children:`3. Tạo Factory ứng dụng (main.ts)`}),`
`,(0,c.jsx)(n.p,{children:`Tạo một tệp dùng chung để khởi tạo ứng dụng Vue sẽ được sử dụng trên cả server và client.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { uiCreateApp } from '@dxtmisha/nitro-basic'
import App from './App.vue'
import { routes } from './router'

export function createApp() {
  return uiCreateApp(App, {
    appRouter: {
      routes
    }
  })
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`4-cấu-hình-điểm-đầu-vào-client`,children:`4. Cấu hình điểm đầu vào Client`}),`
`,(0,c.jsx)(n.p,{children:`Trên client, bạn cần chuẩn bị trình tạo định danh và mount ứng dụng.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/entry-client.ts
import { uiBootstrapClient, uiCreateClientApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

const { app, router, options } = createApp()

// Khởi tạo ID để hydrat hóa
uiBootstrapClient()

// Mount ứng dụng
uiCreateClientApp(app, '#app', router, options)
`})}),`
`,(0,c.jsx)(n.h2,{id:`5-cấu-hình-điểm-đầu-vào-server`,children:`5. Cấu hình điểm đầu vào Server`}),`
`,(0,c.jsx)(n.p,{children:`Điểm đầu vào server chịu trách nhiệm khởi tạo bộ lưu trữ, header và render HTML.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/entry-server.ts
import { uiBootstrapServer, uiCreateServerApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'
import template from './templates/main.html?raw' // HTML template

// Khởi tạo server toàn cục
uiBootstrapServer()

export default {
  async fetch(request: Request) {
    const { app, router, options } = createApp()

    const { headers, body } = await uiCreateServerApp(
      app,
      request,
      router,
      options,
      undefined,
      undefined,
      template
    )

    return new Response(body, { headers })
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`6-template-html`,children:`6. Template HTML`}),`
`,(0,c.jsxs)(n.p,{children:[`Để SSR hoạt động chính xác, thư viện sử dụng một hệ thống nhãn (placeholder) trong template HTML. Hàm `,(0,c.jsx)(n.code,{children:`uiCreateServerApp`}),` sẽ tự động thay thế chúng bằng dữ liệu thực tế.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Các nhãn khả dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-lang-->`}),` — mã ngôn ngữ của người dùng (ví dụ: `,(0,c.jsx)(n.code,{children:`vi`}),`). Được sử dụng trong `,(0,c.jsx)(n.code,{children:`<html lang="...">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-title-->`}),` — tiêu đề trang từ `,(0,c.jsx)(n.code,{children:`MetaStatic`}),`. Được chèn vào `,(0,c.jsx)(n.code,{children:`<title>`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-meta-->`}),` — khối các thẻ meta (OG, Twitter, v.v.) từ `,(0,c.jsx)(n.code,{children:`MetaStatic`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-outlet-->`}),` — chuỗi HTML đã được render của ứng dụng. Thường nằm bên trong `,(0,c.jsx)(n.code,{children:`<div id="app">`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-teleports-->`}),` — nội dung từ Vue Teleports.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`<!--ssr-scriptsJson-->`}),` — `,(0,c.jsx)(n.strong,{children:`Nhãn cực kỳ quan trọng`}),`. Chứa JSON với dữ liệu hydrat hóa (`,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, bộ nhớ đệm API). Phải được đặt trước thẻ đóng `,(0,c.jsx)(n.code,{children:`</body>`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Ví dụ `,(0,c.jsx)(n.code,{children:`main.html`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<!DOCTYPE html>
<html lang="<!--ssr-lang-->">
<head>
    <meta charset="UTF-8">
    <!--ssr-meta-->
    <title><!--ssr-title--></title>
</head>
<body>
    <div id="app"><!--ssr-outlet--></div>
    
    <!--ssr-teleports-->
    <!--ssr-scriptsJson-->

    <script type="module" src="/src/entry-client.ts"><\/script>
</body>
</html>
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Nếu không có nhãn `,(0,c.jsx)(n.code,{children:`<!--ssr-scriptsJson-->`}),`, dữ liệu nhận được trên server sẽ không được chuyển sang client, dẫn đến lỗi hydrat hóa và các yêu cầu API bị lặp lại.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};