import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/EventItem - Quản lý sự kiện nâng cao`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-eventitem`,children:`Lớp EventItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Một vỏ bọc mạnh mẽ để quản lý các trình lắng nghe sự kiện trên các phần tử DOM hoặc đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`. Lớp này đơn giản hóa việc làm việc với vòng đời sự kiện (thêm, xóa, chuyển đổi), hỗ trợ tự động kiểm tra sự hiện diện của phần tử trong DOM và cung cấp tối ưu hóa tích hợp cho các sự kiện nặng như `,(0,c.jsx)(n.code,{children:`resize`}),` và `,(0,c.jsx)(n.code,{children:`scroll`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý vòng đời`}),` — các phương thức `,(0,c.jsx)(n.code,{children:`start`}),`, `,(0,c.jsx)(n.code,{children:`stop`}),`, `,(0,c.jsx)(n.code,{children:`toggle`}),` và `,(0,c.jsx)(n.code,{children:`reset`}),` thuận tiện để kiểm soát việc lắng nghe sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn DOM`}),` — tự động kiểm tra `,(0,c.jsx)(n.code,{children:`isInDom`}),` trước khi thực thi trình xử lý (có thể cấu hình phần tử điều khiển).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ ResizeObserver`}),` — xử lý tích hợp sự kiện `,(0,c.jsx)(n.code,{children:`resize`}),` cho bất kỳ phần tử HTML nào thông qua API hiện đại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa cuộn`}),` — kiểu sự kiện `,(0,c.jsx)(n.code,{children:`scroll-sync`}),` đặc biệt sử dụng `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` cho hiệu suất cao.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chaining và linh hoạt`}),` — hỗ trợ nối chuỗi cuộc gọi và thay đổi động đích, kiểu hoặc trình xử lý sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dữ liệu tùy chỉnh`}),` — khả năng truyền và điều phối dữ liệu tùy chỉnh thông qua `,(0,c.jsx)(n.code,{children:`CustomEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi constructor `,(0,c.jsx)(n.code,{children:`EventItem(elementSelector, type, listener, options, detail)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`các-ràng-buộc-generic-generic-constraints`,children:`Các ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Để đảm bảo kiểu nghiêm ngặt, lớp hỗ trợ các generic sau:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends ElementOrWindow`}),` — Kiểu phần tử mà các sự kiện được lắng nghe.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends Event`}),` — Kiểu của đối tượng sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`D extends Record<string, any>`}),` — Cấu trúc của dữ liệu bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelector?: ElementOrString<E>`}),` — phần tử đích mà trình lắng nghe được đính kèm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | string[] = 'click'`}),` — kiểu sự kiện, mảng các kiểu hoặc các kiểu đặc biệt (`,(0,c.jsx)(n.code,{children:`'resize'`}),`, `,(0,c.jsx)(n.code,{children:`'scroll-sync'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: EventListenerDetail<O, D>`}),` — hàm xử lý sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: EventOptions`}),` — các tùy chọn `,(0,c.jsx)(n.code,{children:`addEventListener`}),` tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`detail?: D`}),` — dữ liệu tùy chỉnh sẽ có sẵn trong trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Khởi tạo cơ bản
const myEvent = new EventItem(
  '.my-button', 
  'click', 
  (event) => console.log('Sự kiện đã kích hoạt:', event.type)
)

// 2. Sử dụng generic cho kiểu nghiêm ngặt
interface MyData { id: number }
const customEvent = new EventItem<Window, MouseEvent, MyData>(
  window,
  'mousedown',
  (event, detail) => {
    console.log('Nhấp vào cửa sổ, ID dữ liệu:', detail?.id)
  },
  { passive: true },
  { id: 42 }
)

// 3. Kích hoạt lắng nghe
myEvent.start()
customEvent.start()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isActive(): boolean`}),` — Kiểm tra xem việc lắng nghe sự kiện hiện có đang hoạt động hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getElement(): E | undefined`}),` — Trả về phần tử đích hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các phương thức trong nhóm này đều hỗ trợ nối chuỗi và tự động gọi `,(0,c.jsx)(n.code,{children:`reset()`}),` nếu sự kiện đang hoạt động.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElement(elementSelector?: ElementOrString): this`}),` — Thay đổi phần tử đích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElementControl(elementSelector?: ElementOrString): this`}),` — Thiết lập phần tử điều khiển (nếu nó không có trong DOM, sự kiện sẽ không kích hoạt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: string | string[]): this`}),` — Thay đổi kiểu sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setListener(listener: Function): this`}),` — Thay đổi hàm xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options?: EventOptions): this`}),` — Thay đổi các tham số trình lắng nghe.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDetail(detail?: D): this`}),` — Thay đổi dữ liệu sự kiện tùy chỉnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý`,children:`Quản lý`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`start(): this`}),` — Bắt đầu lắng nghe sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): this`}),` — Dừng lắng nghe sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(activity: boolean): this`}),` — Bật hoặc tắt lắng nghe tùy thuộc vào cờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Khởi động lại sự kiện (hữu ích sau khi thay đổi cài đặt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dispatch(detail?: D): this`}),` — Kích hoạt sự kiện trên phần tử đích với việc truyền dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`elementorwindow`,children:(0,c.jsx)(n.code,{children:`ElementOrWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phần tử mà sự kiện có thể được đính kèm: `,(0,c.jsx)(n.code,{children:`HTMLElement | Window`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`elementorstringe`,children:(0,c.jsx)(n.code,{children:`ElementOrString<E>`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểu để truyền một phần tử hoặc bộ chọn của nó: `,(0,c.jsx)(n.code,{children:`E | string`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`eventlistenerdetailo-d`,children:(0,c.jsx)(n.code,{children:`EventListenerDetail<O, D>`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm lắng nghe sự kiện: `,(0,c.jsx)(n.code,{children:`(event: O, detail?: D) => void`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`eventoptions`,children:(0,c.jsx)(n.code,{children:`EventOptions`})}),`
`,(0,c.jsxs)(n.p,{children:[`Các tùy chọn lắng nghe: `,(0,c.jsx)(n.code,{children:`AddEventListenerOptions | boolean | undefined`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`eventactivityiteme`,children:(0,c.jsx)(n.code,{children:`EventActivityItem<E>`})}),`
`,(0,c.jsx)(n.p,{children:`Giao diện nội bộ để theo dõi các trình lắng nghe đang hoạt động.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E | undefined`}),` — Phần tử đích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Kiểu sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: (event: any) => void`}),` — Hàm đang hoạt động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`observer?: ResizeObserver`}),` — Thực thể observer (cho `,(0,c.jsx)(n.code,{children:`resize`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-sự-kiện-đặc-biệt`,children:`Các sự kiện đặc biệt`}),`
`,(0,c.jsx)(n.h3,{id:`resize`,children:(0,c.jsx)(n.code,{children:`resize`})}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu kiểu sự kiện được đặt thành `,(0,c.jsx)(n.code,{children:`resize`}),`, lớp sẽ tự động sử dụng `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),` để theo dõi những thay đổi về kích thước của phần tử (ngay cả khi đó không phải là `,(0,c.jsx)(n.code,{children:`window`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`scroll-sync`,children:(0,c.jsx)(n.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một kiểu đặc biệt cho việc cuộn tối ưu hóa. Bên trong sử dụng `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),`, ngăn chặn các cuộc gọi trình xử lý không cần thiết và tăng hiệu suất.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`chuyển-đổi-phần-tử-động`,children:`Chuyển đổi phần tử động`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Tọa độ:', e.clientX)
})

tracker.start()

// ... chuyển sang phần tử khác sau đó
tracker.setElement('.item-2')
`})}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-customevent-với-dữ-liệu`,children:`Sử dụng CustomEvent với dữ liệu`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Dữ liệu đã nhận:', e.detail) // dữ liệu từ CustomEvent
})

emitter.start()

// Điều phối sự kiện
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};