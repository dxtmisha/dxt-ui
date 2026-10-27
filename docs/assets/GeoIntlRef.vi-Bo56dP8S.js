import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/GeoIntlRef - Định dạng số và ngày phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-geointlref`,children:`Lớp GeoIntlRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Facade phản ứng của `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` cho số, tiền tệ, ngày, tên và sắp xếp theo locale. Phương thức trả computed ref theo dõi ref đầu vào được hỗ trợ và locale cụ thể hoặc dự phòng `,(0,c.jsx)(t.code,{children:`GeoRef`}),`. Dùng GeoIntl không phản ứng khi không cần cập nhật computed.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả computed`}),` — đọc qua `,(0,c.jsx)(t.code,{children:`.value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp Intl`}),` — tùy chọn số, ngày, tên và thời gian tương đối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sắp xếp không thay đổi nguồn`}),` — mảng đầu vào được sao chép.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(code?: RefOrNormal<string>)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Dùng `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` thường nếu không cần phản ứng. `,(0,c.jsx)(t.code,{children:`RefOrNormal<T>`}),` nhận giá trị hoặc ref/computed Vue, không nhận hàm getter. Tùy chọn là đối tượng thường trừ khi chữ ký dùng `,(0,c.jsx)(t.code,{children:`RefOrNormal`}),`. Thời gian tương đối chỉ tính lại khi phụ thuộc đổi, không chạy bộ hẹn giờ. Truyền `,(0,c.jsx)(t.code,{children:`todayValue`}),` để cố định ngày tham chiếu. Danh sách tháng và ngày tuần bắt đầu bằng `,(0,c.jsx)(t.code,{children:`{ label: "", value: undefined }`}),`; tháng dùng 1–12, ngày tuần dùng mã chuẩn theo thứ tự locale. Đơn vị dung lượng tệp chỉ tăng khi lớn hơn 1024. `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` quyết định ép kiểu số và giá trị dự phòng.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = /*#__PURE__*/ ref('en-US')
const amount = /*#__PURE__*/ ref(0)
const formatter = /*#__PURE__*/ new GeoIntlRef(locale)
const formatted = /*#__PURE__*/ formatter.currency(amount, ref('USD'))
amount.value = 1234.5
locale.value = 'vi-VN'
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`tên-hiển-thị`,children:`Tên hiển thị`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`display( value?: RefOrNormal<string>, typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions ): ComputedRef<string>`}),` — Trả tên địa phương hóa cho loại Intl được yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`languageName( value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle ): ComputedRef<string>`}),` — Trả tên ngôn ngữ được địa phương hóa.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`countryName( value?: RefOrNormal<string>, style?: Intl.RelativeTimeFormatStyle ): ComputedRef<string>`}),` — Trả tên khu vực được địa phương hóa.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`số`,children:`Số`}),`
`,(0,c.jsx)(t.h4,{id:`number`,children:(0,c.jsx)(t.code,{children:`number`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`number( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng số hoặc chuỗi số theo locale và tùy chọn số.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Tùy chọn cấu hình.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const number = /*#__PURE__*/ formatter.number(amount, { maximumFractionDigits: 2 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`percent`,children:(0,c.jsx)(t.code,{children:`percent`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`percent( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng tỷ lệ thành phần trăm: 0.25 thành 25%.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Tùy chọn cấu hình.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const percent = /*#__PURE__*/ formatter.percent(0.25)
`})}),`
`,(0,c.jsx)(t.h4,{id:`percentby100`,children:(0,c.jsx)(t.code,{children:`percentBy100`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`percentBy100( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Chia cho 100 trước khi định dạng phần trăm: 25 thành 25%.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Tùy chọn cấu hình.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const percent = /*#__PURE__*/ formatter.percentBy100(25)
`})}),`
`,(0,c.jsx)(t.h4,{id:`plural`,children:(0,c.jsx)(t.code,{children:`plural`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`plural( value: RefOrNormal<NumberOrString>, words: string, options?: Intl.PluralRulesOptions, optionsNumber?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chọn dạng số nhiều và định dạng số lượng. Truyền các biến thể từ phân cách bằng dấu gạch đứng theo `,(0,c.jsx)(t.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`words: string`}),` — Các dạng từ phân cách bằng dấu gạch đứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.PluralRulesOptions`}),` — Tùy chọn cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — Tùy chọn định dạng số lượng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const label = /*#__PURE__*/ formatter.plural(amount, 'item|items')
`})}),`
`,(0,c.jsx)(t.h3,{id:`dấu-thập-phân`,children:`Dấu thập phân`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`decimal(): ComputedRef<string>`}),` — Trả dấu thập phân của locale.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tiền-tệ-và-đơn-vị`,children:`Tiền tệ và đơn vị`}),`
`,(0,c.jsx)(t.h4,{id:`currency`,children:(0,c.jsx)(t.code,{children:`currency`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`currency( value: RefOrNormal<NumberOrString>, currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>, numberOnly = false ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Định dạng tiền bằng mã tiền hoặc đối tượng tùy chọn phản ứng. `,(0,c.jsx)(t.code,{children:`numberOnly`}),` bỏ biểu diễn tiền tệ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>`}),` — Mã tiền tệ hoặc tùy chọn số Intl.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`numberOnly = false`}),` — Bỏ biểu diễn tiền tệ; mặc định false.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const money = /*#__PURE__*/ formatter.currency(amount, ref('USD'), false)
`})}),`
`,(0,c.jsx)(t.h4,{id:`unit`,children:(0,c.jsx)(t.code,{children:`unit`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`unit( value: RefOrNormal<NumberOrString>, unitOptions?: string | Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng số với đơn vị Intl; không chuyển đổi đơn vị theo khu vực.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — Mã đơn vị hoặc tùy chọn số Intl.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const distance = /*#__PURE__*/ formatter.unit(amount, 'meter')
`})}),`
`,(0,c.jsx)(t.h4,{id:`sizefile`,children:(0,c.jsx)(t.code,{children:`sizeFile`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`sizeFile( value: RefOrNormal<NumberOrString>, unitOptions: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terabyte' | 'petabyte' | Intl.NumberFormatOptions = 'byte' ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng dung lượng tệp bắt đầu từ đơn vị được truyền. Đơn vị chuỗi tăng khi giá trị vượt 1024; đối tượng tùy chọn được chuyển cho định dạng đơn vị.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions: 'byte'     | 'kilobyte'     | 'megabyte'     | 'gigabyte'     | 'terabyte'     | 'petabyte'     | Intl.NumberFormatOptions = 'byte'`}),` — Mã đơn vị hoặc tùy chọn số Intl.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const size = /*#__PURE__*/ formatter.sizeFile(2048, 'byte')
`})}),`
`,(0,c.jsx)(t.h3,{id:`ký-hiệu-tiền-tệ`,children:`Ký hiệu tiền tệ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencySymbol( currency: RefOrNormal<string>, currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = 'symbol' ): ComputedRef<string>`}),` — Trả biểu diễn tiền tệ được yêu cầu, dự phòng bằng mã tiền.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`định-dạng-ngày`,children:`Định dạng ngày`}),`
`,(0,c.jsx)(t.h4,{id:`date`,children:(0,c.jsx)(t.code,{children:`date`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`date( value: RefOrNormal<NumberOrStringOrDate>, type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, hour24?: boolean ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng ngày bằng kiểu Geo, tùy chọn ngày và tùy chọn đồng hồ 24 giờ.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Kiểu đầu ra hoặc loại sự kiện theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Kiểu Intl hoặc tùy chọn định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Có dùng đồng hồ 24 giờ hay không.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const date = /*#__PURE__*/ formatter.date(ref('2025-01-01'), 'date', 'long')
`})}),`
`,(0,c.jsx)(t.h3,{id:`tên-lịch-và-giờ`,children:`Tên lịch và giờ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`month( value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['month'] ): ComputedRef<string>`}),` — Trả tên tháng của ngày được truyền.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`months( style?: Intl.DateTimeFormatOptions['month'] ): ComputedRef<ItemValue<number | undefined>[]>`}),` — Trả mục giữ chỗ rồi 12 tháng đánh số 1–12.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`weekday( value?: RefOrNormal<NumberOrStringOrDate>, style?: Intl.DateTimeFormatOptions['weekday'] ): ComputedRef<string>`}),` — Trả tên ngày tuần của ngày được truyền.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`weekdays( style?: Intl.DateTimeFormatOptions['weekday'] ): ComputedRef<ItemValue<number | undefined>[]>`}),` — Trả mục giữ chỗ rồi bảy ngày tuần theo thứ tự locale.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`time(value: RefOrNormal<NumberOrStringOrDate>): ComputedRef<string>`}),` — Định dạng ngày được truyền thành giờ địa phương.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`thời-gian-tương-đối`,children:`Thời gian tương đối`}),`
`,(0,c.jsx)(t.h4,{id:`relative`,children:(0,c.jsx)(t.code,{children:`relative`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relative( value: RefOrNormal<NumberOrStringOrDate>, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, todayValue?: Date ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng ngày tương đối so với ngày tham chiếu theo cách chọn đơn vị của GeoIntl.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Kiểu Intl hoặc tùy chọn định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Ngày tham chiếu; bỏ qua thì dùng ngày hiện tại khi tính.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const relative = /*#__PURE__*/ formatter.relative('2025-01-03', 'long', new Date(2025, 0, 1))
`})}),`
`,(0,c.jsx)(t.h4,{id:`relativelimit`,children:(0,c.jsx)(t.code,{children:`relativeLimit`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relativeLimit( value: RefOrNormal<NumberOrStringOrDate>, limit: number, todayValue?: Date, relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions, dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions, type?: GeoDate, hour24?: boolean ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Dùng định dạng tương đối trong khoảng ±limit ngày có tính biên. Ngoài khoảng đó dùng định dạng ngày với mọi tùy chọn ngày đã truyền.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — Giới hạn thời gian tương đối theo ngày, có tính biên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — Ngày tham chiếu; bỏ qua thì dùng ngày hiện tại khi tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Kiểu hoặc tùy chọn Intl cho thời gian tương đối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dateOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Kiểu hoặc tùy chọn Intl cho ngày ngoài giới hạn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Kiểu đầu ra hoặc loại sự kiện theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — Có dùng đồng hồ 24 giờ hay không.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const label = /*#__PURE__*/ formatter.relativeLimit('2025-01-05', 2, new Date(2025, 0, 1), 'long', 'long', 'date', true)
`})}),`
`,(0,c.jsx)(t.h4,{id:`relativebyvalue`,children:(0,c.jsx)(t.code,{children:`relativeByValue`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`relativeByValue( value: RefOrNormal<NumberOrString>, unit: Intl.RelativeTimeFormatUnit, styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng khoảng có dấu theo đơn vị thời gian tương đối được truyền.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: Intl.RelativeTimeFormatUnit`}),` — Mã đơn vị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — Kiểu Intl hoặc tùy chọn định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const relative = /*#__PURE__*/ formatter.relativeByValue(-5, 'minute')
`})}),`
`,(0,c.jsx)(t.h3,{id:`sắp-xếp-theo-locale`,children:`Sắp xếp theo locale`}),`
`,(0,c.jsx)(t.h4,{id:`sort`,children:(0,c.jsx)(t.code,{children:`sort`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`sort<T>( data: RefOrNormal<T[]>, compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string] ): ComputedRef<T[]>`})}),`
`,(0,c.jsx)(t.p,{children:`Trả bản sao được sắp theo locale. Với mảng đối tượng, truyền hàm trả hai chuỗi để so sánh.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormal<T[]>`}),` — Mảng đầu vào; không bị thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compareFn: (a: T, b: T) => [string, string] = (a, b) => [a as string, b as string]`}),` — Ánh xạ hai mục thành hai chuỗi so sánh bằng Intl.Collator.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<T[]>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const sorted = /*#__PURE__*/ formatter.sort(ref([{ label: 'café' }, { label: 'apple' }]), (first, second) => [first.label, second.label])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};