import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaStorageData - Container dữ liệu bộ nhớ`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmastoragedata`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaStorageData`})]}),`
`,(0,c.jsx)(n.p,{children:`Một container cấp thấp để quản lý các mục dữ liệu riêng lẻ bên trong các hệ thống lưu trữ của Figma (Bộ nhớ Client hoặc Dữ liệu Plugin). Nó theo dõi các giá trị cùng với thời gian cập nhật của chúng và xử lý logic hết hạn của bộ nhớ đệm (cache).`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi Cache`}),` — Tự động xác định xem dữ liệu còn hiệu lực hay không dựa trên Thời gian tồn tại (TTL) có thể cấu hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giám sát cập nhật`}),` — Lưu trữ mốc thời gian của lần cập nhật cuối cùng để tạo điều kiện kiểm tra độ tươi mới của dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sẵn sàng tuần tự hóa`}),` — Cung cấp các phương thức để chuyển đổi dữ liệu sang và từ định dạng lưu trữ tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`FigmaStorageDataValue`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo bằng tên khóa và thời gian cache tùy chọn tính bằng giây.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorageData } from '@dxtmisha/figma-code'

// Cache trong 1 giờ (3600 giây)
const dataContainer = new FigmaStorageData<string>('user-name', 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra-trạng-thái`,children:`Kiểm tra trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isNull(): boolean`}),` — Kiểm tra xem giá trị hiện tại có phải là null hoặc undefined không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isCache(): boolean`}),` — Kiểm tra xem dữ liệu có nằm trong thời gian tồn tại cho phép của cache không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValue(): boolean`}),` — Trả về true nếu giá trị được xác định và cache còn hiệu lực.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-dữ-liệu-accessors`,children:`Truy cập dữ liệu (Accessors)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): T | undefined`}),` — Trả về giá trị hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAge(): number | undefined`}),` — Trả về mốc thời gian của lần cập nhật cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — Trả về tên khóa lưu trữ duy nhất (có tiền tố).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCache(): number | undefined`}),` — Trả về thời gian cache đã cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`các-phương-thức-sửa-đổi-modifiers`,children:`Các phương thức sửa đổi (Modifiers)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T, age?: number): this`}),` — Thiết lập thủ công cả giá trị và thời gian.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByObject(value?: FigmaStorageDataValue<T>): this`}),` — Thiết lập dữ liệu từ một đối tượng lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(value?: T): this`}),` — Cập nhật giá trị và đặt thời gian thành mốc thời gian hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Xóa giá trị và thời gian.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`chuyển-đổi-conversion`,children:`Chuyển đổi (Conversion)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toValue(): FigmaStorageDataValue<T>`}),` — Chuyển đổi trạng thái hiện tại thành một đối tượng tương thích với bộ nhớ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`figmastoragedatavaluet`,children:(0,c.jsx)(n.code,{children:`FigmaStorageDataValue<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc được sử dụng để lưu trữ bền vững.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Dữ liệu thực tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age: number`}),` — Mốc thời gian (ms) khi dữ liệu được lưu.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};