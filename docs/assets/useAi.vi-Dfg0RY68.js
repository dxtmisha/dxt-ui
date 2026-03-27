import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Composables/useAi - Lấy instance AI`}),`
`,(0,c.jsx)(n.h1,{id:`useai`,children:(0,c.jsx)(n.code,{children:`useAi`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để lấy một instance AI dựa trên cấu hình hiện tại.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`AiAbstract | undefined`}),` — Một instance của lớp AI (ví dụ: `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` hoặc `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),`) dựa trên loại AI được định cấu hình, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu loại đó không được nhận dạng hoặc không được định cấu hình.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Composable đọc loại AI từ `,(0,c.jsx)(n.code,{children:`PropertiesConfig.getAiType()`}),` và trả về một instance mới của lớp tương ứng:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'gemini'`}),` trả về một instance `,(0,c.jsx)(n.code,{children:`AiGoogle`}),` mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'gemini-cli'`}),` trả về một instance `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Các loại khác trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Sử dụng instance AI
  const response = await ai.generate('Xin chào, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};