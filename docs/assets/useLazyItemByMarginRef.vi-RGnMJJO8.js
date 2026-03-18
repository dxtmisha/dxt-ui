import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useLazyItemByMarginRef - Tải lười theo lề"}),`
`,n.jsx(e.h1,{id:"uselazyitembymarginref",children:n.jsx(e.code,{children:"useLazyItemByMarginRef"})}),`
`,n.jsxs(e.p,{children:["Composable để theo dõi sự xuất hiện của một phần tử trên màn hình bằng cách sử dụng ",n.jsx(e.code,{children:"IntersectionObserver"}),". Được tối ưu hóa bằng cách sử dụng một thực thể quan sát duy nhất cho các giá trị ",n.jsx(e.code,{children:"rootMargin"})," giống nhau."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element: RefType<HTMLElement | undefined>"})," — tham chiếu phản ứng đến phần tử HTML được theo dõi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rootMargin: string"})," — lề cho ",n.jsx(e.code,{children:"IntersectionObserver"})," (ví dụ: ",n.jsx(e.code,{children:"'100px 0px'"}),")."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lazyItemStatus: ShallowRef<boolean>"})," — trạng thái hiển thị của phần tử (liệu nó có cắt vùng quan sát dựa trên ",n.jsx(e.code,{children:"rootMargin"})," hay không)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lazyItem: LazyItem | undefined"})," — (getter) đối tượng chứa thông tin theo dõi chi tiết (tỷ lệ, mục nhập, v.v.)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value sẽ trở thành true khi phần tử nằm trong khoảng 128px so với khung nhìn (viewport)
`})})]})}function m(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{m as default};
