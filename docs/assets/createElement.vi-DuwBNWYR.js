import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/createElement - Tạo phần tử HTML`}),`
`,(0,c.jsx)(n.h1,{id:`createelement`,children:(0,c.jsx)(n.code,{children:`createElement`})}),`
`,(0,c.jsx)(n.p,{children:`Trong môi trường trình duyệt, tạo một phần tử HTML mới với thẻ được chỉ định và chèn nó vào cây DOM.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này kiểm tra sự tồn tại của môi trường DOM thông qua `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. Nếu mã không chạy trong trình duyệt (ví dụ: trên máy chủ trong quá trình SSR), hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parentElement?: HTMLElement`}),` — Phần tử mẹ sẽ chứa nút DOM mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`tagName: string = 'div'`}),` — Chuỗi xác định loại phần tử sẽ được tạo (mặc định là `,(0,c.jsx)(n.code,{children:`'div'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)`}),` — Một đối tượng chứa các thuộc tính cho phần tử (ví dụ: `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`className`}),`, trình xử lý sự kiện), hoặc một hàm callback để tùy chỉnh cấu hình cho phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`referenceElement?: HTMLElement`}),` — Phần tử mà phía trước nó sẽ chèn phần tử mới. Nếu không được đặt (hoặc truyền `,(0,c.jsx)(n.code,{children:`null`}),`), phần tử sẽ được chèn vào cuối các nút con của thẻ mẹ (`,(0,c.jsx)(n.code,{children:`appendChild`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T | undefined`}),` — Phần tử HTML đã được tạo, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu môi trường DOM không khả dụng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createElement } from '@dxtmisha/functional-basic'

const container = document.getElementById('app')

// Tạo phần tử với đối tượng thuộc tính
const btn = createElement(container, 'button', {
  className: 'primary-btn',
  textContent: 'Nhấn vào tôi',
  onclick: () => alert('Đã nhấn!')
})

// Cấu hình tùy chỉnh thông qua hàm
createElement(container, 'span', (el) => {
  el.style.color = 'red'
  el.dataset.customId = '123'
  el.textContent = 'Văn bản lỗi'
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};