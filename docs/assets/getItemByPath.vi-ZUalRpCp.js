import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getItemByPath - Truy xuất thuộc tính lồng sâu`}),`
`,(0,c.jsx)(t.h1,{id:`getitembypath`,children:(0,c.jsx)(t.code,{children:`getItemByPath`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích giúp trích xuất giá trị an toàn từ một đối tượng lồng ghép sâu, sử dụng chuỗi đường dẫn có các khóa được phân tách bằng dấu chấm (`,(0,c.jsx)(t.code,{children:`.`}),`). Nếu thuộc tính hoặc bất kỳ nhánh trong đường dẫn nào không được tìm thấy, hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`undefined`}),` theo cách bắt lỗi an toàn (giúp ngăn chặn lỗi `,(0,c.jsx)(t.em,{children:`Cannot read properties of undefined`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý:`}),` Hàm này hỗ trợ truyền vào một kiểu generic `,(0,c.jsx)(t.code,{children:`R`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`string`}),`) cho giá trị trả về. Hàm hỗ trợ tìm kiếm phần tử của mảng bằng cách sử dụng các chỉ mục chuỗi số ở trong đường dẫn (ví dụ: `,(0,c.jsx)(t.code,{children:`"list.0.name"`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: T`}),` — Đối tượng hoặc mảng cần duyệt giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Đường dẫn để tìm thuộc tính phân tách bằng dấu chấm (`,(0,c.jsx)(t.code,{children:`.`}),` - ví dụ: `,(0,c.jsx)(t.code,{children:`"user.address.city"`}),` hoặc `,(0,c.jsx)(t.code,{children:`"list.1.id"`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`R | undefined`}),` — Giá trị của thuộc tính được yêu cầu (kiểu `,(0,c.jsx)(t.code,{children:`R`}),`), hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu bất kỳ nhánh phụ nào chưa tồn tại.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getItemByPath } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};