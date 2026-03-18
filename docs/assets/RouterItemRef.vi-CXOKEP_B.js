import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Classes/RouterItemRef - Quản lý Vue Router"}),`
`,n.jsx(t.h1,{id:"lớp-routeritemref",children:"Lớp RouterItemRef"}),`
`,n.jsx(t.p,{children:"Lõi tĩnh để làm việc với Vue Router trong lớp chức năng (functional layer). Nó cung cấp một điểm truy cập duy nhất vào router, cho phép tạo liên kết, điều hướng và chuẩn hóa đường dẫn mà không phụ thuộc trực tiếp vào ngữ cảnh của thành phần (component context)."}),`
`,n.jsxs(t.p,{children:["Điều này cho phép sử dụng các khả năng của router trong các lớp và tiện ích nơi các hook ",n.jsx(t.code,{children:"useRouter"})," hoặc ",n.jsx(t.code,{children:"useRoute"})," không khả dụng."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Truy cập Toàn cầu"})," — lưu trữ thực thể router để truy cập từ bất kỳ đâu trong ứng dụng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tạo Liên kết An toàn"})," — các phương thức để tạo liên kết bằng tên route với các tham số."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Chuẩn hóa"})," — chuyển đổi các định dạng đường dẫn khác nhau thành các thuộc tính ",n.jsx(t.code,{children:"href"})," tiêu chuẩn."]}),`
`]}),`
`,n.jsx(t.h2,{id:"sử-dụng-thiết-lập",children:"Sử dụng (Thiết lập)"}),`
`,n.jsxs(t.p,{children:["Vì ",n.jsx(t.code,{children:"RouterItemRef"})," là một lớp tĩnh, nó phải được khởi tạo một lần khi tạo ứng dụng (thường là trong ",n.jsx(t.code,{children:"main.ts"})," hoặc trong một plugin)."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Thiết lập router để sử dụng toàn cầu
RouterItemRef.set(router)
`})}),`
`,n.jsx(t.h2,{id:"quản-lý-thực-thể",children:"Quản lý thực thể"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"static get(): Router | undefined"})," — Trả về thực thể router hiện đang được thiết lập."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"static set(router: Router): void"})," — Thiết lập thực thể router."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"static setOneTime(router: Router): void"})," — Thiết lập thực thể router chỉ khi nó chưa được thiết lập. Hữu ích để ngăn chặn việc ghi đè vô tình trong các plugin."]}),`
`]}),`
`,n.jsx(t.h2,{id:"điều-hướng-và-liên-kết",children:"Điều hướng và Liên kết"}),`
`,n.jsx(t.p,{children:"Nhóm các phương thức quản lý lịch sử điều hướng và tạo URL."}),`
`,n.jsx(t.h3,{id:"push",children:n.jsx(t.code,{children:"push"})}),`
`,n.jsxs(t.p,{children:["Thực hiện điều hướng theo lập trình đến route được chỉ định. Đây là một trình bao bọc an toàn cho ",n.jsx(t.code,{children:"router.push"}),". Nếu router chưa được thiết lập, hành động sẽ bị bỏ qua."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"to: string | RouteLocationRaw"})," — đường dẫn đích hoặc đối tượng vị trí route."]}),`
`]}),`
`,n.jsx(t.h3,{id:"getlink",children:n.jsx(t.code,{children:"getLink"})}),`
`,n.jsxs(t.p,{children:["Tạo và trả về một chuỗi URL (href) cho một route dựa trên tên và các tham số của nó. Sử dụng phương thức ",n.jsx(t.code,{children:"router.resolve"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"name: string"})," — tên route duy nhất."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"params?: any"})," — các tham số đường dẫn động (params)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"query?: any"})," — các tham số chuỗi truy vấn (query)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"})," ",n.jsx(t.code,{children:"string | undefined"})," — URL được tạo hoặc ",n.jsx(t.code,{children:"undefined"})," nếu router chưa được khởi tạo."]}),`
`,n.jsx(t.h3,{id:"gethref",children:n.jsx(t.code,{children:"getHref"})}),`
`,n.jsxs(t.p,{children:["Trả về một đối tượng thuộc tính liên kết được chuẩn hóa. Hữu ích để truyền vào các thành phần mong đợi ",n.jsx(t.code,{children:"ConstrHrefProps"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"name?: string"})," — tên route."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"params?: any"})," — tham số đường dẫn."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"query?: any"})," — tham số truy vấn."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"})," ",n.jsx(t.code,{children:"ConstrHrefProps"})," — một đối tượng ",n.jsx(t.code,{children:"{ href: string }"})," hoặc ",n.jsx(t.code,{children:"{}"})," (đối tượng trống) nếu không có tên nào được cung cấp."]}),`
`,n.jsx(t.h3,{id:"rawtohref",children:n.jsx(t.code,{children:"rawToHref"})}),`
`,n.jsxs(t.p,{children:["Một phương thức chuẩn hóa đặc biệt. Chuyển đổi một đối tượng vị trí (nếu nó chứa ",n.jsx(t.code,{children:"name"}),") thành một đối tượng thuộc tính liên kết."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"to?: string | RouteLocationRaw"})," — dữ liệu route thô."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"})," ",n.jsx(t.code,{children:"ConstrHrefProps"})," — kết quả của ",n.jsx(t.code,{children:"getHref"})," hoặc ",n.jsx(t.code,{children:"{}"}),"."]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.h3,{id:"tạo-liên-kết-trong-mã",children:"Tạo liên kết trong mã"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Lấy URL cho trang hồ sơ người dùng
const userUrl = RouterItemRef.getLink('user-profile', { id: 123 })
// Kết quả: '/user/123' (tùy thuộc vào cấu hình router)

// Sử dụng cho các thuộc tính thành phần
const linkProps = RouterItemRef.getHref('catalog', undefined, { category: 'electronics' })
// Kết quả: { href: '/catalog?category=electronics' }
`})}),`
`,n.jsx(t.h3,{id:"điều-hướng-theo-lập-trình",children:"Điều hướng theo lập trình"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'

const logout = () => {
    // Điều hướng đến trang chủ sau khi đăng xuất
    RouterItemRef.push({ name: 'home' })
}
`})})]})}function x(e={}){const{wrapper:t}={...h(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{x as default};
