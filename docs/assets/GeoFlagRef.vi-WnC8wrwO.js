import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/GeoFlagRef - Quản lý cờ quốc gia phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-geoflagref`,children:`Lớp GeoFlagRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp bọc phản ứng cho `,(0,c.jsx)(t.code,{children:`GeoFlag`}),`, cung cấp dữ liệu quốc gia, ngôn ngữ và mã biểu tượng cờ. Đối tượng cơ sở theo ref mã được truyền hoặc vị trí `,(0,c.jsx)(t.code,{children:`GeoRef`}),` hiện tại.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mã phản ứng`}),` — kết quả computed đã lưu theo thay đổi mã.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tra cứu cụ thể`}),` — mã truyền cho phương thức ưu tiên hơn mã tra cứu của hàm dựng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Danh mục`}),` — hỗ trợ danh sách lọc và tên bằng ngôn ngữ bản địa.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( code?: RefOrNormal<string | undefined> )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string | undefined>`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getCode()`}),` trả chuỗi tại thời điểm gọi. Getter khác trả computed ref. `,(0,c.jsx)(t.code,{children:`getFlag()`}),` trả mã biểu tượng như `,(0,c.jsx)(t.code,{children:`f-vn`}),`, không phải URL ảnh. Bỏ qua mảng mã sẽ lấy danh mục cơ sở; mảng rỗng cho danh sách rỗng. Thứ tự danh mục và xử lý mã không biết do `,(0,c.jsx)(t.code,{children:`GeoFlag`}),` quyết định.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { GeoFlagRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const code = /*#__PURE__*/ ref('vi-VN')
const flags = /*#__PURE__*/ new GeoFlagRef(code)
const icon = /*#__PURE__*/ flags.getFlag()
const countries = /*#__PURE__*/ flags.getList(ref(['VN', 'US']))
code.value = 'en-US'
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`mã-hiện-tại`,children:`Mã hiện tại`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCode(): string`}),` — Trả mã cơ sở hiện tại dưới dạng chuỗi.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tra-cứu-một-mục`,children:`Tra cứu một mục`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`get(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Trả dữ liệu quốc gia cho mã cụ thể hoặc mã cơ sở hiện tại.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<GeoFlagItem | undefined>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.get(code)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getlanguage`,children:(0,c.jsx)(t.code,{children:`getLanguage`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getLanguage(code?: RefOrNormal<string>): ComputedRef<GeoFlagItem | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Trả dữ liệu ngôn ngữ cho mã cụ thể hoặc mã cơ sở hiện tại.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<GeoFlagItem | undefined>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.getLanguage(code)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getflag`,children:(0,c.jsx)(t.code,{children:`getFlag`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getFlag(code?: RefOrNormal<string>): ComputedRef<string | undefined>`})}),`
`,(0,c.jsx)(t.p,{children:`Trả mã biểu tượng cờ cho mã cụ thể hoặc mã cơ sở hiện tại.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code?: RefOrNormal<string>`}),` — Mã locale, quốc gia hoặc ngôn ngữ; hỗ trợ ref theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ComputedRef<string | undefined>`}),` — Kết quả computed; đọc qua .value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ flags.getFlag(code)
`})}),`
`,(0,c.jsx)(t.h3,{id:`danh-mục`,children:`Danh mục`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getList(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>`}),` — Trả mục cờ quốc gia, có thể lọc bằng mã phản ứng.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getListLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagItem[]>`}),` — Trả mục cờ ngôn ngữ, có thể lọc bằng mã phản ứng.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNational(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>`}),` — Trả tên quốc gia bằng ngôn ngữ bản địa.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getNationalLanguage(codes?: RefOrNormal<string[] | undefined>): ComputedRef<GeoFlagNational[]>`}),` — Trả tên ngôn ngữ bằng ngôn ngữ bản địa.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};