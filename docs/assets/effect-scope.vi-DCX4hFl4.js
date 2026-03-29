import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/# Phạm vi hiệu ứng toàn cục`}),`
`,(0,c.jsx)(n.h1,{id:`phạm-vi-hiệu-ứng-toàn-cục`,children:`Phạm vi hiệu ứng toàn cục`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.strong,{children:`EffectScopeGlobal`}),` cung cấp quyền truy cập vào một phạm vi hiệu ứng (`,(0,c.jsx)(n.strong,{children:`EffectScope`}),`) thống nhất và chạy lâu dài trong `,(0,c.jsx)(n.strong,{children:`Vue 3`}),`. Điều này cho phép tạo ra các phụ thuộc phản hồi (watch, computed) không bị ràng buộc với chu kỳ sống của các thành phần cụ thể.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-đặc-điểm`,children:`Các đặc điểm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính bền bỉ`}),`: Các hiệu ứng được khởi chạy thông qua lớp này sẽ tồn tại trong suốt thời gian hoạt động của ứng dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sự cô lập`}),`: Cho phép nhóm các quá trình phản hồi toàn cục vào một nơi để ngăn chặn rò rỉ bộ nhớ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm soát`}),`: Tất cả các phụ thuộc được tạo bên trong `,(0,c.jsx)(n.code,{children:`run()`}),` sẽ tự động được liên kết với ngữ cảnh toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.p,{children:`Thường được sử dụng để thiết lập các trình lắng nghe toàn cục hoặc các thuộc tính tính toán phải luôn sẵn dùng trong toàn bộ ứng dụng.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { watch, ref } from 'vue'
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
`,(0,c.jsxs)(n.p,{children:[`Cách tiếp cận này đảm bảo rằng ngay cả khi thành phần khởi tạo việc tạo `,(0,c.jsx)(n.code,{children:`watch`}),` này bị hủy (unmounted), trình theo dõi vẫn sẽ tiếp tục hoạt động.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};