import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isSelectedByList - Kiểm tra lựa chọn theo danh sách`}),`
`,(0,c.jsx)(t.h1,{id:`isselectedbylist`,children:(0,c.jsx)(t.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tác vụ phối khí vươn tầm nâng cấp sức mạnh cho hàm giám kiểm `,(0,c.jsx)(t.code,{children:`isSelected`}),` cơ bản. Khả năng đặc biệt nhất của nó dùng để rà soát cẩn trọng nhằm khẳng định `,(0,c.jsx)(t.strong,{children:`mọi phần tử nội tại`}),` đan xen bên trong một danh mục (`,(0,c.jsx)(t.code,{children:`values`}),`) đều ngoan ngoãn hoàn thành xuất sắc điều khoản tuyển binh (`,(0,c.jsx)(t.code,{children:`selected`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Trót lỡ ném vào tay chỉ vỏn vẹn đúng một kết hạt rời rạc phi tuyến mảng, hệ thống tự buông rèm thoái thác đẩy ngay công việc trở lại tay nhai nền móng `,(0,c.jsx)(t.code,{children:`isSelected`}),`. Tuy vậy, màn kịch hay chỉ vỡ lở khi một dải mảng danh sách trút ào ạt vào khe `,(0,c.jsx)(t.code,{children:`values`}),`. Ngay lập tức, hàm số sẽ thi triển tuyệt kỹ phòng tuyến chà xát `,(0,c.jsx)(t.code,{children:`.every()`}),` để ép cung, thu nạp thông tin chắn chắn 100% `,(0,c.jsx)(t.strong,{children:`từng binh lính bộ phận đơn vị bé nhỏ một`}),` đều phải chiến thắng oanh liệt qua ngọn chông kiểm diệt cá nhân `,(0,c.jsx)(t.code,{children:`isSelected(item, selected)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`values: T | T[]`}),` — Một con cờ đơn tướng hoặc hẳn bầy mảng lính lác đan điền kẹp đội hình chờ dò la định mệnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[]`}),` — Phao tiêu đối chiếu mốc giới, được dùng làm bộ công cụ căn chỉnh chuẩn mực đối trọng (có thể là dòng mã chữ, định mức giá thành, hoặc kho chứa những tập tin quyền lực rào chuẩn).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Trao trả phiếu thắng `,(0,c.jsx)(t.code,{children:`true`}),` với điều kiện duy nhất: tất thảy các binh phong biến thể rải rác đệ danh vào đều vượt rào điều kiện. Thiếu một tên, trượt liền lập tức.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Bức tường đồng chất lượng thắng thế triệt để cả danh sách khi so với 1 lõi tiêu chuẩn lẻ
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Tỏa sáng đăng quang mĩ mãn do cả tốp phần tử 'values' ung dung nương nằm gọn lỏn nội đô mảng 'selected'
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Sụp đổ tan tành. Do tội phạm 'date' ngoi mũi sủi bọt ra khỏi phạm trù vinh danh (mảng selected). Thuật toán .every() cắt thẻ false đuổi cổ. 
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Một khi sài hao quẳng lẻ loi một hột tham số vào phễu values, nguyên hình tái lập lộ mặt nguyên gốc hoạt động y choang isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};