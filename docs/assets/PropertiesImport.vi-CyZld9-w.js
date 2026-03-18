import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/PropertiesImport - Bộ phân giải Token bên ngoài"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesimport",children:"Lớp PropertiesImport"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesImport"})," là một trình quản lý chuyên biệt để phân giải và tích hợp các tham chiếu tệp bên ngoài trong các cụm token thiết kế. Nó cho phép các nhà phát triển mô-đun hóa các định nghĩa thuộc tính trên nhiều tệp hoặc thư mục, cung cấp các cơ chế mạnh mẽ để liên kết sâu (deep-linking) vào các cấu trúc dữ liệu cụ thể và hợp nhất đệ quy các tập hợp token độc lập vào một cấu hình thống nhất duy nhất."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải mô-đun"})," — Bao gồm các tệp ",n.jsx(c.code,{children:".json"})," bên ngoài hoặc toàn bộ thư mục vào cây thuộc tính một cách minh bạch."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Liên kết sâu (Deep-linking)"})," — Hỗ trợ các định danh phân đoạn (ví dụ: ",n.jsx(c.code,{children:"#path.to.node"}),") để chỉ nhập các tập hợp con cụ thể của một tệp bên ngoài."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nhập thư mục đệ quy"})," — Tự động ánh xạ cấu trúc thư mục tới các không gian tên thuộc tính khi một thư mục được tham chiếu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải nhận biết ngữ cảnh"})," — Theo dõi cấp độ thư mục hiện tại để phân giải chính xác các đường dẫn tệp tương đối trong quá trình duyệt sâu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất chuẩn hóa"})," — Đảm bảo rằng dữ liệu đã nhập được truyền qua ",n.jsx(c.code,{children:"PropertiesStandard"})," trước khi được hợp nhất vào cây cha."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"PropertiesImport(properties, root)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"properties: PropertyList"})," — danh sách thuộc tính ban đầu (cây token) cần xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"root: string[]"})," — các phân đoạn đường dẫn cơ sở để phân giải các tham chiếu tệp tương đối."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesImport } from '@dxtmisha/scripts'

// 1. Chuẩn bị dữ liệu thô và ngữ cảnh đường dẫn
const initialProperties = { 
  button: { type: 'file', value: 'components/button.json' } 
}
const rootPath = ['src', 'tokens']

// 2. Tạo thực thể importer
const importer = new PropertiesImport(initialProperties, rootPath)

// 3. Kích hoạt việc phân giải các tham chiếu bên ngoài
const resolvedData = importer.to()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"to(properties, root): PropertyList"})," — phân giải và hợp nhất tất cả các tham chiếu tệp bên ngoài trong cụm thuộc tính."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-phân-giải-bên-ngoài-the-external-resolution-flow",children:"Luồng phân giải bên ngoài (The External Resolution Flow)"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesImport"})," quản lý một quy trình phân giải nhiều giai đoạn:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phát hiện"}),": Khi duyệt cây, nó nhắm mục tiêu cụ thể vào các mục có ",n.jsx(c.code,{children:"value"})," là một chuỗi và siêu dữ liệu loại khớp với ",n.jsx(c.code,{children:"PropertyType.file"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân tích cú pháp liên kết"}),": Nó tách chuỗi tham chiếu (ví dụ: ",n.jsx(c.code,{children:"theme/colors.json#primary"}),") thành ",n.jsx(c.code,{children:"path"})," tệp vật lý và một phân đoạn ",n.jsx(c.code,{children:"link"})," nội bộ tùy chọn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi IO"}),":",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tệp đơn"}),": Đọc tệp mục tiêu thông qua ",n.jsx(c.code,{children:"PropertiesCache"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thư mục"}),": Ánh xạ tất cả các tệp ",n.jsx(c.code,{children:".json"})," trong thư mục tới các thuộc tính con được đặt tên theo tên tệp."]}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Trích xuất sâu"}),": Nếu có định danh phân đoạn (",n.jsx(c.code,{children:"#"}),"), nó sẽ điều hướng qua đối tượng đã đọc để chỉ trả về đường dẫn phụ được yêu cầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa & Đệ quy"}),": Dữ liệu được trích xuất được truyền cho ",n.jsx(c.code,{children:"PropertiesStandard"})," để chuẩn hóa và sau đó được truyền đệ quy trở lại ",n.jsx(c.code,{children:"to()"})," để phân giải bất kỳ lượt nhập ",n.jsx(c.em,{children:"lồng nhau"})," nào bên trong tệp vừa được bao gồm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất"}),": Dữ liệu cuối cùng được hợp nhất đệ quy vào cấu trúc cha bằng ",n.jsx(c.code,{children:"replaceRecursive"}),"."]}),`
`]})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
