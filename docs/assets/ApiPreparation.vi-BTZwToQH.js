import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/ApiPreparation - Chuẩn bị yêu cầu API"}),`
`,n.jsx(c.h1,{id:"lớp-apipreparation",children:"Lớp ApiPreparation"}),`
`,n.jsxs(c.p,{children:["Một lớp được thiết kế đặc biệt để xử lý các tác vụ và hiệu ứng phụ (side effects) chạy ngay trước và sau khi thực thi một yêu cầu API. Nó đóng vai trò cung cấp các siêu liên kết điểm chốt (",n.jsx(c.code,{children:"callback"})," và ",n.jsx(c.code,{children:"callbackEnd"}),") để chặn hoặc theo dõi các yêu cầu, thực hiện thao tác hay kích hoạt xử lý giao diện như đồ họa tải trang."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi trước yêu cầu (Pre-request Execution)"})," — can thiệp vào vòng đời API ngay trước thời điểm tiến hành gọi ",n.jsx(c.code,{children:"fetch"})," vật lý thực tế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân tích sau yêu cầu (Post-request Analysis)"})," — kích hoạt chạy logic ngay khi yêu cầu truy vấn hoàn tất, có khả năng kết nối tới các thông số ",n.jsx(c.code,{children:"Response"})," trả về cộng với cấu hình truy vấn ban đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kiểm soát động (Concurrency Control)"})," — đảm bảo các hook chồng chéo được xử lý hợp lý mà không bị tắt nghẽn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Móc nối dữ liệu (Data Injection)"})," — các hook nối mạng có đặc quyền trả về dữ liệu hoặc một cờ tín hiệu ",n.jsx(c.code,{children:"reset"})," nhằm thao túng hay ngắt phiên xử lý phản hồi API toàn cục sau đó."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { ApiPreparation } from '@dxtmisha/functional'

const preparation = new ApiPreparation()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(active: boolean, apiFetch: ApiFetch): Promise<void>"})," — Thực thi vòng lặp chuẩn bị ngay trước thời khắc truy vấn vận hành."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>"})," — Thực thi tính chất phân tích vòng lặp móc nối sau khi liên kết server đóng băng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"set(callback: (apiFetch: ApiFetch) => Promise<void>): this"})," — Cách đấu nối một hàm tuỳ chỉnh thiết lập logic chạy tuần tự trước một yêu cầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this"})," — Thiết lập một hàm vòng sự kiện được kích hoạt tức thì sau khi một phiên yêu cầu khép lại."]}),`
`]})]})}function p(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(i,{...t})}):i(t)}export{p as default};
