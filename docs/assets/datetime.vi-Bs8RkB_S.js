import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/# Làm việc với ngày tháng`}),`
`,(0,c.jsx)(t.h1,{id:`làm-việc-với-ngày-tháng`,children:`Làm việc với ngày tháng`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`Datetime`}),` là một công cụ nâng cao để thao tác, điều hướng và định dạng ngày tháng theo địa phương. Nó mở rộng đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),` tiêu chuẩn bằng cách thêm các phương thức di chuyển thông minh (theo ngày, tuần, tháng) và tích hợp liền mạch với hệ thống quốc tế hóa.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Datetime } from '@dxtmisha/functional-basic'

// 1. Khởi tạo (từ chuỗi, số hoặc đối tượng Date)
const date = new Datetime('2024-03-21')

// 2. Định dạng theo địa phương
date.locale()           // '21/03/2024' (tùy thuộc vào Geo)
date.localeMonth('long') // 'Tháng 3'

// 3. Lấy thông tin múi giờ
date.getTimeZone() // '+07:00'
`})}),`
`,(0,c.jsx)(t.h2,{id:`thao-tác-và-dịch-chuyển`,children:`Thao tác và Dịch chuyển`}),`
`,(0,c.jsxs)(t.p,{children:[`Các phương thức `,(0,c.jsx)(t.code,{children:`moveBy...`}),` cho phép bạn thay đổi ngày tháng so với giá trị hiện tại. Tất cả các phương thức đều hỗ trợ gọi chuỗi (chaining).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const date = new Datetime()

// Di chuyển 2 năm tới và 1 tháng lui
date.moveByYear(2).moveByMonth(-1)

// Thiết lập các giá trị cụ thể
date.setDay(15).setHour(12)
`})}),`
`,(0,c.jsx)(t.h2,{id:`điều-hướng`,children:`Điều hướng`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức chuyên dụng để điều hướng nhanh đến các biên của khoảng thời gian (đầu tháng, tuần tiếp theo, v.v.).`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const date = new Datetime()

// Chuyển đến ngày đầu tiên của tháng hiện tại
date.moveDayFirst()

// Chuyển đến ngày đầu tiên của tháng tiếp theo
date.moveMonthNext()

// Chuyển đến ngày đầu tiên của tuần (tính đến locale)
date.moveWeekdayFirst()
`})}),`
`,(0,c.jsx)(t.h2,{id:`sao-chép-tính-bất-biến`,children:`Sao chép (Tính bất biến)`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn cần lấy một ngày đã thay đổi mà không làm thay đổi đối tượng gốc, hãy sử dụng các phương thức `,(0,c.jsx)(t.code,{children:`clone...`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const start = new Datetime()
const nextMonth = start.cloneMonthNext() // Đối tượng Datetime mới

console.log(start.locale())     // Hôm nay
console.log(nextMonth.locale()) // +1 tháng
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};