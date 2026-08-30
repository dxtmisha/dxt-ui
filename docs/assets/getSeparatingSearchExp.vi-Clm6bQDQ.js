import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getSeparatingSearchExp - Tạo RegExp tìm kiếm theo từ tách biệt`}),`
`,(0,c.jsx)(t.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(t.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(t.code,{children:`RegExp`}),` toàn cục, không phân biệt chữ hoa/thường để tìm kiếm các chuỗi chứa `,(0,c.jsx)(t.strong,{children:`bất kỳ`}),` từ nào từ chuỗi tìm kiếm (phân tách bằng dấu cách).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Mỗi từ được tách bởi dấu cách, escape và nối với nhau bằng toán tử OR `,(0,c.jsx)(t.code,{children:`|`}),`. Điều này hữu ích khi bạn muốn tìm kết quả khớp với ít nhất một trong các từ đã nhập.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string | RegExp`}),` — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi dấu cách, hoặc đối tượng `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number = 128`}),` — Độ dài tối đa cho phép của chuỗi tìm kiếm (bị bỏ qua nếu một `,(0,c.jsx)(t.code,{children:`RegExp`}),` được truyền vào).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Biễu thức chính quy với cờ `,(0,c.jsx)(t.code,{children:`ig`}),` (toàn cục, không phân biệt chữ hoa/thường). Nếu chuỗi tìm kiếm trống hoặc vượt quá giới hạn, một regex không khớp với bất kỳ thứ gì sẽ được trả về.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Các ký tự đặc biệt được escape tự động
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};