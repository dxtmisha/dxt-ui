import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/GeoUnitRef`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-geounitref`,children:`Lớp GeoUnitRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp bọc phản ứng cho `,(0,c.jsx)(t.code,{children:`GeoUnit`}),`, định dạng giá trị nguồn hệ mét theo đơn vị khu vực. Ref locale và số cập nhật computed đã lưu mà không cần tạo lại lớp bọc.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi khu vực`}),` — đơn vị nguồn chuyển theo cấu hình quốc gia.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đầu vào phản ứng`}),` — giá trị, locale và đơn vị của `,(0,c.jsx)(t.code,{children:`format()`}),` có thể là ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tùy chọn định dạng`}),` — nhận `,(0,c.jsx)(t.code,{children:`Intl.NumberFormatOptions`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor(code?: RefOrNormal<string>)`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Không có locale cụ thể thì theo `,(0,c.jsx)(t.code,{children:`GeoRef.getLocation()`}),`. Ref locale cụ thể thay nguồn dự phòng này. Hỗ trợ chuỗi số. `,(0,c.jsx)(t.code,{children:`format()`}),` dùng mã như `,(0,c.jsx)(t.code,{children:`square-meter`}),` và `,(0,c.jsx)(t.code,{children:`kilometer-per-hour`}),`; mã không biết trả đầu vào dạng văn bản. Tùy chọn là đối tượng thường, không phải ref.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoUnitRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const locale = /*#__PURE__*/ ref('vi-VN')
const value = /*#__PURE__*/ ref(0)
const units = /*#__PURE__*/ new GeoUnitRef(locale)
const temperature = /*#__PURE__*/ units.celsius(value)
locale.value = 'en-US'
const generic = /*#__PURE__*/ units.format(value, ref('celsius'))
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vị-trí`,children:`Vị trí`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): ComputedRef<string>`}),` — Trả locale chuẩn đã phân giải dưới dạng computed ref.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`chuyển-đổi-tổng-quát`,children:`Chuyển đổi tổng quát`}),`
`,(0,c.jsx)(t.h4,{id:`format`,children:(0,c.jsx)(t.code,{children:`format`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`format( value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chọn đơn vị nguồn hệ mét theo phản ứng và giao chuyển đổi, định dạng cho `,(0,c.jsx)(t.code,{children:`GeoUnit`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: RefOrNormal<NumberOrString>`}),` — Giá trị để định dạng; hỗ trợ ref theo chữ ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`unit: RefOrNormal<string>`}),` — Mã đơn vị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Intl.NumberFormatOptions`}),` — Tùy chọn cấu hình.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const formatted = /*#__PURE__*/ units.format(value, ref('meter'), { maximumFractionDigits: 2 })
`})}),`
`,(0,c.jsx)(t.h3,{id:`phương-thức-đơn-vị`,children:`Phương thức đơn vị`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`millimeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng milimét; đổi sang `,(0,c.jsx)(t.code,{children:`inch`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`centimeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng xentimét; đổi sang `,(0,c.jsx)(t.code,{children:`inch`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`meter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng mét; đổi sang `,(0,c.jsx)(t.code,{children:`foot`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilometer( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng kilômét; đổi sang `,(0,c.jsx)(t.code,{children:`mile`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`squareMeter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng mét vuông; đổi sang `,(0,c.jsx)(t.code,{children:`square-foot`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`hectare( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng hecta; đổi sang `,(0,c.jsx)(t.code,{children:`acre`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`gram( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng gam; đổi sang `,(0,c.jsx)(t.code,{children:`ounce`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilogram( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng kilôgam; đổi sang `,(0,c.jsx)(t.code,{children:`pound`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`tonne( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng tấn; đổi sang `,(0,c.jsx)(t.code,{children:`ton`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`milliliter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng mililít; đổi sang `,(0,c.jsx)(t.code,{children:`fluid-ounce`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`liter( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng lít; đổi sang `,(0,c.jsx)(t.code,{children:`gallon`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`celsius( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng độ C; đổi sang `,(0,c.jsx)(t.code,{children:`fahrenheit`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`kilometerPerHour( value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions ): ComputedRef<string>`}),` — Định dạng kilômét/giờ; đổi sang `,(0,c.jsx)(t.code,{children:`mile-per-hour`}),` khi cấu hình khu vực yêu cầu.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};