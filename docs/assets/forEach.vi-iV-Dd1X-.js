import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(e){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/forEach - Lặp qua đối tượng hoặc mảng"}),`
`,n.jsx(c.h1,{id:"foreach",children:n.jsx(c.code,{children:"forEach"})}),`
`,n.jsx(c.p,{children:"Hàm thực hiện chức năng được chỉ định một lần cho mỗi phần tử trong đối tượng. Và trả về một mảng với kết quả thực thi hàm."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"data: D"})," — đối tượng để lặp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback: (item: T, key: K, dataMain: typeof data) => R"})," — một hàm để thực thi cho mỗi phần tử trong mảng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"saveUndefined?: boolean"})," — nếu ",n.jsx(c.code,{children:"true"}),", hàm sẽ trả về một mảng bao gồm cả các giá trị ",n.jsx(c.code,{children:"undefined"})," (mặc định sẽ bị lọc bỏ)."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
`,n.jsx(c.code,{children:"R[]"})," — một mảng với kết quả thực thi hàm."]}),`
`,n.jsx(c.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsx(c.p,{children:"Hàm này là một công cụ vạn năng để lặp qua các cấu trúc dữ liệu khác nhau và thu thập kết quả vào một mảng."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tính năng:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ kiểu dữ liệu"})," — hoạt động với ",n.jsx(c.code,{children:"Array"}),", ",n.jsx(c.code,{children:"Map"})," và các đối tượng thông thường (",n.jsx(c.code,{children:"Object"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thu thập kết quả"})," — khác với ",n.jsx(c.code,{children:"forEach"})," tiêu chuẩn, hàm này thu thập các giá trị được trả về từ ",n.jsx(c.code,{children:"callback"})," vào một mảng mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lọc undefined"})," — theo mặc định, tất cả các giá trị ",n.jsx(c.code,{children:"undefined"})," (ví dụ: nếu callback không trả về gì cho một phần tử) sẽ bị lọc bỏ khỏi mảng kết quả."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tham số saveUndefined"})," — nếu truyền ",n.jsx(c.code,{children:"true"})," làm đối số thứ ba, mảng sẽ giữ lại tất cả các kết quả, bao gồm cả ",n.jsx(c.code,{children:"undefined"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { forEach } from '@dxtmisha/functional-basic'

const data = [1, 2, 3]

// Giá trị undefined bị lọc bỏ theo mặc định
forEach(data, (item) => item % 2 === 0 ? item : undefined) // [2]

// Với saveUndefined: true
forEach(data, (item) => item % 2 === 0 ? item : undefined, true) // [undefined, 2, undefined]
`})})]})}function a(e={}){const{wrapper:c}={...i(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(t,{...e})}):t(e)}export{a as default};
