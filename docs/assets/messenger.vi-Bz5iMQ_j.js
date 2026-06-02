import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI Figma/# Hệ thống Messenger`}),`
`,(0,c.jsx)(n.h1,{id:`làm-việc-với-tin-nhắn-messenger`,children:`Làm việc với tin nhắn (Messenger)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cơ chế gửi tin nhắn là mắt xích trung tâm trong kiến trúc của các plugin Figma. Vì "Phía Mã" (Sandbox) và "Phía Giao diện" (UI) chạy trong các môi trường biệt lập, nên bất kỳ tương tác nào giữa chúng đều yêu cầu sử dụng hệ thống `,(0,c.jsx)(n.code,{children:`postMessage`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Thư viện đơn giản hóa quy trình này bằng cách cung cấp các messenger tiêu chuẩn hóa và định tuyến tự động.`}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo-và-bảo-mật`,children:`Khởi tạo và Bảo mật`}),`
`,(0,c.jsxs)(n.p,{children:[`Các plugin Figma hoạt động trong môi trường có thể có nhiều plugin cùng hoạt động. Để ngăn chặn xung đột tin nhắn và đảm bảo UI của bạn chỉ xử lý dữ liệu từ plugin cụ thể của mình, thư viện sử dụng hệ thống `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Cả `,(0,c.jsx)(n.strong,{children:`Backend`}),` và `,(0,c.jsx)(n.strong,{children:`Giao diện`}),` phải được khởi tạo với cùng một mã định danh duy nhất (thường là `,(0,c.jsx)(n.code,{children:`id`}),` từ `,(0,c.jsx)(n.code,{children:`manifest.json`}),` của bạn) trước khi sử dụng messenger.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// Phải được gọi ở cả hai phía (Code và UI)
FigmaPostCode.set(manifest.id)
`})}),`
`,(0,c.jsx)(n.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsxs)(n.p,{children:[`Về phía mã, lớp `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` được sử dụng để đăng ký các sự kiện và gửi dữ liệu đến UI.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaPluginMessenger } from '@dxtmisha/figma-code'
import manifest from '../manifest.json'

// 1. Khởi tạo định danh
FigmaPostCode.set(manifest.id)

// 2. Làm việc với messenger
const messenger = FigmaPluginMessenger.getInstance()

messenger.add('my-action', (data) => {
  console.log('Dữ liệu đã nhận:', data)
  messenger.post('my-action', { status: 'success' })
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong giao diện, lớp gương `,(0,c.jsx)(n.code,{children:`FigmaUiMessenger`}),` được sử dụng để tương tác với backend.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaUiMessenger } from '@dxtmisha/figma'
import manifest from '../manifest.json'

// 1. Khởi tạo định danh (cùng ID với backend)
FigmaPostCode.set(manifest.id)

// 2. Làm việc với messenger
const messenger = FigmaUiMessenger.getInstance()

messenger.post('my-action', { payload: 'hello' })

messenger.add('my-action', (result) => {
  console.log('Kết quả:', result)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};