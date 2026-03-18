import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/GeoIntl - Quốc tế hóa (Intl)"}),`
`,n.jsx(c.h1,{id:"lớp-geointl",children:"Lớp GeoIntl"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"GeoIntl"})," là một lớp bao đóng (wrapper) cao cấp, được tối ưu hóa dựa trên API ",n.jsx(c.code,{children:"Intl"})," gốc của trình duyệt, được thiết kế đặc biệt để tích hợp mượt mà với các tính năng định vị địa lý của ",n.jsx(c.code,{children:"Geo"}),". Nó cung cấp một giao diện thống nhất, nhận biết vùng locale để định dạng số, tiền tệ, đơn vị, ngày tháng, thời gian và tên địa lý, đồng thời tự động xử lý việc nhận diện locale và quản lý instance."]}),`
`,n.jsxs(c.p,{children:["Lớp này triển khai mẫu ",n.jsx(c.strong,{children:"Per-locale Singleton (Singleton theo vùng locale)"}),", đảm bảo rằng chỉ có một instance được tạo và lưu vào bộ nhớ đệm cho mỗi mã locale duy nhất, giúp giảm đáng kể chi phí khởi tạo lặp lại các đối tượng ",n.jsx(c.code,{children:"Intl"}),"."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bộ nhớ đệm Instance"})," — Tự động quản lý và tái sử dụng các instance dựa trên chuỗi locale chuẩn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"API định dạng thống nhất"})," — Đơn giản hóa các cấu hình ",n.jsx(c.code,{children:"Intl"})," phức tạp thành các phương thức cấp cao, dễ sử dụng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Định vị thích ứng"})," — Tự động lấy các giá trị mặc định từ trạng thái ",n.jsx(c.code,{children:"Geo"})," toàn cầu nếu không có locale rõ ràng nào được cung cấp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nhận thức văn hóa"})," — Xử lý chính xác các quy ước đặt tên đa dạng, ngày bắt đầu của tuần trong lịch và các quy tắc số nhiều trên các nền văn hóa khác nhau."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.h3,{id:"getinstance",children:n.jsx(c.code,{children:"getInstance"})}),`
`,n.jsx(c.p,{children:"Truy xuất một instance từ bộ nhớ đệm hoặc tạo một instance mới cho mã locale được chỉ định."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"code?: string"})," — Chuỗi locale chuẩn (ví dụ: ",n.jsx(c.code,{children:"'vi-VN'"}),", ",n.jsx(c.code,{children:"'en-US'"}),"). Mặc định là ",n.jsx(c.code,{children:"Geo.getLocation()"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GeoIntl"})," — Instance singleton cho vùng locale được yêu cầu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance('vi-VN')
const currentIntl = new GeoIntl() // Cũng sử dụng bộ nhớ đệm singleton nội bộ
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức-địa-lý--địa-phương-hóa",children:"Các phương thức Địa lý & Địa phương hóa"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getLocation(): string"})," — Trả về chuỗi locale chuẩn đã chuẩn hóa (ví dụ: ",n.jsx(c.code,{children:"'vi-VN'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getFirstDay(): string"})," — Trả về chỉ định ngày đầu tiên trong tuần của vùng locale (ví dụ: ",n.jsx(c.code,{children:"'Mon'"}),", ",n.jsx(c.code,{children:"'Sun'"}),")."]}),`
`]}),`
`,n.jsx(c.h2,{id:"tên--vùng",children:"Tên & Vùng"}),`
`,n.jsx(c.h3,{id:"display",children:n.jsx(c.code,{children:"display"})}),`
`,n.jsxs(c.p,{children:["Cung cấp các bản dịch đã được địa phương hóa cho ngôn ngữ, vùng và chữ viết bằng công cụ ",n.jsx(c.code,{children:"Intl.DisplayNames"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value?: string"})," — Mã định danh (ví dụ: ",n.jsx(c.code,{children:"'en'"}),", ",n.jsx(c.code,{children:"'VN'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"typeOptions?"})," — Một chuỗi đại diện cho kiểu hiển thị (",n.jsx(c.code,{children:"'language'"}),", ",n.jsx(c.code,{children:"'region'"}),", ",n.jsx(c.code,{children:"'script'"}),") hoặc một đối tượng ",n.jsx(c.code,{children:"Intl.DisplayNamesOptions"})," đầy đủ."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})," — Tên hiển thị đã được địa phương hóa."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`intl.display('en', 'language') // 'Tiếng Anh'
intl.display('US', 'region')   // 'Hoa Kỳ'
`})}),`
`,n.jsxs(c.h3,{id:"languagename--countryname",children:[n.jsx(c.code,{children:"languageName"})," / ",n.jsx(c.code,{children:"countryName"})]}),`
`,n.jsx(c.p,{children:"Các phương thức rút gọn để lấy tên ngôn ngữ và quốc gia đã được địa phương hóa."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value?: string"})," — Mã ngôn ngữ hoặc quốc gia."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"style?"})," — Kiểu định dạng: ",n.jsx(c.code,{children:"'long'"}),", ",n.jsx(c.code,{children:"'short'"}),", hoặc ",n.jsx(c.code,{children:"'narrow'"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsx(c.h3,{id:"fullname",children:n.jsx(c.code,{children:"fullName"})}),`
`,n.jsxs(c.p,{children:["Định dạng họ tên đầy đủ của một người theo quy ước văn hóa của vùng locale hiện tại. Thứ tự các thành phần (Họ-Tên-Đệm hoặc Tên-Đệm-Họ) được xác định bởi ",n.jsx(c.code,{children:"nameFormat"})," trong dữ liệu địa lý."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"last: string"})," — Họ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first: string"})," — Tên."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"surname?: string"})," — Tên đệm hoặc tên phụ (tùy chọn)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"short?: boolean"})," — Nếu là ",n.jsx(c.code,{children:"true"}),", viết tắt các phần sau phần đầu tiên thành chữ cái đầu (ví dụ: ",n.jsx(c.code,{children:"Nguyễn V. A."}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsx(c.h2,{id:"định-dạng-số",children:"Định dạng Số"}),`
`,n.jsx(c.h3,{id:"number",children:n.jsx(c.code,{children:"number"})}),`
`,n.jsxs(c.p,{children:["Định dạng một số bằng cách sử dụng các khả năng của ",n.jsx(c.code,{children:"Intl.NumberFormat"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: NumberOrString"})," — Giá trị số cần định dạng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: Intl.NumberFormatOptions"})," — Cấu hình cho phần thập phân, nhóm số, v.v."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsx(c.h3,{id:"currency",children:n.jsx(c.code,{children:"currency"})}),`
`,n.jsx(c.p,{children:"Trình định dạng tiền tệ chuyên dụng với vị trí ký hiệu tự động."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: NumberOrString"})," — Số tiền. Cũng chấp nhận các chuỗi có hậu tố tiền tệ (ví dụ: ",n.jsx(c.code,{children:"'100 USD'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"currencyOptions?: string | Intl.NumberFormatOptions"})," — Mã tiền tệ (",n.jsx(c.code,{children:"'VND'"}),") hoặc các tùy chọn định dạng chi tiết."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"numberOnly?: boolean"})," — Nếu là ",n.jsx(c.code,{children:"true"}),", chỉ trả về các chữ số đã định dạng mà không có ký hiệu tiền tệ."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`intl.currency(1500, 'VND') // '1.500 ₫'
intl.currency('1500 USD')  // '$1,500.00'
`})}),`
`,n.jsxs(c.h3,{id:"unit--sizefile",children:[n.jsx(c.code,{children:"unit"})," / ",n.jsx(c.code,{children:"sizeFile"})]}),`
`,n.jsxs(c.p,{children:["Định dạng các số với đơn vị đo lường. ",n.jsx(c.code,{children:"sizeFile"})," cung cấp khả năng tự động điều chỉnh tỷ lệ cho các giá trị byte (tự động chuyển sang KB, MB, GB)."]}),`
`,n.jsx(c.p,{children:n.jsxs(c.strong,{children:["Tham số (",n.jsx(c.code,{children:"sizeFile"}),"):"]})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: NumberOrString"})," — Kích thước tính bằng byte."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"unitOptions?"})," — Đơn vị bắt đầu (mặc định là ",n.jsx(c.code,{children:"'byte'"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsx(c.h3,{id:"plural",children:n.jsx(c.code,{children:"plural"})}),`
`,n.jsx(c.p,{children:"Áp dụng các quy tắc số nhiều nhận biết locale."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: NumberOrString"})," — Số lượng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"words: string"})," — Các dạng từ cách nhau bằng dấu ",n.jsx(c.code,{children:"|"}),": ",n.jsx(c.code,{children:"one|two|few|many|other|zero"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?"})," — ",n.jsx(c.code,{children:"Intl.PluralRulesOptions"}),"."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})," — Số đã định dạng kèm theo dạng từ chính xác."]}),`
`,n.jsx(c.h2,{id:"ngày--giờ",children:"Ngày & Giờ"}),`
`,n.jsxs(c.h3,{id:"date--time",children:[n.jsx(c.code,{children:"date"})," / ",n.jsx(c.code,{children:"time"})]}),`
`,n.jsxs(c.p,{children:["Công cụ định dạng ngày chính cung cấp các biểu diễn địa phương hóa dựa trên các tùy chỉnh ",n.jsx(c.code,{children:"GeoDate"})," định sẵn."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: NumberOrStringOrDate"})," — Đầu vào ngày."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type?: GeoDate"})," — Mã định danh định sẵn: ",n.jsx(c.code,{children:"'date'"}),", ",n.jsx(c.code,{children:"'time'"}),", ",n.jsx(c.code,{children:"'datetime'"}),", ",n.jsx(c.code,{children:"'full'"}),", v.v."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"styleOptions?"})," — Tùy chọn ",n.jsx(c.code,{children:"Intl.DateTimeFormatOptions"})," tùy chỉnh hoặc chuỗi kiểu tháng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"hour24?: boolean"})," — Ép buộc biểu diễn thời gian 24 giờ."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsxs(c.h3,{id:"months--weekdays",children:[n.jsx(c.code,{children:"months"})," / ",n.jsx(c.code,{children:"weekdays"})]}),`
`,n.jsx(c.p,{children:"Trả về các mảng nhãn đã được địa phương hóa cho tháng hoặc các ngày trong tuần, lý tưởng để đưa vào các thành phần lựa chọn trên UI."}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"ItemValue<number>[]"})," — Mảng các đối tượng có trường ",n.jsx(c.code,{children:"label"})," và ",n.jsx(c.code,{children:"value"}),"."]}),`
`,n.jsx(c.h2,{id:"thời-gian-tương-đối",children:"Thời gian Tương đối"}),`
`,n.jsx(c.h3,{id:"relative",children:n.jsx(c.code,{children:"relative"})}),`
`,n.jsx(c.p,{children:"Tính toán và định dạng sự khác biệt thời gian tương đối so với một điểm tham chiếu (hiện tại), tự động chọn đơn vị thời gian phù hợp nhất."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: NumberOrStringOrDate"})," — Ngày trong quá khứ hoặc tương lai."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"styleOptions?"})," — Kiểu định dạng (ví dụ: ",n.jsx(c.code,{children:"'long'"}),", ",n.jsx(c.code,{children:"'short'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"todayValue?: Date"})," — Điểm tham chiếu rõ ràng (mặc định là ",n.jsx(c.code,{children:"new Date()"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})," (ví dụ: ",n.jsx(c.code,{children:"'2 giờ trước'"}),", ",n.jsx(c.code,{children:"'sau 3 ngày'"}),")"]}),`
`,n.jsx(c.h3,{id:"relativelimit",children:n.jsx(c.code,{children:"relativeLimit"})}),`
`,n.jsxs(c.p,{children:["Trình định dạng có điều kiện kết nối giữa thời gian tương đối và tuyệt đối. Nếu ngày nằm trong một ",n.jsx(c.code,{children:"limit"})," ngày nhất định, nó sẽ trả về thời gian tương đối; nếu không, nó sẽ chuyển sang định dạng ngày tuyệt đối tiêu chuẩn."]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})]}),`
`,n.jsx(c.h2,{id:"sắp-xếp",children:"Sắp xếp"}),`
`,n.jsx(c.h3,{id:"sort",children:n.jsx(c.code,{children:"sort"})}),`
`,n.jsxs(c.p,{children:["Sắp xếp một mảng các phần tử bằng cách sử dụng so sánh nhận biết locale thông qua ",n.jsx(c.code,{children:"Intl.Collator"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"data: T[]"})," — Mảng mục tiêu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"compareFn?"})," — Một hàm chuyển đổi tùy chọn để trích xuất các khóa sắp xếp từ các đối tượng phức tạp."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T[]"})," — Mảng đã sắp xếp."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`intl.sort(['chuối', 'táo', 'cam'])
// ['cam', 'chuối', 'táo']
`})})]})}function j(e={}){const{wrapper:c}={...h(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
