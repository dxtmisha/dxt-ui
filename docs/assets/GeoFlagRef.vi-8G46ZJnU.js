import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional/Classes/GeoFlagRef - Quản lý cờ quốc gia phản ứng"}),`
`,n.jsx(c.h1,{id:"lớp-geoflagref",children:"Lớp GeoFlagRef"}),`
`,n.jsx(c.p,{children:"Một lớp để làm việc với cờ quốc gia theo cách phản ứng. Đảm bảo dữ liệu cờ luôn được đồng bộ với mã quốc gia phản ứng."}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính phản ứng"})," — tự động cập nhật dữ liệu khi mã quốc gia thay đổi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ nhiều quốc gia"})," — lấy thông tin cho nhiều quốc gia cùng một lúc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tên quốc gia bản ngữ"})," — lấy tên quốc gia bằng ngôn ngữ bản địa của họ."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Tạo một thực thể ",n.jsx(c.code,{children:"GeoFlagRef"})," mới để làm việc với cờ quốc gia. Lớp này hoạt động như một lớp vỏ bọc phản ứng (reactive wrapper) xung quanh ",n.jsx(c.code,{children:"GeoFlag"})," và tự động cập nhật dữ liệu khi mã quốc gia được cung cấp thay đổi."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"code: RefOrNormal<string>"})," — mã quốc gia (ví dụ: ",n.jsx(c.code,{children:"'VN'"}),", ",n.jsx(c.code,{children:"'US'"}),"). Có thể là một chuỗi thông thường hoặc một đối tượng ",n.jsx(c.code,{children:"ref"})," phản ứng. Mặc định là vị trí hiện tại thông qua ",n.jsx(c.code,{children:"Geo.getLocation()"}),"."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Khởi tạo với mã phản ứng
const code = ref('VN')
const geoFlag = new GeoFlagRef(code)

// 2. Sử dụng dữ liệu cờ
const flagIcon = geoFlag.getFlag() // ComputedRef với biểu tượng cho 'VN'

// 3. Tự động cập nhật
code.value = 'JP' // flagIcon sẽ tự động cập nhật
`})}),`
`,n.jsx(c.h2,{id:"trạng-thái",children:"Trạng thái"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getCode(): Ref<string>"})," — Trả về một tham chiếu phản ứng đến mã quốc gia hiện đang được thiết lập."]}),`
`]}),`
`,n.jsx(c.h2,{id:"truy-xuất-dữ-liệu",children:"Truy xuất dữ liệu"}),`
`,n.jsxs(c.p,{children:["Tất cả các phương thức truy xuất dữ liệu đều trả về ",n.jsx(c.code,{children:"ComputedRef"}),", đảm bảo đồng bộ hóa tự động với mã quốc gia hiện tại."]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(code?: string): ComputedRef<GeoFlagItem | undefined>"})," — Trả về thông tin chi tiết về một quốc gia: tên, biểu tượng và các siêu dữ liệu khác. Nếu không cung cấp ",n.jsx(c.code,{children:"code"}),", mã hiện tại từ trạng thái sẽ được sử dụng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getFlag(code?: string): ComputedRef<string | undefined>"})," — Trả về đường dẫn hoặc định danh biểu tượng cờ cho quốc gia được chỉ định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getList(codes?: string[]): ComputedRef<GeoFlagItem[]>"})," — Trả về một mảng dữ liệu cờ cho danh sách các mã."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>"})," — Trả về danh sách các quốc gia với tên bằng ngôn ngữ bản địa của họ."]}),`
`]}),`
`,n.jsx(c.h2,{id:"làm-việc-với-danh-sách-getlist-vs-getnational",children:"Làm việc với danh sách: getList vs getNational"}),`
`,n.jsx(c.p,{children:"Lớp cung cấp hai phương thức để lấy danh sách các quốc gia, chúng khác nhau ở cách bản địa hóa dữ liệu."}),`
`,n.jsxs(c.h3,{id:"getlist-danh-sách-địa-phương",children:[n.jsx(c.code,{children:"getList"})," (Danh sách địa phương)"]}),`
`,n.jsxs(c.p,{children:["Trả về danh sách các quốc gia trong đó tất cả các tên và nhãn được dịch sang ngôn ngữ của ",n.jsxs(c.strong,{children:["thực thể ",n.jsx(c.code,{children:"GeoFlagRef"})," hiện tại"]}),"."]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khi nào nên sử dụng:"})," khi bạn cần hiển thị danh sách các quốc gia trong giao diện người dùng bằng ngôn ngữ của người dùng (ví dụ: trong bộ chọn quốc gia)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kết quả:"})," nếu ",n.jsx(c.code,{children:"GeoFlagRef"})," được thiết lập là tiếng Việt (",n.jsx(c.code,{children:"VN"}),'), bạn sẽ nhận được "Nga" cho mã ',n.jsx(c.code,{children:"RU"}),"."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"getnational-danh-sách-quốc-gia",children:[n.jsx(c.code,{children:"getNational"})," (Danh sách quốc gia)"]}),`
`,n.jsxs(c.p,{children:["Trả về danh sách trong đó thông tin về mỗi quốc gia được trình bày bằng ",n.jsx(c.strong,{children:"ngôn ngữ bản địa (quốc gia) của quốc gia đó"}),"."]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khi nào nên sử dụng:"})," khi bạn cần hiển thị tên các quốc gia theo cách gọi của cư dân các quốc gia đó, hoặc thêm mô tả bằng ngôn ngữ bản địa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kết quả:"})," cho mã ",n.jsx(c.code,{children:"US"}),', bạn sẽ nhận được "United States" (bằng tiếng Anh) và cho mã ',n.jsx(c.code,{children:"VN"}),', bạn sẽ nhận được "Việt Nam" (bằng tiếng Việt), bất kể ngôn ngữ được thiết lập trong ',n.jsx(c.code,{children:"GeoFlagRef"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-kiểu",children:"Các kiểu"}),`
`,n.jsx(c.h3,{id:"geoflagitem",children:"GeoFlagItem"}),`
`,n.jsx(c.p,{children:"Một đối tượng chứa thông tin cơ bản về một quốc gia và cờ của quốc gia đó."}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"language: string"})," — Tên ngôn ngữ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"country: string"})," — Tên quốc gia."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"standard: string"})," — Mã locale tiêu chuẩn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"icon?: string"})," — Định danh biểu tượng cờ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"label: string"})," — Nhãn hiển thị (thường là tên quốc gia)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: string"})," — Giá trị để lựa chọn (thường là mã quốc gia)."]}),`
`]}),`
`,n.jsx(c.h3,{id:"geoflagnational",children:"GeoFlagNational"}),`
`,n.jsxs(c.p,{children:["Một đối tượng mở rộng với thông tin ngôn ngữ bản địa (kế thừa tất cả các trường từ ",n.jsx(c.code,{children:"GeoFlagItem"}),")."]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"description: string"})," — Mô tả bằng ngôn ngữ bản địa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"nationalLanguage: string"})," — Tên ngôn ngữ bằng chính ngôn ngữ đó."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"nationalCountry: string"})," — Tên quốc gia bằng chính ngôn ngữ đó."]}),`
`]})]})}function a(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(h,{...i})}):h(i)}export{a as default};
