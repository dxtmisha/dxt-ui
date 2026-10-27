import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignConstructorAbstract - Logic Constructor cơ sở`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designconstructorabstract`,children:`Lớp DesignConstructorAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm dựng kết xuất Vue trừu tượng kết hợp đặt tên, ref phần tử gốc, thành phần kết nối tùy chọn, thuộc tính, slot, dữ liệu công khai và computed lớp CSS/kiểu. Tạo lớp con cụ thể trong `,(0,c.jsx)(t.code,{children:`setup()`}),` thành phần.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết hợp`}),` — lớp CSS gốc hợp nhất logic, tùy chọn và thuộc tính ngoài.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểu`}),` — hợp nhất theo độ ưu tiên: logic, tùy chọn, kiểu từ bên ngoài.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Slot`}),` — fragment có khóa giữ nhóm slot và theo dõi thay đổi slot.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( name: string, props: Readonly<P>, options?: ConstrOptions<COMP, EMITS, P> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Tên thành phần, phụ thuộc, slot hoặc tuyến theo phương thức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: Readonly<P>`}),` — Thuộc tính đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: ConstrOptions<COMP, EMITS, P>`}),` — Tùy chọn cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Tham số kiểu: `,(0,c.jsx)(t.code,{children:`E`}),` là phần tử gốc; `,(0,c.jsx)(t.code,{children:`COMP`}),` là bộ đăng ký; `,(0,c.jsx)(t.code,{children:`EMITS`}),` là sự kiện; `,(0,c.jsx)(t.code,{children:`EXPOSE`}),` là dữ liệu công khai; `,(0,c.jsx)(t.code,{children:`SLOTS`}),` là slot; `,(0,c.jsx)(t.code,{children:`CLASSES`}),` là bản đồ lớp CSS; `,(0,c.jsx)(t.code,{children:`P`}),` là thuộc tính. Triển khai `,(0,c.jsx)(t.code,{children:`initExpose`}),`, `,(0,c.jsx)(t.code,{children:`initClasses`}),`, `,(0,c.jsx)(t.code,{children:`initStyles`}),` và `,(0,c.jsx)(t.code,{children:`initRender`}),`. Hàm dựng khởi tạo trạng thái ngay; gọi `,(0,c.jsx)(t.code,{children:`render()`}),` một lần trong `,(0,c.jsx)(t.code,{children:`setup()`}),` để lấy hàm kết xuất. `,(0,c.jsx)(t.code,{children:`getAttrs()`}),` loại `,(0,c.jsx)(t.code,{children:`class`}),` và `,(0,c.jsx)(t.code,{children:`style`}),`. Mục lớp CSS từ tùy chọn ghi đè mục logic cùng tên, trừ `,(0,c.jsx)(t.code,{children:`main`}),` được chuẩn hóa từ cả ba nguồn. `,(0,c.jsx)(t.code,{children:`expose()`}),` luôn thêm ref gốc dưới tên `,(0,c.jsx)(t.code,{children:`elementHtml`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignConstructorAbstract } from '@dxtmisha/functional'
import { defineComponent, h, type VNode } from 'vue'

class ExampleDesign extends DesignConstructorAbstract<
  HTMLElement, {}, {}, {}, {}, { main: string }, {}
> {
  constructor() { super('d1.example', {}) }
  protected initExpose(): {} { return {} }
  protected initClasses(): { main: string } { return { main: 'd1-example' } }
  protected initStyles(): {} { return {} }
  protected initRender(): VNode {
    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value
    })
  }
}

const Example = /*#__PURE__*/ defineComponent({
  inheritAttrs: false,
  setup(_props, context) {
    const design = new ExampleDesign()
    context.expose(design.expose())
    return design.render()
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thuộc-tính-và-đặt-tên`,children:`Thuộc tính và đặt tên`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getAttrs(): ConstrItem`}),` — Trả đối tượng thuộc tính mới không có `,(0,c.jsx)(t.code,{children:`class`}),` và `,(0,c.jsx)(t.code,{children:`style`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getKeyClass<K extends keyof CLASSES>(name: K & string)`}),` — Trả khóa phần tử con và lớp CSS computed hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNaming(): DesignName`}),` — Trả đối tượng `,(0,c.jsx)(t.code,{children:`DesignName`}),` của hàm dựng này.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kết-xuất-và-công-khai`,children:`Kết xuất và công khai`}),`
`,(0,c.jsx)(t.h4,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`render(): () => VNode | VNode[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Đăng ký theo dõi thay slot và trả hàm kết xuất qua `,(0,c.jsx)(t.code,{children:`initRender()`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`() => VNode | VNode[] | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const render = /*#__PURE__*/ design.render()
`})}),`
`,(0,c.jsx)(t.h4,{id:`expose`,children:(0,c.jsx)(t.code,{children:`expose`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`expose(): ConstrExpose<E, EXPOSE>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kết hợp dữ liệu `,(0,c.jsx)(t.code,{children:`initExpose()`}),` với ref gốc `,(0,c.jsx)(t.code,{children:`elementHtml`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ConstrExpose<E, EXPOSE>`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`context.expose(design.expose())
`})}),`
`,(0,c.jsx)(t.h3,{id:`điểm-mở-rộng-được-bảo-vệ`,children:`Điểm mở rộng được bảo vệ`}),`
`,(0,c.jsx)(t.h4,{id:`initexpose`,children:(0,c.jsx)(t.code,{children:`initExpose`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initExpose(): EXPOSE`})}),`
`,(0,c.jsx)(t.p,{children:`Triển khai trong lớp con để trả dữ liệu công khai.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`EXPOSE`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initExpose(): {} { return {} }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initclasses`,children:(0,c.jsx)(t.code,{children:`initClasses`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initClasses(): Partial<CLASSES>`})}),`
`,(0,c.jsx)(t.p,{children:`Triển khai trong lớp con để trả bản đồ lớp CSS logic trước khi hợp nhất.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Partial<CLASSES>`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initClasses(): { main: string } { return { main: 'd1-example' } }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initstyles`,children:(0,c.jsx)(t.code,{children:`initStyles`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initStyles(): ConstrStyles`})}),`
`,(0,c.jsx)(t.p,{children:`Triển khai trong lớp con để trả kiểu trước khi áp dụng tùy chọn và thuộc tính ngoài.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ConstrStyles`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initStyles(): {} { return {} }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initrender`,children:(0,c.jsx)(t.code,{children:`initRender`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initRender(): VNode | VNode[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Triển khai cây VNode. Kết quả có thể là một nút, mảng hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`VNode | VNode[] | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`protected initRender(): VNode { return h('div', { ref: this.element }) }
`})}),`
`,(0,c.jsx)(t.h4,{id:`initslot`,children:(0,c.jsx)(t.code,{children:`initSlot`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`initSlot<K extends keyof SLOTS>( name: K, children?: VNode[], props: ConstrItem = {} ): VNode | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kết xuất slot có tên thành fragment có khóa và tùy chọn thêm fragment vào `,(0,c.jsx)(t.code,{children:`children`}),`. Slot thiếu trả `,(0,c.jsx)(t.code,{children:`undefined`}),` và không đổi mảng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K`}),` — Khóa slot có tên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: VNode[]`}),` — Nội dung con hoặc mảng tích lũy VNode tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: ConstrItem = {}`}),` — Thuộc tính slot có phạm vi; mặc định đối tượng rỗng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const children: VNode[] = []
this.initSlot('default', children, { value: 0 })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};