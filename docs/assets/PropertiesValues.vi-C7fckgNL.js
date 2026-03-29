import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesValues - Giá trị thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesvalues`,children:`Lớp PropertiesValues`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesValues`}),` cung cấp các phương thức hỗ trợ để xác thực và chuẩn hóa các giá trị thuộc tính (token). Nó chịu trách nhiệm nhận dạng các định dạng dữ liệu (màu sắc, giá trị đầy đủ) và đưa chúng về một tiêu chuẩn thống nhất trước khi sử dụng trong việc tạo kiểu.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận dạng điểm đánh dấu`}),` — xác định các giá trị được đánh dấu là "đầy đủ" (không yêu cầu xử lý thêm).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực màu sắc`}),` — kiểm tra các chuỗi theo định dạng HEX (bao gồm cả độ trong suốt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa kiểu`}),` — tự động chuyển đổi các giá trị số thành chuỗi để đảm bảo tính nhất quán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Làm sạch dữ liệu`}),` — loại bỏ các điểm đánh dấu hệ thống trước khi sử dụng giá trị cuối cùng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này chỉ chứa các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Truy cập các phương thức tĩnh
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`isfull`,children:(0,c.jsx)(n.code,{children:`isFull`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểm tra xem một giá trị chuỗi có bắt đầu bằng điểm đánh dấu đặc biệt `,(0,c.jsx)(n.code,{children:`=`}),` (dấu bằng) hay không. Điểm đánh dấu này báo hiệu cho hệ thống rằng giá trị đó là cuối cùng và không yêu cầu xử lý tham chiếu hoặc các chuyển đổi khác.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['value']`}),` — giá trị thuộc tính cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu giá trị được đánh dấu là đầy đủ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesValues.isFull('=100%');
// Kết quả: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`iscolor`,children:(0,c.jsx)(n.code,{children:`isColor`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểm tra xem chuỗi được cung cấp có phải là màu HEX hợp lệ hay không (bắt đầu bằng biểu tượng `,(0,c.jsx)(n.code,{children:`#`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['__c']`}),` — giá trị cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu chuỗi giống với màu HEX.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isHex = PropertiesValues.isColor('#ff0000');
// Kết quả: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`iscolorwithopacity`,children:(0,c.jsx)(n.code,{children:`isColorWithOpacity`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một kiểm tra chuyên biệt cho các màu HEX có kênh alpha. Nó kiểm tra xem chuỗi có khớp với định dạng HEX tám chữ số hay không (ví dụ: `,(0,c.jsx)(n.code,{children:`#rrggbbaa`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['__c']`}),` — giá trị cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu đó là màu có độ trong suốt.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Kết quả: true
`})}),`
`,(0,c.jsx)(n.h3,{id:`revalue`,children:(0,c.jsx)(n.code,{children:`reValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chuẩn hóa giá trị để sử dụng tiếp. Nếu giá trị được đánh dấu là "đầy đủ", điểm đánh dấu `,(0,c.jsx)(n.code,{children:`=`}),` sẽ bị loại bỏ. Nếu giá trị là một số, nó sẽ được chuyển đổi thành chuỗi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: PropertyItemPartial['value']`}),` — giá trị thuộc tính ban đầu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`PropertyItemPartial['value']`}),` — giá trị chuỗi (hoặc đối tượng ban đầu) đã được chuẩn hóa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getexpfull`,children:(0,c.jsx)(n.code,{children:`getExpFull`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về biểu thức chính quy được sử dụng để xác định điểm đánh dấu giá trị đầy đủ.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`RegExp`}),` — biểu thức chính quy `,(0,c.jsx)(n.code,{children:`/^=/`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-chuẩn-hóa-giá-trị-value-normalization-process`,children:`Quy trình chuẩn hóa giá trị (Value Normalization Process)`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra tính "đầy đủ"`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`isFull`}),` xác định xem có nên bỏ qua giai đoạn xử lý tham chiếu hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định kiểu`}),`: Tất cả các số được chuyển đổi thành kiểu chuỗi thông qua `,(0,c.jsx)(n.code,{children:`reValue`}),` để tránh lỗi khi nối chuỗi trong CSS/SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc`}),`: Các điểm đánh dấu điều khiển (như `,(0,c.jsx)(n.code,{children:`=`}),`) được loại bỏ khỏi chuỗi cuối cùng để ngăn chúng xuất hiện trong mã CSS kết quả.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`xác-thực-và-làm-sạch-dữ-liệu-đầu-vào`,children:`Xác thực và làm sạch dữ liệu đầu vào`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};