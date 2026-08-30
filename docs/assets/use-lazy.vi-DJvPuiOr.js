import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/8. Tải Lười (Lazy Loading)`}),`
`,(0,c.jsx)(t.h1,{id:`theo-dõi-tầm-nhìn-và-tải-lười-phần-tử`,children:`Theo Dõi Tầm Nhìn Và Tải Lười Phần Tử`}),`
`,(0,c.jsxs)(t.p,{children:[`Bộ nhóm các hook này mang đến một lớp bọc hiệu năng vượt trội để làm việc với API `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` nguyên bản của trình duyệt. Chúng được dùng chủ yếu để thu nhận sự kiện khi phần tử DOM bắt đầu đi vào khung hình nhìn thấy (hoặc trong một khoảng từ màn hình được định trước).`]}),`
`,(0,c.jsx)(t.p,{children:`Các ứng dụng thực tiễn điển hình:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tải lười (Lazy load) hình ảnh`}),`: Chỉ tải tài nguyên đồ họa nặng khi người dùng chuẩn bị cuộn tới sát chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cuộn vô tận (Infinite Scroll)`}),`: Tự động nạp thêm dữ liệu danh sách ngay lúc người dùng lướt đến điểm cuối mốc cuộn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Diễn hoạt đồ họa (Animations)`}),`: Kích hoạt các hiệu ứng đúng ngay khi phần tử DOM xuất hiện trên tầm mắt người quan sát.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`những-đặc-tính-khác-biệt-và-nên-dùng-hàm-nào`,children:`Những Đặc Tính Khác Biệt Và Nên Dùng Hàm Nào?`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`}),` (Khuyên dùng)`]}),`: Đây là một hook thông minh. Việc duy nhất nó làm là `,(0,c.jsx)(t.strong,{children:`tái sử dụng`}),` chính xác một đối tượng `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` cho tất thảy phần tử thẻ nào khai báo thông số `,(0,c.jsx)(t.code,{children:`rootMargin`}),` tương đồng. Phép phân luồng ngầm này giảm thiểu khổng lồ bộ nhớ và sức mạnh CPU. Lấy ví dụ bạn đang tải một danh sách 1,000 thẻ — hệ thống chỉ khởi tạo bảo vệ đúng 1 cái quan sát (thay vì lạm phát lên 1,000).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`useLazyRef`}),` (Cho thiết lập tùy chọn sâu)`]}),`: Một dạng hàm base nguyên thủy cấu thành từ đầu. Tự sinh ra một `,(0,c.jsx)(t.strong,{children:`IntersectionObserver duy nhất`}),` đi theo yêu cầu cục bộ của bạn. Cực kì lý tưởng cho lúc bạn hứng những thông số thiết lập dằn vặt (như mảng array cho phép đo `,(0,c.jsx)(t.code,{children:`threshold`}),`, tùy sửa `,(0,c.jsx)(t.code,{children:`root`}),`) hay thao tác dập quyền tuyệt đối hủy `,(0,c.jsx)(t.code,{children:`disconnect`}),` trình quan sát.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-cách-sử-dụng-ngắn-gọn`,children:`Ví Dụ Cách Sử Dụng Ngắn Gọn`}),`
`,(0,c.jsxs)(t.h3,{id:`1-phủ-sóng-mọi-mặt-trận-uselazyitembymarginref`,children:[`1. Phủ Sóng Mọi Mặt Trận (`,(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Biện pháp căn bản nhất. Định đoạn đối tượng Ref của bạn gửi kèm biên giới khung viền (rootMargin - ví dụ cách bao xa thì trạng thái nảy lên true). Kết quả trả về một biến trạng thái phản ứng boolean.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const imageRef = ref<HTMLElement>()

// Chỉ dấu '128px' ám chỉ là hệ biến status sẽ lật sang True
// trước lúc bức ảnh xê dịch tiến tới sát màn hình đúng 128px
const { lazyItemStatus } = useLazyItemByMarginRef(imageRef, '128px')
<\/script>

<template>
  <!-- Render thứ đồ nặng nề một lúc khi đã tới quá gần -->
  <img 
    ref="imageRef" 
    :src="lazyItemStatus ? 'heavy-image.jpg' : 'placeholder.jpg'" 
  />
</template>
`})}),`
`,(0,c.jsxs)(t.h3,{id:`2-thu-trắc-liên-lẻ-uselazyref`,children:[`2. Thu Trắc Liên Lẻ (`,(0,c.jsx)(t.code,{children:`useLazyRef`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Giáp nối vào khi thông số API `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` trở nên cần tính chi li hơn.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const myContainer = ref<HTMLElement>()

// 1. Dựng trạm dò tìm đặc quyền 
const observer = useLazyRef({
  root: document.getElementById('scrollable-area'),
  rootMargin: '0px',
  threshold: [0, 0.5, 1.0] // Báo tín hiệu ở các mốc 0, 50% và hiển thị 100% lần
})

// 2. Bắt nó nhìn theo một mục tiêu
const isVisible = observer.addLazyItem(myContainer)

// 3. Lấy trực tiếp đối tượng dữ liệu đồ sộ của IntersectionObserverEntry:
// observer.getItem(myContainer.value)

// 4. Giải tán và tước quyền thủ công (khi thực sự cần thiết):
// observer.removeLazyItem(myContainer.value)
// observer.disconnectLazy()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};