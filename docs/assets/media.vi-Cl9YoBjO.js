import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/2. Token toàn cầu và Media`}),`
`,(0,c.jsx)(t.h1,{id:`token-toàn-cầu-và-media-srcmedia`,children:`Token toàn cầu và Media (src/media)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư mục `,(0,c.jsx)(t.code,{children:`src/media`}),` dùng để lưu trữ các design token toàn cầu và tài nguyên phương tiện (như biểu tượng) cho hệ thống thiết kế của bạn. Cấu trúc thư mục và danh sách token là linh hoạt và tùy biến cho từng dự án dựa trên yêu cầu thiết kế.`]}),`
`,(0,c.jsx)(t.h2,{id:`1-cấu-trúc-thư-mục`,children:`1. Cấu trúc thư mục`}),`
`,(0,c.jsx)(t.p,{children:`Ví dụ về cấu trúc cơ bản:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`src/media/
├── icons/                   # Các biểu tượng SVG của dự án
│   └── *.svg
├── tokens/                  # Các tệp JSON chứa design token (màu sắc, lưới, khoảng cách, v.v.)
│   └── *.json
└── properties.json          # Tệp cấu hình chính cho toàn bộ token toàn cầu
`})}),`
`,(0,c.jsx)(t.h2,{id:`2-cấu-hình-token-propertiesjson`,children:`2. Cấu hình Token (properties.json)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`src/media/properties.json`}),` liên kết các token của dự án lại với nhau, phân loại theo danh mục và điều khiển cách biên dịch chúng:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "ref": {
    "value": {
      "file|ref": "tokens/ref.json"
    },
    "_type": "var",
    "_category": "root"
  },
  "sys": {
    "value": {
      "file|sys": "tokens/sys.json"
    },
    "_type": "var",
    "_category": "root"
  },
  "color": {
    "value": {
      "file|color": "tokens/color.json"
    },
    "_category": "class"
  },
  "dark": {
    "value": {
      "file|dark": "tokens/dark.json"
    },
    "_category": "theme"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"file|<tên>": "duong_dan.json"`}),` — nhập tệp JSON token bên ngoài.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_type": "var"`}),` — xuất các token thành biến CSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "root"`}),` — các biến hệ thống gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "class"`}),` — các nhóm kiểu dáng có thể tái sử dụng cho các thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`"_category": "theme"`}),` — các token ghi đè chủ đề (ví dụ: chế độ tối).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`3-thêm-biểu-tượng-icons`,children:`3. Thêm biểu tượng (icons)`}),`
`,(0,c.jsx)(t.p,{children:`Để thêm biểu tượng mới:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Đặt các tệp `,(0,c.jsx)(t.code,{children:`.svg`}),` vào thư mục `,(0,c.jsx)(t.code,{children:`src/media/icons/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Khởi chạy trình tạo mã:`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run ui
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp lệnh sẽ tự động tìm kiếm tất cả biểu tượng, tạo import bất đồng bộ và đăng ký qua `,(0,c.jsx)(t.code,{children:`Icons`}),`. Sau đó biểu tượng có thể được sử dụng theo tên tệp trong mọi thành phần:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<d1-button icon="my-icon">Nút bấm</d1-button>
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-đồng-bộ-hóa`,children:`4. Đồng bộ hóa`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi chỉnh sửa token hoặc thêm biểu tượng mới, hãy chạy:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh này sẽ biên dịch lại các mixin SCSS, cập nhật `,(0,c.jsx)(t.code,{children:`ui-properties.scss`}),`, kết nối biểu tượng và đồng bộ hóa các kiểu TypeScript.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};