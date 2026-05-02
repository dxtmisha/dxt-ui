import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/flags/Trạng thái (state)`}),`
`,(0,c.jsx)(n.h1,{id:`trạng-thái-state`,children:`Trạng thái (state)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cờ `,(0,c.jsx)(n.code,{children:`_state: true`}),` cho phép gắn nhãn rõ ràng một nút là một trạng thái (pseudo-class). Điều này là cần thiết nếu tên nút không được trình phân tích cú pháp tự động nhận dạng. Các thuộc tính sẽ được tự động bọc trong một bộ chọn trạng thái (`,(0,c.jsx)(n.code,{children:`&:name { ... }`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Cấu hình đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "my-custom-state": {
      "_state": true,
      "opacity": "0.5"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  &:my-custom-state {
    opacity: 0.5;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};