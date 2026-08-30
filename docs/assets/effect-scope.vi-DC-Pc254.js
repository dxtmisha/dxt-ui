import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/9. Phạm vi hiệu ứng toàn cục`}),`
`,(0,c.jsx)(t.h1,{id:`phạm-vi-hiệu-ứng-toàn-cục`,children:`Phạm vi hiệu ứng toàn cục`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.strong,{children:`EffectScopeGlobal`}),` cung cấp quyền truy cập vào một phạm vi hiệu ứng (`,(0,c.jsx)(t.strong,{children:`EffectScope`}),`) thống nhất và chạy lâu dài trong `,(0,c.jsx)(t.strong,{children:`Vue 3`}),`. Điều này cho phép tạo ra các phụ thuộc phản hồi (watch, computed) không bị ràng buộc với chu kỳ sống của các thành phần cụ thể.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-đặc-điểm`,children:`Các đặc điểm`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính bền bỉ`}),`: Các hiệu ứng được khởi chạy thông qua lớp này sẽ tồn tại trong suốt thời gian hoạt động của ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sự cô lập`}),`: Cho phép nhóm các quá trình phản hồi toàn cục vào một nơi để ngăn chặn rò rỉ bộ nhớ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm soát`}),`: Tất cả các phụ thuộc được tạo bên trong `,(0,c.jsx)(t.code,{children:`run()`}),` sẽ tự động được liên kết với ngữ cảnh toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.p,{children:`Thường được sử dụng để thiết lập các trình lắng nghe toàn cục hoặc các thuộc tính tính toán phải luôn sẵn dùng trong toàn bộ ứng dụng.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { watch, ref } from 'vue'
import { EffectScopeGlobal } from '@dxtmisha/functional'

const globalState = ref(0)

// 1. Bắt đầu một quy trình toàn cục
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Trạng thái toàn cục đã thay đổi:', val)
  })
})

// 2. Tạo ra các thuộc tính tính toán lâu dài
const persistentValue = EffectScopeGlobal.run(() => {
  return computed(() => globalState.value * 2)
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Cách tiếp cận này đảm bảo rằng ngay cả khi thành phần khởi tạo việc tạo `,(0,c.jsx)(t.code,{children:`watch`}),` này bị hủy (unmounted), trình theo dõi vẫn sẽ tiếp tục hoạt động.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};