import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/flags/Thuộc tính thành phần (prop)`}),`
`,(0,c.jsx)(n.h1,{id:`thuộc-tính-thành-phần-prop`,children:`Thuộc tính thành phần (prop)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cờ `,(0,c.jsx)(n.code,{children:`_prop`}),` hướng dẫn trình tạo rằng thuộc tính đã cho sẽ trở thành một phần của giao diện công khai của thành phần (Props) và có sẵn trong TypeScript. Điều này cho phép điều khiển các kiểu thành phần thông qua các tham số bên ngoài.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Cấu hình đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "~size": {
      "sm": { "height": "32px" },
      "md": { "height": "40px" },
      "_prop": true,
      "_default": "md"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (TypeScript):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  size?: 'sm' | 'md'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};