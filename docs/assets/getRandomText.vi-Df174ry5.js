import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getRandomText - Tạo văn bản ngẫu nhiên`}),`
`,(0,c.jsx)(n.h1,{id:`getrandomtext`,children:(0,c.jsx)(n.code,{children:`getRandomText`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một chuỗi bao gồm số lượng ngẫu nhiên các "từ". Từ ở đây là một chuỗi liên tiếp các ký tự giống nhau với độ dài cụ thể. Hàm này hữu ích trong việc làm dữ liệu giả (placeholder) cho giao diện, nó mô phỏng cách dàn trang chữ thật mà không bị ảnh hưởng bởi ngữ nghĩa hoặc rào cản ngôn ngữ.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này được xây dựng dựa trên các tiện ích `,(0,c.jsx)(n.code,{children:`random`}),` (để lấy ngẫu nhiên các giá trị số) và `,(0,c.jsx)(n.code,{children:`strFill`}),` (để lặp ký tự theo độ dài thành một từ).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number`}),` — Số lượng từ tối thiểu của chuỗi trả về.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Số lượng từ tối đa của chuỗi trả về.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`symbol: string`}),` — (Tùy chọn) Ký tự sẽ được dùng để tạo thành chữ. Mặc định là `,(0,c.jsx)(n.code,{children:`#`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthMin: number`}),` — (Tùy chọn) Chiều dài tối thiểu một từ. Mặc định là `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lengthMax: number`}),` — (Tùy chọn) Chiều dài tối đa của một từ. Mặc định là `,(0,c.jsx)(n.code,{children:`12`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi được tạo bằng các từ cách nhau bởi khoảng trắng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Tạo ra từ 2 tới 5 từ bằng ký tự '#'
// Độ dài mỗi từ trong khoảng 2 tới 12 ký tự
console.log(getRandomText(2, 5)) // '#### ## #######'

// Số lượng từ cố định (3) với một ký tự cụ thể ('*')
// Độ dài từ khóa cứng là 5 ký tự
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};