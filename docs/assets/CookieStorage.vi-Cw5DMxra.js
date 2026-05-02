import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/CookieStorage - Lưu trữ Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cookiestorage`,children:`Lớp CookieStorage`}),`
`,(0,c.jsx)(n.p,{children:`Lớp quản lý lưu trữ cookie với hỗ trợ người nghe tùy chỉnh. Cung cấp giao diện cấp thấp để làm việc với cookie trong các môi trường khác nhau (DOM, SSR) với phân tích tự động kiểu và xử lý dữ liệu an toàn.`}),`
`,(0,c.jsxs)(n.p,{children:[`Bao gồm tích hợp chặt chẽ với `,(0,c.jsx)(n.code,{children:`CookieBlock`}),` để kiểm soát truy cập và hỗ trợ giải mã các giá trị đã được mã hóa URL.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ linh hoạt`}),` — hỗ trợ bộ nhớ quy trình và cơ chế lưu trữ bên ngoài thông qua người nghe`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích tự động`}),` — chuyển đổi thông minh các giá trị chuỗi thành các loại dữ liệu tương ứng`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp chặn`}),` — tôn trọng chặn ghi toàn cầu qua `,(0,c.jsx)(n.code,{children:`CookieBlock`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận thức môi trường`}),` — tự động phát hiện môi trường DOM và thích ứng hành vi`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải mã URL`}),` — tự động giải mã tên và giá trị khi đọc từ DOM`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức-tĩnh`,children:`Phương thức tĩnh`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy giá trị cookie theo tên với chuyển đổi kiểu tự động. Nếu giá trị không tồn tại và có chỉ định giá trị mặc định, nó sẽ được thiết lập và lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên cookie`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — giá trị mặc định hoặc hàm trả về giá trị`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — giá trị cookie đã chuyển đổi hoặc giá trị mặc định`]}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Lưu giá trị cookie với các tham số được chỉ định và cập nhật tự động trong bộ nhớ và DOM. Nếu chặn đang hoạt động qua `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`, giá trị chỉ được lưu trong bộ nhớ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên cookie`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | (() => T)`}),` — giá trị hoặc hàm trả về giá trị`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — tham số cookie bổ sung`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — giá trị đã lưu`]}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Xóa cookie bằng cách đặt giá trị rỗng và thời hạn hết hạn âm. Tương đương với việc gọi `,(0,c.jsx)(n.code,{children:`set(name, '', { age: -1 })`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên cookie`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(getListener?, getListenerRaw?, setListener?)`}),` — Khởi tạo bộ nhớ với các trình lắng nghe tùy chỉnh để đọc và ghi dữ liệu. Trình lắng nghe ghi `,(0,c.jsx)(n.code,{children:`setListener`}),` chấp nhận 4 đối số: `,(0,c.jsx)(n.code,{children:`(key, value, cookie, options)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset()`}),` — Đặt lại lưu trữ bằng cách xóa tất cả phần tử trong bộ nhớ và xóa người nghe`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`hỗ-trợ`,children:`Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update()`}),` — Cập nhật dữ liệu trong bộ nhớ bằng cách phân tích giá trị từ `,(0,c.jsx)(n.code,{children:`document.cookie`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-loại`,children:`Các loại`}),`
`,(0,c.jsx)(n.h3,{id:`cookieoptions`,children:(0,c.jsx)(n.code,{children:`CookieOptions`})}),`
`,(0,c.jsx)(n.p,{children:`Đối tượng cấu hình cho tham số cookie:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age?: number`}),` — thời gian tồn tại tính bằng giây (thuộc tính max-age)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sameSite?: 'strict' | 'lax'`}),` — chính sách SameSite`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — đường dẫn cho cookie (mặc định là `,(0,c.jsx)(n.code,{children:`/`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`domain?: string`}),` — tên miền cho cookie`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`secure?: boolean`}),` — nếu đúng, thêm thuộc tính Secure`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`httpOnly?: boolean`}),` — nếu đúng, thêm thuộc tính HttpOnly (chỉ dành cho trình lắng nghe phía máy chủ)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`partitioned?: boolean`}),` — nếu đúng, thêm thuộc tính Partitioned (CHIPS)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`arguments?: string[] | Record<string, any>`}),` — các chỉ thị bổ sung cho chuỗi cookie`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`chuyển-đổi-loại-tích-hợp`,children:`Chuyển đổi loại tích hợp`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CookieStorage`}),` tự động chuyển đổi các giá trị chuỗi khi đọc:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'undefined'`}),` → `,(0,c.jsx)(n.code,{children:`undefined`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'null'`}),` → `,(0,c.jsx)(n.code,{children:`null`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'true'`}),` → `,(0,c.jsx)(n.code,{children:`true`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'false'`}),` → `,(0,c.jsx)(n.code,{children:`false`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'123'`}),` → `,(0,c.jsx)(n.code,{children:`123`}),` (số)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'{"key":"value"}'`}),` → `,(0,c.jsx)(n.code,{children:`{key: 'value'}`}),` (đối tượng JSON)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-cơ-bản`,children:`Sử dụng cơ bản`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Lấy với giá trị mặc định
const theme = CookieStorage.get<string>('theme', 'dark')

// Lưu giá trị
CookieStorage.set('user', 'john', {
  age: 3600,
  sameSite: 'lax'
})

// Xóa
CookieStorage.remove('user')
`})}),`
`,(0,c.jsx)(n.h3,{id:`khởi-tạo-với-lưu-trữ-bên-ngoài`,children:`Khởi tạo với lưu trữ bên ngoài`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

CookieStorage.init(
  (key) => myStorage.get(key),
  undefined,
  (key, value, cookie, options) => {
    // cookie là chuỗi đã được định dạng như "key=value; max-age=..."
    myStorage.set(key, value, cookie, options)
  }
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`khởi-tạo-cho-ssr-raw`,children:`Khởi tạo cho SSR (Raw)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Đối với SSR, lấy tất cả cookie dưới dạng chuỗi thô
CookieStorage.init(
  undefined,
  () => request.headers.cookie
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`cập-nhật-và-đặt-lại`,children:`Cập nhật và đặt lại`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Cập nhật dữ liệu trong bộ nhớ từ document.cookie
// Hữu ích khi cookie được đặt từ bên ngoài
CookieStorage.update()

// Đặt lại lưu trữ (xóa người nghe và dữ liệu trong bộ nhớ)
// Hữu ích cho kiểm thử hoặc dọn dẹp
CookieStorage.reset()
`})}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-làm-việc-hoàn-chỉnh`,children:`Quy trình làm việc hoàn chỉnh`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Khởi tạo với lưu trữ tùy chỉnh
CookieStorage.init(
  (key) => redis.get(key),
  undefined,
  (key, value, cookie, options) => redis.set(key, value, cookie, options)
)

// Đặt giá trị với các tùy chọn
CookieStorage.set('user', 'john', {
  age: 3600,           // 1 giờ
  sameSite: 'lax',     // Chính sách SameSite
  path: '/',           // Đường dẫn
  secure: true,        // Chỉ HTTPS
  httpOnly: true,      // Bảo vệ XSS (cho SSR)
  arguments: ['Priority=High'] // Các chỉ thị bổ sung
})

// Nhận giá trị với chuyển đổi loại
const user = CookieStorage.get<string>('user')

// Cập nhật từ nguồn bên ngoài
CookieStorage.update()

// Dọn dẹp
CookieStorage.remove('user')
CookieStorage.reset()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};