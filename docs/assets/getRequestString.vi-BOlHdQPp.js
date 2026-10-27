import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getRequestString - Tạo chuỗi truy vấn`}),`
`,(0,c.jsx)(t.h1,{id:`getrequeststring`,children:(0,c.jsx)(t.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi một đối tượng hoặc mảng thành một chuỗi định dạng kiểu URL (mặc định là chuỗi truy vấn cho tham số GET), trong đó các khóa và giá trị được nối với nhau bằng các dấu phân cách quy định. Các khóa được cắt khoảng trắng ở hai đầu và mã hóa qua `,(0,c.jsx)(t.code,{children:`encodeURIComponent`}),`, các giá trị được chuyển thành chuỗi và mã hóa qua `,(0,c.jsx)(t.code,{children:`encodeURIComponent`}),`, các đối tượng và mảng lồng nhau được tuần tự hóa đệ quy bằng ký pháp ngoặc vuông (`,(0,c.jsx)(t.code,{children:`key[subKey]`}),` hoặc `,(0,c.jsx)(t.code,{children:`key[]`}),`), và các cặp kết quả được sắp xếp theo thứ tự bảng chữ cái.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Record<string, unknown> | readonly unknown[]`}),` — Đối tượng hoặc mảng dữ liệu cần chuyển đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sign?: string`}),` — (Tùy chọn) Ký tự kết nối giữa khóa và giá trị. Mặc định là `,(0,c.jsx)(t.code,{children:`'='`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator?: string`}),` — (Tùy chọn) Ký tự phân tách các cặp khóa-giá trị. Mặc định là `,(0,c.jsx)(t.code,{children:`'&'`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subKey?: string`}),` — (Tùy chọn) Khóa cha dùng để định dạng các thuộc tính đối tượng lồng nhau hoặc các phần tử mảng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi truy vấn đã được định dạng và sắp xếp (hoặc `,(0,c.jsx)(t.code,{children:`''`}),` nếu `,(0,c.jsx)(t.code,{children:`request`}),` không phải là đối tượng hoặc mảng).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'ghế thoải mái'
}

console.log(getRequestString(params)) 
// 'page=2&search=gh%E1%BA%BF%20tho%E1%BA%A3i%20m%C3%A1i&sort=desc'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};