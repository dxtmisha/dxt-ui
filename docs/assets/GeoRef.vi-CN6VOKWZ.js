import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/GeoRef - Trình quản lý địa lý phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-georef`,children:`Lớp GeoRef`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp tĩnh (static) có tính phản ứng để quản lý dữ liệu địa lý toàn cục. Nó cung cấp quyền truy cập tập trung vào các thông tin như quốc gia hiện tại, ngôn ngữ, locale tiêu chuẩn và ngày đầu tiên của tuần, đảm bảo rằng mọi thay đổi đều được phản ánh trong toàn bộ ứng dụng.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính phản ứng toàn cục`}),` — sử dụng trạng thái phản ứng chung cho dữ liệu địa lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý tập trung`}),` — là "điểm tin cậy duy nhất" (single point of truth) cho các cài đặt quốc gia và ngôn ngữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Truy cập tĩnh`}),` — các phương thức có thể được gọi trực tiếp trên lớp mà không cần khởi tạo instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`sử-dụng-toàn-cục`,children:`Sử dụng Toàn cục`}),`
`,(0,c.jsxs)(t.p,{children:[`Vì `,(0,c.jsx)(t.code,{children:`GeoRef`}),` là một lớp tĩnh (static class), các phương thức của nó được gọi trực tiếp mà không cần tạo một instance. Nó phục vụ như một điểm truy cập duy nhất cho các cài đặt địa lý của ứng dụng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`trạng-thái-và-truy-xuất-dữ-liệu`,children:`Trạng thái và Truy xuất Dữ liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): Ref<GeoItemFull>`}),` — trả về một đối tượng phản ứng chứa thông tin địa lý đầy đủ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCountry(): ComputedRef<string>`}),` — mã quốc gia hiện tại (ví dụ: `,(0,c.jsx)(t.code,{children:`'VN'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): ComputedRef<string>`}),` — mã ngôn ngữ hiện tại (ví dụ: `,(0,c.jsx)(t.code,{children:`'vi'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStandard(): ComputedRef<string>`}),` — định dạng locale tiêu chuẩn đầy đủ (ví dụ: `,(0,c.jsx)(t.code,{children:`'vi-VN'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): ComputedRef<string>`}),` — ngày đầu tiên của tuần (ví dụ: `,(0,c.jsx)(t.code,{children:`'monday'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.h3,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thay đổi dữ liệu địa lý toàn cục dựa trên mã được cung cấp. Hành động này cập nhật ngay lập tức tất cả các phụ thuộc phản ứng của `,(0,c.jsx)(t.code,{children:`GeoRef`}),` trong toàn bộ ứng dụng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — mã quốc gia, dạng đầy đủ ngôn ngữ-quốc gia (ví dụ: "vi-VN") hoặc một trong hai.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu`,children:`Các kiểu`}),`
`,(0,c.jsx)(t.h3,{id:`geoitemfull`,children:`GeoItemFull`}),`
`,(0,c.jsx)(t.p,{children:`Cấu trúc đối tượng chứa thông tin địa lý đầy đủ.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`country: string`}),` — mã quốc gia hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language: string`}),` — mã ngôn ngữ hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`standard: string`}),` — mã locale tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`firstDay: string`}),` — ngày đầu tiên của tuần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`countryAlternative?: string[]`}),` — danh sách các mã quốc gia thay thế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`languageAlternative?: string[]`}),` — danh sách các mã ngôn ngữ thay thế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zone?: string | null`}),` — múi giờ hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`phoneCode?: string`}),` — mã điện thoại quốc gia.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`phoneMask?: string | string[]`}),` — mặt nạ số điện thoại điển hình.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};