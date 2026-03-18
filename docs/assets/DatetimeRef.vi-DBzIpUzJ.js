import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Classes/DatetimeRef - Quản lý ngày giờ phản ứng"}),`
`,n.jsx(e.h1,{id:"lớp-datetimeref",children:"Lớp DatetimeRef"}),`
`,n.jsxs(e.p,{children:["Một lớp để làm việc với ngày và giờ theo cách phản ứng (reactive). Nó cung cấp một lớp bọc cấp cao xung quanh tiện ích ",n.jsx(e.code,{children:"Datetime"}),", đảm bảo tự động đồng bộ hóa dữ liệu ngày tháng với các thuộc tính phản ứng của Vue và ngôn ngữ (locales)."]}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính phản ứng"})," — tích hợp với Vue ",n.jsx(e.code,{children:"ref"})," và ",n.jsx(e.code,{children:"computed"}),". Tự động theo dõi các thay đổi dữ liệu đầu vào và cập nhật tất cả các thành phần ngày tháng liên quan."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính đồng bộ"})," — liên kết nội bộ với lớp ",n.jsx(e.code,{children:"Datetime"}),". Bất kỳ thao tác ngày tháng nào qua đối tượng cơ sở (",n.jsx(e.code,{children:"getDatetime()"}),") đều được phản ánh ngay lập tức trong các thuộc tính phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bản địa hóa"})," — hỗ trợ tự động định dạng ngày giờ quốc tế thông qua ",n.jsx(e.code,{children:"Geo"})," và ",n.jsx(e.code,{children:"GeoIntl"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessor thuận tiện"})," — truy cập nhanh các thành phần ngày (năm, tháng, ngày, v.v.) qua các thuộc tính computed."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Tạo một thực thể ",n.jsx(e.code,{children:"DatetimeRef"})," mới. Lớp này tự động đồng bộ hóa với dữ liệu phản ứng được cung cấp. Nếu không có tham số nào được truyền vào, các giá trị mặc định (ngày hiện tại và ngôn ngữ hệ thống) sẽ được sử dụng."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"date: RefOrNormal<NumberOrStringOrDate>"})," — ngày để khởi tạo (chuỗi ISO, timestamp, đối tượng ",n.jsx(e.code,{children:"Date"}),", hoặc một ",n.jsx(e.code,{children:"ref"})," trỏ đến chúng)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: RefOrNormal<GeoDate> = 'date'"})," — định dạng đầu ra mặc định (phản ứng hoặc thông thường)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code: RefOrNormal<string> = Geo.getLocation()"})," — mã ngôn ngữ (phản ứng hoặc thông thường, ví dụ: 'vi-VN')."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DatetimeRef } from '@dxtmisha/functional'
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
`,n.jsx(e.h2,{id:"phương-thức-và-tham-số",children:"Phương thức và Tham số"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItem(): Ref<NumberOrStringOrDate>"})," — Trả về tham chiếu phản ứng đến giá trị ngày tháng ban đầu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDate(): Ref<Date>"})," — Trả về tham chiếu phản ứng đến đối tượng ",n.jsx(e.code,{children:"Date"})," nội bộ. Dùng để đồng bộ với lớp cơ sở."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDatetime(): Datetime"})," — Trả về thực thể của tiện ích ",n.jsx(e.code,{children:"Datetime"}),". Cho phép dùng các phương thức điều hướng (",n.jsx(e.code,{children:"moveBy..."}),", ",n.jsx(e.code,{children:"clone..."}),") trong khi vẫn giữ tính phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHoursType(): ComputedRef<GeoHours>"})," — Xác định định dạng giờ (12 hoặc 24 giờ) dựa trên ngôn ngữ và cài đặt hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFirstDayCode(): ComputedRef<GeoFirstDay>"})," — Trả về mã cho ngày đầu tiên của tuần (0 cho Chủ Nhật, 1 cho Thứ Hai) theo ngôn ngữ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMaxDay(): ComputedRef<number>"})," — Trả về số ngày trong tháng hiện tại (có tính đến năm nhuận)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"các-thành-phần-ngày-tháng",children:"Các thành phần ngày tháng"}),`
`,n.jsxs(e.p,{children:["Các phương thức này trả về các thuộc tính ",n.jsx(e.code,{children:"ComputedRef"})," tự động cập nhật khi trạng thái đối tượng thay đổi:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getYear(): ComputedRef<number>"})," — Trả về năm đầy đủ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMonth(): ComputedRef<number>"})," — Trả về tháng (1–12)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDay(): ComputedRef<number>"})," — Trả về ngày trong tháng (1-31)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHour(): ComputedRef<number>"})," — Trả về giờ của ngày hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getMinute(): ComputedRef<number>"})," — Trả về phút."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSecond(): ComputedRef<number>"})," — Trả về giây."]}),`
`]}),`
`,n.jsx(e.h2,{id:"định-dạng",children:"Định dạng"}),`
`,n.jsx(e.h3,{id:"locale",children:n.jsx(e.code,{children:"locale"})}),`
`,n.jsx(e.p,{children:"Trả về một chuỗi ngày tháng được bản địa hóa và định dạng theo ngôn ngữ và cài đặt."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: GeoDate"})," — loại định dạng ('date', 'time', 'datetime', 'month', 'year', v.v.). Mặc định là loại từ hàm khởi tạo."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"styleOptions?: object"})," — các tùy chọn định dạng ",n.jsx(e.code,{children:"Intl.DateTimeFormat"})," bổ sung."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]}),`
`,n.jsx(e.h3,{id:"standard",children:n.jsx(e.code,{children:"standard"})}),`
`,n.jsx(e.p,{children:"Trả về chuỗi ngày tháng ISO tiêu chuẩn."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"timeZone: boolean"})," — có bao gồm thông tin múi giờ hay không. Mặc định: ",n.jsx(e.code,{children:"true"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"ComputedRef<string>"})]})]})}function a(h={}){const{wrapper:e}={...c(),...h.components};return e?n.jsx(e,{...h,children:n.jsx(t,{...h})}):t(h)}export{a as default};
