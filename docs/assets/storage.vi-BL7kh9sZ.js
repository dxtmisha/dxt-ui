import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# Lưu trữ dữ liệu`}),`
`,(0,c.jsx)(n.h1,{id:`lưu-trữ-dữ-liệu`,children:`Lưu trữ dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Thư viện cung cấp bộ công cụ để lưu trữ dữ liệu bền vững, bao gồm quản lý LocalStorage, SessionStorage, Cookie và URL Hash.`}),`
`,(0,c.jsx)(n.h2,{id:`bộ-nhớ-cục-bộ--phiên-datastorage`,children:`Bộ nhớ cục bộ & phiên (DataStorage)`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DataStorage`}),` giúp đơn giản hóa việc làm việc với bộ nhớ trình duyệt bằng cách tự động hóa tuần tự hóa JSON, quản lý tiền tố key toàn cục thông qua `,(0,c.jsx)(n.code,{children:`setPrefix`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`ui-storage`}),`) và cơ chế TTL cache. Nó đảm bảo tính nhất quán của dữ liệu trên toàn hệ thống bằng cách trả về cùng một instance cho mỗi key và xử lý mượt mà trong môi trường SSR nơi không có sẵn DOM.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// Thiết lập tiền tố toàn cục (tùy chọn)
DataStorage.setPrefix('my-app')

// 1. Khởi tạo (mặc định là localStorage)
const storage = new DataStorage('user_settings')

// 2. Lưu dữ liệu (tự động chuyển sang JSON)
storage.set({ theme: 'dark', language: 'vi' })

// 3. Lấy dữ liệu với giá trị mặc định
const settings = storage.get({ theme: 'light' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`bộ-nhớ-phiên-session-storage`,children:`Bộ nhớ phiên (Session Storage)`}),`
`,(0,c.jsxs)(n.p,{children:[`Để sử dụng `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` (dữ liệu bị xóa khi đóng tab), hãy truyền `,(0,c.jsx)(n.code,{children:`true`}),` làm đối số thứ hai:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const session = new DataStorage('temp_data', true)
`})}),`
`,(0,c.jsx)(n.h3,{id:`lưu-trữ-tạm-thời-ttl`,children:`Lưu trữ tạm thời (TTL)`}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn có thể giới hạn tính hợp lệ của dữ liệu bằng cơ chế kiểm tra TTL liên tục trong lệnh gọi `,(0,c.jsx)(n.code,{children:`get`}),`. Việc chỉ định thời gian tồn tại (tính bằng giây) cho phép thư viện coi dữ liệu cũ là hết hạn mà không cần dọn dẹp thủ công.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Chỉ lấy dữ liệu nếu nó được lưu trong vòng 1 giờ qua (3600 giây)
const recentData = storage.get(undefined, 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`cookie-cookie`,children:`Cookie (Cookie)`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Cookie`}),` cung cấp một giao diện sạch sẽ để quản lý cookie trình duyệt, loại bỏ sự phức tạp của `,(0,c.jsx)(n.code,{children:`document.cookie`}),`. Nó tự động đồng bộ hóa dữ liệu trình duyệt hiện có khi khởi tạo, hỗ trợ các cài đặt bảo mật như `,(0,c.jsx)(n.code,{children:`SameSite`}),` và đảm bảo việc xóa cookie tin cậy thông qua phương thức `,(0,c.jsx)(n.code,{children:`remove()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Cookie } from '@dxtmisha/functional-basic'

const myCookie = new Cookie('auth_token')

// Thiết lập cookie với các tùy chọn tùy chỉnh
myCookie.set('secure_value', { 
  age: 3600 * 24, // 1 ngày
  sameSite: 'lax'
})

// Lấy giá trị
const token = myCookie.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`url-hash-hash`,children:`URL Hash (Hash)`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Hash`}),` biến URL hash thành một kho lưu trữ trạng thái có tính phản hồi (`,(0,c.jsx)(n.code,{children:`#key:value;`}),`), lý tưởng cho các trạng thái giao diện có thể chia sẻ như tab đang hoạt động hoặc bộ lọc. Dữ liệu được tự động đồng bộ hóa với đối tượng `,(0,c.jsx)(n.code,{children:`Hash`}),` nội bộ, cho phép cập nhật giao diện ngay lập tức khi thanh địa chỉ thay đổi mà không cần tải lại trang.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Hash } from '@dxtmisha/functional-basic'

// 1. Thiết lập giá trị: URL thay đổi thành ...#tab:profile;filter:active
Hash.set('tab', 'profile')
Hash.set('filter', 'active')

// 2. Lấy giá trị (với giá trị mặc định tùy chọn)
const currentTab = Hash.get('tab', 'home')
`})}),`
`,(0,c.jsx)(n.h3,{id:`theo-dõi-thay-đổi`,children:`Theo dõi thay đổi`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`addWatch`}),` cho phép bạn đăng ký theo dõi các thay đổi của các tham số URL cụ thể. Điều này rất hữu ích để thực hiện các hành động khi tab được chuyển đổi hoặc bộ lọc được áp dụng bởi người dùng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// 1. Theo dõi phản hồi
const onTabChange = (newTab) => {
  console.log('Người dùng đã chuyển sang:', newTab)
}

Hash.addWatch('tab', onTabChange)

// 2. Xóa theo dõi nếu cần
// Hash.removeWatch('tab', onTabChange)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};