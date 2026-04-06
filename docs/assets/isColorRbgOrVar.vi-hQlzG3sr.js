import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/| functions/isColorRbgOrVar - Xác thực màu`}),`
`,(0,c.jsx)(n.h1,{id:`iscolorrbgorvar`,children:(0,c.jsx)(n.code,{children:`isColorRbgOrVar`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem một giá trị có phải là một màu hợp lệ hoặc một từ khóa CSS đặc biệt hay không (như `,(0,c.jsx)(n.code,{children:`transparent`}),`, `,(0,c.jsx)(n.code,{children:`initial`}),`, `,(0,c.jsx)(n.code,{children:`inherit`}),`, v.v.).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$color: Color | String`}),` — giá trị màu hoặc từ khóa CSS để kiểm tra.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu giá trị là một màu hoặc từ khóa hợp lệ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

$is-color: styles.isColorRbgOrVar(#ff0000); // true
$is-keyword: styles.isColorRbgOrVar('transparent'); // true
$is-invalid: styles.isColorRbgOrVar('none'); // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};