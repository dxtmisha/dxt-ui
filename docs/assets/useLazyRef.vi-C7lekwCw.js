import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/vi/functional/Composables/useLazyRef - Tải lười"}),`
`,e.jsx(n.h1,{id:"uselazyref",children:e.jsx(n.code,{children:"useLazyRef"})}),`
`,e.jsxs(n.p,{children:["Composable để khởi tạo việc theo dõi sự xuất hiện của một phần tử trên màn hình bằng cách sử dụng ",e.jsx(n.code,{children:"IntersectionObserver"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tham số:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: IntersectionObserverInit"})," — cài đặt cho ",e.jsx(n.code,{children:"IntersectionObserver"}),". Mặc định: ",e.jsx(n.code,{children:"{ rootMargin: '128px 0px' }"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Trả về:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"intersectionObserver: IntersectionObserver | undefined"})," — thực thể ",e.jsx(n.code,{children:"IntersectionObserver"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItem(element: HTMLElement): LazyItem | undefined"})," — lấy dữ liệu của phần tử đang được theo dõi."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>"})," — thêm một phần tử để theo dõi (trả về ref trạng thái hiển thị)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeLazyItem(element?: HTMLElement): void"})," — xóa một phần tử khỏi việc theo dõi."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disconnectLazy(): void"})," — dừng tất cả việc theo dõi và ngắt kết nối bộ quan sát."]}),`
`]}),`
`,e.jsx(n.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Phần tử hiện đã hiển thị!')
  }
})
`})})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default};
