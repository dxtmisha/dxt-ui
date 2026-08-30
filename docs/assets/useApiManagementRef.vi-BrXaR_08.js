import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useApiManagementRef - Quản lý API`}),`
`,(0,c.jsx)(t.h1,{id:`useapimanagementref`,children:(0,c.jsx)(t.code,{children:`useApiManagementRef`})}),`
`,(0,c.jsx)(t.p,{children:`Một composable mạnh mẽ để điều phối toàn diện các request API. Nó quản lý việc fetching dữ liệu (GET), format danh sách, tìm kiếm trên client và các đột biến (POST, PUT, DELETE) đều được tích hợp trong một giao diện phản ứng (reactive interface) duy nhất.`}),`
`,(0,c.jsx)(t.h2,{id:`tham-số`,children:`Tham số`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`propsGet: ApiManagementGet<Return, Type>`}),` — cấu hình cho GET request chính (path, reactivity, skeleton, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`formattersOptions?: FormattersOptions`}),` — các quy tắc định dạng reactive tùy chọn (`,(0,c.jsx)(t.code,{children:`useFormattersRef`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchOptions?: ApiManagementSearch<Item, Columns>`}),` — cấu hình tìm kiếm phía client tùy chọn (`,(0,c.jsx)(t.code,{children:`useSearchRef`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`postRequest?: ApiManagementRequest<Post>`}),` — cấu hình tùy chọn cho yêu cầu tạo (POST).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`putRequest?: ApiManagementRequest<Put>`}),` — cấu hình tùy chọn cho yêu cầu cập nhật (PUT).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`deleteRequest?: ApiManagementRequest<Delete>`}),` — cấu hình tùy chọn cho yêu cầu xóa (DELETE).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: function`}),` — callback chung để thực thi sau bất kỳ mutation nào thành công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`apiInstance?: ApiInstance`}),` — Phiên bản API sử dụng cho yêu cầu. Mặc định là `,(0,c.jsx)(t.code,{children:`Api.getItem()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`giá-trị-trả-về`,children:`Giá trị trả về`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu dữ liệu khớp với kiểm tra `,(0,c.jsx)(t.code,{children:`typeData`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isResponseContractValid: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu dữ liệu phản hồi khớp với hợp đồng đã xác định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`responseValidationResult: ComputedRef<ApiDataValidation | undefined>`}),` — kết quả chi tiết của việc xác thực hợp đồng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: ComputedRef`}),` — mảng dữ liệu đã qua xử lý. `,(0,c.jsx)(t.strong,{children:`Hỗ trợ Skeleton`}),`: nếu dữ liệu chưa được tải và `,(0,c.jsx)(t.code,{children:`skeleton()`}),` được cung cấp, nó sẽ trả về các giá trị giả. Tính toán dựa trên bộ lọc tìm kiếm và formatter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ApiData<Return> | undefined>`}),` — dữ liệu reactive thô từ `,(0,c.jsx)(t.code,{children:`useApiRef`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorItem: ComputedRef<ApiErrorItem | undefined>`}),` — đối tượng lỗi hiện tại nếu yêu cầu thất bại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`length: ComputedRef<number>`}),` — độ dài hiện tại của `,(0,c.jsx)(t.code,{children:`list`}),` (cập nhật động khi tìm kiếm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthData: ComputedRef<number>`}),` — độ dài gốc của dữ liệu trong `,(0,c.jsx)(t.code,{children:`data.value`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`starting: ComputedRef<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu yêu cầu vẫn đang trong giai đoạn tải ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reading: Ref<boolean>`}),` — cờ chỉ định rằng dữ liệu hiện đang được tải/đọc từ server.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — trạng thái loading của GET request chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingSearch: Ref<boolean>`}),` — trạng thái loading của thao tác tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loadingPost / loadingPut / loadingDelete`}),` — trạng thái loading độc lập cho từng thao tác đột biến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch: ComputedRef<boolean>`}),` — cho biết truy vấn tìm kiếm hiện có đang hoạt động hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — chuỗi tìm kiếm reactive (Proxy đến `,(0,c.jsx)(t.code,{children:`searchOptions.value`}),` đã cung cấp).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>`}),` — các phương thức để thực thi mutation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset: () => Promise<void>`}),` — buộc khởi động lại/làm mới GET request chính thủ công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`abort: () => void`}),` — hủy bỏ yêu cầu mạng đang diễn ra.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Return extends ApiManagementValue`}),` — kiểu dữ liệu trả về từ API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`FormattersOptions extends FormattersOptionsList`}),` — kiểu cho các tùy chọn format.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Post / Put / Delete extends Record<string, any>`}),` — kiểu dữ liệu cho các mutation request tương ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Type extends ApiManagementValue = Return`}),` — kiểu dữ liệu thô ban đầu (trước khi transform).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Item extends ArrayToItem<Return>`}),` — kiểu cho một phần tử trong danh sách dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]`}),` — kiểu phần tử sau khi áp dụng formatter.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Columns extends SearchColumns<ItemFormatters>`}),` — các cột được sử dụng để tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-làm-việc`,children:`Cách làm việc`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` là trung tâm điều phối quản lý dữ liệu cho các giao diện CRUD. Nó kết hợp các yêu cầu mạng, tìm kiếm cục bộ và định dạng dữ liệu vào một chu kỳ tự động duy nhất:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo và Cơ chế Lazy Loading`}),`: Hook không gửi yêu cầu mạng ngay lập tức. GET request chỉ được đưa vào hàng đợi khi component của bạn truy cập lần đầu vào thuộc tính `,(0,c.jsx)(t.code,{children:`list`}),` hoặc `,(0,c.jsx)(t.code,{children:`data`}),`. Điều này giúp tiết kiệm tài nguyên nếu dữ liệu không phải lúc nào cũng cần hiển thị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phản hồi tức thì (Skeleton)`}),`: Nếu bạn cung cấp hàm `,(0,c.jsx)(t.code,{children:`skeleton`}),`, thuộc tính `,(0,c.jsx)(t.code,{children:`list`}),` sẽ trả về ngay một mảng các "dữ liệu giả" khi bắt đầu tải. Điều này cho phép bạn dựng cấu trúc bảng hoặc danh sách trước khi byte dữ liệu đầu tiên được tải về, loại bỏ tình trạng giao diện bị "nhảy".`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Danh sách thông minh (`,(0,c.jsx)(t.code,{children:`list`}),`)`]}),`: Đây là điểm tương tác chính. Thuộc tính `,(0,c.jsx)(t.code,{children:`list`}),` tự động chuyển đổi giữa:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Dữ liệu Skeleton (trong khi đang tải).`}),`
`,(0,c.jsx)(t.li,{children:`Kết quả tìm kiếm (nếu có chuỗi tìm kiếm được nhập).`}),`
`,(0,c.jsxs)(t.li,{children:[`Dữ liệu đã định dạng (nếu `,(0,c.jsx)(t.code,{children:`formattersOptions`}),` được cấu hình).`]}),`
`,(0,c.jsx)(t.li,{children:`Dữ liệu thô (nếu không có trường hợp nào ở trên áp dụng).`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa Tìm kiếm và Định dạng`}),`: Việc tìm kiếm được thực hiện trên dữ liệu đã tải và đã được định dạng (nếu cần). Điều này đảm bảo người dùng có thể tìm thấy "Nguyễn Văn A" ngay cả khi dữ liệu JSON gốc lưu họ và tên ở các trường riêng biệt. Tìm kiếm diễn ra ở phía client (Client-side), mang lại kết quả tức thì.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chu kỳ Mutation và Tự động làm mới`}),`:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Khi gọi các phương thức `,(0,c.jsx)(t.code,{children:`sendPost`}),`, `,(0,c.jsx)(t.code,{children:`sendPut`}),` hoặc `,(0,c.jsx)(t.code,{children:`sendDelete`}),`, hook sẽ theo dõi trạng thái phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nếu server trả về thành công (được xác nhận qua `,(0,c.jsx)(t.code,{children:`isApiSuccess`}),`), hook sẽ `,(0,c.jsx)(t.strong,{children:`tự động`}),` gọi `,(0,c.jsx)(t.code,{children:`reset()`}),` cho GET request chính.`]}),`
`,(0,c.jsx)(t.li,{children:`Việc này kích hoạt tải lại dữ liệu và cập nhật toàn bộ danh sách. Do đó, sau khi xóa một dòng hoặc thêm mới, danh sách của bạn luôn được cập nhật mà không cần viết thêm mã xử lý thủ công.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính phản xạ của tham số`}),`: Nếu `,(0,c.jsx)(t.code,{children:`path`}),` hoặc `,(0,c.jsx)(t.code,{children:`options`}),` (trong `,(0,c.jsx)(t.code,{children:`propsGet`}),`) là các biến reactive (Vue Ref) và bạn thiết lập `,(0,c.jsx)(t.code,{children:`reactivity: true`}),`, hook sẽ theo dõi sự thay đổi của chúng và tự động tải lại dữ liệu khi URL hoặc tham số lọc thay đổi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ssr-và-khởi-tạo`,children:`SSR và Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để đảm bảo hoạt động chính xác của `,(0,c.jsx)(t.strong,{children:`Server Side Rendering (SSR)`}),`, bạn nên sử dụng phiên bản bất đồng bộ `,(0,c.jsx)(t.a,{href:`./useApiManagementAsyncRef.vi.mdx`,children:(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`useApiManagementAsyncRef`})})}),`. Nó tự động khởi tạo GET request để tải trước trên máy chủ.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn đang sử dụng `,(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` tiêu chuẩn, bạn có thể đưa nó vào chu trình SSR một cách thủ công bằng cách gọi `,(0,c.jsx)(t.code,{children:`initSsr()`}),` trong `,(0,c.jsx)(t.code,{children:`setup()`}),` của component. Điều này đảm bảo rằng dữ liệu sẽ được tải ở phía máy chủ.`]}),`
`,(0,c.jsx)(t.h2,{id:`kiến-trúc-phần-lõi`,children:`Kiến trúc phần lõi`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useApiManagementRef`}),` là một hook điều hướng được thiết kế chuyên biệt để quản lý các mẫu màn hình CRUD tiêu chuẩn (ví dụ như data tables). Thông qua cấu hình tham số, bạn sẽ nhận được một đối tượng "tất cả trong một" để quản lý loading spinners, bộ tìm kiếm, chuẩn hóa dữ liệu cho UI, điều khiển thao tác CRUD và tự động tải lại danh sách.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementgetreturn-type`,children:(0,c.jsx)(t.code,{children:`ApiManagementGet<Return, Type>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string | Ref<string>`}),` — đường dẫn API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — các tùy chọn request (method, headers, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reactivity?: boolean`}),` — có tự động refetch khi `,(0,c.jsx)(t.code,{children:`path`}),` hoặc `,(0,c.jsx)(t.code,{children:`options`}),` thay đổi hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`conditions?: Ref<boolean>`}),` — điều kiện để thực thi request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>`}),` — hàm transform dữ liệu sau khi fetch.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: Type) => ApiDataValidation`}),` — hàm xác thực hợp đồng dữ liệu phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — nơi lưu trữ hợp đồng lỗi phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`typeData?: ((data: Return) => boolean) | any`}),` — hàm kiểm tra dữ liệu hoặc constructor (ví dụ: `,(0,c.jsx)(t.code,{children:`Array`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unmounted?: boolean`}),` — có xóa dữ liệu khi component bị unmount hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`skeleton?: () => Return`}),` — hàm trả về dữ liệu giả (placeholder) trong khi loading.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementsearcht-k`,children:(0,c.jsx)(t.code,{children:`ApiManagementSearch<T, K>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns: K`}),` — danh sách các cột để tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — chuỗi tìm kiếm reactive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — các tùy chọn tìm kiếm bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`apimanagementrequestt-return`,children:(0,c.jsx)(t.code,{children:`ApiManagementRequest<T, Return>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path?: string | Ref<string>`}),` — đường dẫn cho mutation request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`action?: (data: Return | undefined) => Promise<void> | void`}),` — callback sau khi thực thi request.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`transformation?: (data: T) => Return`}),` — hàm transform dữ liệu trước khi gửi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateRequestContract?: (data: Request) => ApiDataValidation & Return`}),` — hàm xác thực hợp đồng yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`validateResponseContract?: (data: T) => ApiDataValidation & Return`}),` — hàm xác thực hợp đồng phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorContract?: ApiErrorStorageList`}),` — nơi lưu trữ hợp đồng lỗi phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toData?: boolean`}),` — có bao bọc dữ liệu trong thuộc tính 'data' hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ApiOptions`}),` — các tùy chọn request bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useApiManagementRef } from '@dxtmisha/functional'
import { FormattersType } from '@dxtmisha/functional-basic'

const searchVal = ref('')

const { 
  list, 
  loading, 
  sendPost, 
  sendDelete 
} = useApiManagementRef(
  // 1. GET Request
  { path: 'api/users', skeleton: () => [{ id: 0, name: 'Đang tải...' }] },
  // 2. Formatters
  {  price: { type: FormattersType.currency } },
  // 3. Tiềm kiếm
  { columns: ['name'], value: searchVal },
  // 4. POST
  { path: 'api/users/create' },
  // 5. PUT (không dùng)
  undefined,
  // 6. DELETE
  { path: 'api/users/delete' }
)

// Tạo một người dùng mới:
// await sendPost({ data: { name: 'Người Dùng Mới' } })
// Thao tác này sẽ tự gọi request.reset() để làm mới bảng dữ liệu!
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};