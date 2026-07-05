import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToReplace - Bộ chuyển đổi thay thế chuỗi bằng Regex`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoreplace`,children:`Lớp PropertiesToReplace`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToReplace`}),` chuyển đổi các giá trị chuỗi của các token thiết kế bằng cách sử dụng biểu thức chính quy (regular expressions) được chỉ định bởi cấu hình `,(0,c.jsx)(n.code,{children:`replace`}),`. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi Regex`}),` — Đánh giá các tiêu chí so khớp biểu thức chính quy và ghi đè giá trị token bằng kết quả đã xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tùy chọn cấu hình linh hoạt`}),` — Hỗ trợ cả chuỗi mẫu viết tắt hoặc các đối tượng cấu hình `,(0,c.jsx)(n.code,{children:`PropertyReplace`}),` chi tiết (định nghĩa mẫu khớp, các cờ regex và chuỗi thay thế).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Làm sạch an toàn`}),` — Loại bỏ cờ chỉ thị tạm thời `,(0,c.jsx)(n.code,{children:`replace`}),` khỏi các thuộc tính token sau khi chuyển đổi thành công giá trị mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các ánh xạ token đã cập nhật vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`001-replace`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToReplace, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToReplace(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-chuyển-đổi--tiện-ích`,children:`Thao tác chuyển đổi & Tiện ích`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua các thuộc tính, phát hiện các giá trị chuỗi có chỉ thị `,(0,c.jsx)(n.code,{children:`replace`}),` và thực hiện các chuyển đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInfo(info: PropertiesReplaceValue): PropertyReplace`}),` — Chuẩn hóa các chuỗi mẫu viết tắt hoặc cấu hình chi tiết đầu vào thành các đối tượng `,(0,c.jsx)(n.code,{children:`PropertyReplace`}),` có cấu trúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(info: PropertyReplace, value: string): string`}),` — Thực thi việc thay thế bằng regex, trả về chuỗi đã thay thế.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};