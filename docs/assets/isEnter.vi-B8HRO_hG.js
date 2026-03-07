import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/isEnter - Kiểm tra nhấn phím Enter hoặc Space"}),`
`,n.jsx(e.h1,{id:"isenter",children:n.jsx(e.code,{children:"isEnter"})}),`
`,n.jsxs(e.p,{children:["Kiểm tra xem phím được nhấn có phải là ",n.jsx(e.code,{children:"Enter"})," hoặc ",n.jsx(e.code,{children:"Space"})," hay không. Hàm này hữu ích để xử lý các sự kiện bàn phím khi bạn cần phản ứng với việc xác nhận hành động hoặc kích hoạt phần tử, đồng thời hỗ trợ khả năng truy cập (a11y) và các trình duyệt cũ."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: KeyboardEvent"})," — đối tượng sự kiện bàn phím."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu phím ",n.jsx(e.code,{children:"Enter"})," hoặc ",n.jsx(e.code,{children:"Space"})," được nhấn, ngược lại là ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Các thuộc tính sự kiện được hỗ trợ:"}),`
Hàm kiểm tra các thuộc tính sự kiện sau để đảm bảo khả năng tương thích tối đa:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"code"}),": ",n.jsx(e.code,{children:"'Enter'"}),", ",n.jsx(e.code,{children:"'Space'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"key"}),": ",n.jsx(e.code,{children:"'Enter'"}),", ",n.jsx(e.code,{children:"' '"}),", ",n.jsx(e.code,{children:"'Spacebar'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keyCode"}),": ",n.jsx(e.code,{children:"13"}),", ",n.jsx(e.code,{children:"32"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Đã nhấn Enter hoặc Space')
    // Thực hiện hành động
  }
}
`})})]})}function j(c={}){const{wrapper:e}={...h(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(r,{...c})}):r(c)}export{j as default};
