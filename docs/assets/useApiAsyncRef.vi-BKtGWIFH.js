import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useApiAsyncRef - Khởi tạo bất đồng bộ`}),`
`,(0,c.jsx)(n.h1,{id:`useapiasyncref`,children:(0,c.jsx)(n.code,{children:`useApiAsyncRef`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useApiAsyncRef`}),` là một wrapper bất đồng bộ phía trên `,(0,c.jsx)(n.a,{href:`./useApiRef.vi.mdx`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),`, thực hiện việc khởi tạo yêu cầu ngay lập tức.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Khác với `,(0,c.jsx)(n.code,{children:`useApiRef`}),` tiêu chuẩn, vốn được khởi tạo "lười" (chỉ khi truy cập dữ liệu lần đầu), phương thức này gọi `,(0,c.jsx)(n.code,{children:`initSsr()`}),` ngay lập tức.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo ngay lập tức`}),` — kích hoạt yêu cầu ngay khi composable được gọi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ SSR`}),` — đảm bảo có dữ liệu trước khi render trang trên máy chủ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tham-số`,children:`Tham số`}),`
`,(0,c.jsxs)(n.p,{children:[`Các tham số hoàn toàn giống với `,(0,c.jsx)(n.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: RefOrNormal<string | undefined>`}),` — đường dẫn endpoint.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: ApiOptions`}),` — tùy chọn yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reactivity?: boolean`}),` — có bật tính phản ứng hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`conditions?: RefType<boolean>`}),` — điều kiện thực thi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>`}),` — chuyển đổi dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation`}),` — xác thực hợp đồng dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — có xóa khỏi cache khi unmount hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — instance của API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`giá-trị-trả-về`,children:`Giá trị trả về`}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về đối tượng `,(0,c.jsx)(n.code,{children:`UseApiRef<R>`}),`. Cấu trúc của đối tượng `,(0,c.jsx)(n.code,{children:`UseApiRef`}),` hoàn toàn giống với giá trị trả về của `,(0,c.jsx)(n.a,{href:`./useApiRef.vi.mdx`,children:(0,c.jsx)(n.code,{children:`useApiRef`})}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiAsyncRef } from '@dxtmisha/functional'

// khởi tạo kích hoạt ngay lập tức
const { data, loading } = useApiAsyncRef(
  'users/list',
  { method: 'GET' }
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};