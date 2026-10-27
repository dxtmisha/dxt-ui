import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getSeparatingSearchExp - Tạo RegExp tìm kiếm theo từ tách biệt`}),`
`,(0,c.jsx)(t.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(t.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(t.code,{children:`RegExp`}),` toàn cục, không phân biệt chữ hoa/thường để tìm kiếm các chuỗi chứa `,(0,c.jsx)(t.strong,{children:`bất kỳ`}),` từ nào từ chuỗi truy vấn (phân tách bởi khoảng trắng), hoặc sao chép một `,(0,c.jsx)(t.code,{children:`RegExp`}),` được truyền vào mà vẫn giữ nguyên mẫu và các cờ của nó.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Các từ duy nhất được phân tách bằng khoảng trắng, sắp xếp theo độ dài giảm dần, tự động escape các ký tự đặc biệt của regex, và nối với nhau bằng toán tử `,(0,c.jsx)(t.code,{children:`|`}),` bên trong một nhóm bắt giữ `,(0,c.jsx)(t.code,{children:`(...)`}),`. Tiện ích này cần thiết cho việc lọc tìm kiếm, tokenization và làm nổi bật kết quả khớp (highlighting).`]}),`
`,(0,c.jsx)(t.h3,{id:`các-tính-năng-chính`,children:`Các tính năng chính:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tìm kiếm nhiều từ theo phép tuyển (OR-logic)`}),`: Tách chuỗi theo bất kỳ ký tự khoảng trắng nào (`,(0,c.jsx)(t.code,{children:`/\\s+/`}),`) và kết hợp các từ bằng `,(0,c.jsx)(t.code,{children:`|`}),` bên trong nhóm bắt giữ `,(0,c.jsx)(t.code,{children:`(từ1|từ2)`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ngăn ngừa hiện tượng Prefix Shadowing`}),`: Tự động sắp xếp các từ theo thứ tự độ dài giảm dần, đảm bảo từ ghép dài hơn luôn được ưu tiên so với tiền tố ngắn hơn (`,(0,c.jsx)(t.code,{children:`caterpillar`}),` khớp trọn vẹn thay vì bị cắt ngắn thành `,(0,c.jsx)(t.code,{children:`cat`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khử trùng lặp không phân biệt hoa/thường`}),`: Loại bỏ các từ trùng lặp bất kể chữ hoa hay thường trước khi tạo nhánh biểu thức chính quy (ví dụ: `,(0,c.jsx)(t.code,{children:`apple Apple APPLE`}),` chỉ tạo một token `,(0,c.jsx)(t.code,{children:`(apple)`}),` với cờ `,(0,c.jsx)(t.code,{children:`ig`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Escape toàn diện các ký tự đặc biệt`}),`: Tự động escape tất cả các siêu ký tự regex qua `,(0,c.jsx)(t.code,{children:`escapeExp`}),` (`,(0,c.jsx)(t.code,{children:`.`}),`, `,(0,c.jsx)(t.code,{children:`*`}),`, `,(0,c.jsx)(t.code,{children:`+`}),`, `,(0,c.jsx)(t.code,{children:`?`}),`, `,(0,c.jsx)(t.code,{children:`$`}),`, `,(0,c.jsx)(t.code,{children:`[`}),`, `,(0,c.jsx)(t.code,{children:`]`}),`, `,(0,c.jsx)(t.code,{children:`(`}),`, `,(0,c.jsx)(t.code,{children:`)`}),`, `,(0,c.jsx)(t.code,{children:`|`}),`, v.v.), bảo vệ ứng dụng khỏi lỗi cú pháp và lỗ hổng ReDoS khi người dùng nhập dữ liệu không an toàn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sao chép RegExp an toàn`}),`: Khi truyền vào một đối tượng `,(0,c.jsx)(t.code,{children:`RegExp`}),` có sẵn, hàm tạo một bản sao độc lập với `,(0,c.jsx)(t.code,{children:`lastIndex = 0`}),`, ngăn chặn sai lệch trạng thái và race condition giữa các lần gọi liên tiếp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Fallback an toàn `,(0,c.jsx)(t.code,{children:`/(?!)/`})]}),`: Khi truy vấn tìm kiếm trống, chỉ chứa khoảng trắng, vượt quá độ dài giới hạn hoặc truyền `,(0,c.jsx)(t.code,{children:`RegExp`}),` rỗng (`,(0,c.jsx)(t.code,{children:`/(?:)/`}),` hoặc `,(0,c.jsx)(t.code,{children:`new RegExp('')`}),`), hàm trả về mẫu phủ định `,(0,c.jsx)(t.code,{children:`/(?!)/`}),` đảm bảo không bao giờ khớp với bất kỳ thứ gì và ngăn chặn vòng lặp vô hạn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tương thích SSR & Isomorphic`}),`: Hàm thuần túy (pure function) không có tác dụng phụ, không phụ thuộc vào môi trường trình duyệt (`,(0,c.jsx)(t.code,{children:`window`}),` hay `,(0,c.jsx)(t.code,{children:`document`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string | RegExp`}),` — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi dấu cách, hoặc đối tượng `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — (Tùy chọn) Độ dài tối đa cho phép của chuỗi tìm kiếm (bị bỏ qua nếu một `,(0,c.jsx)(t.code,{children:`RegExp`}),` được truyền vào). Mặc định là `,(0,c.jsx)(t.code,{children:`128`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Biểu thức chính quy với cờ `,(0,c.jsx)(t.code,{children:`ig`}),` (không phân biệt chữ hoa/thường, toàn cục) đối với truy vấn chuỗi, hoặc một bản sao `,(0,c.jsx)(t.code,{children:`RegExp`}),` nếu truyền vào `,(0,c.jsx)(t.code,{children:`RegExp`}),`. Nếu chuỗi tìm kiếm trống, `,(0,c.jsx)(t.code,{children:`limit <= 0`}),`, vượt quá `,(0,c.jsx)(t.code,{children:`limit`}),` hoặc truyền vào `,(0,c.jsx)(t.code,{children:`RegExp`}),` rỗng (`,(0,c.jsx)(t.code,{children:`/(?:)/`}),` hoặc `,(0,c.jsx)(t.code,{children:`new RegExp('')`}),`), hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`/(?!)/`}),` (một biểu thức chính quy không bao giờ khớp với bất kỳ thứ gì).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

// 1. Tìm kiếm nhiều từ tiêu chuẩn (OR logic)
const searchExpression = getSeparatingSearchExp('apple banana')

console.log('an apple and banana'.match(searchExpression)) 
// ['apple', 'banana']

// 2. Ngăn ngừa che khuất tiền tố (sắp xếp giảm dần theo độ dài)
// 'caterpillar' được kiểm tra trước 'cat'
const prefixExpression = getSeparatingSearchExp('cat caterpillar')
const matchedWord = 'caterpillar'.match(prefixExpression)?.[0]
console.log(matchedWord) // 'caterpillar'

// 3. Tự động escape các ký tự đặc biệt
const symbolsExpression = getSeparatingSearchExp('C++ $10 .')
console.log(symbolsExpression.test('Code in C++')) // true
console.log(symbolsExpression.test('Total: $10'))  // true

// 4. Sao chép RegExp có sẵn với cô lập lastIndex
const originalRegExp = /match/g
originalRegExp.lastIndex = 3

const clonedExpression = getSeparatingSearchExp(originalRegExp)
console.log(clonedExpression.lastIndex) // 0
console.log(originalRegExp.lastIndex)   // 3 (đối tượng gốc không bị thay đổi)

// 5. Xử lý an toàn chuỗi trống và giới hạn độ dài
getSeparatingSearchExp('').toString()      // '/(?!)/' (không bao giờ khớp)
getSeparatingSearchExp('   ').toString()   // '/(?!)/'
getSeparatingSearchExp('text', 0)          // '/(?!)/'

// 6. Highlight văn bản và tách token
const highlightExpression = getSeparatingSearchExp('vue vite')
const sourceText = 'Awesome vue and vite setup'

const highlightedHtml = sourceText.replace(
  highlightExpression,
  matchedText => \`<mark>\${matchedText}</mark>\`
)
// 'Awesome <mark>vue</mark> and <mark>vite</mark> setup'

const tokens = sourceText.split(highlightExpression)
// ['Awesome ', 'vue', ' and ', 'vite', ' setup']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};