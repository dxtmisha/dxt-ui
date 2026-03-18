import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional/Classes/GeoRef - Trình quản lý địa lý phản ứng"}),`
`,n.jsx(c.h1,{id:"lớp-georef",children:"Lớp GeoRef"}),`
`,n.jsx(c.p,{children:"Một lớp tĩnh (static) có tính phản ứng để quản lý dữ liệu địa lý toàn cục. Nó cung cấp quyền truy cập tập trung vào các thông tin như quốc gia hiện tại, ngôn ngữ, locale tiêu chuẩn và ngày đầu tiên của tuần, đảm bảo rằng mọi thay đổi đều được phản ánh trong toàn bộ ứng dụng."}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính phản ứng toàn cục"})," — sử dụng trạng thái phản ứng chung cho dữ liệu địa lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý tập trung"}),' — là "điểm tin cậy duy nhất" (single point of truth) cho các cài đặt quốc gia và ngôn ngữ.']}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Truy cập tĩnh"})," — các phương thức có thể được gọi trực tiếp trên lớp mà không cần khởi tạo instance."]}),`
`]}),`
`,n.jsx(c.h2,{id:"sử-dụng-toàn-cục",children:"Sử dụng Toàn cục"}),`
`,n.jsxs(c.p,{children:["Vì ",n.jsx(c.code,{children:"GeoRef"})," là một lớp tĩnh (static class), các phương thức của nó được gọi trực tiếp mà không cần tạo một instance. Nó phục vụ như một điểm truy cập duy nhất cho các cài đặt địa lý của ứng dụng."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { GeoRef } from '@dxtmisha/functional'
import { watch } from 'vue'

// 1. Lấy giá trị phản ứng
const country = GeoRef.getCountry()
console.log('Quốc gia hiện tại:', country.value)

// 2. Theo dõi các thay đổi
watch(GeoRef.getLanguage(), (lang) => {
  console.log('Ngôn ngữ đã thay đổi thành:', lang)
})

// 3. Thay đổi vị trí toàn cục
GeoRef.set('vi-VN') 
// Tất cả các lệnh gọi getCountry, getLanguage, v.v., sẽ tự động cập nhật
`})}),`
`,n.jsx(c.h2,{id:"trạng-thái-và-truy-xuất-dữ-liệu",children:"Trạng thái và Truy xuất Dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(): Ref<GeoItemFull>"})," — trả về một đối tượng phản ứng chứa thông tin địa lý đầy đủ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getCountry(): ComputedRef<string>"})," — mã quốc gia hiện tại (ví dụ: ",n.jsx(c.code,{children:"'VN'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getLanguage(): ComputedRef<string>"})," — mã ngôn ngữ hiện tại (ví dụ: ",n.jsx(c.code,{children:"'vi'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getStandard(): ComputedRef<string>"})," — định dạng locale tiêu chuẩn đầy đủ (ví dụ: ",n.jsx(c.code,{children:"'vi-VN'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getFirstDay(): ComputedRef<string>"})," — ngày đầu tiên của tuần (ví dụ: ",n.jsx(c.code,{children:"'monday'"}),")."]}),`
`]}),`
`,n.jsx(c.h2,{id:"hành-động",children:"Hành động"}),`
`,n.jsx(c.h3,{id:"set",children:n.jsx(c.code,{children:"set"})}),`
`,n.jsxs(c.p,{children:["Thay đổi dữ liệu địa lý toàn cục dựa trên mã được cung cấp. Hành động này cập nhật ngay lập tức tất cả các phụ thuộc phản ứng của ",n.jsx(c.code,{children:"GeoRef"})," trong toàn bộ ứng dụng."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"code: string"}),' — mã quốc gia, dạng đầy đủ ngôn ngữ-quốc gia (ví dụ: "vi-VN") hoặc một trong hai.']}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"void"})]}),`
`,n.jsx(c.h2,{id:"các-kiểu",children:"Các kiểu"}),`
`,n.jsx(c.h3,{id:"geoitemfull",children:"GeoItemFull"}),`
`,n.jsx(c.p,{children:"Cấu trúc đối tượng chứa thông tin địa lý đầy đủ."}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"country: string"})," — mã quốc gia hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"language: string"})," — mã ngôn ngữ hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"standard: string"})," — mã locale tiêu chuẩn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"firstDay: string"})," — ngày đầu tiên của tuần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"countryAlternative?: string[]"})," — danh sách các mã quốc gia thay thế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"languageAlternative?: string[]"})," — danh sách các mã ngôn ngữ thay thế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"zone?: string | null"})," — múi giờ hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"phoneCode?: string"})," — mã điện thoại quốc gia."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"phoneMask?: string | string[]"})," — mặt nạ số điện thoại điển hình."]}),`
`]})]})}function u(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(t,{...i})}):t(i)}export{u as default};
