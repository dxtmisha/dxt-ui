import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/GeoRef - Trình quản lý địa lý phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-georef`,children:`Lớp GeoRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Facade phản ứng tĩnh cho ngữ cảnh địa lý hiện tại. Lưu shallow ref tới `,(0,c.jsx)(t.code,{children:`Geo.getItem()`}),` và các phép chiếu computed qua `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ref dùng chung`}),` — getter dùng lại ref đã lưu trong ngữ cảnh hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cập nhật locale`}),` — `,(0,c.jsx)(t.code,{children:`set()`}),` thay mục địa lý và cập nhật phép chiếu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ngữ cảnh SSR`}),` — quyền sở hữu bộ nhớ đệm theo `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Dữ liệu quốc gia khác locale được yêu cầu: `,(0,c.jsx)(t.code,{children:`en-VN`}),` có ngôn ngữ quốc gia `,(0,c.jsx)(t.code,{children:`vi`}),` và ngôn ngữ vị trí `,(0,c.jsx)(t.code,{children:`en`}),`. `,(0,c.jsx)(t.code,{children:`getFirstDay()`}),` trả ký hiệu như `,(0,c.jsx)(t.code,{children:`Mo`}),` hoặc `,(0,c.jsx)(t.code,{children:`Su`}),`, không phải mã số. `,(0,c.jsx)(t.code,{children:`setValueDefault()`}),` cấu hình dự phòng; cookie locale hiện có có thể được ưu tiên. Khởi tạo lưu trữ yêu cầu trước SSR và đọc ref trong ngữ cảnh sở hữu.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoRef } from '@dxtmisha/functional'

const country = /*#__PURE__*/ GeoRef.getCountry()
const language = /*#__PURE__*/ GeoRef.getLocationLanguage()
GeoRef.set('en-VN')
country.value // 'VN'
language.value // 'en'
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`ngữ-cảnh-hiện-tại`,children:`Ngữ cảnh hiện tại`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get(): Ref<GeoItemFull>`}),` — Trả ref mục địa lý đã lưu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getCountry(): ComputedRef<string>`}),` — Trả mã quốc gia.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): ComputedRef<string>`}),` — Trả ngôn ngữ trong dữ liệu quốc gia.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getStandard(): ComputedRef<string>`}),` — Trả mã locale chuẩn.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): ComputedRef<string>`}),` — Trả ký hiệu ngày đầu tuần từ dữ liệu quốc gia.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocation(): ComputedRef<string>`}),` — Trả locale vị trí hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocationCountry(): ComputedRef<string>`}),` — Trả phần quốc gia của vị trí được yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLocationLanguage(): ComputedRef<string>`}),` — Trả phần ngôn ngữ của vị trí được yêu cầu.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình-locale`,children:`Cấu hình locale`}),`
`,(0,c.jsx)(t.h4,{id:`set`,children:(0,c.jsx)(t.code,{children:`set`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`set(code: string): void`})}),`
`,(0,c.jsx)(t.p,{children:`Đặt locale Geo hiện tại có lưu trữ và thay mục phản ứng.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Không có giá trị trả về.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`GeoRef.set('vi-VN')
`})}),`
`,(0,c.jsx)(t.h4,{id:`setvaluedefault`,children:(0,c.jsx)(t.code,{children:`setValueDefault`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`setValueDefault(code?: string | (() => string)): void`})}),`
`,(0,c.jsx)(t.p,{children:`Đặt mã hoặc hàm dự phòng Geo và làm mới mục phản ứng từ Geo.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: string | (() => string)`}),` — Mã locale dự phòng hoặc hàm tạo mã.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — Không có giá trị trả về.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`GeoRef.setValueDefault(() => 'vi-VN')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};