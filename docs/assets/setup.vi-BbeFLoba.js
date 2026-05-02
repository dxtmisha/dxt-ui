import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/# Chuẩn bị dự án`}),`
`,(0,c.jsx)(n.h1,{id:`chuẩn-bị-dự-án`,children:`Chuẩn bị dự án`}),`
`,(0,c.jsx)(n.p,{children:`Trước khi bạn bắt đầu thiết kế các thành phần, bạn cần chuẩn bị môi trường làm việc và cấu hình các tệp tin dự án. Hệ thống yêu cầu các gói cốt lõi trong hệ sinh thái và các cài đặt trình biên dịch cụ thể.`}),`
`,(0,c.jsx)(n.h2,{id:`1-cài-đặt-các-thành-phần-phụ-thuộc`,children:`1. Cài đặt các thành phần phụ thuộc`}),`
`,(0,c.jsxs)(n.p,{children:[`Cài đặt đầy đủ các gói `,(0,c.jsx)(n.code,{children:`@dxtmisha`}),` cần thiết bằng cách sử dụng trình quản lý gói của bạn:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm install @dxtmisha/configuration @dxtmisha/constructor @dxtmisha/functional @dxtmisha/functional-basic @dxtmisha/media @dxtmisha/styles @dxtmisha/scripts @dxtmisha/test @dxtmisha/wiki
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-cấu-hình-dự-án-designconfigjson`,children:`2. Cấu hình dự án (design.config.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một tệp `,(0,c.jsx)(n.code,{children:`design.config.json`}),` trong thư mục gốc của dự án. Tệp này xác định các tham số toàn cầu cho hệ thống thiết kế của bạn, như tên dự án và ngôn ngữ tài liệu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "project": "Ui",
  "name": "my-design",
  "wikiLanguage": "vi"
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`Lưu ý: Bạn có thể sử dụng thuộc tính `,(0,c.jsx)(n.code,{children:`"extends"`}),` để kế thừa cấu hình từ các gói khác.`]})}),`
`,(0,c.jsx)(n.h2,{id:`3-cấu-hình-vite-viteconfigts`,children:`3. Cấu hình Vite (vite.config.ts)`}),`
`,(0,c.jsxs)(n.p,{children:[`Để xây dựng đúng cách, khuyến nghị sử dụng đối tượng `,(0,c.jsx)(n.code,{children:`viteComponents`}),` đã được định nghĩa sẵn từ gói `,(0,c.jsx)(n.code,{children:`@dxtmisha/configuration`}),`. Nó chứa tất cả các plugin và cài đặt cần thiết để làm việc với các thành phần và tài liệu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { viteComponents } from '@dxtmisha/configuration/viteComponents'

// https://vite.dev/config/
export default viteComponents
`})}),`
`,(0,c.jsx)(n.h2,{id:`4-cấu-hình-typescript-tsconfigappjson`,children:`4. Cấu hình TypeScript (tsconfig.app.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Thêm hỗ trợ loại tệp MDX vào cấu hình TypeScript của bạn. Để thực hiện việc này, hãy thêm `,(0,c.jsx)(n.code,{children:`@types/mdx`}),` vào mảng `,(0,c.jsx)(n.code,{children:`types`}),` trong phần `,(0,c.jsx)(n.code,{children:`compilerOptions`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "types": [
      "@types/mdx"
    ]
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`5-thêm-các-lệnh-thực-thi-packagejson`,children:`5. Thêm các lệnh thực thi (package.json)`}),`
`,(0,c.jsxs)(n.p,{children:[`Thêm các mã lệnh sau vào tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` của bạn để tự động hóa quá trình tạo mã, tài liệu và định kiểu:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "scripts": {
    "ui": "dxt-ui",
    "wiki-storm": "dxt-wiki-storm",
    "types": "dxt-types"
  }
}
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ui`}),`: Khởi chạy chu kỳ tạo thành phần giao diện người dùng (UI) chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`wiki-storm`}),`: Tạo và cập nhật các tệp cho Wiki/Storybook.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`types`}),`: Cập nhật các kiểu dữ liệu dựa trên cấu hình hiện tại.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};