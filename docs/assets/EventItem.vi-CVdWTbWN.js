import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/EventItem - Quản lý Sự kiện Nâng cao"}),`
`,n.jsx(e.h1,{id:"lớp-eventitem",children:"Lớp EventItem"}),`
`,n.jsxs(e.p,{children:["Một bộ khung (wrapper) mạnh mẽ để quản lý các trình lắng nghe sự kiện (event listeners) trên các phần tử DOM hoặc đối tượng ",n.jsx(e.code,{children:"window"}),". Lớp này đơn giản hóa vòng đời của sự kiện (thêm, xóa, bật/tắt), hỗ trợ kiểm tra sự tồn tại của phần tử trong DOM và cung cấp các tối ưu hóa tích hợp cho các sự kiện nặng như ",n.jsx(e.code,{children:"resize"})," và ",n.jsx(e.code,{children:"scroll"}),"."]}),`
`,n.jsx(e.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Quản lý vòng đời"})," — các phương thức ",n.jsx(e.code,{children:"start"}),", ",n.jsx(e.code,{children:"stop"}),", ",n.jsx(e.code,{children:"toggle"})," và ",n.jsx(e.code,{children:"reset"})," tiện lợi để kiểm soát chính xác việc lắng nghe sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"An toàn DOM"})," — tự động kiểm tra ",n.jsx(e.code,{children:"isInDom"})," trước khi thực hiện trình xử lý (có thể cấu hình phần tử kiểm soát)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hỗ trợ ResizeObserver"})," — xử lý tích hợp sự kiện ",n.jsx(e.code,{children:"resize"})," cho bất kỳ phần tử HTML nào bằng API hiện đại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tối ưu hóa cuộn"})," — loại sự kiện đặc biệt ",n.jsx(e.code,{children:"scroll-sync"})," sử dụng ",n.jsx(e.code,{children:"requestAnimationFrame"})," để đạt hiệu suất cao."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chuỗi lệnh và linh hoạt"})," — hỗ trợ chuỗi lệnh (chaining) và thay đổi động mục tiêu, loại hoặc trình xử lý sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dữ liệu tùy chỉnh"})," — khả năng truyền và phát tán dữ liệu tùy chỉnh thông qua ",n.jsx(e.code,{children:"CustomEvent"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Tạo một thực thể ",n.jsx(e.code,{children:"EventItem"})," mới. Để kích hoạt việc lắng nghe, phương thức ",n.jsx(e.code,{children:"start()"})," phải được gọi."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementSelector?: ElementOrString"})," — phần tử mục tiêu hoặc bộ chọn (selector)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: string | string[] = 'click'"})," — loại sự kiện hoặc mảng các loại sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listener?: Function"})," — hàm xử lý (callback)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: EventOptions"})," — đối tượng cấu hình (",n.jsx(e.code,{children:"passive"}),", ",n.jsx(e.code,{children:"once"}),", ",n.jsx(e.code,{children:"capture"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"detail?: Record<string, any>"})," — dữ liệu tùy chỉnh cho sự kiện."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { EventItem } from '@dxtmisha/functional-basic'

const btn = document.querySelector('.my-button')
const myEvent = new EventItem(btn, 'click', (e) => {
  console.log('Đã nhấn!', e)
})

myEvent.start()
`})}),`
`,n.jsx(e.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(e.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isActive(): boolean"})," — Kiểm tra xem việc lắng nghe sự kiện có đang hoạt động hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getElement(): E | undefined"})," — Trả về phần tử mục tiêu hiện tại."]}),`
`]}),`
`,n.jsx(e.h3,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsxs(e.p,{children:["Tất cả các phương thức trong nhóm này đều hỗ trợ chuỗi lệnh và tự động gọi ",n.jsx(e.code,{children:"reset()"})," nếu sự kiện đang hoạt động."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setElement(elementSelector?: ElementOrString): this"})," — Thay đổi phần tử mục tiêu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setElementControl(elementSelector?: ElementOrString): this"})," — Thiết lập phần tử kiểm soát (nếu thiếu trong DOM, sự kiện sẽ không kích hoạt)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setType(type: string | string[]): this"})," — Thay đổi loại sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setListener(listener: Function): this"})," — Thay đổi hàm xử lý."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setOptions(options?: EventOptions): this"})," — Thay đổi các tùy chọn của trình lắng nghe."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setDetail(detail?: D): this"})," — Thay đổi dữ liệu tùy chỉnh của sự kiện."]}),`
`]}),`
`,n.jsx(e.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"start(): this"})," — Bắt đầu lắng nghe các sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"stop(): this"})," — Dừng lắng nghe các sự kiện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"toggle(activity: boolean): this"})," — Bật hoặc tắt việc lắng nghe dựa trên cờ hiệu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reset(): this"})," — Khởi động lại sự kiện (hữu ích sau khi thay đổi cài đặt)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dispatch(detail?: D): this"})," — Kích hoạt sự kiện trên phần tử mục tiêu với việc truyền dữ liệu."]}),`
`]}),`
`,n.jsx(e.h2,{id:"các-sự-kiện-đặc-biệt",children:"Các sự kiện đặc biệt"}),`
`,n.jsx(e.h3,{id:"resize",children:n.jsx(e.code,{children:"resize"})}),`
`,n.jsxs(e.p,{children:["Nếu loại sự kiện được đặt là ",n.jsx(e.code,{children:"resize"}),", lớp sẽ tự động sử dụng ",n.jsx(e.code,{children:"ResizeObserver"})," để theo dõi các thay đổi kích thước của phần tử (ngay cả khi đó không phải là ",n.jsx(e.code,{children:"window"}),")."]}),`
`,n.jsx(e.h3,{id:"scroll-sync",children:n.jsx(e.code,{children:"scroll-sync"})}),`
`,n.jsxs(e.p,{children:["Một loại đặc biệt để tối ưu hóa việc cuộn. Nó sử dụng ",n.jsx(e.code,{children:"requestAnimationFrame"})," nội bộ, ngăn chặn các cuộc gọi trình xử lý dư thừa và cải thiện hiệu suất."]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.h3,{id:"chuyển-đổi-phần-tử-động",children:"Chuyển đổi phần tử động"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const tracker = new EventItem('.item-1', 'mousemove', (e) => {
  console.log('Tọa độ:', e.clientX)
})

tracker.start()

// ... sau đó chuyển sang phần tử khác
tracker.setElement('.item-2')
`})}),`
`,n.jsx(e.h3,{id:"sử-dụng-customevent-với-dữ-liệu",children:"Sử dụng CustomEvent với Dữ liệu"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const emitter = new EventItem(window, 'my-custom-event')

emitter.setListener((e, detail) => {
  console.log('Dữ liệu nhận được:', e.detail) // dữ liệu từ CustomEvent
})

emitter.start()

// Phát tán sự kiện
emitter.dispatch({ userId: 123, action: 'refresh' })
`})})]})}function j(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{j as default};
