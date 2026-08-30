import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesValues - Giá trị thuộc tính`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiesvalues`,children:`Lớp PropertiesValues`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesValues`}),` cung cấp các phương thức hỗ trợ để xác thực và chuẩn hóa các giá trị thuộc tính (token). Nó chịu trách nhiệm nhận dạng các định dạng dữ liệu (màu sắc, giá trị đầy đủ) và đưa chúng về một tiêu chuẩn thống nhất trước khi sử dụng trong việc tạo kiểu.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nhận dạng điểm đánh dấu`}),` — xác định các giá trị được đánh dấu là "đầy đủ" (không yêu cầu xử lý thêm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác thực màu sắc`}),` — kiểm tra các chuỗi theo định dạng HEX (bao gồm cả độ trong suốt).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa kiểu`}),` — tự động chuyển đổi các giá trị số thành chuỗi để đảm bảo tính nhất quán.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Làm sạch dữ liệu`}),` — loại bỏ các điểm đánh dấu hệ thống trước khi sử dụng giá trị cuối cùng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này chỉ chứa các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

// Truy cập các phương thức tĩnh
const isFull = PropertiesValues.isFull('=someValue')
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`isfull`,children:(0,c.jsx)(t.code,{children:`isFull`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem một giá trị chuỗi có bắt đầu bằng điểm đánh dấu đặc biệt `,(0,c.jsx)(t.code,{children:`=`}),` (dấu bằng) hay không. Điểm đánh dấu này báo hiệu cho hệ thống rằng giá trị đó là cuối cùng và không yêu cầu xử lý tham chiếu hoặc các chuyển đổi khác.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: PropertyItemPartial['value']`}),` — giá trị thuộc tính cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu giá trị được đánh dấu là đầy đủ.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = PropertiesValues.isFull('=100%');
// Kết quả: true
`})}),`
`,(0,c.jsx)(t.h3,{id:`iscolor`,children:(0,c.jsx)(t.code,{children:`isColor`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem chuỗi được cung cấp có phải là màu HEX hợp lệ hay không (bắt đầu bằng biểu tượng `,(0,c.jsx)(t.code,{children:`#`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: PropertyItemPartial['__c']`}),` — giá trị cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu chuỗi giống với màu HEX.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const isHex = PropertiesValues.isColor('#ff0000');
// Kết quả: true
`})}),`
`,(0,c.jsx)(t.h3,{id:`iscolorwithopacity`,children:(0,c.jsx)(t.code,{children:`isColorWithOpacity`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một kiểm tra chuyên biệt cho các màu HEX có kênh alpha. Nó kiểm tra xem chuỗi có khớp với định dạng HEX tám chữ số hay không (ví dụ: `,(0,c.jsx)(t.code,{children:`#rrggbbaa`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: PropertyItemPartial['__c']`}),` — giá trị cần xác minh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu đó là màu có độ trong suốt.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const isTrans = PropertiesValues.isColorWithOpacity('#ff000080');
// Kết quả: true
`})}),`
`,(0,c.jsx)(t.h3,{id:`revalue`,children:(0,c.jsx)(t.code,{children:`reValue`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuẩn hóa giá trị để sử dụng tiếp. Nếu giá trị được đánh dấu là "đầy đủ", điểm đánh dấu `,(0,c.jsx)(t.code,{children:`=`}),` sẽ bị loại bỏ. Nếu giá trị là một số, nó sẽ được chuyển đổi thành chuỗi.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: PropertyItemPartial['value']`}),` — giá trị thuộc tính ban đầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`PropertyItemPartial['value']`}),` — giá trị chuỗi (hoặc đối tượng ban đầu) đã được chuẩn hóa.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const val1 = PropertiesValues.reValue('=12px'); // '12px'
const val2 = PropertiesValues.reValue(24); // '24'
`})}),`
`,(0,c.jsx)(t.h3,{id:`getexpfull`,children:(0,c.jsx)(t.code,{children:`getExpFull`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về biểu thức chính quy được sử dụng để xác định điểm đánh dấu giá trị đầy đủ.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`RegExp`}),` — biểu thức chính quy `,(0,c.jsx)(t.code,{children:`/^=/`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const regex = PropertiesValues.getExpFull();
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`quy-trình-chuẩn-hóa-giá-trị-value-normalization-process`,children:`Quy trình chuẩn hóa giá trị (Value Normalization Process)`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra tính "đầy đủ"`}),`: Phương thức `,(0,c.jsx)(t.code,{children:`isFull`}),` xác định xem có nên bỏ qua giai đoạn xử lý tham chiếu hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định kiểu`}),`: Tất cả các số được chuyển đổi thành kiểu chuỗi thông qua `,(0,c.jsx)(t.code,{children:`reValue`}),` để tránh lỗi khi nối chuỗi trong CSS/SCSS.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lọc`}),`: Các điểm đánh dấu điều khiển (như `,(0,c.jsx)(t.code,{children:`=`}),`) được loại bỏ khỏi chuỗi cuối cùng để ngăn chúng xuất hiện trong mã CSS kết quả.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(t.h3,{id:`xác-thực-và-làm-sạch-dữ-liệu-đầu-vào`,children:`Xác thực và làm sạch dữ liệu đầu vào`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesValues } from '@dxtmisha/scripts'

const rawValue = '=rgba(0,0,0,0.5)'

if (PropertiesValues.isFull(rawValue)) {
  const cleanValue = PropertiesValues.reValue(rawValue)
  console.log(cleanValue) // 'rgba(0,0,0,0.5)'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};