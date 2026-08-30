import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/anyToString - Chuyển đổi một giá trị thành chuỗi`}),`
`,(0,l.jsx)(t.h1,{id:`anytostring`,children:(0,l.jsx)(t.code,{children:`anyToString`})}),`
`,(0,l.jsx)(t.p,{children:`Tiện ích để chuyển đổi an toàn bất kỳ dữ liệu đầu vào nào thành kiểu chuỗi.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: V`}),` — Giá trị cần chuyển đổi.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isArrayString: boolean = true`}),` — Nếu `,(0,l.jsx)(t.code,{children:`true`}),`, các mảng nguyên thủy sẽ được nối với nhau bằng dấu phẩy.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`trim: boolean = true`}),` — Nếu `,(0,l.jsx)(t.code,{children:`true`}),`, loại bỏ khoảng trắng dư thừa (chỉ dành cho chuỗi).`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Quy tắc chuyển đổi:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Chuỗi`}),`: Trả về nguyên bản (có `,(0,l.jsx)(t.code,{children:`trim`}),` nếu được bật).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Mảng`}),`: Nếu `,(0,l.jsx)(t.code,{children:`isArrayString: true`}),` và không có đối tượng trong mảng, các phần tử sẽ được nối bằng dấu phẩy. Ngược lại — chuyển thành chuỗi JSON.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Đối tượng`}),`: Chuyển đổi thành JSON. Trong trường hợp lỗi (ví dụ: tham chiếu vòng), trả về `,(0,l.jsx)(t.code,{children:`toString()`}),` tiêu chuẩn.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Boolean`}),`: `,(0,l.jsx)(t.code,{children:`true`}),` chuyển thành `,(0,l.jsx)(t.code,{children:`'1'`}),`, `,(0,l.jsx)(t.code,{children:`false`}),` thành `,(0,l.jsx)(t.code,{children:`'0'`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Các kiểu khác`}),`: `,(0,l.jsx)(t.code,{children:`null`}),` và `,(0,l.jsx)(t.code,{children:`undefined`}),` trả về chuỗi rỗng. Các kiểu khác gọi `,(0,l.jsx)(t.code,{children:`toString()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Biểu diễn chuỗi của giá trị.`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { anyToString } from '@dxtmisha/functional-basic'

// 1. Chuỗi (Strings)
anyToString('  Hello  ')               // 'Hello'
anyToString('  Hello  ', true, false)  // '  Hello  '

// 2. Mảng (Arrays)
anyToString([1, 2, 3])                 // '1,2,3'
anyToString([1, 2, 3], false)          // '[1,2,3]'

// 3. Đối tượng (Objects)
anyToString({ a: 1 })                  // '{"a":1}'

// 4. Giá trị Boolean (chuyển đổi thành 1/0)
anyToString(true)                      // '1'
anyToString(false)                     // '0'

// 5. Giá trị rỗng và các kiểu khác
anyToString(null)                      // ''
anyToString(123)                       // '123'
anyToString(Symbol('test'))            // 'Symbol(test)'
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};