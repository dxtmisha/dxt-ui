import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToMulti - Bộ chuyển đổi thuộc tính đa giá trị`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestomulti`,children:`Lớp PropertiesToMulti`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToMulti`}),` chuyển đổi các token thiết kế chứa nhiều thuộc tính hoặc trạng thái tùy chỉnh thành các cấu trúc chuẩn hóa, nơi các giá trị được gom nhóm phù hợp dưới tên khóa của chúng. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi đa giá trị`}),` — Tìm các thuộc tính kiểu `,(0,c.jsx)(t.code,{children:`property`}),` chứa các giá trị lồng nhau phức tạp và tái cấu trúc chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thăng cấp trạng thái`}),` — Giải quyết các giá trị cơ bản (như biến hoặc trạng thái) và ánh xạ chúng vào các cấu trúc bổ trợ trạng thái.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các cấu trúc đã chuyển đổi vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`012-multi`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToMulti, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMulti(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thao-tác-chuyển-đổi`,children:`Thao tác chuyển đổi`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để lấy ra các thuộc tính đa giá trị và viết lại các phần tử con của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): PropertyItemsItem[]`}),` — Lọc tất cả các mục hoạt động, chỉ trả về các biến thuộc tính sở hữu các đối tượng giá trị phức tạp, không rỗng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`read(name: string, properties: PropertyList, isVar: boolean): void`}),` — Tái cấu trúc các giá trị con, thăng cấp các thuộc tính của chúng thành các cấu trúc trạng thái và điều chỉnh kiểu thuộc tính đầu ra dựa trên `,(0,c.jsx)(t.code,{children:`isVar`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};