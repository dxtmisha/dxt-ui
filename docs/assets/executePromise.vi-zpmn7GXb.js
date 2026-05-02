import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/executePromise - Thực thi Promise hoặc hàm`}),`
`,(0,c.jsx)(n.h1,{id:`executepromise`,children:(0,c.jsx)(n.code,{children:`executePromise`})}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích mạnh mẽ để thực thi và chờ đợi kết quả từ các nguồn linh hoạt một cách an toàn. Nó xử lý các giá trị đồng bộ, Promise và các hàm (cả đồng bộ và bất đồng bộ) bằng cách đảm bảo kết quả cuối cùng luôn được giải quyết và trả về dưới dạng Promise.`}),`
`,(0,c.jsxs)(n.p,{children:[`Bên dưới, nó tận dụng `,(0,c.jsx)(n.code,{children:`executeFunction`}),` để thực thi các hàm và sau đó đảm bảo rằng nếu kết quả là một `,(0,c.jsx)(n.code,{children:`Promise`}),`, nó sẽ được chờ đợi (await) đúng cách.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T`}),` — Nguồn để thực thi hoặc giải quyết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...args: any[]`}),` (tùy chọn) — Các đối số được truyền vào hàm nếu `,(0,c.jsx)(n.code,{children:`callback`}),` có thể gọi được.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — Một promise giải quyết thành giá trị cuối cùng được tính toán hoặc được cung cấp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

// 1. Chờ đợi một hàm bất đồng bộ
const fetchData = async (id: number) => {
  return await fetch(\`/api/user/\${id}\`).then(res => res.json())
}
const user = await executePromise(fetchData, 123)

// 2. Xử lý một hàm đồng bộ
const getName = () => 'John Doe'
const name = await executePromise(getName) // trả về Promise giải quyết thành 'John Doe'

// 3. Giải quyết một giá trị tĩnh
const result = await executePromise('Dữ liệu tức thời')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};