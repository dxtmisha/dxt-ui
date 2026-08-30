import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/getClassName - Lấy tên Class từ Props`}),`
`,(0,c.jsx)(t.h1,{id:`getclassname`,children:(0,c.jsx)(t.code,{children:`getClassName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm tiện ích trích xuất thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),` từ một đối tượng thuộc tính cho trước. Nó đảm bảo giá trị trả về là một chuỗi, điều này hữu ích để thu được tên lớp một cách nhất quán khi render các thành phần hoặc phần tử.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Đối tượng thuộc tính của thành phần, có thể chứa thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Tên lớp dưới dạng chuỗi nếu nó tồn tại và là một chuỗi, nếu không thì trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getClassName } from '@dxtmisha/functional'

// Trả về 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Trả về undefined vì 'class' bị thiếu
const className2 = getClassName({ otherProp: 1 })

// Trả về undefined vì 'class' không phải là một chuỗi
const className3 = getClassName({ class: 123 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};