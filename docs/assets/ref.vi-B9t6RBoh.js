import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/# Lớp Phản hồi (Ref)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-phản-hồi-ref`,children:`Lớp Phản hồi (Ref)`}),`
`,(0,c.jsxs)(n.p,{children:[`Các phiên bản phản hồi của các lớp cơ bản được tạo ra để tích hợp liền mạch với `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-đặc-điểm`,children:`Các đặc điểm`}),`
`,(0,c.jsxs)(n.p,{children:[`Ý tưởng cốt lõi là chính lớp đó sẽ giám sát các thay đổi dữ liệu đầu vào và cung cấp `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` sẵn sàng sử dụng cho các mẫu. Điều này loại bỏ nhu cầu tính toán lại các giá trị theo cách thủ công khi địa phương hoặc các biến đầu vào thay đổi.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-lớp-hiện-có`,children:`Các lớp hiện có`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`GeoRef`}),` — Quản lý địa phương toàn cục (quốc gia, ngôn ngữ) và trạng thái phản hồi của nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DatetimeRef`}),` — Thao tác ngày tháng phản hồi, định dạng và tính toán thành phần thời gian.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` — Định dạng phản hồi các con số, tiền tệ, danh sách và thời gian tương đối.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`EventRef`}),` — Quản lý trình lắng nghe sự kiện với khả năng tự động ràng buộc với các phần tử phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`GeoFlagRef`}),` — Truy xuất phản hồi các liên kết cờ quốc gia và danh sách các quốc gia.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-làm-việc-với-chúng`,children:`Cách làm việc với chúng`}),`
`,(0,c.jsxs)(n.p,{children:[`Khác với các lớp cơ bản từ `,(0,c.jsx)(n.code,{children:`functional-basic`}),` làm việc với các giá trị trực tiếp, các lớp có hậu tố `,(0,c.jsx)(n.code,{children:`Ref`}),` chấp nhận cả dữ liệu thô và `,(0,c.jsx)(n.code,{children:`ref`}),` làm đầu vào. Bên trong, chúng thiết lập các trình quan sát (`,(0,c.jsx)(n.code,{children:`watch`}),`) sao cho bất kỳ thay đổi nào đối với nguồn sẽ tự động cập nhật tất cả các thuộc tính tính toán phụ thuộc.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Trạng thái ứng dụng toàn cục được quản lý thông qua lớp `,(0,c.jsx)(n.code,{children:`GeoRef`}),` tĩnh. Các phương thức của nó trả về dữ liệu phản hồi về quốc gia và ngôn ngữ hiện tại, và việc gọi `,(0,c.jsx)(n.code,{children:`GeoRef.set()`}),` sẽ ngay lập tức cập nhật định dạng trên tất cả các lớp khác, chẳng hạn như `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` или `,(0,c.jsx)(n.code,{children:`DatetimeRef`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { GeoRef, DatetimeRef, GeoIntlRef } from '@dxtmisha/functional'

// 1. Quản lý toàn cục (GeoRef)
const country = GeoRef.getCountry() // Luôn cập nhật mã quốc gia

// 2. Bộ bọc ngày phản hồi (DatetimeRef)
const dateRaw = ref('2024-03-21')
const date = new DatetimeRef(dateRaw)
const displayDate = date.locale() // Tự động cập nhật khi dateRaw hoặc địa phương thay đổi

// 3. Định dạng tức thì (GeoIntlRef)
const price = ref(12500)
const intl = new GeoIntlRef()
const displayPrice = intl.currency(price, 'VND')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Cách tiếp cận tương tự được sử dụng trong `,(0,c.jsx)(n.code,{children:`EventRef`}),` để xử lý các sự kiện. Nếu phần tử mục tiêu (`,(0,c.jsx)(n.code,{children:`ref`}),`) thay đổi hoặc tạm thời trở thành `,(0,c.jsx)(n.code,{children:`null`}),`, lớp sẽ tự động gắn lại các trình lặp một khi phần tử xuất hiện lại trong DOM. Bạn không cần phải theo dõi chu kỳ sống của phần tử theo cách thủ công — chỉ cần truyền một tham chiếu đến đối tượng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { EventRef } from '@dxtmisha/functional'

const buttonRef = ref(null)

// Trình lắng nghe sẽ tự tìm thấy nút một khi Vue ràng buộc nó với buttonRef
new EventRef(buttonRef, null, 'click', () => {
  console.log('Nhấp chuột được xử lý một cách phản hồi')
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};