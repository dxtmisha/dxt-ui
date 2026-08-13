import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/getBind - Tạo liên kết`}),`
`,(0,c.jsx)(t.h1,{id:`getbind`,children:(0,c.jsx)(t.code,{children:`getBind`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm tiện ích cơ bản để tạo đối tượng các thuộc tính cho một thành phần phụ dựa trên các giá trị bình thường (không phản ứng). Nó xử lý các loại đầu vào khác nhau và đảm bảo cấu trúc nhất quán cho việc liên kết thuộc tính.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T | R | undefined | null`}),` — Giá trị đầu vào cần liên kết. Có thể là kiểu nguyên thủy hoặc đối tượng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nameExtra: ItemList | string = {}`}),` — Các thuộc tính bổ sung để hợp nhất hoặc tên của thuộc tính sẽ sử dụng nếu `,(0,c.jsx)(t.code,{children:`value`}),` không phải là một đối tượng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string = 'value'`}),` — Tên thuộc tính mặc định (mặc định là `,(0,c.jsx)(t.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`except: boolean = false`}),` — Nếu true, sẽ bỏ qua việc kiểm tra yêu cầu khóa chính trong đối tượng `,(0,c.jsx)(t.code,{children:`value`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — Một đối tượng chứa các thuộc tính sẵn sàng để liên kết.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getBind } from '@dxtmisha/functional'

// Trường hợp 1: Giá trị đơn giản
const bind1 = getBind('Xin chào', {}, 'label') 
// Kết quả: { label: 'Xin chào' }

// Trường hợp 2: Đối tượng với các thuộc tính bổ sung
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Kết quả: { id: 1, class: 'active' }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};