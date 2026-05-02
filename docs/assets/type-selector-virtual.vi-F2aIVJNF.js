import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Pseudo-classes và pseudo-elements (selector, virtual)`}),`
`,(0,c.jsx)(n.h1,{id:`pseudo-classes-và-pseudo-elements-selector-virtual`,children:`Pseudo-classes và pseudo-elements (selector, virtual)`}),`
`,(0,c.jsxs)(n.p,{children:[`Loại cấu trúc `,(0,c.jsx)(n.code,{children:`selector`}),` và `,(0,c.jsx)(n.code,{children:`virtual`}),` được dọn đường để xử lý tạo kiểu cho các trạng thái chuẩn của trình duyệt (cụ thể là các pseudo-class như `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:focus`}),` rẽ nhánh kèm chuỗi pseudo-element giả như `,(0,c.jsx)(n.code,{children:`::before`}),`, `,(0,c.jsx)(n.code,{children:`::after`}),`). Bộ Compiler sẽ ngầm ghim dính bộ thuộc tính này ngược vào block cha với cú pháp SCSS siêu kinh điển (`,(0,c.jsx)(n.code,{children:`&:`}),` và `,(0,c.jsx)(n.code,{children:`&::`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Lập trình viên có thể khai báo chúng qua shortcut cấp tốc `,(0,c.jsx)(n.code,{children:`:`}),` (dành cho selector) và `,(0,c.jsx)(n.code,{children:`::`}),` (dành cho virtual element). Hơn nữa, gần như toàn bộ kho từ khóa phổ thông của CSS (như `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`active`}),`, `,(0,c.jsx)(n.code,{children:`before`}),`) đều được trí tuệ nhân tạo của code bộ biên dịch nhận diện tự động mà không cần mồi sẵn một prefix nào cả.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Đối với pseudo-elements (`,(0,c.jsx)(n.code,{children:`virtual`}),`), compiler sẽ tự động chèn sẵn tham số gốc `,(0,c.jsx)(n.code,{children:`content: ""`}),` vào tệp CSS, lập trình viên không cần mất công khai báo thủ công.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px",
    
    ":hover": {                  // Pseudo-class cắm cờ (selector, tiền tố :)
      "opacity": "0.8"
    },
    
    "::after": {                 // Pseudo-element cắm cờ (virtual, tiền tố ::)
      "position": "absolute",
      "inset": "0"
    },
    
    "active": {                  // Khai báo tàng hình (tự động nội suy)
      "transform": "scale(0.95)"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &:hover { opacity: 0.8; }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  
  &:active { transform: scale(0.95); }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};