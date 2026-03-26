import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/getClassName - Lấy tên Class từ Props`}),`
`,(0,c.jsx)(n.h1,{id:`getclassname`,children:(0,c.jsx)(n.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích trích xuất thuộc tính `,(0,c.jsx)(n.code,{children:`class`}),` từ một đối tượng thuộc tính cho trước. Nó đảm bảo giá trị trả về là một chuỗi, điều này hữu ích để thu được tên lớp một cách nhất quán khi render các thành phần hoặc phần tử.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props?: T`}),` — Đối tượng thuộc tính của thành phần, có thể chứa thuộc tính `,(0,c.jsx)(n.code,{children:`class`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Tên lớp dưới dạng chuỗi nếu nó tồn tại và là một chuỗi, nếu không thì trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getClassName } from '@dxtmisha/functional'

// Trả về 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Trả về undefined vì 'class' bị thiếu
const className2 = getClassName({ otherProp: 1 })

// Trả về undefined vì 'class' không phải là một chuỗi
const className3 = getClassName({ class: 123 })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};