import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getRandomText - Tạo văn bản ngẫu nhiên`}),`
`,(0,c.jsx)(t.h1,{id:`getrandomtext`,children:(0,c.jsx)(t.code,{children:`getRandomText`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo một chuỗi bao gồm số lượng ngẫu nhiên các "từ". Từ ở đây là một chuỗi liên tiếp các ký tự giống nhau với độ dài cụ thể. Hàm này hữu ích trong việc làm dữ liệu giả (placeholder) cho giao diện, nó mô phỏng cách dàn trang chữ thật mà không bị ảnh hưởng bởi ngữ nghĩa hoặc rào cản ngôn ngữ.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này được xây dựng dựa trên các tiện ích `,(0,c.jsx)(t.code,{children:`random`}),` (để lấy ngẫu nhiên các giá trị số) và `,(0,c.jsx)(t.code,{children:`strFill`}),` (để lặp ký tự theo độ dài thành một từ).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number`}),` — Số lượng từ tối thiểu của chuỗi trả về.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Số lượng từ tối đa của chuỗi trả về.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`symbol: string`}),` — (Tùy chọn) Ký tự sẽ được dùng để tạo thành chữ. Mặc định là `,(0,c.jsx)(t.code,{children:`#`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthMin: number`}),` — (Tùy chọn) Chiều dài tối thiểu một từ. Mặc định là `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lengthMax: number`}),` — (Tùy chọn) Chiều dài tối đa của một từ. Mặc định là `,(0,c.jsx)(t.code,{children:`12`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi được tạo bằng các từ cách nhau bởi khoảng trắng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRandomText } from '@dxtmisha/functional-basic'

// Tạo ra từ 2 tới 5 từ bằng ký tự '#'
// Độ dài mỗi từ trong khoảng 2 tới 12 ký tự
console.log(getRandomText(2, 5)) // '#### ## #######'

// Số lượng từ cố định (3) với một ký tự cụ thể ('*')
// Độ dài từ khóa cứng là 5 ký tự
console.log(getRandomText(3, 3, '*', 5, 5)) // '***** ***** *****'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};