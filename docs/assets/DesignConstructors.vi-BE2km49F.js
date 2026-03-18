import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/DesignConstructors - Trình quản lý các hàm khởi tạo thiết kế"}),`
`,n.jsx(c.h1,{id:"lớp-designconstructors",children:"Lớp DesignConstructors"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignConstructors"})," đóng vai trò là trình điều phối cấp cao để quản lý tất cả các constructor của thành phần trong hệ thống thiết kế. Nó xử lý các hoạt động hàng loạt, chẳng hạn như cập nhật tất cả các constructor hiện có cùng một lúc và quản lý việc hợp nhất các kiểu dáng thành phần vào các xuất bản thư viện toàn cầu."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý vòng đời hàng loạt"})," — Có thể kích hoạt cập nhật cho tất cả các thành phần trong thư mục ",n.jsx(c.code,{children:"constructors"})," hoặc nhắm mục tiêu vào một thành phần cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý bộ nhớ đệm (Cache)"})," — Tự động xóa bộ nhớ đệm thuộc tính trước khi bắt đầu quá trình tạo để đảm bảo dữ liệu luôn mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất kiểu dáng tự động"})," — Quét tất cả các thành phần và tạo một điểm nhập SCSS tập trung cho thư viện toàn cầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá danh mục"})," — Tự động xác định tất cả các constructor thành phần nằm trong đường dẫn nguồn của hệ thống."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Để khởi tạo trình quản lý, hãy sử dụng hàm khởi tạo. Nếu một tên được cung cấp, các hoạt động sẽ bị giới hạn ở thành phần cụ thể đó."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name?: string"})," — Mã định danh duy nhất tùy chọn của một thành phần cần xử lý."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignConstructors } from '@dxtmisha/scripts'

// Trình quản lý cho tất cả các constructor
const manager = new DesignConstructors()
manager.make()

// Trình quản lý cho một thành phần cụ thể
const buttonManager = new DesignConstructors('button')
buttonManager.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Bắt đầu quá trình tạo hoặc cập nhật cho một hoặc tất cả các constructor được xác định và làm mới các kiểu dáng toàn cục."]}),`
`]}),`
`,n.jsx(c.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getComponents(): string[]"})," — Trả về danh sách tất cả các mã định danh thành phần được tìm thấy trong thư mục constructors."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getComponentsStyle(): string[]"})," — Trả về một mảng các câu lệnh SCSS ",n.jsx(c.code,{children:"@forward"})," cho tất cả các thành phần đã đăng ký."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"tạo-kiểu-dáng-toàn-cục-global-style-generation",children:"Tạo kiểu dáng toàn cục (Global Style Generation)"}),`
`,n.jsxs(c.p,{children:["Một trong những trách nhiệm chính của lớp này là duy trì tệp ",n.jsx(c.code,{children:"style.scss"})," trong thư mục gốc của thư viện. Phương thức ",n.jsx(c.code,{children:"makeStyle()"})," thực hiện các công việc sau:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quét"}),": Lấy danh sách tất cả các thành phần thông qua ",n.jsx(c.code,{children:"getComponents()"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ánh xạ đường dẫn"}),": Xây dựng các quy tắc ",n.jsx(c.code,{children:"@forward"})," trỏ đến tệp kiểu dáng riêng lẻ của mỗi thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ghi tệp"}),": Ghi các quy tắc này vào tệp ",n.jsx(c.code,{children:"packages/library/style.scss"})," tập trung, đảm bảo rằng các kiểu dáng của toàn bộ hệ thống thiết kế có thể truy cập được thông qua một lần nhập (import) duy nhất."]}),`
`]}),`
`,n.jsx(c.h3,{id:"quy-trình-thực-thi",children:"Quy trình thực thi"}),`
`,n.jsxs(c.p,{children:["Khi ",n.jsx(c.code,{children:"make()"})," được gọi, lớp sẽ tuân theo trình tự sau:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Dọn dẹp"}),": Xóa ",n.jsx(c.code,{children:"PropertiesCache"})," để ngăn dữ liệu cũ ảnh hưởng đến kết quả đầu ra."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ủy quyền"}),":",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Nếu ",n.jsx(c.code,{children:"name"})," được cung cấp trong quá trình khởi tạo, nó sẽ tạo một ",n.jsx(c.code,{children:"DesignConstructor"})," mới cho thành phần đó và gọi phương thức ",n.jsx(c.code,{children:"make()"})," của nó."]}),`
`,n.jsxs(c.li,{children:["Nếu không có ",n.jsx(c.code,{children:"name"})," nào được cung cấp, nó sẽ lặp qua tất cả các thành phần được phát hiện, tạo một ",n.jsx(c.code,{children:"DesignConstructor"})," cho mỗi thành phần và kích hoạt các bản cập nhật của chúng."]}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất"}),": Cuối cùng, nó gọi ",n.jsx(c.code,{children:"makeStyle()"})," để đồng bộ hóa các xuất bản kiểu dáng toàn cục với danh sách thành phần hiện tại."]}),`
`]})]})}function u(h={}){const{wrapper:c}={...s(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
