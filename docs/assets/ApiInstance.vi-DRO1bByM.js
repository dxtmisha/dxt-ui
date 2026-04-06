import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiInstance - Quản lý yêu cầu (Request)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apiinstance`,children:`Lớp ApiInstance`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp bọc API Fetch để thao tác hiệu quả với các yêu cầu mạng. Nó cung cấp khả năng cấu hình nâng cao, xử lý trạng thái toàn cục, giả lập phản hồi (mocking), cấu hình các hook chuẩn bị, và tự động phân tích dữ liệu (parsing).`}),`
`,(0,c.jsxs)(n.p,{children:[`Nó kết hợp chặt chẽ với các lớp phụ thuộc: `,(0,c.jsx)(n.code,{children:`ApiStatus`}),`, `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`, `,(0,c.jsx)(n.code,{children:`ApiPreparation`}),`, `,(0,c.jsx)(n.code,{children:`ApiDefault`}),`, và `,(0,c.jsx)(n.code,{children:`ApiHeaders`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Các phương thức CRUD`}),` — các bí danh (alias) tiện lợi `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`delete`}),` để thao tác với các yêu cầu HTTP`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình toàn cục (Global Configuration)`}),` — thiết lập URL cơ sở (base URL), header và tham số mặc định cho tất cả yêu cầu`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Các Hook vòng đời (Lifecycle Hooks)`}),` — khả năng xác định các hàm callback được thực thi trước (`,(0,c.jsx)(n.code,{children:`setPreparation`}),`) và sau (`,(0,c.jsx)(n.code,{children:`setEnd`}),`) mỗi yêu cầu`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi trạng thái`}),` — truy cập trạng thái và lỗi của yêu cầu cuối cùng thông qua `,(0,c.jsx)(n.code,{children:`ApiStatus`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm & Giả lập dữ liệu (Caching & Emulation)`}),` — quản lý các phản hồi mẫu (mock responses) thông qua `,(0,c.jsx)(n.code,{children:`ApiResponse`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động phân tích dữ liệu`}),` — tự động chuyển đổi định dạng body thành JSON/FormData và trích xuất dữ liệu từ các phản hồi JSON`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định vị khu vực (Geolocation)`}),` — tự động thay thế các tham số `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),`, `,(0,c.jsx)(n.code,{children:`{language}`}),` trong đường dẫn yêu cầu`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hàm-khởi-tạo-constructor`,children:`Hàm khởi tạo (Constructor)`}),`
`,(0,c.jsxs)(n.p,{children:[`Thực thể `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` có thể được cấu hình trong quá trình khởi tạo với các lớp phụ thuộc tùy chỉnh hoặc các thực thể cụ thể.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url: string`}),` — đường dẫn cơ sở cho tất cả các yêu cầu (mặc định: `,(0,c.jsx)(n.code,{children:`'/api/'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: ApiInstanceOptions`}),` — đối tượng cấu hình để tiêm các phụ thuộc (dependency injection).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apiinstanceoptions`,children:(0,c.jsx)(n.code,{children:`ApiInstanceOptions`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headersClass?: typeof ApiHeaders`}),` — lớp quản lý các tiêu đề (headers).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`requestDefaultClass?: typeof ApiDefault`}),` — lớp cho các tham số yêu cầu mặc định toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusClass?: typeof ApiStatus`}),` — lớp để theo dõi trạng thái yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`responseClass?: typeof ApiResponse`}),` — lớp để giả lập phản hồi và bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparationClass?: typeof ApiPreparation`}),` — lớp quản lý các hook vòng đời.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loadingClass?: LoadingInstance`}),` — thực thể của trình quản lý chỉ báo tải (mặc định: `,(0,c.jsx)(n.code,{children:`Loading.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenterClass?: ErrorCenterInstance`}),` — thực thể của trung tâm lỗi để kích hoạt các sự kiện (mặc định: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức-gọi-tín-hiệu-api-calling-methods`,children:`Phương thức Gọi Tín Hiệu (API Calling Methods)`}),`
`,(0,c.jsx)(n.h3,{id:`request`,children:(0,c.jsx)(n.code,{children:`request`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thuật toán kích hoạt thực hiện tác vụ chính trên fetch thuần mạng vật lý. Nếu cung cấp trong ngữ cảnh string cô đơn mà không phải Object, nó kích hoạt hệ phân tán luồng định sẵn cài cắm theo kiểu `,(0,c.jsx)(n.code,{children:`GET`}),`.
Khi hệ thống bối rối hoặc gọi trượt giao thức mạng (như lỗi nội bộ 500 status), chương trình chủ lực sẽ trực xuất luôn mã lỗi (`,(0,c.jsx)(n.code,{children:`throw e`}),`), qua đó giúp lập trình viên dùng `,(0,c.jsx)(n.code,{children:`try/catch`}),` thu hồi lệnh dễ dàng. Khi máy chủ trả lại tệp Object thuộc chuẩn JSON, gói nhận dạng trạng thái lệnh (`,(0,c.jsx)(n.code,{children:`statusObject`}),`) sẽ đắp kèm thành khối liền mạch trước khi đẩy về UI.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathRequest: string | ApiFetch`}),` — định dạng kết xuất dữ liệu hay đường dẫn kết cấu hệ thống.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiData<T>>`}),` — giao diện format hoàn thiện của phản hồi mã hóa (decoded). Bao gồm các thông số biến (`,(0,c.jsx)(n.code,{children:`data`}),`, `,(0,c.jsx)(n.code,{children:`statusObject`}),`...) đi kèm nếu server nhả form dữ liệu có bọc.`]}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Bật một khối yêu cầu API bằng giao thức `,(0,c.jsx)(n.code,{children:`GET`}),` theo cơ chế gỡ rối và ép đầu cung dữ liệu thông số search URL lên cấu trúc HTTP tự động.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch`}),` — Các thông số truy xuất của lệnh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`})]}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsxs)(n.p,{children:[`Giao chuyển chùm truy vấn truyền động REST/GraphQL bằng luồng định tuyến tuân thủ HTTP `,(0,c.jsx)(n.code,{children:`POST`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch`}),` — Cơ sở cấu hình bao bọc giao diện, kèm tham số URL hiện chỉ định.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`})]}),`
`,(0,c.jsx)(n.h3,{id:`put`,children:(0,c.jsx)(n.code,{children:`put`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trình bày khả năng hiệu chỉnh một khối dữ liệu thông qua cấu hình thao tác tiêu chuẩn ở hệ phương án `,(0,c.jsx)(n.code,{children:`PUT`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch`}),` — Các lựa chọn query dẫn đường backend map.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`})]}),`
`,(0,c.jsx)(n.h3,{id:`delete`,children:(0,c.jsx)(n.code,{children:`delete`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phát tín hiệu dọn dẹp theo phân hóa truyền thống ở nhát kích HTTP `,(0,c.jsx)(n.code,{children:`DELETE`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: ApiFetch`}),` — Bọc thông số liên kết arguments format.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-khởi-tạo-interface`,children:`Các phương thức khởi tạo Interface`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLocalhost(): boolean`}),` — Kiểm tra xem mã có đang thực thi trên một máy chủ phát triển localhost không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getStatus(): ApiStatus`}),` — Trả về trình quản lý trạng thái `,(0,c.jsx)(n.code,{children:`ApiStatus`}),` để theo dõi mã trạng thái HTTP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getResponse(): ApiResponse`}),` — Trả về trình quản lý bộ giả lập và phản hồi `,(0,c.jsx)(n.code,{children:`ApiResponse`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình-hệ-thống-configuration`,children:`Cấu hình hệ thống (Configuration)`}),`
`,(0,c.jsxs)(n.p,{children:[`Hỗ trợ phương pháp nối chuỗi (chaining methods) trả về đối tượng `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` mấu chốt):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setHeaders(headers: Record<string, string>): this`}),` — Áp dụng một thư mục Header chuẩn cho toàn hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setRequestDefault(request: Record<string, any>): this`}),` — Đưa toàn bộ thông số tham số mặc định chuẩn vào mạng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): this`}),` — Ghi đè định danh URL mặc định nhánh server API.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Thiết lập vòng lặp hook `,(0,c.jsx)(n.em,{children:`ngay trước`}),` thời khắc thao tác diễn ra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Thiết lập vòng lặp hook `,(0,c.jsx)(n.em,{children:`sau`}),` khi tín hiệu mạng phản hồi trả về.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`chuẩn-bị-gửi-thông-tin-request-preparation`,children:`Chuẩn bị gửi thông tin (Request Preparation)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(path: string, api?: boolean): string`}),` — Tạo ra đường dẫn API đầy đủ, tự thay thế thẻ định danh quốc gia `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),` v.v...`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined`}),` — Hoán đổi tài liệu để form nạp JSON hoặc `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string`}),` — Hoàn trả dữ liệu params cấu hình chuẩn cho thanh Search URL `,(0,c.jsx)(n.code,{children:`GET`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`đối-tượng-apifetch`,children:`Đối tượng ApiFetch`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiFetch`}),` là đối tượng cấu hình chính được truyền vào các phương thức `,(0,c.jsx)(n.code,{children:`request`}),`, `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, `,(0,c.jsx)(n.code,{children:`delete`}),`. Tất cả các trường đều là tùy chọn:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — đường dẫn đến endpoint tương đối với URL cơ sở (ví dụ: `,(0,c.jsx)(n.code,{children:`'users/list'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull?: string`}),` — URL đầy đủ của yêu cầu. Nếu có, sẽ bỏ qua `,(0,c.jsx)(n.code,{children:`api`}),` và `,(0,c.jsx)(n.code,{children:`path`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: boolean`}),` — có thêm URL cơ sở vào trước `,(0,c.jsx)(n.code,{children:`path`}),` không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method?: ApiMethod`}),` — phương thức HTTP (`,(0,c.jsx)(n.code,{children:`'GET'`}),`, `,(0,c.jsx)(n.code,{children:`'POST'`}),`, `,(0,c.jsx)(n.code,{children:`'PUT'`}),`, `,(0,c.jsx)(n.code,{children:`'DELETE'`}),`). Mặc định: `,(0,c.jsx)(n.code,{children:`'GET'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request?: FormData | Record<string, any> | string`}),` — nội dung yêu cầu (POST/PUT) hoặc tham số query (GET). Được gửi dưới dạng JSON hoặc `,(0,c.jsx)(n.code,{children:`FormData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`headers?: Record<string, string> | null`}),` — tiêu đề bổ sung. `,(0,c.jsx)(n.code,{children:`null`}),` — tắt tất cả tiêu đề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type?: string`}),` — giá trị `,(0,c.jsx)(n.code,{children:`Content-Type`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`'application/json;charset=UTF-8'`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`auth?: boolean`}),` — thêm tiêu đề xác thực.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toData?: boolean`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, tự động giải gói `,(0,c.jsx)(n.code,{children:`data`}),` từ cấu trúc `,(0,c.jsx)(n.code,{children:`{ data: ... }`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`global?: boolean`}),` — sử dụng bộ nhớ đệm phản hồi toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`devMode?: boolean`}),` — bật nhật ký phát triển.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hideError?: boolean`}),` — ẩn thông báo lỗi trong `,(0,c.jsx)(n.code,{children:`console.error`}),` khi có sự cố. Mặc định: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation?: boolean`}),` — có chạy hook `,(0,c.jsx)(n.code,{children:`setPreparation`}),` toàn cục trước yêu cầu này không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd?: boolean`}),` — có chạy hook `,(0,c.jsx)(n.code,{children:`setEnd`}),` toàn cục sau khi nhận phản hồi không. Mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`queryReturn?: (query: Response) => Promise<any>`}),` — bộ xử lý phản hồi tùy chỉnh thay cho việc đọc JSON mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init?: RequestInit`}),` — các tùy chọn bổ sung truyền thẳng vào `,(0,c.jsx)(n.code,{children:`fetch()`}),` nội tại (CORS, chế độ cache, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout?: number`}),` — thời gian chờ yêu cầu tính bằng mili giây. Mặc định: `,(0,c.jsx)(n.code,{children:`16000`}),`ms.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`controller?: AbortController`}),` — bộ điều khiển để hủy yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`retry?: number`}),` — số lần thử lại khi thất bại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`retryDelay?: number`}),` — độ trễ cơ bản giữa các lần thử lại tính bằng mili giây. Mặc định: `,(0,c.jsx)(n.code,{children:`64`}),`ms.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-dữ-liệu-phản-hồi`,children:`Cấu trúc dữ liệu phản hồi`}),`
`,(0,c.jsxs)(n.p,{children:[`Các yêu cầu trả về một `,(0,c.jsx)(n.code,{children:`Promise<ApiData<T>>`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`apidatat`,children:(0,c.jsx)(n.code,{children:`ApiData<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc của dữ liệu trả về phụ thuộc vào loại phản hồi:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Mảng (Array)`}),`: Nếu phản hồi là một mảng, `,(0,c.jsx)(n.code,{children:`ApiData<T>`}),` đóng vai trò như `,(0,c.jsx)(n.code,{children:`T[]`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đối tượng (Object)`}),`: Nếu phản hồi là một đối tượng, `,(0,c.jsx)(n.code,{children:`ApiData<T>`}),` bao gồm các trường từ `,(0,c.jsx)(n.code,{children:`T`}),` và lớp bọc tiêu chuẩn `,(0,c.jsx)(n.code,{children:`ApiDataItem<T>`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`apidataitemt`,children:(0,c.jsx)(n.code,{children:`ApiDataItem<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Phản hồi đối tượng bao gồm các trường sau:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: T`}),` — tải trọng chính nếu phản hồi đã được bọc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`success?: boolean`}),` — cờ thành công.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: ApiStatusType`}),` — loại trạng thái (`,(0,c.jsx)(n.code,{children:`'success'`}),`, `,(0,c.jsx)(n.code,{children:`'error'`}),`, `,(0,c.jsx)(n.code,{children:`'warning'`}),`, `,(0,c.jsx)(n.code,{children:`'info'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — thông báo phản hồi hoặc mô tả lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusObject?: ApiStatusItem`}),` — thông tin kỹ thuật về yêu cầu:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: number`}),` — mã trạng thái HTTP (ví dụ: 200, 404).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`statusText?: string`}),` — văn bản trạng thái HTTP.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`error?: string`}),` — thông báo lỗi nội bộ nếu yêu cầu thất bại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastResponse?: any`}),` — dữ liệu từ phản hồi cuối cùng trước khi phân tích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastStatus?: ApiStatusType`}),` — trạng thái của yêu cầu cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lastMessage?: string`}),` — thông báo từ yêu cầu cuối cùng.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hủy-yêu-cầu-gọi-dữ-liệu-trực-tiếp-abortcontroller`,children:`Hủy yêu cầu gọi dữ liệu trực tiếp (AbortController)`}),`
`,(0,c.jsxs)(n.p,{children:[`API này hỗ trợ nền tảng chặn luồng gọi API tức thì. Bạn chỉ cần áp dụng thẻ phiên mã `,(0,c.jsx)(n.code,{children:`AbortController`}),` vào dữ liệu trường `,(0,c.jsx)(n.code,{children:`controller`}),` trong chuỗi khai báo thuộc `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const controller = new AbortController()

// Tung khối lệnh phân luồng đi
api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Yêu cầu bị chặn đứng bởi người dùng')
  }
})

// Thao tác ngừng (như khi unmount file chẳng hạn)
controller.abort()
`})}),`
`,(0,c.jsx)(n.h2,{id:`hook-vòng-đời-lifecycle-hooks`,children:`Hook vòng đời (Lifecycle Hooks)`}),`
`,(0,c.jsx)(n.p,{children:`Các hook cho phép bạn chèn logic toàn cục sẽ được tự động thực thi cho mọi yêu cầu mạng. Đây là một công cụ mạnh mẽ để giải quyết các tác vụ như:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Tự động thêm token xác thực động.`}),`
`,(0,c.jsx)(n.li,{children:`Ghi log tập trung hoạt động mạng.`}),`
`,(0,c.jsx)(n.li,{children:`Tự động làm mới token hết hạn (Refresh Token).`}),`
`,(0,c.jsx)(n.li,{children:`Thông báo lỗi toàn cục cho người dùng.`}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`chuẩn-bị-yêu-cầu-setpreparation`,children:[`Chuẩn bị yêu cầu (`,(0,c.jsx)(n.code,{children:`setPreparation`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`setPreparation`}),` thiết lập một hàm callback được gọi ngay trước khi yêu cầu được gửi đến máy chủ (trước khi thực hiện lệnh `,(0,c.jsx)(n.code,{children:`fetch`}),` gốc).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc điểm hoạt động:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thứ tự thực thi`}),`: Nếu nhiều yêu cầu được bắt đầu đồng thời, lớp đảm bảo rằng hook chuẩn bị sẽ được thực thi `,(0,c.jsx)(n.strong,{children:`tuần tự`}),`. Tất cả các yêu cầu tiếp theo sẽ đợi hook hiện tại kết thúc trong chế độ chờ (với khoảng thời gian thăm dò 160ms). Điều này ngăn chặn xung đột, ví dụ như khi nhiều yêu cầu đồng thời cố gắng làm mới token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tham số`}),`: Nhận đối tượng `,(0,c.jsx)(n.code,{children:`apiFetch`}),`, chứa tất cả các cài đặt yêu cầu hiện tại. Bạn có thể sửa đổi đối tượng này (ví dụ: thêm tiêu đề hoặc sửa đổi thân yêu cầu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trả về`}),`: `,(0,c.jsx)(n.code,{children:`Promise<void>`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`api.setPreparation(async (apiFetch) => {
  // Ví dụ: thêm tiêu đề động
  if (apiFetch.auth) {
    const token = await authStore.getToken()
    apiFetch.headers = {
      ...apiFetch.headers,
      'Authorization': \`Bearer \${token}\`
    }
  }
  
  console.log(\`[API] Đang chuẩn bị yêu cầu: \${apiFetch.method} \${apiFetch.path}\`)
})
`})}),`
`,(0,c.jsxs)(n.h3,{id:`kết-thúc-yêu-cầu-setend`,children:[`Kết thúc yêu cầu (`,(0,c.jsx)(n.code,{children:`setEnd`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`setEnd`}),` thiết lập một hàm callback được gọi sau khi nhận được phản hồi từ máy chủ, nhưng trước khi dữ liệu được chuyển đến mã gọi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query: Response`}),` — đối tượng phản hồi Fetch API gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiFetch: ApiFetch`}),` — đối tượng tham số đã dùng để thực hiện yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiPreparationEnd>`}),`. Đối tượng kết quả có thể chứa các trường sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset?: boolean`}),` — nếu được đặt thành `,(0,c.jsx)(n.code,{children:`true`}),`, thư viện sẽ hủy chuỗi hiện tại và `,(0,c.jsx)(n.strong,{children:`thực hiện lại yêu cầu`}),` (đệ quy) sau một khoảng trễ ngẫu nhiên (xem `,(0,c.jsx)(n.code,{children:`retryDelay`}),`). Toàn bộ quá trình chuẩn bị và thực thi sẽ được khởi động lại. Việc này được dùng để tự động xử lý quyền truy cập đã được làm mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: any`}),` — cho phép bạn ghi đè dữ liệu mà phương thức API trả về. Nếu trường này được chỉ định, cơ chế đọc phản hồi tiêu chuẩn (JSON/văn bản) sẽ bị bỏ qua.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`api.setEnd(async (response, apiFetch) => {
  // Ví dụ: tự động cập nhật Refresh Token
  if (response.status === 401) {
    const isSuccess = await authStore.refresh()
    
    if (isSuccess) {
      // Thử lại yêu cầu với token mới
      return { reset: true }
    }
  }

  // Ví dụ: thông báo lỗi toàn cục
  if (response.status >= 500) {
    notification.error('Dịch vụ hiện không khả dụng')
  }

  return {}
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`tắt-hook-cho-một-yêu-cầu-cụ-thể`,children:`Tắt Hook cho một yêu cầu cụ thể`}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn có thể tắt chọn lọc các hook toàn cục trong đối tượng `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalPreparation: false`}),` — bỏ qua việc thực thi hook `,(0,c.jsx)(n.code,{children:`setPreparation`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`globalEnd: false`}),` — bỏ qua việc thực thi hook `,(0,c.jsx)(n.code,{children:`setEnd`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`giả-lập-phản-hồi-apiresponse`,children:`Giả lập phản hồi (ApiResponse)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trình quản lý giả lập `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` (có thể truy cập thông qua `,(0,c.jsx)(n.code,{children:`api.getResponse()`}),`) cho phép cấu hình các phản hồi mẫu (mock) cho những đường dẫn cụ thể. Hệ thống này vô cùng hữu ích khi phát triển giao diện (UI frontend) trước khi có API backend hoàn chỉnh hoặc khi cần viết test.`]}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-các-phản-hồi-giả-lập-mocking`,children:`Đăng ký các phản hồi giả lập (Mocking)`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`add`}),` nhận một đối tượng dạng `,(0,c.jsx)(n.code,{children:`ApiResponseItem`}),` hoặc một mảng các đối tượng đó.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Các trường quan trọng trong `,(0,c.jsx)(n.code,{children:`ApiResponseItem`}),`:`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path`}),` — Dạng chuỗi (String - khớp chính xác) hoặc Biểu thức chính quy (`,(0,c.jsx)(n.code,{children:`RegExp`}),`) dùng để chặn đường dẫn (URL) cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`method`}),` — Phương thức HTTP (`,(0,c.jsx)(n.code,{children:`ApiMethodItem.get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, v.v...).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request`}),` — (Tùy chọn) Bộ lọc theo tải trọng body. Bạn có thể dùng chuỗi đánh dấu đặc biệt `,(0,c.jsx)(n.code,{children:`'*any'`}),` để vô hiệu hoá bộ kiểm tra nội dung và bắt mọi yêu cầu gửi đến đường dẫn này.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response`}),` — Một đối tượng dữ liệu tĩnh `,(0,c.jsx)(n.em,{children:`hoặc`}),` một hàm khởi tạo (factory function) `,(0,c.jsx)(n.code,{children:`(request) => any`}),` dùng để tạo câu trả lời tự động dựa trên tải trọng yêu cầu gửi đến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disable`}),` — (Tùy chọn) Vô hiệu hóa mock này (boolean hoặc callback).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isForGlobal`}),` — (Tùy chọn) Đánh dấu là mock toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lag`}),` — (Tùy chọn) Giả lập độ trễ mạng (`,(0,c.jsx)(n.code,{children:`boolean`}),`), tự tạo một ngẫu nhiên Timeout từ 0 tới 2000ms.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const responseManager = api.getResponse()

// Bật chế độ nhà phát triển (in ra bảng điều khiển các thông tin log khi chặn các mock request)
responseManager.setDevMode(true)

// Ví dụ 1: Câu lệnh phản hồi tĩnh đối với GET request
responseManager.add({
  path: 'users/profile', // có thể dùng String hoặc RegExp
  method: 'GET',
  response: { id: 1, name: 'Admin', role: 'superuser' },
  lag: true // Tạo rào cản thời gian để giả lập ping mạng thực tế
})

// Ví dụ 2: Phản hồi động bằng một hàm tuỳ chỉnh (rất tốt khi dựng thanh phân trang hay thanh tìm kiếm)
responseManager.add({
  path: /users\\/search/, // theo dõi bằng RegExp
  method: 'GET',
  // Hàm này trực tiếp nhận một đối tượng body được truyền vào tham số ban đầu
  response: (request) => {
    return [
        { id: 1, name: \`Kết quả tìm kiếm cho: \${request.query}\` }
    ]
  }
})

// Ví dụ 3: Đón chặn một POST request không cần kiểm duyệt nội dung body truyền lên
responseManager.add({
  path: 'users/create',
  method: 'POST',
  request: '*any', // đánh dấu \`*any\` chặn sự xác thực body
  response: { success: true, message: 'Tạo tài khoản thành công (MOCK)' }
})

// Sử dụng trong code (chương trình sẽ không kết nối mạng thực mà xuất hiện ngay mock)
const profile = await api.get({ path: 'users/profile' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`ưu-tiên-và-chuyển-đổi-mock`,children:`Ưu tiên và chuyển đổi Mock`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Trình chặn giả lập sẽ xử lý yêu cầu `,(0,c.jsx)(n.strong,{children:`trước lúc`}),` lệnh `,(0,c.jsx)(n.code,{children:`fetch`}),` diễn ra thực sự.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nếu bộ giả lập không tìm được mock tương ứng nào khớp (bởi vì khác `,(0,c.jsx)(n.code,{children:`path`}),`, `,(0,c.jsx)(n.code,{children:`method`}),`, hoặc `,(0,c.jsx)(n.code,{children:`request`}),`), Lớp `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` sẽ tự động chuyển hướng gọi thẳng yêu cầu tới máy chủ vật lý ở điểm xa.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Bạn hoàn toàn có thể vô hiệu hóa mock tạm thời nào đó bằng cách gọi lệnh `,(0,c.jsx)(n.code,{children:`disable: () => true`}),` bên trong object. Hàm hệ thống `,(0,c.jsx)(n.code,{children:`add`}),` sẽ thẳng thừng phủ quyết lệnh này.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng-cơ-bản`,children:`Ví dụ sử dụng cơ bản`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiInstance } from '@dxtmisha/functional'

const api = new ApiInstance()

// Cấu hình API toàn cục
api.setUrl('https://api.example.com/v1/')
   .setHeaders({ 'Authorization': 'Bearer token123' })
   .setRequestDefault({ source: 'webapp' })

// Móc chằng interceptor giám thị thông luồng
api.setPreparation(async (apiFetch) => {
    console.log('Sửa soạn chạy phiên fetch đến nhánh:', apiFetch.path)
})

// Chạy GET truyền thông bọc bằng chuẩn cản rào
try {
  const data = await api.get({ path: 'users' })
  // Rút chuỗi tín hiệu an toàn từ khối object:
  // console.log(data.statusObject.getStatus())
} catch (e) {
  console.error('Máy lỏng chân tín hiệu trong lúc lôi users về quy mô:', e)
}

// Bơm POST trang bị kíp nổ chặn luồng (Abort Feature)
const abortCtrl = new AbortController()
try {
  const newUser = await api.post({
    path: 'users/create',
    request: { name: 'John Doe', age: 30 },
    controller: abortCtrl
  })
} catch (e) {
  if (e.name === 'AbortError') console.log('Cuộc tiến quân rút lại an toàn!')
}

// Hủy bất kỳ khi nào cần nhổ neo
// abortCtrl.abort()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};