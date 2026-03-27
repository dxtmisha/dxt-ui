import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Composables/useLazyRef - Tải lười`}),`
`,(0,c.jsx)(n.h1,{id:`uselazyref`,children:(0,c.jsx)(n.code,{children:`useLazyRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Composable để khởi tạo việc theo dõi sự xuất hiện của một phần tử trên màn hình bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: IntersectionObserverInit`}),` — cài đặt cho `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`. Mặc định: `,(0,c.jsx)(n.code,{children:`{ rootMargin: '128px 0px' }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`intersectionObserver: IntersectionObserver | undefined`}),` — thực thể `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(element: HTMLElement): LazyItem | undefined`}),` — lấy dữ liệu của phần tử đang được theo dõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>`}),` — thêm một phần tử để theo dõi (trả về ref trạng thái hiển thị).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeLazyItem(element?: HTMLElement): void`}),` — xóa một phần tử khỏi việc theo dõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disconnectLazy(): void`}),` — dừng tất cả việc theo dõi và ngắt kết nối bộ quan sát.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Phần tử hiện đã hiển thị!')
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};