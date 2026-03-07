import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/getRandomText - Tạo văn bản ngẫu nhiên"}),`
`,n.jsx(t.h1,{id:"getrandomtext",children:n.jsx(t.code,{children:"getRandomText"})}),`
`,n.jsx(t.p,{children:'Tạo một chuỗi bao gồm số lượng ngẫu nhiên các "từ". Từ ở đây là một chuỗi liên tiếp các ký tự giống nhau với độ dài cụ thể. Hàm này hữu ích trong việc làm dữ liệu giả (placeholder) cho giao diện, nó mô phỏng cách dàn trang chữ thật mà không bị ảnh hưởng bởi ngữ nghĩa hoặc rào cản ngôn ngữ.'}),`
`,n.jsxs(t.p,{children:["Hàm này được xây dựng dựa trên các tiện ích ",n.jsx(t.code,{children:"random"})," (để lấy ngẫu nhiên các giá trị số) và ",n.jsx(t.code,{children:"strFill"})," (để lặp ký tự theo độ dài thành một từ)."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"min: number"})," — Số lượng từ tối thiểu của chuỗi trả về."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"max: number"})," — Số lượng từ tối đa của chuỗi trả về."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"symbol: string"})," — (Tùy chọn) Ký tự sẽ được dùng để tạo thành chữ. Mặc định là ",n.jsx(t.code,{children:"#"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"lengthMin: number"})," — (Tùy chọn) Chiều dài tối thiểu một từ. Mặc định là ",n.jsx(t.code,{children:"2"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"lengthMax: number"})," — (Tùy chọn) Chiều dài tối đa của một từ. Mặc định là ",n.jsx(t.code,{children:"12"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — Một chuỗi được tạo bằng các từ cách nhau bởi khoảng trắng."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Tạo ra từ 2 tới 5 từ bằng ký tự '#'
// Độ dài mỗi từ trong khoảng 2 tới 12 ký tự
console.log(getRandomText(2, 5)) // '#### ## #######'

// Số lượng từ cố định (3) với một ký tự cụ thể ('*')
// Độ dài từ khóa cứng là 5 ký tự
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function m(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{m as default};
