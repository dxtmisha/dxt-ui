import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useLazyRef - Tải lười`}),`
`,(0,c.jsx)(t.h1,{id:`uselazyref`,children:(0,c.jsx)(t.code,{children:`useLazyRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable để khởi tạo việc theo dõi sự xuất hiện của một phần tử trên màn hình bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Có thể đăng ký cùng một phần tử nhiều lần. Mỗi đăng ký có trạng thái và cơ chế dọn dẹp riêng; đăng ký mới nhận ngay trạng thái giao nhau mới nhất. Việc quan sát chỉ bắt đầu một lần và kết thúc khi đăng ký cuối cùng bị xóa.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: IntersectionObserverInit`}),` — cài đặt cho `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. Mặc định: `,(0,c.jsx)(t.code,{children:`{ rootMargin: '128px 0px' }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`intersectionObserver: IntersectionObserver | undefined`}),` — thực thể `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(element?: HTMLElement, status?: ShallowRef<boolean>): LazyItem | undefined`}),` — chọn đăng ký bằng ref trạng thái được trả về từ `,(0,c.jsx)(t.code,{children:`addLazyItem`}),`; nếu không có `,(0,c.jsx)(t.code,{children:`status`}),`, trả về đăng ký đang hoạt động đầu tiên của phần tử.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>`}),` — thêm một phần tử để theo dõi (trả về ref trạng thái hiển thị).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`removeLazyItem(element?: HTMLElement): void`}),` — xóa tất cả đăng ký theo dõi của phần tử được chỉ định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disconnectLazy(): void`}),` — dừng tất cả việc theo dõi và ngắt kết nối bộ quan sát.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Phần tử hiện đã hiển thị!')
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};