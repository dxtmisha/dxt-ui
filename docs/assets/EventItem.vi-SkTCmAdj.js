import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/EventItem - Quản lý Sự kiện Nâng cao`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-eventitem`,children:`Lớp EventItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Một bộ khung (wrapper) mạnh mẽ để quản lý các trình lắng nghe sự kiện (event listeners) trên các phần tử DOM hoặc đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`. Lớp này đơn giản hóa vòng đời của sự kiện (thêm, xóa, bật/tắt), hỗ trợ kiểm tra sự tồn tại của phần tử trong DOM và cung cấp các tối ưu hóa tích hợp cho các sự kiện nặng như `,(0,c.jsx)(n.code,{children:`resize`}),` và `,(0,c.jsx)(n.code,{children:`scroll`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý vòng đời`}),` — các phương thức `,(0,c.jsx)(n.code,{children:`start`}),`, `,(0,c.jsx)(n.code,{children:`stop`}),`, `,(0,c.jsx)(n.code,{children:`toggle`}),` và `,(0,c.jsx)(n.code,{children:`reset`}),` tiện lợi để kiểm soát chính xác việc lắng nghe sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn DOM`}),` — tự động kiểm tra `,(0,c.jsx)(n.code,{children:`isInDom`}),` trước khi thực hiện trình xử lý (có thể cấu hình phần tử kiểm soát).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ ResizeObserver`}),` — xử lý tích hợp sự kiện `,(0,c.jsx)(n.code,{children:`resize`}),` cho bất kỳ phần tử HTML nào bằng API hiện đại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa cuộn`}),` — loại sự kiện đặc biệt `,(0,c.jsx)(n.code,{children:`scroll-sync`}),` sử dụng `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` để đạt hiệu suất cao.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuỗi lệnh và linh hoạt`}),` — hỗ trợ chuỗi lệnh (chaining) và thay đổi động mục tiêu, loại hoặc trình xử lý sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dữ liệu tùy chỉnh`}),` — khả năng truyền và phát tán dữ liệu tùy chỉnh thông qua `,(0,c.jsx)(n.code,{children:`CustomEvent`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`EventItem(elementSelector, type, listener, options, detail)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`ràng-buộc-generic-generic-constraints`,children:`Ràng buộc Generic (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Để đảm bảo định kiểu nghiêm ngặt, lớp này hỗ trợ các generic sau:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`E extends ElementOrWindow`}),` — Kiểu của phần tử nơi các sự kiện được lắng nghe.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends Event`}),` — Kiểu đối tượng sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`D extends Record<string, any>`}),` — Cấu trúc dữ liệu bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`elementSelector?: ElementOrString<E>`}),` — phần tử đích nơi trình lắng nghe được gắn vào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string | string[] = 'click'`}),` — loại sự kiện, một mảng các loại hoặc các loại đặc biệt (`,(0,c.jsx)(n.code,{children:`'resize'`}),`, `,(0,c.jsx)(n.code,{children:`'scroll-sync'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listener?: EventListenerDetail<O, D>`}),` — hàm xử lý sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: EventOptions`}),` — các tùy chọn `,(0,c.jsx)(n.code,{children:`addEventListener`}),` tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`detail?: D`}),` — dữ liệu tùy chỉnh sẽ có sẵn trong trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { EventItem } from '@dxtmisha/functional-basic'

// 1. Khởi tạo đơn giản
const myEvent = new EventItem(
  '.my-button', 
  'click', 
  (event) => console.log('Sự kiện được kích hoạt:', event.type)
)

// 2. Sử dụng generic để định kiểu nghiêm ngặt
interface MyData { id: number }
const customEvent = new EventItem<Window, MouseEvent, MyData>(
  window,
  'mousedown',
  (event, detail) => {
    console.log('Cửa sổ được nhấn, ID dữ liệu:', detail?.id)
  },
  { passive: true },
  { id: 42 }
)

// 3. Kích hoạt trình lắng nghe
myEvent.start()
customEvent.start()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isActive(): boolean`}),` — Kiểm tra xem việc lắng nghe sự kiện có đang hoạt động hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getElement(): E | undefined`}),` — Trả về phần tử mục tiêu hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các phương thức trong nhóm này đều hỗ trợ chuỗi lệnh và tự động gọi `,(0,c.jsx)(n.code,{children:`reset()`}),` nếu sự kiện đang hoạt động.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElement(elementSelector?: ElementOrString): this`}),` — Thay đổi phần tử mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setElementControl(elementSelector?: ElementOrString): this`}),` — Thiết lập phần tử kiểm soát (nếu thiếu trong DOM, sự kiện sẽ không kích hoạt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setType(type: string | string[]): this`}),` — Thay đổi loại sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setListener(listener: Function): this`}),` — Thay đổi hàm xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options?: EventOptions): this`}),` — Thay đổi các tùy chọn của trình lắng nghe.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setDetail(detail?: D): this`}),` — Thay đổi dữ liệu tùy chỉnh của sự kiện.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`start(): this`}),` — Bắt đầu lắng nghe các sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stop(): this`}),` — Dừng lắng nghe các sự kiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(activity: boolean): this`}),` — Bật hoặc tắt việc lắng nghe dựa trên cờ hiệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): this`}),` — Khởi động lại sự kiện (hữu ích sau khi thay đổi cài đặt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`dispatch(detail?: D): this`}),` — Kích hoạt sự kiện trên phần tử mục tiêu với việc truyền dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-sự-kiện-đặc-biệt`,children:`Các sự kiện đặc biệt`}),`
`,(0,c.jsx)(n.h3,{id:`resize`,children:(0,c.jsx)(n.code,{children:`resize`})}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu loại sự kiện được đặt là `,(0,c.jsx)(n.code,{children:`resize`}),`, lớp sẽ tự động sử dụng `,(0,c.jsx)(n.code,{children:`ResizeObserver`}),` để theo dõi các thay đổi kích thước của phần tử (ngay cả khi đó không phải là `,(0,c.jsx)(n.code,{children:`window`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`scroll-sync`,children:(0,c.jsx)(n.code,{children:`scroll-sync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một loại đặc biệt để tối ưu hóa việc cuộn. Nó sử dụng `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` nội bộ, ngăn chặn các cuộc gọi trình xử lý dư thừa và cải thiện hiệu suất.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`chuyển-đổi-phần-tử-động`,children:`Chuyển đổi phần tử động`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Tọa độ:', e.clientX)
})

tracker.start()

// ... sau đó chuyển sang phần tử khác
tracker.setElement('.item-2')
`})}),`
`,(0,c.jsx)(n.h3,{id:`sử-dụng-customevent-với-dữ-liệu`,children:`Sử dụng CustomEvent với Dữ liệu`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Dữ liệu nhận được:', e.detail) // dữ liệu từ CustomEvent
})

emitter.start()

// Phát tán sự kiện
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};