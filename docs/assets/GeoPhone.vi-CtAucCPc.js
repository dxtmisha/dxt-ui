import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/GeoPhone - Mặt nạ số điện thoại`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geophone`,children:`Lớp GeoPhone`}),`
`,(0,c.jsx)(n.p,{children:`Lớp chuyên biệt để lưu trữ và xử lý các mặt nạ số điện thoại quốc tế. Nó cung cấp một hệ thống mạnh mẽ để xác định thông tin vị trí địa lý của quốc gia từ các chuỗi số điện thoại, định dạng số thô thành các đặc tả mặt nạ địa phương và quản lý bản đồ mã điện thoại quốc tế dựa trên cấu trúc cây tiền tố (prefix-tree).`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này tích hợp sâu với dữ liệu địa lý `,(0,c.jsx)(n.code,{children:`Geo`}),` để cung cấp khả năng tự động phân giải mặt nạ dựa trên vùng locale hiện tại của người dùng hoặc các mã quốc gia cụ thể.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động khớp (Auto Mapping)`}),` — Tự động phân giải quốc gia và mẫu mặt nạ phù hợp một cách động thông qua tra cứu cây tiền tố đệ quy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa Cây Tiền tố (Prefix Tree)`}),` — Sử dụng cấu trúc `,(0,c.jsx)(n.code,{children:`map`}),` chuyên biệt (Prefix Tree) để tìm kiếm hiệu quả và hiệu suất cao trên các kế hoạch đánh số quốc tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa Thông minh`}),` — Tự động xử lý các biến thể quay số theo vùng, chẳng hạn như số 0 ở đầu hoặc các tiền tố quốc gia (ví dụ: số '8' của Nga).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định dạng Chuẩn hóa`}),` — Chuyển đổi các chuỗi số thô thành các định dạng điện thoại dễ đọc, phù hợp với các tiêu chuẩn viễn thông quốc tế.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-tìm-kiếm`,children:`Các phương thức Tìm kiếm`}),`
`,(0,c.jsx)(n.h3,{id:`getbyphone`,children:(0,c.jsx)(n.code,{children:`getByPhone`})}),`
`,(0,c.jsx)(n.p,{children:`Phương thức định danh chính phân tích một chuỗi số điện thoại để trích xuất thông tin địa lý và mặt nạ đánh số phù hợp nhất.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — Số điện thoại mục tiêu cần phân tích (chấp nhận các chuỗi thô hoặc đã được định dạng một phần).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneMapInfo`}),` — Một đối tượng cấu trúc chứa mục `,(0,c.jsx)(n.code,{children:`GeoPhoneMap`}),` khớp được và phần số đã được chuẩn hóa của điện thoại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

const info = GeoPhone.getByPhone('84901234567')
// trả về:
// { 
//   item: { info: { phone: 84, ... }, mask: ['+84 ** **** ****'], ... },
//   phone: '901234567' 
// }
`})}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất siêu dữ liệu điện thoại đã địa phương hóa được liên kết với một mã quốc gia cụ thể.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Mã quốc gia tiêu chuẩn ISO 3166 (ví dụ: `,(0,c.jsx)(n.code,{children:`'VN'`}),`, `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'US'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneValue | undefined`}),` — Siêu dữ liệu thô của quốc gia, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy trong bộ dữ liệu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.get('VN') 
// { phone: 84, within: 0, mask: ['+** ** **** ****'], value: 'VN' }
`})}),`
`,(0,c.jsx)(n.h3,{id:`getbycode`,children:(0,c.jsx)(n.code,{children:`getByCode`})}),`
`,(0,c.jsx)(n.p,{children:`Phương thức truy xuất mở rộng trả về dữ liệu mặt nạ đầy đủ bao gồm cả nút cây tìm kiếm cho một mã quốc gia nhất định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Chuỗi mã quốc gia mục tiêu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GeoPhoneMap | undefined`}),` — Đối tượng nút bản đồ đầy đủ cho mã được yêu cầu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.getByCode('US')
// { info: { phone: 1, ... }, mask: ['1 (***) ***-****'], ... }
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-truy-cập-dữ-liệu`,children:`Các phương thức Truy cập Dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoPhoneValue[]`}),` — Trả về danh sách phẳng đầy đủ, đã được sắp xếp của tất cả siêu dữ liệu điện thoại quốc tế đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMap(): Record<string, GeoPhoneMap>`}),` — Trả về nút gốc của cây tiền tố nội bộ được sử dụng để định danh số điện thoại tốc độ cao.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-định-dạng--tiện-ích`,children:`Các phương thức Định dạng & Tiện ích`}),`
`,(0,c.jsx)(n.h3,{id:`tomask`,children:(0,c.jsx)(n.code,{children:`toMask`})}),`
`,(0,c.jsx)(n.p,{children:`Chuyển đổi một chuỗi số điện thoại thô thành phiên bản đã được định dạng dựa trên một tập hợp các mặt nạ cụ thể.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — Đầu vào số thô.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`masks?: string[]`}),` — Một mảng các chuỗi mặt nạ hợp lệ để lặp qua nhằm tìm kiếm sự phù hợp.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — Chuỗi đã được định dạng cho người dùng, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không có độ dài mặt nạ nào khớp với đầu vào.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.toMask('901234567', ['+** ** **** ****']) 
// '+84 90 1234 567'
`})}),`
`,(0,c.jsx)(n.h3,{id:`removezero`,children:(0,c.jsx)(n.code,{children:`removeZero`})}),`
`,(0,c.jsx)(n.p,{children:`Chuẩn hóa biểu diễn số nội bộ bằng cách loại bỏ các số 0 ở đầu hoặc sửa các tiền tố quay số vùng để đảm bảo logic tìm kiếm nhất quán.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: string`}),` — Chuỗi số điện thoại đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi số đã được chuẩn hóa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`GeoPhone.removeZero('0901234567')  // '901234567'
GeoPhone.removeZero('89001234567') // '9001234567'
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-đối-tượng-geophone`,children:`Các đối tượng GeoPhone`}),`
`,(0,c.jsx)(n.h3,{id:`geophonevalue`,children:(0,c.jsx)(n.code,{children:`GeoPhoneValue`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc siêu dữ liệu cơ bản cho cấu hình điện thoại của mỗi quốc gia:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: number`}),` — Mã quay số (ví dụ: `,(0,c.jsx)(n.code,{children:`84`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`within: number`}),` — Mã quy tắc quay số nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Mảng các mẫu mặt nạ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Định danh quốc gia.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemap`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMap`})}),`
`,(0,c.jsx)(n.p,{children:`Một nút trong cây tiền tố nội bộ:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: GeoPhoneValue[]`}),` — Danh sách các mục thuộc nhánh này.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`info: GeoPhoneValue | undefined`}),` — Giá trị khớp tại nút số cụ thể này.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next: Record<string, GeoPhoneMap>`}),` — Con trỏ đến các chữ số tiếp theo trong cây.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};