import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Tính tương thích (media, container)`}),`
`,(0,c.jsx)(n.h1,{id:`tính-tương-thích-media-container`,children:`Tính tương thích (media, container)`}),`
`,(0,c.jsxs)(n.p,{children:[`Các loại cấu trúc `,(0,c.jsx)(n.code,{children:`media`}),` và `,(0,c.jsx)(n.code,{children:`container`}),` điều phối việc khởi tạo các quy tắc thích nghi (`,(0,c.jsx)(n.code,{children:`@media`}),` và `,(0,c.jsx)(n.code,{children:`@container`}),`). Chúng cho phép co giãn giao diện linh hoạt dựa trên kích thước khung nhìn (viewport) hoặc giới hạn của khối cha (parent block).`]}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống phân tách làm bốn dạng thức thích nghi chủ đạo, được tích hợp sâu với các điểm dừng (breakpoints) của thiết kế:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`media`}),`: Khởi tạo điều kiện `,(0,c.jsx)(n.code,{children:`min-width`}),` (từ điểm chỉ định trở lên). Nếu truyền hai giá trị (ví dụ `,(0,c.jsx)(n.code,{children:`sm,md`}),`), hệ thống sẽ tạo dải giới hạn `,(0,c.jsx)(n.code,{children:`(min-width: ...) and (max-width: ...)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`media-max`}),`: Khởi tạo điều kiện `,(0,c.jsx)(n.code,{children:`max-width`}),`. Hệ thống tự động trừ đi `,(0,c.jsx)(n.code,{children:`1px`}),` từ giá trị breakpoint để tránh xung đột render tại ranh giới chính xác.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`container`}),` / `,(0,c.jsx)(n.strong,{children:`container-max`}),`: Vận hành tương tự media query nhưng xuất ra các quy tắc `,(0,c.jsx)(n.code,{children:`@container`}),`, cho phép phần tử co giãn theo kích thước của khối cha. Yêu cầu phần tử cha phải được thiết lập `,(0,c.jsx)(n.code,{children:`container-type`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Truy vấn thích ứng có thể được thiết lập thông qua phím tắt sử dụng ký tự phân tách `,(0,c.jsx)(n.code,{children:`|`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`media-max|md`}),`) hoặc khai báo tường minh qua thuộc tính `,(0,c.jsx)(n.code,{children:`_type`}),`. Giá trị (`,(0,c.jsx)(n.code,{children:`value`}),`) chấp nhận cả các điểm dừng được định danh trong hệ thống thiết kế (md, lg) lẫn các đơn vị CSS thô (768px).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "card": {
    "padding": "24px",
    
    "media-max|md": {            // Truy vấn dựa trên Viewport (media-max)
      "padding": "16px"
    },
    
    "mobile": {                  // Khai báo loại tường minh (explicit)
      "_type": "container-max",  // Truy vấn dựa trên Parent (container-max)
      "value": "400px",
      "padding": "8px"
    },
    
    "container-max|lg": {        // Phím tắt container-max
       "padding": "20px"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  padding: 24px;

  @media (max-width: 960px) {    // media-max|md
    padding: 16px;
  }

  @container (max-width: 400px) { // _type: container-max
    padding: 8px;
  }
  
  @container (max-width: 1200px) { // container-max|lg
    padding: 20px;
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`tạo-nhóm-thích-ứng-media-group`,children:`Tạo nhóm thích ứng (Media Group)`}),`
`,(0,c.jsxs)(n.p,{children:[`Các loại đặc biệt `,(0,c.jsx)(n.code,{children:`media-group`}),`, `,(0,c.jsx)(n.code,{children:`media-max-group`}),`, `,(0,c.jsx)(n.code,{children:`container-group`}),`, và `,(0,c.jsx)(n.code,{children:`container-max-group`}),` cho phép tự động tạo ra một tập hợp các quy tắc thích ứng cho tất cả các điểm dừng (breakpoints) có sẵn được định nghĩa trong hệ thống.`]}),`
`,(0,c.jsx)(n.p,{children:`Điều này giúp loại bỏ việc phải viết thủ công từng truy vấn media khi logic thích ứng giống nhau cho các kích thước khác nhau nhưng cần được đóng gói vào các bộ chọn (selectors) riêng biệt.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Ví dụ cấu hình (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "group|icon": {
      "_type": "media-group",
      "padding": "8px"
    }
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch (SCSS):`}),`
Khi sử dụng `,(0,c.jsx)(n.code,{children:`media-group`}),`, hệ thống sẽ tạo ra các lớp lồng nhau cho mỗi breakpoint bằng cách thêm hậu tố (ví dụ: `,(0,c.jsx)(n.code,{children:`iconSm`}),`, `,(0,c.jsx)(n.code,{children:`iconMd`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  &--iconSm { @media (min-width: 640px) { padding: 8px; } }
  &--iconMd { @media (min-width: 768px) { padding: 8px; } }
  &--iconLg { @media (min-width: 1024px) { padding: 8px; } }
  // và cứ thế cho tất cả các breakpoints...
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};