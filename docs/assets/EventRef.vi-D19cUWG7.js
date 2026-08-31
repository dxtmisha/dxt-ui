import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/EventRef - Trình quản lý sự kiện phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-eventref`,children:`Lớp EventRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Trình quản lý trình nghe sự kiện có tính phản ứng, giúp đơn giản hóa việc gắn và gỡ bỏ các sự kiện cho các thành phần DOM hoặc đối tượng `,(0,c.jsx)(t.code,{children:`window`}),`. Nó tự động cập nhật các đăng ký khi thành phần mục tiêu (được cung cấp dưới dạng Vue `,(0,c.jsx)(t.code,{children:`Ref`}),`) thay đổi.`]}),`
`,(0,c.jsx)(t.p,{children:`Bao gồm việc tự động liên kết lại các trình nghe trong quá trình thay đổi thành phần động và tích hợp hoàn toàn với vòng đời của Vue.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính phản ứng`}),` — tự động cập nhật khi thành phần `,(0,c.jsx)(t.code,{children:`Ref`}),` thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ đa loại`}),` — nghe nhiều loại sự kiện cùng một lúc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động dọn dẹp`}),` — quản lý bộ nhớ hiệu quả thông qua hệ thống phản ứng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thực thể `,(0,c.jsx)(t.code,{children:`EventRef`}),` mới. Lớp này tự động đồng bộ hóa các trình lắng nghe sự kiện với trạng thái của Vue `,(0,c.jsx)(t.code,{children:`ref`}),` được truyền vào. Nếu phần tử đích thay đổi, `,(0,c.jsx)(t.code,{children:`EventRef`}),` sẽ tự động liên kết lại sự kiện.`]}),`
`,(0,c.jsx)(t.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`E extends ElementOrWindow`}),` — kiểu của phần tử đích (ví dụ: `,(0,c.jsx)(t.code,{children:`HTMLElement`}),`, `,(0,c.jsx)(t.code,{children:`Window`}),`, hoặc `,(0,c.jsx)(t.code,{children:`Document`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends Event`}),` — kiểu của đối tượng sự kiện (ví dụ: `,(0,c.jsx)(t.code,{children:`MouseEvent`}),`, `,(0,c.jsx)(t.code,{children:`KeyboardEvent`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`D extends Record<string, any>`}),` — kiểu dữ liệu tùy chỉnh (`,(0,c.jsx)(t.code,{children:`detail`}),`) gắn liền với sự kiện.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — phần tử đích hoặc bộ chọn (có thể ở dạng phản ứng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — phần tử điều khiển. Nếu phần tử này bị xóa khỏi DOM, việc lắng nghe sẽ dừng lại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = ['click']`}),` — loại sự kiện hoặc mảng các loại sự kiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — hàm xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — các tùy chọn trình lắng nghe (`,(0,c.jsx)(t.code,{children:`capture`}),`, `,(0,c.jsx)(t.code,{children:`passive`}),`, `,(0,c.jsx)(t.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — dữ liệu bổ sung của sự kiện.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`vòng-đời--điều-khiển`,children:`Vòng đời & Điều khiển`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức để kiểm soát hoạt động của trình lắng nghe.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`start(): this`}),` — Kích hoạt lắng nghe sự kiện. Nếu phần tử đích (`,(0,c.jsx)(t.code,{children:`ref`}),`) chưa được gắn kết (mount), các trình lắng nghe sẽ được thêm tự động ngay khi nó xuất hiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`stop(): this`}),` — Hủy kích hoạt lắng nghe và xóa tất cả các hàm xử lý khỏi phần tử hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`}),` — Bật hoặc tắt tính năng lắng nghe dựa trên giá trị được cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Khởi động lại quá trình lắng nghe. Nó được gọi tự động khi các tham số chính (loại sự kiện, tùy chọn, v.v.) thay đổi.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`trạng-thái--truy-xuất-dữ-liệu`,children:`Trạng thái & Truy xuất dữ liệu`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức để kiểm tra trạng thái hiện tại của đối tượng.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu việc lắng nghe sự kiện hiện đang hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Trả về phần tử DOM hoặc đối tượng hiện tại mà các trình lắng nghe được thiết lập.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsx)(t.p,{children:`Tất cả các phương thức trong nhóm này đều hỗ trợ chuỗi phương thức (chaining) và tự động cập nhật các trình lắng nghe đang hoạt động.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElement(element: ElementOrString): this`}),` — Thay đổi động phần tử đích. Khi được sử dụng trong `,(0,c.jsx)(t.code,{children:`EventRef`}),`, nó cũng hỗ trợ `,(0,c.jsx)(t.code,{children:`ref`}),` phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setElementControl(element: ElementOrString): this`}),` — Thiết lập một phần tử điều khiển. Nếu phần tử này bị xóa khỏi DOM, việc lắng nghe sự kiện trên phần tử chính sẽ tự động dừng lại (bảo vệ chống rò rỉ bộ nhớ).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Cập nhật các loại sự kiện được lắng nghe (ví dụ: thay đổi từ `,(0,c.jsx)(t.code,{children:`click`}),` thành `,(0,c.jsx)(t.code,{children:`dblclick`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: Function): this`}),` — Thay đổi hàm xử lý sự kiện mà không cần khởi động lại toàn bộ chu kỳ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setOptions(options: EventOptions): this`}),` — Cập nhật các tùy chọn của trình lắng nghe (`,(0,c.jsx)(t.code,{children:`capture`}),`, `,(0,c.jsx)(t.code,{children:`passive`}),`, `,(0,c.jsx)(t.code,{children:`once`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail: object): this`}),` — Cập nhật dữ liệu tùy chỉnh có sẵn bên trong trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dispatch(detail?: object): this`}),` — Kích hoạt sự kiện trên phần tử đích bằng lập trình. Nếu dữ liệu được truyền trong `,(0,c.jsx)(t.code,{children:`detail`}),`, nó sẽ được ưu tiên hơn dữ liệu được thiết lập thông qua `,(0,c.jsx)(t.code,{children:`setDetail`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-sự-kiện-đặc-biệt`,children:`Các sự kiện đặc biệt`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`EventRef`}),` (thông qua lớp cơ sở `,(0,c.jsx)(t.code,{children:`EventItem`}),`) cung cấp khả năng xử lý nâng cao cho một số loại sự kiện nhất định:`]}),`
`,(0,c.jsx)(t.h3,{id:`resize`,children:(0,c.jsx)(t.code,{children:`resize`})}),`
`,(0,c.jsxs)(t.p,{children:[`Không giống như sự kiện `,(0,c.jsx)(t.code,{children:`resize`}),` tiêu chuẩn chỉ hoạt động trên đối tượng `,(0,c.jsx)(t.code,{children:`window`}),`, ở đây nó sử dụng `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),`. Điều này cho phép theo dõi các thay đổi kích thước cho bất kỳ phần tử DOM cụ thể nào.`]}),`
`,(0,c.jsx)(t.h3,{id:`scroll-sync`,children:(0,c.jsx)(t.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phiên bản tối ưu hóa của sự kiện cuộn. Nó sử dụng `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` để đồng bộ hóa việc gọi hàm xử lý với tốc độ làm mới màn hình, ngăn chặn hiện tượng "giật" trong các tính toán nặng trong quá trình cuộn.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};