import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Classes/DatetimeRef - Quản lý ngày giờ phản ứng`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-datetimeref`,children:`Lớp DatetimeRef`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp để làm việc với ngày và giờ theo cách phản ứng (reactive). Nó cung cấp một lớp bọc cấp cao xung quanh tiện ích `,(0,c.jsx)(n.code,{children:`Datetime`}),`, đảm bảo tự động đồng bộ hóa dữ liệu ngày tháng với các thuộc tính phản ứng của Vue và ngôn ngữ (locales).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính phản ứng`}),` — tích hợp với Vue `,(0,c.jsx)(n.code,{children:`ref`}),` và `,(0,c.jsx)(n.code,{children:`computed`}),`. Tự động theo dõi các thay đổi dữ liệu đầu vào và cập nhật tất cả các thành phần ngày tháng liên quan.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính đồng bộ`}),` — liên kết nội bộ với lớp `,(0,c.jsx)(n.code,{children:`Datetime`}),`. Bất kỳ thao tác ngày tháng nào qua đối tượng cơ sở (`,(0,c.jsx)(n.code,{children:`getDatetime()`}),`) đều được phản ánh ngay lập tức trong các thuộc tính phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bản địa hóa`}),` — hỗ trợ tự động định dạng ngày giờ quốc tế thông qua `,(0,c.jsx)(n.code,{children:`Geo`}),` và `,(0,c.jsx)(n.code,{children:`GeoIntl`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Accessor thuận tiện`}),` — truy cập nhanh các thành phần ngày (năm, tháng, ngày, v.v.) qua các thuộc tính computed.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một thực thể `,(0,c.jsx)(n.code,{children:`DatetimeRef`}),` mới. Lớp này tự động đồng bộ hóa với dữ liệu phản ứng được cung cấp. Nếu không có tham số nào được truyền vào, các giá trị mặc định (ngày hiện tại và ngôn ngữ hệ thống) sẽ được sử dụng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — ngày để khởi tạo (chuỗi ISO, timestamp, đối tượng `,(0,c.jsx)(n.code,{children:`Date`}),`, hoặc một `,(0,c.jsx)(n.code,{children:`ref`}),` trỏ đến chúng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — định dạng đầu ra mặc định (phản ứng hoặc thông thường).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — mã ngôn ngữ (phản ứng hoặc thông thường, ví dụ: 'vi-VN').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Khởi tạo với một chuỗi phản ứng
const date = ref('2023-10-27')
const dt = new DatetimeRef(date, 'date', 'vi-VN')

// 2. Thời gian hiện tại (mặc định)
const now = new DatetimeRef()

// 3. Sử dụng một ngôn ngữ phản ứng
const locale = ref('en-US')
const dtLocale = new DatetimeRef(new Date(), 'datetime', locale)
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức-và-tham-số`,children:`Phương thức và Tham số`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Trả về tham chiếu phản ứng đến giá trị ngày tháng ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDate(): Ref<Date>`}),` — Trả về tham chiếu phản ứng đến đối tượng `,(0,c.jsx)(n.code,{children:`Date`}),` nội bộ. Dùng để đồng bộ với lớp cơ sở.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDatetime(): Datetime`}),` — Trả về thực thể của tiện ích `,(0,c.jsx)(n.code,{children:`Datetime`}),`. Cho phép dùng các phương thức điều hướng (`,(0,c.jsx)(n.code,{children:`moveBy...`}),`, `,(0,c.jsx)(n.code,{children:`clone...`}),`) trong khi vẫn giữ tính phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Xác định định dạng giờ (12 hoặc 24 giờ) dựa trên ngôn ngữ và cài đặt hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Trả về mã cho ngày đầu tiên của tuần (0 cho Chủ Nhật, 1 cho Thứ Hai) theo ngôn ngữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Trả về số ngày trong tháng hiện tại (có tính đến năm nhuận).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thành-phần-ngày-tháng`,children:`Các thành phần ngày tháng`}),`
`,(0,c.jsxs)(n.p,{children:[`Các phương thức này trả về các thuộc tính `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` tự động cập nhật khi trạng thái đối tượng thay đổi:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getYear(): ComputedRef<number>`}),` — Trả về năm đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMonth(): ComputedRef<number>`}),` — Trả về tháng (1–12).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDay(): ComputedRef<number>`}),` — Trả về ngày trong tháng (1-31).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHour(): ComputedRef<number>`}),` — Trả về giờ của ngày hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMinute(): ComputedRef<number>`}),` — Trả về phút.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSecond(): ComputedRef<number>`}),` — Trả về giây.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`định-dạng`,children:`Định dạng`}),`
`,(0,c.jsx)(n.h3,{id:`locale`,children:(0,c.jsx)(n.code,{children:`locale`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về một chuỗi ngày tháng được bản địa hóa và định dạng theo ngôn ngữ và cài đặt.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: GeoDate`}),` — loại định dạng ('date', 'time', 'datetime', 'month', 'year', v.v.). Mặc định là loại từ hàm khởi tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?: object`}),` — các tùy chọn định dạng `,(0,c.jsx)(n.code,{children:`Intl.DateTimeFormat`}),` bổ sung.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]}),`
`,(0,c.jsx)(n.h3,{id:`standard`,children:(0,c.jsx)(n.code,{children:`standard`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về chuỗi ngày tháng ISO tiêu chuẩn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeZone: boolean`}),` — có bao gồm thông tin múi giờ hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ComputedRef<string>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};