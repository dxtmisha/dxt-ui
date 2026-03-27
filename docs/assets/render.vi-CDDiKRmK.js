import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/render - Render component với Key`}),`
`,(0,c.jsx)(n.h1,{id:`render`,children:(0,c.jsx)(n.code,{children:`render`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một bản bọc (wrapper) cho hàm `,(0,c.jsx)(n.code,{children:`h`}),` (hyperscript) của Vue, cung cấp khả năng tự động tạo key cho các thành phần. Nó đảm bảo rằng các thành phần có key duy nhất để render hiệu quả và xử lý các chuyển đổi (transitions), đặc biệt là khi làm việc với danh sách hoặc các phần tử động.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string | any`}),` — Tên hoặc thẻ của thành phần cần render.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props?: T`}),` — Các thuộc tính truyền vào thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children?: RawChildren | RawSlots`}),` — Các thành phần con hoặc slot của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index?: string`}),` — Một chỉ số hoặc định danh tùy chọn được sử dụng để tạo key.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`VNode`}),` — Node ảo đã được render.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { render } from '@dxtmisha/functional'

// Render một div với key được tạo tự động
const vnode = render('div', { class: 'container' }, 'Chào thế giới')
// key => '.div.container'

// Render một thành phần với index cụ thể để tạo key
const item = render('my-component', { data: itemData }, null, 'item-1')
// key => '.my-component.item-1'
`})}),`
`,(0,c.jsx)(n.h3,{id:`cách-tạo-key`,children:`Cách tạo Key`}),`
`,(0,c.jsxs)(n.p,{children:[`Key (`,(0,c.jsx)(n.code,{children:`key`}),`) cho Vue component được hình thành theo phương thức `,(0,c.jsx)(n.strong,{children:`cộng dồn (additive)`}),`. Nó luôn bắt đầu bằng một dấu chấm theo sau là tên thành phần (`,(0,c.jsx)(n.code,{children:`.name`}),`), sau đó nối thêm các giá trị sau bằng dấu chấm (nếu chúng tồn tại):`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`.name`})}),` — nếu `,(0,c.jsx)(n.code,{children:`name`}),` là một chuỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.index`}),` — từ tham số thứ ba của hàm `,(0,c.jsx)(n.code,{children:`render`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.props.index`}),` — nếu có trong đối tượng thuộc tính và là một chuỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.className`}),` — nếu class được chỉ định trong `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`.props.id`}),` — nếu ID được chỉ định trong `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Điều này đảm bảo tính duy nhất của key ngay cả khi tên các thành phần giống nhau.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};