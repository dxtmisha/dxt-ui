import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignComponent - Trình tạo thành phần thiết kế"}),`
`,n.jsx(h.h1,{id:"lớp-designcomponent",children:"Lớp DesignComponent"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"DesignComponent"})," là một triển khai chuyên biệt của ",n.jsx(h.code,{children:"DesignCommand"})," dành riêng cho việc tự động tạo và bảo trì các thành phần hệ thống thiết kế. Nó điều phối việc tạo ra đa dạng các loại tệp — từ kiểu dáng và logic thành phần đến tài liệu và siêu dữ liệu tích hợp."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tạo khung đầy đủ (Full-Cycle Scaffolding)"})," — Tự động tạo hơn 10 tệp thiết yếu cho một thành phần mới (Vue, SCSS, TS, MDX)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phân giải thuộc tính thông minh"})," — Sử dụng ",n.jsx(h.code,{children:"DesignTypescript"})," để đưa các thuộc tính (props) của thành phần trực tiếp vào các tệp được tạo."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tự động hóa Storybook"})," — Tạo các tệp ",n.jsx(h.code,{children:".stories.ts"})," và ",n.jsx(h.code,{children:".mdx"})," với tính năng tự động phân giải render và import."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Wiki tăng cường AI"})," — Tạo các thành phần bổ trợ chuyên biệt để tìm kiếm và hiển thị tài liệu do AI hỗ trợ."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích hợp Workspace"})," — Đăng ký các thành phần mới một cách liền mạch trong tệp ",n.jsx(h.code,{children:"package.json"})," gốc và danh sách xuất bản toàn cầu của thư viện."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Ánh xạ Style Token"})," — Tự động chuyển đổi cấu trúc dự án thành các style token SCSS."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(h.p,{children:"Để khởi tạo một thực thể trình tạo, hãy sử dụng hàm khởi tạo. Lưu ý rằng nó sẽ thiết lập thư mục mục tiêu dựa trên cấu hình dự án."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"command: string"})," — Mã định danh cho thành phần (ví dụ: ",n.jsx(h.code,{children:"'button'"}),", ",n.jsx(h.code,{children:"'input'"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"options: Record<string, string>"})," — Các cờ cấu hình tùy chọn."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignComponent } from '@dxtmisha/scripts'

const generator = new DesignComponent('button')
generator.make()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"make(): void"})," — Bắt đầu quá trình tạo toàn diện cho tất cả các tệp liên quan đến thành phần."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"cấu-trúc-các-tệp-được-tạo",children:"Cấu trúc các tệp được tạo"}),`
`,n.jsxs(h.p,{children:["Khi ",n.jsx(h.code,{children:"make()"})," được thực thi, hệ thống phân cấp tệp sau sẽ được tạo hoặc cập nhật trong thư mục của thành phần:"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"properties.json"})," — Lưu trữ dữ liệu ánh xạ chính cho thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"props.ts"})," — Định nghĩa TypeScript cho các props của thành phần, được phân giải từ các mẫu constructor."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"styleToken.scss"})," — Các style token SCSS dựa trên cấu trúc thiết kế của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"[Name].vue"})," — Tệp thành phần Vue chính với các lớp và kiểu dáng được cấu hình sẵn."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"[Name]AiWiki.vue"})," — Thành phần hỗ trợ cho tài liệu wiki tăng cường AI."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"index.ts"})," — Điểm nhập của thành phần cho các xuất bản công khai."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"wiki.ts"})," & ",n.jsx(h.code,{children:"wikiData.ts"})," — Siêu dữ liệu và thông tin thuộc tính có cấu trúc cho trang web tài liệu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"[Name].stories.ts"})," — Các câu chuyện Storybook tự động với phân giải thành phần động."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"[Name].mdx"})," — Tài liệu Markdown cho Storybook với các slot và dữ liệu props được điền sẵn."]}),`
`]}),`
`,n.jsx(h.h3,{id:"quy-trình-tích-hợp",children:"Quy trình tích hợp"}),`
`,n.jsx(h.p,{children:"Lớp này đảm bảo rằng thành phần mới được tích hợp hoàn toàn vào môi trường hệ thống thiết kế:"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Cập nhật gói"}),": Thêm một mục vào ",n.jsx(h.code,{children:"package.json"})," gốc trong phần ",n.jsx(h.code,{children:"exports"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Xuất bản thư viện"}),": Tạo một tệp proxy trong thư mục thư viện để cho phép nhập thành phần toàn cầu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khớp mô tả Wiki"}),": Quét ",n.jsx(h.code,{children:"wikiDescriptions"})," để tự động điền các câu chuyện Storybook với các ví dụ liên quan."]}),`
`]})]})}function x(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{x as default};
