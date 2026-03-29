import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Classes/GeoFlagRef - Quản lý cờ quốc gia phản ứng`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geoflagref`,children:`Lớp GeoFlagRef`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp để làm việc với cờ quốc gia theo cách phản ứng. Đảm bảo dữ liệu cờ luôn được đồng bộ với mã quốc gia phản ứng.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính phản ứng`}),` — tự động cập nhật dữ liệu khi mã quốc gia thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ nhiều quốc gia`}),` — lấy thông tin cho nhiều quốc gia cùng một lúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tên quốc gia bản ngữ`}),` — lấy tên quốc gia bằng ngôn ngữ bản địa của họ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một thực thể `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` mới để làm việc với cờ quốc gia. Lớp này hoạt động như một lớp vỏ bọc phản ứng (reactive wrapper) xung quanh `,(0,c.jsx)(n.code,{children:`GeoFlag`}),` và tự động cập nhật dữ liệu khi mã quốc gia được cung cấp thay đổi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: RefOrNormal<string>`}),` — mã quốc gia (ví dụ: `,(0,c.jsx)(n.code,{children:`'VN'`}),`, `,(0,c.jsx)(n.code,{children:`'US'`}),`). Có thể là một chuỗi thông thường hoặc một đối tượng `,(0,c.jsx)(n.code,{children:`ref`}),` phản ứng. Mặc định là vị trí hiện tại thông qua `,(0,c.jsx)(n.code,{children:`Geo.getLocation()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// 1. Khởi tạo với mã phản ứng
const code = ref('VN')
const geoFlag = new GeoFlagRef(code)

// 2. Sử dụng dữ liệu cờ
const flagIcon = geoFlag.getFlag() // ComputedRef với biểu tượng cho 'VN'

// 3. Tự động cập nhật
code.value = 'JP' // flagIcon sẽ tự động cập nhật
`})}),`
`,(0,c.jsx)(n.h2,{id:`trạng-thái`,children:`Trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): Ref<string>`}),` — Trả về một tham chiếu phản ứng đến mã quốc gia hiện đang được thiết lập.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các phương thức truy xuất dữ liệu đều trả về `,(0,c.jsx)(n.code,{children:`ComputedRef`}),`, đảm bảo đồng bộ hóa tự động với mã quốc gia hiện tại.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): ComputedRef<GeoFlagItem | undefined>`}),` — Trả về thông tin chi tiết về một quốc gia: tên, biểu tượng và các siêu dữ liệu khác. Nếu không cung cấp `,(0,c.jsx)(n.code,{children:`code`}),`, mã hiện tại từ trạng thái sẽ được sử dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): ComputedRef<string | undefined>`}),` — Trả về đường dẫn hoặc định danh biểu tượng cờ cho quốc gia được chỉ định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): ComputedRef<GeoFlagItem[]>`}),` — Trả về một mảng dữ liệu cờ cho danh sách các mã.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): ComputedRef<GeoFlagNational[]>`}),` — Trả về danh sách các quốc gia với tên bằng ngôn ngữ bản địa của họ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`làm-việc-với-danh-sách-getlist-vs-getnational`,children:`Làm việc với danh sách: getList vs getNational`}),`
`,(0,c.jsx)(n.p,{children:`Lớp cung cấp hai phương thức để lấy danh sách các quốc gia, chúng khác nhau ở cách bản địa hóa dữ liệu.`}),`
`,(0,c.jsxs)(n.h3,{id:`getlist-danh-sách-địa-phương`,children:[(0,c.jsx)(n.code,{children:`getList`}),` (Danh sách địa phương)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về danh sách các quốc gia trong đó tất cả các tên và nhãn được dịch sang ngôn ngữ của `,(0,c.jsxs)(n.strong,{children:[`thực thể `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` hiện tại`]}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khi nào nên sử dụng:`}),` khi bạn cần hiển thị danh sách các quốc gia trong giao diện người dùng bằng ngôn ngữ của người dùng (ví dụ: trong bộ chọn quốc gia).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả:`}),` nếu `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` được thiết lập là tiếng Việt (`,(0,c.jsx)(n.code,{children:`VN`}),`), bạn sẽ nhận được "Nga" cho mã `,(0,c.jsx)(n.code,{children:`RU`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`getnational-danh-sách-quốc-gia`,children:[(0,c.jsx)(n.code,{children:`getNational`}),` (Danh sách quốc gia)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về danh sách trong đó thông tin về mỗi quốc gia được trình bày bằng `,(0,c.jsx)(n.strong,{children:`ngôn ngữ bản địa (quốc gia) của quốc gia đó`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khi nào nên sử dụng:`}),` khi bạn cần hiển thị tên các quốc gia theo cách gọi của cư dân các quốc gia đó, hoặc thêm mô tả bằng ngôn ngữ bản địa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả:`}),` cho mã `,(0,c.jsx)(n.code,{children:`US`}),`, bạn sẽ nhận được "United States" (bằng tiếng Anh) và cho mã `,(0,c.jsx)(n.code,{children:`VN`}),`, bạn sẽ nhận được "Việt Nam" (bằng tiếng Việt), bất kể ngôn ngữ được thiết lập trong `,(0,c.jsx)(n.code,{children:`GeoFlagRef`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(n.h3,{id:`geoflagitem`,children:`GeoFlagItem`}),`
`,(0,c.jsx)(n.p,{children:`Một đối tượng chứa thông tin cơ bản về một quốc gia và cờ của quốc gia đó.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language: string`}),` — Tên ngôn ngữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country: string`}),` — Tên quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard: string`}),` — Mã locale tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icon?: string`}),` — Định danh biểu tượng cờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label: string`}),` — Nhãn hiển thị (thường là tên quốc gia).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Giá trị để lựa chọn (thường là mã quốc gia).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geoflagnational`,children:`GeoFlagNational`}),`
`,(0,c.jsxs)(n.p,{children:[`Một đối tượng mở rộng với thông tin ngôn ngữ bản địa (kế thừa tất cả các trường từ `,(0,c.jsx)(n.code,{children:`GeoFlagItem`}),`).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description: string`}),` — Mô tả bằng ngôn ngữ bản địa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalLanguage: string`}),` — Tên ngôn ngữ bằng chính ngôn ngữ đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalCountry: string`}),` — Tên quốc gia bằng chính ngôn ngữ đó.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};