import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignComponent - Trình tạo thành phần thiết kế`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designcomponent`,children:`Lớp DesignComponent`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignComponent`}),` là một triển khai chuyên biệt của `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` dành riêng cho việc tự động tạo và bảo trì các thành phần hệ thống thiết kế. Nó điều phối việc tạo ra đa dạng các loại tệp — từ kiểu dáng và logic thành phần đến tài liệu và siêu dữ liệu tích hợp.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo khung đầy đủ (Full-Cycle Scaffolding)`}),` — Tự động tạo hơn 10 tệp thiết yếu cho một thành phần mới (Vue, SCSS, TS, MDX).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải thuộc tính thông minh`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`DesignTypescript`}),` để đưa các thuộc tính (props) của thành phần trực tiếp vào các tệp được tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa Storybook`}),` — Tạo các tệp `,(0,c.jsx)(n.code,{children:`.stories.ts`}),` và `,(0,c.jsx)(n.code,{children:`.mdx`}),` với tính năng tự động phân giải render và import.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Wiki tăng cường AI`}),` — Tạo các thành phần bổ trợ chuyên biệt để tìm kiếm và hiển thị tài liệu do AI hỗ trợ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Workspace`}),` — Đăng ký các thành phần mới một cách liền mạch trong tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` gốc và danh sách xuất bản toàn cầu của thư viện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ Style Token`}),` — Tự động chuyển đổi cấu trúc dự án thành các style token SCSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Để khởi tạo một thực thể trình tạo, hãy sử dụng hàm khởi tạo. Lưu ý rằng nó sẽ thiết lập thư mục mục tiêu dựa trên cấu hình dự án.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — Mã định danh cho thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'input'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — Các cờ cấu hình tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignComponent } from '@dxtmisha/scripts'

const generator = new DesignComponent('button')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Bắt đầu quá trình tạo toàn diện cho tất cả các tệp liên quan đến thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`cấu-trúc-các-tệp-được-tạo`,children:`Cấu trúc các tệp được tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi `,(0,c.jsx)(n.code,{children:`make()`}),` được thực thi, hệ thống phân cấp tệp sau sẽ được tạo hoặc cập nhật trong thư mục của thành phần:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` — Lưu trữ dữ liệu ánh xạ chính cho thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — Định nghĩa TypeScript cho các props của thành phần, được phân giải từ các mẫu constructor.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — Các style token SCSS dựa trên cấu trúc thiết kế của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name].vue`}),` — Tệp thành phần Vue chính với các lớp và kiểu dáng được cấu hình sẵn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name]AiWiki.vue`}),` — Thành phần hỗ trợ cho tài liệu wiki tăng cường AI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),` — Điểm nhập của thành phần cho các xuất bản công khai.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki.ts`}),` & `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` — Siêu dữ liệu và thông tin thuộc tính có cấu trúc cho trang web tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name].stories.ts`}),` — Các câu chuyện Storybook tự động với phân giải thành phần động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name].mdx`}),` — Tài liệu Markdown cho Storybook với các slot và dữ liệu props được điền sẵn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-tích-hợp`,children:`Quy trình tích hợp`}),`
`,(0,c.jsx)(n.p,{children:`Lớp này đảm bảo rằng thành phần mới được tích hợp hoàn toàn vào môi trường hệ thống thiết kế:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cập nhật gói`}),`: Thêm một mục vào `,(0,c.jsx)(n.code,{children:`package.json`}),` gốc trong phần `,(0,c.jsx)(n.code,{children:`exports`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất bản thư viện`}),`: Tạo một tệp proxy trong thư mục thư viện để cho phép nhập thành phần toàn cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khớp mô tả Wiki`}),`: Quét `,(0,c.jsx)(n.code,{children:`wikiDescriptions`}),` để tự động điền các câu chuyện Storybook với các ví dụ liên quan.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};