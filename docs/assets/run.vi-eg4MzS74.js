import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/run - Thực thi lệnh gói`}),`
`,(0,c.jsx)(t.h1,{id:`run`,children:(0,c.jsx)(t.code,{children:`run`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm bất đồng bộ để thực thi một lệnh shell bên trong thư mục làm việc của gói được chỉ định.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`packageFile: PackageFile`}),` — Đối tượng biểu diễn tệp gói cung cấp tên gói và đường dẫn thư mục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`command: string`}),` — Chuỗi lệnh shell cần thực thi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showStdout: boolean`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),` Cờ hiển thị `,(0,c.jsx)(t.code,{children:`stdout`}),` ra console.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`showStderr: boolean`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`false`}),`)`]}),` Cờ hiển thị `,(0,c.jsx)(t.code,{children:`stderr`}),` ra console.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<boolean>`}),` — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu lệnh hoàn thành thành công (exit code 0), hoặc `,(0,c.jsx)(t.code,{children:`false`}),` nếu phát sinh lỗi.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm thực thi lệnh bất đồng bộ thông qua `,(0,c.jsx)(t.code,{children:`child_process.exec`}),` bên trong thư mục gói `,(0,c.jsx)(t.code,{children:`packageFile.getDir()`}),`. Khi xảy ra lỗi, hàm sẽ bắt ngoại lệ, ghi log lỗi và trả về `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PackageFile, run } from '@dxtmisha/scripts'

const packageFile = new PackageFile(['packages', 'core'])
const success = await run(packageFile, 'npm run build', true, true)

if (success) {
  console.log('Biên dịch gói thành công')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};