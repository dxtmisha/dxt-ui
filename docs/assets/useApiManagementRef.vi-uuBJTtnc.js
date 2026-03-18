import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional/Composables/useApiManagementRef - Quản lý API"}),`
`,n.jsx(e.h1,{id:"useapimanagementref",children:n.jsx(e.code,{children:"useApiManagementRef"})}),`
`,n.jsx(e.p,{children:"Một composable mạnh mẽ để điều phối toàn diện các request API. Nó quản lý việc fetching dữ liệu (GET), format danh sách, tìm kiếm trên client và các đột biến (POST, PUT, DELETE) đều được tích hợp trong một giao diện phản ứng (reactive interface) duy nhất."}),`
`,n.jsx(e.h2,{id:"tham-số",children:"Tham số"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"propsGet: ApiManagementGet<Return, Type>"})," — cấu hình cho GET request chính (path, reactivity, skeleton, v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"formattersOptions?: FormattersOptions"})," — các quy tắc định dạng reactive tùy chọn (",n.jsx(e.code,{children:"useFormattersRef"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"searchOptions?: ApiManagementSearch<Item, Columns>"})," — cấu hình tìm kiếm phía client tùy chọn (",n.jsx(e.code,{children:"useSearchRef"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"postRequest?: ApiManagementRequest<Post>"})," — cấu hình tùy chọn cho yêu cầu tạo (POST)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"putRequest?: ApiManagementRequest<Put>"})," — cấu hình tùy chọn cho yêu cầu cập nhật (PUT)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"deleteRequest?: ApiManagementRequest<Delete>"})," — cấu hình tùy chọn cho yêu cầu xóa (DELETE)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"action?: function"})," — callback chung để thực thi sau bất kỳ mutation nào thành công."]}),`
`]}),`
`,n.jsx(e.h2,{id:"giá-trị-trả-về",children:"Giá trị trả về"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: ComputedRef"})," — mảng dữ liệu đã qua xử lý. ",n.jsx(e.strong,{children:"Hỗ trợ Skeleton"}),": nếu dữ liệu chưa được tải và ",n.jsx(e.code,{children:"skeleton()"})," được cung cấp, nó sẽ trả về các giá trị giả. Tính toán dựa trên bộ lọc tìm kiếm và formatter."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: ComputedRef<ApiData<Return> | undefined>"})," — dữ liệu reactive thô từ ",n.jsx(e.code,{children:"useApiRef"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"length: ComputedRef<number>"})," — độ dài hiện tại của ",n.jsx(e.code,{children:"list"})," (cập nhật động khi tìm kiếm)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lengthData: ComputedRef<number>"})," — độ dài gốc của dữ liệu trong ",n.jsx(e.code,{children:"data.value"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"starting: ComputedRef<boolean>"})," — ",n.jsx(e.code,{children:"true"})," nếu yêu cầu vẫn đang trong giai đoạn tải ban đầu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reading: Ref<boolean>"})," — cờ chỉ định rằng dữ liệu hiện đang được tải/đọc từ server."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: Ref<boolean>"})," — trạng thái loading của GET request chính."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loadingSearch: Ref<boolean>"})," — trạng thái loading của thao tác tìm kiếm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loadingPost / loadingPut / loadingDelete"})," — trạng thái loading độc lập cho từng thao tác đột biến."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSearch: ComputedRef<boolean>"})," — cho biết truy vấn tìm kiếm hiện có đang hoạt động hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"search: Ref<string>"})," — chuỗi tìm kiếm reactive (Proxy đến ",n.jsx(e.code,{children:"searchOptions.value"})," đã cung cấp)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sendPost / sendPut / sendDelete: (request?: ApiFetch['request']) => Promise<any>"})," — các phương thức để thực thi mutation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reset: () => Promise<void>"})," — buộc khởi động lại/làm mới GET request chính thủ công."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"abort: () => void"})," — hủy bỏ yêu cầu mạng đang diễn ra."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Return extends ApiManagementValue"})," — kiểu dữ liệu trả về từ API."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"FormattersOptions extends FormattersOptionsList"})," — kiểu cho các tùy chọn format."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Post / Put / Delete extends Record<string, any>"})," — kiểu dữ liệu cho các mutation request tương ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Type extends ApiManagementValue = Return"})," — kiểu dữ liệu thô ban đầu (trước khi transform)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Item extends ArrayToItem<Return>"})," — kiểu cho một phần tử trong danh sách dữ liệu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number]"})," — kiểu phần tử sau khi áp dụng formatter."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Columns extends SearchColumns<ItemFormatters>"})," — các cột được sử dụng để tìm kiếm."]}),`
`]}),`
`,n.jsx(e.h2,{id:"cách-làm-việc",children:"Cách làm việc"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useApiManagementRef"})," là trung tâm điều phối quản lý dữ liệu cho các giao diện CRUD. Nó kết hợp các yêu cầu mạng, tìm kiếm cục bộ và định dạng dữ liệu vào một chu kỳ tự động duy nhất:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Khởi tạo và Cơ chế Lazy Loading"}),": Hook không gửi yêu cầu mạng ngay lập tức. GET request chỉ được đưa vào hàng đợi khi component của bạn truy cập lần đầu vào thuộc tính ",n.jsx(e.code,{children:"list"})," hoặc ",n.jsx(e.code,{children:"data"}),". Điều này giúp tiết kiệm tài nguyên nếu dữ liệu không phải lúc nào cũng cần hiển thị."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Phản hồi tức thì (Skeleton)"}),": Nếu bạn cung cấp hàm ",n.jsx(e.code,{children:"skeleton"}),", thuộc tính ",n.jsx(e.code,{children:"list"}),' sẽ trả về ngay một mảng các "dữ liệu giả" khi bắt đầu tải. Điều này cho phép bạn dựng cấu trúc bảng hoặc danh sách trước khi byte dữ liệu đầu tiên được tải về, loại bỏ tình trạng giao diện bị "nhảy".']}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Danh sách thông minh (",n.jsx(e.code,{children:"list"}),")"]}),": Đây là điểm tương tác chính. Thuộc tính ",n.jsx(e.code,{children:"list"})," tự động chuyển đổi giữa:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dữ liệu Skeleton (trong khi đang tải)."}),`
`,n.jsx(e.li,{children:"Kết quả tìm kiếm (nếu có chuỗi tìm kiếm được nhập)."}),`
`,n.jsxs(e.li,{children:["Dữ liệu đã định dạng (nếu ",n.jsx(e.code,{children:"formattersOptions"})," được cấu hình)."]}),`
`,n.jsx(e.li,{children:"Dữ liệu thô (nếu không có trường hợp nào ở trên áp dụng)."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Đồng bộ hóa Tìm kiếm và Định dạng"}),': Việc tìm kiếm được thực hiện trên dữ liệu đã tải và đã được định dạng (nếu cần). Điều này đảm bảo người dùng có thể tìm thấy "Nguyễn Văn A" ngay cả khi dữ liệu JSON gốc lưu họ và tên ở các trường riêng biệt. Tìm kiếm diễn ra ở phía client (Client-side), mang lại kết quả tức thì.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chu kỳ Mutation và Tự động làm mới"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Khi gọi các phương thức ",n.jsx(e.code,{children:"sendPost"}),", ",n.jsx(e.code,{children:"sendPut"})," hoặc ",n.jsx(e.code,{children:"sendDelete"}),", hook sẽ theo dõi trạng thái phản hồi."]}),`
`,n.jsxs(e.li,{children:["Nếu server trả về thành công (được xác nhận qua ",n.jsx(e.code,{children:"isApiSuccess"}),"), hook sẽ ",n.jsx(e.strong,{children:"tự động"})," gọi ",n.jsx(e.code,{children:"reset()"})," cho GET request chính."]}),`
`,n.jsx(e.li,{children:"Việc này kích hoạt tải lại dữ liệu và cập nhật toàn bộ danh sách. Do đó, sau khi xóa một dòng hoặc thêm mới, danh sách của bạn luôn được cập nhật mà không cần viết thêm mã xử lý thủ công."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính phản xạ của tham số"}),": Nếu ",n.jsx(e.code,{children:"path"})," hoặc ",n.jsx(e.code,{children:"options"})," (trong ",n.jsx(e.code,{children:"propsGet"}),") là các biến reactive (Vue Ref) và bạn thiết lập ",n.jsx(e.code,{children:"reactivity: true"}),", hook sẽ theo dõi sự thay đổi của chúng và tự động tải lại dữ liệu khi URL hoặc tham số lọc thay đổi."]}),`
`]}),`
`,n.jsx(e.h2,{id:"kiến-trúc-phần-lõi",children:"Kiến trúc phần lõi"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useApiManagementRef"}),' là một hook điều hướng được thiết kế chuyên biệt để quản lý các mẫu màn hình CRUD tiêu chuẩn (ví dụ như data tables). Thông qua cấu hình tham số, bạn sẽ nhận được một đối tượng "tất cả trong một" để quản lý loading spinners, bộ tìm kiếm, chuẩn hóa dữ liệu cho UI, điều khiển thao tác CRUD và tự động tải lại danh sách.']}),`
`,n.jsx(e.h2,{id:"các-kiểu-dữ-liệu-types",children:"Các kiểu dữ liệu (Types)"}),`
`,n.jsx(e.h3,{id:"apimanagementgetreturn-type",children:n.jsx(e.code,{children:"ApiManagementGet<Return, Type>"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path?: string | Ref<string>"})," — đường dẫn API."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ApiOptions"})," — các tùy chọn request (method, headers, v.v.)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reactivity?: boolean"})," — có tự động refetch khi ",n.jsx(e.code,{children:"path"})," hoặc ",n.jsx(e.code,{children:"options"})," thay đổi hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"conditions?: Ref<boolean>"})," — điều kiện để thực thi request."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transformation?: (data: Type) => ApiData<Return>"})," — hàm transform dữ liệu sau khi fetch."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"unmounted?: boolean"})," — có xóa dữ liệu khi component bị unmount hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"skeleton?: () => Return"})," — hàm trả về dữ liệu giả (placeholder) trong khi loading."]}),`
`]}),`
`,n.jsx(e.h3,{id:"apimanagementsearcht-k",children:n.jsx(e.code,{children:"ApiManagementSearch<T, K>"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"columns: K"})," — danh sách các cột để tìm kiếm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: Ref<string>"})," — chuỗi tìm kiếm reactive."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: SearchOptions"})," — các tùy chọn tìm kiếm bổ sung."]}),`
`]}),`
`,n.jsx(e.h3,{id:"apimanagementrequestt-return",children:n.jsx(e.code,{children:"ApiManagementRequest<T, Return>"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path?: string | Ref<string>"})," — đường dẫn cho mutation request."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"action?: (data: Return | undefined) => Promise<void> | void"})," — callback sau khi thực thi request."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transformation?: (data: T) => Return"})," — hàm transform dữ liệu trước khi gửi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toData?: boolean"})," — có gửi dữ liệu trong body của request (dưới thuộc tính ",n.jsx(e.code,{children:"data"}),") hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: ApiOptions"})," — các tùy chọn request bổ sung."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
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
`})})]})}function u(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{u as default};
