import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/isMetaKey - Kiểm tra nhấn phím bổ trợ/phím meta`}),`
`,(0,c.jsx)(n.h1,{id:`ismetakey`,children:(0,c.jsx)(n.code,{children:`isMetaKey`})}),`
`,(0,c.jsx)(n.p,{children:`Kiểm tra xem sự kiện bàn phím có chứa các phím bổ trợ/phím meta đang hoạt động (Command, Alt/Option, Control) hay không. Hàm này hữu ích để lọc các sự kiện bàn phím khi bạn muốn bỏ qua các tổ hợp phím bổ trợ (ví dụ: CMD+C, CTRL+V, ALT+TAB).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — đối tượng sự kiện bàn phím.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu bất kỳ phím nào trong số `,(0,c.jsx)(n.code,{children:`metaKey`}),`, `,(0,c.jsx)(n.code,{children:`altKey`}),` hoặc `,(0,c.jsx)(n.code,{children:`ctrlKey`}),` được nhấn, ngược lại là `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Các thuộc tính sự kiện được hỗ trợ:`}),`
Hàm kiểm tra các thuộc tính sự kiện sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`metaKey`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`altKey`})}),`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`ctrlKey`})}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isMetaKey } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isMetaKey(event)) {
    // Bỏ qua tổ hợp phím bổ trợ
    return
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};