import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PackageInit - Trình khởi tạo gói`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-packageinit`,children:`Lớp PackageInit`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PackageInit`}),` chịu trách nhiệm khởi tạo cấu trúc gói mới trong hệ thống thiết kế. Nó xử lý việc quét danh mục và ủy quyền khởi tạo tệp riêng lẻ cho lớp `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, đảm bảo thiết lập môi trường nhất quán dựa trên các mẫu và loại được cung cấp.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động triển khai cấu trúc`}),` — Tự động tạo hệ thống phân cấp thư mục cần thiết cho các gói mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo dựa trên mẫu`}),` — Hỗ trợ các loại gói và bộ mẫu khác nhau để thiết lập môi trường linh hoạt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý thư mục đệ quy`}),` — Xác định và xử lý các thư mục trống hoặc mới trong thư mục gốc của gói.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý vòng đời`}),` — Cung cấp một điểm nhập duy nhất để kích hoạt toàn bộ chuỗi khởi tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`PackageInit(type, templates, dir)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh loại gói (ví dụ: `,(0,c.jsx)(n.code,{children:`'functional'`}),`, `,(0,c.jsx)(n.code,{children:`'ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`templates?: string`}),` — Danh sách các mẫu tùy chọn cần áp dụng (cách nhau bởi dấu phẩy).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dir: string`}),` — Thư mục cơ sở nơi đặt các gói (mặc định là `,(0,c.jsx)(n.code,{children:`UI_DIR_PACKAGES`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PackageInit } from '@dxtmisha/scripts'

// Khởi tạo cho gói 'functional' với các mẫu mặc định
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Bắt đầu quá trình khởi tạo cho tất cả các thư mục được xác định trong đường dẫn mục tiêu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-khởi-tạo-chi-tiết`,children:`Quy trình khởi tạo chi tiết`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`make()`}),` tuân theo một trình tự cụ thể để đảm bảo thiết lập gói sạch sẽ:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét`}),`: Quét thư mục mục tiêu `,(0,c.jsx)(n.code,{children:`dir`}),` để xác định các thư mục con yêu cầu khởi tạo (thường là các thư mục trống).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ủy quyền`}),`: Đối với mỗi thư mục được xác định, nó tạo một thực thể của `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi`}),`: Kích hoạt phương thức `,(0,c.jsx)(n.code,{children:`make()`}),` trên mỗi `,(0,c.jsx)(n.code,{children:`PackageInitItem`}),`, phương thức này xử lý việc tạo tệp thực tế và áp dụng mẫu.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xác-định-thư-mục-mục-tiêu`,children:`Xác định thư mục mục tiêu`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp sử dụng phương thức nội bộ `,(0,c.jsx)(n.code,{children:`getDirs()`}),` để tìm các thư mục "trống" (không chứa thư mục con), sau đó được coi là gốc cho các thành phần gói mới.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};