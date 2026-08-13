import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToRemove - Bộ dọn dẹp thuộc tính được chỉ định xóa`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestoremove`,children:`Lớp PropertiesToRemove`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToRemove`}),` loại bỏ các nút và thuộc tính khỏi cây token thiết kế được đánh dấu rõ ràng bằng chỉ thị `,(0,c.jsx)(t.code,{children:`remove`}),`. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cắt tỉa thuộc tính mục tiêu`}),` — Xác định và xóa các thuộc tính được cắm cờ `,(0,c.jsx)(t.code,{children:`PropertyKey.remove`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cảnh báo nhà phát triển`}),` — Ghi nhật ký cảnh báo chứa các đường dẫn của phần tử bị xóa ra bảng điều khiển terminal để theo dõi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu bản đồ cấu hình đã cập nhật vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`007-02-remove`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToRemove, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToRemove(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời`,children:`Vòng đời`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để quét cây, xóa các nút thuộc tính phù hợp khỏi các đối tượng giá trị cha của chúng, và ghi nhật ký cảnh báo.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};