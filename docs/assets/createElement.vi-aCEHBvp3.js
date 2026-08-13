import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/createElement - Tạo phần tử HTML`}),`
`,(0,c.jsx)(t.h1,{id:`createelement`,children:(0,c.jsx)(t.code,{children:`createElement`})}),`
`,(0,c.jsx)(t.p,{children:`Trong môi trường trình duyệt, tạo một phần tử HTML mới với thẻ được chỉ định và chèn nó vào cây DOM.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này kiểm tra sự tồn tại của môi trường DOM thông qua `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`. Nếu mã không chạy trong trình duyệt (ví dụ: trên máy chủ trong quá trình SSR), hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cảnh báo (SSR):`}),` Khi chạy trên máy chủ, hàm luôn trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`. Nếu bạn sử dụng nó trong logic hiển thị của component, nó có thể dẫn đến lỗi không khớp hyradtion (hydration mismatch). Bạn nên gọi hàm này trong các hook vòng đời chỉ chạy trên client (ví dụ: `,(0,c.jsx)(t.code,{children:`onMounted`}),` trong Vue hoặc `,(0,c.jsx)(t.code,{children:`useEffect`}),` trong React).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parentElement?: HTMLElement`}),` — Phần tử mẹ sẽ chứa nút DOM mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tagName: string = 'div'`}),` — Chuỗi xác định loại phần tử sẽ được tạo (mặc định là `,(0,c.jsx)(t.code,{children:`'div'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)`}),` — Một đối tượng chứa các thuộc tính cho phần tử (ví dụ: `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`className`}),`, trình xử lý sự kiện), hoặc một hàm callback để tùy chỉnh cấu hình cho phần tử.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`referenceElement?: HTMLElement`}),` — Phần tử mà phía trước nó sẽ chèn phần tử mới. Nếu không được đặt (hoặc truyền `,(0,c.jsx)(t.code,{children:`null`}),`), phần tử sẽ được chèn vào cuối các nút con của thẻ mẹ (`,(0,c.jsx)(t.code,{children:`appendChild`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T | undefined`}),` — Phần tử HTML đã được tạo, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu môi trường DOM không khả dụng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createElement } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};