import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/# Dịch thuật`}),`
`,(0,c.jsx)(n.h1,{id:`dịch-thuật`,children:`Dịch thuật`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Translate`}),` là một hệ thống tập trung để quản lý nội dung đa ngôn ngữ. Nó hỗ trợ tự động lấy các khóa còn thiếu thông qua API, lưu trữ caching, chèn biến và hệ thống dự phòng đa cấp (fallback).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// 1. Cấu hình API (mặc định là /api/translate)
Translate.setUrl('/api/v1/dictionary')

// 2. Lấy bản dịch (Bất đồng bộ)
// Nếu khóa không có trong cache, nó sẽ tự động được yêu cầu từ máy chủ
const text = await Translate.get('welcome_message', { name: 'Admin' })

// 3. Lấy bản dịch đồng bộ (từ cache)
const label = Translate.getSync('save_button')
`})}),`
`,(0,c.jsx)(n.h2,{id:`chèn-biến-interpolation`,children:`Chèn biến (Interpolation)`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp hỗ trợ hệ thống chèn linh hoạt thông qua hàm `,(0,c.jsx)(n.code,{children:`applyTemplate`}),`. Bạn có thể sử dụng các khóa có tên, dấu mốc vị trí hoặc các trình bao bọc chức năng.`]}),`
`,(0,c.jsx)(n.h3,{id:`khóa-và-dấu-mốc`,children:`Khóa và Dấu mốc`}),`
`,(0,c.jsxs)(n.p,{children:[`Cả dấu ngoặc nhọn `,(0,c.jsx)(n.code,{children:`{}`}),` và ngoặc vuông `,(0,c.jsx)(n.code,{children:`[]`}),` đều được hỗ trợ cho các khóa có tên, cùng với dấu `,(0,c.jsx)(n.code,{children:`%`}),` cho các đối số theo thứ tự.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// 1. Khóa có tên (đối tượng)
// Văn bản: "Xin chào, {name}!"
await Translate.get('hi', { name: 'Alex' }) // Xin chào, Alex!

// 2. Dấu mốc vị trí (mảng)
// Văn bản: "Tệp %d trên %e"
Translate.getSync('status', false, ['1', '10']) // Tệp 1 trên 10
// %d — phần tử thứ 1, %e — thứ 2, %f — thứ 3, v.v.
`})}),`
`,(0,c.jsx)(n.h3,{id:`gắn-thẻ-tagging`,children:`Gắn thẻ (Tagging)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cho phép bao bọc văn bản trong các thẻ HTML hoặc các thành phần bổ sung. Văn bản bên trong thẻ sẽ được đưa vào biến `,(0,c.jsx)(n.code,{children:`{content}`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Văn bản: "{link}Đọc thêm{/link} tại nguồn."
const replacement = { 
  link: '<a href="/news">{content}</a>' 
}
Translate.getSync('more', false, replacement)
// <a href="/news">Đọc thêm</a> tại nguồn.
`})}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-dữ-liệu`,children:`Quản lý dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể thêm các bản dịch vào registry một cách thủ công, điều này hữu ích cho các hằng số tĩnh hoặc khởi tạo từ các tệp cục bộ.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Thêm danh sách bản dịch
Translate.addSync({
  'vi-button_ok': 'Ok',
  'vi-button_cancel': 'Hủy'
})

// Tải trước hàng loạt các khóa từ máy chủ
await Translate.add(['title', 'description', 'footer_text'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`thứ-tự-tìm-kiếm`,children:`Thứ tự tìm kiếm`}),`
`,(0,c.jsx)(n.p,{children:`Khi tìm kiếm một bản dịch, hệ thống sẽ tuân theo một thứ tự nghiêm ngặt:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Locale hiện tại (ví dụ: `,(0,c.jsx)(n.code,{children:`vi-VN-key`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ngôn ngữ hiện tại (`,(0,c.jsx)(n.code,{children:`vi-key`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tiền tố toàn cục (`,(0,c.jsx)(n.code,{children:`global-key`}),`)`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};