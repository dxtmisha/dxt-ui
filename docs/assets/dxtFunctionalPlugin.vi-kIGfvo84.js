import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Functions/dxtFunctionalPlugin - Khởi tạo thống nhất`}),`
`,(0,c.jsx)(n.h1,{id:`dxtfunctionalplugin`,children:(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),` là một plugin cho Vue 3 được thiết kế để tập trung hóa cấu hình và khởi tạo cho tất cả các dịch vụ tính năng (`,(0,c.jsx)(n.code,{children:`Api`}),`, `,(0,c.jsx)(n.code,{children:`Translate`}),`, `,(0,c.jsx)(n.code,{children:`Icons`}),`, `,(0,c.jsx)(n.code,{children:`Meta`}),`) trong ứng dụng của bạn. Nó đảm bảo các đối tượng đơn lẻ (singleton) được thiết lập đúng cách trước khi gắn kết (mount) ứng dụng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Các tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App`}),` — Thực thể ứng dụng Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: FunctionalPluginOptions`}),` — Đối tượng cấu hình cho các dịch vụ tính năng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Plugin`}),` — Một đối tượng plugin Vue tích hợp logic tính năng cốt lõi vào ứng dụng.`]}),`
`,(0,c.jsx)(n.h2,{id:`cài-đặt`,children:`Cài đặt`}),`
`,(0,c.jsxs)(n.p,{children:[`Thêm plugin vào ứng dụng Vue của bạn trong `,(0,c.jsx)(n.code,{children:`main.ts`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(dxtFunctionalPlugin, {
  api: { urlRoot: 'https://api.example.com' },
  metaSuffix: ' | Ứng dụng của tôi',
  router
})

app.mount('#app')
`})}),`
`,(0,c.jsx)(n.h2,{id:`luồng-khởi-tạo`,children:`Luồng khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khi plugin được cài đặt, nó thực hiện các bước sau theo thứ tự:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Api`}),`: Gọi `,(0,c.jsx)(n.code,{children:`Api.setConfig()`}),` với `,(0,c.jsx)(n.code,{children:`ApiConfig`}),` được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Translate`}),`: Gọi `,(0,c.jsx)(n.code,{children:`Translate.setConfig()`}),` với `,(0,c.jsx)(n.code,{children:`TranslateConfig`}),` được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Icons`}),`: Gọi `,(0,c.jsx)(n.code,{children:`Icons.setConfig()`}),` với `,(0,c.jsx)(n.code,{children:`IconsConfig`}),` được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Meta`}),`: Cấu hình hậu tố cho tiêu đề thông qua `,(0,c.jsx)(n.code,{children:`useMeta().setSuffix()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Router`}),`: Đăng ký router vào `,(0,c.jsx)(n.code,{children:`RouterItemRef`}),`, giúp có thể truy cập toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`executeUseGlobalInit`}),`: Kích hoạt quá trình khởi tạo hàng loạt cho tất cả các đối tượng đơn lẻ được định nghĩa thông qua `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Plugin sử dụng các giao diện (interface) sau để cấu hình:`}),`
`,(0,c.jsx)(n.h3,{id:`functionalpluginoptions`,children:(0,c.jsx)(n.code,{children:`FunctionalPluginOptions`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — Cấu hình cho phiên bản `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — Cấu hình cho dịch vụ dịch thuật `,(0,c.jsx)(n.code,{children:`Translate`}),` toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — Cấu hình cho cơ sở dữ liệu biểu tượng `,(0,c.jsx)(n.code,{children:`Icons`}),` toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — Chuỗi hậu tố sẽ được thêm vào tất cả tiêu đề trang được thiết lập thông qua `,(0,c.jsx)(n.code,{children:`useMeta()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — Thực thể Vue Router. Nếu bỏ qua, plugin sẽ cố gắng lấy nó từ `,(0,c.jsx)(n.code,{children:`app.config.globalProperties.$router`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apiconfig`,children:(0,c.jsx)(n.code,{children:`ApiConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Giao diện cấu hình cho dịch vụ API:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`urlRoot?: string`}),` — URL cơ sở cho các yêu cầu API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string>`}),` — Các tiêu đề mặc định cho tất cả yêu cầu API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefault?: Record<string, any>`}),` — Dữ liệu yêu cầu mặc định được gửi kèm theo mỗi yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation?: (apiFetch: ApiFetch) => Promise<void>`}),` — Hook được gọi trước mỗi yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — Hook được gọi sau mỗi yêu cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translateconfig`,children:(0,c.jsx)(n.code,{children:`TranslateConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Giao diện cấu hình cho dịch vụ dịch thuật:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — URL đến script chứa dữ liệu dịch thuật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`propsName?: string`}),` — Tên khóa trong bộ nhớ cục bộ hoặc trạng thái cho bản dịch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readApi?: boolean`}),` — Cờ đọc các bản dịch từ API.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`iconsconfig`,children:(0,c.jsx)(n.code,{children:`IconsConfig`})}),`
`,(0,c.jsx)(n.p,{children:`Giao diện cấu hình cho cơ sở dữ liệu biểu tượng:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — URL cơ sở để lấy các tài nguyên biểu tượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: Record<string, IconsItem>`}),` — Đối tượng ánh xạ tên biểu tượng với nội dung SVG hoặc bộ nạp của chúng.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};