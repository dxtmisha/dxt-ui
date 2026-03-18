import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/executeFunction - Thực thi hàm hoặc trả về giá trị"}),`
`,n.jsx(t.h1,{id:"executefunction",children:n.jsx(t.code,{children:"executeFunction"})}),`
`,n.jsx(t.p,{children:"Tiện ích kiểm tra đối số được cung cấp. Nếu đối số đó là một hàm, nó sẽ thực thi hàm và trả về kết quả của hàm đó. Trong trường hợp ngược lại, nó đơn giản trả về đối số đầu vào (giữ nguyên)."}),`
`,n.jsx(t.p,{children:"Điều này rất hữu ích cho các tham số có thể linh hoạt chấp nhận một giá trị tĩnh hoặc một hàm tính toán giá trị đó theo yêu cầu (ví dụ như khởi tạo chậm/lazy evaluation hoặc giá trị mặc định động)."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"callback: T | FunctionArgs<any, T>"})," — Giá trị của bất kỳ loại nào, hoặc một hàm trả về giá trị kiểu ",n.jsx(t.code,{children:"T"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"T"})," — Kết quả của việc thực thi hàm hoặc chính giá trị ban đầu."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { executeFunction } from '@dxtmisha/functional-basic'

// Truyền một giá trị tĩnh
console.log(executeFunction('Xin chào')) // 'Xin chào'

// Truyền một hàm
const lazyValue = () => {
  return 'Được tải lazy'
}
console.log(executeFunction(lazyValue)) // 'Được tải lazy'
`})})]})}function a(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{a as default};
