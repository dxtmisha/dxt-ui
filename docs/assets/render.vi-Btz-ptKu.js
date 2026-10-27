import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/render - Render component với Key`}),`
`,(0,c.jsx)(t.h1,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm bao bọc `,(0,c.jsx)(t.code,{children:`h`}),` (hyperscript) của Vue, tự động tạo key cho component từ các định danh ổn định.`]}),`
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
// key => 'div'

// Render một thành phần với index cụ thể để tạo key
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => 'my-component.item-1'
`})}),`
`,(0,c.jsx)(t.h3,{id:`cách-tạo-key`,children:`Cách tạo Key`}),`
`,(0,c.jsxs)(t.p,{children:[`Giá trị `,(0,c.jsx)(t.code,{children:`props.key`}),` được chỉ định sẽ được giữ nguyên. Nếu không có, key được tạo từ các định danh sau theo thứ tự: tên component dạng chuỗi không có dấu chấm ở đầu, các định danh tiếp theo được nối bằng dấu chấm:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`name`})}),` — nếu `,(0,c.jsx)(t.code,{children:`name`}),` là chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.index`})}),` — từ tham số thứ tư của `,(0,c.jsx)(t.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.props.index`})}),` — nếu được truyền dưới dạng chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`.props.id`})}),` — nếu ID được chỉ định trong `,(0,c.jsx)(t.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`CSS class không ảnh hưởng đến key tự động, nên thay đổi class giữ nguyên DOM node và trạng thái component. Thay đổi có chủ ý đối với `,(0,c.jsx)(t.code,{children:`props.key`}),` vẫn có thể thay thế node. Với các phần tử cùng cấp trong danh sách, cung cấp key hoặc định danh ổn định duy nhất; chỉ tên component không đảm bảo tính duy nhất.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};