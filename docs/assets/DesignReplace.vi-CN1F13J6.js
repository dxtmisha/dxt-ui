import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignReplace - Động cơ chuyển đổi mẫu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designreplace`,children:`Lớp DesignReplace`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignReplace`}),` là động cơ cốt lõi để chuyển đổi các tệp mẫu (templates) thô thành mã nguồn sẵn sàng cho dự án. Nó sử dụng một hệ thống đánh dấu chuyên biệt để xác định các phần văn bản cần được thay thế linh hoạt bằng tên thành phần, định nghĩa thuộc tính, kiểu dữ liệu hoặc logic tạo kiểu dáng được lấy từ `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` của thành phần.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải nhãn thông minh`}),` — Xác định và thay thế các khối văn bản được giới hạn bởi các nhận xét cụ thể (ví dụ: `,(0,c.jsx)(n.code,{children:`// :type`}),` hoặc `,(0,c.jsx)(n.code,{children:`<!-- :props -->`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đặt tên theo ngữ cảnh`}),` — Tự động chuyển đổi các trình giữ chỗ (placeholders) chung như `,(0,c.jsx)(n.code,{children:`[project]`}),`, `,(0,c.jsx)(n.code,{children:`[design]`}),`, và `,(0,c.jsx)(n.code,{children:`[component]`}),` dựa trên cấu hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêm kiểu dữ liệu (Type Injection)`}),` — Tạo các liên hợp kiểu (type unions) và giao diện TypeScript phức tạp trực tiếp từ siêu dữ liệu thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ giá trị mặc định`}),` — Phân giải và tiêm các giá trị mặc định cho các thuộc tính vào các đối tượng hoặc đối số constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo lớp có điều kiện`}),` — Tạo các đối tượng liên kết lớp Vue/TS và ánh xạ bộ chọn CSS được tối ưu hóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa đường dẫn`}),` — Tự động phân giải các đường dẫn nhập (import) tương đối dựa trên vị trí của tệp mục tiêu trong cây dự án.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Để khởi tạo một động cơ thay thế, hãy truyền vào cấu trúc dữ liệu của thành phần, mã định danh nhãn mục tiêu và chuỗi mẫu.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`structure: DesignStructure`}),` — Nguồn sự thật cho siêu dữ liệu và các quy tắc cấu trúc của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mark: string`}),` — Nhãn chính được sử dụng trong các mẫu để xác định các thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`'button'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sample: string`}),` — Nội dung văn bản của mẫu cần được sửa đổi.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignReplace } from '@dxtmisha/scripts'

const engine = new DesignReplace(structure, 'button', templateContent)
engine.replaceName().replaceType()
const output = engine.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — Trả về phiên bản cuối cùng của mẫu sau tất cả các chuyển đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNameFile(name: string): string`}),` — Xử lý tên tệp hoặc chuỗi để thay thế các trình giữ chỗ cấp dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceName(): this`}),` — Thay thế các nhãn tên thành phần chính trong toàn bộ mẫu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacePath(): this`}),` — Sửa các đường dẫn tương đối (`,(0,c.jsx)(n.code,{children:`../../../`}),`) để trỏ đến đúng vị trí gốc của dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceMark(name: string, data: string[], end = ''): this`}),` — Thực hiện thay thế khối cho một nhãn cụ thể bằng cách tiêm một mảng các chuỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceOnce(name?: string, removeReplacement?: boolean | Function): this`}),` — Xử lý các dấu thay thế một lần (`,(0,c.jsx)(n.code,{children:`.once`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tự-động-hóa-thuộc-tính--kiểu-dữ-liệu`,children:`Tự động hóa thuộc tính & kiểu dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceType(constructor?: string): this`}),` — Tạo và tiêm các kiểu TypeScript cho tất cả các thuộc tính thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceDefault(): this`}),` — Tiêm các giá trị mặc định cho các thuộc tính vào mẫu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceProps(): this`}),` — Tạo các đối tượng định nghĩa thuộc tính kiểu Vue.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacePropsValues(): this`}),` — Tạo các mảng giá trị được phép cho các thuộc tính (enums/unions).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểu-dáng--lớp-classes`,children:`Kiểu dáng & Lớp (Classes)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceClasses(template?: Function, end = ''): this`}),` — Tạo danh sách các lớp CSS có sẵn dựa trên cấu trúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceClassesValues(): this`}),` — Tạo logic liên kết lớp động cho các tệp triển khai logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceStylesValues(): this`}),` — Ánh xạ các thuộc tính thành phần với các biến tùy chỉnh CSS (CSS Variables).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replaceConstructorClasses(): this`}),` — Trình tạo lớp chuyên biệt cho các constructor của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`hệ-thống-đánh-dấu-marking-system`,children:`Hệ thống đánh dấu (Marking System)`}),`
`,(0,c.jsx)(n.p,{children:`Động cơ quét các mẫu nhận xét cụ thể để xác định nơi tiêm mã. Nó hỗ trợ nhiều kiểu nhận xét:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logic nội dòng`}),`: `,(0,c.jsx)(n.code,{children:`// :label data`}),` hoặc `,(0,c.jsx)(n.code,{children:`/* :label */ content /* :label.end */`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận xét mẫu`}),`: `,(0,c.jsx)(n.code,{children:`<!-- :label --> content <!-- :label.end -->`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính đặc hiệu của thuộc tính`}),`: `,(0,c.jsx)(n.code,{children:`:label.propertyName.none`}),` (được sử dụng để loại trừ các thuộc tính cụ thể khỏi một khối).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-chuyển-đổi`,children:`Quy trình chuyển đổi`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi một phương thức thay thế như `,(0,c.jsx)(n.code,{children:`replaceType()`}),` được gọi, lớp sẽ:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét`}),`: Xác định vị trí các dấu bắt đầu và kết thúc cho nhãn `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tham chiếu cấu trúc`}),`: Lặp qua các thuộc tính trong `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải logic`}),`: Xác định cú pháp TypeScript chính xác cho mỗi thuộc tính dựa trên kiểu giá trị của nó (boolean, string, hoặc union).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêm mã`}),`: Thay thế nội dung giữa các dấu bằng mã mới được tạo, duy trì lề (indentation) ban đầu.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};