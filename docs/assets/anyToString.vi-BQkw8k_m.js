import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/anyToString - Chuyển đổi một giá trị thành chuỗi`}),`
`,(0,c.jsx)(n.h1,{id:`anytostring`,children:(0,c.jsx)(n.code,{children:`anyToString`})}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích chuyển đổi an toàn bất kỳ dữ liệu đầu vào nào thành kiểu chuỗi.`}),`
`,(0,c.jsx)(n.p,{children:`Điều này rất hữu ích khi xuất dữ liệu ra giao diện mà không biết trước kiểu của biến (đối tượng, mảng, boolean hoặc null).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: V`}),` — Giá trị cần chuyển đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArrayString: boolean`}),` (tùy chọn, mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`) — Nếu `,(0,c.jsx)(n.code,{children:`true`}),`, các mảng nguyên thủy sẽ được nối với nhau bằng dấu phẩy. Nếu `,(0,c.jsx)(n.code,{children:`false`}),`, chúng sẽ được chuyển đổi thành chuỗi JSON.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Biểu diễn chuỗi của giá trị.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { anyToString } from '@dxtmisha/functional-basic'

console.log(anyToString(' test ')) // 'test' (đã trimmed)
console.log(anyToString([1, 2, 3])) // '1,2,3' (isArrayString = true)
console.log(anyToString([1, 2, 3], false)) // '[1,2,3]' (isArrayString = false)

console.log(anyToString([[1], [2]])) // '[[1],[2]]' (các mảng lồng nhau sẽ được chuyển thành JSON)
console.log(anyToString([{ a: 1 }, 2])) // '[{"a":1},2]' (các mảng chứa đối tượng sẽ được chuyển thành JSON)

console.log(anyToString({ a: 1 })) // '{"a":1}'
console.log(anyToString(true)) // '1'
console.log(anyToString(false)) // '0'
console.log(anyToString(123)) // '123'
console.log(anyToString(null)) // ''
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};