import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToMulti - Bộ chuyển đổi thuộc tính đa giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestomulti`,children:`Lớp PropertiesToMulti`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToMulti`}),` chuyển đổi các token thiết kế chứa nhiều thuộc tính hoặc trạng thái tùy chỉnh thành các cấu trúc chuẩn hóa, nơi các giá trị được gom nhóm phù hợp dưới tên khóa của chúng. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi đa giá trị`}),` — Tìm các thuộc tính kiểu `,(0,c.jsx)(n.code,{children:`property`}),` chứa các giá trị lồng nhau phức tạp và tái cấu trúc chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thăng cấp trạng thái`}),` — Giải quyết các giá trị cơ bản (như biến hoặc trạng thái) và ánh xạ chúng vào các cấu trúc bổ trợ trạng thái.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các cấu trúc đã chuyển đổi vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`012-multi`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToMulti, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToMulti(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-chuyển-đổi`,children:`Thao tác chuyển đổi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để lấy ra các thuộc tính đa giá trị và viết lại các phần tử con của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): PropertyItemsItem[]`}),` — Lọc tất cả các mục hoạt động, chỉ trả về các biến thuộc tính sở hữu các đối tượng giá trị phức tạp, không rỗng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(name: string, properties: PropertyList, isVar: boolean): void`}),` — Tái cấu trúc các giá trị con, thăng cấp các thuộc tính của chúng thành các cấu trúc trạng thái và điều chỉnh kiểu thuộc tính đầu ra dựa trên `,(0,c.jsx)(n.code,{children:`isVar`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};