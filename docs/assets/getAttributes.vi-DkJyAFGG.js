import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getAttributes - Lấy thuộc tính phần tử`}),`
`,(0,c.jsx)(t.h1,{id:`getattributes`,children:(0,c.jsx)(t.code,{children:`getAttributes`})}),`
`,(0,c.jsx)(t.p,{children:`Trích xuất tất cả các thuộc tính HTML của một phần tử DOM được chỉ định (hoặc phần tử được tìm thấy bằng bộ chọn CSS) và trả về chúng dưới dạng một đối tượng khóa-giá trị (key-value) đơn giản.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm sử dụng `,(0,c.jsx)(t.code,{children:`getElement`}),` để tìm nút đích. Nếu phần tử không được tìm thấy hoặc đối số trống được truyền vào, nó sẽ trả về một đối tượng rỗng `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element?: ElementOrString<E>`}),` — Một phần tử DOM, đối tượng Window, hoặc một chuỗi CSS selector để tìm kiếm phần tử đó.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Record<string, string | undefined>`}),` — Một đối tượng trong đó khóa là tên thuộc tính (ví dụ: `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`class`}),`, `,(0,c.jsx)(t.code,{children:`data-value`}),`), và giá trị là nội dung của chúng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getAttributes } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};