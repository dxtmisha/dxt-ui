import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/# Icons`}),`
`,(0,c.jsx)(t.h1,{id:`icons`,children:`Icons`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`Icons`}),` là một registry tập trung để đăng ký, lưu trữ và tải chậm (lazy-loading) các icon. Nó quản lý đường dẫn tài nguyên, hỗ trợ import động và đồng bộ hóa trạng thái giữa các phần khác nhau của ứng dụng thông qua một đối tượng toàn cục.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// 1. Thiết lập đường dẫn cơ sở (mặc định là /icons/)
Icons.setUrl('/assets/icons/')

// 2. Đăng ký icon
Icons.add('home', 'home-icon.svg')
Icons.addByList({
  'search': 'search.svg',
  'close': 'close.svg'
})

// 3. Kiểm tra và lấy dữ liệu
if (Icons.is('home')) {
  const path = await Icons.get('home')
}

// 4. Lấy dữ liệu đồng bộ
const fastPath = Icons.getAsync('search') // trả về chuỗi hoặc chuỗi rỗng
`})}),`
`,(0,c.jsx)(t.h2,{id:`tải-chậm-lazy-loading`,children:`Tải chậm (Lazy Loading)`}),`
`,(0,c.jsxs)(t.p,{children:[`Một tính năng chính là hỗ trợ `,(0,c.jsx)(t.code,{children:`Promise`}),` và các hàm, cho phép các icon chỉ được tải khi chúng thực sự cần thiết, giúp giảm dung lượng tải ban đầu của ứng dụng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Đăng ký qua import động
Icons.add('user', () => import('./user.svg'))

// Tự động đợi khi gọi get
const iconData = await Icons.get('user')
`})}),`
`,(0,c.jsx)(t.h2,{id:`đồng-bộ-hóa-toàn-cục`,children:`Đồng bộ hóa toàn cục`}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ tự động duy trì tính phù hợp của dữ liệu trong `,(0,c.jsx)(t.code,{children:`window.__UI_ICON`}),`. Điều này cho phép đăng ký icon ở một nơi (ví dụ: khi khởi tạo ứng dụng) và truy cập ngay lập tức ở bất kỳ đâu trong mã nguồn.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// Thêm icon tương đối với đường dẫn toàn cục
Icons.addGlobal('logo', 'logo.svg')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};