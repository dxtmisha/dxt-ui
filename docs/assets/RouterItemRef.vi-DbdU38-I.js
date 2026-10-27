import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/RouterItemRef - Quản lý Vue Router`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-routeritemref`,children:`Lớp RouterItemRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Facade tĩnh cho Vue Router đã đăng ký qua `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. Phân giải tuyến có tên thành thuộc tính href và thực hiện điều hướng.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Liên kết có tên`}),` — giữ params, query, hash và đường dẫn cơ sở của router.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký`}),` — `,(0,c.jsx)(t.code,{children:`set()`}),` thay thế, `,(0,c.jsx)(t.code,{children:`setOneTime()`}),` chỉ đặt khi chưa có.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Router tùy chọn`}),` — chưa đăng ký cho liên kết undefined hoặc thuộc tính href rỗng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`rawToHref()`}),` chỉ xử lý đối tượng có `,(0,c.jsx)(t.code,{children:`name`}),` kiểu chuỗi; đối tượng path và chuỗi URL trả `,(0,c.jsx)(t.code,{children:`{}`}),`. Tên tuyến không biết có thể gây lỗi Vue Router. `,(0,c.jsx)(t.code,{children:`push()`}),` trả `,(0,c.jsx)(t.code,{children:`void`}),`, không trả promise điều hướng; dùng router trực tiếp khi cần chờ hoặc xử lý lỗi. Khởi tạo lưu trữ yêu cầu trước SSR.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = /*#__PURE__*/ createRouter({
  history: createMemoryHistory('/app/'),
  routes: [{ path: '/users/:id', name: 'user', component: { render: () => null } }]
})
RouterItemRef.set(router)
const href = /*#__PURE__*/ RouterItemRef.getHref('user', { id: 0 }, { page: 1 }, '#details')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`đăng-ký`,children:`Đăng ký`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get(): Router`}),` — Trả router đã đăng ký; lúc chạy có thể chưa có.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`set(router: Router): void`}),` — Lưu hoặc thay router trong ngữ cảnh hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setOneTime(router: Router): void`}),` — Chỉ đăng ký router khi chưa lưu router nào.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`liên-kết-và-điều-hướng`,children:`Liên kết và điều hướng`}),`
`,(0,c.jsx)(t.h4,{id:`getlink`,children:(0,c.jsx)(t.code,{children:`getLink`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getLink( name: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string ): string | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phân giải vị trí có tên thành `,(0,c.jsx)(t.code,{children:`router.resolve(...).href`}),`; trả `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu chưa có router.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên tuyến đã đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: RouteParamsRawGeneric`}),` — Tham số tuyến có tên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: LocationQueryRaw`}),` — Tham số truy vấn tuyến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hash?: string`}),` — Phân đoạn tuyến gồm dấu # đầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Chuỗi được yêu cầu hoặc undefined khi không có.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const link = /*#__PURE__*/ RouterItemRef.getLink('user', { id: 0 }, { page: 1 }, '#details')
`})}),`
`,(0,c.jsx)(t.h4,{id:`gethref`,children:(0,c.jsx)(t.code,{children:`getHref`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getHref( name?: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string ): ConstrHrefProps`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả `,(0,c.jsx)(t.code,{children:`{ href }`}),` cho liên kết phân giải không rỗng, ngược lại `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — Tên tuyến đã đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: RouteParamsRawGeneric`}),` — Tham số tuyến có tên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: LocationQueryRaw`}),` — Tham số truy vấn tuyến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hash?: string`}),` — Phân đoạn tuyến gồm dấu # đầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ RouterItemRef.getHref('user', { id: 0 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`rawtohref`,children:(0,c.jsx)(t.code,{children:`rawToHref`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`rawToHref( to?: string | RouteLocationRaw ): ConstrHrefProps`})}),`
`,(0,c.jsx)(t.p,{children:`Chuyển vị trí thô có tên thành thuộc tính href, giữ params, query và hash.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to?: string | RouteLocationRaw`}),` — Vị trí tuyến thô.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ RouterItemRef.rawToHref({ name: 'user', params: { id: 0 }, hash: '#details' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`push`,children:(0,c.jsx)(t.code,{children:`push`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`push(to: string | RouteLocationRaw): void`})}),`
`,(0,c.jsx)(t.p,{children:`Bắt đầu điều hướng khi router đã đăng ký.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to: string | RouteLocationRaw`}),` — Vị trí tuyến thô.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Không có giá trị trả về.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`RouterItemRef.push({ name: 'user', params: { id: 0 } })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};