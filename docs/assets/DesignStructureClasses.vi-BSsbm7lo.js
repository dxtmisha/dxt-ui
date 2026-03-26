import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignStructureClasses - Bộ phân giải CSS Class`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designstructureclasses`,children:`Lớp DesignStructureClasses`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignStructureClasses`}),` chịu trách nhiệm chuyển đổi siêu dữ liệu cấu trúc của thành phần thành một danh sách phẳng các định nghĩa lớp CSS. Nó xác định các token cụ thể được đánh dấu là lớp con (subclasses) và xây dựng các tên lớp một cách đệ quy theo các quy ước đặt tên BEM (Block Element Modifier), đảm bảo tính nhất quán trên toàn bộ kiến trúc kiểu dáng của hệ thống thiết kế.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá lớp đệ quy`}),` — Duyệt sâu các cây thuộc tính để tìm các phần tử và bộ sửa đổi (modifiers) lồng nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xây dựng tên BEM`}),` — Tự động kết hợp các mã định danh cha và con bằng cách sử dụng dấu gạch dưới kép (`,(0,c.jsx)(n.code,{children:`__`}),`) cho các phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lập chỉ mục CamelCase`}),` — Tạo ra các tên sạch, thân thiện với biến để sử dụng trong logic TypeScript/Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ tên đầy đủ (Full-Name)`}),` — Cho phép các token cụ thể bỏ qua các phân cấp cha và sử dụng tên lớp toàn cục khi cần thiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ thuộc tính tự động`}),` — Tích hợp trực tiếp với siêu dữ liệu thuộc tính tiêu chuẩn để xác định các mục nào đóng góp vào API tạo kiểu dáng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Để khởi tạo bộ phân giải lớp, hãy cung cấp tên thành phần cơ sở. Lớp sẽ tự động tải siêu dữ liệu cấu trúc liên quan thông qua trừu tượng cha của nó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component: string`}),` — Mã định danh của thành phần cần xử lý (ví dụ: `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignStructureClasses } from '@dxtmisha/scripts'

const resolver = new DesignStructureClasses('button')
const classes = resolver.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): DesignStructureClassesList`}),` — Trả về danh sách đầy đủ các đối tượng ánh xạ lớp đã được xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-phân-giải-lớp`,children:`Quy trình phân giải lớp`}),`
`,(0,c.jsx)(n.p,{children:`Khi được khởi tạo, lớp sẽ tự động thực thi logic phân giải của nó:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích thuộc tính`}),`: Động cơ quét danh sách `,(0,c.jsx)(n.code,{children:`PropertyItem`}),` của thành phần để tìm các thẻ cho biết kiểu `,(0,c.jsx)(n.code,{children:`subclass`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xây dựng không gian tên`}),`: Nó theo dõi phân cấp của các tên. Ví dụ, một `,(0,c.jsx)(n.code,{children:`label`}),` bên trong `,(0,c.jsx)(n.code,{children:`button`}),` sẽ trở thành `,(0,c.jsx)(n.code,{children:`button__label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu trúc dữ liệu`}),`: Đối với mỗi lớp được xác định, nó tạo ra một đối tượng chứa:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`index`}),`: Phiên bản CamelCase của tên (ví dụ: `,(0,c.jsx)(n.code,{children:`buttonLabel`}),`) cho các tham chiếu mã.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`className`}),`: Chuỗi lớp CSS thực tế (ví dụ: `,(0,c.jsx)(n.code,{children:`button__label`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`full`}),`: Một cờ cho biết tên đó có phải là một lớp toàn cục tuyệt đối hay không.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Làm phẳng`}),`: Cây đệ quy được làm phẳng thành một mảng duy nhất, cung cấp khả năng tra cứu nhanh chóng cho các động cơ mẫu.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tích-hợp-với-các-trình-tạo-mã`,children:`Tích hợp với các trình tạo mã`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này cung cấp ánh xạ thiết yếu được `,(0,c.jsx)(n.code,{children:`DesignReplace`}),` sử dụng để tiêm các định nghĩa lớp vào các triển khai thành phần. Bằng cách tập trung logic đặt tên, nó đảm bảo rằng các thay đổi đối với quy ước đặt tên có thể được áp dụng chung cho tất cả các thành phần mà không cần chỉnh sửa tệp thủ công.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};