import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Classes/Datetime - Tiện ích Ngày & Giờ"}),`
`,n.jsx(e.h1,{id:"lớp-datetime",children:"Lớp Datetime"}),`
`,n.jsxs(e.p,{children:["Một bộ khung lớp bao quanh đối tượng ",n.jsx(e.code,{children:"Date"})," nguyên bản của JavaScript, được thiết kế để đơn giản hóa việc làm việc với ngày tháng và thời gian. Nó kết hợp các khả năng định dạng, tính toán (điều hướng ngày tháng) và sao chép, dựa trên các thiết lập địa phương hóa của ",n.jsx(e.code,{children:"Geo"})," и ",n.jsx(e.code,{children:"GeoIntl"}),"."]}),`
`,n.jsx(e.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Quản lý đơn giản"})," — các phương thức trực quan để điều hướng ngày tháng (chuyển đến đầu tháng, tăng thêm ngày, v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Địa phương hóa tích hợp"})," — tự động xử lý các múi giờ và định dạng theo thiết lập ",n.jsx(e.code,{children:"Geo"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chuỗi lệnh (Chaining)"})," — hầu hết các phương thức đều trả về ",n.jsx(e.code,{children:"this"}),", cho phép thực hiện các thao tác phức tạp trong một dòng duy nhất."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hỗ trợ nhiều kiểu dữ liệu"})," — hàm khởi tạo và các phương thức chấp nhận chuỗi (ISO), số (timestamp) hoặc đối tượng ",n.jsx(e.code,{children:"Date"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Sao chép thông minh"})," — dễ dàng tạo các thực thể mới dựa trên các thực thể hiện có với các thay đổi về thời gian."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Tạo một thực thể ",n.jsx(e.code,{children:"Datetime"})," mới. Nếu không có tham số nào được truyền vào, thời gian hiện tại và địa phương mặc định sẽ được sử dụng."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date?: NumberOrStringOrDate"})," — ngày để khởi tạo (chuỗi ISO, timestamp hoặc đối tượng ",n.jsx(e.code,{children:"Date"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: GeoDate = 'date'"})," — định dạng đầu ra mặc định."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: string = Geo.getLocation()"})," — mã địa phương (ví dụ: 'vi-VN')."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Datetime } from '@dxtmisha/functional-basic'

// Thời gian hiện tại
const now = new Datetime()

// Ngày cụ thể
const dt = new Datetime('2024-03-15', 'datetime', 'vi-VN')

// Từ timestamp
const fromTs = new Datetime(1710460800000)
`})}),`
`,n.jsx(e.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(e.h3,{id:"thông-tin-chung",children:"Thông tin chung"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getIntl(): GeoIntl"})," — Trả về đối tượng ",n.jsx(e.code,{children:"GeoIntl"})," để làm việc với định dạng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDate(): Date"})," — Trả về đối tượng ",n.jsx(e.code,{children:"Date"})," nguyên bản."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getType(): string"})," — Trả về kiểu đầu ra đã thiết lập (",n.jsx(e.code,{children:"date"}),", ",n.jsx(e.code,{children:"datetime"}),", v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHoursType(): GeoHours"})," — Xác định định dạng giờ (12 hoặc 24) cho địa phương hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHour24(): boolean"})," — Trả về thiết lập hiện tại cho việc hiển thị định dạng 24 giờ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getTimeZoneOffset(): number"})," — Trả về độ lệch múi giờ tính bằng phút."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getTimeZone(style?: GeoTimeZoneStyle): string"})," — Trả về múi giờ (hỗ trợ các kiểu ",n.jsx(e.code,{children:"minute"}),", ",n.jsx(e.code,{children:"hour"}),", ",n.jsx(e.code,{children:"RFC"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFirstDayCode(): GeoFirstDay"})," — Trả về mã cho ngày đầu tiên của tuần (0 cho Chủ Nhật, 1 cho Thứ Hai, 6 cho Thứ Bảy)."]}),`
`]}),`
`,n.jsx(e.h3,{id:"lấy-giá-trị",children:"Lấy giá trị"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getYear(): number"})," — Trả về năm đầy đủ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMonth(): number"})," — Trả về tháng (dễ đọc, từ 1 đến 12)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDay(): number"})," — Trả về ngày trong tháng (1-31)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHour(): number"})," — Trả về giờ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMinute(): number"})," — Trả về phút."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSecond(): number"})," — Trả về giây."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMaxDay(): number"})," — Trả về số ngày trong tháng hiện tại."]}),`
`]}),`
`,n.jsx(e.h3,{id:"thiết-lập-giá-trị",children:"Thiết lập giá trị"}),`
`,n.jsxs(e.p,{children:["Cho phép thay đổi chính xác các thành phần của ngày tháng. Các phương thức (ngoại trừ ",n.jsx(e.code,{children:"setCode"})," và ",n.jsx(e.code,{children:"setWatch"}),") sẽ kích hoạt hàm gọi lại ",n.jsx(e.code,{children:"watch"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setDate(value: NumberOrStringOrDate): this"})," — Ghi đè hoàn toàn ngày tháng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setType(value: GeoDate): this"})," — Thiết lập kiểu đầu ra."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setHour24(value: boolean): this"})," — Bật/tắt định dạng 24 giờ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setCode(code: string): this"})," — Thay đổi mã địa phương."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setWatch(watch: Function): this"})," — Thiết lập hàm gọi lại cho các thay đổi dữ liệu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setYear(value: number): this"})," — Thiết lập năm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setMonth(value: number): this"})," — Thiết lập tháng (1-12)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setDay(value: number): this"})," — Thiết lập ngày trong tháng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setHour(value: number): this"})," — Thiết lập giờ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setMinute(value: number): this"})," — Thiết lập phút."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setSecond(value: number): this"})," — Thiết lập giây."]}),`
`]}),`
`,n.jsx(e.h3,{id:"điều-hướng-di-chuyển",children:"Điều hướng (Di chuyển)"}),`
`,n.jsxs(e.p,{children:["Thay đổi đối tượng ",n.jsx(e.code,{children:"Datetime"})," hiện tại."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveByYear(value: number): this"})," — Dịch chuyển theo số năm đã chỉ định."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveByMonth(value: number): this"})," — Dịch chuyển theo số tháng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveByDay(value: number): this"})," — Dịch chuyển theo số ngày."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveByHour(value: number): this"})," — Dịch chuyển theo số giờ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveByMinute(value: number): this"})," — Dịch chuyển theo số phút."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveBySecond(value: number): this"})," — Dịch chuyển theo số giây."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveMonthFirst(): this"})," — Chuyển đến tháng 1 của năm hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveMonthLast(): this"})," — Chuyển đến tháng 12 của năm hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveMonthNext(): this"})," — Chuyển đến ngày đầu tiên của tháng tiếp theo."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveMonthPrevious(): this"})," — Chuyển đến ngày đầu tiên của tháng trước."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveWeekdayFirst(): this"})," — Chuyển đến ngày đầu tiên của tuần hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveWeekdayLast(): this"})," — Chuyển đến ngày cuối cùng của tuần hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveWeekdayFirstByMonth(): this"})," — Chuyển đến ngày đầu tiên của tuần đầu tiên trong tháng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveWeekdayLastByMonth(): this"})," — Chuyển đến ngày đầu tiên của tuần đầy đủ đầu tiên của tháng tiếp theo."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveWeekdayNext(): this"})," — Dịch chuyển một tuần về phía trước."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveWeekdayPrevious(): this"})," — Dịch chuyển một tuần về phía sau."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveDayFirst(): this"})," — Chuyển đến ngày đầu tiên của tháng hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveDayLast(): this"})," — Chuyển đến ngày cuối cùng của tháng hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveDayNext(): this"})," — Dịch chuyển một ngày về phía trước."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"moveDayPrevious(): this"})," — Dịch chuyển một ngày về phía sau."]}),`
`]}),`
`,n.jsx(e.h3,{id:"sao-chép",children:"Sao chép"}),`
`,n.jsx(e.p,{children:"Tạo bản sao của dữ liệu."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"clone(): Date"})," — Tạo một bản sao độc lập của đối tượng ",n.jsx(e.code,{children:"Date"})," nguyên bản."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneClass(): Datetime"})," — Tạo một bản sao của thực thể ",n.jsx(e.code,{children:"Datetime"})," hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneMonthFirst(): Datetime"})," — Sao chép với việc chuyển đến tháng 1."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneMonthLast(): Datetime"})," — Sao chép với việc chuyển đến tháng 12."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneMonthNext(): Datetime"})," — Sao chép với việc chuyển sang tháng tiếp theo."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneMonthPrevious(): Datetime"})," — Sao chép with việc chuyển sang tháng trước."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneWeekdayFirst(): Datetime"})," — Sao chép được thiết lập vào đầu tuần hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneWeekdayLast(): Datetime"})," — Sao chép được thiết lập vào cuối tuần hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneWeekdayFirstByMonth(): Datetime"})," — Sao chép đến đầu tuần đầu tiên của tháng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneWeekdayLastByMonth(): Datetime"})," — Sao chép đến đầu tuần cuối cùng của tháng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneWeekdayNext(): Datetime"})," — Sao chép với việc dịch chuyển một tuần về phía trước."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneWeekdayPrevious(): Datetime"})," — Sao chép với việc dịch chuyển một tuần về phía sau."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneDayFirst(): Datetime"})," — Sao chép đến ngày đầu tiên của tháng hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneDayLast(): Datetime"})," — Sao chép đến ngày cuối cùng của tháng hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneDayNext(): Datetime"})," — Sao chép với việc dịch chuyển một ngày về phía trước."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"cloneDayPrevious(): Datetime"})," — Sao chép với việc dịch chuyển một ngày về phía sau."]}),`
`]}),`
`,n.jsx(e.h2,{id:"định-dạng-và-đầu-ra",children:"Định dạng và Đầu ra"}),`
`,n.jsx(e.h3,{id:"locale",children:n.jsx(e.code,{children:"locale"})}),`
`,n.jsx(e.p,{children:"Phương thức chính để lấy chuỗi đã được địa phương hóa."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type?: GeoDate"})," — định dạng đầu ra (mặc định được lấy từ thiết lập thực thể)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: Intl.DateTimeFormatOptions"})," — ghi đè các thiết lập hiển thị (ví dụ: kiểu tháng)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})," — biểu diễn văn bản của ngày tháng."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const dt = new Datetime('2024-03-15')
dt.locale('full') // ví dụ: "15 tháng 3, 2024"
dt.locale('date', { month: 'short' }) // ví dụ: "15 thg 3, 2024"
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Các phương thức định dạng bổ sung:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"localeYear(style?: 'numeric' | '2-digit'): string"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"localeMonth(style?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'): string"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"localeDay(style?: 'numeric' | '2-digit'): string"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"localeHour(style?: 'numeric' | '2-digit'): string"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"localeMinute(style?: 'numeric' | '2-digit'): string"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"localeSecond(style?: 'numeric' | '2-digit'): string"})}),`
`]}),`
`,n.jsx(e.h3,{id:"standard",children:n.jsx(e.code,{children:"standard"})}),`
`,n.jsx(e.p,{children:"Trả về ngày ở định dạng ISO 8601 (YYYY-MM-DDTHH:mm:ss±HH:mm)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"timeZone: boolean = true"})," — có thêm thông tin múi giờ hay không."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`dt.standard() // "2024-03-15T00:00:00+03:00"
dt.standard(false) // "2024-03-15T00:00:00"
`})}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.h3,{id:"làm-việc-với-khoảng-thời-gian-và-điều-hướng",children:"Làm việc với Khoảng thời gian và Điều hướng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Datetime } from '@dxtmisha/functional-basic'

// Lấy ngày cuối cùng của tháng hiện tại
const lastDay = new Datetime().moveDayLast().getDay()

// Tạo lưới lịch (tìm Thứ Hai của tuần đầu tiên trong tháng)
const startOfCalendar = new Datetime().moveWeekdayFirstByMonth()

// Tính toán một ngày trong một tuần vào cùng thời điểm
const nextWeek = new Datetime().moveByDay(7).locale('datetime')
`})}),`
`,n.jsx(e.h3,{id:"định-dạng-và-địa-phương",children:"Định dạng và Địa phương"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const event = new Datetime('2024-12-31T23:59:59')

// Địa phương tiếng Anh
event.setCode('en-US')
console.log(event.locale('full')) // "Tuesday, December 31, 2024"

// Địa phương tiếng Việt
event.setCode('vi-VN')
console.log(event.locale('full')) // "Thứ Ba, 31 tháng 12, 2024"

// Chỉ xuất thời gian
console.log(event.locale('time')) // "23:59:59"
`})})]})}function x(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(h,{...i})}):h(i)}export{x as default};
