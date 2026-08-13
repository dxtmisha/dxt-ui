import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/# UI/properties/flags/Thay thế (replace)`}),`
`,(0,c.jsx)(t.h1,{id:`thay-thế-replace`,children:`Thay thế (replace)`}),`
`,(0,c.jsxs)(t.p,{children:[`Cờ `,(0,c.jsx)(t.code,{children:`_replace`}),` cho phép sửa đổi giá trị hoặc tên cuối cùng bằng biểu thức chính quy. Nó yêu cầu một đối tượng với các trường `,(0,c.jsx)(t.code,{children:`pattern`}),`, `,(0,c.jsx)(t.code,{children:`flags`}),` và `,(0,c.jsx)(t.code,{children:`replace`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Cấu hình đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "padding": {
      "value": "12px",
      "_replace": {
        "pattern": "px",
        "replace": "rem",
        "flags": "g"
      }
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12rem;
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};