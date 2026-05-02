import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/addTagHighlightMatch - Làm nổi bật các kết quả khớp trong chuỗi`}),`
`,(0,l.jsx)(n.h1,{id:`addtaghighlightmatch`,children:(0,l.jsx)(n.code,{children:`addTagHighlightMatch`})}),`
`,(0,l.jsxs)(n.p,{children:[`Tiện ích để làm nổi bật các kết quả khớp trong một chuỗi bằng cách bọc chúng trong thẻ HTML `,(0,l.jsx)(n.code,{children:`<span>`}),` với một class được chỉ định. Nó sử dụng `,(0,l.jsx)(n.code,{children:`getSeparatingSearchExp`}),` để hỗ trợ tìm kiếm nhiều từ (phân tách bằng dấu cách).`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: string`}),` — Chuỗi ban đầu để xử lý.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`search?: string | RegExp`}),` — Chuỗi tìm kiếm (một hoặc nhiều từ phân tách bằng dấu cách) hoặc biễu thức chính quy.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`className: string = 'sys-highlight-match'`}),` — Class CSS sẽ được thêm vào thẻ `,(0,l.jsx)(n.code,{children:`<span>`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`shouldEscape: boolean = false`}),` — Có nên thoát chuỗi trước khi thêm làm nổi bật hay không.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — Chuỗi với các thẻ HTML được thêm vào để làm nổi bật.`]}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Làm nổi bật một từ đơn
addTagHighlightMatch('Hello world', 'hello')
// '<span class="sys-highlight-match">Hello</span> world'

// Làm nổi bật nhiều từ (logic OR)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Class tùy chỉnh
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'

// Với thoát chuỗi (escaping)
addTagHighlightMatch('<b>bold</b>', 'bold', 'sys-highlight-match', true)
// '&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;'
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};