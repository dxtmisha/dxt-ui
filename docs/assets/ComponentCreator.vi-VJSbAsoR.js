import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/ComponentCreator - Tự động tạo thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-componentcreator`,children:`Lớp ComponentCreator`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp tiện ích để tự động hóa việc tạo khung sườn (skeleton) của thành phần trong các thư mục trống. Nó chủ động xác định các thư mục trong thư mục thành phần còn thiếu tệp và khởi tạo chúng bằng các mẫu tiêu chuẩn của dự án.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động khám phá`}),` — quét thư mục thành phần theo cách đệ quy để tìm các thư mục trống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo khung sườn thông minh`}),` — tự động kích hoạt quá trình tạo cho mỗi thư mục được xác định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính nhất quán của dự án`}),` — đảm bảo tất cả các thành phần mới đều bắt đầu với cùng một cấu trúc cơ bản và các tệp giống nhau.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo một phiên bản mới của `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),`. Nó tự động nhắm mục tiêu vào thư mục thành phần tiêu chuẩn được xác định trong cấu hình dự án.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức điều phối chính thực hiện quét đệ quy thư mục thành phần, xác định các thư mục không có tệp và kích hoạt quá trình tạo khung sườn `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` cho mỗi thư mục đó.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`quy-trình-tạo-khung-sườn-hoàn-chỉnh`,children:`Quy trình tạo khung sườn hoàn chỉnh`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy creator như một phần của kịch bản xây dựng hoặc chuẩn bị để đảm bảo rằng ngay cả các thư mục trống được tạo thủ công cũng được khởi tạo đúng cách với các tệp cần thiết (`,(0,c.jsx)(t.code,{children:`index.ts`}),`, `,(0,c.jsx)(t.code,{children:`types.ts`}),`, v.v.).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};