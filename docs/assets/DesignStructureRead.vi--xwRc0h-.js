import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/DesignStructureRead - Bộ phân giải phụ thuộc thuộc tính"}),`
`,n.jsx(c.h1,{id:"lớp-designstructureread",children:"Lớp DesignStructureRead"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignStructureRead"})," là trình phân tích cú pháp chính để phân giải các phụ thuộc và trạng thái giữa các thuộc tính của thành phần. Nó chuyển đổi các token hệ thống thiết kế thô thành một danh sách các thuộc tính có cấu trúc, xác định mục nào sẽ được hiển thị dưới dạng props công khai và mục nào đại diện cho các trạng thái tương tác nội bộ hoặc các phụ thuộc lớp CSS được liên kết."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá trạng thái"})," — Xác định các token thuộc tính được định nghĩa là trạng thái tương tác (ví dụ: ",n.jsx(c.code,{children:":hover"}),", ",n.jsx(c.code,{children:":active"}),") và xây dựng các chuỗi phụ thuộc của chúng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải lớp liên kết"})," — Phát hiện và phân giải các tham chiếu đến các lớp thành phần bên ngoài để duy trì phân cấp BEM."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Biên soạn giá trị"})," — Tập hợp tất cả các giá trị có thể có cho một thuộc tính, bao gồm cả các giá trị bắt nguồn từ các cấu trúc trạng thái lồng nhau, để tạo ra các union TypeScript chính xác."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác thực Prop"})," — Lọc và xác thực các token thuộc tính nào đủ điều kiện để xuất dưới dạng thuộc tính thành phần công khai dựa trên các quy tắc hệ thống."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tổng hợp giá trị độc lập"})," — Tự động chèn các cờ boolean cho các thuộc tính thiếu các token giá trị rõ ràng nhưng yêu cầu theo dõi trạng thái."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.p,{children:"Để khởi tạo trình đọc thuộc tính, hãy cung cấp tên thành phần cơ sở. Lớp sẽ tự động phân giải siêu dữ liệu của thành phần thông qua trừu tượng cha của nó và kích hoạt quy trình phân tích cú pháp nhiều giai đoạn."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"component: string"})," — Mã định danh của thành phần cần phân tích (ví dụ: ",n.jsx(c.code,{children:"'input'"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignStructureRead } from '@dxtmisha/scripts'

const reader = new DesignStructureRead('button')
const structureList = reader.get()
const states = reader.getStates()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(): DesignStructureList"})," — Trả về danh sách tuyến tính đã được phân giải hoàn chỉnh của các thuộc tính thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getStates(): DesignStructureStateList"})," — Trả về danh sách phân cấp các trạng thái và các phụ thuộc thuộc tính liên quan của chúng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-phân-tích-cú-pháp-the-parsing-pipeline",children:"Quy trình phân tích cú pháp (The Parsing Pipeline)"}),`
`,n.jsxs(c.p,{children:["Khi được xây dựng, ",n.jsx(c.code,{children:"DesignStructureRead"})," thực hiện một chuỗi các chuyển đổi để xây dựng mô hình dữ liệu cuối cùng:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Ánh xạ trạng thái (",n.jsx(c.code,{children:"makeState"}),")"]}),": Duyệt đệ quy cây thuộc tính để tách biệt các token được đánh dấu là ",n.jsx(c.code,{children:"state"})," hoặc ",n.jsx(c.code,{children:"linkClass"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Khởi tạo cấu trúc chính (",n.jsx(c.code,{children:"makeMain"}),")"]}),": Tạo mục nhập cơ sở cho mỗi prop được xác định, chuẩn hóa tên và siêu dữ liệu."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Trích xuất giá trị cơ sở (",n.jsx(c.code,{children:"makeValue"}),")"]}),": Phân giải các giá trị trực tiếp được gán cho mỗi thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Mở rộng giá trị (",n.jsx(c.code,{children:"makeValueAll"}),")"]}),": Tập hợp các giá trị từ tất cả các trạng thái tương tác có thể để đảm bảo API thuộc tính bao quát mọi trường hợp logic."]}),`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Duy nhất hóa giá trị (",n.jsx(c.code,{children:"makeValueUnique"}),")"]}),": Chuẩn hóa các danh sách giá trị, loại bỏ các mục trùng lặp và đảm bảo các fallback boolean tồn tại khi cần thiết."]}),`
`]}),`
`,n.jsx(c.h3,{id:"xử-lý-các-lớp-liên-kết-linked-classes",children:"Xử lý các lớp liên kết (Linked Classes)"}),`
`,n.jsxs(c.p,{children:["Logic đặc biệt được áp dụng khi một thuộc tính tham chiếu đến một lớp thành phần khác (",n.jsx(c.code,{children:"linkClass"}),"). Bộ phân giải sẽ:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác định tham chiếu"}),": Tìm liên kết biến cụ thể trong siêu dữ liệu thiết kế toàn cục."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi tên"}),": Chuyển đổi tham chiếu thành tên lớp BEM tiêu chuẩn hóa (ví dụ: ",n.jsx(c.code,{children:"theme-button--primary"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải đệ quy"}),": Kích hoạt một chu kỳ phân tích cú pháp phụ cho thành phần được liên kết để đảm bảo các thuộc tính và trạng thái của nó được tính đến trong cây phụ thuộc của thành phần chính."]}),`
`]})]})}function g(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{g as default};
