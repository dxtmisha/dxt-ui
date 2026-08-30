import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useGeoIntlRef - Định dạng dữ liệu`}),`
`,(0,c.jsx)(t.h1,{id:`usegeointlref`,children:(0,c.jsx)(t.code,{children:`useGeoIntlRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một composable trả về một instance của lớp `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` để làm việc với quốc tế hóa và định dạng dữ liệu (số, tiền tệ, ngày tháng, v.v.) dựa trên locale hiện tại.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Trả về (`,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),`):`]})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Một đối tượng lớp `,(0,c.jsx)(t.code,{children:`GeoIntlRef`}),` cung cấp các phương thức để định dạng phản ứng.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`các-phương-thức-của-geointlref`,children:[`Các phương thức của `,(0,c.jsx)(t.code,{children:`GeoIntlRef`})]}),`
`,(0,c.jsx)(t.p,{children:`Lớp này cung cấp các phương thức phản ứng để định dạng. Tất cả các phương thức có sẵn của lớp này có thể được tìm thấy trong mô tả GeoIntlRef.`}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useGeoIntlRef } from '@dxtmisha/functional'

const intl = useGeoIntlRef()

// Định dạng số phản ứng
const formattedNumber = intl.number(1234.56) // "1.234,56" (cho vi-VN)

// Định dạng tiền tệ
const price = intl.currency(1000, 'VND') // "1.000 ₫"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};