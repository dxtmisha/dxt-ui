import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useApiDelete - DELETE Request Execution`}),`
`,(0,c.jsx)(t.h1,{id:`useapidelete`,children:(0,c.jsx)(t.code,{children:`useApiDelete`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về một đối tượng với trạng thái tải và phương thức `,(0,c.jsx)(t.code,{children:`send`}),` để thực hiện các yêu cầu API `,(0,c.jsx)(t.code,{children:`DELETE`}),`. Đây là một trình bao bọc tiện lợi trên `,(0,c.jsx)(t.code,{children:`useApiRequest`}),` được điền sẵn phương thức `,(0,c.jsx)(t.code,{children:`DELETE`}),`. Nhận các thiết lập dưới dạng một đối tượng `,(0,c.jsx)(t.code,{children:`UseApiDeleteSetup`}),` duy nhất.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setup: UseApiDeleteSetup`}),` — Đối tượng thiết lập cấu hình:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Đường dẫn đến endpoint API (có thể phản ứng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công.`]}),`
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
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — Trạng thái tải phản ứng. Sẽ là `,(0,c.jsx)(t.code,{children:`true`}),` trong khi yêu cầu đang thực hiện và `,(0,c.jsx)(t.code,{children:`false`}),` sau khi hoàn thành hoặc có lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Phương thức bất đồng bộ để gửi yêu cầu `,(0,c.jsx)(t.code,{children:`DELETE`}),`. Nó tự động quản lý trạng thái `,(0,c.jsx)(t.code,{children:`loading`}),`, xác thực hợp đồng yêu cầu và phản hồi, áp dụng hàm biến đổi cho phản hồi, thực hiện callback `,(0,c.jsx)(t.code,{children:`action`}),` khi thành công và xử lý lỗi một cách an toàn bằng cách ghi log ra console.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiDelete } from '@dxtmisha/functional'

const { loading, send } = useApiDelete({
  path: '/api/delete',
  action: (data) => console.log('Hành động hoàn tất:', data),
  transformation: (raw) => ({ ...raw, processed: true }),
  toData: true,
  options: { cache: false }
})

const handleDelete = async () => {
  const result = await send({ id: 1 })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};