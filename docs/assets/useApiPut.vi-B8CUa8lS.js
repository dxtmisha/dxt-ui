import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useApiPut - Thực hiện yêu cầu PUT`}),`
`,(0,c.jsx)(n.h1,{id:`useapiput`,children:(0,c.jsx)(n.code,{children:`useApiPut`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về một đối tượng với trạng thái tải và phương thức `,(0,c.jsx)(n.code,{children:`send`}),` để thực hiện các yêu cầu API `,(0,c.jsx)(n.code,{children:`PUT`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — Đường dẫn đến endpoint API (có thể phản ứng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — Hành động (callback) thực hiện sau khi yêu cầu hoàn tất thành công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T) => Return`}),` — Hàm chuyển đổi dữ liệu phản hồi từ máy chủ trước khi trả về hoặc truyền vào `,(0,c.jsx)(n.code,{children:`action`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData: boolean = true`}),` — Việc trích xuất trường `,(0,c.jsx)(n.code,{children:`data`}),` từ phản hồi hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — Các tùy chọn bổ sung cho yêu cầu (đối tượng tham số `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Giá trị trả về:`}),`
Một đối tượng với các thuộc tính sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — Trạng thái tải phản ứng. Sẽ là `,(0,c.jsx)(n.code,{children:`true`}),` trong khi yêu cầu đang thực hiện và `,(0,c.jsx)(n.code,{children:`false`}),` sau khi hoàn thành hoặc có lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(request?: Request): Promise<Return | undefined>`}),` — Phương thức bất đồng bộ để gửi yêu cầu `,(0,c.jsx)(n.code,{children:`PUT`}),`. Nó tự động quản lý trạng thái `,(0,c.jsx)(n.code,{children:`loading`}),`, áp dụng hàm biến đổi cho phản hồi, thực hiện callback `,(0,c.jsx)(n.code,{children:`action`}),` khi thành công và xử lý lỗi một cách an toàn bằng cách ghi log ra console.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiPut } from '@dxtmisha/functional'

const { loading, send } = useApiPut(
  '/api/update',
  (data) => console.log('Hành động hoàn tất:', data),
  (raw) => ({ ...raw, processed: true }),
  true,
  { cache: false }
)

const handleUpdate = async () => {
  const result = await send({ id: 1, name: 'New Name' })
  console.log('Kết quả cuối cùng:', result)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};