import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignComp`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designcomp`,children:`Lớp DesignComp`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp con được xuất của `,(0,c.jsx)(t.code,{children:`DesignComponents<COMP, P>`}),`. Không thêm thành viên hoặc hành vi; tra cứu, hiệu chỉnh phản ứng và kết xuất VNode được kế thừa nguyên vẹn.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ đăng ký`}),` — `,(0,c.jsx)(t.code,{children:`COMP`}),` xác định tên thành phần hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giá trị mặc định phản ứng`}),` — bản đồ và từng giá trị hiệu chỉnh có thể là ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất thuộc tính`}),` — thuộc tính trực tiếp ghi đè mặc định; lớp CSS và kiểu được hợp nhất.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( components: COMP = {} as COMP, modification?: ConstrComponentMod<P> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components: COMP = {} as COMP`}),` — Bộ đăng ký thành phần kết nối.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modification?: ConstrComponentMod<P>`}),` — Bản đồ thuộc tính mặc định theo chỉ mục, có thể phản ứng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm khởi tạo và các phương thức bên dưới được kế thừa từ `,(0,c.jsx)(t.code,{children:`DesignComponents`}),`. `,(0,c.jsx)(t.code,{children:`COMP`}),` mô tả bộ đăng ký, `,(0,c.jsx)(t.code,{children:`P`}),` mô tả thuộc tính thành phần.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignComp } from '@dxtmisha/functional'
import { ref } from 'vue'

const disabled = /*#__PURE__*/ ref(false)
const components = /*#__PURE__*/ new DesignComp(
  { button: 'button' },
  { button: { disabled, class: 'base' } }
)
const node = /*#__PURE__*/ components.renderOne('button', { title: 'Save' })
disabled.value = true
const updatedNode = /*#__PURE__*/ components.renderOne('button')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`tra-cứu-bộ-đăng-ký`,children:`Tra cứu bộ đăng ký`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`is<K extends keyof COMP>(name: K): name is K`}),` — Kiểm tra mục đăng ký có chứa thành phần hay không.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get<K extends keyof COMP>(name: K): COMP[K]`}),` — Trả về mục đăng ký mà không tạo VNode.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`hiệu-chỉnh-thuộc-tính`,children:`Hiệu chỉnh thuộc tính`}),`
`,(0,c.jsx)(t.h4,{id:`getmodification`,children:(0,c.jsx)(t.code,{children:`getModification`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getModification<K extends keyof P>( index?: K & string | string, props?: P[K] | ConstrItem ): ConstrItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Lưu giá trị computed theo chỉ mục và hợp nhất thuộc tính trực tiếp qua `,(0,c.jsx)(t.code,{children:`toBinds`}),`. Khi chỉ mục rỗng hoặc bị bỏ qua, trả nguyên thuộc tính đầu vào.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: K & string | string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[K] | ConstrItem`}),` — Thuộc tính đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ConstrItem | undefined`}),` — Bản đồ thuộc tính hợp nhất hoặc thuộc tính gốc khi không truyền chỉ mục.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ components.getModification('button', { disabled: false })
`})}),`
`,(0,c.jsx)(t.h3,{id:`kết-xuất`,children:`Kết xuất`}),`
`,(0,c.jsx)(t.h4,{id:`renderone`,children:(0,c.jsx)(t.code,{children:`renderOne`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`renderOne< K extends keyof COMP, PK extends keyof P >( name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): VNode | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một VNode với thuộc tính và nội dung con đã hợp nhất. Trả về `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu thiếu thành phần.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Khóa thành phần kết nối trong bộ đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Thuộc tính đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Nội dung con hoặc mảng tích lũy VNode tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — VNode kết xuất hoặc undefined nếu thiếu thành phần.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const node = /*#__PURE__*/ components.renderOne('button', { title: 'Save' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`render< K extends keyof COMP, PK extends keyof P >( name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): VNode[]`})}),`
`,(0,c.jsx)(t.p,{children:`Đưa VNode vào mảng; trả mảng rỗng nếu thiếu thành phần.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Khóa thành phần kết nối trong bộ đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Thuộc tính đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Nội dung con hoặc mảng tích lũy VNode tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`VNode[]`}),` — Mảng một VNode hoặc mảng rỗng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes = /*#__PURE__*/ components.render('button')
`})}),`
`,(0,c.jsx)(t.h4,{id:`renderadd`,children:(0,c.jsx)(t.code,{children:`renderAdd`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`renderAdd< K extends keyof COMP, PK extends keyof P >( item: unknown[], name: K & string, props?: P[PK] & ConstrItem | ConstrItem, children?: RawChildren | RawSlots, index?: PK & string | string ): this`})}),`
`,(0,c.jsx)(t.p,{children:`Thêm các nút vào mảng hiện có và trả cùng bộ đăng ký để gọi nối tiếp.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: unknown[]`}),` — Mục hoặc mảng đầu ra theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: K & string`}),` — Khóa thành phần kết nối trong bộ đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: P[PK] & ConstrItem | ConstrItem`}),` — Thuộc tính đầu vào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Nội dung con hoặc mảng tích lũy VNode tùy chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: PK & string | string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Đối tượng hiện tại để gọi nối tiếp.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const nodes: unknown[] = []
components.renderAdd(nodes, 'button')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};