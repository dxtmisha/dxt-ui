import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# Biểu thức chính quy`}),`
`,(0,c.jsx)(n.h1,{id:`biểu-thức-chính-quy`,children:`Biểu thức chính quy`}),`
`,(0,c.jsx)(n.p,{children:`Bộ tiện ích để đơn giản hóa công việc với biểu thức chính quy. Bao gồm các phương thức để thoát đầu vào của người dùng một cách an toàn và tạo các mẫu phức tạp cho các tìm kiếm "chứa tất cả các từ" hoặc "chứa bất kỳ từ nào".`}),`
`,(0,c.jsx)(n.h2,{id:`thoát-và-tạo`,children:`Thoát và Tạo`}),`
`,(0,c.jsx)(n.p,{children:`Sử dụng chuỗi bên trong biểu thức chính quy một cách an toàn mà không có nguy cơ lỗi cú pháp.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { escapeExp, getExp } from '@dxtmisha/functional-basic'

// 1. Thoát các ký tự đặc biệt (.*+?^\${}()|[\\]\\)
const safeText = escapeExp('price block ($)') // 'price block \\(\\$\\)'

// 2. Tạo đối tượng RegExp nhanh chóng với các cờ
const regex = getExp('search-term', 'ig') 
`})}),`
`,(0,c.jsx)(n.h2,{id:`mẫu-tìm-kiếm`,children:`Mẫu Tìm kiếm`}),`
`,(0,c.jsx)(n.p,{children:`Các bộ tạo chuyên dụng để triển khai chức năng tìm kiếm và lọc.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { 
  getSearchExp, 
  getSeparatingSearchExp, 
  getExactSearchExp 
} from '@dxtmisha/functional-basic'

// 1. Tìm kiếm "chứa tất cả các từ" (thứ tự bất kỳ)
// Phù hợp cho: "mua xe đỏ" -> khớp với "xe đỏ mua"
const searchAll = getSearchExp('xe đỏ')

// 2. Tìm kiếm "chứa bất kỳ từ nào" (dựa trên OR)
const searchAny = getSeparatingSearchExp('apple orange') // (apple|orange)

// 3. Khớp từ chính xác
const exact = getExactSearchExp('React') // Khớp 'React', nhưng không khớp 'Reactions'
`})}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-thực-tế`,children:`Ví dụ thực tế`}),`
`,(0,c.jsx)(n.p,{children:`Sử dụng trong lọc mảng dữ liệu:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const search = 'John Developer'
const regex = getSearchExp(search)

const users = [
  { name: 'John Doe', job: 'Senior Developer' },
  { name: 'Peter Johnson', job: 'Designer' }
]

// Sẽ tìm thấy người dùng đầu tiên, vì dữ liệu của họ chứa cả hai từ
const filtered = users.filter(u => \`\${u.name} \${u.job}\`.match(regex))
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};