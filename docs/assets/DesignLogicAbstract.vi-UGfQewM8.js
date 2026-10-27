import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignLogicAbstract`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designlogicabstract`,children:`Lớp DesignLogicAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Bộ điều phối trừu tượng cho phụ thuộc logic thành phần. Lớp giữ phạm vi hiệu ứng Vue hiện tại, đầu vào dùng chung và tạo, lưu phụ thuộc theo khóa chuỗi khi cần.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo lười`}),` — hàm tạo tham số chỉ chạy khi tạo đối tượng lần đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quyền sở hữu phạm vi`}),` — hiệu ứng phụ thuộc thuộc phạm vi hoạt động đã lưu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vòng đời`}),` — nhận diện callback đồng bộ thông qua `,(0,c.jsx)(t.code,{children:`DesignLifecycleAbstract`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P>, slots?: SLOTS, emits?: ConstrEmit<EMITS>, constructors?: Partial<CONSTRUCTORS>, hasLifecycle: boolean = true )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — Thuộc tính đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: Ref<E | undefined>`}),` — Ref phần tử gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`naming: DesignName`}),` — Tiện ích DesignName dùng chung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components?: DesignComponents<COMP, P>`}),` — Bộ đăng ký thành phần kết nối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`slots?: SLOTS`}),` — Bộ đăng ký slot có tên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`emits?: ConstrEmit<EMITS>`}),` — Hàm phát sự kiện thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`constructors?: Partial<CONSTRUCTORS>`}),` — Ghi đè hàm dựng phụ thuộc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hasLifecycle: boolean = true`}),` — Có đăng ký hook vòng đời thành phần; mặc định true.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Tham số kiểu: E là phần tử gốc, COMP là bộ đăng ký thành phần, EMITS là sự kiện, SLOTS là slot, P là thuộc tính và CONSTRUCTORS là bản đồ hàm dựng phụ thuộc. Tạo đối tượng trong `,(0,c.jsx)(t.code,{children:`setup()`}),` hoặc `,(0,c.jsx)(t.code,{children:`effectScope()`}),` đang hoạt động. Nếu thiếu phạm vi hoạt động đã lưu hoặc hàm tạo, tra cứu trả về `,(0,c.jsx)(t.code,{children:`undefined`}),` lúc chạy dù kiểu trả về khai báo là đối tượng phụ thuộc. `,(0,c.jsx)(t.code,{children:`constructors`}),` ưu tiên hơn `,(0,c.jsx)(t.code,{children:`constructorItems[name].item`}),`. Điều kiện được theo dõi khi gắn thành phần: giá trị đúng tạo phụ thuộc, giá trị sai không hủy phụ thuộc. Chỉ thành phần Vue đăng ký hook; `,(0,c.jsx)(t.code,{children:`hasLifecycle = false`}),` tắt đăng ký. SSR không gọi callback phía trình duyệt. Khi gắn, callback của phụ thuộc hiện có chạy trước, tiếp theo là khởi tạo điều kiện và callback của logic. Phụ thuộc tạo muộn được gắn ngay. Lỗi callback phụ thuộc được thu thập, gửi tới `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` rồi ném dưới dạng `,(0,c.jsx)(t.code,{children:`AggregateError`}),` sau khi duyệt hết callback; callback logic tiếp theo không chạy trên nhánh lỗi này.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignLogicAbstract, DesignName } from '@dxtmisha/functional'
import { effectScope, ref } from 'vue'

class Dependency {}

class Logic extends DesignLogicAbstract<
  HTMLElement, {}, {}, {}, {}, { dependency: typeof Dependency }
> {
  protected readonly constructorItems = { dependency: { item: Dependency } }

  constructor() {
    super({}, ref<HTMLElement>(), new DesignName('d1.example'))
  }
}

const scope = /*#__PURE__*/ effectScope()
const logic = /*#__PURE__*/ scope.run(() => new Logic())
const dependency = /*#__PURE__*/ logic?.getInstance('dependency')
scope.stop()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`truy-cập-phụ-thuộc`,children:`Truy cập phụ thuộc`}),`
`,(0,c.jsx)(t.h4,{id:`getinstance`,children:(0,c.jsx)(t.code,{children:`getInstance`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả phụ thuộc đã lưu hoặc tạo trong phạm vi hoạt động đã giữ. Tham số lấy từ hàm `,(0,c.jsx)(t.code,{children:`parameters()`}),` tùy chọn. Lỗi khởi tạo không được lưu nên có thể thử lại.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K`}),` — Khóa chuỗi của hàm dựng phụ thuộc.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ConstrInstance<CONSTRUCTORS, K>`}),` — Đối tượng phụ thuộc đã lưu hoặc vừa tạo.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const dependency = /*#__PURE__*/ logic?.getInstance('dependency')
`})}),`
`,(0,c.jsx)(t.h3,{id:`truy-cập-rút-gọn`,children:`Truy cập rút gọn`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>`}),` — Gọi `,(0,c.jsx)(t.code,{children:`getInstance()`}),` với cùng khóa và kết quả.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};