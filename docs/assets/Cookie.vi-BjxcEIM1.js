import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Classes/Cookie - Quản lý chuẩn Browser Cookie"}),`
`,n.jsx(e.h1,{id:"lớp-cookie",children:"Lớp Cookie"}),`
`,n.jsxs(e.p,{children:["Lớp bao đóng cho phép các developer quản trị trực tiếp vùng Browser Cookie. Hệ thống ",n.jsx(e.code,{children:"Cookie"})," tự cấu hình tính đồng bộ xuyên suốt từ bộ đệm của website (memory record) sang môi trường DOM API ",n.jsx(e.code,{children:"document.cookie"}),", giúp cho tiến trình thao tác và tạo lập biến theo chuẩn reactive được đáp ứng đầy đủ với các chức năng dự phòng linh hoạt."]}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Đồng bộ hóa Không Gian Bộ Nhớ (Memory Sync)"})," — lưu giữ cấu trúc ảo cho trình quản lý trạng thái tại server cache, tránh tạo quá nhiều truy vấn lên cấu trúc DOM của cookie. Khi khởi tạo tiến trình nó lập tức bắt/nắm bắt vòng dữ liệu đầu tư của mã node ",n.jsx(e.code,{children:"document.cookie"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Thiết Lập Theo Vùng Môi Trường (Environment Aware)"})," — có khả năng định vị khu sinh thái DOM. Với vùng Render SSR (Server-Side Rendering) hoặc Unit Test, tính năng bắt cookie vẫn giả lập môi trường ảo dựa trên biến cache để tránh phát sinh bug văng lỗi gián đoạn do không truy vấn được DOM window."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính Năng Chặn Toàn Quyền (Global Cookie Blocking)"})," — kế nối bảo mật theo bộ thư viện của quy chế ",n.jsx(e.code,{children:"CookieBlock"}),". Nếu website đánh mã dừng cấp quyền hoạt động cookie theo chính sách riêng tư bảo vệ người dùng, Class Cookie sẽ dừng tất cả chức năng sinh tác dữ liệu lên DOM theo đúng giao thức."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hỗ Trợ Luồng Code Default (Fallback/Default)"})," — cho phép nạp biến đệm vào làm dữ liệu phụ và sinh cấu trúc từ giá trị phụ đó khi giá trị thật vẫn đang bị mất/rỗng."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(e.p,{children:"Truyền file nhận diện theo thuộc tính biến tên/từ khoá cookie."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { Cookie } from '@dxtmisha/functional'

// Mảng giao tiếp lấy biến 'theme' cookie
const themeCookie = new Cookie('theme')
`})}),`
`,n.jsx(e.h2,{id:"quản-lý-dữ-liệu",children:"Quản lý dữ liệu"}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsxs(e.p,{children:["Khi chạy ",n.jsx(e.code,{children:"get()"}),", nếu cung cấp một đoạn code tĩnh phụ, class sẽ so khớp. Trường hợp lúc này không thấy thông số cookie trên hệ điều hành, đoạn code tĩnh lập tức ghi vào cấu trúc và lưu lại lên trình duyệt."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: T | string | (() => T | string)"})," — cấu trúc dự phòng mặc định hoặc callback function."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"T | string | undefined"})," — biến lấy từ cookie hoặc dữ liệu phụ trợ."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Tìm hệ thống node 'theme', HOẶC gán/đóng gói 'dark' trả lại cho giá trị nếu web rỗng
const currentTheme = themeCookie.get('dark') 
`})}),`
`,n.jsx(e.h3,{id:"set",children:n.jsx(e.code,{children:"set"})}),`
`,n.jsxs(e.p,{children:["Sử dụng ",n.jsx(e.code,{children:"set()"})," để nạp hoặc làm đệm chèn đè lên biến trước. Những chuẩn tham số bổ sung còn quản lý cả chuẩn cookie thông dụng là ",n.jsx(e.code,{children:"age"})," (Max-Age cache thiết đặt quy đổi theo giây) và trạng thái của các ",n.jsx(e.code,{children:"sameSite"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T | string | (() => T | string)"})," — tham chiếu dùng đăng ký tạo vào cookie, hoặc trỏ lên một mảng rỗng để tính function tạo cấu trúc thay vì nhập chay string."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: CookieOptions"})," — phần tham số hỗ trợ định tuổi tồn tại và cấu hình thông số cấp quyền mở rộng của cookie."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const userPrefs = new Cookie('preferences')

// Cấu trúc text / string đơn thuần
userPrefs.set('{"compact": true}')

// Trỏ cấu hình tuỳ chỉnh đa hệ
userPrefs.set('{"compact": true}', {
  age: 60 * 60 * 24 * 30, // Xử lý cache quy về 30 ngày vòng lặp
  sameSite: 'lax'
})
`})}),`
`,n.jsx(e.h3,{id:"remove",children:n.jsx(e.code,{children:"remove"})}),`
`,n.jsxs(e.p,{children:["Tập lệnh thực thi việc đẩy một mảng thông số rỗng bằng string trắng vào vùng cookie, sau đó cập nhật vòng đời thuộc tính Max-Age thành ",n.jsx(e.code,{children:"-1"}),". Lúc này máy khách sẽ hiểu trình truy xuất cần dừng hoạt động, đẩy lùi chu kỳ hết hạn và loại cookie ngay rức khắc."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`userPrefs.remove()
`})}),`
`,n.jsx(e.h2,{id:"đồng-bộ-hóa",children:"Đồng bộ hóa"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"updateData(): void"})," (static) — Lệnh tĩnh giúp cập nhật dữ liệu từ thư mục ",n.jsx(e.code,{children:"document.cookie"})," nằm trên browser."]}),`
`]}),`
`,n.jsx(e.h2,{id:"cookieoptions",children:"CookieOptions"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"CookieOptions"})," là đối tượng cấu hình cho các phương thức ",n.jsx(e.code,{children:"get"})," và ",n.jsx(e.code,{children:"set"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"age?: number"})," — thời gian sống của cookie tính bằng ",n.jsx(e.strong,{children:"giây"})," (thuộc tính ",n.jsx(e.code,{children:"Max-Age"}),"). Mặc định: 7 ngày (604800 giây). Tự động đặt thành ",n.jsx(e.code,{children:"-1"})," khi xóa qua ",n.jsx(e.code,{children:"remove()"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sameSite?: 'strict' | 'lax'"})," — chính sách ",n.jsx(e.code,{children:"SameSite"}),". Mặc định: ",n.jsx(e.code,{children:"'strict'"})," (cookie chỉ được gửi khi điều hướng trong cùng trang web). ",n.jsx(e.code,{children:"'lax'"})," cũng cho phép gửi khi điều hướng từ liên kết ngoài (GET request)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"arguments?: string[]"})," — các chỉ thị bổ sung được nối vào chuỗi cookie (ví dụ: ",n.jsx(e.code,{children:"'Secure'"}),", ",n.jsx(e.code,{children:"'Path=/'"}),", ",n.jsx(e.code,{children:"'Domain=.myapp.com'"}),")."]}),`
`]}),`
`,n.jsx(e.h2,{id:"tổng-quan-nội-bộ",children:"Tổng quan nội bộ"}),`
`,n.jsxs(e.p,{children:["Tại hệ thống quản trị nội hàm, tiến trình bóc/ghi cookie nằm trên Class ",n.jsx(e.code,{children:"Cookie"})," có thiết lập thư viện bộ nhớ tổng tên ",n.jsx(e.code,{children:"items"}),". Cụ thể nếu tạo truy vấn chéo ",n.jsx(e.code,{children:"new Cookie('auth')"})," trên 2 mảng component riêng rẽ, thì 2 khu component lấy cookie đó đều sử dụng/giữ kết nối tới một luồng instance giống nhau hoàn toàn mà không bị lỗi/văng xung đột."]})]})}function u(c={}){const{wrapper:e}={...i(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(h,{...c})}):h(c)}export{u as default};
