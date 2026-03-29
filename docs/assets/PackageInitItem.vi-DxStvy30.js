import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PackageInitItem - Trình khởi tạo mục gói`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-packageinititem`,children:`Lớp PackageInitItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),` xử lý quá trình khởi tạo chi tiết của một thành phần riêng lẻ hoặc gói con. Nó quản lý vòng đời của tệp — từ việc áp dụng mẫu đến tích hợp với thư viện chính, `,(0,c.jsx)(n.code,{children:`package.json`}),` và Storybook.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo tệp`}),` — Tự động tạo các tệp dựa trên các mẫu có sẵn và các mẫu chuyên dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thay thế nội dung động`}),` — Tự động phân giải các trình giữ chỗ như `,(0,c.jsx)(n.code,{children:`[name]`}),` và `,(0,c.jsx)(n.code,{children:`@packages/library`}),` bên trong các tệp được tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp thư viện`}),` — Tự động tạo các điểm nhập và đăng ký thành phần trong thư viện toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý phụ thuộc`}),` — Cập nhật `,(0,c.jsx)(n.code,{children:`package.json`}),` gốc để bao gồm gói mới trong các phần phụ thuộc, xuất bản (exports) và danh sách tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa Storybook`}),` — Tự động chèn các câu chuyện (stories) mới vào cấu hình Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`PackageInitItem(name, dir, type, templates)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên hoặc định danh đường dẫn duy nhất của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string[]`}),` — Mảng đường dẫn tuyệt đối đến thư mục mục tiêu của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh loại gói (ví dụ: `,(0,c.jsx)(n.code,{children:`'functional'`}),`, `,(0,c.jsx)(n.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`templates?: string`}),` — Danh sách các mẫu tùy chọn cần áp dụng (cách nhau bởi dấu phẩy).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageInitItem } from '@dxtmisha/scripts'

const item = new PackageInitItem(
  'button',
  ['path', 'to', 'button'],
  'ui'
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Thực hiện chu trình khởi tạo đầy đủ: tạo tệp, cập nhật thư viện, `,(0,c.jsx)(n.code,{children:`package.json`}),` và Storybook.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-khởi-tạo`,children:`Quy trình khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được gọi, lớp sẽ thực hiện các bước sau theo thứ tự:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn bị file`}),`: Nó lấy các tệp mẫu từ thư mục media/templates dựa trên loại gói `,(0,c.jsx)(n.code,{children:`type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Áp dụng mẫu`}),`: Nếu các `,(0,c.jsx)(n.code,{children:`templates`}),` cụ thể được cung cấp, nó sẽ lấy và áp dụng chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi tệp`}),`: Nó ghi các tệp đã xử lý vào thư mục mục tiêu, thực hiện các thay thế nội dung cần thiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp (Thư viện)`}),`: Nếu tệp `,(0,c.jsx)(n.code,{children:`library.ts`}),` được tạo, nó sẽ kích hoạt việc tự động tạo các tệp xuất bản (export) trong thư mục gốc của thư viện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp (Gói)`}),`: Nó cập nhật `,(0,c.jsx)(n.code,{children:`package.json`}),` gốc để đăng ký phụ thuộc workspace và xuất bản của gói mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp (Storybook)`}),`: Nó quét cấu hình Storybook và thêm các mẫu để bao gồm các câu chuyện của thành phần mới.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`logic-phân-giải-nội-bộ`,children:`Logic phân giải nội bộ`}),`
`,(0,c.jsx)(n.p,{children:`Lớp sử dụng một số hàm hỗ trợ nội bộ để phân giải các quy ước đặt tên:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getName()`})}),`: Bình thường hóa tên thành phần để sử dụng trong nội dung tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getCode()`})}),`: Chuyển đổi tên thành mã có gạch nối cho các định danh gói.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getProjectName()`})}),`: Phân giải tên gói NPM đầy đủ bao gồm cả tiền tố thiết kế.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};