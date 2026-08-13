import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Composables/useAi - Lấy instance AI`}),`
`,(0,c.jsx)(t.h1,{id:`useai`,children:(0,c.jsx)(t.code,{children:`useAi`})}),`
`,(0,c.jsx)(t.p,{children:`Composable để lấy một instance AI dựa trên cấu hình hiện tại.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`AiAbstract | undefined`}),` — Một instance của lớp AI (ví dụ: `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` hoặc `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),`) dựa trên loại AI được định cấu hình, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu loại đó không được nhận dạng hoặc không được định cấu hình.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Composable đọc loại AI từ `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getAiType()`}),` và trả về một instance mới của lớp tương ứng:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini'`}),` trả về một instance `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini-cli'`}),` trả về một instance `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Các loại khác trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  // Sử dụng instance AI
  const response = await ai.generate('Xin chào, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};