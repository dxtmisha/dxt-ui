import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Hoạt ảnh (animate)`}),`
`,(0,c.jsx)(n.h1,{id:`hoạt-ảnh-animate`,children:`Hoạt ảnh (animate)`}),`
`,(0,c.jsxs)(n.p,{children:[`Type cấu trúc `,(0,c.jsx)(n.code,{children:`animate`}),` được trưng dụng để tạo ra các quy tắc mã nguồn `,(0,c.jsx)(n.code,{children:`@keyframes`}),` thuần túy của CSS. Mỗi thuộc tính đối tượng lồng bên trong sẽ được Compiler diễn giải thành một khung hình riêng biệt (frame), với các khóa đại diện cho tỷ lệ phần trăm (`,(0,c.jsx)(n.code,{children:`0%`}),`, `,(0,c.jsx)(n.code,{children:`50%`}),`, `,(0,c.jsx)(n.code,{children:`100%`}),`) hoặc từ khóa điều hướng (`,(0,c.jsx)(n.code,{children:`from`}),`, `,(0,c.jsx)(n.code,{children:`to`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Định danh của hoạt ảnh được thiết lập tự động dựa trên cấp độ phân cấp (ghép nối cùng tiền tố của cha), đảm bảo tính duy nhất và cô lập của mã định danh bên trong hệ sinh thái `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@keyframes button-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.button {
  &--loading {
    animation-name: button-fade;
    animation-duration: 0.3s;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};