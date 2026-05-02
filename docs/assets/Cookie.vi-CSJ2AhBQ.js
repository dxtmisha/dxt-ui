import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/Cookie - Quản lý chuẩn Browser Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cookie`,children:`Lớp Cookie`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp bao đóng cho phép các developer quản trị trực tiếp vùng Browser Cookie. Hệ thống `,(0,c.jsx)(n.code,{children:`Cookie`}),` tự cấu hình tính đồng bộ xuyên suốt từ bộ đệm của website (memory record) sang môi trường DOM API `,(0,c.jsx)(n.code,{children:`document.cookie`}),`, giúp cho tiến trình thao tác và tạo lập biến theo chuẩn reactive được đáp ứng đầy đủ với các chức năng dự phòng linh hoạt.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bao gồm tích hợp chặt chẽ với `,(0,c.jsx)(n.code,{children:`CookieStorage`}),` để quản lý cấp thấp và tôn trọng chặn toàn cầu qua `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa Không Gian Bộ Nhớ (Memory Sync)`}),` — lưu giữ cấu trúc ảo cho trình quản lý trạng thái tại server cache, tránh tạo quá nhiều truy vấn lên cấu trúc DOM của cookie. Khi khởi tạo tiến trình nó lập tức bắt/nắm bắt vòng dữ liệu đầu tư của mã node `,(0,c.jsx)(n.code,{children:`document.cookie`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thiết Lập Theo Vùng Môi Trường (Environment Aware)`}),` — có khả năng định vị khu sinh thái DOM. Với vùng Render SSR (Server-Side Rendering) hoặc Unit Test, tính năng bắt cookie vẫn giả lập môi trường ảo dựa trên biến cache để tránh phát sinh bug văng lỗi gián đoạn do không truy vấn được DOM window`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính Năng Chặn Toàn Quyền (Global Cookie Blocking)`}),` — kế nối bảo mật theo bộ thư viện của quy chế `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`. Nếu website đánh mã dừng cấp quyền hoạt động cookie theo chính sách riêng tư bảo vệ người dùng, Class Cookie sẽ dừng tất cả chức năng sinh tác dữ liệu lên DOM theo đúng giao thức`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ Trợ Luồng Code Default (Fallback/Default)`}),` — cho phép nạp biến đệm vào làm dữ liệu phụ và sinh cấu trúc từ giá trị phụ đó khi giá trị thật vẫn đang bị mất/rỗng`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`constructor`,children:`Constructor`}),`
`,(0,c.jsxs)(n.p,{children:[`Phiên bản `,(0,c.jsx)(n.code,{children:`Cookie`}),` có thể được tạo để quản lý cookie cụ thể. Nếu phiên bản với cùng tên đã tồn tại, phiên bản hiện có sẽ được trả về.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên cookie để quản lý`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Khi chạy `,(0,c.jsx)(n.code,{children:`get()`}),`, nếu cung cấp một đoạn code tĩnh phụ, class sẽ so khớp. Trường hợp lúc này không thấy thông số cookie trên hệ điều hành, đoạn code tĩnh lập tức ghi vào cấu trúc và lưu lại lên trình duyệt. Hỗ trợ các hàm để tính toán giá trị mặc định một cách lười.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | string | (() => T | string)`}),` — cấu trúc dự phòng mặc định hoặc callback function`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — tham số cookie (sử dụng khi đặt giá trị mặc định)`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T | string | undefined`}),` — biến lấy từ cookie hoặc dữ liệu phụ trợ`]}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sử dụng `,(0,c.jsx)(n.code,{children:`set()`}),` để nạp hoặc làm đệm chèn đè lên biến trước. Những chuẩn tham số bổ sung còn quản lý cả chuẩn cookie thông dụng là `,(0,c.jsx)(n.code,{children:`age`}),` (Max-Age cache thiết đặt quy đổi theo giây) và trạng thái của các `,(0,c.jsx)(n.code,{children:`sameSite`}),`. Nếu chặn đang hoạt động qua `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`, giá trị chỉ được lưu trong bộ nhớ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | string | (() => T | string)`}),` — tham chiếu dùng đăng ký tạo vào cookie, hoặc trỏ lên một mảng rỗng để tính function tạo cấu trúc thay vì nhập chay string`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — phần tham số hỗ trợ định tuổi tồn tại và cấu hình thông số cấp quyền mở rộng của cookie`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tập lệnh thực thi việc đẩy một mảng thông số rỗng bằng string trắng vào vùng cookie, sau đó cập nhật vòng đời thuộc tính Max-Age thành `,(0,c.jsx)(n.code,{children:`-1`}),`. Lúc này máy khách sẽ hiểu trình truy xuất cần dừng hoạt động, đẩy lùi chu kỳ hết hạn và loại cookie ngay rực khắc.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-tĩnh`,children:`Phương thức tĩnh`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getInstance<T>(name: string): Cookie<T>`}),` — Trả về phiên bản hiện có hoặc tạo mới theo tên`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`hỗ-trợ`,children:`Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`CookieStorage.update()`}),` — Cập nhật dữ liệu từ thư mục `,(0,c.jsx)(n.code,{children:`document.cookie`}),` nằm trên browser`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-loại`,children:`Các loại`}),`
`,(0,c.jsx)(n.h3,{id:`cookieoptions`,children:(0,c.jsx)(n.code,{children:`CookieOptions`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đối tượng cấu hình cho các phương thức `,(0,c.jsx)(n.code,{children:`get`}),` và `,(0,c.jsx)(n.code,{children:`set`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age?: number`}),` — thời gian sống của cookie tính bằng `,(0,c.jsx)(n.strong,{children:`giây`}),` (thuộc tính `,(0,c.jsx)(n.code,{children:`Max-Age`}),`). Mặc định: 7 ngày (604800 giây). Tự động đặt thành `,(0,c.jsx)(n.code,{children:`-1`}),` khi xóa qua `,(0,c.jsx)(n.code,{children:`remove()`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sameSite?: 'strict' | 'lax'`}),` — chính sách `,(0,c.jsx)(n.code,{children:`SameSite`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`'strict'`}),` (cookie chỉ được gửi khi điều hướng trong cùng trang web). `,(0,c.jsx)(n.code,{children:`'lax'`}),` cũng cho phép gửi khi điều hướng từ liên kết ngoài (GET request)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`arguments?: string[]`}),` — các chỉ thị bổ sung được nối vào chuỗi cookie (ví dụ: `,(0,c.jsx)(n.code,{children:`'Secure'`}),`, `,(0,c.jsx)(n.code,{children:`'Path=/'`}),`, `,(0,c.jsx)(n.code,{children:`'Domain=.myapp.com'`}),`)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-cơ-bản`,children:`Sử dụng cơ bản`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// Mảng giao tiếp lấy biến 'theme' cookie
const themeCookie = new Cookie('theme')

// Tìm hệ thống node 'theme', HOẶC gán/đóng gói 'dark' trả lại cho giá trị nếu web rỗng
const currentTheme = themeCookie.get('dark')

// Cấu trúc text / string đơn thuần
themeCookie.set('light')

// Trỏ cấu hình tuỳ chỉnh đa hệ
themeCookie.set('dark', {
  age: 60 * 60 * 24 * 30, // Xử lý cache quy về 30 ngày vòng lặp
  sameSite: 'lax'
})

// Xóa
themeCookie.remove()
`})}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-getinstance`,children:`Sử dụng getInstance`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie } from '@dxtmisha/functional'

// Lấy hoặc tạo phiên bản
const cookie = Cookie.getInstance<string>('user')

// Tất cả các cuộc gọi getInstance với cùng một tên trả về cùng một phiên bản
const sameCookie = Cookie.getInstance<string>('user')

console.log(cookie === sameCookie) // true
`})}),`
`,(0,c.jsx)(n.h3,{id:`tích-hợp-với-cookieblock`,children:`Tích hợp với CookieBlock`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cookie, CookieBlock } from '@dxtmisha/functional'

// Chặn tất cả hoạt động ghi
CookieBlock.set(true)

const cookie = new Cookie('blocked')

// Giá trị được lưu trong bộ nhớ, nhưng không phải DOM
cookie.set('value')

// Mở chặn
CookieBlock.set(false)

// Bây giờ ghi hoạt động bình thường
cookie.set('newValue')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};