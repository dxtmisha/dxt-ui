import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# Api`}),`
`,(0,c.jsx)(n.h1,{id:`api`,children:`Api`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Api`}),` là công cụ trung tâm để thực hiện các yêu cầu HTTP. Nó cung cấp một giao diện đơn giản cho các phương thức phổ biến và quản lý các cài đặt toàn cục như URL cơ sở, tiêu đề mặc định và các hook vòng đời.`]}),`
`,(0,c.jsx)(n.h3,{id:`các-khả-năng-chính`,children:`Các khả năng chính`}),`
`,(0,c.jsx)(n.p,{children:`Lớp cung cấp một bộ công cụ toàn diện để quản lý tương tác mạng:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Các phương thức CRUD`}),` — thực hiện các yêu cầu `,(0,c.jsx)(n.code,{children:`GET`}),`, `,(0,c.jsx)(n.code,{children:`POST`}),`, `,(0,c.jsx)(n.code,{children:`PUT`}),`, `,(0,c.jsx)(n.code,{children:`PATCH`}),`, `,(0,c.jsx)(n.code,{children:`DELETE`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình toàn cục`}),` — thiết lập URL cơ sở, tiêu đề và tham số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hook vòng đời`}),` — xử lý các sự kiện trước và sau yêu cầu (ví dụ: cho Refresh Token).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration (SSR)`}),` — chuyển dữ liệu từ máy chủ sang máy khách để ngăn chặn các yêu cầu trùng lặp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm (Caching)`}),` — lưu các phản hồi trong bộ nhớ hoặc bộ nhớ ngoài (LocalStorage).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giả lập phản hồi`}),` — tạo dữ liệu giả để phát triển và kiểm thử.`]}),`
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
Api.setUrl('https://api.example.com/v1/')

// Thêm các tiêu đề chung (ví dụ: token xác thực)
Api.setHeaders({
  'Authorization': 'Bearer YOUR_TOKEN'
})

// Đặt các tham số chung sẽ được thêm vào mọi yêu cầu
Api.setRequestDefault({
  app_version: '1.0.0'
})
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
`,(0,c.jsxs)(n.p,{children:[`Trình giả lập sẽ kích hoạt `,(0,c.jsx)(n.strong,{children:`trước khi`}),` lệnh `,(0,c.jsx)(n.code,{children:`fetch`}),` thực sự được thực hiện. Nếu không tìm thấy mock phù hợp, `,(0,c.jsx)(n.code,{children:`Api`}),` sẽ thực hiện một yêu cầu mạng thông thường.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};