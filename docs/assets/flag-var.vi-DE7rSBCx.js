import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/flags/Biến (var)`}),`
`,(0,c.jsx)(n.h1,{id:`biến-var`,children:`Biến (var)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cờ `,(0,c.jsx)(n.code,{children:`_var: true`}),` buộc trình biên dịch tạo một biến CSS riêng cho nút đó, ngay cả khi nó đã là một thuộc tính tiêu chuẩn. Điều này hữu ích cho việc ghi đè động qua JS hoặc hỗ trợ kề thừa.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Cấu hình đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": {
      "value": "16px",
      "_var": true
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  --button-padding: 16px;
  padding: var(--button-padding);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};