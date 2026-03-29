import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignWiki - Trình tạo registry Wiki`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designwiki`,children:`Lớp DesignWiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` cung cấp cơ sở hạ tầng thiết yếu cho hệ thống tài liệu của dự án. Nó tự động hóa việc tạo và khởi tạo tệp cấu hình wiki trung tâm, đảm bảo rằng công cụ tài liệu (Storybook) có một registry ổn định và được định kiểu để lưu trữ các tham số (arguments) và siêu dữ liệu của thành phần.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo tự động`}),` — Phát hiện các tệp cấu hình wiki còn thiếu và tạo chúng theo cấu trúc chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Registry được định kiểu`}),` — Tạo các cấu hình bằng cách sử dụng kiểu `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),` để đảm bảo tích hợp đầy đủ với framework tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đặt bí danh theo dự án`}),` — Sử dụng tên hệ thống thiết kế (từ `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),`) để tạo các biến registry duy nhất và nhận biết dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi an toàn`}),` — Thực hiện kiểm tra sự tồn tại trước khi ghi, ngăn chặn việc vô tình ghi đè lên các cấu hình tài liệu hiện có.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Lớp không yêu cầu bất kỳ tham số nào để khởi tạo. Nó sử dụng các cấu hình toàn cục từ môi trường.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Kích hoạt quá trình khởi tạo wiki.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-khởi-tạo-wiki`,children:`Quy trình khởi tạo Wiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được thực thi, lớp sẽ tuân theo logic nội bộ sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải đường dẫn`}),`: Nó sử dụng các đường dẫn thư mục đã được cấu hình trước (`,(0,c.jsx)(n.code,{children:`UI_DIRS_WIKI`}),`) và tên tệp (`,(0,c.jsx)(n.code,{children:`UI_FILE_NAME_WIKI`}),`) để định vị tệp cấu hình mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm tra sự tồn tại`}),`: Nó truy vấn hệ thống tệp thông qua `,(0,c.jsx)(n.code,{children:`PropertiesFile.is()`}),` để xác định xem tệp cấu hình `,(0,c.jsx)(n.code,{children:`.ts`}),` đã tồn tại hay chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Registry`}),`: Nếu thiếu, nó sẽ lấy tên hệ thống thiết kế hiện tại và xây dựng một mẫu TypeScript:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nó nhập (import) kiểu `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),` cần thiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nó xuất (export) một hằng số có tên `,(0,c.jsx)(n.code,{children:`wiki[DesignName]`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ`}),`: Ghi mẫu đã tạo vào hệ thống tệp, đảm bảo công cụ tài liệu có thể bắt đầu nhập nó ngay lập tức.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tích-hợp-với-storybook`,children:`Tích hợp với Storybook`}),`
`,(0,c.jsxs)(n.p,{children:[`Bằng cách tập trung hóa việc tạo registry này, `,(0,c.jsx)(n.code,{children:`DesignWiki`}),` đảm bảo rằng tất cả các nhà phát triển đang làm việc trên các thành phần đều có một nơi nhất quán để lập tài liệu cho các props và trạng thái. Registry này đóng vai trò là "nguồn sự thật" cho tài liệu tương tác, cho phép Storybook hiển thị động các điều khiển thành phần dựa trên siêu dữ liệu được lưu trữ tại đây.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};