import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignWiki - Trình tạo registry Wiki"}),`
`,n.jsx(i.h1,{id:"lớp-designwiki",children:"Lớp DesignWiki"}),`
`,n.jsxs(i.p,{children:["Lớp ",n.jsx(i.code,{children:"DesignWiki"})," cung cấp cơ sở hạ tầng thiết yếu cho hệ thống tài liệu của dự án. Nó tự động hóa việc tạo và khởi tạo tệp cấu hình wiki trung tâm, đảm bảo rằng công cụ tài liệu (Storybook) có một registry ổn định và được định kiểu để lưu trữ các tham số (arguments) và siêu dữ liệu của thành phần."]}),`
`,n.jsx(i.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Khởi tạo tự động"})," — Phát hiện các tệp cấu hình wiki còn thiếu và tạo chúng theo cấu trúc chuẩn."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Registry được định kiểu"})," — Tạo các cấu hình bằng cách sử dụng kiểu ",n.jsx(i.code,{children:"StorybookArgsToList"})," để đảm bảo tích hợp đầy đủ với framework tài liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đặt bí danh theo dự án"})," — Sử dụng tên hệ thống thiết kế (từ ",n.jsx(i.code,{children:"PropertiesConfig"}),") để tạo các biến registry duy nhất và nhận biết dự án."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Thực thi an toàn"})," — Thực hiện kiểm tra sự tồn tại trước khi ghi, ngăn chặn việc vô tình ghi đè lên các cấu hình tài liệu hiện có."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(i.p,{children:"Lớp không yêu cầu bất kỳ tham số nào để khởi tạo. Nó sử dụng các cấu hình toàn cục từ môi trường."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,n.jsx(i.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): void"})," — Kích hoạt quá trình khởi tạo wiki."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(i.h3,{id:"quy-trình-khởi-tạo-wiki",children:"Quy trình khởi tạo Wiki"}),`
`,n.jsxs(i.p,{children:["Khi ",n.jsx(i.code,{children:"make()"})," được thực thi, lớp sẽ tuân theo logic nội bộ sau:"]}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Phân giải đường dẫn"}),": Nó sử dụng các đường dẫn thư mục đã được cấu hình trước (",n.jsx(i.code,{children:"UI_DIRS_WIKI"}),") và tên tệp (",n.jsx(i.code,{children:"UI_FILE_NAME_WIKI"}),") để định vị tệp cấu hình mục tiêu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Kiểm tra sự tồn tại"}),": Nó truy vấn hệ thống tệp thông qua ",n.jsx(i.code,{children:"PropertiesFile.is()"})," để xác định xem tệp cấu hình ",n.jsx(i.code,{children:".ts"})," đã tồn tại hay chưa."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tạo Registry"}),": Nếu thiếu, nó sẽ lấy tên hệ thống thiết kế hiện tại và xây dựng một mẫu TypeScript:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Nó nhập (import) kiểu ",n.jsx(i.code,{children:"StorybookArgsToList"})," cần thiết."]}),`
`,n.jsxs(i.li,{children:["Nó xuất (export) một hằng số có tên ",n.jsx(i.code,{children:"wiki[DesignName]"}),"."]}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Lưu trữ"}),": Ghi mẫu đã tạo vào hệ thống tệp, đảm bảo công cụ tài liệu có thể bắt đầu nhập nó ngay lập tức."]}),`
`]}),`
`,n.jsx(i.h3,{id:"tích-hợp-với-storybook",children:"Tích hợp với Storybook"}),`
`,n.jsxs(i.p,{children:["Bằng cách tập trung hóa việc tạo registry này, ",n.jsx(i.code,{children:"DesignWiki"}),' đảm bảo rằng tất cả các nhà phát triển đang làm việc trên các thành phần đều có một nơi nhất quán để lập tài liệu cho các props và trạng thái. Registry này đóng vai trò là "nguồn sự thật" cho tài liệu tương tác, cho phép Storybook hiển thị động các điều khiển thành phần dựa trên siêu dữ liệu được lưu trữ tại đây.']})]})}function u(t={}){const{wrapper:i}={...c(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(h,{...t})}):h(t)}export{u as default};
