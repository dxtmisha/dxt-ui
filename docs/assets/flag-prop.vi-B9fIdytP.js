import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/properties/flags/Thuộc tính thành phần (prop)`}),`
`,(0,c.jsx)(t.h1,{id:`thuộc-tính-thành-phần-prop`,children:`Thuộc tính thành phần (prop)`}),`
`,(0,c.jsxs)(t.p,{children:[`Cờ `,(0,c.jsx)(t.code,{children:`_prop`}),` hướng dẫn trình tạo rằng thuộc tính đã cho sẽ trở thành một phần của giao diện công khai của thành phần (Props) và có sẵn trong TypeScript. Điều này cho phép điều khiển các kiểu thành phần thông qua các tham số bên ngoài.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Cấu hình đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả (TypeScript):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type PropsToken = {
  size?: 'sm' | 'md'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};