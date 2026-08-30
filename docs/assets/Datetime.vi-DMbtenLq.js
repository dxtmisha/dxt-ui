import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Datetime - Tiện ích Ngày & Giờ`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-datetime`,children:`Lớp Datetime`}),`
`,(0,c.jsxs)(t.p,{children:[`Một bộ khung lớp bao quanh đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),` nguyên bản của JavaScript, được thiết kế để đơn giản hóa việc làm việc với ngày tháng và thời gian. Nó kết hợp các khả năng định dạng, tính toán (điều hướng ngày tháng) và sao chép, dựa trên các thiết lập địa phương hóa của `,(0,c.jsx)(t.code,{children:`Geo`}),` и `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý đơn giản`}),` — các phương thức trực quan để điều hướng ngày tháng (chuyển đến đầu tháng, tăng thêm ngày, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Địa phương hóa tích hợp`}),` — tự động xử lý các múi giờ và định dạng theo thiết lập `,(0,c.jsx)(t.code,{children:`Geo`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuỗi lệnh (Chaining)`}),` — hầu hết các phương thức đều trả về `,(0,c.jsx)(t.code,{children:`this`}),`, cho phép thực hiện các thao tác phức tạp trong một dòng duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ nhiều kiểu dữ liệu`}),` — hàm khởi tạo và các phương thức chấp nhận chuỗi (ISO), số (timestamp) hoặc đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sao chép thông minh`}),` — dễ dàng tạo các thực thể mới dựa trên các thực thể hiện có với các thay đổi về thời gian.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`Datetime(date, type, code)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date?: NumberOrStringOrDate`}),` — ngày để khởi tạo (chuỗi ISO, timestamp hoặc đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: GeoDate = 'date'`}),` — định dạng đầu ra mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string = Geo.getLocation()`}),` — mã địa phương (ví dụ: 'vi-VN').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Thời gian hiện tại
const now = new Datetime()

// 2. Ngày cụ thể
const dt = new Datetime('2024-03-15', 'datetime', 'vi-VN')

// 3. Từ timestamp
const fromTs = new Datetime(1710460800000)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thông-tin-chung`,children:`Thông tin chung`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getIntl(): GeoIntl`}),` — Trả về đối tượng `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` để làm việc với định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDate(): Date`}),` — Trả về đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),` nguyên bản.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getType(): string`}),` — Trả về kiểu đầu ra đã thiết lập (`,(0,c.jsx)(t.code,{children:`date`}),`, `,(0,c.jsx)(t.code,{children:`datetime`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): GeoHours`}),` — Xác định định dạng giờ (12 hoặc 24) cho địa phương hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHour24(): boolean`}),` — Trả về thiết lập hiện tại cho việc hiển thị định dạng 24 giờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimeZoneOffset(): number`}),` — Trả về độ lệch múi giờ tính bằng phút.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimeZone(style?: GeoTimeZoneStyle): string`}),` — Trả về múi giờ (hỗ trợ các kiểu `,(0,c.jsx)(t.code,{children:`minute`}),`, `,(0,c.jsx)(t.code,{children:`hour`}),`, `,(0,c.jsx)(t.code,{children:`RFC`}),`; định dạng mặc định với dấu hai chấm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): GeoFirstDay`}),` — Trả về mã cho ngày đầu tiên của tuần (0 cho Chủ Nhật, 1 cho Thứ Hai, 6 cho Thứ Bảy).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`lấy-giá-trị`,children:`Lấy giá trị`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getYear(): number`}),` — Trả về năm đầy đủ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMonth(): number`}),` — Trả về tháng (dễ đọc, từ 1 đến 12).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDay(): number`}),` — Trả về ngày trong tháng (1-31).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHour(): number`}),` — Trả về giờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMinute(): number`}),` — Trả về phút.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getSecond(): number`}),` — Trả về giây.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): number`}),` — Trả về số của ngày cuối cùng trong tháng hiện tại (28-31).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`thiết-lập-giá-trị`,children:`Thiết lập giá trị`}),`
`,(0,c.jsxs)(t.p,{children:[`Cho phép thay đổi chính xác các thành phần của ngày tháng. Các phương thức (ngoại trừ `,(0,c.jsx)(t.code,{children:`setCode`}),` và `,(0,c.jsx)(t.code,{children:`setWatch`}),`) sẽ kích hoạt hàm gọi lại `,(0,c.jsx)(t.code,{children:`watch`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDate(value: NumberOrStringOrDate): this`}),` — Ghi đè hoàn toàn ngày tháng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(value: GeoDate): this`}),` — Thiết lập kiểu đầu ra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setHour24(value: boolean): this`}),` — Bật/tắt định dạng 24 giờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCode(code: string): this`}),` — Thay đổi mã địa phương.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setWatch(watch: Function): this`}),` — Thiết lập hàm gọi lại cho các thay đổi dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setYear(value: number): this`}),` — Thiết lập năm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMonth(value: number): this`}),` — Thiết lập tháng (1-12).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDay(value: number): this`}),` — Thiết lập ngày trong tháng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setHour(value: number): this`}),` — Thiết lập giờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setMinute(value: number): this`}),` — Thiết lập phút.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setSecond(value: number): this`}),` — Thiết lập giây.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`điều-hướng-di-chuyển`,children:`Điều hướng (Di chuyển)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thay đổi đối tượng `,(0,c.jsx)(t.code,{children:`Datetime`}),` hiện tại.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByYear(value: number): this`}),` — Dịch chuyển theo số năm đã chỉ định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByMonth(value: number): this`}),` — Dịch chuyển theo số tháng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByDay(value: number): this`}),` — Dịch chuyển theo số ngày.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByHour(value: number): this`}),` — Dịch chuyển theo số giờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveByMinute(value: number): this`}),` — Dịch chuyển theo số phút.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveBySecond(value: number): this`}),` — Dịch chuyển theo số giây.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthFirst(): this`}),` — Chuyển đến tháng 1 của năm hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthLast(): this`}),` — Chuyển đến tháng 12 của năm hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthNext(): this`}),` — Chuyển đến ngày đầu tiên của tháng tiếp theo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveMonthPrevious(): this`}),` — Chuyển đến ngày đầu tiên của tháng trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayFirst(): this`}),` — Chuyển đến ngày đầu tiên của tuần hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayLast(): this`}),` — Chuyển đến ngày cuối cùng của tuần hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayFirstByMonth(): this`}),` — Chuyển đến ngày đầu tiên của tuần đầu tiên trong tháng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayLastByMonth(): this`}),` — Chuyển đến ngày cuối cùng của tuần cuối cùng trong tháng hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayNext(): this`}),` — Dịch chuyển một tuần về phía trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveWeekdayPrevious(): this`}),` — Dịch chuyển một tuần về phía sau.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayFirst(): this`}),` — Chuyển đến ngày đầu tiên của tháng hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayLast(): this`}),` — Chuyển đến ngày cuối cùng của tháng hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayNext(): this`}),` — Dịch chuyển một ngày về phía trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`moveDayPrevious(): this`}),` — Dịch chuyển một ngày về phía sau.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`sao-chép`,children:`Sao chép`}),`
`,(0,c.jsx)(t.p,{children:`Tạo bản sao của dữ liệu.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`clone(): Date`}),` — Tạo một bản sao độc lập của đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),` nguyên bản.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneClass(): Datetime`}),` — Tạo một bản sao của thực thể `,(0,c.jsx)(t.code,{children:`Datetime`}),` hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthFirst(): Datetime`}),` — Sao chép với việc chuyển đến tháng 1.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthLast(): Datetime`}),` — Sao chép với việc chuyển đến tháng 12.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthNext(): Datetime`}),` — Sao chép với việc chuyển sang tháng tiếp theo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneMonthPrevious(): Datetime`}),` — Sao chép with việc chuyển sang tháng trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayFirst(): Datetime`}),` — Sao chép được thiết lập vào đầu tuần hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayLast(): Datetime`}),` — Sao chép được thiết lập vào cuối tuần hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayFirstByMonth(): Datetime`}),` — Sao chép đến đầu tuần đầu tiên của tháng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayLastByMonth(): Datetime`}),` — Sao chép đến cuối tuần cuối cùng của tháng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayNext(): Datetime`}),` — Sao chép với việc dịch chuyển một tuần về phía trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneWeekdayPrevious(): Datetime`}),` — Sao chép với việc dịch chuyển một tuần về phía sau.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayFirst(): Datetime`}),` — Sao chép đến ngày đầu tiên của tháng hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayLast(): Datetime`}),` — Sao chép đến ngày cuối cùng của tháng hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayNext(): Datetime`}),` — Sao chép với việc dịch chuyển một ngày về phía trước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cloneDayPrevious(): Datetime`}),` — Sao chép với việc dịch chuyển một ngày về phía sau.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`định-dạng-và-đầu-ra`,children:`Định dạng và Đầu ra`}),`
`,(0,c.jsx)(t.h3,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:`Phương thức chính để lấy chuỗi đã được địa phương hóa.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — định dạng đầu ra (mặc định được lấy từ thiết lập thực thể).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions`}),` — ghi đè các thiết lập hiển thị (ví dụ: kiểu tháng).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — biểu diễn văn bản của ngày tháng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const dt = new Datetime('2024-03-15')
dt.locale('full') // ví dụ: "15 tháng 3, 2024"
dt.locale('date', { month: 'short' }) // ví dụ: "15 thg 3, 2024"
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Các phương thức định dạng bổ sung:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeYear(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeMonth(style?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeDay(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeHour(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeMinute(style?: 'numeric' | '2-digit'): string`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`localeSecond(style?: 'numeric' | '2-digit'): string`})}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về ngày ở định dạng ISO 8601 (YYYY-MM-DDTHH:mm:ss±HH:mm).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone: boolean = true`}),` — có thêm thông tin múi giờ hay không.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`dt.standard() // "2024-03-15T00:00:00+03:00"
dt.standard(false) // "2024-03-15T00:00:00"
`})}),`
`,(0,c.jsx)(t.h2,{id:`ssr-và-hydration`,children:`SSR và Hydration`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cảnh báo (SSR):`}),` Việc tạo một thực thể `,(0,c.jsx)(t.code,{children:`Datetime`}),` mà không có ngày cụ thể (sử dụng thời gian hiện tại) để render trong SSR có thể dẫn đến lỗi hydration mismatch vì thời gian hoặc múi giờ trên máy chủ có thể khác với thời gian trên máy khách.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`thực-tiễn-khuyến-nghị`,children:`Thực tiễn khuyến nghị`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi sử dụng `,(0,c.jsx)(t.code,{children:`Datetime`}),` trong môi trường SSR:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Luôn cung cấp ngày cụ thể`}),`: Truyền ngày cụ thể vào hàm khởi tạo thay vì sử dụng thời gian hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Sử dụng khởi tạo ngày ở phía máy chủ`}),`: Khởi tạo ngày ở máy chủ với các giá trị cụ thể để đảm bảo tính nhất quán.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Chỉ khởi tạo ở phía máy khách cho ngày động`}),`: Đối với ngày cần hiển thị thời gian hiện tại, chỉ khởi tạo ở phía máy khách (ví dụ: trong `,(0,c.jsx)(t.code,{children:`useEffect`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cân nhắc sự khác biệt múi giờ`}),`: Lưu ý rằng múi giờ máy chủ và máy khách có thể khác nhau, ảnh hưởng đến tính toán và định dạng ngày.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ví-dụ-về-sử-dụng-an-toàn-trong-ssr`,children:`Ví dụ về sử dụng an toàn trong SSR`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// ✅ Tốt: Ngày cụ thể cho SSR
const serverDate = new Datetime('2024-03-15')

// ✅ Tốt: Khởi tạo ở máy khách cho thời gian hiện tại
useEffect(() => {
  const now = new Datetime()
  setCurrentTime(now.locale('datetime'))
}, [])

// ❌ Tránh: Thời gian hiện tại trong SSR
const now = new Datetime() // Có thể gây lỗi hydration
`})}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.h3,{id:`làm-việc-với-khoảng-thời-gian-và-điều-hướng`,children:`Làm việc với Khoảng thời gian và Điều hướng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// Lấy ngày cuối cùng của tháng hiện tại
const lastDay = new Datetime().moveDayLast().getDay()

// Tạo lưới lịch (tìm Thứ Hai của tuần đầu tiên trong tháng)
const startOfCalendar = new Datetime().moveWeekdayFirstByMonth()

// Tính toán một ngày trong một tuần vào cùng thời điểm
const nextWeek = new Datetime().moveByDay(7).locale('datetime')
`})}),`
`,(0,c.jsx)(t.h3,{id:`định-dạng-và-địa-phương`,children:`Định dạng và Địa phương`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const event = new Datetime('2024-12-31T23:59:59')

// Địa phương tiếng Anh
event.setCode('en-US')
console.log(event.locale('full')) // "Tuesday, December 31, 2024"

// Địa phương tiếng Việt
event.setCode('vi-VN')
console.log(event.locale('full')) // "Thứ Ba, 31 tháng 12, 2024"

// Chỉ xuất thời gian
console.log(event.locale('time')) // "23:59:59"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};