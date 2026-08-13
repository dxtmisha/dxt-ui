import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/render - Render component với Key`}),`
`,(0,c.jsx)(t.h1,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một bản bọc (wrapper) cho hàm `,(0,c.jsx)(t.code,{children:`h`}),` (hyperscript) của Vue, cung cấp khả năng tự động tạo key cho các thành phần. Nó đảm bảo rằng các thành phần có key duy nhất để render hiệu quả và xử lý các chuyển đổi (transitions), đặc biệt là khi làm việc với danh sách hoặc các phần tử động.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | any`}),` — Tên hoặc thẻ của thành phần cần render.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props?: T`}),` — Các thuộc tính truyền vào thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children?: RawChildren | RawSlots`}),` — Các thành phần con hoặc slot của thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index?: string`}),` — Một chỉ số hoặc định danh tùy chọn được sử dụng để tạo key.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`VNode`}),` — Node ảo đã được render.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { render } from '@dxtmisha/functional'

// Render một div với key được tạo tự động
const vnode = render('div', { class: 'container' }, 'Chào thế giới')
// key => '.div.container'

// Render một thành phần với index cụ thể để tạo key
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,(0,c.jsx)(t.h3,{id:`cách-tạo-key`,children:`Cách tạo Key`}),`
`,(0,c.jsxs)(t.p,{children:[`Key (`,(0,c.jsx)(t.code,{children:`key`}),`) cho Vue component được hình thành theo phương thức `,(0,c.jsx)(t.strong,{children:`cộng dồn (additive)`}),`. Nó luôn bắt đầu bằng một dấu chấm theo sau là tên thành phần (`,(0,c.jsx)(t.code,{children:`.name`}),`), sau đó nối thêm các giá trị sau bằng dấu chấm (nếu chúng tồn tại):`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.name`})}),` — nếu `,(0,c.jsx)(t.code,{children:`name`}),` là một chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.index`}),` — từ tham số thứ ba của hàm `,(0,c.jsx)(t.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.props.index`}),` — nếu có trong đối tượng thuộc tính và là một chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.className`}),` — nếu class được chỉ định trong `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.props.id`}),` — nếu ID được chỉ định trong `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Điều này đảm bảo tính duy nhất của key ngay cả khi tên các thành phần giống nhau.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};