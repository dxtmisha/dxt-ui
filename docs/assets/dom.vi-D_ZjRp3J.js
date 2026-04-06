import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# DOM & Phần tử`}),`
`,(0,c.jsx)(n.h1,{id:`dom--phần-tử`,children:`DOM & Phần tử`}),`
`,(0,c.jsx)(n.p,{children:`Bộ tiện ích để đơn giản hóa công việc với cây DOM. Bao gồm các phương thức để tra cứu phần tử an toàn, tạo nút động với các thuộc tính, cuộn thông minh và kiểm tra trạng thái đối tượng trong môi trường trình duyệt.`}),`
`,(0,c.jsx)(n.h2,{id:`truy-xuất-và-tra-cứu`,children:`Truy xuất và Tra cứu`}),`
`,(0,c.jsx)(n.p,{children:`Các hàm để trích xuất các phần tử bằng các bộ chọn hoặc tham chiếu với các kiểm tra môi trường chạy tự động.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { getElement, domQuerySelector } from '@dxtmisha/functional-basic'

// 1. Lấy một phần tử bằng bộ chọn hoặc tham chiếu
const container = getElement('#app')

// 2. Tìm kiếm trong một cha cụ thể (tìm kiếm theo phạm vi)
const button = domQuerySelector('.btn-submit', container)
`})}),`
`,(0,c.jsx)(n.h2,{id:`tạo-và-thuộc-tính`,children:`Tạo và Thuộc tính`}),`
`,(0,c.jsx)(n.p,{children:`Một cách thuận tiện để tạo các cấu trúc HTML và quản lý các thuộc tính của chúng mà không cần sử dụng các API gốc cồng kềnh.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { createElement, setElementItem } from '@dxtmisha/functional-basic'

// 1. Tạo một phần tử div bên trong #app với các thuộc tính
const el = createElement(document.getElementById('app'), 'div', {
  className: 'p-4 active',
  innerHTML: '<span>Hello World</span>',
  id: 'dynamic-node'
})

// 2. Thiết lập/cập nhật các thuộc tính của phần tử
setElementItem(el, 'title', 'Chú thích khi di chuột')
`})}),`
`,(0,c.jsx)(n.h2,{id:`điều-hướng-và-cuộn`,children:`Điều hướng và Cuộn`}),`
`,(0,c.jsx)(n.p,{children:`Các tiện ích để quản lý việc cuộn vùng chứa và đảm bảo khả năng hiển thị của phần tử.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { goScrollTo, goScrollSmooth } from '@dxtmisha/functional-basic'

const list = getElement('.scroll-container')
const item = getElement('.target-item')

// 1. Cuộn vùng chứa đến một phần tử cụ thể
goScrollTo(list, item, 'smooth')

// 2. Cuộn mượt trang lên đầu
goScrollSmooth(0)
`})}),`
`,(0,c.jsx)(n.h2,{id:`kiểm-tra-trạng-thái`,children:`Kiểm tra trạng thái`}),`
`,(0,c.jsx)(n.p,{children:`Các hàm trợ giúp để xác định loại phần tử và sự hiện diện của chúng trong tài liệu hiện tại.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { isInDom, isElementVisible, isInput } from '@dxtmisha/functional-basic'

// 1. Kiểm tra xem một phần tử có được gắn vào DOM hay không
if (isInDom(el)) {
  console.log('Phần tử nằm trong cây DOM')
}

// 2. Kiểm tra xem một phần tử có hiển thị hay không (không bị ẩn bởi CSS)
if (isElementVisible(el)) {
  console.log('Phần tử hiển thị với người dùng')
}

// 3. Kiểm tra xem một nút có phải là trường nhập liệu hay không
if (isInput(el)) {
  el.focus()
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};