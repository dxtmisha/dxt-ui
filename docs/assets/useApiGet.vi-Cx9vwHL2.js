import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useApiGet - GET Request Execution`}),`
`,(0,c.jsx)(n.h1,{id:`useapiget`,children:(0,c.jsx)(n.code,{children:`useApiGet`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về một đối tượng với trạng thái tải và phương thức `,(0,c.jsx)(n.code,{children:`send`}),` để thực hiện các yêu cầu API `,(0,c.jsx)(n.code,{children:`GET`}),`. Đây là một trình bao bọc tiện lợi trên `,(0,c.jsx)(n.code,{children:`useApiRequest`}),` được điền sẵn phương thức `,(0,c.jsx)(n.code,{children:`GET`}),`. Nhận các thiết lập dưới dạng một đối tượng `,(0,c.jsx)(n.code,{children:`UseApiGetSetup`}),` duy nhất.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setup: UseApiGetSetup`}),` — Đối tượng thiết lập cấu hình:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Đường dẫn đến endpoint API (có thể phản ứng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — Hàm xác thực hợp đồng yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — Hàm xác thực hợp đồng phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorContract?: ApiErrorStorageList`}),` — nơi lưu trữ hợp đồng lỗi phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — Việc trích xuất trường `,(0,c.jsx)(n.code,{children:`data`}),` từ phản hồi hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — Phiên bản API sử dụng cho yêu cầu. Mặc định là `,(0,c.jsx)(n.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Trạng thái tải phản ứng. Sẽ là `,(0,c.jsx)(n.code,{children:`true`}),` trong khi yêu cầu đang thực hiện và `,(0,c.jsx)(n.code,{children:`false`}),` sau khi hoàn thành hoặc có lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Phương thức bất đồng bộ để gửi yêu cầu `,(0,c.jsx)(n.code,{children:`GET`}),`. Nó tự động quản lý trạng thái `,(0,c.jsx)(n.code,{children:`loading`}),`, xác thực hợp đồng yêu cầu và phản hồi, áp dụng hàm biến đổi cho phản hồi, thực hiện callback `,(0,c.jsx)(n.code,{children:`action`}),` khi thành công và xử lý lỗi một cách an toàn bằng cách ghi log ra console.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiGet } from '@dxtmisha/functional'

const { loading, send } = useApiGet({
  path: '/api/data',
  action: (data) => console.log('Hành động hoàn tất:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  validateResponseContract: (res) => ({ success: true, ...res }),
  toData: true,
  options: { cache: false }
})

const fetchData = async () => {
  const result = await send({ id: 1 })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};