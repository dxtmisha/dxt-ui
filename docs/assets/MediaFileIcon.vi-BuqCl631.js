import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/Classes/MediaFileIcon - Sổ đăng ký biểu tượng tệp tùy chỉnh`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-mediafileicon`,children:`Lớp MediaFileIcon`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` là một `,(0,c.jsx)(t.strong,{children:`Lớp chính tĩnh (Static)`}),` được thiết kế để đăng ký, lưu trữ, chuẩn hóa và áp dụng các biểu tượng SVG tùy chỉnh cho các phần mở rộng và mã loại tệp. Lớp này đóng vai trò như một sổ đăng ký biểu tượng tập trung được `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` và `,(0,c.jsx)(t.code,{children:`MediaFile`}),` sử dụng nhằm ghi đè các biểu tượng vector mặc định trong hệ thống thiết kế.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sổ đăng ký tĩnh`}),` — duy trì từ điển lưu trữ mã SVG tùy chỉnh độc lập với prototype trong bộ nhớ (`,(0,c.jsx)(t.code,{children:`Object.create(null)`}),`), gắn với các mã tệp đã chuẩn hóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuỗi phương thức linh hoạt (Fluent Chaining)`}),` — các phương thức `,(0,c.jsx)(t.code,{children:`add`}),`, `,(0,c.jsx)(t.code,{children:`addList`}),` và `,(0,c.jsx)(t.code,{children:`reset`}),` trả về lớp `,(0,c.jsx)(t.code,{children:`typeof MediaFileIcon`}),`, hỗ trợ gọi chuỗi thuận tiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa mã toàn diện`}),` — tự động loại bỏ khoảng trắng và dấu chấm ở hai đầu, lược bỏ các tham số MIME (sau dấu `,(0,c.jsx)(t.code,{children:`;`}),`) và chuyển về chữ thường (`,(0,c.jsx)(t.code,{children:`toCode`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký đơn lẻ và hàng loạt`}),` — cung cấp các phương thức thuận tiện để đăng ký từng biểu tượng với tính năng tự động cắt tỉa khoảng trắng (`,(0,c.jsx)(t.code,{children:`add`}),`) hoặc nhập một từ điển hàng loạt (`,(0,c.jsx)(t.code,{children:`addList`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bổ sung siêu dữ liệu an toàn`}),` — tạo bản sao phòng vệ của đối tượng `,(0,c.jsx)(t.code,{children:`MediaFileItem`}),` kèm sao chép mảng `,(0,c.jsx)(t.code,{children:`extensions`}),` và áp dụng biểu tượng tùy chỉnh qua phương thức `,(0,c.jsx)(t.code,{children:`toItem`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tối ưu hóa thoát nhanh`}),` — cờ nội bộ `,(0,c.jsx)(t.code,{children:`hasCustomIcons`}),` đảm bảo độ phức tạp O(1) khi sổ đăng ký trống mà không gây hao tốn hiệu năng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Không có phụ thuộc runtime`}),` — hoàn toàn thao tác trên chuỗi và từ điển dữ liệu, hỗ trợ môi trường isomorphic và SSR an toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp là tĩnh và không yêu cầu khởi tạo thực thể. Tất cả các phương thức được gọi trực tiếp thông qua `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-sổ-đăng-ký`,children:`Quản lý sổ đăng ký`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get icons(): Readonly<MediaFileIcons>`}),` — trả về bản sao từ điển chỉ đọc của tất cả biểu tượng tùy chỉnh đã đăng ký (không chứa thuộc tính từ `,(0,c.jsx)(t.code,{children:`Object.prototype`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static has(code: string): boolean`}),` — kiểm tra xem biểu tượng tùy chỉnh đã được đăng ký cho mã tệp hoặc phần mở rộng đã chỉ định hay chưa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): string | undefined`}),` — trả về chuỗi biểu tượng SVG tùy chỉnh cho mã hoặc phần mở rộng cụ thể, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu chưa đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static add(code: string, icon: string): typeof MediaFileIcon`}),` — đăng ký chuỗi biểu tượng SVG tùy chỉnh (tự động cắt tỉa khoảng trắng thừa) cho mã tệp hoặc phần mở rộng. Trả về lớp để hỗ trợ gọi chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addList(icons: MediaFileIcons): typeof MediaFileIcon`}),` — đăng ký hàng loạt nhiều biểu tượng SVG tùy chỉnh từ một từ điển. Trả về lớp để hỗ trợ gọi chuỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static remove(code: string): boolean`}),` — xóa biểu tượng tùy chỉnh theo mã tệp hoặc phần mở rộng, trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu biểu tượng tồn tại và đã được xóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static reset(): typeof MediaFileIcon`}),` — xóa toàn bộ và đặt lại tất cả các biểu tượng tùy chỉnh đã đăng ký trong sổ đăng ký. Trả về lớp để hỗ trợ gọi chuỗi.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`chuẩn-hóa-và-chuyển-đổi-phần-tử`,children:`Chuẩn hóa và chuyển đổi phần tử`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toCode(code: string): string`}),` — chuẩn hóa mã tệp hoặc phần mở rộng bằng cách cắt tỉa khoảng trắng, dấu chấm ở hai đầu, lược bỏ tham số MIME sau dấu `,(0,c.jsx)(t.code,{children:`;`}),` và chuyển sang chữ thường.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static toItem<T extends MediaFileItem | undefined = undefined>(item?: T): MediaFileItemReturn<T>`}),` — tạo bản sao phòng vệ của phần tử tệp và mảng phần mở rộng, áp dụng biểu tượng tùy chỉnh theo thứ tự ưu tiên phân tầng (`,(0,c.jsx)(t.code,{children:`code`}),` -> `,(0,c.jsx)(t.code,{children:`extensions`}),` -> `,(0,c.jsx)(t.code,{children:`mime`}),` -> `,(0,c.jsx)(t.code,{children:`category`}),`).`]}),`
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
`,(0,c.jsx)(t.h3,{id:`mediafileitemreturnt`,children:(0,c.jsx)(t.code,{children:`MediaFileItemReturn<T>`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T extends MediaFileItem ? MediaFileItem : undefined`}),` — kiểu dữ liệu có điều kiện phản ánh sự hiện diện của phần tử đầu vào.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Đăng ký biểu tượng thông qua chuỗi phương thức (method chaining)
MediaFileIcon
  .reset()
  .add('sketch', '<svg class="icon-sketch">...</svg>')
  .addList({
    psd: '<svg class="icon-psd">...</svg>',
    ai: '<svg class="icon-ai">...</svg>'
  })

// Kiểm tra sự tồn tại và lấy biểu tượng
if (MediaFileIcon.has('sketch')) {
  const iconMarkup = MediaFileIcon.get('sketch')
  console.log(iconMarkup)
}

// Lấy bản sao từ điển của tất cả biểu tượng đã đăng ký
const allIcons = MediaFileIcon.icons
console.log(allIcons.sketch)

// Chuẩn hóa chuỗi mã tệp (loại bỏ khoảng trắng, dấu chấm hai đầu và tham số MIME)
console.log(MediaFileIcon.toCode('  ..DOCX..  ')) // 'docx'
console.log(MediaFileIcon.toCode('text/plain; charset=utf-8')) // 'text/plain'

// Xóa một biểu tượng cụ thể
MediaFileIcon.remove('sketch')

// Đặt lại toàn bộ các biểu tượng tùy chỉnh đã đăng ký
MediaFileIcon.reset()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};