import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isEnter - Kiểm tra nhấn phím Enter hoặc Space`}),`
`,(0,c.jsx)(t.h1,{id:`isenter`,children:(0,c.jsx)(t.code,{children:`isEnter`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem phím được nhấn có phải là `,(0,c.jsx)(t.code,{children:`Enter`}),` hoặc `,(0,c.jsx)(t.code,{children:`Space`}),` hay không. Hàm này hữu ích để xử lý các sự kiện bàn phím khi bạn cần phản ứng với việc xác nhận hành động hoặc kích hoạt phần tử, đồng thời hỗ trợ khả năng truy cập (a11y) và các trình duyệt cũ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — đối tượng sự kiện bàn phím.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu phím `,(0,c.jsx)(t.code,{children:`Enter`}),` hoặc `,(0,c.jsx)(t.code,{children:`Space`}),` được nhấn, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Các thuộc tính sự kiện được hỗ trợ:`}),`
Hàm kiểm tra các thuộc tính sự kiện sau để đảm bảo khả năng tương thích tối đa:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'Space'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key`}),`: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`' '`}),`, `,(0,c.jsx)(t.code,{children:`'Spacebar'`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyCode`}),`: `,(0,c.jsx)(t.code,{children:`13`}),`, `,(0,c.jsx)(t.code,{children:`32`})]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Đã nhấn Enter hoặc Space')
    // Thực hiện hành động
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};