import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Classes/RouterItemRef - Quản lý Vue Router`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-routeritemref`,children:`Lớp RouterItemRef`}),`
`,(0,c.jsx)(n.p,{children:`Lõi tĩnh để làm việc với Vue Router trong lớp chức năng (functional layer). Nó cung cấp một điểm truy cập duy nhất vào router, cho phép tạo liên kết, điều hướng và chuẩn hóa đường dẫn mà không phụ thuộc trực tiếp vào ngữ cảnh của thành phần (component context).`}),`
`,(0,c.jsxs)(n.p,{children:[`Điều này cho phép sử dụng các khả năng của router trong các lớp và tiện ích nơi các hook `,(0,c.jsx)(n.code,{children:`useRouter`}),` hoặc `,(0,c.jsx)(n.code,{children:`useRoute`}),` không khả dụng.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy cập Toàn cầu`}),` — lưu trữ thực thể router để truy cập từ bất kỳ đâu trong ứng dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Liên kết An toàn`}),` — các phương thức để tạo liên kết bằng tên route với các tham số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa`}),` — chuyển đổi các định dạng đường dẫn khác nhau thành các thuộc tính `,(0,c.jsx)(n.code,{children:`href`}),` tiêu chuẩn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`sử-dụng-thiết-lập`,children:`Sử dụng (Thiết lập)`}),`
`,(0,c.jsxs)(n.p,{children:[`Vì `,(0,c.jsx)(n.code,{children:`RouterItemRef`}),` là một lớp tĩnh, nó phải được khởi tạo một lần khi tạo ứng dụng (thường là trong `,(0,c.jsx)(n.code,{children:`main.ts`}),` hoặc trong một plugin).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Thiết lập router để sử dụng toàn cầu
RouterItemRef.set(router)
`})}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-thực-thể`,children:`Quản lý thực thể`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static get(): Router | undefined`}),` — Trả về thực thể router hiện đang được thiết lập.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static set(router: Router): void`}),` — Thiết lập thực thể router.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static setOneTime(router: Router): void`}),` — Thiết lập thực thể router chỉ khi nó chưa được thiết lập. Hữu ích để ngăn chặn việc ghi đè vô tình trong các plugin.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`điều-hướng-và-liên-kết`,children:`Điều hướng và Liên kết`}),`
`,(0,c.jsx)(n.p,{children:`Nhóm các phương thức quản lý lịch sử điều hướng và tạo URL.`}),`
`,(0,c.jsx)(n.h3,{id:`push`,children:(0,c.jsx)(n.code,{children:`push`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thực hiện điều hướng theo lập trình đến route được chỉ định. Đây là một trình bao bọc an toàn cho `,(0,c.jsx)(n.code,{children:`router.push`}),`. Nếu router chưa được thiết lập, hành động sẽ bị bỏ qua.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to: string | RouteLocationRaw`}),` — đường dẫn đích hoặc đối tượng vị trí route.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`getlink`,children:(0,c.jsx)(n.code,{children:`getLink`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo và trả về một chuỗi URL (href) cho một route dựa trên tên và các tham số của nó. Sử dụng phương thức `,(0,c.jsx)(n.code,{children:`router.resolve`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên route duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`params?: any`}),` — các tham số đường dẫn động (params).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query?: any`}),` — các tham số chuỗi truy vấn (query).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`}),` — URL được tạo hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu router chưa được khởi tạo.`]}),`
`,(0,c.jsx)(n.h3,{id:`gethref`,children:(0,c.jsx)(n.code,{children:`getHref`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về một đối tượng thuộc tính liên kết được chuẩn hóa. Hữu ích để truyền vào các thành phần mong đợi `,(0,c.jsx)(n.code,{children:`ConstrHrefProps`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name?: string`}),` — tên route.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`params?: any`}),` — tham số đường dẫn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query?: any`}),` — tham số truy vấn.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ConstrHrefProps`}),` — một đối tượng `,(0,c.jsx)(n.code,{children:`{ href: string }`}),` hoặc `,(0,c.jsx)(n.code,{children:`{}`}),` (đối tượng trống) nếu không có tên nào được cung cấp.`]}),`
`,(0,c.jsx)(n.h3,{id:`rawtohref`,children:(0,c.jsx)(n.code,{children:`rawToHref`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức chuẩn hóa đặc biệt. Chuyển đổi một đối tượng vị trí (nếu nó chứa `,(0,c.jsx)(n.code,{children:`name`}),`) thành một đối tượng thuộc tính liên kết.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`to?: string | RouteLocationRaw`}),` — dữ liệu route thô.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ConstrHrefProps`}),` — kết quả của `,(0,c.jsx)(n.code,{children:`getHref`}),` hoặc `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-liên-kết-trong-mã`,children:`Tạo liên kết trong mã`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'

// Lấy URL cho trang hồ sơ người dùng
const userUrl = RouterItemRef.getLink('user-profile', { id: 123 })
// Kết quả: '/user/123' (tùy thuộc vào cấu hình router)

// Sử dụng cho các thuộc tính thành phần
const linkProps = RouterItemRef.getHref('catalog', undefined, { category: 'electronics' })
// Kết quả: { href: '/catalog?category=electronics' }
`})}),`
`,(0,c.jsx)(n.h3,{id:`điều-hướng-theo-lập-trình`,children:`Điều hướng theo lập trình`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'

const logout = () => {
    // Điều hướng đến trang chủ sau khi đăng xuất
    RouterItemRef.push({ name: 'home' })
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};