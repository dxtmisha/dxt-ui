import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/EventRef - Trình quản lý sự kiện phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-eventref`,children:`Lớp EventRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Mở rộng phản ứng của `,(0,c.jsx)(t.code,{children:`EventItem`}),` cho sự kiện DOM hoặc cửa sổ. Theo dõi ref đích và phần tử kiểm soát từ hàm dựng; phạm vi hiệu ứng Vue sở hữu sẽ dừng lắng nghe khi kết thúc.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đổi đích`}),` — listener đang hoạt động được chuyển khi ref đích đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bắt đầu tường minh`}),` — khởi tạo không tự bật lắng nghe.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điều khiển kế thừa`}),` — `,(0,c.jsx)(t.code,{children:`EventItem`}),` cung cấp gọi nối tiếp, nhiều loại sự kiện và detail.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( elementSelector?: RefOrNormal<ElementOrString<E> | undefined>, elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>, type: string | string[] = ['click'], listener?: EventListenerDetail<O, D>, options?: EventOptions, detail?: D )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelector?: RefOrNormal<ElementOrString<E> | undefined>`}),` — Phần tử đích hoặc bộ chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`elementSelectorControl?: RefOrNormal<ElementOrString<HTMLElement>>`}),` — Phần tử kiểm soát hoặc bộ chọn tùy chọn để kiểm tra hiện diện DOM.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string | string[] = ['click']`}),` — Loại sự kiện hoặc mảng; mặc định click.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listener?: EventListenerDetail<O, D>`}),` — Callback nhận sự kiện và detail đã lưu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: EventOptions`}),` — Tùy chọn cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail?: D`}),` — Dữ liệu sự kiện tùy chỉnh.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Tham số kiểu: `,(0,c.jsx)(t.code,{children:`E`}),` là đích, `,(0,c.jsx)(t.code,{children:`O`}),` là sự kiện, `,(0,c.jsx)(t.code,{children:`D`}),` là detail tùy chỉnh. Chỉ đầu vào đích/kiểm soát của hàm dựng nhận ref; setter kế thừa nhận giá trị đã mở ref. Watcher gắn lại sau lần cập nhật Vue tiếp theo. Ngoài phạm vi hiệu ứng, gọi `,(0,c.jsx)(t.code,{children:`stop()`}),` thủ công. Việc xóa phần tử kiểm soát được kiểm tra khi xử lý sự kiện. `,(0,c.jsx)(t.code,{children:`resize`}),` dùng `,(0,c.jsx)(t.code,{children:`ResizeObserver`}),`; `,(0,c.jsx)(t.code,{children:`scroll-sync`}),` dùng lịch khung hình.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { EventRef } from '@dxtmisha/functional'
import { effectScope, ref } from 'vue'

const target = /*#__PURE__*/ ref<HTMLElement>()
const clicks = /*#__PURE__*/ ref(0)
const scope = /*#__PURE__*/ effectScope()
const listener = /*#__PURE__*/ scope.run(() => new EventRef(
  target, undefined, 'click', () => { clicks.value++ }
).start())
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển-listener-kế-thừa`,children:`Điều khiển listener (kế thừa)`}),`
`,(0,c.jsx)(t.h4,{id:`start`,children:(0,c.jsx)(t.code,{children:`start`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`start(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Bật lắng nghe; gọi lặp không tạo đăng ký trùng.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Đối tượng hiện tại để gọi nối tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.start()
`})}),`
`,(0,c.jsx)(t.h4,{id:`stop`,children:(0,c.jsx)(t.code,{children:`stop`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`stop(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Gỡ listener và observer đang hoạt động; có thể gọi lặp.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Đối tượng hiện tại để gọi nối tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.stop()
`})}),`
`,(0,c.jsx)(t.h4,{id:`toggle`,children:(0,c.jsx)(t.code,{children:`toggle`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`toggle(activity: boolean): this`})}),`
`,(0,c.jsx)(t.p,{children:`Bật hoặc tắt theo tham số boolean.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`activity: boolean`}),` — Trạng thái lắng nghe được yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Đối tượng hiện tại để gọi nối tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.toggle(false)
`})}),`
`,(0,c.jsx)(t.h4,{id:`reset`,children:(0,c.jsx)(t.code,{children:`reset`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`reset(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Gắn lại listener đang hoạt động, giữ listener không hoạt động ở trạng thái dừng.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Đối tượng hiện tại để gọi nối tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.reset()
`})}),`
`,(0,c.jsx)(t.h3,{id:`trạng-thái-và-cấu-hình-kế-thừa`,children:`Trạng thái và cấu hình (kế thừa)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isActive(): boolean`}),` — Cho biết lắng nghe đã bật hay chưa.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getElement(): E | undefined`}),` — Trả đích hiện tại đã được phân giải.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setElement(elementSelector?: ElementOrString<E>): this`}),` — Đổi đích và đặt lại listener đang hoạt động.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this`}),` — Đổi phần tử dùng để kiểm tra hiện diện trong DOM.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setType(type: string | string[]): this`}),` — Đổi loại sự kiện và đặt lại listener đang hoạt động.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setListener(listener: EventListenerDetail<O, D>): this`}),` — Thay callback.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setOptions(options?: EventOptions): this`}),` — Thay tùy chọn, gắn lại nếu đang hoạt động.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setDetail(detail?: D): this`}),` — Thay detail truyền làm tham số thứ hai của callback.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`phát-sự-kiện-kế-thừa`,children:`Phát sự kiện (kế thừa)`}),`
`,(0,c.jsx)(t.h4,{id:`dispatch`,children:(0,c.jsx)(t.code,{children:`dispatch`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`dispatch(detail: D | undefined = this.detail): this`})}),`
`,(0,c.jsx)(t.p,{children:`Phát CustomEvent cho từng loại đã cấu hình. Detail truyền vào là event.detail; tham số thứ hai của callback vẫn là detail listener đã lưu.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`detail: D | undefined = this.detail`}),` — Dữ liệu sự kiện tùy chỉnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Đối tượng hiện tại để gọi nối tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`listener?.dispatch({ source: 'manual' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};