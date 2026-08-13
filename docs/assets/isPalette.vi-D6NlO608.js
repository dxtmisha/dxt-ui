import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/styles/color/| functions/isPalette - Xác thực bảng màu`}),`
`,(0,c.jsx)(t.h1,{id:`ispalette`,children:(0,c.jsx)(t.code,{children:`isPalette`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra xem một chuỗi có đại diện cho một biến CSS liên quan đến bảng màu hay không bằng cách tìm tiền tố `,(0,c.jsx)(t.code,{children:`--`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$color: String`}),` — tên biến màu hoặc chuỗi cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu chuỗi chứa tiền tố gạch nối kép (`,(0,c.jsx)(t.code,{children:`--`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$is-palette: styles.isPalette('--sys-color'); // true
$is-not-palette: styles.isPalette('#ff0000'); // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};