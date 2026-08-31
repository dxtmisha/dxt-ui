import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/1. Chuẩn bị dự án`}),`
`,(0,c.jsx)(t.h1,{id:`chuẩn-bị-dự-án`,children:`Chuẩn bị dự án`}),`
`,(0,c.jsx)(t.p,{children:`Trước khi bạn bắt đầu thiết kế các thành phần, bạn cần chuẩn bị môi trường làm việc và cấu hình các tệp tin dự án. Hệ thống yêu cầu các gói cốt lõi trong hệ sinh thái và các cài đặt trình biên dịch cụ thể.`}),`
`,(0,c.jsx)(t.h2,{id:`1-cài-đặt-các-thành-phần-phụ-thuộc`,children:`1. Cài đặt các thành phần phụ thuộc`}),`
`,(0,c.jsxs)(t.p,{children:[`Cài đặt đầy đủ các gói `,(0,c.jsx)(t.code,{children:`@dxtmisha`}),` cần thiết bằng cách sử dụng trình quản lý gói của bạn:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/configuration @dxtmisha/constructor @dxtmisha/functional @dxtmisha/functional-basic @dxtmisha/media @dxtmisha/styles @dxtmisha/scripts @dxtmisha/test @dxtmisha/wiki
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-cấu-hình-dự-án-designconfigjson`,children:`2. Cấu hình dự án (design.config.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một tệp `,(0,c.jsx)(t.code,{children:`design.config.json`}),` trong thư mục gốc của dự án. Tệp này xác định các tham số toàn cầu cho hệ thống thiết kế của bạn, như tên dự án và ngôn ngữ tài liệu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "project": "Ui",
  "name": "my-design",
  "wikiLanguage": "vi"
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`Lưu ý: Bạn có thể sử dụng thuộc tính `,(0,c.jsx)(t.code,{children:`"extends"`}),` để kế thừa cấu hình từ các gói khác.`]})}),`
`,(0,c.jsx)(t.h2,{id:`3-cấu-hình-vite-viteconfigts`,children:`3. Cấu hình Vite (vite.config.ts)`}),`
`,(0,c.jsxs)(t.p,{children:[`Để xây dựng đúng cách, khuyến nghị sử dụng đối tượng `,(0,c.jsx)(t.code,{children:`viteComponents`}),` đã được định nghĩa sẵn từ gói `,(0,c.jsx)(t.code,{children:`@dxtmisha/configuration`}),`. Nó chứa tất cả các plugin và cài đặt cần thiết để làm việc với các thành phần và tài liệu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { viteComponents } from '@dxtmisha/configuration/viteComponents'

// https://vite.dev/config/
export default viteComponents
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-cấu-hình-typescript-tsconfigappjson`,children:`4. Cấu hình TypeScript (tsconfig.app.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thêm hỗ trợ loại tệp MDX vào cấu hình TypeScript của bạn. Để thực hiện việc này, hãy thêm `,(0,c.jsx)(t.code,{children:`@types/mdx`}),` vào mảng `,(0,c.jsx)(t.code,{children:`types`}),` trong phần `,(0,c.jsx)(t.code,{children:`compilerOptions`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "types": [
      "@types/mdx"
    ]
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`5-thêm-các-lệnh-thực-thi-packagejson`,children:`5. Thêm các lệnh thực thi (package.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thêm các mã lệnh sau vào tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của bạn để tự động hóa quá trình tạo mã, tài liệu và định kiểu:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "ui": "dxt-ui",
    "wiki-storm": "dxt-wiki-storm",
    "types": "npm run ui && npm run build && npm run wiki-storm && dxt-types",
    "screenshot": "dxt-screenshot",
    "prepublishOnly": "npm run ui && npm run build && npm run wiki-storm && dxt-types-save"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`ui`}),`: Khởi chạy chu kỳ tạo thành phần giao diện người dùng (UI) chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`wiki-storm`}),`: Tạo và cập nhật các tệp cho Wiki/Storybook.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`types`}),`: Chạy toàn bộ chu kỳ xây dựng và cập nhật các kiểu dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`screenshot`}),`: Khởi chạy kiểm thử hồi quy trực quan và tạo ảnh chụp màn hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`prepublishOnly`}),`: Thực hiện xây dựng hoàn chỉnh, tạo tài liệu và lưu ảnh chụp kiểu dữ liệu trước khi xuất bản gói.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};