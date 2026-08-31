import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/ApiTmp - Tiện ích tệp tạm thời cho lời nhắc AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-apitmp`,children:`Lớp ApiTmp`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` là một tiện ích phụ trợ được thiết kế để quản lý các tệp lời nhắc tạm thời trên hệ thống tệp tin trong thư mục `,(0,c.jsx)(t.code,{children:`./ai-tmp`}),`. Lớp này chủ yếu được sử dụng bởi các dịch vụ AI dựa trên CLI để ghi các nội dung nhập văn bản lớn vào các tệp văn bản nhằm tránh vi phạm giới hạn độ dài đối số của terminal.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đệm đĩa An toàn`}),` — ghi các khối lời nhắc lớn vào đĩa cục bộ trong quá trình tạo phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định danh Duy nhất`}),` — tăng một bộ đếm ID tệp tin toàn cục dùng chung cho tất cả các instance để ngăn chặn xung đột khi ghi đồng thời.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hành động Dọn dẹp Sạch sẽ`}),` — chỉ xóa các tệp tạm thời do instance đó tạo ra, giữ nguyên các tệp của các instance đang chạy đồng thời.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`ApiTmp`}),` có thể được khởi tạo trực tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ApiTmp } from '@dxtmisha/scripts'

const tmp = new ApiTmp()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-tệp-tin`,children:`Quản lý Tệp tin`}),`
`,(0,c.jsx)(t.h4,{id:`createfile`,children:(0,c.jsx)(t.code,{children:`createFile`})}),`
`,(0,c.jsx)(t.p,{children:`Ghi nội dung lời nhắc vào một tệp tạm thời có đánh số duy nhất và trả về một chuỗi hướng dẫn tham chiếu định dạng dành cho dòng lệnh.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content: string`}),` — Nội dung văn bản của lời nhắc cần ghi vào đĩa.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi tham chiếu đường dẫn định dạng (ví dụ: `,(0,c.jsx)(t.code,{children:`Please read the following file as it contains the prompt instructions: @./ai-tmp/Prompt-1.txt`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const promptReference = tmp.createFile('Xin chào Claude, vui lòng tạo các SCSS mixins tiêu chuẩn.')
`})}),`
`,(0,c.jsx)(t.h4,{id:`removefile`,children:(0,c.jsx)(t.code,{children:`removeFile`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chỉ xóa các tệp tạm thời được tạo bởi instance này khỏi thư mục `,(0,c.jsx)(t.code,{children:`./ai-tmp`}),`, giúp việc dọn dẹp an toàn khi thực thi đồng thời.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`tmp.removeFile()
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-helper-được-bảo-vệ-protected`,children:`Các Helper được Bảo vệ (Protected)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFileName(): string`}),` — Tạo đường dẫn tệp tin tăng dần duy nhất (ví dụ: `,(0,c.jsx)(t.code,{children:`./ai-tmp/Prompt-1.txt`}),`).`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};