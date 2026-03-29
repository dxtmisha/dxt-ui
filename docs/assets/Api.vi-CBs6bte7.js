import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/Api - Quản lý yêu cầu (Request)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-api`,children:`Lớp Api`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`Api`}),` là một lớp tĩnh (static wrapper) bao bọc xung quanh một đối tượng `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Mọi phương thức của lớp `,(0,c.jsx)(n.code,{children:`Api`}),` đều được tự động ủy quyền (delegate) cho một đối tượng `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` chung (global object) bên trong. Điều này cho phép bạn làm việc với các yêu cầu HTTP mà không cần phải tự khởi tạo (instantiate) các đối tượng:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Api } from '@dxtmisha/functional'

// Các lệnh gọi này tương tác với cùng một đối tượng toàn phần (global instance) bên dưới
Api.setUrl('https://api.example.com/v1/')
Api.setHeaders({ 'Authorization': 'Bearer token123' })

const data = await Api.get({ path: 'users' })
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-cập-instance`,children:`Truy cập instance`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiInstance`}),` — Trả về đối tượng `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` nội bộ được sử dụng bởi tất cả các phương thức tĩnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-thông-tin`,children:`Phương thức thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu mã đang chạy trên máy chủ phát triển cục bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Trả về trình quản lý `,(0,c.jsx)(n.code,{children:`ApiStatus`}),` để theo dõi trạng thái và lỗi của yêu cầu cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Trả về trình quản lý phản hồi/mô phỏng `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Trả về URL đầy đủ cho yêu cầu. Các trình giữ chỗ động `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` được thay thế tự động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?, method?): string | FormData | undefined`}),` — Trả về dữ liệu cho phần thân (body) của yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request, path?, method?): string`}),` — Trả về chuỗi tham số truy vấn (query string) cho phương thức GET.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-cấu-hình`,children:`Phương thức cấu hình`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các phương thức cấu hình đều trả về chính lớp `,(0,c.jsx)(n.code,{children:`Api`}),` để hỗ trợ chuỗi lệnh (chaining):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): Api`}),` — Đặt URL cơ sở cho tất cả các yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): Api`}),` — Đặt các headers mặc định cho tất cả các yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): Api`}),` — Đặt dữ liệu yêu cầu mặc định được hợp nhất vào mọi thân yêu cầu (request body).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback): Api`}),` — Đặt hàm callback được thực thi trước mỗi yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback): Api`}),` — Đặt hàm callback được thực thi sau mỗi yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config?: ApiConfig): Api`}),` — Áp dụng toàn bộ đối tượng cấu hình cùng một lúc (`,(0,c.jsx)(n.code,{children:`urlRoot`}),`, `,(0,c.jsx)(n.code,{children:`headers`}),`, `,(0,c.jsx)(n.code,{children:`requestDefault`}),`, `,(0,c.jsx)(n.code,{children:`preparation`}),`, `,(0,c.jsx)(n.code,{children:`end`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-yêu-cầu`,children:`Phương thức yêu cầu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request<T>(pathRequest: string | ApiFetch): Promise<T>`}),` — Trình thực thi yêu cầu chính. Chấp nhận chuỗi đường dẫn hoặc đối tượng cấu hình `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu HTTP GET.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu HTTP POST.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`put<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu HTTP PUT.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delete<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu HTTP DELETE.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`setconfig`,children:`setConfig`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`setConfig`}),` cho phép áp dụng nhiều tùy chọn cấu hình cùng lúc bằng đối tượng `,(0,c.jsx)(n.code,{children:`ApiConfig`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Api } from '@dxtmisha/functional'

Api.setConfig({
  urlRoot: 'https://api.example.com/v1/',
  headers: { 'Authorization': 'Bearer token123' },
  requestDefault: { source: 'webapp' },
  preparation: async (apiFetch) => {
    console.log('Chuẩn bị:', apiFetch.path)
  },
  end: async (response, apiFetch) => {
    if (response.status === 401) {
      return { reset: true }
    }
    return {}
  }
})
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Quan trọng:`}),` Toàn bộ danh sách đầy đủ về các tùy chọn `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`, hook vòng đời, mô phỏng phản hồi và cấu trúc dữ liệu phản hồi đã được ghi chép chi tiết tại tài liệu gốc của lớp `,(0,c.jsx)(n.strong,{children:`ApiInstance`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};