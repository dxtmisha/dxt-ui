import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/PropertiesPalette - Trình quản lý Bảng màu & Sắc độ"}),`
`,n.jsx(c.h1,{id:"lớp-propertiespalette",children:"Lớp PropertiesPalette"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesPalette"})," là một trình quản lý chuyên biệt để xử lý các token thiết kế liên quan đến màu sắc. Nó tập trung vào hai lĩnh vực chính: quản lý các bước độ bão hòa màu (sắc độ - shades) và theo dõi việc sử dụng thực tế của các màu trong bảng màu (palette) bên trong các biến chức năng. Bằng cách phân tích cách các màu sắc được tham chiếu trong toàn bộ hệ thống thiết kế, nó giúp đảm bảo rằng các định nghĩa chủ đề vẫn nhất quán và các biến CSS được tạo ra trỏ chính xác đến các mục bảng màu tương ứng của chúng."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá độ bão hòa"})," — Tự động trích xuất các mức độ sắc độ có sẵn (ví dụ: 50, 100, 200) từ cây thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Theo dõi sử dụng"})," — Xác định các màu bảng màu nào thực sự được ánh xạ tới các biến thành phần, hỗ trợ loại bỏ mã chết hoặc báo cáo kiểm tra."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ánh xạ nhận biết chủ đề (Theme-Aware Mapping)"})," — Phân giải các liên kết màu phức tạp, tính đến các ghi đè cụ thể của chủ đề (như ",n.jsx(c.code,{children:"basic"})," hoặc ",n.jsx(c.code,{children:"dark"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tổng hợp biến CSS"})," — Chuyển đổi minh bạch các tham chiếu màu nội bộ thành các tên biến CSS chuẩn hóa (ví dụ: ",n.jsx(c.code,{children:"--design-palette-theme-color"}),")."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"PropertiesPalette(items)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"items: PropertiesItems"})," — một thực thể của lớp điều phối chịu trách nhiệm duyệt và tìm kiếm cây thuộc tính."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

// 1. Chuẩn bị bộ điều phối tiên quyết
const manager = new PropertiesItems(allTokenData)

// 2. Tạo trình quản lý bảng màu
const palette = new PropertiesPalette(manager)

// 3. Trích xuất các sắc độ hoạt động hoặc các màu đã sử dụng
const shades = palette.getShade()
const usedColors = palette.getUsed()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"getshade",children:n.jsx(c.code,{children:"getShade"})}),`
`,n.jsx(c.p,{children:"Truy xuất danh sách các mức độ bão hòa có sẵn (sắc độ - shades) được nhóm theo thiết kế. Phương thức này quét toàn bộ cây thuộc tính để tìm các mục được phân loại cụ thể là 'shade' và trả về cấu trúc đã phân giải của chúng. Các sắc độ này thường đại diện cho thang điểm định số của độ bão hòa màu (ví dụ: 50, 100, 200) được sử dụng trong hệ thống thiết kế."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"PropertyPaletteList"})," — một đối tượng chuyên biệt trong đó các khóa là tên thiết kế và giá trị là các mảng token sắc độ màu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const shades = palette.getShade();
// Kết quả: { "basic": ["50", "100", ...], "premium": ["50", ...] }
`})}),`
`,n.jsx(c.h3,{id:"getused",children:n.jsx(c.code,{children:"getUsed"})}),`
`,n.jsx(c.p,{children:"Tạo một báo cáo toàn diện về tất cả các màu bảng màu hiện đang được sử dụng trong các biến chức năng trên toàn bộ hệ thống thiết kế. Nó lặp qua tất cả các token, xác định các tham chiếu biến CSS trỏ đến các mục bảng màu và ánh xạ chúng tới các tên biến CSS được tạo ra. Điều này rất cần thiết để kiểm tra việc sử dụng màu sắc và xác định các mục bảng màu không được sử dụng."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"PropertyPaletteUsed[]"})," — một mảng các đối tượng, mỗi đối tượng chứa tên biến chức năng và tên biến CSS tương ứng được dẫn xuất từ bảng màu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const report = palette.getUsed();
/* Kết quả: 
[
  { "name": "primaryBackground", "value": ["--basic-palette-basic-blue-50"] }
] 
*/
`})}),`
`,n.jsx(c.h3,{id:"getfocusused",children:n.jsx(c.code,{children:"getFocusUsed"})}),`
`,n.jsx(c.p,{children:"Phân giải đệ quy một giá trị thuộc tính cụ thể để xác định nguồn bảng màu cuối cùng của nó. Phương thức tiện ích này được sử dụng để theo dõi các liên kết qua nhiều lớp trừu tượng (chẳng hạn như các biến thành phần trỏ đến màu chủ đề, vốn lại trỏ đến các sắc độ bảng màu)."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"list: PropertyItem['value'][]"})," — danh sách các giá trị bảng màu đã biết để kiểm tra trong quá trình phân giải."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"design: string"})," — tên của chủ đề thiết kế hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"component: string"})," — tên của ngữ cảnh thành phần đang được phân giải."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: string"})," — giá trị thô hoặc liên kết (ví dụ: ",n.jsx(c.code,{children:"{color.primary}"}),") để truy xuất nguồn gốc trở lại bảng màu."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string | undefined"})," — chuỗi giá trị đã phân giải cuối cùng nếu nó dẫn đến một mục bảng màu; nếu không sẽ là ",n.jsx(c.code,{children:"undefined"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const source = palette.getFocusUsed(
  paletteValueList, 
  'basic', 
  'button', 
  '{color.primary}'
);
`})}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"luồng-phân-giải-sử-dụng-màu-sắc-the-color-usage-resolution-flow",children:"Luồng Phân giải Sử dụng Màu sắc (The Color Usage Resolution Flow)"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"PropertiesPalette"})," thực hiện phân tích sâu về cách màu sắc truyền từ bảng màu đến các thành phần:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Duyệt cây"}),": Sử dụng ",n.jsx(c.code,{children:"PropertiesItems.each()"}),", lớp sẽ truy cập mọi nút trong hệ thống thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lọc biến"}),": Nó nhắm mục tiêu cụ thể vào các mục thuộc loại ",n.jsx(c.code,{children:"var"})," không phải là loại ",n.jsx(c.code,{children:"color"}),", nhưng giữ các giá trị chuỗi trông giống như các liên kết màu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải liên kết đệ quy"}),": Khi tìm thấy một ứng cử viên, ",n.jsx(c.code,{children:"getFocusUsed()"})," sẽ phân giải mọi liên kết trung gian (ví dụ: ",n.jsx(c.code,{children:"primary"})," -> ",n.jsx(c.code,{children:"theme.brand.main"})," -> ",n.jsx(c.code,{children:"palette.blue.50"}),") cho đến khi nó đạt đến định nghĩa bảng màu thô hoặc xác nhận liên kết đó không phải bảng màu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phát hiện chủ đề"}),": Nó kiểm tra hệ thống phân cấp (",n.jsx(c.code,{children:"parents"}),") để xác định xem màu sắc có thuộc về một khối chủ đề cụ thể hay không, cho phép nó đặt tên chính xác cho biến CSS kết quả (ví dụ: thêm tên chủ đề vào trước)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tổng hợp dữ liệu"}),": Kết quả được nhóm theo tên biến, cung cấp một bản đồ rõ ràng về các token chức năng nào tiêu thụ màu sắc bảng màu nào."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(c.h3,{id:"trích-xuất-sắc-độ-và-cách-sử-dụng",children:"Trích xuất sắc độ và Cách sử dụng"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesPalette, PropertiesItems } from '@dxtmisha/scripts'

const manager = new PropertiesItems(allTokenData)
const palette = new PropertiesPalette(manager)

// 1. Lấy các sắc độ có sẵn
const shades = palette.getShade()

// 2. Quét các màu đã sử dụng trong các thành phần
const report = palette.getUsed()
`})}),`
`,n.jsx(c.h3,{id:"phân-giải-liên-kết-thủ-công",children:"Phân giải liên kết thủ công"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const isPaletteValue = palette.getFocusUsed(
  paletteValueList, 
  'basic', 
  'button', 
  '{color.primary}'
)
`})})]})}function a(t={}){const{wrapper:c}={...e(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{a as default};
