import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/getItemByPath - Truy xuất thuộc tính lồng sâu"}),`
`,n.jsx(t.h1,{id:"getitembypath",children:n.jsx(t.code,{children:"getItemByPath"})}),`
`,n.jsxs(t.p,{children:["Một tiện ích giúp trích xuất giá trị an toàn từ một đối tượng lồng ghép sâu, sử dụng chuỗi đường dẫn có các khóa được phân tách bằng dấu chấm (",n.jsx(t.code,{children:"."}),"). Nếu thuộc tính hoặc bất kỳ nhánh trong đường dẫn nào không được tìm thấy, hàm sẽ trả về ",n.jsx(t.code,{children:"undefined"})," theo cách bắt lỗi an toàn (giúp ngăn chặn lỗi ",n.jsx(t.em,{children:"Cannot read properties of undefined"}),")."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Lưu ý:"})," Hàm này hỗ trợ truyền vào một kiểu generic ",n.jsx(t.code,{children:"R"})," (mặc định là ",n.jsx(t.code,{children:"string"}),") cho giá trị trả về. Hàm hỗ trợ tìm kiếm phần tử của mảng bằng cách sử dụng các chỉ mục chuỗi số ở trong đường dẫn (ví dụ: ",n.jsx(t.code,{children:'"list.0.name"'}),")."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"item: T"})," — Đối tượng hoặc mảng cần duyệt giá trị."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — Đường dẫn để tìm thuộc tính phân tách bằng dấu chấm (",n.jsx(t.code,{children:"."})," - ví dụ: ",n.jsx(t.code,{children:'"user.address.city"'})," hoặc ",n.jsx(t.code,{children:'"list.1.id"'}),")."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"R | undefined"})," — Giá trị của thuộc tính được yêu cầu (kiểu ",n.jsx(t.code,{children:"R"}),"), hoặc ",n.jsx(t.code,{children:"undefined"})," nếu bất kỳ nhánh phụ nào chưa tồn tại."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getItemByPath } from '@dxtmisha/functional-basic'

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
`})})]})}function g(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{g as default};
