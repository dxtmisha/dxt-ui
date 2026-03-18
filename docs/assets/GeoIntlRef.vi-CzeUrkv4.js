import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional/Classes/GeoIntlRef - Định dạng số và ngày phản ứng"}),`
`,n.jsx(e.h1,{id:"lớp-geointlref",children:"Lớp GeoIntlRef"}),`
`,n.jsx(e.p,{children:"Một lớp phản ứng để quản lý việc định dạng số, ngày tháng, tiền tệ và thời gian tương đối. Đảm bảo chuỗi định dạng tự động cập nhật khi mã ngôn ngữ (locale) thay đổi."}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính phản ứng"})," — tự động cập nhật chuỗi định dạng khi ",n.jsx(e.code,{children:"Ref"})," locale thay đổi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Quốc tế hóa"})," — hỗ trợ đầy đủ các tiêu chuẩn ",n.jsx(e.code,{children:"Intl"})," cho số, ngày tháng, tiền tệ và đơn vị đo lường."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Thời gian tương đối"}),' — các phương thức thuận tiện để hiển thị thời gian như "2 ngày trước" với hỗ trợ giới hạn.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Danh sách và Sắp xếp"})," — các phương thức tích hợp để lấy tên tháng, ngày trong tuần và sắp xếp theo locale."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(e.h3,{id:"constructor",children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsxs(e.p,{children:["Tạo một thực thể ",n.jsx(e.code,{children:"GeoIntlRef"})," mới để quản lý việc định dạng một cách phản ứng. Lớp này hoạt động như một lớp vỏ bọc xung quanh ",n.jsx(e.code,{children:"GeoIntl"})," và đảm bảo tất cả các giá trị tính toán (computed) được tự động cập nhật khi mã locale thay đổi."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code?: RefOrNormal<string>"})," — mã locale (ví dụ: ",n.jsx(e.code,{children:"'vi-VN'"}),", ",n.jsx(e.code,{children:"'en-US'"}),"). Có thể là một chuỗi thông thường hoặc một đối tượng ",n.jsx(e.code,{children:"ref"})," phản ứng. Nếu không được cung cấp, ngôn ngữ hiện tại từ ",n.jsx(e.code,{children:"GeoRef"})," sẽ được sử dụng."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Khởi tạo với locale phản ứng
const code = ref('vi-VN')
const geoIntl = new GeoIntlRef(code)

// 2. Sử dụng định dạng phản ứng
const price = geoIntl.currency(1000, 'VND') // ComputedRef: '1.000 ₫'

// 3. Tự động cập nhật
code.value = 'en-US' // price sẽ tự động cập nhật
`})}),`
`,n.jsx(e.h2,{id:"tên-hiển-thị",children:"Tên hiển thị"}),`
`,n.jsx(e.h3,{id:"display",children:n.jsx(e.code,{children:"display"})}),`
`,n.jsx(e.p,{children:"Trả về tên đã dịch của một ngôn ngữ, khu vực hoặc hệ chữ viết."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — mã cần dịch (ví dụ: 'en-US')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions"})," — các tùy chọn loại hiển thị."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"languagename",children:n.jsx(e.code,{children:"languageName"})}),`
`,n.jsx(e.p,{children:"Trả về tên hiển thị của một ngôn ngữ."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — mã ngôn ngữ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — kiểu định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"countryname",children:n.jsx(e.code,{children:"countryName"})}),`
`,n.jsx(e.p,{children:"Trả về tên hiển thị của một khu vực (quốc gia)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<string>"})," — mã quốc gia."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.RelativeTimeFormatStyle"})," — kiểu định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"định-dạng-số",children:"Định dạng số"}),`
`,n.jsx(e.h3,{id:"number",children:n.jsx(e.code,{children:"number"})}),`
`,n.jsx(e.p,{children:"Định dạng một số theo quy tắc của locale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — giá trị cần định dạng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — các tùy chọn định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"decimal",children:n.jsx(e.code,{children:"decimal"})}),`
`,n.jsx(e.p,{children:"Trả về ký hiệu phân cách thập phân cho locale hiện tại."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"percent",children:n.jsx(e.code,{children:"percent"})}),`
`,n.jsx(e.p,{children:"Định dạng một giá trị dưới dạng phần trăm."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — giá trị đầu vào (0.25 -> 25%)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — các tùy chọn định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"percentby100",children:n.jsx(e.code,{children:"percentBy100"})}),`
`,n.jsx(e.p,{children:"Định dạng một giá trị dưới dạng phần trăm sau khi chia cho 100."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — giá trị đầu vào (25 -> 25%)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.NumberFormatOptions"})," — các tùy chọn định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"plural",children:n.jsx(e.code,{children:"plural"})}),`
`,n.jsx(e.p,{children:"Chọn hình thức số nhiều chính xác cho một từ dựa trên giá trị số."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — giá trị số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"words: string"})," — danh sách các từ cách nhau bởi dấu ",n.jsx(e.code,{children:"|"})," (ví dụ: 'quả táo|những quả táo')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Intl.PluralRulesOptions"})," — các tùy chọn quy tắc số nhiều."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"optionsNumber?: Intl.NumberFormatOptions"})," — các tùy chọn định dạng số."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"tiền-tệ-và-đơn-vị",children:"Tiền tệ và Đơn vị"}),`
`,n.jsx(e.h3,{id:"currency",children:n.jsx(e.code,{children:"currency"})}),`
`,n.jsx(e.p,{children:"Định dạng một giá trị số dưới dạng chuỗi tiền tệ."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — số tiền."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>"})," — mã tiền tệ hoặc các tùy chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"numberOnly?: boolean"})," — nếu là ",n.jsx(e.code,{children:"true"}),", chỉ trả về số mà không có ký hiệu tiền tệ."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"currencysymbol",children:n.jsx(e.code,{children:"currencySymbol"})}),`
`,n.jsx(e.p,{children:"Trả về ký hiệu tiền tệ cho một mã tiền tệ nhất định."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currency: RefOrNormal<string>"})," — mã tiền tệ (ví dụ: 'VND')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry"})," — cách hiển thị tiền tệ."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"unit",children:n.jsx(e.code,{children:"unit"})}),`
`,n.jsx(e.p,{children:"Định dạng một số với một đơn vị cụ thể."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — giá trị số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — tên đơn vị hoặc các tùy chọn."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"sizefile",children:n.jsx(e.code,{children:"sizeFile"})}),`
`,n.jsx(e.p,{children:"Định dạng kích thước tệp sang định dạng dễ đọc (bytes, KB, MB, v.v.)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — kích thước tính bằng bytes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unitOptions?: string | Intl.NumberFormatOptions"})," — đơn vị bắt đầu hoặc các tùy chọn."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"ngày-và-giờ",children:"Ngày và Giờ"}),`
`,n.jsx(e.h3,{id:"date",children:n.jsx(e.code,{children:"date"})}),`
`,n.jsx(e.p,{children:"Định dạng một ngày theo locale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — ngày đầu vào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — loại định dạng ('date', 'time', 'datetime', v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions"})," — kiểu hiển thị."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hour24?: boolean"})," — có sử dụng định dạng 24 giờ hay không."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"time",children:n.jsx(e.code,{children:"time"})}),`
`,n.jsx(e.p,{children:"Định dạng một giá trị thời gian."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — ngày/giờ đầu vào."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"month",children:n.jsx(e.code,{children:"month"})}),`
`,n.jsx(e.p,{children:"Trả về tên của một tháng cụ thể."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — ngày đầu vào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — kiểu định dạng (long, short, narrow)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"months",children:n.jsx(e.code,{children:"months"})}),`
`,n.jsx(e.p,{children:"Trả về danh sách tên của tất cả các tháng."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['month']"})," — kiểu định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})]}),`
`,n.jsx(e.h3,{id:"weekday",children:n.jsx(e.code,{children:"weekday"})}),`
`,n.jsx(e.p,{children:"Trả về tên của một ngày cụ thể trong tuần."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: RefOrNormal<NumberOrStringOrDate>"})," — ngày đầu vào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — kiểu định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"weekdays",children:n.jsx(e.code,{children:"weekdays"})}),`
`,n.jsx(e.p,{children:"Trả về danh sách tên của tất cả các ngày trong tuần."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style?: Intl.DateTimeFormatOptions['weekday']"})," — kiểu định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<ItemValue<number | undefined>[]>"})]}),`
`,n.jsx(e.h2,{id:"thời-gian-tương-đối",children:"Thời gian tương đối"}),`
`,n.jsx(e.h3,{id:"relative",children:n.jsx(e.code,{children:"relative"})}),`
`,n.jsx(e.p,{children:'Định dạng một ngày dưới dạng thời gian tương đối (ví dụ: "2 ngày trước").'}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — ngày đầu vào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — kiểu định dạng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"}),' — ngày tham chiếu cho "hôm nay".']}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"relativelimit",children:n.jsx(e.code,{children:"relativeLimit"})}),`
`,n.jsx(e.p,{children:"Định dạng thời gian tương đối với việc tự động chuyển sang định dạng ngày tiêu chuẩn nếu đạt đến giới hạn."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrStringOrDate>"})," — ngày đầu vào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit: number"})," — giới hạn tính theo ngày."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"todayValue?: Date"}),' — ngày tham chiếu cho "hôm nay".']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — các tùy chọn định dạng tương đối."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dateOptions?: Intl.DateTimeFormatOptions"})," — các tùy chọn ngày tiêu chuẩn."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"relativebyvalue",children:n.jsx(e.code,{children:"relativeByValue"})}),`
`,n.jsx(e.p,{children:"Định dạng một khoảng thời gian số dưới dạng thời gian tương đối."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: RefOrNormal<NumberOrString>"})," — số lượng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unit: Intl.RelativeTimeFormatUnit"})," — đơn vị thời gian (day, month, hour, v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions"})," — kiểu định dạng."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h2,{id:"danh-sách-và-sắp-xếp",children:"Danh sách và Sắp xếp"}),`
`,n.jsx(e.h3,{id:"sort",children:n.jsx(e.code,{children:"sort"})}),`
`,n.jsx(e.p,{children:"Sắp xếp một mảng các chuỗi hoặc đối tượng dựa trên quy tắc của locale."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: RefOrNormal<T[]>"})," — mảng dữ liệu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compareFn?: (a: T, b: T) => [string, string]"})," — hàm ánh xạ để lấy các chuỗi có thể sắp xếp."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<T[]>"})]})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
