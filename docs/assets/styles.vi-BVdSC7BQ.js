import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI Figma/# Làm việc với Style`}),`
`,(0,c.jsx)(n.h1,{id:`làm-việc-với-style`,children:`Làm việc với Style`}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống truy xuất dữ liệu style mở rộng cho phép chuyển các thông tin chi tiết (CSS, cấu trúc JSON, nội dung văn bản) từ canvas Figma đến giao diện của plugin theo yêu cầu.`}),`
`,(0,c.jsx)(n.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`Ở phía mã plugin, bạn cần khởi tạo một trình xử lý để phản hồi các yêu cầu dữ liệu từ UI.`}),`
`,(0,c.jsx)(n.h4,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Gọi hàm `,(0,c.jsx)(n.code,{children:`setupFrameStyles()`}),` một lần khi plugin bắt đầu:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { setupFrameStyles } from '@dxtmisha/figma-code'

// Khởi tạo trình xử lý yêu cầu style
setupFrameStyles()
`})}),`
`,(0,c.jsx)(n.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`Các công cụ để gửi yêu cầu lấy style và quan sát kết quả một cách phản ứng (reactive).`}),`
`,(0,c.jsx)(n.h4,{id:`sử-dụng-phản-ứng-vue`,children:`Sử dụng Phản ứng (Vue)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cách được khuyến nghị là thông qua composable `,(0,c.jsx)(n.code,{children:`useFigmaFrameStyles`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaFrameStyles } from '@dxtmisha/figma-ref'

const { 
  styles, // Danh sách các style đã lấy (ComputedRef)
  send    // Phương thức gửi yêu cầu: send({ ids, children })
} = useFigmaFrameStyles()

// Ví dụ yêu cầu style cho các node cụ thể
const fetchDetails = () => {
  send({ ids: ['1:10', '1:25'], children: true })
}
`})}),`
`,(0,c.jsx)(n.h4,{id:`quản-lý-trực-tiếp-javascript`,children:`Quản lý Trực tiếp (JavaScript)`}),`
`,(0,c.jsx)(n.p,{children:`Nếu bạn không sử dụng Vue, bạn có thể sử dụng các hàm cơ bản để gửi yêu cầu và đăng ký nhận phản hồi:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { sendFrameStyles, fetchFrameStyles } from '@dxtmisha/figma'

// Yêu cầu style
sendFrameStyles({ ids: '1:10', children: true })

// Đăng ký nhận dữ liệu
fetchFrameStyles((data) => {
  console.log('Đã nhận dữ liệu style:', data)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};