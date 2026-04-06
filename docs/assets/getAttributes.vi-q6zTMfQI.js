import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getAttributes - Lấy thuộc tính phần tử`}),`
`,(0,c.jsx)(n.h1,{id:`getattributes`,children:(0,c.jsx)(n.code,{children:`getAttributes`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất tất cả các thuộc tính HTML của một phần tử DOM được chỉ định (hoặc phần tử được tìm thấy bằng bộ chọn CSS) và trả về chúng dưới dạng một đối tượng khóa-giá trị (key-value) đơn giản.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm sử dụng `,(0,c.jsx)(n.code,{children:`getElement`}),` để tìm nút đích. Nếu phần tử không được tìm thấy hoặc đối số trống được truyền vào, nó sẽ trả về một đối tượng rỗng `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — Một phần tử DOM, đối tượng Window, hoặc một chuỗi CSS selector để tìm kiếm phần tử đó.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Record<string, string | undefined>`}),` — Một đối tượng trong đó khóa là tên thuộc tính (ví dụ: `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`class`}),`, `,(0,c.jsx)(n.code,{children:`data-value`}),`), và giá trị là nội dung của chúng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getAttributes } from '@dxtmisha/functional-basic'

// Giả sử có phần tử: <div id="app" class="container" data-theme="dark"></div>

const attrs = getAttributes('#app')
console.log(attrs)
/*
{
  id: 'app',
  class: 'container',
  'data-theme': 'dark'
}
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};