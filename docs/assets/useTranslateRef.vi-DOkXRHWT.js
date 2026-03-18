import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Composables/useTranslateRef - Bản địa hóa và dịch thuật"}),`
`,n.jsx(t.h1,{id:"usetranslateref",children:n.jsx(t.code,{children:"useTranslateRef"})}),`
`,n.jsx(t.p,{children:"Composable để lấy các bản dịch phản ứng dựa trên các khóa hoặc một mảng các khóa. Nó tự động cập nhật khi ngôn ngữ của ứng dụng thay đổi."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"names: (string | string[])[]"})," — một chuỗi hoặc một mảng các khóa để dịch."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Trả về:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"ShallowRef<TranslateList<T>>"})," — một tham chiếu phản ứng nông chứa các văn bản đã dịch."]}),`
`]}),`
`,n.jsx(t.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { useTranslateRef, t } from '@dxtmisha/functional'

// Cách sử dụng cơ bản
const translations = useTranslateRef(['home.title', 'home.description'])

// Sử dụng viết tắt 't'
const labels = t(['button.save', 'button.cancel'])

// Trong template: <h1>{{ translations['home.title'] }}</h1>
`})})]})}function m(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
