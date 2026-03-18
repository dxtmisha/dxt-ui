import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/PropertiesValues - Giá trị thuộc tính"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesvalues",children:"Lớp PropertiesValues"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesValues"})," cung cấp các phương thức hỗ trợ để xác thực và chuẩn hóa các giá trị thuộc tính (token). Nó chịu trách nhiệm nhận dạng các định dạng dữ liệu (màu sắc, giá trị đầy đủ) và đưa chúng về một tiêu chuẩn thống nhất trước khi sử dụng trong việc tạo kiểu."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nhận dạng điểm đánh dấu"}),' — xác định các giá trị được đánh dấu là "đầy đủ" (không yêu cầu xử lý thêm).']}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác thực màu sắc"})," — kiểm tra các chuỗi theo định dạng HEX (bao gồm cả độ trong suốt)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa kiểu"})," — tự động chuyển đổi các giá trị số thành chuỗi để đảm bảo tính nhất quán."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Làm sạch dữ liệu"})," — loại bỏ các điểm đánh dấu hệ thống trước khi sử dụng giá trị cuối cùng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Lớp này chỉ chứa các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua ",n.jsx(c.code,{children:"new"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Truy cập các phương thức tĩnh
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"isfull",children:n.jsx(c.code,{children:"isFull"})}),`
`,n.jsxs(c.p,{children:["Kiểm tra xem một giá trị chuỗi có bắt đầu bằng điểm đánh dấu đặc biệt ",n.jsx(c.code,{children:"="})," (dấu bằng) hay không. Điểm đánh dấu này báo hiệu cho hệ thống rằng giá trị đó là cuối cùng và không yêu cầu xử lý tham chiếu hoặc các chuyển đổi khác."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: PropertyItemPartial['value']"})," — giá trị thuộc tính cần xác minh."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})," — ",n.jsx(c.code,{children:"true"})," nếu giá trị được đánh dấu là đầy đủ."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const result = PropertiesValues.isFull('=100%');
// Kết quả: true
`})}),`
`,n.jsx(c.h3,{id:"iscolor",children:n.jsx(c.code,{children:"isColor"})}),`
`,n.jsxs(c.p,{children:["Kiểm tra xem chuỗi được cung cấp có phải là màu HEX hợp lệ hay không (bắt đầu bằng biểu tượng ",n.jsx(c.code,{children:"#"}),")."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: PropertyItemPartial['__c']"})," — giá trị cần xác minh."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})," — ",n.jsx(c.code,{children:"true"})," nếu chuỗi giống với màu HEX."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const isHex = PropertiesValues.isColor('#ff0000');
// Kết quả: true
`})}),`
`,n.jsx(c.h3,{id:"iscolorwithopacity",children:n.jsx(c.code,{children:"isColorWithOpacity"})}),`
`,n.jsxs(c.p,{children:["Một kiểm tra chuyên biệt cho các màu HEX có kênh alpha. Nó kiểm tra xem chuỗi có khớp với định dạng HEX tám chữ số hay không (ví dụ: ",n.jsx(c.code,{children:"#rrggbbaa"}),")."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: PropertyItemPartial['__c']"})," — giá trị cần xác minh."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})," — ",n.jsx(c.code,{children:"true"})," nếu đó là màu có độ trong suốt."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Kết quả: true
`})}),`
`,n.jsx(c.h3,{id:"revalue",children:n.jsx(c.code,{children:"reValue"})}),`
`,n.jsxs(c.p,{children:['Chuẩn hóa giá trị để sử dụng tiếp. Nếu giá trị được đánh dấu là "đầy đủ", điểm đánh dấu ',n.jsx(c.code,{children:"="})," sẽ bị loại bỏ. Nếu giá trị là một số, nó sẽ được chuyển đổi thành chuỗi."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: PropertyItemPartial['value']"})," — giá trị thuộc tính ban đầu."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"PropertyItemPartial['value']"})," — giá trị chuỗi (hoặc đối tượng ban đầu) đã được chuẩn hóa."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,n.jsx(c.h3,{id:"getexpfull",children:n.jsx(c.code,{children:"getExpFull"})}),`
`,n.jsx(c.p,{children:"Trả về biểu thức chính quy được sử dụng để xác định điểm đánh dấu giá trị đầy đủ."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"RegExp"})," — biểu thức chính quy ",n.jsx(c.code,{children:"/^=/"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-chuẩn-hóa-giá-trị-value-normalization-process",children:"Quy trình chuẩn hóa giá trị (Value Normalization Process)"}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:'Kiểm tra tính "đầy đủ"'}),": Phương thức ",n.jsx(c.code,{children:"isFull"})," xác định xem có nên bỏ qua giai đoạn xử lý tham chiếu hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Định kiểu"}),": Tất cả các số được chuyển đổi thành kiểu chuỗi thông qua ",n.jsx(c.code,{children:"reValue"})," để tránh lỗi khi nối chuỗi trong CSS/SCSS."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lọc"}),": Các điểm đánh dấu điều khiển (như ",n.jsx(c.code,{children:"="}),") được loại bỏ khỏi chuỗi cuối cùng để ngăn chúng xuất hiện trong mã CSS kết quả."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(c.h3,{id:"xác-thực-và-làm-sạch-dữ-liệu-đầu-vào",children:"Xác thực và làm sạch dữ liệu đầu vào"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function a(e={}){const{wrapper:c}={...h(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
