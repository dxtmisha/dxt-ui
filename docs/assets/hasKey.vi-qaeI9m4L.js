import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/hasKey - Kiểm tra khóa thuộc tính riêng của đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`haskey`,children:(0,c.jsx)(t.code,{children:`hasKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem thuộc tính được chỉ định có phải là thuộc tính riêng của đối tượng hoặc hàm hay không bằng cách gọi an toàn `,(0,c.jsx)(t.code,{children:`Object.prototype.hasOwnProperty.call`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm cung cấp khả năng bảo vệ mạnh mẽ chống lại `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` và loại bỏ các trường hợp nhận diện nhầm các thuộc tính kế thừa từ chuỗi prototype (chẳng hạn như `,(0,c.jsx)(t.code,{children:`toString`}),`, `,(0,c.jsx)(t.code,{children:`valueOf`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`hasOwnProperty`}),`). Hàm an toàn khi làm việc với `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`, các giá trị nguyên thủy và các đối tượng không có prototype (`,(0,c.jsx)(t.code,{children:`Object.create(null)`}),`). Trong TypeScript, hàm hoạt động như một type guard, tự động thu hẹp kiểu đối tượng để truy cập an toàn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`object: unknown`}),` — đối tượng, hàm hoặc giá trị bất kỳ cần kiểm tra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: K`}),` — khóa thuộc tính cần tìm (`,(0,c.jsx)(t.code,{children:`K extends PropertyKey`}),`: `,(0,c.jsx)(t.code,{children:`string | number | symbol`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` (`,(0,c.jsx)(t.code,{children:`object is T & Record<K, unknown>`}),`) — `,(0,c.jsx)(t.code,{children:`true`}),` nếu thuộc tính tồn tại và thuộc trực tiếp về đối tượng (thuộc tính riêng), ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { hasKey } from '@dxtmisha/functional-basic'

const user = { name: 'Alice', age: 30 }
console.log(hasKey(user, 'name')) // true
console.log(hasKey(user, 'email')) // false

// Bảo vệ chống prototype pollution:
console.log(hasKey({}, 'toString')) // false
console.log(hasKey({ toString: 'custom' }, 'toString')) // true

// An toàn với null, undefined và kiểu nguyên thủy:
console.log(hasKey(null, 'foo')) // false
console.log(hasKey(123, 'foo')) // false

// Đối tượng không có prototype (Object.create(null)):
const dict = Object.create(null)
dict.item = 'value'
console.log(hasKey(dict, 'item')) // true
console.log(hasKey(dict, 'toString')) // false

// Thu hẹp kiểu trong TypeScript (Type Guard):
const data: unknown = { id: 1, title: 'DXT' }
if (hasKey(data, 'title')) {
  console.log(data.title) // data được thu hẹp kiểu để truy cập an toàn thuộc tính title
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};