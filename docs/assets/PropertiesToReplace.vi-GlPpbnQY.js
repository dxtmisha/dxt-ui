import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToReplace - Bộ chuyển đổi thay thế chuỗi bằng Regex`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestoreplace`,children:`Lớp PropertiesToReplace`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToReplace`}),` chuyển đổi các giá trị chuỗi của các token thiết kế bằng cách sử dụng biểu thức chính quy (regular expressions) được chỉ định bởi cấu hình `,(0,c.jsx)(t.code,{children:`replace`}),`. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi Regex`}),` — Đánh giá các tiêu chí so khớp biểu thức chính quy và ghi đè giá trị token bằng kết quả đã xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tùy chọn cấu hình linh hoạt`}),` — Hỗ trợ cả chuỗi mẫu viết tắt hoặc các đối tượng cấu hình `,(0,c.jsx)(t.code,{children:`PropertyReplace`}),` chi tiết (định nghĩa mẫu khớp, các cờ regex và chuỗi thay thế).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Làm sạch an toàn`}),` — Loại bỏ cờ chỉ thị tạm thời `,(0,c.jsx)(t.code,{children:`replace`}),` khỏi các thuộc tính token sau khi chuyển đổi thành công giá trị mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các ánh xạ token đã cập nhật vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`001-replace`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToReplace, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToReplace(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thao-tác-chuyển-đổi--tiện-ích`,children:`Thao tác chuyển đổi & Tiện ích`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua các thuộc tính, phát hiện các giá trị chuỗi có chỉ thị `,(0,c.jsx)(t.code,{children:`replace`}),` và thực hiện các chuyển đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getInfo(info: PropertiesReplaceValue): PropertyReplace`}),` — Chuẩn hóa các chuỗi mẫu viết tắt hoặc cấu hình chi tiết đầu vào thành các đối tượng `,(0,c.jsx)(t.code,{children:`PropertyReplace`}),` có cấu trúc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(info: PropertyReplace, value: string): string`}),` — Thực thi việc thay thế bằng regex, trả về chuỗi đã thay thế.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};