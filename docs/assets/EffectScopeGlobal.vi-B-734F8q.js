import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional/Classes/EffectScopeGlobal - Phạm vi hiệu ứng toàn cục"}),`
`,n.jsx(c.h1,{id:"lớp-effectscopeglobal",children:"Lớp EffectScopeGlobal"}),`
`,n.jsxs(c.p,{children:["Một lớp tiện ích cung cấp ",n.jsx(c.code,{children:"effectScope"})," Vue toàn cục và tách biệt (detached). Điều này cho phép chạy các hiệu ứng phản ứng (watchers, computed properties) không bị ràng buộc vào vòng đời của bất kỳ thành phần cụ thể nào, đảm bảo chúng không tự động bị hủy khi một thành phần bị gỡ bỏ (unmount)."]}),`
`,n.jsxs(c.p,{children:["Phạm vi được khởi tạo lười biếng (lazy) khi gọi ",n.jsx(c.code,{children:"run"}),' lần đầu tiên và được tạo dưới dạng phạm vi "tách biệt" (',n.jsx(c.code,{children:"effectScope(true)"}),"), có nghĩa là nó sẽ không bị nắm giữ bởi bất kỳ phạm vi cha nào."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Sự tồn tại toàn cục"})," — các hiệu ứng tồn tại cùng với ứng dụng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phạm vi tách biệt"})," — được tạo với ",n.jsx(c.code,{children:"effectScope(true)"}),", ngăn chặn việc bị hủy vô tình bởi các phạm vi cha."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khởi tạo lười biếng"})," — phạm vi nội bộ chỉ được tạo khi cần thiết lần đầu tiên."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý phạm vi"})," — nhóm các hiệu ứng phản ứng toàn cục lại với nhau để quản lý có tổ chức."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Dễ sử dụng"})," — phương thức tĩnh đơn giản để chạy bất kỳ hàm phản ứng nào."]}),`
`]}),`
`,n.jsx(c.h2,{id:"hành-động",children:"Hành động"}),`
`,n.jsx(c.h3,{id:"run",children:n.jsx(c.code,{children:"run"})}),`
`,n.jsx(c.p,{children:"Thực thi hàm được cung cấp trong phạm vi hiệu ứng toàn cục."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"fn: () => T"})," — hàm cần thực thi (thường chứa logic phản ứng như ",n.jsx(c.code,{children:"watch"})," hoặc ",n.jsx(c.code,{children:"computed"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Giá trị trả về:"})," ",n.jsx(c.code,{children:"T | undefined"})]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { EffectScopeGlobal } from '@dxtmisha/functional'
import { watch, ref } from 'vue'

const globalState = ref(0)

// Trình theo dõi (watcher) này sẽ tồn tại ngay cả khi thành phần tạo ra nó được gỡ bỏ
EffectScopeGlobal.run(() => {
  watch(globalState, (val) => {
    console.log('Trạng thái toàn cục thay đổi:', val)
  })
})
`})})]})}function p(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{p as default};
