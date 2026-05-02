import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/GeoPhone - Mặt nạ điện thoại`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-geophone`,children:`Lớp GeoPhone`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp chuyên biệt để lưu trữ và xử lý mặt nạ số điện thoại quốc tế. Cung cấp cơ chế xác định quốc gia theo chuỗi số điện thoại, định dạng số thô thành mặt nạ được bản địa hóa và quản lý bản đồ mã điện thoại phức tạp dựa trên cây tiền tố (Trie). Lớp này được tích hợp chặt chẽ với dữ liệu địa lý `,(0,c.jsx)(n.code,{children:`Geo`}),`, cho phép tự động xác định mặt nạ dựa trên ngôn ngữ hiện tại của người dùng hoặc mã quốc gia được cung cấp.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khớp tự động`}),` — Tự động xác định quốc gia và mẫu mặt nạ phù hợp thông qua tìm kiếm đệ quy trong cây tiền tố.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa cây tiền tố`}),` — Sử dụng cấu trúc `,(0,c.jsx)(n.code,{children:`map`}),` chuyên biệt (Trie) để tìm kiếm hiệu suất cao.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bình thường hóa thông minh`}),` — Tự động xử lý các biến thể quay số khu vực như số 0 ở đầu hoặc tiền tố quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định dạng tiêu chuẩn`}),` — Chuyển đổi các chuỗi số thô thành định dạng dễ đọc.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng-cơ-bản`,children:`Cách sử dụng cơ bản`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể sử dụng các phương thức tĩnh của lớp để xác định nhanh quốc gia theo số điện thoại hoặc định dạng.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

// Xác định quốc gia theo số điện thoại
const info = GeoPhone.getByPhone('84901234567')
console.log(info.item?.value) // 'VN'

// Định dạng theo mặt nạ
const formatted = GeoPhone.toMask('901234567', ['+** (***) ***-***'])
console.log(formatted) // '+84 (901) 234-567'
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): GeoPhoneValue[]`}),` — Trả về danh sách phẳng đầy đủ, đã được sắp xếp của tất cả dữ liệu meta điện thoại quốc tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMap(): Record<string, GeoPhoneMap>`}),` — Trả về nút gốc của cây tiền tố nội bộ được sử dụng để tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lựa-chọn`,children:`Lựa chọn`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string): GeoPhoneValue | undefined`}),` — Lấy dữ liệu meta điện thoại liên kết với một mã quốc gia cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByPhone(phone: string): GeoPhoneMapInfo`}),` — Phân tích chuỗi số điện thoại để trích xuất thông tin và mặt nạ phù hợp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByCode(code: string): GeoPhoneMap | undefined`}),` — Trả về thông tin mặt nạ đầy đủ cho một mã nhất định.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phụ-trợ`,children:`Phụ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toMask(phone: string, masks?: string[]): string | undefined`}),` — Chuyển đổi chuỗi số điện thoại thô thành phiên bản đã định dạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeZero(phone: string): string`}),` — Bình thường hóa biểu diễn nội bộ của số bằng cách loại bỏ các số 0 ở đầu hoặc điều chỉnh tiền tố khu vực.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiểu-dữ-liệu`,children:`Kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`geophonevalue`,children:(0,c.jsx)(n.code,{children:`GeoPhoneValue`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc siêu dữ liệu cơ bản cho cấu hình điện thoại của mỗi quốc gia:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone: number`}),` — Mã điện thoại quốc gia (ví dụ: `,(0,c.jsx)(n.code,{children:`84`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`within: number`}),` — Mã quy tắc gọi nội bộ (dùng để chọn ký tự đặc biệt trong mặt nạ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Mảng các mẫu mặt nạ được gán cho quốc gia.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Mã định danh quốc gia (ISO 3166).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemap`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMap`})}),`
`,(0,c.jsx)(n.p,{children:`Một nút trong cây tiền tố nội bộ (Trie) được sử dụng để tìm kiếm:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: GeoPhoneValue[]`}),` — Danh sách tất cả các mục có sẵn trong nhánh này của cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`info: GeoPhoneValue | undefined`}),` — Dữ liệu meta điện thoại nếu nút hiện tại là một mã đầy đủ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string | undefined`}),` — Mã định danh quốc gia cho nút này.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mask: string[]`}),` — Mảng các mặt nạ với các ký tự nội bộ đã được thay thế (`,(0,c.jsx)(n.code,{children:`~`}),`, `,(0,c.jsx)(n.code,{children:`=`}),`, `,(0,c.jsx)(n.code,{children:`$`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`maskFull: string[]`}),` — Mặt nạ đầy đủ bao gồm cả mã quốc tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next: Record<string, GeoPhoneMap>`}),` — Con trỏ đến các chữ số tiếp theo trong cây tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geophonemapinfo`,children:(0,c.jsx)(n.code,{children:`GeoPhoneMapInfo`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kết quả của phương thức tìm kiếm `,(0,c.jsx)(n.code,{children:`getByPhone`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item?: GeoPhoneMap`}),` — Nút cây tìm thấy với thông tin quốc gia và mặt nạ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`phone?: string`}),` — Phần còn lại của số sau khi tách mã quốc gia.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`logic-ký-tự-nội-bộ-within`,children:`Logic ký tự nội bộ (Within)`}),`
`,(0,c.jsx)(n.p,{children:`Logic nội bộ của lớp sẽ thay thế dấu "sao" đầu tiên trong mặt nạ bằng một ký tự đặc biệt tùy thuộc vào quy tắc khu vực:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`~`}),` — cho Nga (mã nội bộ 8).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`=`}),` — cho các khu vực mặc định/khác (ví dụ: Việt Nam, Hoa Kỳ).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const mapInfo = GeoPhone.getByCode('RU')
console.log(mapInfo.mask[0]) // '~ (***) ***-**-**'
`})}),`
`,(0,c.jsx)(n.h3,{id:`nhiều-mặt-nạ`,children:`Nhiều mặt nạ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const masks = ['+** (***) ***-***', '+** (***) ***-**-**']
console.log(GeoPhone.toMask('84901234567', masks)) // 11 số -> '+84 (901) 234-567'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};