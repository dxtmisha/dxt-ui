import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DatetimeRef - Quản lý ngày giờ phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-datetimeref`,children:`Lớp DatetimeRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp bọc phản ứng cho `,(0,c.jsx)(t.code,{children:`Datetime`}),`. Đồng bộ ref ngày đầu vào với `,(0,c.jsx)(t.code,{children:`Date`}),` đang dùng, cung cấp trường lịch computed và cập nhật sau thay đổi qua `,(0,c.jsx)(t.code,{children:`getDatetime()`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ngày bắt buộc`}),` — nhận chuỗi ngày, dấu thời gian hoặc `,(0,c.jsx)(t.code,{children:`Date`}),`, trực tiếp hoặc qua ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trường lịch`}),` — tháng được đánh số từ 1 đến 12.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng`}),` — kết quả địa phương hóa và chuẩn đều là computed ref.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( date: RefOrNormal<NumberOrStringOrDate>, type: RefOrNormal<GeoDate> = 'date', code: RefOrNormal<string> = Geo.getLocation() )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: RefOrNormal<NumberOrStringOrDate>`}),` — Ngày, dấu thời gian hoặc chuỗi ngày bắt buộc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: RefOrNormal<GeoDate> = 'date'`}),` — Kiểu đầu ra ngày; hàm dựng mặc định date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: RefOrNormal<string> = Geo.getLocation()`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Locale mặc định được lấy từ `,(0,c.jsx)(t.code,{children:`Geo.getLocation()`}),` lúc tạo. Truyền ref locale để theo dõi thay đổi về sau. Watcher ngày, kiểu và locale dùng lịch Vue; chờ `,(0,c.jsx)(t.code,{children:`nextTick()`}),` sau khi đổi ref. Thay đổi qua `,(0,c.jsx)(t.code,{children:`getDatetime()`}),` thông báo đồng bộ. `,(0,c.jsx)(t.code,{children:`getItem()`}),` giữ ref đầu vào gốc và không bị ghi lại bởi thay đổi lớp cơ sở. Dùng phạm vi hiệu ứng để dọn watcher. Gán `,(0,c.jsx)(t.code,{children:`Date`}),` mới cho `,(0,c.jsx)(t.code,{children:`getDate().value`}),` hoặc sửa qua `,(0,c.jsx)(t.code,{children:`getDatetime()`}),`; sửa trực tiếp bên trong `,(0,c.jsx)(t.code,{children:`Date`}),` không tự thông báo Vue.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DatetimeRef } from '@dxtmisha/functional'
import { effectScope, nextTick, ref } from 'vue'

const source = /*#__PURE__*/ ref('2024-02-29T12:00:00')
const code = /*#__PURE__*/ ref('en-US')
const scope = /*#__PURE__*/ effectScope()
const datetime = /*#__PURE__*/ scope.run(() => new DatetimeRef(source, 'date', code))
const formatted = /*#__PURE__*/ datetime?.locale()
source.value = '2025-01-01T00:00:00'
await nextTick()
code.value = 'vi-VN'
await nextTick()
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`trạng-thái-bên-dưới`,children:`Trạng thái bên dưới`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItem(): Ref<NumberOrStringOrDate>`}),` — Trả ref đầu vào ban đầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDate(): Ref<Date>`}),` — Trả ref Date đang dùng, đồng bộ với lớp cơ sở.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDatetime(): Datetime`}),` — Trả tiện ích cơ sở có thể thay đổi để thao tác lịch.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`trường-lịch`,children:`Trường lịch`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getYear(): ComputedRef<number>`}),` — Trả năm đầy đủ theo giờ địa phương.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMonth(): ComputedRef<number>`}),` — Trả tháng địa phương từ 1 đến 12.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getDay(): ComputedRef<number>`}),` — Trả ngày trong tháng theo giờ địa phương.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHour(): ComputedRef<number>`}),` — Trả giờ địa phương từ 0 đến 23.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMinute(): ComputedRef<number>`}),` — Trả phút địa phương từ 0 đến 59.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSecond(): ComputedRef<number>`}),` — Trả giây địa phương từ 0 đến 59.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getMaxDay(): ComputedRef<number>`}),` — Trả số ngày trong tháng hiện tại, có tính năm nhuận.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHoursType(): ComputedRef<GeoHours>`}),` — Trả định dạng đồng hồ locale dưới dạng chuỗi `,(0,c.jsx)(t.code,{children:`12`}),` hoặc `,(0,c.jsx)(t.code,{children:`24`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstDayCode(): ComputedRef<GeoFirstDay>`}),` — Trả mã ngày đầu tuần theo locale: Chủ nhật là 0.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`định-dạng`,children:`Định dạng`}),`
`,(0,c.jsx)(t.h4,{id:`locale`,children:(0,c.jsx)(t.code,{children:`locale`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`locale( type?: GeoDate, styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsx)(t.p,{children:`Trả định dạng địa phương theo kiểu hiện tại trừ khi truyền kiểu cụ thể.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: GeoDate`}),` — Kiểu đầu ra ngày; hàm dựng mặc định date.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`styleOptions?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions`}),` — Kiểu Intl hoặc tùy chọn định dạng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = /*#__PURE__*/ datetime?.locale('date', 'long')
`})}),`
`,(0,c.jsx)(t.h4,{id:`standard`,children:(0,c.jsx)(t.code,{children:`standard`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`standard(timeZone = true as boolean): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả biểu diễn chuẩn của tiện ích cơ sở cho kiểu hiện tại. `,(0,c.jsx)(t.code,{children:`timeZone`}),` điều khiển phần múi giờ khi định dạng có thời gian.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeZone = true as boolean`}),` — Có thêm thông tin múi giờ; mặc định true.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const standard = /*#__PURE__*/ datetime?.standard(false)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};