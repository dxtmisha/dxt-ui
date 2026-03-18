import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/getAttributes - Lấy thuộc tính phần tử"}),`
`,n.jsx(t.h1,{id:"getattributes",children:n.jsx(t.code,{children:"getAttributes"})}),`
`,n.jsx(t.p,{children:"Trích xuất tất cả các thuộc tính HTML của một phần tử DOM được chỉ định (hoặc phần tử được tìm thấy bằng bộ chọn CSS) và trả về chúng dưới dạng một đối tượng khóa-giá trị (key-value) đơn giản."}),`
`,n.jsxs(t.p,{children:["Hàm sử dụng ",n.jsx(t.code,{children:"getElement"})," để tìm nút đích. Nếu phần tử không được tìm thấy hoặc đối số trống được truyền vào, nó sẽ trả về một đối tượng rỗng ",n.jsx(t.code,{children:"{}"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"element?: ElementOrString<E>"})," — Một phần tử DOM, đối tượng Window, hoặc một chuỗi CSS selector để tìm kiếm phần tử đó."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"Record<string, string | undefined>"})," — Một đối tượng trong đó khóa là tên thuộc tính (ví dụ: ",n.jsx(t.code,{children:"id"}),", ",n.jsx(t.code,{children:"class"}),", ",n.jsx(t.code,{children:"data-value"}),"), và giá trị là nội dung của chúng."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getAttributes } from '@dxtmisha/functional-basic'

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
`})})]})}function m(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{m as default};
