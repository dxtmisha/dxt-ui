import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/| functions/isPalette - Xác thực bảng màu`}),`
`,(0,c.jsx)(n.h1,{id:`ispalette`,children:(0,c.jsx)(n.code,{children:`isPalette`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem một chuỗi có đại diện cho một biến CSS liên quan đến bảng màu hay không bằng cách tìm tiền tố `,(0,c.jsx)(n.code,{children:`--`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: String`}),` — tên biến màu hoặc chuỗi cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu chuỗi chứa tiền tố gạch nối kép (`,(0,c.jsx)(n.code,{children:`--`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$is-palette: styles.isPalette('--sys-color'); // true
$is-not-palette: styles.isPalette('#ff0000'); // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};