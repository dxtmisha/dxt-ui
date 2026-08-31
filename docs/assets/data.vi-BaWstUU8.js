import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/10. Dữ liệu & Kiểu`}),`
`,(0,c.jsx)(t.h1,{id:`dữ-liệu--kiểu`,children:`Dữ liệu & Kiểu`}),`
`,(0,c.jsxs)(t.p,{children:[`Bộ tiện ích để kiểm tra kiểu đáng tin cậy, chuyển đổi dữ liệu an toàn và thao tác hiệu quả các đối tượng và mảng. Các hàm này giúp tránh lỗi `,(0,c.jsx)(t.code,{children:`undefined`}),` và đơn giản hóa việc xử lý các cấu trúc phức tạp.`]}),`
`,(0,c.jsx)(t.h2,{id:`kiểm-tra-kiểu-is`,children:`Kiểm tra kiểu (is...)`}),`
`,(0,c.jsx)(t.p,{children:`Các hàm để xác định kiểu và nội dung của các biến.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { isFilled, isObject, isFunction } from '@dxtmisha/functional-basic'

// 1. Kiểm tra nội dung (chuỗi/mảng/đối tượng không trống)
isFilled('hello') // true
isFilled([])      // false

// 2. Kiểm tra đối tượng (bao gồm mảng, loại trừ null)
isObject({ a: 1 }) // true
isObject([1, 2])   // true

// 3. Kiểm tra đối tượng loại trừ mảng
isObjectNotArray({ a: 1 }) // true
isObjectNotArray([1, 2])   // false

// 4. Kiểm tra xem giá trị có phải là một hàm hay không
isFunction(() => {}) // true
`})}),`
`,(0,c.jsx)(t.h2,{id:`chuyển-đổi-to`,children:`Chuyển đổi (to...)`}),`
`,(0,c.jsx)(t.p,{children:`Các tiện ích để ép kiểu dữ liệu sang kiểu hoặc định dạng mong muốn.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { toNumber, toArray, toCamelCase, transformation } from '@dxtmisha/functional-basic'

// 1. Ép kiểu sang số (có hỗ trợ làm sạch chuỗi)
toNumber('100.50 px') // 100.5

// 2. Đảm bảo là một mảng
toArray('single') // ['single']
toArray([1, 2])   // [1, 2]

// 3. Tự động phát hiện kiểu từ chuỗi
transformation('true')  // true (boolean)
transformation('12.5')  // 12.5 (number)
transformation('{"a":1}') // { a: 1 } (object)

// 4. Định dạng chuỗi
toCamelCase('background-color') // 'backgroundColor'
`})}),`
`,(0,c.jsx)(t.h2,{id:`thao-tác-dữ-liệu`,children:`Thao tác dữ liệu`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức để sao chép sâu và truy cập thuộc tính an toàn.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { copyObject, getItemByPath, getObjectNoUndefined } from '@dxtmisha/functional-basic'

// 1. Sao chép sâu đối tượng
const clone = copyObject(original)

// 2. Truy xuất giá trị an toàn theo đường dẫn
const value = getItemByPath(myData, 'user.profile.name')

// 3. Làm sạch một đối tượng khỏi các giá trị trống
const cleaned = getObjectNoUndefined({ a: 1, b: undefined, c: null }, null) 
// { a: 1, b: undefined } (chỉ loại bỏ c: null)
`})}),`
`,(0,c.jsx)(t.h2,{id:`hoạt-động-với-mảng`,children:`Hoạt động với mảng`}),`
`,(0,c.jsx)(t.p,{children:`Các tiện ích để lọc và lặp.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { uniqueArray, forEach } from '@dxtmisha/functional-basic'

// 1. Loại bỏ các phần tử trùng lặp
uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]

// 2. Bộ lặp vạn năng (cho mảng và đối tượng)
forEach([10, 20], (value, index) => {
  console.log(\`\${index}: \${value}\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};