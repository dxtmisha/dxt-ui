import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useLoadingRef - Trạng thái tải"}),`
`,n.jsx(e.h1,{id:"useloadingref",children:n.jsx(e.code,{children:"useLoadingRef"})}),`
`,n.jsx(e.p,{children:"Composable để lấy trạng thái tải toàn cục."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ShallowRef<boolean>"})," — một tham chiếu phản ứng đến trạng thái tải hiện tại."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useLoadingRef } from '@dxtmisha/functional'

const isLoading = useLoadingRef()

// Sử dụng isLoading.value trong template hoặc logic của bạn
`})})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{m as default};
