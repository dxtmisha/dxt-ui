import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/getCurrentDate - Lấy ngày hiện tại"}),`
`,n.jsx(e.h1,{id:"getcurrentdate",children:n.jsx(e.code,{children:"getCurrentDate"})}),`
`,n.jsxs(e.p,{children:["Trả về ngày hiện tại theo định dạng được chỉ định. Hàm này là một wrapper bao quanh lớp ",n.jsx(e.code,{children:"Datetime"})," và cho phép bạn nhanh chóng lấy chuỗi thời gian hiện tại đã được định dạng."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"format: GeoDate"})," — loại định dạng ngày đầu ra (mặc định là ",n.jsx(e.code,{children:"'datetime'"}),"). Hỗ trợ các giá trị: ",n.jsx(e.code,{children:"'date'"}),", ",n.jsx(e.code,{children:"'time'"}),", ",n.jsx(e.code,{children:"'datetime'"}),", ",n.jsx(e.code,{children:"'full'"})," và các giá trị khác."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
Ngày hiện tại dưới dạng chuỗi.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Định dạng chuẩn (datetime)
const now = getCurrentDate()
// Kết quả: "2024-03-15 14:30"

// Chỉ ngày
const date = getCurrentDate('date')
// Kết quả: "2024-03-15"
`})})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{m as default};
