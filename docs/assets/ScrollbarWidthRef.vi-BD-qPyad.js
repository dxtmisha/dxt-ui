import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Classes/ScrollbarWidthRef - Chiều rộng thanh cuộn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-scrollbarwidthref`,children:`Lớp ScrollbarWidthRef`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp vỏ phản hồi bao quanh tiện ích cơ bản để xác định các thông số của thanh cuộn. Lớp này cho phép theo dõi cả sự hiện diện của thanh cuộn (loại của nó) và chiều rộng thực tế của nó tính bằng pixel. Điều này rất quan trọng để ngăn chặn tình trạng thay đổi bố cục (layout shift) khi thanh cuộn bị ẩn hoặc hiện, chẳng hạn như khi mở các cửa sổ modal.`}),`
`,(0,c.jsx)(n.h2,{id:`các-đặc-điểm-chính`,children:`Các đặc điểm chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính phản hồi`}),` — tự động cập nhật các giá trị `,(0,c.jsx)(n.code,{children:`item`}),` và `,(0,c.jsx)(n.code,{children:`width`}),` khi nhận được dữ liệu từ trình duyệt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toán tự động`}),` — lớp tự động khởi tạo việc đo chiều rộng thanh cuộn ngay sau khi tạo phiên bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái sẵn sàng`}),` — sự tồn tại của thuộc tính tính toán `,(0,c.jsx)(n.code,{children:`is`}),` cho phép sử dụng dữ liệu an toàn chỉ sau khi khởi tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đa nền tảng`}),` — xác định chính xác các thanh cuộn "mảnh" và tự động ẩn (macOS, thiết bị di động).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một phiên bản mới của `,(0,c.jsx)(n.code,{children:`ScrollbarWidthRef`}),` và bắt đầu quá trình không đồng bộ để đo chiều rộng thanh cuộn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`Không có`})}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-thuộc-tính`,children:`Các thuộc tính`}),`
`,(0,c.jsx)(n.h3,{id:`trạng-thái`,children:`Trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<boolean | undefined>`}),` — Cờ xác định kết quả kiểm tra `,(0,c.jsx)(n.code,{children:`ScrollbarWidth.is()`}),`. Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu thanh cuộn được coi là "đặc biệt" (ví dụ: tự động ẩn trong macOS hoặc di động, nơi chiều rộng thường `,(0,c.jsx)(n.code,{children:`<= 8px`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: Ref<number>`}),` — Chiều rộng thực tế của thanh cuộn tính bằng pixel. Mặc định là `,(0,c.jsx)(n.code,{children:`0`}),`. Được cập nhật không đồng bộ sau khi đo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is: Computed<boolean>`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` khi việc tính toán chiều rộng hoàn tất và các giá trị `,(0,c.jsx)(n.code,{children:`item`}),` và `,(0,c.jsx)(n.code,{children:`width`}),` đã được cập nhật.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`bù-đắp-cuộn-động-trong-css`,children:`Bù đắp cuộn động trong CSS`}),`
`,(0,c.jsx)(n.p,{children:`Sử dụng chiều rộng phản hồi để tạo biến CSS bù đắp cho khoảng cách khi thanh cuộn bị chặn.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<template>
  <div :style="style" class="container">
    Nội dung với bù đắp động
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

// Chỉ tính toán biến sau khi chiều rộng đã được xác định
const style = computed(() => ({
  '--scrollbar-width': scrollbar.is.value ? \`\${scrollbar.width.value}px\` : '0px'
}))
<\/script>

<style scoped>
.container {
  /* Ví dụ sử dụng cho lề phải */
  padding-right: var(--scrollbar-width);
}
</style>
`})}),`
`,(0,c.jsx)(n.h3,{id:`theo-dõi-loại-thanh-cuộn`,children:`Theo dõi loại thanh cuộn`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { watch } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

watch(() => scrollbar.is.value, (ready) => {
  if (ready) {
    if (scrollbar.item.value) {
      console.log('Thanh cuộn hệ thống/tự động ẩn đang được sử dụng')
    } else {
      console.log(\`Thanh cuộn tiêu chuẩn với chiều rộng \${scrollbar.width.value}px\`)
    }
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};