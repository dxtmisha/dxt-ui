import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/executeFunction - Thực thi hàm hoặc trả về giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`executefunction`,children:(0,c.jsx)(n.code,{children:`executeFunction`})}),`
`,(0,c.jsx)(n.p,{children:`Tiện ích kiểm tra đối số được cung cấp. Nếu đối số đó là một hàm, nó sẽ thực thi hàm và trả về kết quả của hàm đó. Trong trường hợp ngược lại, nó đơn giản trả về đối số đầu vào (giữ nguyên).`}),`
`,(0,c.jsx)(n.p,{children:`Điều này rất hữu ích cho các tham số có thể linh hoạt chấp nhận một giá trị tĩnh hoặc một hàm tính toán giá trị đó theo yêu cầu (ví dụ như khởi tạo chậm/lazy evaluation hoặc giá trị mặc định động).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: T | FunctionArgs<any, T>`}),` — Giá trị của bất kỳ loại nào, hoặc một hàm trả về giá trị kiểu `,(0,c.jsx)(n.code,{children:`T`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Kết quả của việc thực thi hàm hoặc chính giá trị ban đầu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeFunction } from '@dxtmisha/functional-basic'

// Truyền một giá trị tĩnh
console.log(executeFunction('Xin chào')) // 'Xin chào'

// Truyền một hàm
const lazyValue = () => {
  return 'Được tải lazy'
}
console.log(executeFunction(lazyValue)) // 'Được tải lazy'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};