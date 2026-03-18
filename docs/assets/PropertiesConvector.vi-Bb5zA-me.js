import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/PropertiesConvector - Bộ chuyển đổi Token ngữ nghĩa"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesconvector",children:"Lớp PropertiesConvector"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesConvector"})," là một tiện ích tĩnh chuyên biệt được thiết kế để xử lý các phép biến đổi ngữ nghĩa phức tạp của các token thiết kế. Nó đóng vai trò như một bộ điều phối cho động cơ xử lý token, xác định các loại thuộc tính cụ thể (như màu sắc, bóng đổ hoặc kiểu chữ) và áp dụng logic chuyển đổi chuyên biệt để đảm bảo dữ liệu thô được chuẩn hóa thành các cấu trúc hệ thống thiết kế có thể sử dụng được."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Điều phối ngữ nghĩa"})," — Tự động định tuyến các token đến các bộ chuyển đổi chuyên biệt dựa trên siêu dữ liệu ",n.jsx(c.code,{children:"type"})," của chúng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Duyệt đệ quy"})," — Duyệt sâu qua các đối tượng thuộc tính lồng nhau để đảm bảo tất cả các token con đều được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bộ chuyển đổi chuyên biệt"})," — Tích hợp logic dành riêng cho ",n.jsx(c.code,{children:"color"}),", ",n.jsx(c.code,{children:"boxShadow"}),", ",n.jsx(c.code,{children:"fontFamilies"})," và ",n.jsx(c.code,{children:"typography"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Biến đổi tại chỗ (In-Place)"})," — Sửa đổi trực tiếp các đối tượng thuộc tính để duy trì tính toàn vẹn của cấu trúc trong quá trình xây dựng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Là một lớp tiện ích tĩnh, ",n.jsx(c.code,{children:"PropertiesConvector"})," không yêu cầu khởi tạo instance. Chức năng chính của nó được truy cập trực tiếp."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesConvector } from '@dxtmisha/scripts'

// Biến đổi một tập hợp các thuộc tính thô
PropertiesConvector.to(rawProperties)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"biến-đổi",children:"Biến đổi"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"to(properties): void"})," — Xử lý đệ quy danh sách thuộc tính, áp dụng các phép biến đổi cụ thể theo loại cho từng mục."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-điều-phối-chuyển-đổi-the-conversion-dispatch-flow",children:"Luồng điều phối chuyển đổi (The Conversion Dispatch Flow)"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesConvector"})," quản lý vòng đời biến đổi thông qua chiến lược khớp đệ quy:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phát hiện loại"}),": Đối với mỗi mục trong cụm thuộc tính được cung cấp, nó kiểm tra xem một bộ chuyển đổi tương ứng có tồn tại trong sổ đăng ký nội bộ hay không (ví dụ: khớp ",n.jsx(c.code,{children:"color"})," với ",n.jsx(c.code,{children:"convectorColor"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi chuyên biệt"}),": Nếu tìm thấy kết quả khớp, logic bộ chuyển đổi cụ thể sẽ được thực thi trên mục đó, biến đổi các giá trị thô của nó thành các định dạng cuối cùng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân nhánh đệ quy"}),":",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Nếu mục có ",n.jsx(c.code,{children:"value"})," là một đối tượng, nó sẽ gọi đệ quy ",n.jsx(c.code,{children:"to()"})," trên đối tượng đó."]}),`
`,n.jsx(c.li,{children:"Nếu bản thân mục đó là một đối tượng không có loại được công nhận, nó sẽ tiếp tục duyệt để tìm các token lồng nhau."}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính toàn vẹn dữ liệu"}),": Quy trình đảm bảo rằng các cấu trúc phức tạp (như bản đồ kiểu chữ hoặc các lớp bóng đổ đa tầng) được phân giải hoàn toàn trước giai đoạn tiếp theo của quy trình."]}),`
`]})]})}function p(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{p as default};
