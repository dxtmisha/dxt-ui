import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(h){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/addTagHighlightMatch - Làm nổi bật các kết quả khớp trong chuỗi"}),`
`,n.jsx(t.h1,{id:"addtaghighlightmatch",children:n.jsx(t.code,{children:"addTagHighlightMatch"})}),`
`,n.jsxs(t.p,{children:["Tiện ích để làm nổi bật các kết quả khớp trong một chuỗi bằng cách bọc chúng trong thẻ HTML ",n.jsx(t.code,{children:"<span>"})," với một class được chỉ định. Nó sử dụng ",n.jsx(t.code,{children:"getSeparatingSearchExp"})," để hỗ trợ tìm kiếm nhiều từ (phân tách bằng dấu cách)."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: string"})," — Chuỗi ban đầu để xử lý."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"search?: string"})," — Chuỗi tìm kiếm (một hoặc nhiều từ phân tách bằng dấu cách)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"className: string = 'sys-highlight-match'"})," — Class CSS sẽ được thêm vào thẻ ",n.jsx(t.code,{children:"<span>"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — Chuỗi với các thẻ HTML được thêm vào để làm nổi bật."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Làm nổi bật một từ đơn
addTagHighlightMatch('Hello world', 'hello') 
// '<span class="sys-highlight-match">Hello</span> world'

// Làm nổi bật nhiều từ (logic OR)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Class tùy chỉnh
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'
`})})]})}function g(h={}){const{wrapper:t}={...i(),...h.components};return t?n.jsx(t,{...h,children:n.jsx(s,{...h})}):s(h)}export{g as default};
