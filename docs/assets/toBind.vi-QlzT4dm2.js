import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/toBind - Hợp nhất thuộc tính sâu`}),`
`,(0,c.jsx)(t.h1,{id:`tobind`,children:(0,c.jsx)(t.code,{children:`toBind`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hợp nhất hai đối tượng thuộc tính trong khi xử lý thông minh các thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),` và `,(0,c.jsx)(t.code,{children:`style`}),`. Nếu cả hai đối tượng đều chứa class hoặc style, chúng sẽ được kết hợp thành một mảng để tránh bị ghi đè. Các thuộc tính khác từ đối tượng thứ hai (`,(0,c.jsx)(t.code,{children:`value`}),`) sẽ ghi đè lên các thuộc tính trong đối tượng thứ nhất (`,(0,c.jsx)(t.code,{children:`extra`}),`).`]}),`
`,(0,c.jsx)(t.h3,{id:`cơ-chế-hoạt-động-cơ-chế-hợp-nhất`,children:`Cơ chế hoạt động (Cơ chế hợp nhất)`}),`
`,(0,c.jsx)(t.p,{children:`Hàm nhận hai đối tượng và trả về một đối tượng mới bằng cách hợp nhất các thuộc tính của chúng theo các quy tắc sau:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thuộc tính tiêu chuẩn:`}),` Các thuộc tính từ đối tượng thứ hai (`,(0,c.jsx)(t.code,{children:`value`}),`) sẽ ghi đè các thuộc tính có cùng tên từ đối tượng thứ nhất (`,(0,c.jsx)(t.code,{children:`extra`}),`). Đây là hành vi tiêu chuẩn của toán tử spread (`,(0,c.jsx)(t.code,{children:`...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),`:`]}),` Nếu thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),` chỉ có mặt trong `,(0,c.jsx)(t.strong,{children:`một`}),` trong các đối tượng, nó sẽ được giữ nguyên. Tuy nhiên, nếu class được chỉ định ở `,(0,c.jsx)(t.strong,{children:`cả hai`}),` đối tượng, hàm sẽ không ghi đè chúng; thay vào đó, nó kết hợp chúng thành một mảng `,(0,c.jsx)(t.code,{children:`[extra.class, value.class]`}),`. Điều này giúp đảm bảo tất cả các class được truyền vào thành phần đều được giữ lại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Thuộc tính `,(0,c.jsx)(t.code,{children:`style`}),`:`]}),` Hoạt động tương tự như các class. Sự hiện diện của style trong cả hai đối tượng sẽ dẫn đến việc chúng được kết hợp thành một mảng `,(0,c.jsx)(t.code,{children:`[extra.style, value.style]`}),`, điều này cần thiết để áp dụng style chính xác trong Vue.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extra: ItemList`}),` — Đối tượng thuộc tính cơ sở (ví dụ: thuộc tính mặc định hoặc nội bộ).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ItemList`}),` — Đối tượng thuộc tính cần hợp nhất vào cơ sở (ví dụ: thuộc tính do người dùng cung cấp).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — Đối tượng thuộc tính đã được hợp nhất.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toBind } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};