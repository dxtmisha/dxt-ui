import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional/Classes/EventRef - Trình quản lý sự kiện phản ứng"}),`
`,n.jsx(e.h1,{id:"lớp-eventref",children:"Lớp EventRef"}),`
`,n.jsxs(e.p,{children:["Trình quản lý trình nghe sự kiện có tính phản ứng, giúp đơn giản hóa việc gắn và gỡ bỏ các sự kiện cho các thành phần DOM hoặc đối tượng ",n.jsx(e.code,{children:"window"}),". Nó tự động cập nhật các đăng ký khi thành phần mục tiêu (được cung cấp dưới dạng Vue ",n.jsx(e.code,{children:"Ref"}),") thay đổi."]}),`
`,n.jsx(e.p,{children:"Bao gồm việc tự động liên kết lại các trình nghe trong quá trình thay đổi thành phần động và tích hợp hoàn toàn với vòng đời của Vue."}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính phản ứng"})," — tự động cập nhật khi thành phần ",n.jsx(e.code,{children:"Ref"})," thay đổi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hỗ trợ đa loại"})," — nghe nhiều loại sự kiện cùng một lúc."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tự động dọn dẹp"})," — quản lý bộ nhớ hiệu quả thông qua hệ thống phản ứng."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Tạo một thực thể ",n.jsx(e.code,{children:"EventRef"})," mới. Lớp này tự động đồng bộ hóa các trình lắng nghe sự kiện với trạng thái của Vue ",n.jsx(e.code,{children:"ref"})," được truyền vào. Nếu phần tử đích thay đổi, ",n.jsx(e.code,{children:"EventRef"})," sẽ tự động liên kết lại sự kiện."]}),`
`,n.jsx(e.h3,{id:"ràng-buộc-generic-generic-constraints",children:"Ràng buộc Generic (Generic Constraints)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"E extends ElementOrWindow"})," — kiểu của phần tử đích (ví dụ: ",n.jsx(e.code,{children:"HTMLElement"}),", ",n.jsx(e.code,{children:"Window"}),", hoặc ",n.jsx(e.code,{children:"Document"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"O extends Event"})," — kiểu của đối tượng sự kiện (ví dụ: ",n.jsx(e.code,{children:"MouseEvent"}),", ",n.jsx(e.code,{children:"KeyboardEvent"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"D extends Record<string, any>"})," — kiểu dữ liệu tùy chỉnh (",n.jsx(e.code,{children:"detail"}),") gắn liền với sự kiện."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementSelector?: RefOrNormal<ElementOrString<E> | undefined>"})," — phần tử đích hoặc bộ chọn (có thể ở dạng phản ứng)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>"})," — phần tử điều khiển. Nếu phần tử này bị xóa khỏi DOM, việc lắng nghe sẽ dừng lại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: string | string[] = ['click']"})," — loại sự kiện hoặc mảng các loại sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener?: EventListenerDetail<O, D>"})," — hàm xử lý."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: EventOptions"})," — các tùy chọn trình lắng nghe (",n.jsx(e.code,{children:"capture"}),", ",n.jsx(e.code,{children:"passive"}),", ",n.jsx(e.code,{children:"once"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"detail?: D"})," — dữ liệu bổ sung của sự kiện."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { EventRef } from '@dxtmisha/functional'
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Khởi tạo đơn giản với Ref
const buttonRef = ref<HTMLButtonElement>()
const event = new EventRef(buttonRef, undefined, 'click', (e) => {
  console.log('Nút đã được nhấn:', e.target)
})

// 2. Sử dụng nhiều sự kiện và tùy chọn
const scrollEvent = new EventRef(
  window, 
  undefined, 
  ['scroll', 'resize'], 
  () => console.log('Cửa sổ đã thay đổi'),
  { passive: true }
)

onMounted(() => {
  event.start()
  scrollEvent.start()
})

onUnmounted(() => {
  event.stop()
  scrollEvent.stop()
})
`})}),`
`,n.jsx(e.h2,{id:"vòng-đời--điều-khiển",children:"Vòng đời & Điều khiển"}),`
`,n.jsx(e.p,{children:"Các phương thức để kiểm soát hoạt động của trình lắng nghe."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"start(): this"})," — Kích hoạt lắng nghe sự kiện. Nếu phần tử đích (",n.jsx(e.code,{children:"ref"}),") chưa được gắn kết (mount), các trình lắng nghe sẽ được thêm tự động ngay khi nó xuất hiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"stop(): this"})," — Hủy kích hoạt lắng nghe và xóa tất cả các hàm xử lý khỏi phần tử hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toggle(activity: boolean): this"})," — Bật hoặc tắt tính năng lắng nghe dựa trên giá trị được cung cấp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reset(): this"})," — Khởi động lại quá trình lắng nghe. Nó được gọi tự động khi các tham số chính (loại sự kiện, tùy chọn, v.v.) thay đổi."]}),`
`]}),`
`,n.jsx(e.h2,{id:"trạng-thái--truy-xuất-dữ-liệu",children:"Trạng thái & Truy xuất dữ liệu"}),`
`,n.jsx(e.p,{children:"Các phương thức để kiểm tra trạng thái hiện tại của đối tượng."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isActive(): boolean"})," — Trả về ",n.jsx(e.code,{children:"true"})," nếu việc lắng nghe sự kiện hiện đang hoạt động."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getElement(): E | undefined"})," — Trả về phần tử DOM hoặc đối tượng hiện tại mà các trình lắng nghe được thiết lập."]}),`
`]}),`
`,n.jsx(e.h2,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsx(e.p,{children:"Tất cả các phương thức trong nhóm này đều hỗ trợ chuỗi phương thức (chaining) và tự động cập nhật các trình lắng nghe đang hoạt động."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setElement(element: ElementOrString): this"})," — Thay đổi động phần tử đích. Khi được sử dụng trong ",n.jsx(e.code,{children:"EventRef"}),", nó cũng hỗ trợ ",n.jsx(e.code,{children:"ref"})," phản ứng."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setElementControl(element: ElementOrString): this"})," — Thiết lập một phần tử điều khiển. Nếu phần tử này bị xóa khỏi DOM, việc lắng nghe sự kiện trên phần tử chính sẽ tự động dừng lại (bảo vệ chống rò rỉ bộ nhớ)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setType(type: string | string[]): this"})," — Cập nhật các loại sự kiện được lắng nghe (ví dụ: thay đổi từ ",n.jsx(e.code,{children:"click"})," thành ",n.jsx(e.code,{children:"dblclick"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setListener(listener: Function): this"})," — Thay đổi hàm xử lý sự kiện mà không cần khởi động lại toàn bộ chu kỳ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setOptions(options: EventOptions): this"})," — Cập nhật các tùy chọn của trình lắng nghe (",n.jsx(e.code,{children:"capture"}),", ",n.jsx(e.code,{children:"passive"}),", ",n.jsx(e.code,{children:"once"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setDetail(detail: object): this"})," — Cập nhật dữ liệu tùy chỉnh có sẵn bên trong trình xử lý."]}),`
`]}),`
`,n.jsx(e.h2,{id:"hành-động",children:"Hành động"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dispatch(detail?: object): this"})," — Kích hoạt sự kiện trên phần tử đích bằng lập trình. Nếu dữ liệu được truyền trong ",n.jsx(e.code,{children:"detail"}),", nó sẽ được ưu tiên hơn dữ liệu được thiết lập thông qua ",n.jsx(e.code,{children:"setDetail"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"các-sự-kiện-đặc-biệt",children:"Các sự kiện đặc biệt"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"EventRef"})," (thông qua lớp cơ sở ",n.jsx(e.code,{children:"EventItem"}),") cung cấp khả năng xử lý nâng cao cho một số loại sự kiện nhất định:"]}),`
`,n.jsx(e.h3,{id:"resize",children:n.jsx(e.code,{children:"resize"})}),`
`,n.jsxs(e.p,{children:["Không giống như sự kiện ",n.jsx(e.code,{children:"resize"})," tiêu chuẩn chỉ hoạt động trên đối tượng ",n.jsx(e.code,{children:"window"}),", ở đây nó sử dụng ",n.jsx(e.code,{children:"ResizeObserver"}),". Điều này cho phép theo dõi các thay đổi kích thước cho bất kỳ phần tử DOM cụ thể nào."]}),`
`,n.jsx(e.h3,{id:"scroll-sync",children:n.jsx(e.code,{children:"scroll-sync"})}),`
`,n.jsxs(e.p,{children:["Phiên bản tối ưu hóa của sự kiện cuộn. Nó sử dụng ",n.jsx(e.code,{children:"requestAnimationFrame"}),' để đồng bộ hóa việc gọi hàm xử lý với tốc độ làm mới màn hình, ngăn chặn hiện tượng "giật" trong các tính toán nặng trong quá trình cuộn.']})]})}function x(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(h,{...i})}):h(i)}export{x as default};
