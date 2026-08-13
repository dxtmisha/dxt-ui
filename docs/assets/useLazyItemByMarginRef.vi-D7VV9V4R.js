import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useLazyItemByMarginRef - Tải lười theo lề`}),`
`,(0,c.jsx)(t.h1,{id:`uselazyitembymarginref`,children:(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable để theo dõi sự xuất hiện của một phần tử trên màn hình bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. Được tối ưu hóa bằng cách sử dụng một thực thể quan sát duy nhất cho các giá trị `,(0,c.jsx)(t.code,{children:`rootMargin`}),` giống nhau.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: RefType<HTMLElement | undefined>`}),` — tham chiếu phản ứng đến phần tử HTML được theo dõi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`rootMargin: string`}),` — lề cho `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`'100px 0px'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazyItemStatus: ShallowRef<boolean>`}),` — trạng thái hiển thị của phần tử (liệu nó có cắt vùng quan sát dựa trên `,(0,c.jsx)(t.code,{children:`rootMargin`}),` hay không).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lazyItem: LazyItem | undefined`}),` — (getter) đối tượng chứa thông tin theo dõi chi tiết (tỷ lệ, mục nhập, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { lazyItemStatus } = useLazyItemByMarginRef(element, '128px 0px')

// lazyItemStatus.value sẽ trở thành true khi phần tử nằm trong khoảng 128px so với khung nhìn (viewport)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};