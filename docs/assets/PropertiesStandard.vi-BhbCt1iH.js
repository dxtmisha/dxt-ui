import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesStandard - Chuẩn hóa thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesstandard`,children:`Lớp PropertiesStandard`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),` là cơ chế trung tâm để chuẩn hóa dữ liệu trong hệ thống thiết kế. Nhiệm vụ chính của nó là chuyển đổi dữ liệu đầu vào token "thô" (có thể được biểu diễn dưới dạng chuỗi, số hoặc đối tượng đơn giản hóa) thành một cấu trúc `,(0,c.jsx)(n.code,{children:`PropertyItem`}),` được định kiểu nghiêm ngặt mà các công cụ khác của hệ thống có thể làm việc cùng.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa dữ liệu`}),` — đảm bảo rằng mọi thuộc tính đều có một tập hợp các trường tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),`, `,(0,c.jsx)(n.code,{children:`index`}),`, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý đệ quy`}),` — tự động chuẩn hóa các cấu trúc đối tượng lồng nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động phát hiện kiểu`}),` — cố gắng xác định kiểu thuộc tính dựa trên tên của nó (thông qua `,(0,c.jsx)(n.code,{children:`PropertiesTypes`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích thông minh`}),` — phân biệt giữa các giá trị thông thường và các thuộc tính meta đặc biệt (bắt đầu bằng `,(0,c.jsx)(n.code,{children:`__`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất dữ liệu`}),` — hợp nhất chính xác dữ liệu mới với dữ liệu hiện có, duy trì tính toàn vẹn của cấu trúc.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này cung cấp các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesStandard } from '@dxtmisha/scripts'

// Gọi một phương thức tĩnh
const standardized = PropertiesStandard.to(rawInput)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức tĩnh nhận dữ liệu thô hoặc danh sách thuộc tính và trả về một `,(0,c.jsx)(n.code,{children:`PropertyList`}),` đã được chuẩn hóa hoàn toàn. Phương thức này lặp qua tất cả các phần tử, xác định khóa, kiểu và giá trị của chúng, đồng thời xử lý đệ quy các đối tượng lồng nhau.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyListOrData`}),` — dữ liệu thuộc tính đầu vào ở bất kỳ định dạng nào được hỗ trợ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList`}),` — một đối tượng trong đó mọi phần tử đều được đưa về tiêu chuẩn `,(0,c.jsx)(n.code,{children:`PropertyItem`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const result = PropertiesStandard.to({
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
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`thuật-toán-chuẩn-hóa-getitem`,children:`Thuật toán chuẩn hóa (getItem)`}),`
`,(0,c.jsx)(n.p,{children:`Khi xử lý từng phần tử, các bước sau được thực hiện:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi đối tượng`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`toItem`}),` kiểm tra kiểu giá trị đầu vào. Nếu là chuỗi hoặc mảng, nó sẽ được bọc trong một đối tượng `,(0,c.jsx)(n.code,{children:`{ value: ... }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tách dữ liệu meta`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`getValueAndSpecial`}),` tách giá trị hữu ích (`,(0,c.jsx)(n.code,{children:`value`}),`) khỏi các khóa điều khiển đặc biệt (ví dụ: `,(0,c.jsx)(n.code,{children:`__custom`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định kiểu`}),`: Nếu kiểu không được chỉ định rõ ràng, phương thức `,(0,c.jsx)(n.code,{children:`addType`}),` cố gắng tính toán nó dựa trên tên khóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra tính hoàn tất`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`addFull`}),` thêm các thẻ `,(0,c.jsx)(n.code,{children:`fullName`}),` hoặc `,(0,c.jsx)(n.code,{children:`fullValue`}),` nếu dữ liệu không yêu cầu xử lý thêm (ví dụ: đối với các liên kết đã được phân giải).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi giá trị`}),`: Thông qua `,(0,c.jsx)(n.code,{children:`addValue`}),`, tất cả các giá trị số được chuyển đổi thành chuỗi, thêm đơn vị khi cần thiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký chỉ mục (Index)`}),`: Mỗi phần tử được gán một `,(0,c.jsx)(n.code,{children:`index`}),` đã được làm sạch để phục vụ việc truy vết nhanh chóng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`chuẩn-hóa-một-cấu-trúc-phức-tạp`,children:`Chuẩn hóa một cấu trúc phức tạp`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesStandard } from '@dxtmisha/scripts'

const data = {
  header: {
    height: 60,
    background: '{color.white}'
  }
}

const standardData = PropertiesStandard.to(data)
// Tất cả các trường trong standardData.header.value hiện có cấu trúc PropertyItem chính xác
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};