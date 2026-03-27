import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useApiRequest - Thực hiện các yêu cầu`}),`
`,(0,c.jsx)(n.h1,{id:`useapirequest`,children:(0,c.jsx)(n.code,{children:`useApiRequest`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về một đối tượng với trạng thái tải và phương thức `,(0,c.jsx)(n.code,{children:`send`}),` để thực hiện các yêu cầu API.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Đường dẫn đến endpoint API (có thể phản ứng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method: ApiMethodItem = ApiMethodItem.post`}),` — Phương thức HTTP cho yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData: boolean = true`}),` — Việc trích xuất trường `,(0,c.jsx)(n.code,{children:`data`}),` từ phản hồi hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Giá trị t`}),`Trả về:**
Một đối tượng với các thuộc tính sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Trạng thái tải phản ứng. Sẽ là `,(0,c.jsx)(n.code,{children:`true`}),` trong khi yêu cầu đang thực hiện và `,(0,c.jsx)(n.code,{children:`false`}),` sau khi hoàn thành hoặc có lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Phương thức bất đồng bộ để gửi yêu cầu. Nó tự động quản lý trạng thái `,(0,c.jsx)(n.code,{children:`loading`}),`, áp dụng hàm biến đổi cho phản hồi, thực hiện callback `,(0,c.jsx)(n.code,{children:`action`}),` khi thành công và xử lý lỗi một cách an toàn bằng cách ghi log ra console.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`đối-tượng-apioptions`,children:`Đối tượng ApiOptions`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiOptions`}),` — có thể nhận một chuỗi tên `,(0,c.jsx)(n.code,{children:`method`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`'GET'`}),`) hoặc một đối tượng kiểu `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`. Các trường của đối tượng `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — đường dẫn đến endpoint script tương đối so với URL cơ bản (ví dụ: `,(0,c.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull?: string`}),` — URL đầy đủ của yêu cầu. Nếu được chỉ định, sẽ bỏ qua `,(0,c.jsx)(n.code,{children:`api`}),` và `,(0,c.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: boolean`}),` — có thêm URL cơ bản trước `,(0,c.jsx)(n.code,{children:`path`}),` hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method?: ApiMethod`}),` — phương thức HTTP (`,(0,c.jsx)(n.code,{children:`'GET'`}),`, `,(0,c.jsx)(n.code,{children:`'POST'`}),`, `,(0,c.jsx)(n.code,{children:`'PUT'`}),`, `,(0,c.jsx)(n.code,{children:`'DELETE'`}),`). Mặc định: `,(0,c.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — thân yêu cầu (cho POST/PUT) hoặc các tham số truy vấn (cho GET). Được truyền dưới dạng JSON hoặc `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — các tiêu đề yêu cầu bổ sung. `,(0,c.jsx)(n.code,{children:`null`}),` — vô hiệu hóa tất cả các tiêu đề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: string`}),` — giá trị `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`auth?: boolean`}),` — có thêm các tiêu đề xác thực hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, tự động giải nén `,(0,c.jsx)(n.code,{children:`data`}),` từ vỏ bọc `,(0,c.jsx)(n.code,{children:`{ data: ... }`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hideError?: boolean`}),` — ngăn chặn việc xuất lỗi ra `,(0,c.jsx)(n.code,{children:`console.error`}),` khi thất bại. Mặc định: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — có chạy hook toàn cục `,(0,c.jsx)(n.code,{children:`setPreparation`}),` trước yêu cầu này hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd?: boolean`}),` — có chạy hook toàn cục `,(0,c.jsx)(n.code,{children:`setEnd`}),` sau phản hồi hay không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — trình xử lý phản hồi thay vì đọc JSON tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init?: RequestInit`}),` — các tùy chọn bổ sung cho `,(0,c.jsx)(n.code,{children:`fetch()`}),` gốc (CORS, chế độ cache, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`controller?: AbortController`}),` — bộ điều khiển để hủy yêu cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiRequest } from '@dxtmisha/functional'
import { ApiMethodItem } from '@dxtmisha/functional-basic'

const { loading, send } = useApiRequest(
  '/api/submit',
  ApiMethodItem.post,
  (data) => console.log('Hành động hoàn tất:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleSubmit = async () => {
  const result = await send({ name: 'User' })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};