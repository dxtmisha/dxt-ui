import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/forEach - Lặp qua đối tượng hoặc mảng"}),`
`,n.jsx(e.h1,{id:"foreach",children:n.jsx(e.code,{children:"forEach"})}),`
`,n.jsx(e.p,{children:"Hàm thực hiện chức năng được chỉ định một lần cho mỗi phần tử trong đối tượng. Và trả về một mảng với kết quả thực thi hàm."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: D"})," — đối tượng để lặp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback: (item: T, key: K, dataMain: typeof data) => R"})," — một hàm để thực thi cho mỗi phần tử trong mảng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"saveUndefined?: boolean"})," — nếu ",n.jsx(e.code,{children:"true"}),", hàm sẽ trả về một mảng bao gồm cả các giá trị ",n.jsx(e.code,{children:"undefined"})," (mặc định sẽ bị lọc bỏ)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"R[]"})," — một mảng với kết quả thực thi hàm."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Giá trị undefined bị lọc bỏ theo mặc định
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// Với saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function l(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{l as default};
