import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Classes/ScrollbarWidthRef - Trình quản lý độ rộng thanh cuộn"}),`
`,n.jsx(h.h1,{id:"lớp-scrollbarwidthref",children:"Lớp ScrollbarWidthRef"}),`
`,n.jsx(h.p,{children:"Một lớp tiện ích phản ứng để xác định và quản lý độ rộng thanh cuộn (scrollbar) của trình duyệt. Nó sử dụng một cơ chế phát hiện và cung cấp các thuộc tính phản ứng để kiểm tra xem độ rộng thanh cuộn đã được tính toán chưa và liệu nó có tồn tại hay không."}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tính phản ứng"})," — sử dụng Vue ",n.jsx(h.code,{children:"ref"})," và ",n.jsx(h.code,{children:"computed"})," để cung cấp trạng thái thanh cuộn."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phát hiện bất đồng bộ"})," — tự động tính toán độ rộng khi khởi tạo thông qua ",n.jsx(h.code,{children:"ScrollbarWidth.is()"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Nhẹ nhàng"})," — kích thước tối thiểu, hữu ích cho các tính toán bố cục phụ thuộc vào sự hiện diện của thanh cuộn."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Tạo một thực thể ",n.jsx(h.code,{children:"ScrollbarWidthRef"})," mới. Khi được tạo, lớp sẽ bắt đầu một quy trình bất đồng bộ để xác định độ rộng thanh cuộn của trình duyệt. Kết quả sẽ được ghi vào các thuộc tính phản ứng ngay khi có sẵn."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'
import { watch } from 'vue'

const scrollbar = new ScrollbarWidthRef()

// Theo dõi sự sẵn sàng của dữ liệu
watch(scrollbar.is, (isReady) => {
  if (isReady) {
    console.log('Độ rộng thanh cuộn đã được xác định:', scrollbar.item.value)
  }
})
`})}),`
`,n.jsx(h.h2,{id:"thuộc-tính",children:"Thuộc tính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"item: Ref<boolean | undefined>"})," — Một mục phản ứng chứa trạng thái hiện diện của thanh cuộn. Giá trị ",n.jsx(h.code,{children:"true"})," có nghĩa là thanh cuộn chiếm không gian trong bố cục."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"is: ComputedRef<boolean>"})," — Một thuộc tính computed kiểm tra xem việc tính toán độ rộng thanh cuộn đã hoàn tất chưa."]}),`
`]})]})}function u(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{u as default};
