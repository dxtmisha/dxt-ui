import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(e){const c={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Classes/Api - Quản lý yêu cầu (Request)"}),`
`,n.jsx(c.h1,{id:"lớp-api",children:"Lớp Api"}),`
`,n.jsx(c.p,{children:"Một lớp wrapper tĩnh (static class) bọc API Fetch để thao tác hiệu quả với các yêu cầu mạng. Nó cung cấp khả năng cấu hình nâng cao, xử lý trạng thái toàn cục, giả lập phản hồi (mocking), cấu hình các hook chuẩn bị, và tự động phân tích dữ liệu (parsing)."}),`
`,n.jsxs(c.p,{children:["Nó kết hợp chặt chẽ với các lớp phụ thuộc: ",n.jsx(c.code,{children:"ApiStatus"}),", ",n.jsx(c.code,{children:"ApiResponse"}),", ",n.jsx(c.code,{children:"ApiPreparation"}),", ",n.jsx(c.code,{children:"ApiDefault"}),", và ",n.jsx(c.code,{children:"ApiHeaders"}),"."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Các phương thức CRUD"})," — các bí danh (alias) tiện lợi ",n.jsx(c.code,{children:"get"}),", ",n.jsx(c.code,{children:"post"}),", ",n.jsx(c.code,{children:"put"}),", ",n.jsx(c.code,{children:"delete"})," để thao tác với các yêu cầu HTTP"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cấu hình toàn cục (Global Configuration)"})," — thiết lập URL cơ sở (base URL), header và tham số mặc định cho tất cả yêu cầu"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Các Hook vòng đời (Lifecycle Hooks)"})," — khả năng xác định các hàm callback được thực thi trước (",n.jsx(c.code,{children:"setPreparation"}),") và sau (",n.jsx(c.code,{children:"setEnd"}),") mỗi yêu cầu"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Theo dõi trạng thái"})," — truy cập trạng thái và lỗi của yêu cầu cuối cùng thông qua ",n.jsx(c.code,{children:"ApiStatus"})]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bộ nhớ đệm & Giả lập dữ liệu (Caching & Emulation)"})," — quản lý các phản hồi mẫu (mock responses) thông qua ",n.jsx(c.code,{children:"ApiResponse"})]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động phân tích dữ liệu"})," — tự động chuyển đổi định dạng body thành JSON/FormData và trích xuất dữ liệu từ các phản hồi JSON"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Định vị khu vực (Geolocation)"})," — tự động thay thế các tham số ",n.jsx(c.code,{children:"{locale}"}),", ",n.jsx(c.code,{children:"{country}"}),", ",n.jsx(c.code,{children:"{language}"})," trong đường dẫn yêu cầu"]}),`
`]}),`
`,n.jsx(c.h2,{id:"phương-thức-gọi-tín-hiệu-api-calling-methods",children:"Phương thức Gọi Tín Hiệu (API Calling Methods)"}),`
`,n.jsx(c.h3,{id:"request",children:n.jsx(c.code,{children:"request"})}),`
`,n.jsxs(c.p,{children:["Thuật toán kích hoạt thực hiện tác vụ chính trên fetch thuần mạng vật lý. Nếu cung cấp trong ngữ cảnh string cô đơn mà không phải Object, nó kích hoạt hệ phân tán luồng định sẵn cài cắm theo kiểu ",n.jsx(c.code,{children:"GET"}),`.
Khi hệ thống bối rối hoặc gọi trượt giao thức mạng (như lỗi nội bộ 500 status), chương trình chủ lực sẽ trực xuất luôn mã lỗi (`,n.jsx(c.code,{children:"throw e"}),"), qua đó giúp lập trình viên dùng ",n.jsx(c.code,{children:"try/catch"})," thu hồi lệnh dễ dàng. Khi máy chủ trả lại tệp Object thuộc chuẩn JSON, gói nhận dạng trạng thái lệnh (",n.jsx(c.code,{children:"statusObject"}),") sẽ đắp kèm thành khối liền mạch trước khi đẩy về UI."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"pathRequest: string | ApiFetch"})," — định dạng kết xuất dữ liệu hay đường dẫn kết cấu hệ thống."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<ApiData<T>>"})," — giao diện format hoàn thiện của phản hồi mã hóa (decoded). Bao gồm các thông số biến (",n.jsx(c.code,{children:"data"}),", ",n.jsx(c.code,{children:"statusObject"}),"...) đi kèm nếu server nhả form dữ liệu có bọc."]}),`
`,n.jsx(c.h3,{id:"get",children:n.jsx(c.code,{children:"get"})}),`
`,n.jsxs(c.p,{children:["Bật một khối yêu cầu API bằng giao thức ",n.jsx(c.code,{children:"GET"})," theo cơ chế gỡ rối và ép đầu cung dữ liệu thông số search URL lên cấu trúc HTTP tự động."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request: ApiFetch"})," — Các thông số truy xuất của lệnh."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<T>"})]}),`
`,n.jsx(c.h3,{id:"post",children:n.jsx(c.code,{children:"post"})}),`
`,n.jsxs(c.p,{children:["Giao chuyển chùm truy vấn truyền động REST/GraphQL bằng luồng định tuyến tuân thủ HTTP ",n.jsx(c.code,{children:"POST"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request: ApiFetch"})," — Cơ sở cấu hình bao bọc giao diện, kèm tham số URL hiện chỉ định."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<T>"})]}),`
`,n.jsx(c.h3,{id:"put",children:n.jsx(c.code,{children:"put"})}),`
`,n.jsxs(c.p,{children:["Trình bày khả năng hiệu chỉnh một khối dữ liệu thông qua cấu hình thao tác tiêu chuẩn ở hệ phương án ",n.jsx(c.code,{children:"PUT"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request: ApiFetch"})," — Các lựa chọn query dẫn đường backend map."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<T>"})]}),`
`,n.jsx(c.h3,{id:"delete",children:n.jsx(c.code,{children:"delete"})}),`
`,n.jsxs(c.p,{children:["Phát tín hiệu dọn dẹp theo phân hóa truyền thống ở nhát kích HTTP ",n.jsx(c.code,{children:"DELETE"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request: ApiFetch"})," — Bọc thông số liên kết arguments format."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<T>"})]}),`
`,n.jsx(c.h2,{id:"các-phương-thức-khởi-tạo-interface",children:"Các phương thức khởi tạo Interface"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isLocalhost(): boolean"})," — Kiểm tra xem mã có đang thực thi trên một máy chủ phát triển localhost không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getStatus(): ApiStatus"})," — Trả về trình quản lý trạng thái ",n.jsx(c.code,{children:"ApiStatus"})," để theo dõi mã trạng thái HTTP."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getResponse(): ApiResponse"})," — Trả về trình quản lý bộ giả lập và phản hồi ",n.jsx(c.code,{children:"ApiResponse"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cấu-hình-hệ-thống-configuration",children:"Cấu hình hệ thống (Configuration)"}),`
`,n.jsxs(c.p,{children:["Hỗ trợ phương pháp nối chuỗi (chaining methods) trả về lớp ",n.jsx(c.code,{children:"Api"})," gốc:"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setHeaders(headers: Record<string, string>): Api"})," — Áp dụng một thư mục Header chuẩn cho toàn hệ thống."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setRequestDefault(request: Record<string, any>): Api"})," — Đưa toàn bộ thông số tham số mặc định chuẩn vào mạng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setUrl(url: string): Api"})," — Ghi đè định danh URL mặc định nhánh server API."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setPreparation(callback: (apiFetch: ApiFetch) => Promise<void>): Api"})," — Thiết lập vòng lặp hook ",n.jsx(c.em,{children:"ngay trước"})," thời khắc thao tác diễn ra."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): Api"})," — Thiết lập vòng lặp hook ",n.jsx(c.em,{children:"sau"})," khi tín hiệu mạng phản hồi trả về."]}),`
`]}),`
`,n.jsx(c.h2,{id:"chuẩn-bị-gửi-thông-tin-request-preparation",children:"Chuẩn bị gửi thông tin (Request Preparation)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getUrl(path: string, api?: boolean): string"})," — Tạo ra đường dẫn API đầy đủ, tự thay thế thẻ định danh quốc gia ",n.jsx(c.code,{children:"{locale}"}),", ",n.jsx(c.code,{children:"{country}"})," v.v..."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getBody(request?: ApiFetch['request'], method?: string): string | FormData | undefined"})," — Hoán đổi tài liệu để form nạp JSON hoặc ",n.jsx(c.code,{children:"FormData"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getBodyForGet(request: ApiFetch['request'], path?: string, method?: string): string"})," — Hoàn trả dữ liệu params cấu hình chuẩn cho thanh Search URL ",n.jsx(c.code,{children:"GET"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"đối-tượng-apifetch",children:"Đối tượng ApiFetch"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"ApiFetch"})," là đối tượng cấu hình chính được truyền vào các phương thức ",n.jsx(c.code,{children:"request"}),", ",n.jsx(c.code,{children:"get"}),", ",n.jsx(c.code,{children:"post"}),", ",n.jsx(c.code,{children:"put"}),", ",n.jsx(c.code,{children:"delete"}),". Tất cả các trường đều là tùy chọn:"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path?: string"})," — đường dẫn đến endpoint tương đối với URL cơ sở (ví dụ: ",n.jsx(c.code,{children:"'users/list'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"pathFull?: string"})," — URL đầy đủ của yêu cầu. Nếu có, sẽ bỏ qua ",n.jsx(c.code,{children:"api"})," và ",n.jsx(c.code,{children:"path"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"api?: boolean"})," — có thêm URL cơ sở vào trước ",n.jsx(c.code,{children:"path"})," không. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"method?: ApiMethod"})," — phương thức HTTP (",n.jsx(c.code,{children:"'GET'"}),", ",n.jsx(c.code,{children:"'POST'"}),", ",n.jsx(c.code,{children:"'PUT'"}),", ",n.jsx(c.code,{children:"'DELETE'"}),"). Mặc định: ",n.jsx(c.code,{children:"'GET'"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request?: FormData | Record<string, any> | string"})," — nội dung yêu cầu (POST/PUT) hoặc tham số query (GET). Được gửi dưới dạng JSON hoặc ",n.jsx(c.code,{children:"FormData"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"headers?: Record<string, string> | null"})," — tiêu đề bổ sung. ",n.jsx(c.code,{children:"null"})," — tắt tất cả tiêu đề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type?: string"})," — giá trị ",n.jsx(c.code,{children:"Content-Type"}),". Mặc định: ",n.jsx(c.code,{children:"'application/json;charset=UTF-8'"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"auth?: boolean"})," — thêm tiêu đề xác thực."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"toData?: boolean"})," — nếu ",n.jsx(c.code,{children:"true"}),", tự động giải gói ",n.jsx(c.code,{children:"data"})," từ cấu trúc ",n.jsx(c.code,{children:"{ data: ... }"}),". Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"global?: boolean"})," — sử dụng bộ nhớ đệm phản hồi toàn cục."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"devMode?: boolean"})," — bật nhật ký phát triển."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"hideError?: boolean"})," — ẩn thông báo lỗi trong ",n.jsx(c.code,{children:"console.error"})," khi có sự cố. Mặc định: ",n.jsx(c.code,{children:"false"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"globalPreparation?: boolean"})," — có chạy hook ",n.jsx(c.code,{children:"setPreparation"})," toàn cục trước yêu cầu này không. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"globalEnd?: boolean"})," — có chạy hook ",n.jsx(c.code,{children:"setEnd"})," toàn cục sau khi nhận phản hồi không. Mặc định: ",n.jsx(c.code,{children:"true"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"queryReturn?: (query: Response) => Promise<any>"})," — bộ xử lý phản hồi tùy chỉnh thay cho việc đọc JSON mặc định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"init?: RequestInit"})," — các tùy chọn bổ sung truyền thẳng vào ",n.jsx(c.code,{children:"fetch()"})," nội tại (CORS, chế độ cache, v.v.)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"controller?: AbortController"})," — bộ điều khiển để hủy yêu cầu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cấu-trúc-dữ-liệu-phản-hồi",children:"Cấu trúc dữ liệu phản hồi"}),`
`,n.jsxs(c.p,{children:["Các yêu cầu trả về một ",n.jsx(c.code,{children:"Promise<ApiData<T>>"}),"."]}),`
`,n.jsx(c.h3,{id:"apidatat",children:n.jsx(c.code,{children:"ApiData<T>"})}),`
`,n.jsx(c.p,{children:"Cấu trúc của dữ liệu trả về phụ thuộc vào loại phản hồi:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Mảng (Array)"}),": Nếu phản hồi là một mảng, ",n.jsx(c.code,{children:"ApiData<T>"})," đóng vai trò như ",n.jsx(c.code,{children:"T[]"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Đối tượng (Object)"}),": Nếu phản hồi là một đối tượng, ",n.jsx(c.code,{children:"ApiData<T>"})," bao gồm các trường từ ",n.jsx(c.code,{children:"T"})," và lớp bọc tiêu chuẩn ",n.jsx(c.code,{children:"ApiDataItem<T>"}),"."]}),`
`]}),`
`,n.jsx(c.h3,{id:"apidataitemt",children:n.jsx(c.code,{children:"ApiDataItem<T>"})}),`
`,n.jsx(c.p,{children:"Phản hồi đối tượng bao gồm các trường sau:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"data?: T"})," — tải trọng chính nếu phản hồi đã được bọc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"success?: boolean"})," — cờ thành công."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"status?: ApiStatusType"})," — loại trạng thái (",n.jsx(c.code,{children:"'success'"}),", ",n.jsx(c.code,{children:"'error'"}),", ",n.jsx(c.code,{children:"'warning'"}),", ",n.jsx(c.code,{children:"'info'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"message?: string"})," — thông báo phản hồi hoặc mô tả lỗi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"statusObject?: ApiStatusItem"})," — thông tin kỹ thuật về yêu cầu:",`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"status?: number"})," — mã trạng thái HTTP (ví dụ: 200, 404)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"statusText?: string"})," — văn bản trạng thái HTTP."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"error?: string"})," — thông báo lỗi nội bộ nếu yêu cầu thất bại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"lastResponse?: any"})," — dữ liệu từ phản hồi cuối cùng trước khi phân tích."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"lastStatus?: ApiStatusType"})," — trạng thái của yêu cầu cuối cùng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"lastMessage?: string"})," — thông báo từ yêu cầu cuối cùng."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(c.h2,{id:"hủy-yêu-cầu-gọi-dữ-liệu-trực-tiếp-abortcontroller",children:"Hủy yêu cầu gọi dữ liệu trực tiếp (AbortController)"}),`
`,n.jsxs(c.p,{children:["API này hỗ trợ nền tảng chặn luồng gọi API tức thì. Bạn chỉ cần áp dụng thẻ phiên mã ",n.jsx(c.code,{children:"AbortController"})," vào dữ liệu trường ",n.jsx(c.code,{children:"controller"})," trong chuỗi khai báo thuộc ",n.jsx(c.code,{children:"ApiFetch"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const controller = new AbortController()

// Tung khối lệnh phân luồng đi
Api.get({ path: 'users', controller }).catch(e => {
  if (e.name === 'AbortError') {
    console.log('Yêu cầu bị chặn đứng bởi người dùng')
  }
})

// Thao tác ngừng (như khi unmount file chẳng hạn)
controller.abort()
`})}),`
`,n.jsx(c.h2,{id:"giả-lập-phản-hồi-apiresponse",children:"Giả lập phản hồi (ApiResponse)"}),`
`,n.jsxs(c.p,{children:["Trình quản lý giả lập ",n.jsx(c.code,{children:"ApiResponse"})," (có thể truy cập thông qua ",n.jsx(c.code,{children:"Api.getResponse()"}),") cho phép cấu hình các phản hồi mẫu (mock) cho những đường dẫn cụ thể. Hệ thống này vô cùng hữu ích khi phát triển giao diện (UI frontend) trước khi có API backend hoàn chỉnh hoặc khi cần viết test."]}),`
`,n.jsx(c.h3,{id:"đăng-ký-các-phản-hồi-giả-lập-mocking",children:"Đăng ký các phản hồi giả lập (Mocking)"}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"add"})," nhận một đối tượng dạng ",n.jsx(c.code,{children:"ApiResponseItem"})," hoặc một mảng các đối tượng đó."]}),`
`,n.jsx(c.p,{children:n.jsxs(c.strong,{children:["Các trường quan trọng trong ",n.jsx(c.code,{children:"ApiResponseItem"}),":"]})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path"})," — Dạng chuỗi (String - khớp chính xác) hoặc Biểu thức chính quy (",n.jsx(c.code,{children:"RegExp"}),") dùng để chặn đường dẫn (URL) cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"method"})," — Phương thức HTTP (",n.jsx(c.code,{children:"ApiMethodItem.get"}),", ",n.jsx(c.code,{children:"post"}),", v.v...)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"request"})," — (Tùy chọn) Bộ lọc theo tải trọng body. Bạn có thể dùng chuỗi đánh dấu đặc biệt ",n.jsx(c.code,{children:"'*any'"})," để vô hiệu hoá bộ kiểm tra nội dung và bắt mọi yêu cầu gửi đến đường dẫn này."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"response"})," — Một đối tượng dữ liệu tĩnh ",n.jsx(c.em,{children:"hoặc"})," một hàm khởi tạo (factory function) ",n.jsx(c.code,{children:"(request) => any"})," dùng để tạo câu trả lời tự động dựa trên tải trọng yêu cầu gửi đến."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"disable"})," — (Tùy chọn) Vô hiệu hóa mock này (boolean hoặc callback)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isForGlobal"})," — (Tùy chọn) Đánh dấu là mock toàn cục."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"lag"})," — (Tùy chọn) Giả lập độ trễ mạng (",n.jsx(c.code,{children:"boolean"}),"), tự tạo một ngẫu nhiên Timeout từ 0 tới 2000ms."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const responseManager = Api.getResponse()

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
const profile = await Api.get({ path: 'users/profile' })
`})}),`
`,n.jsx(c.h3,{id:"ưu-tiên-và-chuyển-đổi-mock",children:"Ưu tiên và chuyển đổi Mock"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Trình chặn giả lập sẽ xử lý yêu cầu ",n.jsx(c.strong,{children:"trước lúc"})," lệnh ",n.jsx(c.code,{children:"fetch"})," diễn ra thực sự."]}),`
`,n.jsxs(c.li,{children:["Nếu bộ giả lập không tìm được mock tương ứng nào khớp (bởi vì khác ",n.jsx(c.code,{children:"path"}),", ",n.jsx(c.code,{children:"method"}),", hoặc ",n.jsx(c.code,{children:"request"}),"), Lớp ",n.jsx(c.code,{children:"Api"})," sẽ tự động chuyển hướng gọi thẳng yêu cầu tới máy chủ vật lý ở điểm xa."]}),`
`,n.jsxs(c.li,{children:["Bạn hoàn toàn có thể vô hiệu hóa mock tạm thời nào đó bằng cách gọi lệnh ",n.jsx(c.code,{children:"disable: () => true"})," bên trong object. Hàm hệ thống ",n.jsx(c.code,{children:"add"})," sẽ thẳng thừng phủ quyết lệnh này."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-sử-dụng-cơ-bản",children:"Ví dụ sử dụng cơ bản"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { Api } from '@dxtmisha/functional'

// Cấu hình API toàn cục
Api.setUrl('https://api.example.com/v1/')
   .setHeaders({ 'Authorization': 'Bearer token123' })
   .setRequestDefault({ source: 'webapp' })

// Móc chằng interceptor giám thị thông luồng
Api.setPreparation(async (apiFetch) => {
    console.log('Sửa soạn chạy phiên fetch đến nhánh:', apiFetch.path)
})

// Chạy GET truyền thông bọc bằng chuẩn cản rào
try {
  const data = await Api.get({ path: 'users' })
  // Rút chuỗi tín hiệu an toàn từ khối object:
  // console.log(data.statusObject.getStatus())
} catch (e) {
  console.error('Máy lỏng chân tín hiệu trong lúc lôi users về quy mô:', e)
}

// Bơm POST trang bị kíp nổ chặn luồng (Abort Feature)
const abortCtrl = new AbortController()
try {
  const newUser = await Api.post({
    path: 'users/create',
    request: { name: 'John Doe', age: 30 },
    controller: abortCtrl
  })
} catch (e) {
  if (e.name === 'AbortError') console.log('Cuộc tiến quân rút lại an toàn!')
}

// Hủy bất kỳ khi nào cần nhổ neo
// abortCtrl.abort()
`})})]})}function u(e={}){const{wrapper:c}={...i(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(h,{...e})}):h(e)}export{u as default};
