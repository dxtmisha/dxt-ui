import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/handleShare - Chia sẻ dữ liệu qua Web Share API`}),`
`,(0,c.jsx)(t.h1,{id:`handleshare`,children:(0,c.jsx)(t.code,{children:`handleShare`})}),`
`,(0,c.jsxs)(t.p,{children:[`Triệu hồi cơ chế chia sẻ tự nhiên của thiết bị thông qua Web Share API (`,(0,c.jsx)(t.code,{children:`navigator.share`}),`).
Bên trong hàm tự động kiểm tra hỗ trợ bằng `,(0,c.jsx)(t.code,{children:`isShare()`}),` và `,(0,c.jsx)(t.code,{children:`navigator.canShare(data)`}),` trước khi gọi `,(0,c.jsx)(t.code,{children:`navigator.share(data)`}),`. Nếu xảy ra lỗi trong quá trình chia sẻ, lỗi sẽ được chuyển tiếp tới `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` (`,(0,c.jsx)(t.code,{children:`group: 'share'`}),`, `,(0,c.jsx)(t.code,{children:`code: 'error'`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ShareData`}),` — Một đối tượng chứa dữ liệu để chia sẻ (`,(0,c.jsx)(t.code,{children:`title`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`url`}),`, `,(0,c.jsx)(t.code,{children:`files`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu dữ liệu được chia sẻ thành công, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),` (nếu không được hỗ trợ, dữ liệu không hợp lệ hoặc bị hủy/lỗi).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { handleShare, isShare } from '@dxtmisha/functional-basic'

const shareData = {
  title: 'Hãy xem trang web này!',
  text: 'Tôi đã tìm thấy điều gì đó thú vị ở đây.',
  url: 'https://example.com'
}

if (isShare()) {
  const success = await handleShare(shareData)
  
  if (success) {
    console.log('Đã chia sẻ thành công!')
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};