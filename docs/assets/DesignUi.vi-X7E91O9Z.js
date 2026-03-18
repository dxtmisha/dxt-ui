import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignUi - Bộ điều phối cơ sở hạ tầng UI"}),`
`,n.jsx(h.h1,{id:"lớp-designui",children:"Lớp DesignUi"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"DesignUi"})," là bộ điều phối trung tâm chịu trách nhiệm khởi tạo và đồng bộ hóa toàn bộ cơ sở hạ tầng của thư viện UI. Nó điều phối các tác vụ cấp cao như xây dựng lại kiểu dáng, tạo tài liệu, cập nhật kiến trúc thành phần và cấu hình siêu dữ liệu phân phối gói."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Điều phối tập trung"})," — Quản lý luồng thực thi của nhiều trình tạo chuyên biệt (Styles, Wiki, Components)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khởi tạo tăng dần"})," — Hỗ trợ khởi tạo một thành phần cụ thể hoặc toàn bộ bộ thư viện."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý bộ nhớ đệm"})," — Tự động xóa bộ nhớ đệm thuộc tính để đảm bảo tất cả các tài sản được tạo ra đều sử dụng các token hệ thống thiết kế mới nhất."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tự động cấu hình gói"})," — Cập nhật động bản đồ xuất (export maps) trong ",n.jsx(h.code,{children:"package.json"})," để phản ánh trạng thái xây dựng hiện tại."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp cấp thư viện"})," — Kích hoạt các bản cập nhật toàn cục cho các plugin, tài sản truyền thông và định nghĩa kiểu trên toàn bộ không gian làm việc."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(h.p,{children:"Khởi tạo bộ điều phối bằng cách tùy chọn cung cấp tên thành phần. Nếu không có tên nào được cung cấp, lớp sẽ hoạt động trên tất cả các thành phần được tìm thấy trong thư viện."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"name: string"})," — Mã định danh của một thành phần cụ thể cần xử lý (tùy chọn, mặc định là ",n.jsx(h.code,{children:"''"}),")."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignUi } from '@dxtmisha/scripts'

// Để cập nhật mọi thứ:
const ui = new DesignUi()
ui.make()

// Để cập nhật một thành phần cụ thể:
const buttonUi = new DesignUi('button')
buttonUi.make()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"make(): void"})," — Thực hiện quy trình khởi tạo đầy đủ, kích hoạt tuần tự tất cả các bản cập nhật cơ sở hạ tầng."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"quy-trình-khởi-tạo-ui-the-ui-initialization-pipeline",children:"Quy trình khởi tạo UI (The UI Initialization Pipeline)"}),`
`,n.jsxs(h.p,{children:["Khi ",n.jsx(h.code,{children:"make()"})," được gọi, ",n.jsx(h.code,{children:"DesignUi"})," điều phối một bản cập nhật đa giai đoạn toàn diện:"]}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Đặt lại môi trường"}),": Xóa ",n.jsx(h.code,{children:"PropertiesCache"})," để ngăn các token cũ ảnh hưởng đến bản xây dựng mới."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tạo cơ sở hạ tầng"}),": Kích hoạt việc tạo ",n.jsx(h.code,{children:"Styles"})," và ",n.jsx(h.code,{children:"DesignWiki"})," toàn cục để chuẩn bị nền tảng hình ảnh và tài liệu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Đồng bộ hóa thành phần"}),": Thực thi ",n.jsx(h.code,{children:"DesignComponent"})," cho (các) thành phần mục tiêu, phân giải siêu dữ liệu cấu trúc và tạo các tệp nguồn."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Chuẩn bị phân phối"}),": Cập nhật ",n.jsx(h.code,{children:"package.json"})," với các ánh xạ xuất mới nhất cho CSS, SCSS và các mô-đun tập lệnh."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp thư viện"}),": Kích hoạt tuần tự các trình tạo chuyên dụng cấp thư viện:",`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"LibraryMedia"}),": Đồng bộ hóa các tài sản biểu tượng và cờ."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"LibraryList"}),": Biên soạn danh mục thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"LibraryPlugin"}),": Xây dựng lại các plugin tích hợp Vue/framework."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"LibraryAiWiki"}),": Tạo các cấu phần tài liệu được tối ưu hóa cho AI."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"LibraryTypes"}),": Biên soạn các định nghĩa kiểu toàn cục."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(h.h3,{id:"vai-trò-trong-hệ-sinh-thái",children:"Vai trò trong hệ sinh thái"}),`
`,n.jsxs(h.p,{children:[n.jsx(h.code,{children:"DesignUi"}),' đóng vai trò là điểm nhập chính cho các nhà phát triển và các công cụ xây dựng tự động. Bằng cách trừu tượng hóa sự phức tạp của hàng chục lớp chuyên biệt, nó cung cấp một giao diện "một cú nhấp chuột" ổn định để giữ cho thư viện UI luôn đồng bộ với các thông số kỹ thuật đang phát triển của hệ thống thiết kế.']})]})}function p(i={}){const{wrapper:h}={...t(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(c,{...i})}):c(i)}export{p as default};
