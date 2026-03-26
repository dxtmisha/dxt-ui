import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/ApiPreparation - Chuẩn bị yêu cầu API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apipreparation`,children:`Lớp ApiPreparation`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp được thiết kế đặc biệt để xử lý các tác vụ và hiệu ứng phụ (side effects) chạy ngay trước và sau khi thực thi một yêu cầu API. Nó đóng vai trò cung cấp các siêu liên kết điểm chốt (`,(0,c.jsx)(n.code,{children:`callback`}),` và `,(0,c.jsx)(n.code,{children:`callbackEnd`}),`) để chặn hoặc theo dõi các yêu cầu, thực hiện thao tác hay kích hoạt xử lý giao diện như đồ họa tải trang.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi trước yêu cầu (Pre-request Execution)`}),` — can thiệp vào vòng đời API ngay trước thời điểm tiến hành gọi `,(0,c.jsx)(n.code,{children:`fetch`}),` vật lý thực tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích sau yêu cầu (Post-request Analysis)`}),` — kích hoạt chạy logic ngay khi yêu cầu truy vấn hoàn tất, có khả năng kết nối tới các thông số `,(0,c.jsx)(n.code,{children:`Response`}),` trả về cộng với cấu hình truy vấn ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm soát động (Concurrency Control)`}),` — đảm bảo các hook chồng chéo được xử lý hợp lý mà không bị tắt nghẽn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Móc nối dữ liệu (Data Injection)`}),` — các hook nối mạng có đặc quyền trả về dữ liệu hoặc một cờ tín hiệu `,(0,c.jsx)(n.code,{children:`reset`}),` nhằm thao túng hay ngắt phiên xử lý phản hồi API toàn cục sau đó.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`ApiPreparation()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiPreparation } from '@dxtmisha/functional'

// 1. Khởi tạo đơn giản
const preparation = new ApiPreparation()

// 2. Thiết lập callback trước yêu cầu
preparation.set(async (apiFetch) => {
  console.log('Đang chuẩn bị yêu cầu tới:', apiFetch.path)
})

// 3. Thiết lập callback sau yêu cầu
preparation.setEnd(async (query, apiFetch) => {
  console.log('Yêu cầu đã hoàn tất với trạng thái:', query.status)
  return { reset: false }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(active: boolean, apiFetch: ApiFetch): Promise<void>`}),` — Thực thi vòng lặp chuẩn bị ngay trước thời khắc truy vấn vận hành.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>`}),` — Thực thi tính chất phân tích vòng lặp móc nối sau khi liên kết server đóng băng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Cách đấu nối một hàm tuỳ chỉnh thiết lập logic chạy tuần tự trước một yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Thiết lập một hàm vòng sự kiện được kích hoạt tức thì sau khi một phiên yêu cầu khép lại.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};