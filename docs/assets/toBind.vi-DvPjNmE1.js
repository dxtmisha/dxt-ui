import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Functions/toBind - Hợp nhất thuộc tính sâu`}),`
`,(0,c.jsx)(n.h1,{id:`tobind`,children:(0,c.jsx)(n.code,{children:`toBind`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hợp nhất hai đối tượng thuộc tính trong khi xử lý thông minh các thuộc tính `,(0,c.jsx)(n.code,{children:`class`}),` và `,(0,c.jsx)(n.code,{children:`style`}),`. Nếu cả hai đối tượng đều chứa class hoặc style, chúng sẽ được kết hợp thành một mảng để tránh bị ghi đè. Các thuộc tính khác từ đối tượng thứ hai (`,(0,c.jsx)(n.code,{children:`value`}),`) sẽ ghi đè lên các thuộc tính trong đối tượng thứ nhất (`,(0,c.jsx)(n.code,{children:`extra`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`cơ-chế-hoạt-động-cơ-chế-hợp-nhất`,children:`Cơ chế hoạt động (Cơ chế hợp nhất)`}),`
`,(0,c.jsx)(n.p,{children:`Hàm nhận hai đối tượng và trả về một đối tượng mới bằng cách hợp nhất các thuộc tính của chúng theo các quy tắc sau:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thuộc tính tiêu chuẩn:`}),` Các thuộc tính từ đối tượng thứ hai (`,(0,c.jsx)(n.code,{children:`value`}),`) sẽ ghi đè các thuộc tính có cùng tên từ đối tượng thứ nhất (`,(0,c.jsx)(n.code,{children:`extra`}),`). Đây là hành vi tiêu chuẩn của toán tử spread (`,(0,c.jsx)(n.code,{children:`...`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Thuộc tính `,(0,c.jsx)(n.code,{children:`class`}),`:`]}),` Nếu thuộc tính `,(0,c.jsx)(n.code,{children:`class`}),` chỉ có mặt trong `,(0,c.jsx)(n.strong,{children:`một`}),` trong các đối tượng, nó sẽ được giữ nguyên. Tuy nhiên, nếu class được chỉ định ở `,(0,c.jsx)(n.strong,{children:`cả hai`}),` đối tượng, hàm sẽ không ghi đè chúng; thay vào đó, nó kết hợp chúng thành một mảng `,(0,c.jsx)(n.code,{children:`[extra.class, value.class]`}),`. Điều này giúp đảm bảo tất cả các class được truyền vào thành phần đều được giữ lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Thuộc tính `,(0,c.jsx)(n.code,{children:`style`}),`:`]}),` Hoạt động tương tự như các class. Sự hiện diện của style trong cả hai đối tượng sẽ dẫn đến việc chúng được kết hợp thành một mảng `,(0,c.jsx)(n.code,{children:`[extra.style, value.style]`}),`, điều này cần thiết để áp dụng style chính xác trong Vue.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extra: ItemList`}),` — Đối tượng thuộc tính cơ sở (ví dụ: thuộc tính mặc định hoặc nội bộ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ItemList`}),` — Đối tượng thuộc tính cần hợp nhất vào cơ sở (ví dụ: thuộc tính do người dùng cung cấp).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — Đối tượng thuộc tính đã được hợp nhất.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toBind } from '@dxtmisha/functional'

const base = { class: 'btn', style: { color: 'red' }, id: 'my-btn' }
const mod = { class: 'btn--large', style: { margin: '10px' }, id: 'primary-btn' }

const result = toBind(base, mod)
/* 
Kết quả: { 
  id: 'primary-btn', 
  class: ['btn', 'btn--large'], 
  style: [{ color: 'red' }, { margin: '10px' }] 
}
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};