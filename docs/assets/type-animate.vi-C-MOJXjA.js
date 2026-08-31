import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/properties/types/Hoạt ảnh (animate)`}),`
`,(0,c.jsx)(t.h1,{id:`hoạt-ảnh-animate`,children:`Hoạt ảnh (animate)`}),`
`,(0,c.jsxs)(t.p,{children:[`Type cấu trúc `,(0,c.jsx)(t.code,{children:`animate`}),` được trưng dụng để tạo ra các quy tắc mã nguồn `,(0,c.jsx)(t.code,{children:`@keyframes`}),` thuần túy của CSS. Mỗi thuộc tính đối tượng lồng bên trong sẽ được Compiler diễn giải thành một khung hình riêng biệt (frame), với các khóa đại diện cho tỷ lệ phần trăm (`,(0,c.jsx)(t.code,{children:`0%`}),`, `,(0,c.jsx)(t.code,{children:`50%`}),`, `,(0,c.jsx)(t.code,{children:`100%`}),`) hoặc từ khóa điều hướng (`,(0,c.jsx)(t.code,{children:`from`}),`, `,(0,c.jsx)(t.code,{children:`to`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Định danh của hoạt ảnh được thiết lập tự động dựa trên cấp độ phân cấp (ghép nối cùng tiền tố của cha), đảm bảo tính duy nhất và cô lập của mã định danh bên trong hệ sinh thái `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "fade": {
      "_type": "animate",
      "from": { "opacity": "0" },
      "to": { "opacity": "1" }
    },
    
    "~loading": {
      "animation-name": "button-fade",
      "animation-duration": "0.3s"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@keyframes button-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.button {
  &--loading {
    animation-name: button-fade;
    animation-duration: 0.3s;
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};