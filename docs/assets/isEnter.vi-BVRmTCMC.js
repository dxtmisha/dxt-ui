import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/isEnter - Kiểm tra nhấn phím Enter hoặc Space`}),`
`,(0,c.jsx)(n.h1,{id:`isenter`,children:(0,c.jsx)(n.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểm tra xem phím được nhấn có phải là `,(0,c.jsx)(n.code,{children:`Enter`}),` hoặc `,(0,c.jsx)(n.code,{children:`Space`}),` hay không. Hàm này hữu ích để xử lý các sự kiện bàn phím khi bạn cần phản ứng với việc xác nhận hành động hoặc kích hoạt phần tử, đồng thời hỗ trợ khả năng truy cập (a11y) và các trình duyệt cũ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — đối tượng sự kiện bàn phím.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu phím `,(0,c.jsx)(n.code,{children:`Enter`}),` hoặc `,(0,c.jsx)(n.code,{children:`Space`}),` được nhấn, ngược lại là `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Các thuộc tính sự kiện được hỗ trợ:`}),`
Hàm kiểm tra các thuộc tính sự kiện sau để đảm bảo khả năng tương thích tối đa:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code`}),`: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key`}),`: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`' '`}),`, `,(0,c.jsx)(n.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyCode`}),`: `,(0,c.jsx)(n.code,{children:`13`}),`, `,(0,c.jsx)(n.code,{children:`32`})]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Đã nhấn Enter hoặc Space')
    // Thực hiện hành động
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};