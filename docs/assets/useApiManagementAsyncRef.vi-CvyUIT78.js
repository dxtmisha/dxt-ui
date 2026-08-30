import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useApiManagementAsyncRef - Khởi tạo quản lý API bất đồng bộ`}),`
`,(0,c.jsx)(t.h1,{id:`useapimanagementasyncref`,children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`}),` là một wrapper bất đồng bộ cho `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.vi.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`, thực hiện khởi tạo yêu cầu ngay lập tức.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Khác với `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` tiêu chuẩn, vốn khởi tạo "lười" (khi truy cập danh sách hoặc dữ liệu lần đầu), phương thức này gọi `,(0,c.jsx)(t.code,{children:`initSsr()`}),` ngay lập tức khi được tạo. Điều này làm cho nó trở thành lựa chọn lý tưởng để sử dụng trong môi trường SSR.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo ngay lập tức`}),` — bắt đầu quá trình khởi tạo GET request ngay khi hook được gọi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ SSR`}),` — đảm bảo dữ liệu được tải trên máy chủ trước khi trang được gửi đến máy khách.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đầy đủ chức năng quản lý`}),` — giữ lại tất cả các tính năng của `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),`, bao gồm formatter, tìm kiếm và mutation.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`tham-số`,children:`Tham số`}),`
`,(0,c.jsxs)(t.p,{children:[`Các tham số giống hệt với `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.vi.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — cài đặt GET request chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formattersOptions?: FormattersOptions`}),` — quy tắc định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — cài đặt tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`postRequest / putRequest / deleteRequest`}),` — cài đặt mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: any) => Promise<void> | void`}),` — callback chung để thực thi sau bất kỳ mutation nào thành công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — instance của API.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`giá-trị-trả-về`,children:`Giá trị trả về`}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về một đối tượng quản lý API. Cấu trúc đối tượng trả về giống hệt với `,(0,c.jsx)(t.a,{href:`./useApiManagementRef.vi.mdx`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu dữ liệu khớp với kiểm tra `,(0,c.jsx)(t.code,{children:`typeData`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu dữ liệu phản hồi khớp với hợp đồng đã xác định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — kết quả chi tiết của việc xác thực hợp đồng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef`}),` — mảng dữ liệu đã qua xử lý với sự hỗ trợ của Skeleton, formatter và tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — dữ liệu reactive thô từ `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — đối tượng lỗi hiện tại nếu yêu cầu thất bại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — độ dài hiện tại của `,(0,c.jsx)(t.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting / loading / reading`}),` — các cờ trạng thái yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingSearch / loadingPost / loadingPut / loadingDelete`}),` — trạng thái loading cho tìm kiếm và mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch / search`}),` — trạng thái tìm kiếm và chuỗi tìm kiếm reactive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sendPost / sendPut / sendDelete`}),` — các phương thức để thực thi mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset / abort`}),` — các phương thức điều khiển.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useApiManagementAsyncRef } from '@dxtmisha/functional'

// Khởi tạo (và chuẩn bị dữ liệu SSR) bắt đầu ngay lập tức
const { list, loading } = useApiManagementAsyncRef(
  { 
    path: 'api/products',
    skeleton: () => Array(3).fill({ id: 0, title: 'Đang tải...' })
  }
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};