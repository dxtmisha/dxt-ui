import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/getObjectOrNone - Đảm bảo trả về một đối tượng"}),`
`,n.jsx(t.h1,{id:"getobjectornone",children:n.jsx(t.code,{children:"getObjectOrNone"})}),`
`,n.jsxs(t.p,{children:["Một tiện ích đơn giản kiểm tra xem giá trị được cung cấp có phải là một đối tượng thực tế (không phải ",n.jsx(t.code,{children:"null"}),", không phải mảng, không phải kiểu nguyên thủy) hay không và trả về chính nó. Nếu đối số không phải là một đối tượng, hàm sẽ trả về một đối tượng rỗng ",n.jsx(t.code,{children:"{}"}),". Việc này rất hữu ích trong việc đảm bảo an toàn khi khởi tạo hoặc truyền tham số."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: T"})," — Bất kỳ giá trị nào, thường mong đợi đây là một đối tượng."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"T & Record<string, any>"})," — Chính đối tượng ban đầu nếu kiểu dữ liệu đúng; ngược lại, trả về đối tượng rỗng ",n.jsx(t.code,{children:"{}"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getObjectOrNone } from '@dxtmisha/functional-basic'

// Trả về đối tượng thành công
console.log(getObjectOrNone({ name: 'Admin' })) // { name: 'Admin' }

// Mảng không được coi là plain object, trả về {}
console.log(getObjectOrNone([1, 2, 3])) // {}

// Các kiểu thông thường và null sẽ trả về {}
console.log(getObjectOrNone(null)) // {}
console.log(getObjectOrNone('a string')) // {}
`})})]})}function d(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{d as default};
