import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/GeoIntl - Quốc tế hóa (Intl)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geointl`,children:`Lớp GeoIntl`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` là một lớp bao đóng (wrapper) cao cấp, được tối ưu hóa dựa trên API `,(0,c.jsx)(n.code,{children:`Intl`}),` gốc của trình duyệt, được thiết kế đặc biệt để tích hợp mượt mà với các tính năng định vị địa lý của `,(0,c.jsx)(n.code,{children:`Geo`}),`. Nó cung cấp một giao diện thống nhất, nhận biết vùng locale để định dạng số, tiền tệ, đơn vị, ngày tháng, thời gian và tên địa lý, đồng thời tự động xử lý việc nhận diện locale và quản lý instance.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này triển khai mẫu `,(0,c.jsx)(n.strong,{children:`Per-locale Singleton (Singleton theo vùng locale)`}),`, đảm bảo rằng chỉ có một instance được tạo và lưu vào bộ nhớ đệm cho mỗi mã locale duy nhất, giúp giảm đáng kể chi phí khởi tạo lặp lại các đối tượng `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm Instance`}),` — Tự động quản lý và tái sử dụng các instance dựa trên chuỗi locale chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`API định dạng thống nhất`}),` — Đơn giản hóa các cấu hình `,(0,c.jsx)(n.code,{children:`Intl`}),` phức tạp thành các phương thức cấp cao, dễ sử dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định vị thích ứng`}),` — Tự động lấy các giá trị mặc định từ trạng thái `,(0,c.jsx)(n.code,{children:`Geo`}),` toàn cầu nếu không có locale rõ ràng nào được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận thức văn hóa`}),` — Xử lý chính xác các quy ước đặt tên đa dạng, ngày bắt đầu của tuần trong lịch và các quy tắc số nhiều trên các nền văn hóa khác nhau.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.h3,{id:`getinstance`,children:(0,c.jsx)(n.code,{children:`getInstance`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất một instance từ bộ nhớ đệm hoặc tạo một instance mới cho mã locale được chỉ định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — Chuỗi locale chuẩn (ví dụ: `,(0,c.jsx)(n.code,{children:`'vi-VN'`}),`, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`). Mặc định là `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` — Instance singleton cho vùng locale được yêu cầu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('vi-VN')
const currentIntl = new GeoIntl() // Cũng sử dụng bộ nhớ đệm singleton nội bộ
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-địa-lý--địa-phương-hóa`,children:`Các phương thức Địa lý & Địa phương hóa`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Trả về chuỗi locale chuẩn đã chuẩn hóa (ví dụ: `,(0,c.jsx)(n.code,{children:`'vi-VN'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstDay(): string`}),` — Trả về chỉ định ngày đầu tiên trong tuần của vùng locale (ví dụ: `,(0,c.jsx)(n.code,{children:`'Mon'`}),`, `,(0,c.jsx)(n.code,{children:`'Sun'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tên--vùng`,children:`Tên & Vùng`}),`
`,(0,c.jsx)(n.h3,{id:`display`,children:(0,c.jsx)(n.code,{children:`display`})}),`
`,(0,c.jsxs)(n.p,{children:[`Cung cấp các bản dịch đã được địa phương hóa cho ngôn ngữ, vùng và chữ viết bằng công cụ `,(0,c.jsx)(n.code,{children:`Intl.DisplayNames`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — Mã định danh (ví dụ: `,(0,c.jsx)(n.code,{children:`'en'`}),`, `,(0,c.jsx)(n.code,{children:`'VN'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`typeOptions?`}),` — Một chuỗi đại diện cho kiểu hiển thị (`,(0,c.jsx)(n.code,{children:`'language'`}),`, `,(0,c.jsx)(n.code,{children:`'region'`}),`, `,(0,c.jsx)(n.code,{children:`'script'`}),`) hoặc một đối tượng `,(0,c.jsx)(n.code,{children:`Intl.DisplayNamesOptions`}),` đầy đủ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Tên hiển thị đã được địa phương hóa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.display('en', 'language') // 'Tiếng Anh'
intl.display('US', 'region')   // 'Hoa Kỳ'
`})}),`
`,(0,c.jsxs)(n.h3,{id:`languagename--countryname`,children:[(0,c.jsx)(n.code,{children:`languageName`}),` / `,(0,c.jsx)(n.code,{children:`countryName`})]}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức rút gọn để lấy tên ngôn ngữ và quốc gia đã được địa phương hóa.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — Mã ngôn ngữ hoặc quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`style?`}),` — Kiểu định dạng: `,(0,c.jsx)(n.code,{children:`'long'`}),`, `,(0,c.jsx)(n.code,{children:`'short'`}),`, hoặc `,(0,c.jsx)(n.code,{children:`'narrow'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`fullname`,children:(0,c.jsx)(n.code,{children:`fullName`})}),`
`,(0,c.jsxs)(n.p,{children:[`Định dạng họ tên đầy đủ của một người theo quy ước văn hóa của vùng locale hiện tại. Thứ tự các thành phần (Họ-Tên-Đệm hoặc Tên-Đệm-Họ) được xác định bởi `,(0,c.jsx)(n.code,{children:`nameFormat`}),` trong dữ liệu địa lý.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`last: string`}),` — Họ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first: string`}),` — Tên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`surname?: string`}),` — Tên đệm hoặc tên phụ (tùy chọn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`short?: boolean`}),` — Nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, viết tắt các phần sau phần đầu tiên thành chữ cái đầu (ví dụ: `,(0,c.jsx)(n.code,{children:`Nguyễn V. A.`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`định-dạng-số`,children:`Định dạng Số`}),`
`,(0,c.jsx)(n.h3,{id:`number`,children:(0,c.jsx)(n.code,{children:`number`})}),`
`,(0,c.jsxs)(n.p,{children:[`Định dạng một số bằng cách sử dụng các khả năng của `,(0,c.jsx)(n.code,{children:`Intl.NumberFormat`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Giá trị số cần định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Intl.NumberFormatOptions`}),` — Cấu hình cho phần thập phân, nhóm số, v.v.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`currency`,children:(0,c.jsx)(n.code,{children:`currency`})}),`
`,(0,c.jsx)(n.p,{children:`Trình định dạng tiền tệ chuyên dụng với vị trí ký hiệu tự động.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Số tiền. Cũng chấp nhận các chuỗi có hậu tố tiền tệ (ví dụ: `,(0,c.jsx)(n.code,{children:`'100 USD'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`currencyOptions?: string | Intl.NumberFormatOptions`}),` — Mã tiền tệ (`,(0,c.jsx)(n.code,{children:`'VND'`}),`) hoặc các tùy chọn định dạng chi tiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`numberOnly?: boolean`}),` — Nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, chỉ trả về các chữ số đã định dạng mà không có ký hiệu tiền tệ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.currency(1500, 'VND') // '1.500 ₫'
intl.currency('1500 USD')  // '$1,500.00'
`})}),`
`,(0,c.jsxs)(n.h3,{id:`unit--sizefile`,children:[(0,c.jsx)(n.code,{children:`unit`}),` / `,(0,c.jsx)(n.code,{children:`sizeFile`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Định dạng các số với đơn vị đo lường. `,(0,c.jsx)(n.code,{children:`sizeFile`}),` cung cấp khả năng tự động điều chỉnh tỷ lệ cho các giá trị byte (tự động chuyển sang KB, MB, GB).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Tham số (`,(0,c.jsx)(n.code,{children:`sizeFile`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Kích thước tính bằng byte.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unitOptions?`}),` — Đơn vị bắt đầu (mặc định là `,(0,c.jsx)(n.code,{children:`'byte'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`plural`,children:(0,c.jsx)(n.code,{children:`plural`})}),`
`,(0,c.jsx)(n.p,{children:`Áp dụng các quy tắc số nhiều nhận biết locale.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrString`}),` — Số lượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`words: string`}),` — Các dạng từ cách nhau bằng dấu `,(0,c.jsx)(n.code,{children:`|`}),`: `,(0,c.jsx)(n.code,{children:`one|two|few|many|other|zero`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?`}),` — `,(0,c.jsx)(n.code,{children:`Intl.PluralRulesOptions`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Số đã định dạng kèm theo dạng từ chính xác.`]}),`
`,(0,c.jsx)(n.h2,{id:`ngày--giờ`,children:`Ngày & Giờ`}),`
`,(0,c.jsxs)(n.h3,{id:`date--time`,children:[(0,c.jsx)(n.code,{children:`date`}),` / `,(0,c.jsx)(n.code,{children:`time`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Công cụ định dạng ngày chính cung cấp các biểu diễn địa phương hóa dựa trên các tùy chỉnh `,(0,c.jsx)(n.code,{children:`GeoDate`}),` định sẵn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrStringOrDate`}),` — Đầu vào ngày.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: GeoDate`}),` — Mã định danh định sẵn: `,(0,c.jsx)(n.code,{children:`'date'`}),`, `,(0,c.jsx)(n.code,{children:`'time'`}),`, `,(0,c.jsx)(n.code,{children:`'datetime'`}),`, `,(0,c.jsx)(n.code,{children:`'full'`}),`, v.v.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?`}),` — Tùy chọn `,(0,c.jsx)(n.code,{children:`Intl.DateTimeFormatOptions`}),` tùy chỉnh hoặc chuỗi kiểu tháng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hour24?: boolean`}),` — Ép buộc biểu diễn thời gian 24 giờ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsxs)(n.h3,{id:`months--weekdays`,children:[(0,c.jsx)(n.code,{children:`months`}),` / `,(0,c.jsx)(n.code,{children:`weekdays`})]}),`
`,(0,c.jsx)(n.p,{children:`Trả về các mảng nhãn đã được địa phương hóa cho tháng hoặc các ngày trong tuần, lý tưởng để đưa vào các thành phần lựa chọn trên UI.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ItemValue<number>[]`}),` — Mảng các đối tượng có trường `,(0,c.jsx)(n.code,{children:`label`}),` và `,(0,c.jsx)(n.code,{children:`value`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`thời-gian-tương-đối`,children:`Thời gian Tương đối`}),`
`,(0,c.jsx)(n.h3,{id:`relative`,children:(0,c.jsx)(n.code,{children:`relative`})}),`
`,(0,c.jsx)(n.p,{children:`Tính toán và định dạng sự khác biệt thời gian tương đối so với một điểm tham chiếu (hiện tại), tự động chọn đơn vị thời gian phù hợp nhất.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: NumberOrStringOrDate`}),` — Ngày trong quá khứ hoặc tương lai.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleOptions?`}),` — Kiểu định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`'long'`}),`, `,(0,c.jsx)(n.code,{children:`'short'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`todayValue?: Date`}),` — Điểm tham chiếu rõ ràng (mặc định là `,(0,c.jsx)(n.code,{children:`new Date()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`'2 giờ trước'`}),`, `,(0,c.jsx)(n.code,{children:`'sau 3 ngày'`}),`)`]}),`
`,(0,c.jsx)(n.h3,{id:`relativelimit`,children:(0,c.jsx)(n.code,{children:`relativeLimit`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trình định dạng có điều kiện kết nối giữa thời gian tương đối và tuyệt đối. Nếu ngày nằm trong một `,(0,c.jsx)(n.code,{children:`limit`}),` ngày nhất định, nó sẽ trả về thời gian tương đối; nếu không, nó sẽ chuyển sang định dạng ngày tuyệt đối tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`sắp-xếp`,children:`Sắp xếp`}),`
`,(0,c.jsx)(n.h3,{id:`sort`,children:(0,c.jsx)(n.code,{children:`sort`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sắp xếp một mảng các phần tử bằng cách sử dụng so sánh nhận biết locale thông qua `,(0,c.jsx)(n.code,{children:`Intl.Collator`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: T[]`}),` — Mảng mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compareFn?`}),` — Một hàm chuyển đổi tùy chọn để trích xuất các khóa sắp xếp từ các đối tượng phức tạp.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T[]`}),` — Mảng đã sắp xếp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`intl.sort(['chuối', 'táo', 'cam'])
// ['cam', 'chuối', 'táo']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};