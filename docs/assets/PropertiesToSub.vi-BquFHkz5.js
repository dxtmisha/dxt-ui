import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToSub - Bộ giải quyết giá trị nội suy lồng nhau`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestosub`,children:`Lớp PropertiesToSub`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToSub`}),` giải quyết đệ quy các biểu thức nội suy lồng nhau trong dấu ngoặc nhọn (chẳng hạn như `,(0,c.jsx)(n.code,{children:`calc({ref.width} * 2)`}),`) bên trong các giá trị token. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết giá trị lồng nhau`}),` — Giải quyết đệ quy các ngoặc nhọn con chứa các tham chiếu biến trong các giá trị chuỗi lớn hơn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bảo vệ vòng lặp`}),` — Giới hạn thao tác tra cứu ở mức 24 lần lặp để ngăn chặn tra cứu vô hạn trên các định nghĩa vòng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bỏ ngoặc nhọn`}),` — Tự động loại bỏ các ngoặc nhọn bên ngoài khi token có thuộc tính `,(0,c.jsx)(n.code,{children:`fullValue`}),` là true.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các giá trị con đã giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`006-sub`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToSub, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToSub(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-giải-quyết`,children:`Thao tác giải quyết`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm và giải quyết tất cả các thuộc tính có giá trị con.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(value: PropertyItem['value']): boolean`}),` — Trả về true nếu giá trị token chứa một mẫu ngoặc nhọn con lồng nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(design: string, component: string, value: string): string`}),` — Giải quyết lặp đi lặp lại các chỉ báo nội suy ngoặc nhọn bằng cách sử dụng thanh đăng ký phần tử thuộc tính toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read({ design, component, item }: PropertyItemsItem): void`}),` — Giải quyết các giá trị con cho một phần tử thuộc tính và loại bỏ các ngoặc nhọn nếu `,(0,c.jsx)(n.code,{children:`fullValue`}),` được cắm cờ.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};