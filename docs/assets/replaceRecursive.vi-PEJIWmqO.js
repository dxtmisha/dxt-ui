import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/replaceRecursive - Hợp nhất đệ quy các đối tượng hoặc mảng"}),`
`,n.jsx(e.h1,{id:"replacerecursive",children:n.jsx(e.code,{children:"replaceRecursive"})}),`
`,n.jsxs(e.p,{children:["Thực hiện hợp nhất sâu (đệ quy) một đối tượng hoặc mảng đích với dữ liệu từ một đối tượng/mảng thay thế. Nếu tham số ",n.jsx(e.code,{children:"isMerge"})," được bật, các mảng sẽ được nối lại với nhau và loại bỏ các phần tử trùng lặp; nếu không, các mảng từ đối tượng thay thế sẽ ghi đè lên các mảng ban đầu."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: ObjectItem<I>"})," — Mảng hoặc đối tượng ban đầu mà các phần tử sẽ được thay thế/hợp nhất."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"replacement?: ObjectOrArray<I>"})," — Mảng hoặc đối tượng chứa các phần tử được sử dụng để thay thế."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isMerge: boolean"})," — Cờ để hợp nhất các mảng cùng tên (mặc định là ",n.jsx(e.code,{children:"true"}),"). Nếu là ",n.jsx(e.code,{children:"false"}),", các phần tử đơn giản sẽ bị ghi đè."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"ObjectItem<I>"})," — Một đối tượng hoặc mảng mới là kết quả của việc hợp nhất. Đối tượng ban đầu không bị biến đổi (mutate)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function g(c={}){const{wrapper:e}={...i(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{g as default};
