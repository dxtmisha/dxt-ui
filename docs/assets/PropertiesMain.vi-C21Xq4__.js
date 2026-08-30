import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesMain - Bộ điều phối Token toàn cầu`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiesmain`,children:`Lớp PropertiesMain`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesMain`}),` là bộ điều phối cấp cao chịu trách nhiệm tổng hợp cây token thiết kế toàn cầu. Nó quản lý toàn bộ vòng đời của các token "chính" (main) — từ việc khám phá hệ thống tệp và đọc dữ liệu thô đến việc chuyển đổi ngữ nghĩa nhiều giai đoạn và hợp nhất phân cấp. Bằng cách trừu tượng hóa các phức tạp của việc tải thuộc tính mô-đun, nó cung cấp một điểm nhập thống nhất để có được các cấu hình thiết kế đã được phân giải đầy đủ và chuẩn hóa.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điều phối quy trình tự động`}),` — Tích hợp nhiều tiện ích (`,(0,c.jsx)(t.code,{children:`Import`}),`, `,(0,c.jsx)(t.code,{children:`Standard`}),`, `,(0,c.jsx)(t.code,{children:`Convector`}),`) vào một chuỗi tải gắn kết duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khám phá tập trung vào Thiết kế`}),` — Cung cấp `,(0,c.jsx)(t.code,{children:`PropertiesPath`}),` để tự động định vị và xử lý các token cho tất cả các chủ đề thiết kế đang hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất cấu hình linh hoạt`}),` — Hỗ trợ thay thế nóng hoặc xếp lớp các cài đặt lên cây toàn cầu thông qua đồng bộ hóa đệ quy sâu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi tính toàn vẹn cấu trúc`}),` — Tự động áp dụng bao bọc cấu trúc và dấu phân cách để đảm bảo các token được phân loại và truy cập chính xác.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa trạng thái nội bộ`}),` — Bảo toàn các cờ nội bộ của engine (các thuộc tính bắt đầu bằng `,(0,c.jsx)(t.code,{children:`_`}),`) trong quá trình cập nhật cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`PropertiesMain(path)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: PropertiesPath`}),` — một thực thể của lớp chịu trách nhiệm khám phá hệ thống tệp và phân giải đường dẫn.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesMain, PropertiesPath } from '@dxtmisha/scripts'

// 1. Khởi tạo trình quản lý đường dẫn tiên quyết
const pathManager = new PropertiesPath(['packages', 'tokens'])

// 2. Tạo bộ điều phối token chính
const main = new PropertiesMain(pathManager)

// 3. Phân giải cây thuộc tính toàn cầu hoàn chỉnh
const globalTokens = main.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): PropertyList`}),` — thực hiện quy trình chuyển đổi đầy đủ và trả về tất cả các token chính đã được phân giải.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBySettings(list): PropertyList`}),` — hợp nhất một cụm cài đặt tùy chỉnh vào cây token toàn cầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`quy-trình-chuyển-đổi-toàn-cầu-global-transformation-pipeline`,children:`Quy trình Chuyển đổi Toàn cầu (Global Transformation Pipeline)`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi `,(0,c.jsx)(t.code,{children:`get()`}),` được gọi, `,(0,c.jsx)(t.code,{children:`PropertiesMain`}),` sẽ thực thi chuỗi hành động sau cho mọi thiết kế được khám phá:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đọc`}),`: Lấy dữ liệu thô từ hệ thống tệp bằng `,(0,c.jsx)(t.code,{children:`PropertiesTool`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi ngữ nghĩa`}),`: Truyền dữ liệu qua `,(0,c.jsx)(t.code,{children:`PropertiesConvector`}),` để chuyển đổi các giá trị thô thành các token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa`}),`: Chuẩn hóa cấu trúc thông qua `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` để đảm bảo hình dạng đối tượng nhất quán.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân giải liên kết`}),`: Sử dụng `,(0,c.jsx)(t.code,{children:`PropertiesImport`}),` để lấy và hợp nhất đệ quy mọi tham chiếu tệp bên ngoài.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hoàn thiện cấu trúc`}),`: Nếu cần, nó sẽ tách các khóa qua `,(0,c.jsx)(t.code,{children:`PropertiesSeparator`}),` và áp dụng `,(0,c.jsx)(t.code,{children:`PropertiesWrap`}),` để tổ chức các token vào các vùng chứa phân cấp cuối cùng của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp thống nhất`}),`: Kết hợp dữ liệu đã xử lý từ tất cả các thiết kế vào một `,(0,c.jsx)(t.code,{children:`PropertyList`}),` duy nhất, trong đó các khóa đại diện cho tên thiết kế cấp cao nhất.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};