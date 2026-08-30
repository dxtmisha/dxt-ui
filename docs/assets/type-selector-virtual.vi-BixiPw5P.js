import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/properties/types/Pseudo-classes và pseudo-elements (selector, virtual)`}),`
`,(0,c.jsx)(t.h1,{id:`pseudo-classes-và-pseudo-elements-selector-virtual`,children:`Pseudo-classes và pseudo-elements (selector, virtual)`}),`
`,(0,c.jsxs)(t.p,{children:[`Loại cấu trúc `,(0,c.jsx)(t.code,{children:`selector`}),` và `,(0,c.jsx)(t.code,{children:`virtual`}),` được dọn đường để xử lý tạo kiểu cho các trạng thái chuẩn của trình duyệt (cụ thể là các pseudo-class như `,(0,c.jsx)(t.code,{children:`:hover`}),`, `,(0,c.jsx)(t.code,{children:`:focus`}),` rẽ nhánh kèm chuỗi pseudo-element giả như `,(0,c.jsx)(t.code,{children:`::before`}),`, `,(0,c.jsx)(t.code,{children:`::after`}),`). Bộ Compiler sẽ ngầm ghim dính bộ thuộc tính này ngược vào block cha với cú pháp SCSS siêu kinh điển (`,(0,c.jsx)(t.code,{children:`&:`}),` và `,(0,c.jsx)(t.code,{children:`&::`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lập trình viên có thể khai báo chúng qua shortcut cấp tốc `,(0,c.jsx)(t.code,{children:`:`}),` (dành cho selector) và `,(0,c.jsx)(t.code,{children:`::`}),` (dành cho virtual element). Hơn nữa, gần như toàn bộ kho từ khóa phổ thông của CSS (như `,(0,c.jsx)(t.code,{children:`hover`}),`, `,(0,c.jsx)(t.code,{children:`active`}),`, `,(0,c.jsx)(t.code,{children:`before`}),`) đều được trí tuệ nhân tạo của code bộ biên dịch nhận diện tự động mà không cần mồi sẵn một prefix nào cả.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Đối với pseudo-elements (`,(0,c.jsx)(t.code,{children:`virtual`}),`), compiler sẽ tự động chèn sẵn tham số gốc `,(0,c.jsx)(t.code,{children:`content: ""`}),` vào tệp CSS, lập trình viên không cần mất công khai báo thủ công.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &:hover { opacity: 0.8; }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  
  &:active { transform: scale(0.95); }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};