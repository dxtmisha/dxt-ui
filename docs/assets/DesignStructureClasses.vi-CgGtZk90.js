import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/DesignStructureClasses - Bộ phân giải CSS Class"}),`
`,n.jsx(c.h1,{id:"lớp-designstructureclasses",children:"Lớp DesignStructureClasses"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignStructureClasses"})," chịu trách nhiệm chuyển đổi siêu dữ liệu cấu trúc của thành phần thành một danh sách phẳng các định nghĩa lớp CSS. Nó xác định các token cụ thể được đánh dấu là lớp con (subclasses) và xây dựng các tên lớp một cách đệ quy theo các quy ước đặt tên BEM (Block Element Modifier), đảm bảo tính nhất quán trên toàn bộ kiến trúc kiểu dáng của hệ thống thiết kế."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá lớp đệ quy"})," — Duyệt sâu các cây thuộc tính để tìm các phần tử và bộ sửa đổi (modifiers) lồng nhau."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xây dựng tên BEM"})," — Tự động kết hợp các mã định danh cha và con bằng cách sử dụng dấu gạch dưới kép (",n.jsx(c.code,{children:"__"}),") cho các phần tử."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lập chỉ mục CamelCase"})," — Tạo ra các tên sạch, thân thiện với biến để sử dụng trong logic TypeScript/Vue."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ tên đầy đủ (Full-Name)"})," — Cho phép các token cụ thể bỏ qua các phân cấp cha và sử dụng tên lớp toàn cục khi cần thiết."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ánh xạ thuộc tính tự động"})," — Tích hợp trực tiếp với siêu dữ liệu thuộc tính tiêu chuẩn để xác định các mục nào đóng góp vào API tạo kiểu dáng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Để khởi tạo bộ phân giải lớp, hãy cung cấp tên thành phần cơ sở. Lớp sẽ tự động tải siêu dữ liệu cấu trúc liên quan thông qua trừu tượng cha của nó."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"component: string"})," — Mã định danh của thành phần cần xử lý (ví dụ: ",n.jsx(c.code,{children:"'button'"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignStructureClasses } from '@dxtmisha/scripts'

const resolver = new DesignStructureClasses('button')
const classes = resolver.get()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(): DesignStructureClassesList"})," — Trả về danh sách đầy đủ các đối tượng ánh xạ lớp đã được xử lý."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-phân-giải-lớp",children:"Quy trình phân giải lớp"}),`
`,n.jsx(c.p,{children:"Khi được khởi tạo, lớp sẽ tự động thực thi logic phân giải của nó:"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân tích thuộc tính"}),": Động cơ quét danh sách ",n.jsx(c.code,{children:"PropertyItem"})," của thành phần để tìm các thẻ cho biết kiểu ",n.jsx(c.code,{children:"subclass"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xây dựng không gian tên"}),": Nó theo dõi phân cấp của các tên. Ví dụ, một ",n.jsx(c.code,{children:"label"})," bên trong ",n.jsx(c.code,{children:"button"})," sẽ trở thành ",n.jsx(c.code,{children:"button__label"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cấu trúc dữ liệu"}),": Đối với mỗi lớp được xác định, nó tạo ra một đối tượng chứa:",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"index"}),": Phiên bản CamelCase của tên (ví dụ: ",n.jsx(c.code,{children:"buttonLabel"}),") cho các tham chiếu mã."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"className"}),": Chuỗi lớp CSS thực tế (ví dụ: ",n.jsx(c.code,{children:"button__label"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"full"}),": Một cờ cho biết tên đó có phải là một lớp toàn cục tuyệt đối hay không."]}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Làm phẳng"}),": Cây đệ quy được làm phẳng thành một mảng duy nhất, cung cấp khả năng tra cứu nhanh chóng cho các động cơ mẫu."]}),`
`]}),`
`,n.jsx(c.h3,{id:"tích-hợp-với-các-trình-tạo-mã",children:"Tích hợp với các trình tạo mã"}),`
`,n.jsxs(c.p,{children:["Lớp này cung cấp ánh xạ thiết yếu được ",n.jsx(c.code,{children:"DesignReplace"})," sử dụng để tiêm các định nghĩa lớp vào các triển khai thành phần. Bằng cách tập trung logic đặt tên, nó đảm bảo rằng các thay đổi đối với quy ước đặt tên có thể được áp dụng chung cho tất cả các thành phần mà không cần chỉnh sửa tệp thủ công."]})]})}function u(h={}){const{wrapper:c}={...s(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
