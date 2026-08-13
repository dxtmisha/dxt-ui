import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/ComponentWiki - Trình tạo Wiki hỗ trợ AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-componentwiki`,children:`Lớp ComponentWiki`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp điều phối nâng cao tự động hóa việc tạo tài liệu, câu chuyện (stories) và định nghĩa kiểu cho các thành phần bằng AI. Nó điều phối các bản dựng tạm thời, trích xuất mã và xử lý AI để tạo ra các tạo tác wiki toàn diện.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tài liệu do AI điều khiển`}),` — tận dụng AI để phân tích mã thành phần và tạo các mô tả MDX có ý nghĩa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo câu chuyện tự động`}),` — tạo các câu chuyện Storybook ban đầu dựa trên việc triển khai thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trích xuất kiểu`}),` — xác định và trích xuất các định nghĩa kiểu để đưa vào tài liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điều phối quy trình`}),` — xử lý vòng đời kỹ thuật bao gồm xây dựng các mục, trích xuất ảnh chụp nhanh mã và dọn dẹp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:`Khởi tạo lớp với đường dẫn thành phần mục tiêu và các hướng dẫn nhắc tùy chọn.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — đường dẫn tương đối đến thư mục thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompt: string = ''`}),` — văn bản bổ sung tùy chọn để thêm vào lời nhắc AI cho các yêu cầu tài liệu cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Tập trung vào chi tiết khả năng truy cập.')

// Bắt đầu quá trình tạo
wiki.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Phương thức chính khởi tạo việc xây dựng mã, chuẩn bị ngữ cảnh AI và tạo các tạo tác wiki.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`tạo-hàng-loạt`,children:`Tạo hàng loạt`}),`
`,(0,c.jsx)(t.p,{children:`Thường được sử dụng trong các tập lệnh để tạo lại tài liệu cho nhiều thành phần sau các thay đổi API.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};