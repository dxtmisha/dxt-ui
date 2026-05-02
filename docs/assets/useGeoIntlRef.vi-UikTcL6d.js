import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useGeoIntlRef - Định dạng dữ liệu`}),`
`,(0,c.jsx)(n.h1,{id:`usegeointlref`,children:(0,c.jsx)(n.code,{children:`useGeoIntlRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một composable trả về một instance của lớp `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` để làm việc với quốc tế hóa và định dạng dữ liệu (số, tiền tệ, ngày tháng, v.v.) dựa trên locale hiện tại.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Trả về (`,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),`):`]})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Một đối tượng lớp `,(0,c.jsx)(n.code,{children:`GeoIntlRef`}),` cung cấp các phương thức để định dạng phản ứng.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`các-phương-thức-của-geointlref`,children:[`Các phương thức của `,(0,c.jsx)(n.code,{children:`GeoIntlRef`})]}),`
`,(0,c.jsx)(n.p,{children:`Lớp này cung cấp các phương thức phản ứng để định dạng. Tất cả các phương thức có sẵn của lớp này có thể được tìm thấy trong mô tả GeoIntlRef.`}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Định dạng số phản ứng
const formattedNumber = intl.number(1234.56) // "1.234,56" (cho vi-VN)

// Định dạng tiền tệ
const price = intl.currency(1000, 'VND') // "1.000 ₫"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};