import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/Formatters - Tiện ích Định dạng Dữ liệu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-formatters`,children:`Lớp Formatters`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp chuyên dụng để định dạng danh sách dữ liệu dựa trên cấu hình được cung cấp. Nó đóng vai trò như một cầu nối giữa dữ liệu thô và các chuỗi văn bản đã được địa phương hóa, dễ đọc, tận dụng cơ chế singleton `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` để đảm bảo tính nhất quán trong định dạng trên các ngôn ngữ khác nhau.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình khai báo`}),` — Định nghĩa các quy tắc định dạng một lần và áp dụng chúng cho toàn bộ tập dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ nhiều kiểu dữ liệu`}),` — Hỗ trợ tích hợp cho tiền tệ, ngày tháng, tên, số, số nhiều và các đơn vị đo lường.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biến đổi tùy chỉnh`}),` — Khả năng cung cấp các hàm riêng cho các nhu cầu định dạng đặc thù.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn kiểu dữ liệu (Type Safety)`}),` — Hỗ trợ đầy đủ TypeScript cho các mục dữ liệu, các tùy chọn và danh sách kết quả đã được định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động tạo khóa (Key Generation)`}),` — Tự động thêm các giá trị đã định dạng vào các mục với hậu tố `,(0,c.jsx)(n.code,{children:`Format`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`price`}),` trở thành `,(0,c.jsx)(n.code,{children:`priceFormat`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`Formatters(options, list)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Options extends FormattersOptionsList`}),` — kiểu của các tùy chọn định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`List extends FormattersList<FormattersListItem> | FormattersListItem`}),` — kiểu dữ liệu đầu vào (mảng hoặc một mục duy nhất).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Item extends (List extends any[] ? List[number] : List)`}),` — kiểu của một mục duy nhất trong danh sách.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Options`}),` — tùy chọn định dạng cho mỗi cột/thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: List`}),` — danh sách hoặc mục dữ liệu ban đầu để định dạng.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

// 1. Xác định các tùy chọn định dạng
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
  },
  weight: { 
    type: 'unit', 
    options: { unit: 'kilogram' } 
  },
  count: { 
    type: 'plural', 
    options: { words: 'quả táo|quả táo' } 
  },
  status: {
    transformation: (value: number) => value === 1 ? 'Đang hoạt động' : 'Ngừng hoạt động'
  }
}

// 2. Dữ liệu ban đầu (có thể là một mảng hoặc một đối tượng duy nhất)
const data = [
  {
    price: 100,
    currency: 'VND',
    created: '2024-03-07T12:00:00',
    name: 'Thanh',
    surname: 'Nguyễn',
    weight: 75,
    count: 5,
    status: 1
  }
]

// 3. Khởi tạo
const formatter = new Formatters(options, data)
`})}),`
`,(0,c.jsx)(n.h2,{id:`xử-lý-dữ-liệu`,children:`Xử lý dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Xử lý dữ liệu và trả về kết quả. Nếu đầu vào là một mảng, nó sẽ trả về một mảng mới gồm các mục đã được bổ sung dữ liệu. Nếu đầu vào là một mục duy nhất, nó sẽ trả về chính mục đó với các trường đã định dạng.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`FormattersListColumns<Item, Options> | FormattersListColumnItem<Item, Options>`}),` — dữ liệu đã được bổ sung các thuộc tính `,(0,c.jsx)(n.code,{children:`*Format`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const result = formatter.to()
/*
Kết quả (nếu là mảng): [
  { 
    id: 101, 
    price: 100, 
    currency: 'VND', 
    priceFormat: '100.000 ₫', 
    status: 1, 
    statusFormat: 'Đang hoạt động',
    ... 
  }
]

Kết quả (nếu là một mục duy nhất): { 
  price: 100, 
  priceFormat: '100.000 ₫', 
  ... 
}
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`truy-xuất-và-quản-lý-dữ-liệu`,children:`Truy xuất và quản lý dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): boolean`}),` — Kiểm tra xem danh sách/mục đã được thiết lập chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArray(): boolean`}),` — Kiểm tra xem dữ liệu hiện tại có phải là một mảng không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length(): number`}),` — Trả về số lượng bản ghi trong danh sách.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): Item[]`}),` — Trả về danh sách dữ liệu hiện tại dưới dạng mảng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): Options`}),` — Trả về cấu hình định dạng hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list?: List): this`}),` — Cập nhật dữ liệu cần định dạng và trả về thực thể để gọi chuỗi lệnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-cấu-hình`,children:`Cấu trúc cấu hình`}),`
`,(0,c.jsxs)(n.p,{children:[`Đối tượng cấu hình được truyền vào hàm khởi tạo là một bản đồ (map), nơi mỗi khóa tương ứng với tên một thuộc tính trong dữ liệu của bạn. Mỗi giá trị phải tuân theo cấu trúc `,(0,c.jsx)(n.code,{children:`FormattersOptionsItem`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-trúc-mục-chính`,children:`Cấu trúc mục chính`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`{
  // 1. Chỉ định kiểu định dạng
  type: 'currency' | 'date' | 'name' | 'number' | 'plural' | 'unit',

  // 2. Truyền các tham số dành riêng cho kiểu tại đây
  options: { ... },

  // 3. Hoặc sử dụng một hàm tùy chỉnh (ghi đè logic của kiểu)
  transformation: (value, item, options) => string
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-tham-số-cụ-thể`,children:`Các tham số cụ thể`}),`
`,(0,c.jsxs)(n.p,{children:[`Dưới đây là các tham số có sẵn bên trong thuộc tính `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`options`})}),` cho từng kiểu.`]}),`
`,(0,c.jsxs)(n.h3,{id:`tiền-tệ-currency`,children:[`Tiền tệ (`,(0,c.jsx)(n.code,{children:`currency`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyPropName?: string`}),` — Thuộc tính trong mục chứa mã tiền tệ (mặc định là `,(0,c.jsx)(n.code,{children:`item.currency`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string | Intl.NumberFormatOptions`}),` — Mã tiền tệ cố định hoặc các tùy chọn `,(0,c.jsx)(n.code,{children:`Intl`}),` đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — Nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, chỉ trả về số đã định dạng mà không có ký hiệu tiền tệ.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`ngày-tháng-date`,children:[`Ngày tháng (`,(0,c.jsx)(n.code,{children:`date`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Kiểu thiết lập sẵn: `,(0,c.jsx)(n.code,{children:`full`}),`, `,(0,c.jsx)(n.code,{children:`datetime`}),`, `,(0,c.jsx)(n.code,{children:`date`}),`, `,(0,c.jsx)(n.code,{children:`year-month`}),`, `,(0,c.jsx)(n.code,{children:`year`}),`, `,(0,c.jsx)(n.code,{children:`month`}),`, `,(0,c.jsx)(n.code,{children:`day`}),`, `,(0,c.jsx)(n.code,{children:`day-month`}),`, `,(0,c.jsx)(n.code,{children:`time`}),`, `,(0,c.jsx)(n.code,{children:`hour-minute`}),`, `,(0,c.jsx)(n.code,{children:`hour`}),`, `,(0,c.jsx)(n.code,{children:`minute`}),`, `,(0,c.jsx)(n.code,{children:`second`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Các tùy chọn ngày tháng tiêu chuẩn của `,(0,c.jsx)(n.code,{children:`Intl`}),` hoặc kiểu tháng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Kết quả định dạng bắt buộc sử dụng định dạng 24 giờ nếu là `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`tên-name`,children:[`Tên (`,(0,c.jsx)(n.code,{children:`name`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastPropName?: string`}),` — Trường cho họ (mặc định: `,(0,c.jsx)(n.code,{children:`lastName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`firstPropName?: string`}),` — Trường cho tên (mặc định: `,(0,c.jsx)(n.code,{children:`firstName`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Trường cho tên đệm (mặc định: `,(0,c.jsx)(n.code,{children:`surname`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Có sử dụng định dạng rút gọn (viết tắt) hay không.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`số-number`,children:[`Số (`,(0,c.jsx)(n.code,{children:`number`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Các tùy chọn số tiêu chuẩn của `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`số-nhiều-plural`,children:[`Số nhiều (`,(0,c.jsx)(n.code,{children:`plural`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Các dạng từ cách nhau bởi `,(0,c.jsx)(n.code,{children:`|`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`"quả táo|quả táo"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.PluralRulesOptions`}),` — Các thiết lập quy tắc số nhiều.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Định dạng cho chính con số đó.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`đơn-vị-unit`,children:[`Đơn vị (`,(0,c.jsx)(n.code,{children:`unit`}),`)`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unit: string | Intl.NumberFormatOptions`}),` — Đơn vị cần hiển thị (ví dụ: `,(0,c.jsx)(n.code,{children:`'kilometer'`}),`, `,(0,c.jsx)(n.code,{children:`'kilogram'`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};