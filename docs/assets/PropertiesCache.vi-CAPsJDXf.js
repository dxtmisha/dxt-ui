import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesCache - Bộ điều phối bộ nhớ đệm vĩnh viễn"}),`
`,n.jsx(c.h1,{id:"lớp-propertiescache",children:"Lớp PropertiesCache"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesCache"})," là một tiện ích tĩnh hiệu suất cao được thiết kế để quản lý việc lưu trữ bộ nhớ đệm (caching) dựa trên tệp vĩnh viễn cho bộ công cụ hệ thống thiết kế. Nó đảm bảo rằng các biến đổi token phức tạp chỉ được thực hiện khi cần thiết, giúp giảm đáng kể thời gian xây dựng cho các dự án quy mô lớn bằng cách theo dõi các phụ thuộc tệp và duy trì một cấu trúc phân cấp bộ nhớ đệm chặt chẽ."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Theo dõi phụ thuộc"})," — Tự động giám sát các thay đổi của tệp nguồn và vô hiệu hóa bộ nhớ đệm nếu bất kỳ phụ thuộc nào bị sửa đổi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lưu trữ phân cấp"})," — Tổ chức dữ liệu đã lưu vào thư mục ẩn ",n.jsx(c.code,{children:".cache"})," với các thư mục con chuyên biệt cho các bước xử lý khác nhau."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xây dựng tăng dần"})," — Cho phép tính toán lại một phần bằng cách lưu trữ kết quả biến đổi trung gian."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính toàn vẹn hệ thống"})," — Duy trì sổ đăng ký ",n.jsx(c.code,{children:"system.json"})," để theo dõi dấu thời gian của bộ nhớ đệm và siêu dữ liệu tệp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ Generic"})," — Cung cấp hỗ trợ TypeScript đầy đủ để truy xuất các cấu trúc dữ liệu đã lưu một cách an toàn về kiểu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Là một lớp tĩnh, ",n.jsx(c.code,{children:"PropertiesCache"})," không yêu cầu khởi tạo instance. Các phương thức của nó được truy cập trực tiếp."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesCache } from '@dxtmisha/scripts'

// Truy xuất dữ liệu với quản lý bộ nhớ đệm tự động
const data = PropertiesCache.get(
  ['tokens', 'color'], 
  'palette-cache', 
  () => transformPaletteLogic()
)

// Xóa tất cả dữ liệu đã lưu
PropertiesCache.clear()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"các-thao-tác-bộ-nhớ-đệm",children:"Các thao tác bộ nhớ đệm"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get<T>(path, name, callback, extension): T"})," — Truy xuất dữ liệu từ bộ nhớ đệm hoặc tạo lại dữ liệu đó thông qua hàm callback."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"read<R>(path): R | undefined"})," — Đọc một tệp và đăng ký nó như một phụ thuộc của bộ nhớ đệm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"write<T>(name, value): void"})," — Lưu kết quả xử lý trung gian vào bộ nhớ đệm tạm thời."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"clear(): void"})," — Xóa đệ quy toàn bộ thư mục bộ nhớ đệm."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-đồng-bộ-hóa-bộ-nhớ-đệm-the-cache-synchronization-flow",children:"Luồng đồng bộ hóa bộ nhớ đệm (The Cache Synchronization Flow)"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesCache"})," hoạt động thông qua một vòng đời nội bộ tinh vi để đảm bảo tính nhất quán của dữ liệu:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsxs(c.strong,{children:["Yêu cầu (",n.jsx(c.code,{children:"get"}),")"]}),": Khi dữ liệu được yêu cầu, lớp trước tiên sẽ kiểm tra sự tồn tại của tệp bộ nhớ đệm vật lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác thực hệ thống"}),": Nó tham khảo sổ đăng ký ",n.jsx(c.code,{children:"system"})," nội bộ để so sánh dấu thời gian tạo của bộ nhớ đệm với thời gian sửa đổi của tất cả các tệp phụ thuộc đã đăng ký."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo lại"}),": Nếu tệp bị thiếu hoặc lỗi thời:",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Nó đẩy ",n.jsx(c.code,{children:"name"})," bộ nhớ đệm hiện tại vào một ngăn xếp ",n.jsx(c.code,{children:"listenerName"})," nội bộ."]}),`
`,n.jsxs(c.li,{children:["Bất kỳ lần đọc tệp tiếp theo nào thông qua ",n.jsx(c.code,{children:"PropertiesCache.read()"})," trong khi thực thi callback sẽ tự động được ghi lại như một phụ thuộc cho mục bộ nhớ đệm cụ thể này."]}),`
`,n.jsx(c.li,{children:"Kết quả callback được ghi vào đĩa."}),`
`]}),`
`]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hoàn tất"}),": Sau khi callback hoàn tất, nó cập nhật ",n.jsx(c.code,{children:"system.json"})," với dấu thời gian và danh sách phụ thuộc mới, đảm bảo yêu cầu tiếp theo vẫn hợp lệ trừ khi tệp nguồn thay đổi."]}),`
`]})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
