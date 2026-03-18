import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/Composables/useAi - Lấy instance AI"}),`
`,n.jsx(e.h1,{id:"useai",children:n.jsx(e.code,{children:"useAi"})}),`
`,n.jsx(e.p,{children:"Composable để lấy một instance AI dựa trên cấu hình hiện tại."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"AiAbstract | undefined"})," — Một instance của lớp AI (ví dụ: ",n.jsx(e.code,{children:"AiGoogle"})," hoặc ",n.jsx(e.code,{children:"AiGoogleCli"}),") dựa trên loại AI được định cấu hình, hoặc ",n.jsx(e.code,{children:"undefined"})," nếu loại đó không được nhận dạng hoặc không được định cấu hình."]}),`
`,n.jsx(e.h2,{id:"cơ-chế-hoạt-động",children:"Cơ chế hoạt động"}),`
`,n.jsxs(e.p,{children:["Composable đọc loại AI từ ",n.jsx(e.code,{children:"PropertiesConfig.getAiType()"})," và trả về một instance mới của lớp tương ứng:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'gemini'"})," trả về một instance ",n.jsx(e.code,{children:"AiGoogle"})," mới."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'gemini-cli'"})," trả về một instance ",n.jsx(e.code,{children:"AiGoogleCli"})," mới."]}),`
`,n.jsxs(e.li,{children:["Các loại khác trả về ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Sử dụng instance AI
  const response = await ai.generate('Xin chào, AI!')
  console.log(response)
}
`})})]})}function x(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{x as default};
