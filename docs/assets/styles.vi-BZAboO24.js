import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/3. Figma/5. Làm việc với Style`}),`
`,(0,c.jsx)(t.h1,{id:`làm-việc-với-style`,children:`Làm việc với Style`}),`
`,(0,c.jsx)(t.p,{children:`Hệ thống truy xuất dữ liệu style mở rộng cho phép chuyển các thông tin chi tiết (CSS, cấu trúc JSON, nội dung văn bản) từ canvas Figma đến giao diện của plugin theo yêu cầu.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`Ở phía mã plugin, bạn cần khởi tạo một trình xử lý để phản hồi các yêu cầu dữ liệu từ UI.`}),`
`,(0,c.jsx)(t.h4,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Gọi hàm `,(0,c.jsx)(t.code,{children:`setupFrameStyles()`}),` một lần khi plugin bắt đầu:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { setupFrameStyles } from '@dxtmisha/figma-code'

// Khởi tạo trình xử lý yêu cầu style
setupFrameStyles()
`})}),`
`,(0,c.jsx)(t.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Các công cụ để gửi yêu cầu lấy style và quan sát kết quả một cách phản ứng (reactive).`}),`
`,(0,c.jsx)(t.h4,{id:`sử-dụng-phản-ứng-vue`,children:`Sử dụng Phản ứng (Vue)`}),`
`,(0,c.jsxs)(t.p,{children:[`Cách được khuyến nghị là thông qua composable `,(0,c.jsx)(t.code,{children:`useFigmaFrameStyles`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { 
  styles, // Danh sách các style đã lấy (ComputedRef)
  send    // Phương thức gửi yêu cầu: send({ ids, children })
} = useFigmaFrameStyles()

// Ví dụ yêu cầu style cho các node cụ thể
const fetchDetails = () => {
  send({ ids: ['1:10', '1:25'], children: true })
}
`})}),`
`,(0,c.jsx)(t.h4,{id:`quản-lý-trực-tiếp-javascript`,children:`Quản lý Trực tiếp (JavaScript)`}),`
`,(0,c.jsx)(t.p,{children:`Nếu bạn không sử dụng Vue, bạn có thể sử dụng các hàm cơ bản để gửi yêu cầu và đăng ký nhận phản hồi:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { sendFrameStyles, fetchFrameStyles } from '@dxtmisha/figma'

// Yêu cầu style
sendFrameStyles({ ids: '1:10', children: true })

// Đăng ký nhận dữ liệu
fetchFrameStyles((data) => {
  console.log('Đã nhận dữ liệu style:', data)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};