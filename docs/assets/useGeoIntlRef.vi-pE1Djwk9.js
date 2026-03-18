import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Composables/useGeoIntlRef - Định dạng dữ liệu"}),`
`,n.jsx(e.h1,{id:"usegeointlref",children:n.jsx(e.code,{children:"useGeoIntlRef"})}),`
`,n.jsxs(e.p,{children:["Một composable trả về một instance của lớp ",n.jsx(e.code,{children:"GeoIntlRef"})," để làm việc với quốc tế hóa và định dạng dữ liệu (số, tiền tệ, ngày tháng, v.v.) dựa trên locale hiện tại."]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Trả về (",n.jsx(e.code,{children:"GeoIntlRef"}),"):"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Một đối tượng lớp ",n.jsx(e.code,{children:"GeoIntlRef"})," cung cấp các phương thức để định dạng phản ứng."]}),`
`]}),`
`,n.jsxs(e.h2,{id:"các-phương-thức-của-geointlref",children:["Các phương thức của ",n.jsx(e.code,{children:"GeoIntlRef"})]}),`
`,n.jsx(e.p,{children:"Lớp này cung cấp các phương thức phản ứng để định dạng. Tất cả các phương thức có sẵn của lớp này có thể được tìm thấy trong mô tả GeoIntlRef."}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Định dạng số phản ứng
const formattedNumber = intl.number(1234.56) // "1.234,56" (cho vi-VN)

// Định dạng tiền tệ
const price = intl.currency(1000, 'VND') // "1.000 ₫"
`})})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{m as default};
