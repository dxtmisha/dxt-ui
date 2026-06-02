import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# Api`}),`
`,(0,c.jsx)(n.h1,{id:`api`,children:`Api`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Api`}),` là công cụ trung tâm để thực hiện các yêu cầu HTTP. Nó cung cấp một giao diện đơn giản cho các phương thức phổ biến và quản lý các cài đặt toàn cục như URL cơ sở, tiêu đề mặc định và các hook vòng đời.`]}),`
`,(0,c.jsx)(n.h3,{id:`các-khả-năng-chính`,children:`Các khả năng chính`}),`
`,(0,c.jsx)(n.p,{children:`Lớp cung cấp một bộ công cụ toàn diện để quản lý tương tác mạng:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Các phương thức CRUD`}),` — thực hiện các yêu cầu `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, `,(0,c.jsx)(n.code,{children:`PATCH`}),`, `,(0,c.jsx)(n.code,{children:`DELETE`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình toàn cục`}),` — thiết lập URL cơ sở, nguồn (origin), tiêu đề và tham số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hook vòng đời`}),` — xử lý các sự kiện trước và sau yêu cầu (ví dụ: cho Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration (SSR)`}),` — chuyển dữ liệu từ máy chủ sang máy khách để ngăn chặn các yêu cầu trùng lặp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm (Caching)`}),` — lưu các phản hồi trong bộ nhớ hoặc bộ nhớ ngoài (LocalStorage).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giả lập phản hồi`}),` — tạo dữ liệu giả để phát triển và kiểm thử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động bản địa hóa`}),` — thay thế các nhãn `,(0,c.jsx)(n.code,{children:`{locale}`}),`, `,(0,c.jsx)(n.code,{children:`{country}`}),` và `,(0,c.jsx)(n.code,{children:`{language}`}),` trong đường dẫn yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý tải và lỗi`}),` — tích hợp với các thành phần chỉ báo toàn cục và trung tâm lỗi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-dùng-cơ-bản`,children:`Cách dùng cơ bản`}),`
`,(0,c.jsxs)(n.p,{children:[`Cách đơn giản nhất để thực hiện yêu cầu là sử dụng các phương thức tĩnh `,(0,c.jsx)(n.code,{children:`get`}),`, `,(0,c.jsx)(n.code,{children:`post`}),`, `,(0,c.jsx)(n.code,{children:`put`}),`, hoặc `,(0,c.jsx)(n.code,{children:`delete`}),`. Tất cả các phương thức đều hỗ trợ định nghĩa kiểu dữ liệu (typing) thông qua Generic.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Api } from '@dxtmisha/functional-basic'

// Yêu cầu GET đơn giản với định nghĩa kiểu
const data = await Api.get<User[]>({ path: 'users' })

// Yêu cầu POST kèm dữ liệu trong body
const newUser = await Api.post<User>({
  path: 'users',
  request: { name: 'Nguyễn Văn A', job: 'Lập trình viên' }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-hình-toàn-cục`,children:`Cấu hình toàn cục`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể cấu hình hành vi của API trên toàn hệ thống, ví dụ như khi khởi tạo ứng dụng. Việc này giúp loại bỏ sự cần thiết phải chỉ định các đường dẫn đầy đủ và các tiêu đề chung trong mỗi lần gọi.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Đặt URL cơ sở cho tất cả các đường dẫn tương đối
Api.setUrl('/api/')

// Thiết lập nguồn (giao thức và tên miền) cho URL cơ sở
// Nếu urlRoot bắt đầu bằng '/', origin sẽ được thêm vào trước nó
Api.setOrigin('https://api.example.com')

// Thêm các tiêu đề chung (ví dụ: token xác thực)
Api.setHeaders({
  'Authorization': 'Bearer YOUR_TOKEN'
})

// Đặt các tham số chung sẽ được thêm vào mọi yêu cầu
Api.setRequestDefault({
  app_version: '1.0.0'
})

// Kiểm tra xem máy chủ có đang chạy trên localhost không
if (Api.isLocalhost()) {
  console.log('Đang chạy trên máy cục bộ')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-setconfig`,children:`Phương thức setConfig`}),`
`,(0,c.jsx)(n.p,{children:`Cho phép thiết lập tất cả các cài đặt chính bằng một đối tượng duy nhất.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setConfig({
  urlRoot: '/api/',
  origin: 'https://api.example.com',
  headers: { 'Authorization': 'Bearer ...' },
  timeout: 5000,
  devMode: true
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`xử-lý-url`,children:`Xử lý URL`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi tạo URL cuối cùng, lớp sẽ tự động thay thế các nhãn đặc biệt bằng các giá trị hiện tại từ cài đặt bản địa hóa (`,(0,c.jsx)(n.code,{children:`Geo`}),`):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{locale}`}),` — locale hiện tại (ví dụ: `,(0,c.jsx)(n.code,{children:`vi-VN`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{country}`}),` — quốc gia hiện tại (ví dụ: `,(0,c.jsx)(n.code,{children:`vn`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`{language}`}),` — ngôn ngữ hiện tại (ví dụ: `,(0,c.jsx)(n.code,{children:`vi`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Nếu locale hiện tại là 'vi-VN', đường dẫn cuối cùng sẽ là '/api/vi-VN/users'
const data = await Api.get({ path: '{locale}/users' })
`})}),`
`,(0,c.jsx)(n.h2,{id:`trạng-thái-và-thông-tin-meta`,children:`Trạng thái và Thông tin meta`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Api`}),` tự động trích xuất các siêu dữ liệu (metadata) từ phản hồi của máy chủ (ví dụ: `,(0,c.jsx)(n.code,{children:`success`}),`, `,(0,c.jsx)(n.code,{children:`status`}),`, `,(0,c.jsx)(n.code,{children:`message`}),`, `,(0,c.jsx)(n.code,{children:`code`}),`) và hợp nhất chúng với đối tượng dữ liệu của bạn. Điều này cho phép bạn nhận được cả nội dung dữ liệu và kết quả thực thi trong một đối tượng duy nhất.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn có thể truy cập trạng thái đầy đủ của yêu cầu cuối cùng thông qua phương thức `,(0,c.jsx)(n.code,{children:`getStatus()`}),`, phương thức này trả về một instance của `,(0,c.jsx)(n.code,{children:`ApiStatus`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const data = await Api.get({ path: 'users' })
const status = Api.getStatus()

console.log(status.getStatus())     // 200 (Trạng thái HTTP)
console.log(status.getStatusType()) // 'success' | 'error' | 'warning' | 'info'
console.log(status.getMessage())    // Thông báo từ máy chủ hoặc văn bản trạng thái
console.log(status.getResponse())   // Nội dung phản hồi thô đã được phân tích
`})}),`
`,(0,c.jsx)(n.h2,{id:`nhận-dạng-lỗi`,children:`Nhận dạng lỗi`}),`
`,(0,c.jsxs)(n.p,{children:[`Thư viện cung cấp một hệ thống quản lý lỗi tinh vi thông qua `,(0,c.jsx)(n.code,{children:`ApiError`}),`. Bạn có thể đăng ký trước các mẫu lỗi API đã biết, và hệ thống sẽ tự động xác định chúng dựa trên trạng thái, mã lỗi hoặc các hàm xác thực tùy chỉnh.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiError, ApiMethodItem } from '@dxtmisha/functional-basic'

// Đăng ký một mẫu lỗi cụ thể
ApiError.add({
  url: 'users/login',
  method: ApiMethodItem.post,
  code: 'INVALID_CREDENTIALS',
  message: 'Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.'
})

// Xử lý yêu cầu
const status = Api.getStatus()
const errorItem = status.get()?.errorObject // Instance ApiErrorItem

if (errorItem && errorItem.getCode() === 'INVALID_CREDENTIALS') {
  // Xử lý trường hợp lỗi cụ thể
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`hook-vòng-đời`,children:`Hook vòng đời`}),`
`,(0,c.jsx)(n.p,{children:`Thư viện cho phép bạn chèn logic toàn cục sẽ được kích hoạt cho mọi yêu cầu. Việc này rất hữu ích để thêm token động, ghi log hoặc xử lý tập trung các lỗi máy chủ.`}),`
`,(0,c.jsx)(n.h3,{id:`hook-chuẩn-bị-setpreparation`,children:`Hook chuẩn bị (setPreparation)`}),`
`,(0,c.jsx)(n.p,{children:`Được thực thi ngay trước khi yêu cầu được gửi đến máy chủ.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tham số`}),`: Nhận đối tượng `,(0,c.jsx)(n.code,{children:`apiFetch`}),`, chứa tất cả các tham số của yêu cầu hiện tại (đường dẫn, phương thức, dữ liệu, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sử dụng`}),`: Kiểm tra quyền truy cập, thêm các tham số động vào `,(0,c.jsx)(n.code,{children:`apiFetch.request`}),`, hoặc đơn giản là ghi log bắt đầu một hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setPreparation(async (apiFetch) => {
  // Bạn có thể sửa đổi apiFetch trước khi gửi
  console.log(\`Bắt đầu yêu cầu đến: \${apiFetch.path}\`)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`hook-kết-thúc-setend`,children:`Hook kết thúc (setEnd)`}),`
`,(0,c.jsx)(n.p,{children:`Được thực thi sau khi máy chủ trả về phản hồi, nhưng trước khi dữ liệu đến mã của bạn.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tham số`}),`: Nhận đối tượng `,(0,c.jsx)(n.code,{children:`Response`}),` gốc và đối tượng cài đặt `,(0,c.jsx)(n.code,{children:`apiFetch`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trả về`}),`: Một Promise với đối tượng `,(0,c.jsx)(n.code,{children:`{ reset?: boolean, data?: any }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cờ reset`}),`: Nếu trả về `,(0,c.jsx)(n.code,{children:`true`}),`, thư viện sẽ hủy chuỗi hiện tại và thực hiện lại yêu cầu. Việc này rất hữu ích để tự động xử lý token hết hạn (Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trường data`}),`: Cho phép bạn thay thế hoặc bổ sung dữ liệu được trả về bởi phương thức `,(0,c.jsx)(n.code,{children:`Api.request`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.setEnd(async (response, apiFetch) => {
  // Ví dụ: xử lý lỗi 401 Unauthorized
  if (response.status === 401) {
    const isRefreshed = await myAuthService.refreshToken()
    
    if (isRefreshed) {
      return { reset: true } // Thử lại yêu cầu với token mới
    }
  }
  
  return {} // Tiếp tục xử lý tiêu chuẩn
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`hydration`,children:`Hydration`}),`
`,(0,c.jsx)(n.p,{children:`Hydration cho phép chuyển dữ liệu thu được trong quá trình server-side rendering (SSR) sang phía máy khách. Điều này ngăn chặn việc thực hiện lại các yêu cầu tương tự ngay sau khi trang tải xong.`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trên máy chủ`}),`: Thực hiện các yêu cầu cần thiết và lấy script qua `,(0,c.jsx)(n.code,{children:`Api.getHydrationScript()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trong mẫu (Template)`}),`: Chèn chuỗi kết quả vào HTML.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trên máy khách`}),`: Khi khởi tạo `,(0,c.jsx)(n.code,{children:`Api`}),`, dữ liệu sẽ tự động được tải vào trình quản lý phản hồi.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Ví dụ SSR
await Api.get({ path: 'settings' });
const hydrationScript = Api.getHydrationScript(); // <script>...<\/script>
`})}),`
`,(0,c.jsx)(n.h2,{id:`bộ-nhớ-đệm-caching`,children:`Bộ nhớ đệm (Caching)`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Api`}),` hỗ trợ tự động lưu bộ nhớ đệm cho các phản hồi. Bạn có thể sử dụng bộ nhớ trong tích hợp hoặc kết nối bộ nhớ ngoài (ví dụ: `,(0,c.jsx)(n.code,{children:`LocalStorage`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiCache, DataStorage } from '@dxtmisha/functional-basic';

// Kết nối bộ nhớ ngoài (tùy chọn)
ApiCache.init(
  async (key) => DataStorage.get(key),
  async (key, value) => DataStorage.set(key, value)
);

// Sử dụng trong một yêu cầu
const data = await Api.get({
  path: 'catalog/list',
  cache: 3600 // Lưu bộ nhớ đệm trong 1 giờ (tính bằng giây)
});
`})}),`
`,(0,c.jsx)(n.h2,{id:`giả-lập-phản-hồi`,children:`Giả lập phản hồi`}),`
`,(0,c.jsxs)(n.p,{children:[`Trình quản lý `,(0,c.jsx)(n.code,{children:`ApiResponse`}),` tích hợp sẵn (có thể truy cập qua `,(0,c.jsx)(n.code,{children:`Api.getResponse()`}),`) cho phép bạn chặn các yêu cầu và trả về dữ liệu giả (mock). Điều này cực kỳ hữu ích cho việc phát triển giao diện khi backend chưa sẵn sàng hoặc để viết các bài kiểm thử.`]}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-mock`,children:`Đăng ký Mock`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể thêm cả phản hồi tĩnh và các hàm động.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const responseManager = Api.getResponse()

// 1. Phản hồi tĩnh cho yêu cầu GET
responseManager.add({
  path: 'profile',
  method: 'GET',
  response: { id: 1, name: 'Admin' },
  lag: true // Mô phỏng độ trễ mạng (0-2 giây)
})

// 2. Phản hồi động dựa trên các tham số yêu cầu
responseManager.add({
  path: 'users/search',
  method: 'GET',
  response: (request) => {
    return {
      results: [\`Kết quả cho: \${request.query}\`],
      count: 1
    }
  }
})

// 3. Chặn yêu cầu POST với bất kỳ body nào
responseManager.add({
  path: 'users/update',
  method: 'POST',
  request: '*any', // Bỏ qua việc kiểm tra body yêu cầu
  response: { success: true }
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`chế-độ-phát-triển`,children:`Chế độ phát triển`}),`
`,(0,c.jsx)(n.p,{children:`Để gỡ lỗi dễ dàng hơn, bạn có thể bật tính năng ghi nhận (logging) giả lập trong console. Trong chế độ này, trình quản lý sẽ cảnh báo trong console về mỗi yêu cầu bị chặn.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Api.getResponse().setDevMode(true)
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trình giả lập sẽ kích hoạt `,(0,c.jsx)(n.strong,{children:`trước khi`}),` lệnh `,(0,c.jsx)(n.code,{children:`fetch`}),` thực sự được thực hiện. Nếu không tìm thấy mock phù hợp, `,(0,c.jsx)(n.code,{children:`Api`}),` sẽ thực hiện một yêu cầu mạng thông thường.`]}),`
`,(0,c.jsx)(n.h2,{id:`nâng-cao-apiinstance`,children:`Nâng cao: ApiInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Api`}),` là một `,(0,c.jsx)(n.strong,{children:`static proxy`}),` cho một instance toàn cục của `,(0,c.jsx)(n.code,{children:`ApiInstance`}),`. Instance này được lưu trữ trong `,(0,c.jsx)(n.code,{children:`ServerStorage`}),`, đảm bảo sự cô lập giữa các yêu cầu trong quá trình SSR và hành vi singleton trên máy khách.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Đối với các kịch bản nâng cao—chẳng hạn như kết nối với nhiều API độc lập khác nhau cùng một lúc hoặc tạo các môi trường cô lập tạm thời—bạn có thể khởi tạo `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` trực tiếp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ApiInstance } from '@dxtmisha/functional-basic'

const secondaryApi = new ApiInstance()
secondaryApi.setUrl('https://another-api.com/')
secondaryApi.setHeaders({ 'X-Client-Id': '...' })

const data = await secondaryApi.get({ path: 'resource' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};