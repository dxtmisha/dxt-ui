import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getItemByPath - Truy xuất thuộc tính lồng sâu`}),`
`,(0,c.jsx)(n.h1,{id:`getitembypath`,children:(0,c.jsx)(n.code,{children:`getItemByPath`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích giúp trích xuất giá trị an toàn từ một đối tượng lồng ghép sâu, sử dụng chuỗi đường dẫn có các khóa được phân tách bằng dấu chấm (`,(0,c.jsx)(n.code,{children:`.`}),`). Nếu thuộc tính hoặc bất kỳ nhánh trong đường dẫn nào không được tìm thấy, hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),` theo cách bắt lỗi an toàn (giúp ngăn chặn lỗi `,(0,c.jsx)(n.em,{children:`Cannot read properties of undefined`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Lưu ý:`}),` Hàm này hỗ trợ truyền vào một kiểu generic `,(0,c.jsx)(n.code,{children:`R`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`string`}),`) cho giá trị trả về. Hàm hỗ trợ tìm kiếm phần tử của mảng bằng cách sử dụng các chỉ mục chuỗi số ở trong đường dẫn (ví dụ: `,(0,c.jsx)(n.code,{children:`"list.0.name"`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: T`}),` — Đối tượng hoặc mảng cần duyệt giá trị.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn để tìm thuộc tính phân tách bằng dấu chấm (`,(0,c.jsx)(n.code,{children:`.`}),` - ví dụ: `,(0,c.jsx)(n.code,{children:`"user.address.city"`}),` hoặc `,(0,c.jsx)(n.code,{children:`"list.1.id"`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`R | undefined`}),` — Giá trị của thuộc tính được yêu cầu (kiểu `,(0,c.jsx)(n.code,{children:`R`}),`), hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu bất kỳ nhánh phụ nào chưa tồn tại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getItemByPath } from '@dxtmisha/functional-basic'

const data = {
  profile: {
    details: {
      bio: 'Lập trình viên giao diện'
    }
  },
  roles: ['admin', 'manager']
}

// Lấy giá trị thành công
console.log(getItemByPath(data, 'profile.details.bio')) // 'Lập trình viên giao diện'

// Lấy thuộc tính của mảng qua string index
console.log(getItemByPath(data, 'roles.0')) // 'admin'

// Xử lý báo lỗi thuộc tính lồng ghép bị khuyết an toàn
console.log(getItemByPath(data, 'profile.missing.key')) // undefined
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};