import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/properties/types/Tính tương thích (media, container)`}),`
`,(0,c.jsx)(t.h1,{id:`tính-tương-thích-media-container`,children:`Tính tương thích (media, container)`}),`
`,(0,c.jsxs)(t.p,{children:[`Các loại cấu trúc `,(0,c.jsx)(t.code,{children:`media`}),` và `,(0,c.jsx)(t.code,{children:`container`}),` điều phối việc khởi tạo các quy tắc thích nghi (`,(0,c.jsx)(t.code,{children:`@media`}),` và `,(0,c.jsx)(t.code,{children:`@container`}),`). Chúng cho phép co giãn giao diện linh hoạt dựa trên kích thước khung nhìn (viewport) hoặc giới hạn của khối cha (parent block).`]}),`
`,(0,c.jsx)(t.p,{children:`Hệ thống phân tách làm bốn dạng thức thích nghi chủ đạo, được tích hợp sâu với các điểm dừng (breakpoints) của thiết kế:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`media`}),`: Khởi tạo điều kiện `,(0,c.jsx)(t.code,{children:`min-width`}),` (từ điểm chỉ định trở lên). Nếu truyền hai giá trị (ví dụ `,(0,c.jsx)(t.code,{children:`sm,md`}),`), hệ thống sẽ tạo dải giới hạn `,(0,c.jsx)(t.code,{children:`(min-width: ...) and (max-width: ...)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`media-max`}),`: Khởi tạo điều kiện `,(0,c.jsx)(t.code,{children:`max-width`}),`. Hệ thống tự động trừ đi `,(0,c.jsx)(t.code,{children:`1px`}),` từ giá trị breakpoint để tránh xung đột render tại ranh giới chính xác.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`container`}),` / `,(0,c.jsx)(t.strong,{children:`container-max`}),`: Vận hành tương tự media query nhưng xuất ra các quy tắc `,(0,c.jsx)(t.code,{children:`@container`}),`, cho phép phần tử co giãn theo kích thước của khối cha. Yêu cầu phần tử cha phải được thiết lập `,(0,c.jsx)(t.code,{children:`container-type`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Truy vấn thích ứng có thể được thiết lập thông qua phím tắt sử dụng ký tự phân tách `,(0,c.jsx)(t.code,{children:`|`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`media-max|md`}),`) hoặc khai báo tường minh qua thuộc tính `,(0,c.jsx)(t.code,{children:`_type`}),`. Giá trị (`,(0,c.jsx)(t.code,{children:`value`}),`) chấp nhận cả các điểm dừng được định danh trong hệ thống thiết kế (md, lg) lẫn các đơn vị CSS thô (768px).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
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
`,(0,c.jsx)(t.h3,{id:`tạo-nhóm-thích-ứng-media-group`,children:`Tạo nhóm thích ứng (Media Group)`}),`
`,(0,c.jsxs)(t.p,{children:[`Các loại đặc biệt `,(0,c.jsx)(t.code,{children:`media-group`}),`, `,(0,c.jsx)(t.code,{children:`media-max-group`}),`, `,(0,c.jsx)(t.code,{children:`container-group`}),`, và `,(0,c.jsx)(t.code,{children:`container-max-group`}),` cho phép tự động tạo ra một tập hợp các quy tắc thích ứng cho tất cả các điểm dừng (breakpoints) có sẵn được định nghĩa trong hệ thống.`]}),`
`,(0,c.jsx)(t.p,{children:`Điều này giúp loại bỏ việc phải viết thủ công từng truy vấn media khi logic thích ứng giống nhau cho các kích thước khác nhau nhưng cần được đóng gói vào các bộ chọn (selectors) riêng biệt.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Ví dụ cấu hình (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "group|icon": {
      "_type": "media-group",
      "padding": "8px"
    }
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch (SCSS):`}),`
Khi sử dụng `,(0,c.jsx)(t.code,{children:`media-group`}),`, hệ thống sẽ tạo ra các lớp lồng nhau cho mỗi breakpoint bằng cách thêm hậu tố (ví dụ: `,(0,c.jsx)(t.code,{children:`iconSm`}),`, `,(0,c.jsx)(t.code,{children:`iconMd`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  &--iconSm { @media (min-width: 640px) { padding: 8px; } }
  &--iconMd { @media (min-width: 768px) { padding: 8px; } }
  &--iconLg { @media (min-width: 1024px) { padding: 8px; } }
  // và cứ thế cho tất cả các breakpoints...
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};