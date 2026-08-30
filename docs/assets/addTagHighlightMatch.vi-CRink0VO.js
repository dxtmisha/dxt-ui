import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/addTagHighlightMatch - Làm nổi bật các kết quả khớp trong chuỗi`}),`
`,(0,l.jsx)(t.h1,{id:`addtaghighlightmatch`,children:(0,l.jsx)(t.code,{children:`addTagHighlightMatch`})}),`
`,(0,l.jsxs)(t.p,{children:[`Tiện ích để làm nổi bật các kết quả khớp trong một chuỗi bằng cách bọc chúng trong thẻ HTML `,(0,l.jsx)(t.code,{children:`<span>`}),` với một class được chỉ định. Nó sử dụng `,(0,l.jsx)(t.code,{children:`getSeparatingSearchExp`}),` để hỗ trợ tìm kiếm nhiều từ (phân tách bằng dấu cách).`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string`}),` — Chuỗi ban đầu để xử lý.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`search?: string | RegExp`}),` — Chuỗi tìm kiếm (một hoặc nhiều từ phân tách bằng dấu cách) hoặc biễu thức chính quy.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`className: string = 'sys-highlight-match'`}),` — Class CSS sẽ được thêm vào thẻ `,(0,l.jsx)(t.code,{children:`<span>`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`shouldEscape: boolean = false`}),` — Có nên thoát chuỗi trước khi thêm làm nổi bật hay không.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Chuỗi với các thẻ HTML được thêm vào để làm nổi bật.`]}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};