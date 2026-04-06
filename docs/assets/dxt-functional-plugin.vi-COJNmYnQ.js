import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Khởi tạo Plugin`}),`
`,(0,c.jsx)(n.h1,{id:`khởi-tạo-plugin-thống-nhất-dxtfunctionalplugin`,children:`Khởi Tạo Plugin Thống Nhất (dxtFunctionalPlugin)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),` là một plugin cho Vue 3 dùng để đảm nhiệm mọi thao tác cấu hình tập trung và khởi chạy hàng loạt các dịch vụ cốt lõi (`,(0,c.jsx)(n.code,{children:`Api`}),`, `,(0,c.jsx)(n.code,{children:`Translate`}),`, `,(0,c.jsx)(n.code,{children:`Icons`}),`, `,(0,c.jsx)(n.code,{children:`Meta`}),`) bên trong ứng dụng của bạn.`]}),`
`,(0,c.jsx)(n.p,{children:`Thay vì phải nhập thủ công từng dịch vụ và cấu hình chúng riêng biệt, bạn chỉ việc gởi một đối tượng cấu hình duy nhất ngay thời điểm ứng dụng khởi động.`}),`
`,(0,c.jsx)(n.h2,{id:`khởi-động-nhanh-cài-đặt`,children:`Khởi Động Nhanh (Cài Đặt)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong tệp thông số tĩnh ứng dụng chính của bạn (`,(0,c.jsx)(n.code,{children:`main.ts`}),`), hãy gọi phương thức `,(0,c.jsx)(n.code,{children:`app.use()`}),`, đưa vào plugin và các lựa chọn cấu hình của bạn. `,(0,c.jsxs)(n.strong,{children:[`Lưu ý phải thực thi việc này trước lúc gắn ứng dụng (`,(0,c.jsx)(n.code,{children:`app.mount`}),`).`]})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { dxtFunctionalPlugin, type FunctionalPluginOptions } from '@dxtmisha/functional'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Chuẩn bị cấu hình
const functionalOptions: FunctionalPluginOptions = {
  // Cấu hình máy khách API (Base URL)
  api: { urlRoot: 'https://api.example.com' },
  // Hậu tố được thêm vào sau bất cứ thẻ <title> nào của trang web
  metaSuffix: ' | Ứng Dụng Của Tôi',
  // Truyền đối tượng router để các dịch vụ nhận biết hệ thống điều hướng
  router
}

// Bật plugin chức năng
app.use(dxtFunctionalPlugin, functionalOptions)

app.mount('#app')
`})}),`
`,(0,c.jsx)(n.h2,{id:`plugin-này-thực-trực-hoạt-động-gì`,children:`Plugin Này Thực Trực Hoạt Động Gì?`}),`
`,(0,c.jsxs)(n.p,{children:[`Lúc bạn kích hoạt `,(0,c.jsx)(n.code,{children:`app.use(dxtFunctionalPlugin)`}),`, các giải đoạn tuần tự sau sẽ tự động diễn ra:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khởi Chạy `,(0,c.jsx)(n.code,{children:`Api`})]}),`: Thiết lập Base URL, headers mặc định, và các bước logic kiểm duyệt giao thức (hook) qua phương thức `,(0,c.jsx)(n.code,{children:`Api.setConfig()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khởi Chạy `,(0,c.jsx)(n.code,{children:`Translate`})]}),`: Áp dụng các cấu hình về ngôn ngữ / dữ liệu từ địa phương để nạp biểu mẫu dịch thuật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khởi Chạy `,(0,c.jsx)(n.code,{children:`Icons`})]}),`: Kết nối và điều hướng kho lưu trữ các tập SVG hình tượng biểu trưng toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Khởi Chạy `,(0,c.jsx)(n.code,{children:`Meta`})]}),`: Khởi thiết lập hậu tố trực tiếp trên tab trình duyệt (sử dụng hàm `,(0,c.jsx)(n.code,{children:`useMeta().setSuffix()`}),`) nếu trường này được kê khai.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cộng Giao Động Vue Router`}),`: Nạp đối tượng định tuyến này vào mạng lưới dữ liệu riêng của bộ thư viện (`,(0,c.jsx)(n.code,{children:`RouterItemRef`}),`), biến các chức năng điều khiển trở thành có thể dùng chung mở cho những dịch vụ khác dẫu là nằm tách khỏi phạm vi một component Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Bật `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` chạy thi hành`]}),`: Đánh thức một lần tự khởi điểm duy nhất hoàn toàn những global singletons đứng ở nền móng `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`. Chấm dứt thao tác bạn cất công truy xuất thủ công.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tinh-chỉnh-dịch-vụ-mở-rộng`,children:`Tinh Chỉnh Dịch Vụ Mở Rộng`}),`
`,(0,c.jsxs)(n.p,{children:[`Trên `,(0,c.jsx)(n.code,{children:`FunctionalPluginOptions`}),`, bạn chỉ việc điền những tiện ích nào mình nhất thiết sử dụng tới. Cho ví dụ, nếu hệ dự án của bạn tuyệt nhiên không cần hệ thống thay ngôn ngữ (`,(0,c.jsx)(n.code,{children:`Translate`}),`), bạn hoàn toàn bình thản bỏ trống không gởi dữ liệu phím khóa đó cho tiện ích thiết lập.`]}),`
`,(0,c.jsx)(n.h3,{id:`ví-dụ-chỉnh-cơ-sở-dữ-liệu-api-lương-cao-mức-chuyên-sâu`,children:`Ví Dụ Chỉnh Cơ Sở Dữ Liệu API Lương Cao Mức Chuyên Sâu:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options: FunctionalPluginOptions = {
  api: {
    urlRoot: 'https://api.my-crm.com',
    headers: {
      'Content-Type': 'application/json'
    },
    // Hook móc chạy TRƯỚC ngay trước đà gởi bất cứ cuộc trao đổi fetch API nào 
    preparation: async (fetchObj) => {
      fetchObj.request.headers['Authorization'] = \`Bearer \${myToken}\`
    },
    // Hook móc bủa gọi SAU LUÔN bất cứ yêu cầu nào kết tụ (Xử lý lỗi toàn cục)
    end: async (response, fetchObj) => {
      if (response.status === 401) {
        // Rút phép người dùng
      }
      return undefined
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};