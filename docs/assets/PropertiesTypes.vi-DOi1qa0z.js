import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/PropertiesTypes - Các kiểu thuộc tính"}),`
`,n.jsx(e.h1,{id:"lớp-propertiestypes",children:"Lớp PropertiesTypes"}),`
`,n.jsxs(e.p,{children:["Lớp ",n.jsx(e.code,{children:"PropertiesTypes"})," đóng vai trò là một danh mục hệ thống và bộ phân tích cho các kiểu thuộc tính trong hệ thống thiết kế. Nhiệm vụ chính của nó là xác định danh mục thuộc tính (biến, bộ chọn, trạng thái, truy vấn truyền thông, v.v.) dựa trên các biểu tượng tiền tố đặc biệt hoặc các quy ước đặt tên khóa."]}),`
`,n.jsx(e.h2,{id:"ánh-xạ-biểu-tượng-và-kiểu",children:"Ánh xạ Biểu tượng và Kiểu"}),`
`,n.jsx(e.p,{children:"Hệ thống sử dụng các ánh xạ biểu tượng sang kiểu như sau:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$"})," — ",n.jsx(e.strong,{children:"var"})," (biến CSS)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"::"})," — ",n.jsx(e.strong,{children:"virtual"})," (phần tử ảo)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:":"})," — ",n.jsx(e.strong,{children:"selector"})," (bộ chọn SCSS)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"~"})," — ",n.jsx(e.strong,{children:"state"})," (trạng thái, ví dụ: :hover)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"#"})," — ",n.jsx(e.strong,{children:"subclass"})," (lớp con)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@@"})," — ",n.jsx(e.strong,{children:"linkClass"})," (liên kết đến một lớp)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@"})," — ",n.jsx(e.strong,{children:"link"})," (liên kết đến một token)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"&&"})," — ",n.jsx(e.strong,{children:"root"})," (SCSS @at-root)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"&"})," — ",n.jsx(e.strong,{children:"scss"})," (bộ chọn SCSS)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"--"})," — ",n.jsx(e.strong,{children:"none"})," (thuộc tính bị bỏ qua)"]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Lớp này chỉ chứa các phương thức tĩnh và không yêu cầu khởi tạo thông qua ",n.jsx(e.code,{children:"new"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Sử dụng các phương thức tĩnh
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,n.jsx(e.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(e.h3,{id:"isintype",children:n.jsx(e.code,{children:"isInType"})}),`
`,n.jsx(e.p,{children:"Kiểm tra xem kiểu thuộc tính hiện tại có nằm trong danh sách các kiểu được cho phép hay không. Được sử dụng để lọc các thuộc tính trong quá trình tạo các khối cụ thể (ví dụ: chỉ các truy vấn truyền thông)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: PropertyItem['_type']"})," — kiểu thuộc tính cần xác minh."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: PropertyType[]"})," — một mảng các kiểu được cho phép."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu kiểu khớp với một kiểu trong danh sách."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,n.jsx(e.h3,{id:"istypeinname",children:n.jsx(e.code,{children:"isTypeInName"})}),`
`,n.jsx(e.p,{children:"Xác định xem chuỗi tên (khóa) được cung cấp có chứa bất kỳ biểu tượng kiểu dành riêng nào ở đầu hay không."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên khóa thuộc tính."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu xác định được biểu tượng kiểu."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Kết quả: true
`})}),`
`,n.jsx(e.h3,{id:"ismedia",children:n.jsx(e.code,{children:"isMedia"})}),`
`,n.jsxs(e.p,{children:["Một kiểm tra chuyên biệt để xác định xem kiểu thuộc tính có liên quan đến các truy vấn truyền thông hay không (",n.jsx(e.code,{children:"media"})," hoặc ",n.jsx(e.code,{children:"media-max"}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: PropertyItem['_type']"})," — kiểu thuộc tính."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu đó là kiểu truyền thông."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,n.jsx(e.h3,{id:"gettypeinname",children:n.jsx(e.code,{children:"getTypeInName"})}),`
`,n.jsxs(e.p,{children:["Phương thức chính để trích xuất kiểu từ một tên khóa. Nếu tìm thấy một biểu tượng đặc biệt ở đầu khóa, phương thức sẽ trả về kiểu tương ứng của nó. Nếu không tìm thấy biểu tượng nhưng khóa chứa dấu phân cách ",n.jsx(e.code,{children:"|"}),", phần trước dấu phân cách sẽ được chuyển đổi sang kebab-case và được trả về làm kiểu."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên khóa thuộc tính."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"PropertyItem['_type']"})," — ID kiểu đã xác định hoặc ",n.jsx(e.code,{children:"null"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,n.jsx(e.h3,{id:"getbysymbol",children:n.jsx(e.code,{children:"getBySymbol"})}),`
`,n.jsx(e.p,{children:"Trả về tên kiểu được gán cho một biểu tượng hoặc chuỗi cụ thể."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — biểu tượng (ví dụ: ",n.jsx(e.code,{children:"$"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string | undefined"})," — tên kiểu (ví dụ: ",n.jsx(e.code,{children:"var"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,n.jsx(e.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(e.h3,{id:"cơ-chế-nhận-dạng-qua-regexp",children:"Cơ chế nhận dạng qua RegExp"}),`
`,n.jsxs(e.p,{children:["Việc tìm kiếm biểu tượng trong ",n.jsx(e.code,{children:"PropertiesTypes"})," được thực hiện thông qua một biểu thức chính quy động được tạo từ các khóa từ điển ",n.jsx(e.code,{children:"SYMBOLS"}),". Phương thức ",n.jsx(e.code,{children:"getExpSymbols"})," tạo ra một biểu thức để:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Tìm kiếm các biểu tượng dành riêng ở đầu chuỗi (ví dụ: ",n.jsx(e.code,{children:"@"}),", ",n.jsx(e.code,{children:"&&"}),", ",n.jsx(e.code,{children:"~"}),")."]}),`
`,n.jsxs(e.li,{children:["Tìm kiếm các kiểu tự định nghĩa được đặt tên trước một dấu gạch đứng (ví dụ: ",n.jsx(e.code,{children:"media|..."}),")."]}),`
`,n.jsxs(e.li,{children:["Nhóm các kết quả để trích xuất kiểu hiệu quả bằng phương thức ",n.jsx(e.code,{children:"getTypeInName"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(e.h3,{id:"xác-định-các-kiểu-trong-quá-trình-phân-tích-token",children:"Xác định các kiểu trong quá trình phân tích Token"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function p(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(h,{...c})}):h(c)}export{p as default};
