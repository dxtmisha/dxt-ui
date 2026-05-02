import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getRequestString - Tạo chuỗi truy vấn`}),`
`,(0,c.jsx)(n.h1,{id:`getrequeststring`,children:(0,c.jsx)(n.code,{children:`getRequestString`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chuyển đổi một đối tượng từ điển thành một chuỗi định dạng kiểu URL (mặc định là chuỗi truy vấn cho tham số GET), trong đó các khóa và giá trị được nối với nhau bằng các dấu phân cách quy định. Trước khi tạo chuỗi, tất cả các giá trị đều được đưa về kiểu chuỗi, cắt khoảng trắng dư thừa và đưa qua hàm `,(0,c.jsx)(n.code,{children:`encodeURIComponent`}),` để đảm bảo an toàn khi truyền qua URL. Các khóa sẽ được sắp xếp theo thứ tự bảng chữ cái.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Record<string, any>`}),` — Đối tượng dữ liệu cần chuyển đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sign: string`}),` — (Tùy chọn) Ký tự kết nối giữa khóa và giá trị. Mặc định là `,(0,c.jsx)(n.code,{children:`=`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`separator: string`}),` — (Tùy chọn) Ký tự phân tách các cặp khóa-giá trị. Mặc định là `,(0,c.jsx)(n.code,{children:`&`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi kí tự đã được định dạng và sắp xếp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'ghế thoải mái'
}

console.log(getRequestString(params)) 
// 'page=2&search=gh%E1%BA%BF%20tho%E1%BA%A3i%20m%C3%A1i&sort=desc'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};