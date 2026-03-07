import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/encodeAttribute - Mã hóa ký tự cho thuộc tính"}),`
`,n.jsx(t.h1,{id:"encodeattribute",children:n.jsx(t.code,{children:"encodeAttribute"})}),`
`,n.jsxs(t.p,{children:["Mã hóa các ký tự đặc biệt trong chuỗi (",n.jsx(t.code,{children:"&"}),", ",n.jsx(t.code,{children:"<"}),", ",n.jsx(t.code,{children:">"}),", ",n.jsx(t.code,{children:'"'}),", ",n.jsx(t.code,{children:"'"}),") thành các thực thể HTML tương ứng (",n.jsx(t.code,{children:"&amp;"}),", ",n.jsx(t.code,{children:"&lt;"}),", ",n.jsx(t.code,{children:"&gt;"}),", ",n.jsx(t.code,{children:"&quot;"}),", ",n.jsx(t.code,{children:"&#39;"}),"). Điều này là cần thiết để chèn văn bản người dùng hoặc văn bản động vào thuộc tính HTML một cách an toàn nhằm phòng chống tấn công XSS."]}),`
`,n.jsxs(t.p,{children:["Hơn nữa, hàm cũng loại bỏ các khoảng trắng ở hai đầu chuỗi bằng phương thức ",n.jsx(t.code,{children:".trim()"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"text: string"})," — Chuỗi cần được mã hóa."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — Chuỗi đã được mã hóa và xóa khoảng trắng dư thừa ở hai đầu."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function x(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{x as default};
