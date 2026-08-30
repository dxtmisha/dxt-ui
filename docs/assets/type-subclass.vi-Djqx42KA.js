import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/constructor/properties/types/Lớp con (subclass)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-con-subclass`,children:`Lớp con (subclass)`}),`
`,(0,c.jsxs)(t.p,{children:[`Type cấu trúc `,(0,c.jsx)(t.code,{children:`subclass`}),` được sinh ra chuyên dụng để khởi tạo các thực thể mảng lồng nhau (nested element) tuân thủ quy chuẩn hình thái BEM (Block-Element-Modifier). Phân bổ Type này sẽ cưỡng chế bộ máy Compiler xuất bản dòng mã chuỗi class CSS con trực tiếp được gắn kèm đằng sau tên định danh cha gốc (Ví dụ: biên dịch vòng lặp qua cấu trúc `,(0,c.jsx)(t.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Giải pháp tối ưu và lả lướt nhất để sản sinh một class lồng con vĩnh viễn là sử dụng mã ký hiệu `,(0,c.jsx)(t.code,{children:`#`}),` ở tiền tố. Tuỳ nhiên đối với những cấu trúc rập khuôn cứng nhắc, thao tác cấu hình bung rộng tham số type explicit `,(0,c.jsx)(t.code,{children:`_type: "subclass"`}),` vẫn được trưng dụng đồng tâm hiệp lực. Cả hai giải pháp gen cùng một kết quả biên dịch hệ thống.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "card": {
    "padding": "16px",
    
    "#icon": {                   // Áp dụng định danh lối tắt #
      "width": "24px"
    },
    
    "content": {                 // Phân rã cấu trúc type explicit
      "_type": "subclass",
      "display": "flex"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
  padding: 16px;

  &__icon {
    width: 24px;
  }

  &__content {
    display: flex;
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sức mạnh trọng tâm của dạng thức `,(0,c.jsx)(t.code,{children:`subclass`}),` đảm nhận nhiệm vụ cô lập tầm vực scope CSS. Toàn bộ code gắn Subclass đóng chốt hiện tượng tranh chấp lớp class CSS trên toàn cục, ráp chặt mối nối UI phụ tùng vào thẳng lõi gốc cha.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};