import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/executePromise - Thực thi Promise hoặc hàm`}),`
`,(0,c.jsx)(n.h1,{id:`executepromise`,children:(0,c.jsx)(n.code,{children:`executePromise`})}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích thực thi an toàn một hàm và/hoặc chờ đợi kết quả bất đồng bộ (Promise) được hoàn thành.`}),`
`,(0,c.jsxs)(n.p,{children:[`Bản chất bên trong, nó sử dụng tiện ích `,(0,c.jsx)(n.code,{children:`executeFunction`}),`. Nếu truyền vào một hàm trả về một Promise, `,(0,c.jsx)(n.code,{children:`executePromise`}),` sẽ thực thi hàm đó và đợi `,(0,c.jsx)(n.code,{children:`Promise`}),` hoàn thành. Nếu truyền vào một giá trị đồng bộ hoặc một hàm thông thường trả về giá trị đồng bộ, tiện ích sẽ trả về ngay kết quả đó.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (() => Promise<T>) | (() => T) | T`}),` — Một giá trị, một `,(0,c.jsx)(n.code,{children:`Promise`}),`, hoặc một hàm có thể trả về một `,(0,c.jsx)(n.code,{children:`Promise`}),` hoặc một giá trị thông thường.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — Một promise sẽ được hoàn thành với giá trị được cung cấp hoặc được tính toán.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

// Với hàm async
const fetchData = async () => {
  return await fetch('/api/data').then(res => res.json())
}
const result1 = await executePromise(fetchData)

// Với hàm đồng bộ
const staticData = () => 'Dữ liệu đồng bộ'
const result2 = await executePromise(staticData)

// Với giá trị tĩnh
const result3 = await executePromise('Dữ liệu')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};