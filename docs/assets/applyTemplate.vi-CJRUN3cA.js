import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/applyTemplate - Áp dụng mẫu vào văn bản`}),`
`,(0,c.jsx)(n.h1,{id:`applytemplate`,children:(0,c.jsx)(n.code,{children:`applyTemplate`})}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích tạo văn bản động dựa trên các mẫu. Điều này hữu ích cho các tác vụ đa ngôn ngữ (i18n), tạo thông báo hệ thống hoặc chèn dữ liệu người dùng vào các hằng số chuỗi.`}),`
`,(0,c.jsx)(n.p,{children:`Hàm này hỗ trợ:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Các điểm đánh dấu theo vị trí (`,(0,c.jsx)(n.code,{children:`%d`}),`, `,(0,c.jsx)(n.code,{children:`%e`}),`, v.v.) để thay thế các giá trị từ một mảng theo thứ tự.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Các điểm đánh dấu theo tên (`,(0,c.jsx)(n.code,{children:`[key]`}),`, `,(0,c.jsx)(n.code,{children:`{key}`}),`) để thay thế các giá trị từ một đối tượng thông qua khóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Thẻ theo cặp (`,(0,c.jsx)(n.code,{children:`[key]nội dung[/key]`}),`, `,(0,c.jsx)(n.code,{children:`{key}nội dung{/key}`}),`) để bao bọc nội dung trong các thẻ HTML hoặc cấu trúc khác (từ `,(0,c.jsx)(n.code,{children:`[content]`}),` bên trong giá trị truyền vào sẽ được thay thế bởi nội dung của thẻ).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Văn bản gốc chứa các điểm đánh dấu mẫu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement: Record<string, string | number> | string[]`}),` — Một đối tượng hoặc mảng chứa các giá trị để thay thế. Mặc định là `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Văn bản với các giá trị đã được thay thế.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { applyTemplate } from '@dxtmisha/functional-basic'

// Đánh dấu theo vị trí
console.log(applyTemplate('Xin chào, %d %e!', ['John', 'Doe'])) // 'Xin chào, John Doe!'

// Đánh dấu theo tên
console.log(applyTemplate('Xin chào, [name]!', { name: 'John' })) // 'Xin chào, John!'
console.log(applyTemplate('Xin chào, {name}!', { name: 'John' })) // 'Xin chào, John!'

// Thẻ bao bọc với nội dung bị thay thế
console.log(applyTemplate('Nhấp vào [link]đây[/link]', { link: '<a href="#">[content]</a>' }))
console.log(applyTemplate('Nhấp vào {link}đây{/link}', { link: '<a href="#">{content}</a>' }))
// 'Nhấp vào <a href="#">đây</a>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};