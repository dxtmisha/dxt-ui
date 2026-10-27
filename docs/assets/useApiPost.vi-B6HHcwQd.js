import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useApiPost - POST Request Execution`}),`
`,(0,c.jsx)(t.h1,{id:`useapipost`,children:(0,c.jsx)(t.code,{children:`useApiPost`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về một đối tượng với trạng thái tải và phương thức `,(0,c.jsx)(t.code,{children:`send`}),` để thực hiện các yêu cầu API `,(0,c.jsx)(t.code,{children:`POST`}),`. Đây là một trình bao bọc tiện lợi trên `,(0,c.jsx)(t.code,{children:`useApiRequest`}),` được điền sẵn phương thức `,(0,c.jsx)(t.code,{children:`POST`}),`. Nhận các thiết lập dưới dạng một đối tượng `,(0,c.jsx)(t.code,{children:`UseApiPostSetup`}),` duy nhất.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setup: UseApiPostSetup`}),` — Đối tượng thiết lập cấu hình:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Đường dẫn đến endpoint API (có thể phản ứng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Callback sau khi nhận và xử lý dữ liệu phản hồi, bất kể thành công hay lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionSuccess?: (data: Return) => Promise<void> | void`}),` — Callback cho phản hồi thành công theo kiểm tra `,(0,c.jsx)(t.code,{children:`isApiSuccess`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void`}),` — Callback cho phản hồi lỗi hoặc kết quả xác thực không hợp lệ. Lỗi mạng truyền `,(0,c.jsx)(t.code,{children:`(undefined, error)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T) => Return`}),` — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào `,(0,c.jsx)(t.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — Hàm xác thực hợp đồng yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — Hàm xác thực hợp đồng phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — nơi lưu trữ hợp đồng lỗi phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — Việc trích xuất trường `,(0,c.jsx)(t.code,{children:`data`}),` từ phản hồi hay không. Mặc định: `,(0,c.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số `,(0,c.jsx)(t.code,{children:`ApiFetch`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — Phiên bản API sử dụng cho yêu cầu. Mặc định là `,(0,c.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` khi còn ít nhất một lời gọi `,(0,c.jsx)(t.code,{children:`send`}),` đang thực thi, bao gồm xác thực và các callback được chờ. Cho phép gọi song song; giá trị trở thành `,(0,c.jsx)(t.code,{children:`false`}),` sau khi tất cả lời gọi hoàn tất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Xác thực yêu cầu và phản hồi, áp dụng phép biến đổi và khi nhận dữ liệu phản hồi sẽ chờ `,(0,c.jsx)(t.code,{children:`action`}),`, sau đó chờ callback kết quả tương ứng. Khi xác thực yêu cầu thất bại, chỉ gọi `,(0,c.jsx)(t.code,{children:`actionError`}),`; lỗi mạng gọi `,(0,c.jsx)(t.code,{children:`actionError(undefined, error)`}),` và trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiPost } from '@dxtmisha/functional'

const { loading, send } = useApiPost({
  path: '/api/submit',
  action: (data) => console.log('Hành động hoàn tất:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  validateRequestContract: (req) => ({ success: true, ...req }),
  toData: true,
  options: { cache: false }
})

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};