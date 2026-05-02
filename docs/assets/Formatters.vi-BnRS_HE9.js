import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/Formatters - Tiện ích Định dạng Dữ liệu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-formatters`,children:`Lớp Formatters`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp chuyên dụng để định dạng danh sách dữ liệu dựa trên cấu hình được cung cấp. Nó đóng vai trò là cầu nối giữa dữ liệu thô và các chuỗi đã được bản địa hóa, dễ đọc, sử dụng singleton `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` để định dạng nhất quán trên các ngôn ngữ khác nhau.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình khai báo`}),` — Xác định các quy tắc định dạng một lần và áp dụng chúng cho toàn bộ tập dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ nhiều loại`}),` — Hỗ trợ tích hợp cho tiền tệ, ngày tháng, tên, số, số nhiều và đơn vị đo lường.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi tùy chỉnh`}),` — Khả năng cung cấp các hàm riêng của bạn cho các nhu cầu định dạng duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Typing`}),` — Hỗ trợ TypeScript đầy đủ cho các mục, tham số và danh sách đã định dạng kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động tạo khóa`}),` — Tự động thêm các giá trị đã định dạng vào các mục với hậu tố `,(0,c.jsx)(n.code,{children:`Format`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`price`}),` trở thành `,(0,c.jsx)(n.code,{children:`priceFormat`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi constructor `,(0,c.jsx)(n.code,{children:`Formatters(options, list)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`các-ràng-buộc-generic-generic-constraints`,children:`Các ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — kiểu tham số định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersListProp`}),` — kiểu dữ liệu đầu vào (mảng hoặc một mục).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends FormattersItemProp<List>`}),` — kiểu của một mục duy nhất trong danh sách.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — tham số định dạng cho mỗi cột/thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: List`}),` — danh sách dữ liệu ban đầu để định dạng.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

// 1. Xác định các tham số định dạng
const options = {
  price: { 
    type: 'currency', 
    options: { currencyPropName: 'currency' } 
  },
  created: { 
    type: 'date', 
    options: { type: 'datetime' } 
  },
  user: {
    type: 'name',
    options: { lastPropName: 'surname', firstPropName: 'name' }
  }
}

// 2. Dữ liệu thô
const data = [
  {
    price: 100,
    currency: 'VND',
    created: '2024-03-07T12:00:00',
    name: 'An',
    surname: 'Nguyễn'
  }
]

// 3. Khởi tạo
const formatter = new Formatters(options, data)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`xử-lý`,children:`Xử lý`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to(): FormattersReturn<List, Options>`}),` — Xử lý dữ liệu và trả về kết quả. Nếu đầu vào là một mảng, trả về một mảng mới gồm các mục đã được làm giàu. Nếu là một mục duy nhất — một đối tượng duy nhất. Thêm các thuộc tính với hậu tố `,(0,c.jsx)(n.code,{children:`Format`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list?: List): this`}),` — Cập nhật dữ liệu để định dạng. Hỗ trợ nối chuỗi.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Kiểm tra xem dữ liệu đã được thiết lập để xử lý hay chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArray(): boolean`}),` — Liệu dữ liệu hiện tại có phải là một mảng hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length(): number`}),` — Trả về số lượng bản ghi trong danh sách.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): FormattersList<Item>`}),` — Trả về danh sách hiện tại dưới dạng mảng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): Options`}),` — Trả về cấu hình định dạng hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-loại-định-dạng-và-tham-số`,children:`Các loại định dạng và Tham số`}),`
`,(0,c.jsxs)(n.p,{children:[`Cấu hình `,(0,c.jsx)(n.code,{children:`FormattersOptionsList`}),` là một từ điển trong đó các khóa tương ứng với tên thuộc tính trong dữ liệu (hỗ trợ ký hiệu chấm `,(0,c.jsx)(n.code,{children:`path.to.prop`}),`) và các giá trị là đối tượng `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`}),`.`]}),`
`,(0,c.jsxs)(n.h3,{id:`cấu-trúc-chung-của-formattersoptionsitem`,children:[`Cấu trúc chung của `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: FormattersType`}),` — Loại định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (value, item, options) => string`}),` — Hàm chuyển đổi tùy chỉnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Options`}),` — Đối tượng tham số, cấu trúc phụ thuộc vào `,(0,c.jsx)(n.code,{children:`type`}),` đã chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`mô-tả-chi-tiết-các-loại`,children:`Mô tả chi tiết các loại`}),`
`,(0,c.jsxs)(n.h4,{id:`1-tiền-tệ-currency`,children:[`1. Tiền tệ (`,(0,c.jsx)(n.code,{children:`currency`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Được sử dụng để hiển thị các giá trị tiền tệ đã được bản địa hóa.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyPropName?: string`}),` — Tên thuộc tính trong mục chứa mã tiền tệ (mặc định là `,(0,c.jsx)(n.code,{children:`currency`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string | Intl.NumberFormatOptions`}),` — Bạn có thể truyền một mã cố định (ví dụ: `,(0,c.jsx)(n.code,{children:`'VND'`}),`) hoặc một đối tượng cài đặt `,(0,c.jsx)(n.code,{children:`Intl.NumberFormat`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — Nếu `,(0,c.jsx)(n.code,{children:`true`}),`, chỉ trả về số đã định dạng mà không có biểu tượng tiền tệ.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`2-ngày-tháng-date`,children:[`2. Ngày tháng (`,(0,c.jsx)(n.code,{children:`date`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Định dạng ngày và giờ thông qua `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Định dạng đặt trước:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`full`}),` — Ngày và giờ đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`datetime`}),` — Ngày và giờ (không có giây).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date`}),` — Chỉ ngày.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`time`}),` — Chỉ giờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`year-month`}),`, `,(0,c.jsx)(n.code,{children:`year`}),`, `,(0,c.jsx)(n.code,{children:`month`}),`, `,(0,c.jsx)(n.code,{children:`day`}),`, `,(0,c.jsx)(n.code,{children:`day-month`}),`, `,(0,c.jsx)(n.code,{children:`hour-minute`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.DateTimeFormatOptions`}),` — Các tham số `,(0,c.jsx)(n.code,{children:`Intl`}),` tiêu chuẩn (ví dụ: `,(0,c.jsx)(n.code,{children:`month: 'long'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Nếu `,(0,c.jsx)(n.code,{children:`true`}),`, buộc sử dụng chế độ 24 giờ.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`3-tên-name`,children:[`3. Tên (`,(0,c.jsx)(n.code,{children:`name`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Kết hợp các phần của tên đầy đủ theo đúng thứ tự.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastPropName?: string`}),` — Trường cho họ (mặc định là `,(0,c.jsx)(n.code,{children:`lastName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstPropName?: string`}),` — Trường cho tên (mặc định là `,(0,c.jsx)(n.code,{children:`firstName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Trường cho tên đệm (mặc định là `,(0,c.jsx)(n.code,{children:`surname`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Nếu `,(0,c.jsx)(n.code,{children:`true`}),`, xuất họ và chữ cái đầu (ví dụ: "Nguyễn A.").`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`4-số-number`,children:[`4. Số (`,(0,c.jsx)(n.code,{children:`number`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Định dạng số tiêu chuẩn với phân tách chữ số.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Các tham số `,(0,c.jsx)(n.code,{children:`Intl`}),` (số chữ số thập phân, kiểu dáng, v.v.).`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`5-số-nhiều-plural`,children:[`5. Số nhiều (`,(0,c.jsx)(n.code,{children:`plural`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Chọn dạng từ đúng tùy thuộc vào số lượng.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Các dạng từ thông qua dấu phân cách `,(0,c.jsx)(n.code,{children:`|`}),`.`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Cho tiếng Việt: `,(0,c.jsx)(n.code,{children:`"quả táo|những quả táo"`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Cho tiếng Anh: `,(0,c.jsx)(n.code,{children:`"apple|apples"`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — Cài đặt quy tắc số nhiều.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Cài đặt định dạng cho chính con số được xuất trước từ.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`6-đơn-vị-đo-lường-unit`,children:[`6. Đơn vị đo lường (`,(0,c.jsx)(n.code,{children:`unit`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Thêm các đơn vị đo lường (km, kg, l).`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: string`}),` — Mã đơn vị đo lường (ví dụ: `,(0,c.jsx)(n.code,{children:`'kilometer'`}),`, `,(0,c.jsx)(n.code,{children:`'kilogram'`}),`, `,(0,c.jsx)(n.code,{children:`'liter'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Tham số định dạng cho phần số.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-dot-notation`,children:`Sử dụng Dot Notation`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options = {
  'user.profile.age': { type: 'number' }
}
const data = { user: { profile: { age: 25 } } }
const formatter = new Formatters(options, data)

const result = formatter.to()
// result.userProfileAgeFormat === "25"
`})}),`
`,(0,c.jsx)(n.h3,{id:`chuyển-đổi-tùy-chỉnh`,children:`Chuyển đổi tùy chỉnh`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const options = {
  status: {
    // Hàm tùy chỉnh có ưu tiên cao hơn type
    transformation: (value, item) => {
       return value === 'active' ? \`✅ \${item.name} đang trực tuyến\` : '❌ Ngoại tuyến'
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};