import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesMain - Bộ điều phối Token toàn cầu"}),`
`,n.jsx(h.h1,{id:"lớp-propertiesmain",children:"Lớp PropertiesMain"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"PropertiesMain"}),' là bộ điều phối cấp cao chịu trách nhiệm tổng hợp cây token thiết kế toàn cầu. Nó quản lý toàn bộ vòng đời của các token "chính" (main) — từ việc khám phá hệ thống tệp và đọc dữ liệu thô đến việc chuyển đổi ngữ nghĩa nhiều giai đoạn và hợp nhất phân cấp. Bằng cách trừu tượng hóa các phức tạp của việc tải thuộc tính mô-đun, nó cung cấp một điểm nhập thống nhất để có được các cấu hình thiết kế đã được phân giải đầy đủ và chuẩn hóa.']}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Điều phối quy trình tự động"})," — Tích hợp nhiều tiện ích (",n.jsx(h.code,{children:"Import"}),", ",n.jsx(h.code,{children:"Standard"}),", ",n.jsx(h.code,{children:"Convector"}),") vào một chuỗi tải gắn kết duy nhất."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khám phá tập trung vào Thiết kế"})," — Cung cấp ",n.jsx(h.code,{children:"PropertiesPath"})," để tự động định vị và xử lý các token cho tất cả các chủ đề thiết kế đang hoạt động."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Hợp nhất cấu hình linh hoạt"})," — Hỗ trợ thay thế nóng hoặc xếp lớp các cài đặt lên cây toàn cầu thông qua đồng bộ hóa đệ quy sâu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Thực thi tính toàn vẹn cấu trúc"})," — Tự động áp dụng bao bọc cấu trúc và dấu phân cách để đảm bảo các token được phân loại và truy cập chính xác."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Đồng bộ hóa trạng thái nội bộ"})," — Bảo toàn các cờ nội bộ của engine (các thuộc tính bắt đầu bằng ",n.jsx(h.code,{children:"_"}),") trong quá trình cập nhật cấu hình."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(h.code,{children:"PropertiesMain(path)"}),"."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"path: PropertiesPath"})," — một thực thể của lớp chịu trách nhiệm khám phá hệ thống tệp và phân giải đường dẫn."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { PropertiesMain, PropertiesPath } from '@dxtmisha/scripts'

// 1. Khởi tạo trình quản lý đường dẫn tiên quyết
const pathManager = new PropertiesPath(['packages', 'tokens'])

// 2. Tạo bộ điều phối token chính
const main = new PropertiesMain(pathManager)

// 3. Phân giải cây thuộc tính toàn cầu hoàn chỉnh
const globalTokens = main.get()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"get(): PropertyList"})," — thực hiện quy trình chuyển đổi đầy đủ và trả về tất cả các token chính đã được phân giải."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getBySettings(list): PropertyList"})," — hợp nhất một cụm cài đặt tùy chỉnh vào cây token toàn cầu."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"quy-trình-chuyển-đổi-toàn-cầu-global-transformation-pipeline",children:"Quy trình Chuyển đổi Toàn cầu (Global Transformation Pipeline)"}),`
`,n.jsxs(h.p,{children:["Khi ",n.jsx(h.code,{children:"get()"})," được gọi, ",n.jsx(h.code,{children:"PropertiesMain"})," sẽ thực thi chuỗi hành động sau cho mọi thiết kế được khám phá:"]}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Đọc"}),": Lấy dữ liệu thô từ hệ thống tệp bằng ",n.jsx(h.code,{children:"PropertiesTool"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Chuyển đổi ngữ nghĩa"}),": Truyền dữ liệu qua ",n.jsx(h.code,{children:"PropertiesConvector"})," để chuyển đổi các giá trị thô thành các token."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Chuẩn hóa"}),": Chuẩn hóa cấu trúc thông qua ",n.jsx(h.code,{children:"PropertiesStandard"})," để đảm bảo hình dạng đối tượng nhất quán."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phân giải liên kết"}),": Sử dụng ",n.jsx(h.code,{children:"PropertiesImport"})," để lấy và hợp nhất đệ quy mọi tham chiếu tệp bên ngoài."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Hoàn thiện cấu trúc"}),": Nếu cần, nó sẽ tách các khóa qua ",n.jsx(h.code,{children:"PropertiesSeparator"})," và áp dụng ",n.jsx(h.code,{children:"PropertiesWrap"})," để tổ chức các token vào các vùng chứa phân cấp cuối cùng của chúng."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp thống nhất"}),": Kết hợp dữ liệu đã xử lý từ tất cả các thiết kế vào một ",n.jsx(h.code,{children:"PropertyList"})," duy nhất, trong đó các khóa đại diện cho tên thiết kế cấp cao nhất."]}),`
`]})]})}function a(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{a as default};
