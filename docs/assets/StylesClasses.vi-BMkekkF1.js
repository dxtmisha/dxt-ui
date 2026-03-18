import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/StylesClasses - Trình tạo Class cơ sở"}),`
`,s.jsx(n.h1,{id:"lớp-stylesclasses",children:"Lớp StylesClasses"}),`
`,s.jsxs(n.p,{children:["Lớp ",s.jsx(n.code,{children:"StylesClasses"})," chịu trách nhiệm tạo các lớp CSS cơ sở từ các thuộc tính thiết kế. Nó lọc danh sách thuộc tính cho các danh mục như ",s.jsx(n.code,{children:"class"})," và ",s.jsx(n.code,{children:"theme"})," và tạo ra các cấu trúc lớp riêng lẻ."]}),`
`,s.jsx(n.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Lọc theo danh mục"})," — Nhắm mục tiêu cụ thể vào các thuộc tính được phân loại là ",s.jsx(n.code,{children:"class"})," hoặc ",s.jsx(n.code,{children:"theme"}),"."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Tạo Class động"})," — Tạo một từ điển các khối SCSS, trong đó mỗi khóa là tên lớp."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Điều phối phụ thuộc"})," — Sử dụng ",s.jsx(n.code,{children:"StylesProperties"})," để tạo các quy tắc kiểu nội bộ (thuộc tính, mixin, v.v.) cho mỗi lớp."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Quản lý Import"})," — Tự động bao gồm các chỉ thị SCSS ",s.jsx(n.code,{children:"@use"})," cần thiết để liên kết các tệp lớp được tạo."]}),`
`]}),`
`,s.jsx(n.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,s.jsxs(n.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",s.jsx(n.code,{children:"StylesClasses(items)"}),"."]}),`
`,s.jsx(n.p,{children:s.jsx(n.strong,{children:"Tham số:"})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"items: PropertiesItems"})," — một đối tượng để làm việc với danh sách các thuộc tính thiết kế."]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-typescript",children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Khởi tạo PropertiesItems
const items = new PropertiesItems(designData)

// 2. Khởi tạo StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,s.jsx(n.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,s.jsx(n.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"init(): StylesClassesItem"})," — Điểm bắt đầu chính. Xử lý danh sách thuộc tính và trả về một đối tượng chứa danh sách các import cần thiết và nội dung lớp được tạo."]}),`
`]}),`
`,s.jsx(n.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,s.jsx(n.h3,{id:"stylesclassesitem",children:"StylesClassesItem"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"data: string[]"})," — Một mảng các câu lệnh SCSS ",s.jsx(n.code,{children:"@use"})," cho các tệp lớp được tạo."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.code,{children:"classes: Record<string, string[]>"})," — Một từ điển trong đó mỗi khóa là tên lớp và giá trị là một mảng các chuỗi đại diện cho nội dung SCSS của lớp đó."]}),`
`]})]})}function x(c={}){const{wrapper:n}={...e(),...c.components};return n?s.jsx(n,{...c,children:s.jsx(t,{...c})}):t(c)}export{x as default};
