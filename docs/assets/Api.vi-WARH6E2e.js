import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Api - Quản lý yêu cầu (Static)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-api`,children:`Lớp Api`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`Api`}),` là `,(0,c.jsx)(t.strong,{children:`Lớp chính (Tĩnh)`}),` và đóng vai trò là điểm truy cập chính để quản lý các yêu cầu HTTP. Nó là một wrapper tĩnh bao quanh một `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` được quản lý toàn cục, cung cấp một giao diện singleton sạch sẽ cho các hoạt động mạng tiêu chuẩn.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giao diện tĩnh`}),` — thực hiện các hoạt động HTTP tiêu chuẩn (`,(0,c.jsx)(t.code,{children:`GET`}),`, `,(0,c.jsx)(t.code,{children:`POST`}),`, v.v.) mà không cần khởi tạo thủ công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hook vòng đời toàn cục`}),` — cấu hình việc chuẩn bị và phân tích yêu cầu một lần cho toàn bộ ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cách ly SSR`}),` — sử dụng `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` để quản lý việc cách ly các instance riêng lẻ trong quá trình render phía máy chủ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thiết lập đơn giản`}),` — cung cấp phương thức `,(0,c.jsx)(t.code,{children:`setConfig`}),` thống nhất để áp dụng nhiều lớp cấu hình cùng một lúc.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức để thực hiện các yêu cầu mạng vật lý.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request<T>(pathRequest: string | ApiFetch): Promise<T>`}),` — Trình thực thi cốt lõi; chấp nhận một chuỗi đường dẫn hoặc đối tượng cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu GET.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`post<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu POST.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`put<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu PUT.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`patch<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu PATCH.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delete<T>(request: ApiFetch): Promise<T>`}),` — Gửi yêu cầu DELETE.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra`,children:`Kiểm tra`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isLocalhost(): boolean`}),` — Kiểm tra xem môi trường hiện tại có phải là máy chủ phát triển cục bộ hay không.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setUrl(url: string): void`}),` — Thay đổi URL base của API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setHeaders(headers: Record<string, string>): void`}),` — Thiết lập các header yêu cầu mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setRequestDefault(request: Record<string, any>): void`}),` — Thiết lập dữ liệu body yêu cầu mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setPreparation(callback): void`}),` — Đăng ký một hook để chạy trước mỗi yêu cầu được bật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setEnd(callback): void`}),` — Đăng ký một hook để chạy sau mỗi phản hồi được bật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTimeout(timeout: number): void`}),` — Thay đổi timeout yêu cầu toàn cục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOrigin(origin: string): void`}),` — Thay đổi nguồn (giao thức và tên miền) cho URL base.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setWrapper(wrapper): void`}),` — Thiết lập hàm wrapper cho các yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setConfig(config?: ApiConfig): void`}),` — Áp dụng một đối tượng cấu hình đầy đủ.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`phụ-trợ`,children:`Phụ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStatus(): ApiStatus`}),` — Truy cập trình quản lý trạng thái cho yêu cầu cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getResponse(): ApiResponse`}),` — Truy cập trình quản lý phản hồi/mô phỏng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHydration(): ApiHydration`}),` — Truy cập trình quản lý hydration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getHydrationScript(): string`}),` — Trả về khối script để hydration từ SSR sang client.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getOrigin(): string`}),` — Trả về URL base đã kết hợp với đường dẫn API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Trả về URL đã được phân giải đầy đủ với các token bản địa hóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBody(request?, method?): string | FormData | undefined`}),` — Chuẩn bị body yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBodyForGet(request, path?, method?): string`}),` — Chuẩn bị chuỗi truy vấn (query string).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): ApiInstance`}),` — Trả về đối tượng `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` cơ sở.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(t.h3,{id:`apiconfig`,children:`ApiConfig`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`urlRoot: string`}),` — URL base cho API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`origin: string`}),` — giao thức và tên miền cho URL base.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`headers: Record<string, string>`}),` — các header yêu cầu mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`requestDefault: Record<string, any>`}),` — dữ liệu yêu cầu mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`preparation: (apiFetch: ApiFetch) => Promise<void>`}),` — hook đầu vào (entry hook).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`end: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>`}),` — hook đầu ra (exit hook).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeout: number`}),` — timeout toàn cục tính bằng mili giây.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wrapper: <R>(callback: () => Promise<R>, apiFetch: ApiFetch) => Promise<R>`}),` — hàm wrapper để thực thi các yêu cầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kiến-trúc-proxy`,children:`Kiến trúc Proxy`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`Api`}),` hoạt động như một `,(0,c.jsx)(t.strong,{children:`Proxy tĩnh`}),`. Tất cả các lệnh gọi phương thức đều được chuyển hướng đến một `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` nội bộ.`]}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-instance`,children:`Quản lý Instance`}),`
`,(0,c.jsxs)(t.p,{children:[`Trình quản lý nội bộ được lưu trữ trong `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` bằng một khóa duy nhất (`,(0,c.jsx)(t.code,{children:`__dxt_api_instance__`}),`). Kiến trúc này giải quyết hai vấn đề lớn:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn luồng trong SSR`}),`: Trong quá trình render phía máy chủ, `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` đảm bảo rằng mỗi yêu cầu đến có cấu hình và trạng thái API riêng biệt, ngăn chặn rò rỉ dữ liệu giữa các người dùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sự đơn giản của Singleton trên Client`}),`: Ở phía client, nó hoạt động như một singleton thực sự, cho phép bạn cấu hình API tại điểm truy cập và sử dụng nó ở bất cứ đâu mà không cần truyền instance.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`ủy-quyền-delegation`,children:`Ủy quyền (Delegation)`}),`
`,(0,c.jsxs)(t.p,{children:[`Mặc dù `,(0,c.jsx)(t.code,{children:`Api`}),` là giao diện được ưu tiên cho logic ứng dụng tiêu chuẩn, nhưng logic cốt lõi (thử lại, logic hydration, jitter) nằm bên trong `,(0,c.jsx)(t.code,{children:`ApiInstance`}),`. Đối với các tình huống nâng cao liên quan đến nhiều URL base hoặc các bộ header khác nhau đồng thời, bạn có thể khởi tạo `,(0,c.jsx)(t.code,{children:`ApiInstance`}),` trực tiếp.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};