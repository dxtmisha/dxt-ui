import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignStructureStyles - Trình biên dịch kiểu dáng thành phần"}),`
`,n.jsx(h.h1,{id:"lớp-designstructurestyles",children:"Lớp DesignStructureStyles"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"DesignStructureStyles"})," chịu trách nhiệm chuyển đổi các token thiết kế cấu trúc của thành phần thành một mảng chuẩn hóa các chuỗi thuộc tính CSS. Bằng cách tận dụng động cơ ",n.jsx(h.code,{children:"StylesProperties"}),", nó đảm bảo rằng mọi thành phần đều kế thừa bản sắc hình ảnh cơ bản của mình trực tiếp từ cấu hình chủ đề trung tâm của hệ thống thiết kế."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Chuyển đổi Token sang CSS"})," — Tự động ánh xạ các token thiết kế trừu tượng sang các thuộc tính CSS cụ thể."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phạm vi bộ chọn BEM"})," — Gói các kiểu dáng được tạo trong một bộ chọn cấp thành phần (",n.jsx(h.code,{children:"& { ... }"}),") để đảm bảo cách ly kiểu dáng."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Kế thừa phân cấp"})," — Sử dụng siêu dữ liệu cấu trúc của cha để phân giải chính xác các biến thuộc tính lồng nhau."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Định dạng chuẩn hóa"})," — Áp dụng thụt lề và ngắt dòng nhất quán, đảm bảo các tệp kiểu dáng được tạo ra vẫn dễ đọc."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(h.p,{children:"Để khởi tạo trình biên dịch kiểu dáng, hãy cung cấp mã định danh của thành phần cần tạo kiểu dáng. Lớp sẽ tự động tải siêu dữ liệu cấu trúc liên quan."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"component: string"})," — Mã định danh của thành phần (ví dụ: ",n.jsx(h.code,{children:"'button'"}),")."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"make(): string[]"})," — Kích hoạt quá trình chuyển đổi và trả về mảng các chuỗi thuộc tính CSS."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"quy-trình-biên-dịch-kiểu-dáng",children:"Quy trình biên dịch kiểu dáng"}),`
`,n.jsx(h.p,{children:"Khi trình biên dịch được khởi tạo, nó tuân theo một quy trình có cấu trúc:"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tải siêu dữ liệu"}),": Nó sử dụng logic của lớp cha ",n.jsx(h.code,{children:"DesignStructureItemAbstract"})," để lấy ",n.jsx(h.code,{children:"PropertyItemsItem"})," cụ thể liên quan đến thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Lựa chọn ngữ cảnh"}),": Động cơ gói tất cả các thuộc tính đầu ra bên trong một bộ chọn CSS tự tham chiếu (",n.jsx(h.code,{children:"& { ... }"}),") để duy trì tính tương thích với CSS-in-JS và các trình tiền xử lý."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phân giải thuộc tính"}),": Nó khởi tạo ",n.jsx(h.code,{children:"StylesProperties"}),", chuyển siêu dữ liệu đã thu thập. Động cơ phụ này sau đó duyệt qua mọi token, phân giải các biến chủ đề, đơn vị và các phương án dự phòng (fallbacks)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Đệm đầu ra"}),": Danh sách các thuộc tính cuối cùng được kết hợp thành một mảng phẳng các chuỗi, sẵn sàng để tiêm vào tệp CSS hoặc thẻ style."]}),`
`]}),`
`,n.jsx(h.h3,{id:"tích-hợp-với-động-cơ-chủ-đề-theme-engine",children:"Tích hợp với Động cơ Chủ đề (Theme Engine)"}),`
`,n.jsx(h.p,{children:"Lớp này đóng vai trò là cầu nối giữa dữ liệu thiết kế thô và biểu diễn hình ảnh cuối cùng. Bằng cách tập trung logic biên dịch kiểu dáng, hệ thống đảm bảo rằng các thay đổi đối với kiến trúc cốt lõi của chủ đề (chẳng hạn như quy ước đặt tên biến hoặc logic đơn vị) sẽ tự động được truyền bá đến tất cả các thành phần trong chu kỳ xây dựng tiếp theo."})]})}function g(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{g as default};
