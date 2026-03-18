import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/LibraryMedia - Trình tạo kết nối phương tiện"}),`
`,n.jsx(c.h1,{id:"lớp-librarymedia",children:"Lớp LibraryMedia"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"LibraryMedia"})," chịu trách nhiệm tạo các tệp kết nối cho dữ liệu phương tiện (chủ yếu là biểu tượng) và điểm nhập phong cách (style) chính cho dự án hệ thống thiết kế. Điều này đảm bảo rằng các tài nguyên được lập chỉ mục và tối ưu hóa để sử dụng trong thư viện."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kết nối biểu tượng"})," — Quét các biểu tượng và tạo cơ chế tải không đồng bộ thông qua nhập động (dynamic imports)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp phong cách"})," — Kết nối các tệp SCSS chính của dự án với công cụ xây dựng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp trình quản lý biểu tượng"})," — Tự động đăng ký các tài nguyên với trình quản lý ",n.jsx(c.code,{children:"Icons"})," toàn cục từ thư viện chức năng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý vòng đời"})," — Hỗ trợ chuỗi lệnh (chaining) và đăng ký tài nguyên sạch sẽ thông qua tạo mã tự động."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"LibraryMedia(items)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"items: LibraryItems"})," — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Kích hoạt quá trình tạo các tệp kết nối phương tiện và phong cách."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cấu-trúc-các-tệp-được-tạo",children:"Cấu trúc các tệp được tạo"}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"make"})," tạo ra một số tệp để tích hợp các tài nguyên vào thư viện:"]}),`
`,n.jsxs(c.h3,{id:"1-kết-nối-phương-tiện-mediats",children:["1. Kết nối phương tiện (",n.jsx(c.code,{children:"media.ts"}),")"]}),`
`,n.jsxs(c.p,{children:["Đăng ký tất cả các biểu tượng từ thư mục ",n.jsx(c.code,{children:"icons"})," bằng cách sử dụng nhập động để tối ưu hóa hiệu suất."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Đặc điểm của mã được tạo:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tên:"})," ",n.jsx(c.code,{children:"[Design]MakeIcons"})," (ví dụ: ",n.jsx(c.code,{children:"dxtMakeIcons"}),")"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hành động:"})," Thêm đường dẫn biểu tượng vào sổ đăng ký toàn cục ",n.jsx(c.code,{children:"Icons"}),"."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { Icons } from '@dxtmisha/functional'

// Nhập động cho từng biểu tượng
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,n.jsxs(c.h3,{id:"2-điểm-nhập-phong-cách-stylets",children:["2. Điểm nhập phong cách (",n.jsx(c.code,{children:"style.ts"}),")"]}),`
`,n.jsx(c.p,{children:"Đóng vai trò là điểm nhập SCSS chính, kết nối các phong cách cụ thể của dự án với thư viện."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Cấu trúc ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import '../styles/ProjectName/main.scss'
`})})]})}function g(i={}){const{wrapper:c}={...t(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(h,{...i})}):h(i)}export{g as default};
