import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useApiAsyncRef - Khởi tạo bất đồng bộ`}),`
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
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorContract?: ApiErrorStorageList`}),` — nơi lưu trữ hợp đồng lỗi phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unmounted?: boolean`}),` — có xóa khỏi cache khi unmount hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiInstance?: ApiInstance`}),` — instance của API.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`giá-trị-trả-về`,children:`Giá trị trả về`}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về đối tượng `,(0,c.jsx)(n.code,{children:`UseApiRef<R>`}),`:`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trạng thái phản ứng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ComputedRef<ApiData<R> | undefined>`}),` — dữ liệu reactive.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<ApiData<R> | undefined>`}),` — phần tử reactive.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — đối tượng lỗi hiện tại nếu yêu cầu thất bại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu hợp đồng phản hồi hợp lệ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — kết quả chi tiết xác thực hợp đồng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`length: ComputedRef<number>`}),` — số lượng phần tử trong danh sách.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`starting: ComputedRef<boolean>`}),` — cờ cho giai đoạn tải ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — trạng thái tải hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reading: Ref<boolean>`}),` — cờ xử lý dữ liệu đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Phương thức:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isStarting(): boolean`}),`, `,(0,c.jsx)(n.code,{children:`isLoading(): boolean`}),`, `,(0,c.jsx)(n.code,{children:`isReading(): boolean`}),` — các phương thức kiểm tra trạng thái.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ApiData<R> | undefined`}),` — lấy giá trị dữ liệu hiện tại không cần phản ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(awaitFetch?: boolean): Promise<void>`}),` — khởi tạo thủ công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initSsr(): void`}),` — khởi tạo cho SSR.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): Promise<void>`}),` — buộc chạy lại yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): void`}),` — dừng theo dõi và xóa dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`abort(): void`}),` — hủy yêu cầu HTTP hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useApiAsyncRef } from '@dxtmisha/functional'

// khởi tạo kích hoạt ngay lập tức
const { data, loading } = useApiAsyncRef(
  'users/list',
  { method: 'GET' }
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};