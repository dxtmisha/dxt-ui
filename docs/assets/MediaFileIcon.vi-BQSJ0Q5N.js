import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/Classes/MediaFileIcon - Sổ đăng ký biểu tượng tệp tùy chỉnh`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-mediafileicon`,children:`Lớp MediaFileIcon`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` là một `,(0,c.jsx)(t.strong,{children:`Lớp chính tĩnh (Static)`}),` được thiết kế để đăng ký, lưu trữ, chuẩn hóa và áp dụng các biểu tượng SVG tùy chỉnh cho các phần mở rộng và mã loại tệp. Lớp này đóng vai trò như một sổ đăng ký biểu tượng tập trung được `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` và `,(0,c.jsx)(t.code,{children:`MediaFile`}),` sử dụng nhằm ghi đè các biểu tượng vector mặc định trong hệ thống thiết kế.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sổ đăng ký tĩnh`}),` — duy trì từ điển lưu trữ mã SVG tùy chỉnh trong bộ nhớ gắn với các mã tệp đã chuẩn hóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa mã tệp`}),` — tự động loại bỏ khoảng trắng và chuyển về chữ thường (`,(0,c.jsx)(t.code,{children:`toCode`}),`), đảm bảo tra cứu không phân biệt chữ hoa chữ thường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký đơn lẻ và hàng loạt`}),` — cung cấp các phương thức thuận tiện để đăng ký từng biểu tượng (`,(0,c.jsx)(t.code,{children:`add`}),`) hoặc nhập một từ điển biểu tượng hàng loạt (`,(0,c.jsx)(t.code,{children:`addList`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bổ sung siêu dữ liệu liền mạch`}),` — gán biểu tượng tùy chỉnh một cách an toàn vào đối tượng cấu hình `,(0,c.jsx)(t.code,{children:`MediaFileItem`}),` thông qua phương thức `,(0,c.jsx)(t.code,{children:`toItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Không có phụ thuộc runtime`}),` — hoàn toàn thao tác trên chuỗi và từ điển dữ liệu, hỗ trợ môi trường isomorphic và SSR an toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp là tĩnh và không yêu cầu khởi tạo thực thể. Tất cả các phương thức được gọi trực tiếp thông qua `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-sổ-đăng-ký`,children:`Quản lý sổ đăng ký`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static has(code: string): boolean`}),` — kiểm tra xem biểu tượng tùy chỉnh đã được đăng ký cho mã tệp hoặc phần mở rộng đã chỉ định hay chưa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): string | undefined`}),` — trả về chuỗi biểu tượng SVG tùy chỉnh cho mã hoặc phần mở rộng cụ thể, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu chưa đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static add(code: string, icon: string): void`}),` — đăng ký chuỗi biểu tượng SVG tùy chỉnh cho một mã tệp hoặc phần mở rộng cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addList(icons: MediaFileIcons): void`}),` — đăng ký hàng loạt nhiều biểu tượng SVG tùy chỉnh từ một từ điển.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`chuẩn-hóa-và-chuyển-đổi-phần-tử`,children:`Chuẩn hóa và chuyển đổi phần tử`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toCode(code: string): string`}),` — chuẩn hóa mã tệp hoặc phần mở rộng bằng cách cắt tỉa khoảng trắng và chuyển sang chữ thường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toItem(item?: MediaFileItem): MediaFileItem | undefined`}),` — nhân bản đối tượng tệp và áp dụng biểu tượng tùy chỉnh nếu đã đăng ký, hoặc trả về đối tượng gốc nếu chưa đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`mediafileicons`,children:`MediaFileIcons`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Record<string, string>`}),` — từ điển ánh xạ các mã hoặc phần mở rộng tệp đã chuẩn hóa sang chuỗi mã SVG.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — mã loại tệp hoặc phần mở rộng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên hiển thị trực quan của định dạng tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — chuỗi mã SVG biểu tượng đã được giải quyết hoặc tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — danh sách các phần mở rộng tệp được hỗ trợ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — kiểu MIME tương ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — danh mục phân loại cấp cao của tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — nhóm phân loại (`,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Đăng ký một biểu tượng SVG tùy chỉnh
MediaFileIcon.add('sketch', '<svg class="icon-sketch">...</svg>')

// Đăng ký nhiều biểu tượng hàng loạt
MediaFileIcon.addList({
  psd: '<svg class="icon-psd">...</svg>',
  ai: '<svg class="icon-ai">...</svg>'
})

// Kiểm tra sự tồn tại và lấy biểu tượng
if (MediaFileIcon.has('sketch')) {
  const iconMarkup = MediaFileIcon.get('sketch')
  console.log(iconMarkup)
}

// Chuẩn hóa chuỗi mã tệp
console.log(MediaFileIcon.toCode('  .DOCX  ')) // '.docx'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};