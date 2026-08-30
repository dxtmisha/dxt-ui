import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToSub - Bộ giải quyết giá trị nội suy lồng nhau`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestosub`,children:`Lớp PropertiesToSub`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToSub`}),` giải quyết đệ quy các biểu thức nội suy lồng nhau trong dấu ngoặc nhọn (chẳng hạn như `,(0,c.jsx)(t.code,{children:`calc({ref.width} * 2)`}),`) bên trong các giá trị token. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giải quyết giá trị lồng nhau`}),` — Giải quyết đệ quy các ngoặc nhọn con chứa các tham chiếu biến trong các giá trị chuỗi lớn hơn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo vệ vòng lặp`}),` — Giới hạn thao tác tra cứu ở mức 24 lần lặp để ngăn chặn tra cứu vô hạn trên các định nghĩa vòng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bỏ ngoặc nhọn`}),` — Tự động loại bỏ các ngoặc nhọn bên ngoài khi token có thuộc tính `,(0,c.jsx)(t.code,{children:`fullValue`}),` là true.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các giá trị con đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`006-sub`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToSub, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSub(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thao-tác-giải-quyết`,children:`Thao tác giải quyết`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm và giải quyết tất cả các thuộc tính có giá trị con.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(value: PropertyItem['value']): boolean`}),` — Trả về true nếu giá trị token chứa một mẫu ngoặc nhọn con lồng nhau.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getValue(design: string, component: string, value: string): string`}),` — Giải quyết lặp đi lặp lại các chỉ báo nội suy ngoặc nhọn bằng cách sử dụng thanh đăng ký phần tử thuộc tính toàn cục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read({ design, component, item }: PropertyItemsItem): void`}),` — Giải quyết các giá trị con cho một phần tử thuộc tính và loại bỏ các ngoặc nhọn nếu `,(0,c.jsx)(t.code,{children:`fullValue`}),` được cắm cờ.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};