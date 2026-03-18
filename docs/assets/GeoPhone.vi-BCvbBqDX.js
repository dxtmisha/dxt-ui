import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/GeoPhone - Mặt nạ số điện thoại"}),`
`,n.jsx(c.h1,{id:"lớp-geophone",children:"Lớp GeoPhone"}),`
`,n.jsx(c.p,{children:"Lớp chuyên biệt để lưu trữ và xử lý các mặt nạ số điện thoại quốc tế. Nó cung cấp một hệ thống mạnh mẽ để xác định thông tin vị trí địa lý của quốc gia từ các chuỗi số điện thoại, định dạng số thô thành các đặc tả mặt nạ địa phương và quản lý bản đồ mã điện thoại quốc tế dựa trên cấu trúc cây tiền tố (prefix-tree)."}),`
`,n.jsxs(c.p,{children:["Lớp này tích hợp sâu với dữ liệu địa lý ",n.jsx(c.code,{children:"Geo"})," để cung cấp khả năng tự động phân giải mặt nạ dựa trên vùng locale hiện tại của người dùng hoặc các mã quốc gia cụ thể."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động khớp (Auto Mapping)"})," — Tự động phân giải quốc gia và mẫu mặt nạ phù hợp một cách động thông qua tra cứu cây tiền tố đệ quy."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tối ưu hóa Cây Tiền tố (Prefix Tree)"})," — Sử dụng cấu trúc ",n.jsx(c.code,{children:"map"})," chuyên biệt (Prefix Tree) để tìm kiếm hiệu quả và hiệu suất cao trên các kế hoạch đánh số quốc tế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa Thông minh"})," — Tự động xử lý các biến thể quay số theo vùng, chẳng hạn như số 0 ở đầu hoặc các tiền tố quốc gia (ví dụ: số '8' của Nga)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Định dạng Chuẩn hóa"})," — Chuyển đổi các chuỗi số thô thành các định dạng điện thoại dễ đọc, phù hợp với các tiêu chuẩn viễn thông quốc tế."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-phương-thức-tìm-kiếm",children:"Các phương thức Tìm kiếm"}),`
`,n.jsx(c.h3,{id:"getbyphone",children:n.jsx(c.code,{children:"getByPhone"})}),`
`,n.jsx(c.p,{children:"Phương thức định danh chính phân tích một chuỗi số điện thoại để trích xuất thông tin địa lý và mặt nạ đánh số phù hợp nhất."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"phone: string"})," — Số điện thoại mục tiêu cần phân tích (chấp nhận các chuỗi thô hoặc đã được định dạng một phần)."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GeoPhoneMapInfo"})," — Một đối tượng cấu trúc chứa mục ",n.jsx(c.code,{children:"GeoPhoneMap"})," khớp được và phần số đã được chuẩn hóa của điện thoại."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional-basic'

const info = GeoPhone.getByPhone('84901234567')
// trả về:
// { 
//   item: { info: { phone: 84, ... }, mask: ['+84 ** **** ****'], ... },
//   phone: '901234567' 
// }
`})}),`
`,n.jsx(c.h3,{id:"get",children:n.jsx(c.code,{children:"get"})}),`
`,n.jsx(c.p,{children:"Truy xuất siêu dữ liệu điện thoại đã địa phương hóa được liên kết với một mã quốc gia cụ thể."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"code: string"})," — Mã quốc gia tiêu chuẩn ISO 3166 (ví dụ: ",n.jsx(c.code,{children:"'VN'"}),", ",n.jsx(c.code,{children:"'RU'"}),", ",n.jsx(c.code,{children:"'US'"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GeoPhoneValue | undefined"})," — Siêu dữ liệu thô của quốc gia, hoặc ",n.jsx(c.code,{children:"undefined"})," nếu không tìm thấy trong bộ dữ liệu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`GeoPhone.get('VN') 
// { phone: 84, within: 0, mask: ['+** ** **** ****'], value: 'VN' }
`})}),`
`,n.jsx(c.h3,{id:"getbycode",children:n.jsx(c.code,{children:"getByCode"})}),`
`,n.jsx(c.p,{children:"Phương thức truy xuất mở rộng trả về dữ liệu mặt nạ đầy đủ bao gồm cả nút cây tìm kiếm cho một mã quốc gia nhất định."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"code: string"})," — Chuỗi mã quốc gia mục tiêu."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GeoPhoneMap | undefined"})," — Đối tượng nút bản đồ đầy đủ cho mã được yêu cầu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`GeoPhone.getByCode('US')
// { info: { phone: 1, ... }, mask: ['1 (***) ***-****'], ... }
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức-truy-cập-dữ-liệu",children:"Các phương thức Truy cập Dữ liệu"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getList(): GeoPhoneValue[]"})," — Trả về danh sách phẳng đầy đủ, đã được sắp xếp của tất cả siêu dữ liệu điện thoại quốc tế đã đăng ký."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getMap(): Record<string, GeoPhoneMap>"})," — Trả về nút gốc của cây tiền tố nội bộ được sử dụng để định danh số điện thoại tốc độ cao."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-phương-thức-định-dạng--tiện-ích",children:"Các phương thức Định dạng & Tiện ích"}),`
`,n.jsx(c.h3,{id:"tomask",children:n.jsx(c.code,{children:"toMask"})}),`
`,n.jsx(c.p,{children:"Chuyển đổi một chuỗi số điện thoại thô thành phiên bản đã được định dạng dựa trên một tập hợp các mặt nạ cụ thể."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"phone: string"})," — Đầu vào số thô."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"masks?: string[]"})," — Một mảng các chuỗi mặt nạ hợp lệ để lặp qua nhằm tìm kiếm sự phù hợp."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string | undefined"})," — Chuỗi đã được định dạng cho người dùng, hoặc ",n.jsx(c.code,{children:"undefined"})," nếu không có độ dài mặt nạ nào khớp với đầu vào."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`GeoPhone.toMask('901234567', ['+** ** **** ****']) 
// '+84 90 1234 567'
`})}),`
`,n.jsx(c.h3,{id:"removezero",children:n.jsx(c.code,{children:"removeZero"})}),`
`,n.jsx(c.p,{children:"Chuẩn hóa biểu diễn số nội bộ bằng cách loại bỏ các số 0 ở đầu hoặc sửa các tiền tố quay số vùng để đảm bảo logic tìm kiếm nhất quán."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"phone: string"})," — Chuỗi số điện thoại đầu vào."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"string"})," — Chuỗi số đã được chuẩn hóa."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`GeoPhone.removeZero('0901234567')  // '901234567'
GeoPhone.removeZero('89001234567') // '9001234567'
`})}),`
`,n.jsx(c.h2,{id:"các-đối-tượng-geophone",children:"Các đối tượng GeoPhone"}),`
`,n.jsx(c.h3,{id:"geophonevalue",children:n.jsx(c.code,{children:"GeoPhoneValue"})}),`
`,n.jsx(c.p,{children:"Cấu trúc siêu dữ liệu cơ bản cho cấu hình điện thoại của mỗi quốc gia:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"phone: number"})," — Mã quay số (ví dụ: ",n.jsx(c.code,{children:"84"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"within: number"})," — Mã quy tắc quay số nội bộ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"mask: string[]"})," — Mảng các mẫu mặt nạ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: string"})," — Định danh quốc gia."]}),`
`]}),`
`,n.jsx(c.h3,{id:"geophonemap",children:n.jsx(c.code,{children:"GeoPhoneMap"})}),`
`,n.jsx(c.p,{children:"Một nút trong cây tiền tố nội bộ:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"items: GeoPhoneValue[]"})," — Danh sách các mục thuộc nhánh này."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"info: GeoPhoneValue | undefined"})," — Giá trị khớp tại nút số cụ thể này."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"next: Record<string, GeoPhoneMap>"})," — Con trỏ đến các chữ số tiếp theo trong cây."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { GeoPhone } from '@dxtmisha/functional'

// 1. Định danh quốc gia bằng số điện thoại
const lookup = GeoPhone.getByPhone('+84901234567')
if (lookup.item) {
    console.log('Quốc gia:', lookup.item.value) // 'VN'
    console.log('Mặt nạ chính:', lookup.item.mask[0])
}

// 2. Định dạng thủ công
const formatted = GeoPhone.toMask('442071234567', ['+** (**) **** ****'])
console.log(formatted) // '+44 (20) 7123 4567'

// 3. Chuẩn hóa đầu vào để tìm kiếm
const rawInput = '0084901234567'
const normalized = GeoPhone.removeZero(rawInput.replace(/^00/, ''))
console.log(normalized) // '84901234567'
`})})]})}function a(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(e,{...h})}):e(h)}export{a as default};
