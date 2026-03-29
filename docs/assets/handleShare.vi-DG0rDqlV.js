import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/handleShare - Chia sẻ dữ liệu qua Web Share API`}),`
`,(0,c.jsx)(n.h1,{id:`handleshare`,children:(0,c.jsx)(n.code,{children:`handleShare`})}),`
`,(0,c.jsxs)(n.p,{children:[`Triệu hồi cơ chế chia sẻ tự nhiên của thiết bị như một phần của Web Share API.
Nên kiểm tra hỗ trợ bằng `,(0,c.jsx)(n.code,{children:`isShare`}),` trước khi gọi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: ShareData`}),` — một đối tượng chứa dữ liệu để chia sẻ (tiêu đề, văn bản, đường dẫn).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu dữ liệu được chia sẻ thành công, ngược lại là `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { handleShare, isShare } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};