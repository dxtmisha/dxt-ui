import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/properties/flags/Lớp con (subclass)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-con-subclass`,children:`Lớp con (subclass)`}),`
`,(0,c.jsxs)(t.p,{children:[`Cờ `,(0,c.jsx)(t.code,{children:`_subclass: true`}),` cho phép gắn nhãn rõ ràng một nút là một lớp con (BEM-element). Điều này là cần thiết nếu tên nút không được trình phân tích cú pháp tự động nhận dạng. Các thuộc tính sẽ được tự động bọc trong một bộ chọn lớp con (`,(0,c.jsx)(t.code,{children:`&__name { ... }`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Cấu hình đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "my-custom-element": {
      "_subclass": true,
      "display": "block"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  &__my-custom-element {
    display: block;
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};