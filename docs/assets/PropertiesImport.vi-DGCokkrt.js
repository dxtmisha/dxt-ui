import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesImport - Bộ phân giải Token bên ngoài`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiesimport`,children:`Lớp PropertiesImport`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesImport`}),` là một trình quản lý chuyên biệt để phân giải và tích hợp các tham chiếu tệp bên ngoài trong các cụm token thiết kế. Nó cho phép các nhà phát triển mô-đun hóa các định nghĩa thuộc tính trên nhiều tệp hoặc thư mục, cung cấp các cơ chế mạnh mẽ để liên kết sâu (deep-linking) vào các cấu trúc dữ liệu cụ thể và hợp nhất đệ quy các tập hợp token độc lập vào một cấu hình thống nhất duy nhất.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân giải mô-đun`}),` — Bao gồm các tệp `,(0,c.jsx)(t.code,{children:`.json`}),` bên ngoài hoặc toàn bộ thư mục vào cây thuộc tính một cách minh bạch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Liên kết sâu (Deep-linking)`}),` — Hỗ trợ các định danh phân đoạn (ví dụ: `,(0,c.jsx)(t.code,{children:`#path.to.node`}),`) để chỉ nhập các tập hợp con cụ thể của một tệp bên ngoài.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nhập thư mục đệ quy`}),` — Tự động ánh xạ cấu trúc thư mục tới các không gian tên thuộc tính khi một thư mục được tham chiếu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân giải nhận biết ngữ cảnh`}),` — Theo dõi cấp độ thư mục hiện tại để phân giải chính xác các đường dẫn tệp tương đối trong quá trình duyệt sâu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất chuẩn hóa`}),` — Đảm bảo rằng dữ liệu đã nhập được truyền qua `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` trước khi được hợp nhất vào cây cha.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`PropertiesImport(properties, root)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`properties: PropertyList`}),` — danh sách thuộc tính ban đầu (cây token) cần xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`root: string[]`}),` — các phân đoạn đường dẫn cơ sở để phân giải các tham chiếu tệp tương đối.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesImport } from '@dxtmisha/scripts'

// 1. Chuẩn bị dữ liệu thô và ngữ cảnh đường dẫn
const initialProperties = { 
  button: { type: 'file', value: 'components/button.json' } 
}
const rootPath = ['src', 'tokens']

// 2. Tạo thực thể importer
const importer = new PropertiesImport(initialProperties, rootPath)

// 3. Kích hoạt việc phân giải các tham chiếu bên ngoài
const resolvedData = importer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to(properties, root): PropertyList`}),` — phân giải và hợp nhất tất cả các tham chiếu tệp bên ngoài trong cụm thuộc tính.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`luồng-phân-giải-bên-ngoài-the-external-resolution-flow`,children:`Luồng phân giải bên ngoài (The External Resolution Flow)`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`PropertiesImport`}),` quản lý một quy trình phân giải nhiều giai đoạn:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát hiện`}),`: Khi duyệt cây, nó nhắm mục tiêu cụ thể vào các mục có `,(0,c.jsx)(t.code,{children:`value`}),` là một chuỗi và siêu dữ liệu loại khớp với `,(0,c.jsx)(t.code,{children:`PropertyType.file`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân tích cú pháp liên kết`}),`: Nó tách chuỗi tham chiếu (ví dụ: `,(0,c.jsx)(t.code,{children:`theme/colors.json#primary`}),`) thành `,(0,c.jsx)(t.code,{children:`path`}),` tệp vật lý và một phân đoạn `,(0,c.jsx)(t.code,{children:`link`}),` nội bộ tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi IO`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tệp đơn`}),`: Đọc tệp mục tiêu thông qua `,(0,c.jsx)(t.code,{children:`PropertiesCache`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thư mục`}),`: Ánh xạ tất cả các tệp `,(0,c.jsx)(t.code,{children:`.json`}),` trong thư mục tới các thuộc tính con được đặt tên theo tên tệp.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trích xuất sâu`}),`: Nếu có định danh phân đoạn (`,(0,c.jsx)(t.code,{children:`#`}),`), nó sẽ điều hướng qua đối tượng đã đọc để chỉ trả về đường dẫn phụ được yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa & Đệ quy`}),`: Dữ liệu được trích xuất được truyền cho `,(0,c.jsx)(t.code,{children:`PropertiesStandard`}),` để chuẩn hóa và sau đó được truyền đệ quy trở lại `,(0,c.jsx)(t.code,{children:`to()`}),` để phân giải bất kỳ lượt nhập `,(0,c.jsx)(t.em,{children:`lồng nhau`}),` nào bên trong tệp vừa được bao gồm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất`}),`: Dữ liệu cuối cùng được hợp nhất đệ quy vào cấu trúc cha bằng `,(0,c.jsx)(t.code,{children:`replaceRecursive`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};