import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/EffectScopeGlobal - Phạm vi hiệu ứng toàn cục`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-effectscopeglobal`,children:`Lớp EffectScopeGlobal`}),`
`,(0,c.jsxs)(t.p,{children:[`Một lớp tiện ích cung cấp `,(0,c.jsx)(t.code,{children:`effectScope`}),` Vue toàn cục và tách biệt (detached). Điều này cho phép chạy các hiệu ứng phản ứng (watchers, computed properties) không bị ràng buộc vào vòng đời của bất kỳ thành phần cụ thể nào, đảm bảo chúng không tự động bị hủy khi một thành phần bị gỡ bỏ (unmount).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Phạm vi được khởi tạo lười biếng (lazy) khi gọi `,(0,c.jsx)(t.code,{children:`run`}),` lần đầu tiên và được tạo dưới dạng phạm vi "tách biệt" (`,(0,c.jsx)(t.code,{children:`effectScope(true)`}),`), có nghĩa là nó sẽ không bị nắm giữ bởi bất kỳ phạm vi cha nào.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sự tồn tại toàn cục`}),` — các hiệu ứng tồn tại cùng với ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phạm vi tách biệt`}),` — được tạo với `,(0,c.jsx)(t.code,{children:`effectScope(true)`}),`, ngăn chặn việc bị hủy vô tình bởi các phạm vi cha.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo lười biếng`}),` — phạm vi nội bộ chỉ được tạo khi cần thiết lần đầu tiên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý phạm vi`}),` — nhóm các hiệu ứng phản ứng toàn cục lại với nhau để quản lý có tổ chức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dễ sử dụng`}),` — phương thức tĩnh đơn giản để chạy bất kỳ hàm phản ứng nào.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.h3,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:`Thực thi hàm được cung cấp trong phạm vi hiệu ứng toàn cục.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fn: () => T`}),` — hàm cần thực thi (thường chứa logic phản ứng như `,(0,c.jsx)(t.code,{children:`watch`}),` hoặc `,(0,c.jsx)(t.code,{children:`computed`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Giá trị trả về:`}),` `,(0,c.jsx)(t.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// Trình theo dõi (watcher) này sẽ tồn tại ngay cả khi thành phần tạo ra nó được gỡ bỏ
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Trạng thái toàn cục thay đổi:', val)
  })
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};