import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/GeoIntlRef - Định dạng số và ngày phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-geointlref`,children:`Lớp GeoIntlRef`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp phản ứng để quản lý việc định dạng số, ngày tháng, tiền tệ và thời gian tương đối. Đảm bảo chuỗi định dạng tự động cập nhật khi mã ngôn ngữ (locale) thay đổi.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính phản ứng`}),` — tự động cập nhật chuỗi định dạng khi `,(0,c.jsx)(t.code,{children:`Ref`}),` locale thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quốc tế hóa`}),` — hỗ trợ đầy đủ các tiêu chuẩn `,(0,c.jsx)(t.code,{children:`Intl`}),` cho số, ngày tháng, tiền tệ và đơn vị đo lường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thời gian tương đối`}),` — các phương thức thuận tiện để hiển thị thời gian như "2 ngày trước" với hỗ trợ giới hạn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Danh sách và Sắp xếp`}),` — các phương thức tích hợp để lấy tên tháng, ngày trong tuần và sắp xếp theo locale.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.h3,{id:`constructor`,children:(0,c.jsx)(t.code,{children:`constructor`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thực thể `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` mới để quản lý việc định dạng một cách phản ứng. Lớp này hoạt động như một lớp vỏ bọc xung quanh `,(0,c.jsx)(t.code,{children:`GeoIntl`}),` và đảm bảo tất cả các giá trị tính toán (computed) được tự động cập nhật khi mã locale thay đổi.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — mã locale (ví dụ: `,(0,c.jsx)(t.code,{children:`'vi-VN'`}),`, `,(0,c.jsx)(t.code,{children:`'en-US'`}),`). Có thể là một chuỗi thông thường hoặc một đối tượng `,(0,c.jsx)(t.code,{children:`ref`}),` phản ứng. Nếu không được cung cấp, ngôn ngữ hiện tại từ `,(0,c.jsx)(t.code,{children:`GeoRef`}),` sẽ được sử dụng.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoIntlRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Khởi tạo với locale phản ứng
const code = ref('vi-VN')
const geoIntl = new GeoIntlRef(code)

// 2. Sử dụng định dạng phản ứng
const price = geoIntl.currency(1000, 'VND') // ComputedRef: '1.000 ₫'

// 3. Tự động cập nhật
code.value = 'en-US' // price sẽ tự động cập nhật
`})}),`
`,(0,c.jsx)(t.h2,{id:`tên-hiển-thị`,children:`Tên hiển thị`}),`
`,(0,c.jsx)(t.h3,{id:`display`,children:(0,c.jsx)(t.code,{children:`display`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về tên đã dịch của một ngôn ngữ, khu vực hoặc hệ chữ viết.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: RefOrNormal<string>`}),` — mã cần dịch (ví dụ: 'en-US').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeOptions?: Intl.DisplayNamesOptions['type'] | Intl.DisplayNamesOptions`}),` — các tùy chọn loại hiển thị.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`languagename`,children:(0,c.jsx)(t.code,{children:`languageName`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về tên hiển thị của một ngôn ngữ.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: RefOrNormal<string>`}),` — mã ngôn ngữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Intl.RelativeTimeFormatStyle`}),` — kiểu định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`countryname`,children:(0,c.jsx)(t.code,{children:`countryName`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về tên hiển thị của một khu vực (quốc gia).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: RefOrNormal<string>`}),` — mã quốc gia.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Intl.RelativeTimeFormatStyle`}),` — kiểu định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h2,{id:`định-dạng-số`,children:`Định dạng số`}),`
`,(0,c.jsx)(t.h3,{id:`number`,children:(0,c.jsx)(t.code,{children:`number`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một số theo quy tắc của locale.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — giá trị cần định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — các tùy chọn định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`decimal`,children:(0,c.jsx)(t.code,{children:`decimal`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về ký hiệu phân cách thập phân cho locale hiện tại.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`percent`,children:(0,c.jsx)(t.code,{children:`percent`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một giá trị dưới dạng phần trăm.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — giá trị đầu vào (0.25 -> 25%).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — các tùy chọn định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`percentby100`,children:(0,c.jsx)(t.code,{children:`percentBy100`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một giá trị dưới dạng phần trăm sau khi chia cho 100.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — giá trị đầu vào (25 -> 25%).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — các tùy chọn định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`plural`,children:(0,c.jsx)(t.code,{children:`plural`})}),`
`,(0,c.jsx)(t.p,{children:`Chọn hình thức số nhiều chính xác cho một từ dựa trên giá trị số.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — giá trị số.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`words: string`}),` — danh sách các từ cách nhau bởi dấu `,(0,c.jsx)(t.code,{children:`|`}),` (ví dụ: 'quả táo|những quả táo').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.PluralRulesOptions`}),` — các tùy chọn quy tắc số nhiều.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`optionsNumber?: Intl.NumberFormatOptions`}),` — các tùy chọn định dạng số.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h2,{id:`tiền-tệ-và-đơn-vị`,children:`Tiền tệ và Đơn vị`}),`
`,(0,c.jsx)(t.h3,{id:`currency`,children:(0,c.jsx)(t.code,{children:`currency`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một giá trị số dưới dạng chuỗi tiền tệ.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — số tiền.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyOptions?: RefOrNormal<string | Intl.NumberFormatOptions>`}),` — mã tiền tệ hoặc các tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`numberOnly?: boolean`}),` — nếu là `,(0,c.jsx)(t.code,{children:`true`}),`, chỉ trả về số mà không có ký hiệu tiền tệ.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`currencysymbol`,children:(0,c.jsx)(t.code,{children:`currencySymbol`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về ký hiệu tiền tệ cho một mã tiền tệ nhất định.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currency: RefOrNormal<string>`}),` — mã tiền tệ (ví dụ: 'VND').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`currencyDisplay?: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry`}),` — cách hiển thị tiền tệ.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`unit`,children:(0,c.jsx)(t.code,{children:`unit`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một số với một đơn vị cụ thể.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — giá trị số.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — tên đơn vị hoặc các tùy chọn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`sizefile`,children:(0,c.jsx)(t.code,{children:`sizeFile`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng kích thước tệp sang định dạng dễ đọc (bytes, KB, MB, v.v.).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — kích thước tính bằng bytes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unitOptions?: string | Intl.NumberFormatOptions`}),` — đơn vị bắt đầu hoặc các tùy chọn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h2,{id:`ngày-và-giờ`,children:`Ngày và Giờ`}),`
`,(0,c.jsx)(t.h3,{id:`date`,children:(0,c.jsx)(t.code,{children:`date`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một ngày theo locale.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — ngày đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — loại định dạng ('date', 'time', 'datetime', v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — kiểu hiển thị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hour24?: boolean`}),` — có sử dụng định dạng 24 giờ hay không.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`time`,children:(0,c.jsx)(t.code,{children:`time`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một giá trị thời gian.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — ngày/giờ đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`month`,children:(0,c.jsx)(t.code,{children:`month`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về tên của một tháng cụ thể.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: RefOrNormal<NumberOrStringOrDate>`}),` — ngày đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Intl.DateTimeFormatOptions['month']`}),` — kiểu định dạng (long, short, narrow).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`months`,children:(0,c.jsx)(t.code,{children:`months`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về danh sách tên của tất cả các tháng.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Intl.DateTimeFormatOptions['month']`}),` — kiểu định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<ItemValue<number | undefined>[]>`})]}),`
`,(0,c.jsx)(t.h3,{id:`weekday`,children:(0,c.jsx)(t.code,{children:`weekday`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về tên của một ngày cụ thể trong tuần.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: RefOrNormal<NumberOrStringOrDate>`}),` — ngày đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Intl.DateTimeFormatOptions['weekday']`}),` — kiểu định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`weekdays`,children:(0,c.jsx)(t.code,{children:`weekdays`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về danh sách tên của tất cả các ngày trong tuần.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style?: Intl.DateTimeFormatOptions['weekday']`}),` — kiểu định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<ItemValue<number | undefined>[]>`})]}),`
`,(0,c.jsx)(t.h2,{id:`thời-gian-tương-đối`,children:`Thời gian tương đối`}),`
`,(0,c.jsx)(t.h3,{id:`relative`,children:(0,c.jsx)(t.code,{children:`relative`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một ngày dưới dạng thời gian tương đối (ví dụ: "2 ngày trước").`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — ngày đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — kiểu định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — ngày tham chiếu cho "hôm nay".`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`relativelimit`,children:(0,c.jsx)(t.code,{children:`relativeLimit`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng thời gian tương đối với việc tự động chuyển sang định dạng ngày tiêu chuẩn nếu đạt đến giới hạn.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrStringOrDate>`}),` — ngày đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` — giới hạn tính theo ngày.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`todayValue?: Date`}),` — ngày tham chiếu cho "hôm nay".`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`relativeOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — các tùy chọn định dạng tương đối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dateOptions?: Intl.DateTimeFormatOptions`}),` — các tùy chọn ngày tiêu chuẩn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h3,{id:`relativebyvalue`,children:(0,c.jsx)(t.code,{children:`relativeByValue`})}),`
`,(0,c.jsx)(t.p,{children:`Định dạng một khoảng thời gian số dưới dạng thời gian tương đối.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — số lượng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: Intl.RelativeTimeFormatUnit`}),` — đơn vị thời gian (day, month, hour, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.RelativeTimeFormatStyle | Intl.RelativeTimeFormatOptions`}),` — kiểu định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(t.h2,{id:`danh-sách-và-sắp-xếp`,children:`Danh sách và Sắp xếp`}),`
`,(0,c.jsx)(t.h3,{id:`sort`,children:(0,c.jsx)(t.code,{children:`sort`})}),`
`,(0,c.jsx)(t.p,{children:`Sắp xếp một mảng các chuỗi hoặc đối tượng dựa trên quy tắc của locale.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormal<T[]>`}),` — mảng dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`compareFn?: (a: T, b: T) => [string, string]`}),` — hàm ánh xạ để lấy các chuỗi có thể sắp xếp.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<T[]>`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};