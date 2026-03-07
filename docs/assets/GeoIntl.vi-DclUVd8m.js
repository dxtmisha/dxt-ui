import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/GeoIntl - Quốc tế hóa (Intl)"}),`
`,n.jsx(e.h1,{id:"lớp-geointl",children:"Lớp GeoIntl"}),`
`,n.jsxs(e.p,{children:["Lớp bao đóng mạnh mẽ cho API ",n.jsx(e.code,{children:"Intl"})," của trình duyệt, được tích hợp với khả năng định vị địa lý của ",n.jsx(e.code,{children:"Geo"}),". Cung cấp định dạng số, tiền tệ, đơn vị đo lường, ngày giờ, tên và sắp xếp chuỗi theo ngôn ngữ — với tự động nhận diện vùng locale."]}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bộ nhớ đệm instance"})," — chỉ tạo một instance cho mỗi locale (Singleton theo locale)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Giao diện thống nhất"})," — tất cả thao tác định dạng qua một lớp thay vì gọi trực tiếp ",n.jsx(e.code,{children:"new Intl.*"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Định dạng ngày"})," — hệ thống linh hoạt với các kiểu được cài sẵn (",n.jsx(e.code,{children:"'date'"}),", ",n.jsx(e.code,{children:"'time'"}),", ",n.jsx(e.code,{children:"'datetime'"}),", ",n.jsx(e.code,{children:"'full'"}),", v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Thời gian tương đối"})," — ",n.jsx(e.code,{children:"relative"}),", ",n.jsx(e.code,{children:"relativeByValue"}),", ",n.jsx(e.code,{children:"relativeLimit"})," cho hiển thị ngày thân thiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tên và vùng"})," — định dạng tên đầy đủ theo quy chuẩn văn hóa (",n.jsx(e.code,{children:"fullName"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: string"})," — mã locale (ví dụ: ",n.jsx(e.code,{children:"'vi-VN'"}),", ",n.jsx(e.code,{children:"'en-US'"}),"). Mặc định là locale hiện tại của ",n.jsx(e.code,{children:"Geo"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = new GeoIntl()           // locale hiện tại
const intl2 = new GeoIntl('fr-FR')   // locale tiếng Pháp
const intl3 = GeoIntl.getInstance('de-DE') // qua factory method
`})}),`
`,n.jsx(e.h2,{id:"thông-tin-chung",children:"Thông tin chung"}),`
`,n.jsx(e.h3,{id:"getlocation",children:n.jsx(e.code,{children:"getLocation"})}),`
`,n.jsxs(e.p,{children:["Trả về chuỗi locale chuẩn (ví dụ: ",n.jsx(e.code,{children:"'vi-VN'"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.getLocation() // 'vi-VN'
`})}),`
`,n.jsx(e.h3,{id:"getfirstday",children:n.jsx(e.code,{children:"getFirstDay"})}),`
`,n.jsxs(e.p,{children:["Trả về ngày đầu tiên trong tuần của locale (",n.jsx(e.code,{children:"'Mon'"}),", ",n.jsx(e.code,{children:"'Sun'"}),", v.v.) — hữu ích khi xây dựng lịch."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`new GeoIntl('en-US').getFirstDay() // 'Sun'
new GeoIntl('vi-VN').getFirstDay() // 'Mon'
`})}),`
`,n.jsx(e.h2,{id:"tên-và-vùng",children:"Tên và Vùng"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsxs(e.p,{children:["Định dạng tên hiển thị của ngôn ngữ, vùng hoặc chữ viết qua ",n.jsx(e.code,{children:"Intl.DisplayNames"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — mã ngôn ngữ, quốc gia hoặc chữ viết (ví dụ: ",n.jsx(e.code,{children:"'en'"}),", ",n.jsx(e.code,{children:"'US'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?"})," — kiểu hiển thị: ",n.jsx(e.code,{children:"'language'"}),", ",n.jsx(e.code,{children:"'region'"}),", ",n.jsx(e.code,{children:"'script'"})," hoặc ",n.jsx(e.code,{children:"Intl.DisplayNamesOptions"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.display('en', 'language') // 'Tiếng Anh'
intl.display('US', 'region')   // 'Hoa Kỳ'
intl.display()                 // tên ngôn ngữ hiện tại
`})}),`
`,n.jsx(e.h3,{id:"languagename",children:n.jsx(e.code,{children:"languageName"})}),`
`,n.jsx(e.p,{children:"Trả về tên ngôn ngữ được địa phương hóa."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — mã ngôn ngữ hoặc quốc gia. Mặc định là locale hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?"})," — kiểu định dạng: ",n.jsx(e.code,{children:"'long'"}),", ",n.jsx(e.code,{children:"'short'"}),", ",n.jsx(e.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.languageName('fr')          // 'Tiếng Pháp'
intl.languageName('de', 'long')  // 'Tiếng Đức'
`})}),`
`,n.jsx(e.h3,{id:"countryname",children:n.jsx(e.code,{children:"countryName"})}),`
`,n.jsx(e.p,{children:"Trả về tên quốc gia được địa phương hóa."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: string"})," — mã quốc gia (ISO 3166, ví dụ: ",n.jsx(e.code,{children:"'DE'"}),", ",n.jsx(e.code,{children:"'US'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?"})," — kiểu định dạng: ",n.jsx(e.code,{children:"'long'"}),", ",n.jsx(e.code,{children:"'short'"}),", ",n.jsx(e.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.countryName('DE')   // 'Đức'
intl.countryName('US')   // 'Hoa Kỳ'
`})}),`
`,n.jsx(e.h3,{id:"fullname",children:n.jsx(e.code,{children:"fullName"})}),`
`,n.jsxs(e.p,{children:["Định dạng tên đầy đủ theo chuẩn văn hóa của locale. Thứ tự thành phần (tên/họ) được xác định bởi trường ",n.jsx(e.code,{children:"nameFormat"})," trong dữ liệu geo."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"last: string"})," — họ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"first: string"})," — tên."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"surname?: string"})," — tên đệm (tùy chọn)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"short?: boolean"})," — nếu ",n.jsx(e.code,{children:"true"}),", tất cả các phần sau phần đầu sẽ được viết tắt thành chữ cái đầu (",n.jsx(e.code,{children:"Nguyễn V. A."}),")."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.fullName('Nguyễn', 'Văn', 'An')        // 'Văn An Nguyễn' hoặc theo chuẩn locale
intl.fullName('Nguyễn', 'Văn', 'An', true)  // 'Nguyễn V. A.'
intl.fullName('Smith', 'John')              // 'John Smith'
`})}),`
`,n.jsx(e.h2,{id:"số-và-tiền-tệ",children:"Số và Tiền tệ"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsxs(e.p,{children:["Định dạng số theo locale qua ",n.jsx(e.code,{children:"Intl.NumberFormat"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — số cần định dạng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — tùy chọn bổ sung ",n.jsx(e.code,{children:"Intl.NumberFormat"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.number(1234567.89)                         // '1.234.567,89'
intl.number(0.005, { minimumFractionDigits: 2 }) // '0,01'
`})}),`
`,n.jsx(e.h3,{id:"decimal",children:n.jsx(e.code,{children:"decimal"})}),`
`,n.jsx(e.p,{children:"Trả về ký hiệu dấu thập phân cho locale hiện tại."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`new GeoIntl('vi-VN').decimal() // ','
new GeoIntl('en-US').decimal() // '.'
`})}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Định dạng số thành số tiền theo loại tiền tệ chỉ định."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — số tiền. Cũng chấp nhận chuỗi có mã tiền tệ ở cuối (",n.jsx(e.code,{children:"'1500 USD'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — mã tiền tệ (",n.jsx(e.code,{children:"'VND'"}),") hoặc ",n.jsx(e.code,{children:"Intl.NumberFormatOptions"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — nếu ",n.jsx(e.code,{children:"true"}),", chỉ xuất số mà không có ký hiệu tiền tệ. Mặc định: ",n.jsx(e.code,{children:"false"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.currency(1500, 'USD')           // '$1,500.00'
intl.currency(1500, 'EUR')           // '€1,500.00'
intl.currency('1500 GBP')            // '£1,500.00'
intl.currency(1500, 'USD', true)     // '1,500.00' (không có ký hiệu)
`})}),`
`,n.jsx(e.h3,{id:"currencysymbol",children:n.jsx(e.code,{children:"currencySymbol"})}),`
`,n.jsx(e.p,{children:"Trả về ký hiệu hoặc mã của đơn vị tiền tệ."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currency: string"})," — mã tiền tệ (ISO 4217, ví dụ: ",n.jsx(e.code,{children:"'USD'"}),", ",n.jsx(e.code,{children:"'EUR'"}),", ",n.jsx(e.code,{children:"'VND'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyDisplay?"})," — chế độ hiển thị: ",n.jsx(e.code,{children:"'symbol'"})," (mặc định), ",n.jsx(e.code,{children:"'code'"}),", ",n.jsx(e.code,{children:"'name'"}),", ",n.jsx(e.code,{children:"'narrowSymbol'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.currencySymbol('USD')             // '$'
intl.currencySymbol('USD', 'code')     // 'USD'
intl.currencySymbol('USD', 'name')     // 'đô la Mỹ'
`})}),`
`,n.jsx(e.h3,{id:"unit",children:n.jsx(e.code,{children:"unit"})}),`
`,n.jsxs(e.p,{children:["Định dạng số với đơn vị đo lường qua ",n.jsx(e.code,{children:"Intl.NumberFormat"})," với ",n.jsx(e.code,{children:"style: 'unit'"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — số. Cũng chấp nhận chuỗi có chữ viết tắt đơn vị (",n.jsx(e.code,{children:"'100 km'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — tên đơn vị (",n.jsx(e.code,{children:"'kilometer'"}),", ",n.jsx(e.code,{children:"'liter'"}),") hoặc tùy chọn đầy đủ."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.unit(100, 'kilometer')   // '100 km'
intl.unit(5, 'liter')         // '5 L'
intl.unit('100 km')           // '100 km'
`})}),`
`,n.jsx(e.h3,{id:"sizefile",children:n.jsx(e.code,{children:"sizeFile"})}),`
`,n.jsx(e.p,{children:"Tự động chuyển đổi và định dạng kích thước file, bắt đầu từ byte và tự động nâng đơn vị khi vượt quá 1024."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — kích thước tính bằng byte."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?"})," — đơn vị bắt đầu: ",n.jsx(e.code,{children:"'byte'"})," (mặc định), ",n.jsx(e.code,{children:"'kilobyte'"}),", ",n.jsx(e.code,{children:"'megabyte'"}),", ",n.jsx(e.code,{children:"'gigabyte'"}),", ",n.jsx(e.code,{children:"'terabyte'"}),", ",n.jsx(e.code,{children:"'petabyte'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.sizeFile(500)              // '500 byte'
intl.sizeFile(1536)             // '1,5 kB'
intl.sizeFile(1536 * 1024)      // '1,5 MB'
intl.sizeFile(2 * 1024 ** 3)    // '2 GB'
`})}),`
`,n.jsx(e.h3,{id:"percent",children:n.jsx(e.code,{children:"percent"})}),`
`,n.jsx(e.p,{children:"Định dạng số dưới dạng phần trăm. Nhận giá trị dưới dạng phân số (0–1)."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.percent(0.5)    // '50%'
intl.percent(0.007)  // '1%'
`})}),`
`,n.jsx(e.h3,{id:"percentby100",children:n.jsx(e.code,{children:"percentBy100"})}),`
`,n.jsxs(e.p,{children:["Định dạng số dưới dạng phần trăm, chia cho 100 trước. Hữu ích khi giá trị đã là ",n.jsx(e.code,{children:"50"})," thay vì ",n.jsx(e.code,{children:"0.5"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.percentBy100(50)   // '50%'
intl.percentBy100(7.5)  // '8%'
`})}),`
`,n.jsx(e.h3,{id:"plural",children:n.jsx(e.code,{children:"plural"})}),`
`,n.jsxs(e.p,{children:["Định dạng số với quy tắc số nhiều theo locale qua ",n.jsx(e.code,{children:"Intl.PluralRules"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — chuỗi các dạng từ phân cách bằng ",n.jsx(e.code,{children:"|"}),". Thứ tự: ",n.jsx(e.code,{children:"one|two|few|many|other"}),". Số lượng dạng phụ thuộc vào locale."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.PluralRulesOptions"})," — tùy chọn cho ",n.jsx(e.code,{children:"Intl.PluralRules"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — tùy chọn định dạng số."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.plural(1, 'apple|apples')     // '1 apple'
intl.plural(2, 'apple|apples')     // '2 apples'
intl.plural(100, 'apple|apples')   // '100 apples'
`})}),`
`,n.jsx(e.h2,{id:"ngày-và-giờ",children:"Ngày và Giờ"}),`
`,n.jsx(e.h3,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsxs(e.p,{children:["Định dạng ngày qua ",n.jsx(e.code,{children:"toLocaleString"})," với các kiểu định dạng được cài sẵn."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — ngày (đối tượng ",n.jsx(e.code,{children:"Date"}),", timestamp, hoặc chuỗi)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — kiểu cài sẵn: ",n.jsx(e.code,{children:"'date'"}),", ",n.jsx(e.code,{children:"'time'"}),", ",n.jsx(e.code,{children:"'datetime'"}),", ",n.jsx(e.code,{children:"'full'"}),", ",n.jsx(e.code,{children:"'month'"}),", v.v."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?"})," — kiểu tháng (",n.jsx(e.code,{children:"'short'"}),", ",n.jsx(e.code,{children:"'long'"}),", ",n.jsx(e.code,{children:"'narrow'"}),") hoặc ",n.jsx(e.code,{children:"Intl.DateTimeFormatOptions"})," tùy chỉnh."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — nếu ",n.jsx(e.code,{children:"true"}),", bắt buộc dùng định dạng 24 giờ."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const d = new Date('2024-03-07T08:15:00')
intl.date(d, 'date')      // '07/03/2024'
intl.date(d, 'time')      // '08:15'
intl.date(d, 'datetime')  // '07/03/2024, 08:15'
intl.date(d, 'date', 'long')         // '07 tháng 3, 2024'
intl.date(d, 'time', undefined, true) // '08:15' (bắt buộc 24h)
`})}),`
`,n.jsx(e.h3,{id:"time",children:n.jsx(e.code,{children:"time"})}),`
`,n.jsxs(e.p,{children:["Hàm rút gọn cho ",n.jsx(e.code,{children:"date"})," với kiểu ",n.jsx(e.code,{children:"'time'"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.time(new Date()) // '08:15'
`})}),`
`,n.jsx(e.h3,{id:"month",children:n.jsx(e.code,{children:"month"})}),`
`,n.jsx(e.p,{children:"Trả về tên tháng cho ngày được chỉ định."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?"})," — ngày. Mặc định là ngày hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?"})," — ",n.jsx(e.code,{children:"'long'"})," (mặc định), ",n.jsx(e.code,{children:"'short'"}),", ",n.jsx(e.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.month(new Date('2024-03-01'), 'long')   // 'tháng 3'
intl.month(new Date('2024-03-01'), 'short')  // 'thg 3'
`})}),`
`,n.jsx(e.h3,{id:"months",children:n.jsx(e.code,{children:"months"})}),`
`,n.jsxs(e.p,{children:["Trả về mảng 12 tháng dưới dạng ",n.jsx(e.code,{children:"{ label, value }"})," — hữu ích cho ",n.jsx(e.code,{children:"<select>"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.months('long')
// [{ label: '', value: undefined }, { label: 'Tháng 1', value: 1 }, ...]
`})}),`
`,n.jsx(e.h3,{id:"weekday",children:n.jsx(e.code,{children:"weekday"})}),`
`,n.jsx(e.p,{children:"Trả về tên ngày trong tuần cho ngày được chỉ định."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?"})," — ngày. Mặc định là ngày hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?"})," — ",n.jsx(e.code,{children:"'long'"})," (mặc định), ",n.jsx(e.code,{children:"'short'"}),", ",n.jsx(e.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.weekday(new Date('2024-03-07'), 'long')   // 'Thứ Năm'
intl.weekday(new Date('2024-03-07'), 'short')  // 'Th 5'
`})}),`
`,n.jsx(e.h3,{id:"weekdays",children:n.jsx(e.code,{children:"weekdays"})}),`
`,n.jsxs(e.p,{children:["Trả về mảng 7 ngày trong tuần dưới dạng ",n.jsx(e.code,{children:"{ label, value }"}),", theo thứ tự ngày đầu tuần của locale."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.weekdays('short')
// [{ label: 'CN', value: 0 }, { label: 'T2', value: 1 }, ...]
`})}),`
`,n.jsx(e.h2,{id:"thời-gian-tương-đối",children:"Thời gian Tương đối"}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsxs(e.p,{children:["Định dạng ngày thành thời gian tương đối so với hiện tại (hoặc ",n.jsx(e.code,{children:"todayValue"}),"). Tự động chọn đơn vị tốt nhất (giây → phút → giờ → ngày → tháng → năm)."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — ngày cần so sánh."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?"})," — kiểu: ",n.jsx(e.code,{children:"'long'"}),", ",n.jsx(e.code,{children:"'short'"}),", ",n.jsx(e.code,{children:"'narrow'"})," hoặc ",n.jsx(e.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — điểm tham chiếu. Mặc định là ",n.jsx(e.code,{children:"new Date()"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.relative(new Date(Date.now() - 60000))     // '1 phút trước'
intl.relative(new Date(Date.now() - 3600000))   // '1 giờ trước'
intl.relative(new Date(Date.now() + 86400000))  // 'sau 1 ngày'
intl.relative(new Date(Date.now() - 60000), 'short') // '1 ph. trước'
`})}),`
`,n.jsx(e.h3,{id:"relativebyvalue",children:n.jsx(e.code,{children:"relativeByValue"})}),`
`,n.jsx(e.p,{children:"Định dạng thời gian tương đối bằng cách chỉ định trực tiếp giá trị số và đơn vị."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrString"})," — số (âm = quá khứ, dương = tương lai)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — đơn vị: ",n.jsx(e.code,{children:"'second'"}),", ",n.jsx(e.code,{children:"'minute'"}),", ",n.jsx(e.code,{children:"'hour'"}),", ",n.jsx(e.code,{children:"'day'"}),", ",n.jsx(e.code,{children:"'month'"}),", ",n.jsx(e.code,{children:"'year'"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?"})," — kiểu hoặc ",n.jsx(e.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.relativeByValue(-5, 'minute')   // '5 phút trước'
intl.relativeByValue(2, 'day')       // 'sau 2 ngày'
intl.relativeByValue(-1, 'year')     // 'năm ngoái'
`})}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsxs(e.p,{children:["Nếu ngày nằm trong ",n.jsx(e.code,{children:"limit"})," ngày tính từ ",n.jsx(e.code,{children:"todayValue"})," — xuất thời gian tương đối. Ngược lại — xuất ngày tuyệt đối."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: NumberOrStringOrDate"})," — ngày."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit: number"})," — ngưỡng tính bằng ngày (ví dụ: ",n.jsx(e.code,{children:"7"})," = tương đối cho ngày trong vòng một tuần)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"})," — điểm tham chiếu. Mặc định là ",n.jsx(e.code,{children:"new Date()"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"relativeOptions?"})," — tùy chọn định dạng thời gian tương đối."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dateOptions?"})," — tùy chọn định dạng ngày tuyệt đối."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — kiểu định dạng cho ngày tuyệt đối."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — định dạng 24 giờ."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Hôm qua → thời gian tương đối
intl.relativeLimit(new Date(Date.now() - 86400000), 7)      // 'hôm qua'

// 2 tuần trước → ngày tuyệt đối
intl.relativeLimit(new Date(Date.now() - 86400000 * 14), 7) // '22 thg 2, 2025'
`})}),`
`,n.jsx(e.h2,{id:"sắp-xếp",children:"Sắp xếp"}),`
`,n.jsx(e.h3,{id:"sort",children:n.jsx(e.code,{children:"sort"})}),`
`,n.jsxs(e.p,{children:["Sắp xếp mảng chuỗi theo quy tắc đặc thù của locale qua ",n.jsx(e.code,{children:"Intl.Collator"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: T[]"})," — mảng cần sắp xếp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compareFn?"})," — hàm so sánh để trích xuất chuỗi từ mỗi phần tử (khi mảng không phải chuỗi)."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`intl.sort(['chuối', 'táo', 'cam'])
// ['cam', 'chuối', 'táo']

intl.sort([{ name: 'Chuối' }, { name: 'Táo' }], item => item.name)
// [{ name: 'Chuối' }, { name: 'Táo' }] (theo locale)
`})})]})}function j(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{j as default};
