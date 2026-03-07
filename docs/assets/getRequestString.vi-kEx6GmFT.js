import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/getRequestString - Tạo chuỗi truy vấn"}),`
`,n.jsx(t.h1,{id:"getrequeststring",children:n.jsx(t.code,{children:"getRequestString"})}),`
`,n.jsxs(t.p,{children:["Chuyển đổi một đối tượng từ điển thành một chuỗi định dạng kiểu URL (mặc định là chuỗi truy vấn cho tham số GET), trong đó các khóa và giá trị được nối với nhau bằng các dấu phân cách quy định. Trước khi tạo chuỗi, tất cả các giá trị đều được đưa về kiểu chuỗi, cắt khoảng trắng dư thừa và đưa qua hàm ",n.jsx(t.code,{children:"encodeURIComponent"})," để đảm bảo an toàn khi truyền qua URL. Các khóa sẽ được sắp xếp theo thứ tự bảng chữ cái."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"request: Record<string, any>"})," — Đối tượng dữ liệu cần chuyển đổi."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"sign: string"})," — (Tùy chọn) Ký tự kết nối giữa khóa và giá trị. Mặc định là ",n.jsx(t.code,{children:"="}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"separator: string"})," — (Tùy chọn) Ký tự phân tách các cặp khóa-giá trị. Mặc định là ",n.jsx(t.code,{children:"&"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"string"})," — Một chuỗi kí tự đã được định dạng và sắp xếp."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getRequestString } from '@dxtmisha/functional-basic'

const params = {
  sort: 'desc',
  page: 2,
  search: 'ghế thoải mái'
}

console.log(getRequestString(params)) 
// 'page=2&search=gh%E1%BA%BF%20tho%E1%BA%A3i%20m%C3%A1i&sort=desc'
`})})]})}function g(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{g as default};
