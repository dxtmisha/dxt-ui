import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/createElement - Tạo phần tử HTML"}),`
`,n.jsx(e.h1,{id:"createelement",children:n.jsx(e.code,{children:"createElement"})}),`
`,n.jsx(e.p,{children:"Trong môi trường trình duyệt, tạo một phần tử HTML mới với thẻ được chỉ định và chèn nó vào cây DOM."}),`
`,n.jsxs(e.p,{children:["Hàm này kiểm tra sự tồn tại của môi trường DOM thông qua ",n.jsx(e.code,{children:"isDomRuntime()"}),". Nếu mã không chạy trong trình duyệt (ví dụ: trên máy chủ trong quá trình SSR), hàm sẽ trả về ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"parentElement?: HTMLElement"})," — Phần tử mẹ sẽ chứa nút DOM mới."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"tagName: string = 'div'"})," — Chuỗi xác định loại phần tử sẽ được tạo (mặc định là ",n.jsx(e.code,{children:"'div'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)"})," — Một đối tượng chứa các thuộc tính cho phần tử (ví dụ: ",n.jsx(e.code,{children:"id"}),", ",n.jsx(e.code,{children:"className"}),", trình xử lý sự kiện), hoặc một hàm callback để tùy chỉnh cấu hình cho phần tử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"referenceElement?: HTMLElement"})," — Phần tử mà phía trước nó sẽ chèn phần tử mới. Nếu không được đặt (hoặc truyền ",n.jsx(e.code,{children:"null"}),"), phần tử sẽ được chèn vào cuối các nút con của thẻ mẹ (",n.jsx(e.code,{children:"appendChild"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"T | undefined"})," — Phần tử HTML đã được tạo, hoặc ",n.jsx(e.code,{children:"undefined"})," nếu môi trường DOM không khả dụng."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { createElement } from '@dxtmisha/functional-basic'

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
`})})]})}function a(t={}){const{wrapper:e}={...h(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{a as default};
