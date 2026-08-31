import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isMetaKey - Kiểm tra nhấn phím bổ trợ/phím meta`}),`
`,(0,c.jsx)(t.h1,{id:`ismetakey`,children:(0,c.jsx)(t.code,{children:`isMetaKey`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem sự kiện bàn phím có chứa các phím bổ trợ/phím meta đang hoạt động (Command, Alt/Option, Control) hay không. Hàm này hữu ích để lọc các sự kiện bàn phím khi bạn muốn bỏ qua các tổ hợp phím bổ trợ (ví dụ: CMD+C, CTRL+V, ALT+TAB).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — đối tượng sự kiện bàn phím.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu bất kỳ phím nào trong số `,(0,c.jsx)(t.code,{children:`metaKey`}),`, `,(0,c.jsx)(t.code,{children:`altKey`}),` hoặc `,(0,c.jsx)(t.code,{children:`ctrlKey`}),` được nhấn, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Các thuộc tính sự kiện được hỗ trợ:`}),`
Hàm kiểm tra các thuộc tính sự kiện sau:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`metaKey`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`altKey`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`ctrlKey`})}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isMetaKey } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isMetaKey(event)) {
    // Bỏ qua tổ hợp phím bổ trợ
    return
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};