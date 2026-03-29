import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useLazyItemByMarginRef - Tải lười theo lề`}),`
`,(0,c.jsx)(n.h1,{id:`uselazyitembymarginref`,children:(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable để theo dõi sự xuất hiện của một phần tử trên màn hình bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`. Được tối ưu hóa bằng cách sử dụng một thực thể quan sát duy nhất cho các giá trị `,(0,c.jsx)(n.code,{children:`rootMargin`}),` giống nhau.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: RefType<HTMLElement | undefined>`}),` — tham chiếu phản ứng đến phần tử HTML được theo dõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`rootMargin: string`}),` — lề cho `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`'100px 0px'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lazyItemStatus: ShallowRef<boolean>`}),` — trạng thái hiển thị của phần tử (liệu nó có cắt vùng quan sát dựa trên `,(0,c.jsx)(n.code,{children:`rootMargin`}),` hay không).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lazyItem: LazyItem | undefined`}),` — (getter) đối tượng chứa thông tin theo dõi chi tiết (tỷ lệ, mục nhập, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value sẽ trở thành true khi phần tử nằm trong khoảng 128px so với khung nhìn (viewport)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};