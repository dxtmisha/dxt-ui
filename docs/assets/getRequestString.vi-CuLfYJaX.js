import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getRequestString - Tạo chuỗi truy vấn`}),`
`,(0,c.jsx)(t.h1,{id:`getrequeststring`,children:(0,c.jsx)(t.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi một đối tượng từ điển thành một chuỗi định dạng kiểu URL (mặc định là chuỗi truy vấn cho tham số GET), trong đó các khóa và giá trị được nối với nhau bằng các dấu phân cách quy định. Trước khi tạo chuỗi, tất cả các giá trị đều được đưa về kiểu chuỗi, cắt khoảng trắng dư thừa và đưa qua hàm `,(0,c.jsx)(t.code,{children:`encodeURIComponent`}),` để đảm bảo an toàn khi truyền qua URL. Các khóa sẽ được sắp xếp theo thứ tự bảng chữ cái.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Record<string, any>`}),` — Đối tượng dữ liệu cần chuyển đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sign: string`}),` — (Tùy chọn) Ký tự kết nối giữa khóa và giá trị. Mặc định là `,(0,c.jsx)(t.code,{children:`=`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator: string`}),` — (Tùy chọn) Ký tự phân tách các cặp khóa-giá trị. Mặc định là `,(0,c.jsx)(t.code,{children:`&`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi kí tự đã được định dạng và sắp xếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'ghế thoải mái'
}

console.log(getRequestString(params)) 
// 'page=2&search=gh%E1%BA%BF%20tho%E1%BA%A3i%20m%C3%A1i&sort=desc'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};