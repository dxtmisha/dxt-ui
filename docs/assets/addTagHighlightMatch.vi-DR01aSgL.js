import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/addTagHighlightMatch - Làm nổi bật các kết quả khớp trong chuỗi`}),`
`,(0,c.jsx)(n.h1,{id:`addtaghighlightmatch`,children:(0,c.jsx)(n.code,{children:`addTagHighlightMatch`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích để làm nổi bật các kết quả khớp trong một chuỗi bằng cách bọc chúng trong thẻ HTML `,(0,c.jsx)(n.code,{children:`<span>`}),` với một class được chỉ định. Nó sử dụng `,(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`}),` để hỗ trợ tìm kiếm nhiều từ (phân tách bằng dấu cách).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Chuỗi ban đầu để xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search?: string`}),` — Chuỗi tìm kiếm (một hoặc nhiều từ phân tách bằng dấu cách).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`className: string = 'sys-highlight-match'`}),` — Class CSS sẽ được thêm vào thẻ `,(0,c.jsx)(n.code,{children:`<span>`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi với các thẻ HTML được thêm vào để làm nổi bật.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Làm nổi bật một từ đơn
addTagHighlightMatch('Hello world', 'hello') 
// '<span class="sys-highlight-match">Hello</span> world'

// Làm nổi bật nhiều từ (logic OR)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Class tùy chỉnh
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};