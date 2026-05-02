import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesCache - Bộ điều phối bộ nhớ đệm vĩnh viễn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiescache`,children:`Lớp PropertiesCache`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` là một tiện ích tĩnh hiệu suất cao được thiết kế để quản lý việc lưu trữ bộ nhớ đệm (caching) dựa trên tệp vĩnh viễn cho bộ công cụ hệ thống thiết kế. Nó đảm bảo rằng các biến đổi token phức tạp chỉ được thực hiện khi cần thiết, giúp giảm đáng kể thời gian xây dựng cho các dự án quy mô lớn bằng cách theo dõi các phụ thuộc tệp và duy trì một cấu trúc phân cấp bộ nhớ đệm chặt chẽ.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi phụ thuộc`}),` — Tự động giám sát các thay đổi của tệp nguồn và vô hiệu hóa bộ nhớ đệm nếu bất kỳ phụ thuộc nào bị sửa đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ phân cấp`}),` — Tổ chức dữ liệu đã lưu vào thư mục ẩn `,(0,c.jsx)(n.code,{children:`.cache`}),` với các thư mục con chuyên biệt cho các bước xử lý khác nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xây dựng tăng dần`}),` — Cho phép tính toán lại một phần bằng cách lưu trữ kết quả biến đổi trung gian.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toàn vẹn hệ thống`}),` — Duy trì sổ đăng ký `,(0,c.jsx)(n.code,{children:`system.json`}),` để theo dõi dấu thời gian của bộ nhớ đệm và siêu dữ liệu tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Generic`}),` — Cung cấp hỗ trợ TypeScript đầy đủ để truy xuất các cấu trúc dữ liệu đã lưu một cách an toàn về kiểu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp tĩnh, `,(0,c.jsx)(n.code,{children:`PropertiesCache`}),` không yêu cầu khởi tạo instance. Các phương thức của nó được truy cập trực tiếp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesCache } from '@dxtmisha/scripts'

// Truy xuất dữ liệu với quản lý bộ nhớ đệm tự động
const data = PropertiesCache.get(
  ['tokens', 'color'], 
  'palette-cache', 
  () => transformPaletteLogic()
)

// Xóa tất cả dữ liệu đã lưu
PropertiesCache.clear()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`các-thao-tác-bộ-nhớ-đệm`,children:`Các thao tác bộ nhớ đệm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(path, name, callback, extension): T`}),` — Truy xuất dữ liệu từ bộ nhớ đệm hoặc tạo lại dữ liệu đó thông qua hàm callback.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read<R>(path): R | undefined`}),` — Đọc một tệp và đăng ký nó như một phụ thuộc của bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write<T>(name, value): void`}),` — Lưu kết quả xử lý trung gian vào bộ nhớ đệm tạm thời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`clear(): void`}),` — Xóa đệ quy toàn bộ thư mục bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`luồng-đồng-bộ-hóa-bộ-nhớ-đệm-the-cache-synchronization-flow`,children:`Luồng đồng bộ hóa bộ nhớ đệm (The Cache Synchronization Flow)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesCache`}),` hoạt động thông qua một vòng đời nội bộ tinh vi để đảm bảo tính nhất quán của dữ liệu:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Yêu cầu (`,(0,c.jsx)(n.code,{children:`get`}),`)`]}),`: Khi dữ liệu được yêu cầu, lớp trước tiên sẽ kiểm tra sự tồn tại của tệp bộ nhớ đệm vật lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực hệ thống`}),`: Nó tham khảo sổ đăng ký `,(0,c.jsx)(n.code,{children:`system`}),` nội bộ để so sánh dấu thời gian tạo của bộ nhớ đệm với thời gian sửa đổi của tất cả các tệp phụ thuộc đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo lại`}),`: Nếu tệp bị thiếu hoặc lỗi thời:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Nó đẩy `,(0,c.jsx)(n.code,{children:`name`}),` bộ nhớ đệm hiện tại vào một ngăn xếp `,(0,c.jsx)(n.code,{children:`listenerName`}),` nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Bất kỳ lần đọc tệp tiếp theo nào thông qua `,(0,c.jsx)(n.code,{children:`PropertiesCache.read()`}),` trong khi thực thi callback sẽ tự động được ghi lại như một phụ thuộc cho mục bộ nhớ đệm cụ thể này.`]}),`
`,(0,c.jsx)(n.li,{children:`Kết quả callback được ghi vào đĩa.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hoàn tất`}),`: Sau khi callback hoàn tất, nó cập nhật `,(0,c.jsx)(n.code,{children:`system.json`}),` với dấu thời gian và danh sách phụ thuộc mới, đảm bảo yêu cầu tiếp theo vẫn hợp lệ trừ khi tệp nguồn thay đổi.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};