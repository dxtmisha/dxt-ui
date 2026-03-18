import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/Formatters - Tiện ích Định dạng Dữ liệu"}),`
`,n.jsx(c.h1,{id:"lớp-formatters",children:"Lớp Formatters"}),`
`,n.jsxs(c.p,{children:["Một lớp chuyên dụng để định dạng danh sách dữ liệu dựa trên cấu hình được cung cấp. Nó đóng vai trò như một cầu nối giữa dữ liệu thô và các chuỗi văn bản đã được địa phương hóa, dễ đọc, tận dụng cơ chế singleton ",n.jsx(c.code,{children:"GeoIntl"})," để đảm bảo tính nhất quán trong định dạng trên các ngôn ngữ khác nhau."]}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cấu hình khai báo"})," — Định nghĩa các quy tắc định dạng một lần và áp dụng chúng cho toàn bộ tập dữ liệu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ nhiều kiểu dữ liệu"})," — Hỗ trợ tích hợp cho tiền tệ, ngày tháng, tên, số, số nhiều và các đơn vị đo lường."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Biến đổi tùy chỉnh"})," — Khả năng cung cấp các hàm riêng cho các nhu cầu định dạng đặc thù."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"An toàn kiểu dữ liệu (Type Safety)"})," — Hỗ trợ đầy đủ TypeScript cho các mục dữ liệu, các tùy chọn và danh sách kết quả đã được định dạng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động tạo khóa (Key Generation)"})," — Tự động thêm các giá trị đã định dạng vào các mục với hậu tố ",n.jsx(c.code,{children:"Format"})," (ví dụ: ",n.jsx(c.code,{children:"price"})," trở thành ",n.jsx(c.code,{children:"priceFormat"}),")."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"Formatters(options, list)"}),"."]}),`
`,n.jsx(c.h3,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"Options extends FormattersOptionsList"})," — kiểu của các tùy chọn định dạng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"List extends FormattersList<FormattersListItem> | FormattersListItem"})," — kiểu dữ liệu đầu vào (mảng hoặc một mục duy nhất)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"Item extends (List extends any[] ? List[number] : List)"})," — kiểu của một mục duy nhất trong danh sách."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options: Options"})," — tùy chọn định dạng cho mỗi cột/thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"list?: List"})," — danh sách hoặc mục dữ liệu ban đầu để định dạng."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { Formatters } from '@dxtmisha/functional-basic'

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
`,n.jsx(c.h2,{id:"xử-lý-dữ-liệu",children:"Xử lý dữ liệu"}),`
`,n.jsx(c.h3,{id:"to",children:n.jsx(c.code,{children:"to"})}),`
`,n.jsx(c.p,{children:"Xử lý dữ liệu và trả về kết quả. Nếu đầu vào là một mảng, nó sẽ trả về một mảng mới gồm các mục đã được bổ sung dữ liệu. Nếu đầu vào là một mục duy nhất, nó sẽ trả về chính mục đó với các trường đã định dạng."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"FormattersListColumns<Item, Options> | FormattersListColumnItem<Item, Options>"})," — dữ liệu đã được bổ sung các thuộc tính ",n.jsx(c.code,{children:"*Format"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const result = formatter.to()
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
`,n.jsx(c.h2,{id:"truy-xuất-và-quản-lý-dữ-liệu",children:"Truy xuất và quản lý dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"is(): boolean"})," — Kiểm tra xem danh sách/mục đã được thiết lập chưa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isArray(): boolean"})," — Kiểm tra xem dữ liệu hiện tại có phải là một mảng không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"length(): number"})," — Trả về số lượng bản ghi trong danh sách."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getList(): Item[]"})," — Trả về danh sách dữ liệu hiện tại dưới dạng mảng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getOptions(): Options"})," — Trả về cấu hình định dạng hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setList(list?: List): this"})," — Cập nhật dữ liệu cần định dạng và trả về thực thể để gọi chuỗi lệnh."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cấu-trúc-cấu-hình",children:"Cấu trúc cấu hình"}),`
`,n.jsxs(c.p,{children:["Đối tượng cấu hình được truyền vào hàm khởi tạo là một bản đồ (map), nơi mỗi khóa tương ứng với tên một thuộc tính trong dữ liệu của bạn. Mỗi giá trị phải tuân theo cấu trúc ",n.jsx(c.code,{children:"FormattersOptionsItem"}),"."]}),`
`,n.jsx(c.h3,{id:"cấu-trúc-mục-chính",children:"Cấu trúc mục chính"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`{
  // 1. Chỉ định kiểu định dạng
  type: 'currency' | 'date' | 'name' | 'number' | 'plural' | 'unit',

  // 2. Truyền các tham số dành riêng cho kiểu tại đây
  options: { ... },

  // 3. Hoặc sử dụng một hàm tùy chỉnh (ghi đè logic của kiểu)
  transformation: (value, item, options) => string
}
`})}),`
`,n.jsx(c.h2,{id:"các-tham-số-cụ-thể",children:"Các tham số cụ thể"}),`
`,n.jsxs(c.p,{children:["Dưới đây là các tham số có sẵn bên trong thuộc tính ",n.jsx(c.strong,{children:n.jsx(c.code,{children:"options"})})," cho từng kiểu."]}),`
`,n.jsxs(c.h3,{id:"tiền-tệ-currency",children:["Tiền tệ (",n.jsx(c.code,{children:"currency"}),")"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"currencyPropName?: string"})," — Thuộc tính trong mục chứa mã tiền tệ (mặc định là ",n.jsx(c.code,{children:"item.currency"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: string | Intl.NumberFormatOptions"})," — Mã tiền tệ cố định hoặc các tùy chọn ",n.jsx(c.code,{children:"Intl"})," đầy đủ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"numberOnly?: boolean"})," — Nếu là ",n.jsx(c.code,{children:"true"}),", chỉ trả về số đã định dạng mà không có ký hiệu tiền tệ."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"ngày-tháng-date",children:["Ngày tháng (",n.jsx(c.code,{children:"date"}),")"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type?: GeoDate"})," — Kiểu thiết lập sẵn: ",n.jsx(c.code,{children:"full"}),", ",n.jsx(c.code,{children:"datetime"}),", ",n.jsx(c.code,{children:"date"}),", ",n.jsx(c.code,{children:"year-month"}),", ",n.jsx(c.code,{children:"year"}),", ",n.jsx(c.code,{children:"month"}),", ",n.jsx(c.code,{children:"day"}),", ",n.jsx(c.code,{children:"day-month"}),", ",n.jsx(c.code,{children:"time"}),", ",n.jsx(c.code,{children:"hour-minute"}),", ",n.jsx(c.code,{children:"hour"}),", ",n.jsx(c.code,{children:"minute"}),", ",n.jsx(c.code,{children:"second"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — Các tùy chọn ngày tháng tiêu chuẩn của ",n.jsx(c.code,{children:"Intl"})," hoặc kiểu tháng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"hour24?: boolean"})," — Kết quả định dạng bắt buộc sử dụng định dạng 24 giờ nếu là ",n.jsx(c.code,{children:"true"}),"."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"tên-name",children:["Tên (",n.jsx(c.code,{children:"name"}),")"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"lastPropName?: string"})," — Trường cho họ (mặc định: ",n.jsx(c.code,{children:"lastName"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"firstPropName?: string"})," — Trường cho tên (mặc định: ",n.jsx(c.code,{children:"firstName"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"surname?: string"})," — Trường cho tên đệm (mặc định: ",n.jsx(c.code,{children:"surname"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"short?: boolean"})," — Có sử dụng định dạng rút gọn (viết tắt) hay không."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"số-number",children:["Số (",n.jsx(c.code,{children:"number"}),")"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: Intl.NumberFormatOptions"})," — Các tùy chọn số tiêu chuẩn của ",n.jsx(c.code,{children:"Intl"}),"."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"số-nhiều-plural",children:["Số nhiều (",n.jsx(c.code,{children:"plural"}),")"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"words: string"})," — Các dạng từ cách nhau bởi ",n.jsx(c.code,{children:"|"})," (ví dụ: ",n.jsx(c.code,{children:'"quả táo|quả táo"'}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: Intl.PluralRulesOptions"})," — Các thiết lập quy tắc số nhiều."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — Định dạng cho chính con số đó."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"đơn-vị-unit",children:["Đơn vị (",n.jsx(c.code,{children:"unit"}),")"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"unit: string | Intl.NumberFormatOptions"})," — Đơn vị cần hiển thị (ví dụ: ",n.jsx(c.code,{children:"'kilometer'"}),", ",n.jsx(c.code,{children:"'kilogram'"}),")."]}),`
`]})]})}function m(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
