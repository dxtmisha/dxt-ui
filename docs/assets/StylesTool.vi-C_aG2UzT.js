import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/StylesTool - Tiện ích xử lý Style`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylestool`,children:`Lớp StylesTool`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesTool`}),` là một container tiện ích tĩnh cấp cao cung cấp các chức năng thiết yếu cho quy trình tạo style của hệ thống thiết kế. Nó đóng gói logic quản lý thư mục, kiểm soát thụt lề, xây dựng các chỉ thị SCSS và các chuyển đổi tương thích với Sass.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bằng cách tập trung các thao tác chuỗi cấp thấp và tra cứu đường dẫn này, nó đảm bảo tính nhất quán trên tất cả các trình chuyển đổi `,(0,c.jsx)(n.code,{children:`StylesTo*`}),` và các lớp tạo mã.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm soát thụt lề`}),` — cung cấp một đơn vị thụt lề chuẩn 2 khoảng trắng và các phương thức để mở rộng nó dựa trên mức độ lồng nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trình dựng chỉ thị`}),` — tiêu chuẩn hóa cú pháp cho các câu lệnh SCSS `,(0,c.jsx)(n.code,{children:`@use`}),`, `,(0,c.jsx)(n.code,{children:`@import`}),`, và `,(0,c.jsx)(n.code,{children:`@forward`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định đường dẫn`}),` — tích hợp với cấu hình toàn cục để xác định đích đầu ra cho các tệp được tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính tương thích với Sass`}),` — xử lý các chuyển đổi tự động của cú pháp hàm CSS tùy chỉnh thành nội suy an toàn trong Sass.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định dạng dọc`}),` — quản lý việc kết hợp các dòng với ký tự CRLF nhất quán để tương thích giữa Windows/UNIX.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-về-tệp-và-thư-mục`,children:`Các phương thức về Tệp và Thư mục`}),`
`,(0,c.jsx)(n.h3,{id:`getdir`,children:(0,c.jsx)(n.code,{children:`getDir`})}),`
`,(0,c.jsx)(n.p,{children:`Xác định cấu trúc thư mục đích để lưu trữ các tệp style được tạo. Nó kết hợp thư mục style cốt lõi với tên dự án cụ thể được định nghĩa trong cấu hình thuộc tính.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — Một mảng đại diện cho các phân đoạn đường dẫn của thư mục đích.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-về-thụt-lề-và-khoảng-cách`,children:`Các phương thức về Thụt lề và Khoảng cách`}),`
`,(0,c.jsx)(n.h3,{id:`getspace`,children:(0,c.jsx)(n.code,{children:`getSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy đơn vị thụt lề cơ sở được sử dụng trong toàn bộ các tệp style được tạo của dự án.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Trả về một chuỗi bao gồm 2 khoảng trắng (`,(0,c.jsx)(n.code,{children:`  `}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addspace`,children:(0,c.jsx)(n.code,{children:`addSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một chuỗi thụt lề dựa trên mức độ lồng nhau được chỉ định. Điều này được sử dụng để căn chỉnh các khối mã bên trong các cấu trúc lồng nhau như media queries hoặc các khối selector.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`level: number`}),` — Mức độ lồng nhau mong muốn (0 cho không thụt lề, 1 cho 2 khoảng trắng, 2 cho 4 khoảng trắng, v.v.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi thụt lề kết quả.`]}),`
`,(0,c.jsx)(n.h3,{id:`increasespace`,children:(0,c.jsx)(n.code,{children:`increaseSpace`})}),`
`,(0,c.jsx)(n.p,{children:`Thêm một cấp thụt lề bổ sung (2 khoảng trắng) vào một chuỗi khoảng trắng hiện có. Điều này hữu ích trong quá trình duyệt cây đệ quy nơi độ sâu tăng dần.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — Chuỗi thụt lề hiện tại cần được mở rộng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi thụt lề đã được cập nhật với một cấp bổ sung.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-chỉ-thị-scss`,children:`Các phương thức chỉ thị SCSS`}),`
`,(0,c.jsx)(n.h3,{id:`addimport`,children:(0,c.jsx)(n.code,{children:`addImport`})}),`
`,(0,c.jsxs)(n.p,{children:[`Xây dựng một chỉ thị SCSS `,(0,c.jsx)(n.code,{children:`@import`}),` tiêu chuẩn cho một đường dẫn tệp nhất định.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn tệp cần được import.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chỉ thị đã định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`@import "path/to/file";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`adduse`,children:(0,c.jsx)(n.code,{children:`addUse`})}),`
`,(0,c.jsxs)(n.p,{children:[`Xây dựng một chỉ thị SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` hiện đại, đây là cách được khuyến nghị để tải các member function, mixin và biến trong Sass hiện đại.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn module cần được sử dụng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chỉ thị đã định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`@use "path/to/module";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addforward`,children:(0,c.jsx)(n.code,{children:`addForward`})}),`
`,(0,c.jsxs)(n.p,{children:[`Xây dựng một chỉ thị SCSS `,(0,c.jsx)(n.code,{children:`@forward`}),`. Điều này thường được sử dụng trong các tệp index để công khai các thành viên của một sub-module cho người dùng của package.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn module cần được chuyển tiếp.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chỉ thị đã định dạng (ví dụ: `,(0,c.jsx)(n.code,{children:`@forward "path/to/module";`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`addimportproperties`,children:(0,c.jsx)(n.code,{children:`addImportProperties`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một chỉ thị `,(0,c.jsx)(n.code,{children:`@use`}),` chuyên biệt cho thư viện cốt lõi `,(0,c.jsx)(n.code,{children:`@dxtmisha/styles`}),`, đặt bí danh cho nó là `,(0,c.jsx)(n.code,{children:`ui`}),` để sử dụng trong các khối thuộc tính được tạo.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Luôn trả về `,(0,c.jsx)(n.code,{children:`'@use "@dxtmisha/styles" as ui;'`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`định-dạng-và-tiện-ích`,children:`Định dạng và Tiện ích`}),`
`,(0,c.jsx)(n.h3,{id:`join`,children:(0,c.jsx)(n.code,{children:`join`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kết hợp một mảng các dòng mã được tạo thành một chuỗi văn bản duy nhất đã được định dạng. Nó sử dụng CRLF (`,(0,c.jsx)(n.code,{children:`\\r\\n`}),`) làm bộ phân tách dòng để đảm bảo định dạng nhất quán trên các môi trường.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string[]`}),` — Một mảng các chuỗi đại diện cho từng dòng mã riêng lẻ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi văn bản nhiều dòng kết quả.`]}),`
`,(0,c.jsx)(n.h3,{id:`tofunctioncss`,children:(0,c.jsx)(n.code,{children:`toFunctionCss`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích an toàn chuyển đổi các lời gọi `,(0,c.jsx)(n.code,{children:`@function`}),` tùy chỉnh bên trong các giá trị thuộc tính CSS thành cú pháp nội suy của Sass (`,(0,c.jsx)(n.code,{children:`#{...}`}),`). Điều này ngăn chặn các lỗi biên dịch Sass khi các hàm tùy chỉnh được sử dụng trong các ngữ cảnh yêu cầu đầu ra CSS thô.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Chuỗi giá trị thuộc tính CSS chứa các lời gọi hàm tùy chỉnh tiềm năng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi đã được chuyển đổi với các lời gọi hàm được nội suy.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesTool } from '@dxtmisha/scripts'

// 1. Lấy một mức thụt lề
const indent = StylesTool.addSpace(2) // "    "

// 2. Tạo một SCSS import
const importLine = StylesTool.addImport('../tokens/colors')

// 3. Chuyển đổi một lời gọi hàm tùy chỉnh
const safeValue = StylesTool.toFunctionCss('@getOpacity(0.5)') // "#{getOpacity(0.5)}"

// 4. Kết hợp các dòng
const fileContent = StylesTool.join([
  StylesTool.addImportProperties(),
  importLine,
  \`.element {\`,
  \`\${indent}color: red;\`,
  \`}\`
])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};