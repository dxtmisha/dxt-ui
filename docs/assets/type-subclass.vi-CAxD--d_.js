import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Lớp con (subclass)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-con-subclass`,children:`Lớp con (subclass)`}),`
`,(0,c.jsxs)(n.p,{children:[`Type cấu trúc `,(0,c.jsx)(n.code,{children:`subclass`}),` được sinh ra chuyên dụng để khởi tạo các thực thể mảng lồng nhau (nested element) tuân thủ quy chuẩn hình thái BEM (Block-Element-Modifier). Phân bổ Type này sẽ cưỡng chế bộ máy Compiler xuất bản dòng mã chuỗi class CSS con trực tiếp được gắn kèm đằng sau tên định danh cha gốc (Ví dụ: biên dịch vòng lặp qua cấu trúc `,(0,c.jsx)(n.code,{children:`&__element`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Giải pháp tối ưu và lả lướt nhất để sản sinh một class lồng con vĩnh viễn là sử dụng mã ký hiệu `,(0,c.jsx)(n.code,{children:`#`}),` ở tiền tố. Tuỳ nhiên đối với những cấu trúc rập khuôn cứng nhắc, thao tác cấu hình bung rộng tham số type explicit `,(0,c.jsx)(n.code,{children:`_type: "subclass"`}),` vẫn được trưng dụng đồng tâm hiệp lực. Cả hai giải pháp gen cùng một kết quả biên dịch hệ thống.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  padding: 16px;

  &__icon {
    width: 24px;
  }

  &__content {
    display: flex;
  }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sức mạnh trọng tâm của dạng thức `,(0,c.jsx)(n.code,{children:`subclass`}),` đảm nhận nhiệm vụ cô lập tầm vực scope CSS. Toàn bộ code gắn Subclass đóng chốt hiện tượng tranh chấp lớp class CSS trên toàn cục, ráp chặt mối nối UI phụ tùng vào thẳng lõi gốc cha.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};