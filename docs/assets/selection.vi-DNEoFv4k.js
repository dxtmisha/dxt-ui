import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/3. Figma/3. Quản lý vùng chọn`}),`
`,(0,c.jsx)(t.h1,{id:`quản-lý-vùng-chọn`,children:`Quản lý vùng chọn`}),`
`,(0,c.jsx)(t.p,{children:`Hệ thống vùng chọn cung cấp sự kết nối giữa canvas Figma và giao diện plugin. Nó cho phép ứng dụng phản ứng với các hành động của người dùng trong trình chỉnh sửa và quản lý tiêu điểm theo chương trình.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`Về phía mã của plugin, cần phải khởi tạo các cơ chế đồng bộ hóa và, nếu cần, sử dụng các hàm để lấy nét theo chương trình.`}),`
`,(0,c.jsx)(t.h4,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:`Gọi một trong các hàm tùy thuộc vào mức độ kiểm soát yêu cầu:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`setupFrameSelection()`})}),` — Được khuyến nghị. Thiết lập giao tiếp hai chiều (theo dõi + chọn theo chương trình từ UI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`makeFigmaFrameSelection()`})}),` — Chỉ thiết lập theo dõi các thay đổi trên canvas Figma (Backend -> UI).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameSelection } from '@dxtmisha/figma-code'

// Được gọi một lần khi khởi động plugin
setupFrameSelection()
`})}),`
`,(0,c.jsx)(t.h4,{id:`quản-lý-theo-chương-trình`,children:`Quản lý theo chương trình`}),`
`,(0,c.jsx)(t.p,{children:`Nếu bạn cần chọn một đối tượng và lấy nét camera vào đối tượng đó trực tiếp từ mã backend:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toFrameSelection } from '@dxtmisha/figma-code'

await toFrameSelection('12:34')
`})}),`
`,(0,c.jsx)(t.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Các công cụ để lấy dữ liệu vùng chọn hiện tại và ra lệnh thay đổi từ giao diện plugin.`}),`
`,(0,c.jsx)(t.h4,{id:`sử-dụng-phản-hồi-vue`,children:`Sử dụng phản hồi (Vue)`}),`
`,(0,c.jsxs)(t.p,{children:[`Cách thuận tiện nhất là thông qua `,(0,c.jsx)(t.code,{children:`useFigmaFrameSelection`}),` composable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaFrameSelection } from '@dxtmisha/figma-ref'

const { 
  selection,    // Danh sách các frame được chọn (ComputedRef)
  setSelection, // Phương thức thay đổi vùng chọn: setSelection(id)
  loading       // Trạng thái tải
} = useFigmaFrameSelection()
`})}),`
`,(0,c.jsx)(t.h4,{id:`điều-khiển-trực-tiếp-javascript`,children:`Điều khiển trực tiếp (JavaScript)`}),`
`,(0,c.jsx)(t.p,{children:`Nếu bạn không sử dụng Vue, bạn có thể gửi lệnh hoặc đăng ký thay đổi thủ công:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sendFrameSelection, fetchFrameSelection } from '@dxtmisha/figma'

// Thay đổi vùng chọn
sendFrameSelection('12:34')

// Đăng ký thay đổi thủ công
fetchFrameSelection((selection) => {
  console.log('Vùng chọn hiện tại:', selection)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};