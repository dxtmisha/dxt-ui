import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/PropertiesStandard - Chuẩn hóa thuộc tính"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesstandard",children:"Lớp PropertiesStandard"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesStandard"}),' là cơ chế trung tâm để chuẩn hóa dữ liệu trong hệ thống thiết kế. Nhiệm vụ chính của nó là chuyển đổi dữ liệu đầu vào token "thô" (có thể được biểu diễn dưới dạng chuỗi, số hoặc đối tượng đơn giản hóa) thành một cấu trúc ',n.jsx(c.code,{children:"PropertyItem"})," được định kiểu nghiêm ngặt mà các công cụ khác của hệ thống có thể làm việc cùng."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa dữ liệu"})," — đảm bảo rằng mọi thuộc tính đều có một tập hợp các trường tiêu chuẩn (",n.jsx(c.code,{children:"value"}),", ",n.jsx(c.code,{children:"type"}),", ",n.jsx(c.code,{children:"index"}),", v.v.)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý đệ quy"})," — tự động chuẩn hóa các cấu trúc đối tượng lồng nhau."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động phát hiện kiểu"})," — cố gắng xác định kiểu thuộc tính dựa trên tên của nó (thông qua ",n.jsx(c.code,{children:"PropertiesTypes"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân tích thông minh"})," — phân biệt giữa các giá trị thông thường và các thuộc tính meta đặc biệt (bắt đầu bằng ",n.jsx(c.code,{children:"__"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất dữ liệu"})," — hợp nhất chính xác dữ liệu mới với dữ liệu hiện có, duy trì tính toàn vẹn của cấu trúc."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Lớp này cung cấp các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua ",n.jsx(c.code,{children:"new"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesStandard } from '@dxtmisha/scripts'

// Gọi một phương thức tĩnh
const standardized = PropertiesStandard.to(rawInput)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"to",children:n.jsx(c.code,{children:"to"})}),`
`,n.jsxs(c.p,{children:["Một phương thức tĩnh nhận dữ liệu thô hoặc danh sách thuộc tính và trả về một ",n.jsx(c.code,{children:"PropertyList"})," đã được chuẩn hóa hoàn toàn. Phương thức này lặp qua tất cả các phần tử, xác định khóa, kiểu và giá trị của chúng, đồng thời xử lý đệ quy các đối tượng lồng nhau."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"properties: PropertyListOrData"})," — dữ liệu thuộc tính đầu vào ở bất kỳ định dạng nào được hỗ trợ."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"PropertyList"})," — một đối tượng trong đó mọi phần tử đều được đưa về tiêu chuẩn ",n.jsx(c.code,{children:"PropertyItem"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const result = PropertiesStandard.to({
  'primary-color': '#007bff',
  'padding': { value: 16, type: 'size' }
});

/* Kết quả:
{
  'primary-color': { 
    value: '#007bff', 
    type: 'color', 
    index: 'primary-color' 
  },
  'padding': { 
    value: '16px', 
    type: 'size', 
    index: 'padding' 
  }
}
*/
`})}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"thuật-toán-chuẩn-hóa-getitem",children:"Thuật toán chuẩn hóa (getItem)"}),`
`,n.jsx(c.p,{children:"Khi xử lý từng phần tử, các bước sau được thực hiện:"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi đối tượng"}),": Phương thức ",n.jsx(c.code,{children:"toItem"})," kiểm tra kiểu giá trị đầu vào. Nếu là chuỗi hoặc mảng, nó sẽ được bọc trong một đối tượng ",n.jsx(c.code,{children:"{ value: ... }"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tách dữ liệu meta"}),": Phương thức ",n.jsx(c.code,{children:"getValueAndSpecial"})," tách giá trị hữu ích (",n.jsx(c.code,{children:"value"}),") khỏi các khóa điều khiển đặc biệt (ví dụ: ",n.jsx(c.code,{children:"__custom"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác định kiểu"}),": Nếu kiểu không được chỉ định rõ ràng, phương thức ",n.jsx(c.code,{children:"addType"})," cố gắng tính toán nó dựa trên tên khóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kiểm tra tính hoàn tất"}),": Phương thức ",n.jsx(c.code,{children:"addFull"})," thêm các thẻ ",n.jsx(c.code,{children:"fullName"})," hoặc ",n.jsx(c.code,{children:"fullValue"})," nếu dữ liệu không yêu cầu xử lý thêm (ví dụ: đối với các liên kết đã được phân giải)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi giá trị"}),": Thông qua ",n.jsx(c.code,{children:"addValue"}),", tất cả các giá trị số được chuyển đổi thành chuỗi, thêm đơn vị khi cần thiết."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Đăng ký chỉ mục (Index)"}),": Mỗi phần tử được gán một ",n.jsx(c.code,{children:"index"})," đã được làm sạch để phục vụ việc truy vết nhanh chóng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(c.h3,{id:"chuẩn-hóa-một-cấu-trúc-phức-tạp",children:"Chuẩn hóa một cấu trúc phức tạp"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesStandard } from '@dxtmisha/scripts'

const data = {
  header: {
    height: 60,
    background: '{color.white}'
  }
}

const standardData = PropertiesStandard.to(data)
// Tất cả các trường trong standardData.header.value hiện có cấu trúc PropertyItem chính xác
`})})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
