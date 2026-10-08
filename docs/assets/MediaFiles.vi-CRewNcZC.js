import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/Classes/MediaFiles - Danh mục siêu dữ liệu tệp và xác thực đường dẫn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-mediafiles`,children:`Lớp MediaFiles`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` là một `,(0,c.jsx)(t.strong,{children:`Lớp chính tĩnh (Static)`}),` cung cấp khả năng tra cứu danh mục tệp tập trung, khớp định dạng theo MIME type, phân giải biểu tượng danh mục trung tính và xác minh liên kết/đường dẫn. Lớp này đóng vai trò là nhà cung cấp siêu dữ liệu cốt lõi cho `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),`, tích hợp chặt chẽ với `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` để áp dụng biểu tượng tùy chỉnh.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Danh mục định dạng toàn diện`}),` — tích hợp sẵn cấu hình siêu dữ liệu cho hơn 85 phần mở rộng tệp, danh mục và MIME type.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cơ chế dự phòng thông minh`}),` — tìm kiếm tệp theo mã, phần mở rộng hoặc MIME type, tự động dự phòng về biểu tượng trung tính của danh mục hoặc biểu tượng tệp mặc định chung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biểu tượng trung tính cấp danh mục`}),` — truy xuất nhanh biểu tượng đại diện cho toàn bộ nhóm định dạng (ví dụ: `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác thực đường dẫn và liên kết`}),` — nhận biết chính xác chuỗi có phải là đường dẫn hệ thống tệp hay liên kết web từ xa (`,(0,c.jsx)(t.code,{children:`isLink`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp biểu tượng tùy chỉnh`}),` — tự động làm phong phú siêu dữ liệu trả về với các biểu tượng đã đăng ký trong `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp là tĩnh và không yêu cầu khởi tạo thực thể. Tất cả các phương thức được gọi trực tiếp thông qua `,(0,c.jsx)(t.code,{children:`MediaFiles`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra-đường-dẫn`,children:`Kiểm tra đường dẫn`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static isLink(path: string): boolean`}),` — xác định xem chuỗi được chỉ định có phải là đường dẫn hệ thống tệp hoặc liên kết URL hay không (kiểm tra dấu gạch chéo `,(0,c.jsx)(t.code,{children:`/`}),`, `,(0,c.jsx)(t.code,{children:`\\`}),` hoặc tiền tố `,(0,c.jsx)(t.code,{children:`http://`}),`, `,(0,c.jsx)(t.code,{children:`https://`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tra-cứu-và-sổ-đăng-ký`,children:`Tra cứu và sổ đăng ký`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: string): MediaFileItem | undefined`}),` — truy xuất cấu hình tệp theo phần mở rộng hoặc mã tệp, tự động tìm kiếm theo MIME type hoặc mục mặc định nếu không khớp, có áp dụng biểu tượng tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getByCategory(category: MediaFileCategory | MediaFileCategoryValue | string): MediaFileItem | undefined`}),` — trả về cấu hình biểu tượng trung tính cấp danh mục phù hợp với danh mục hoặc mã tệp đã chỉ định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getByMime(mime: string): MediaFileItem | undefined`}),` — trả về cấu hình tệp phù hợp với kiểu MIME đã chỉ định, có áp dụng biểu tượng tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getList(): MediaFileList`}),` — trả về toàn bộ mảng gồm tất cả các mục cấu hình tệp được hỗ trợ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getNeutral(): MediaFileItem | undefined`}),` — trả về mục cấu hình tệp trung tính mặc định, có áp dụng biểu tượng tùy chỉnh nếu tồn tại.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`mediafilecategory`,children:`MediaFileCategory`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum đại diện cho các danh mục tệp: `,(0,c.jsx)(t.code,{children:`archive`}),`, `,(0,c.jsx)(t.code,{children:`audio`}),`, `,(0,c.jsx)(t.code,{children:`code`}),`, `,(0,c.jsx)(t.code,{children:`config`}),`, `,(0,c.jsx)(t.code,{children:`database`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`executable`}),`, `,(0,c.jsx)(t.code,{children:`folder`}),`, `,(0,c.jsx)(t.code,{children:`font`}),`, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`, `,(0,c.jsx)(t.code,{children:`system`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`vector`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilegroup`,children:`MediaFileGroup`}),`
`,(0,c.jsx)(t.p,{children:`Enum đại diện cho các nhóm phân loại phần tử tệp:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`neutral`}),` — biểu tượng tệp trung tính mặc định chung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category`}),` — biểu tượng trung tính đại diện cho danh mục (ví dụ: hình ảnh hoặc tài liệu chung).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`standard`}),` — biểu tượng định dạng hoặc phần mở rộng tệp tiêu chuẩn (ví dụ: PNG, PDF, ZIP).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — mã tệp duy nhất hoặc phần mở rộng chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên hiển thị trực quan của định dạng tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — danh sách các phần mở rộng tệp được hỗ trợ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — kiểu MIME tương ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — chuỗi mã SVG biểu tượng đã được giải quyết hoặc liên kết URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — giá trị enum danh mục tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — giá trị enum nhóm phân loại phần tử.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilelist`,children:`MediaFileList`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`MediaFileItem[]`}),` — mảng chứa tất cả các phần tử cấu hình tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFiles, MediaFileCategory } from '@dxtmisha/media'

// Kiểm tra xem chuỗi có phải là đường dẫn hoặc liên kết hay không
MediaFiles.isLink('https://example.com/assets/report.pdf') // true
MediaFiles.isLink('report.pdf') // false

// Tra cứu siêu dữ liệu theo phần mở rộng hoặc mã định dạng
const pdf = MediaFiles.get('pdf')
console.log(pdf?.name) // 'PDF'
console.log(pdf?.category) // 'document'

// Lấy biểu tượng trung tính của danh mục
const imageCategory = MediaFiles.getByCategory(MediaFileCategory.image)
console.log(imageCategory?.name) // 'Image'

// Tra cứu theo MIME type
const jsonFile = MediaFiles.getByMime('application/json')
console.log(jsonFile?.code) // 'json'

// Biểu tượng trung tính mặc định
const neutral = MediaFiles.getNeutral()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};