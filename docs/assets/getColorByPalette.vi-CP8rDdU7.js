import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/| functions/getColorByPalette - Màu từ bảng màu`}),`
`,(0,c.jsx)(t.h1,{id:`getcolorbypalette`,children:(0,c.jsx)(t.code,{children:`getColorByPalette`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm tìm kiếm một tên màu hoặc hậu tố cụ thể trong danh sách bảng màu thiết kế được chỉ định từ tệp `,(0,c.jsx)(t.code,{children:`variables.scss`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: String`}),` — giá trị màu hoặc chuỗi biến CSS cần tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`String | null`}),` — tên bảng màu hoặc null nếu không tìm thấy kết quả khớp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$name: styles.getColorByPalette('var(--primary)'); // 'primary'
$none: styles.getColorByPalette('#ff0000'); // null
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};