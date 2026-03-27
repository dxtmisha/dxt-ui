import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/GitRead - Trình đọc kho lưu trữ Git`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-gitread`,children:`Lớp GitRead`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích mạnh mẽ để tương tác với kho lưu trữ Git. Nó cung cấp các phương pháp cấp cao để lấy danh sách tệp, ngày cam kết, thông tin trạng thái ở định dạng sứ và hơn thế thế.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá tệp`}),` — lấy tất cả các tệp được theo dõi trong kho lưu trữ hiện tại hoặc được lọc theo các thư mục cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Báo cáo trạng thái`}),` — phân tích cú pháp `,(0,c.jsx)(n.code,{children:`git status --porcelain`}),` để xác định các tệp đã sửa đổi, được thêm vào hoặc không được theo dõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lịch sử cam kết`}),` — trích xuất ngày sửa đổi cuối cùng cho các tệp riêng lẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý đường dẫn`}),` — xử lý các đường dẫn tương đối và tiền tố thư mục trong cấu trúc kho lưu trữ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-chính`,children:`Các phương thức chính`}),`
`,(0,c.jsx)(n.h3,{id:`getlist`,children:(0,c.jsx)(n.code,{children:`getList`})}),`
`,(0,c.jsx)(n.p,{children:`Truy xuất danh sách rút gọn của tất cả các tệp được theo dõi trong HEAD của kho lưu trữ, bao gồm các siêu dữ liệu cơ bản như ngày sửa đổi.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter?: (file: string) => boolean`}),` — Một hàm callback để chỉ bao gồm các tệp khớp với các tiêu chí cụ thể.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — Một mảng các đối tượng `,(0,c.jsx)(n.code,{children:`GitFileItem`}),` đại diện cho các tệp được theo dõi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
/**
 * [
 *   {
 *     path: 'src/index.ts',
 *     pathByOS: ['src', 'index.ts'],
 *     pathFull: 'packages/scripts/src/index.ts',
 *     date: '2024-03-20 12:00:00',
 *     status: undefined
 *   },
 *   ...
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getlistporcelain`,children:(0,c.jsx)(n.code,{children:`getListPorcelain`})}),`
`,(0,c.jsxs)(n.p,{children:[`Truy xuất trạng thái hiện tại của các tệp trong kho lưu trữ bằng định dạng `,(0,c.jsx)(n.code,{children:`--porcelain`}),`. Điều này bao gồm các thay đổi trong cây làm việc và chỉ mục (index).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter?: (file: string) => boolean`}),` — Một hàm callback để lọc danh sách trạng thái kết quả.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — Một mảng các đối tượng `,(0,c.jsx)(n.code,{children:`GitFileItem`}),`, mỗi đối tượng chứa một trường `,(0,c.jsx)(n.code,{children:`status`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const status = GitRead.getListPorcelain()
/**
 * [
 *   {
 *     path: 'src/classes/GitRead.ts',
 *     pathByOS: ['src', 'classes', 'GitRead.ts'],
 *     pathFull: 'packages/scripts/src/classes/GitRead.ts',
 *     date: '2024-03-21 10:30:00',
 *     status: 'M'
 *   },
 *   ...
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getlistunique`,children:(0,c.jsx)(n.code,{children:`getListUnique`})}),`
`,(0,c.jsxs)(n.p,{children:[`Điều phối việc hợp nhất giữa các tệp được theo dõi (`,(0,c.jsx)(n.code,{children:`getList`}),`) và trạng thái hiện tại (`,(0,c.jsx)(n.code,{children:`getListPorcelain`}),`). Nó đảm bảo mỗi tệp chỉ được đại diện một lần, ưu tiên thông tin trạng thái nếu có.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filter: (file: string) => boolean`}),` — Hàm callback bắt buộc để lọc danh sách thống nhất.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`}),` — Một danh sách các tệp đã được loại bỏ trùng lặp, kết hợp trạng thái cơ bản và trạng thái thay đổi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
/**
 * [
 *   {
 *     path: 'src/main.ts',
 *     pathByOS: ['src', 'main.ts'],
 *     pathFull: 'packages/scripts/src/main.ts',
 *     date: '2024-03-19 15:45:00',
 *     status: 'A'
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getlistbydirectory`,children:(0,c.jsx)(n.code,{children:`getListByDirectory`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức thuận tiện để truy xuất danh sách tệp duy nhất cụ thể từ một thư mục nhất định, được lọc để chỉ bao gồm các tệp `,(0,c.jsx)(n.code,{children:`.ts`}),` và loại trừ các tệp `,(0,c.jsx)(n.code,{children:`.test.ts`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`directory: string | RegExp`}),` — Đường dẫn thư mục đích hoặc một mẫu để khớp với đường dẫn tệp.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`GitFileList`})]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-tiện-ích`,children:`Các phương thức tiện ích`}),`
`,(0,c.jsx)(n.h3,{id:`getclasseslist`,children:(0,c.jsx)(n.code,{children:`getClassesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Lấy tất cả các tệp TypeScript (trừ test) trong thư mục `,(0,c.jsx)(n.code,{children:`/classes/`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classes = GitRead.getClassesList()
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     pathByOS: ['classes', 'GitRead.ts'],
 *     pathFull: 'packages/scripts/src/classes/GitRead.ts',
 *     date: '2024-03-21 10:30:00',
 *     status: undefined
 *   },
 *   ...
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfunctionslist`,children:(0,c.jsx)(n.code,{children:`getFunctionsList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Lấy tất cả các tệp TypeScript (trừ test) trong thư mục `,(0,c.jsx)(n.code,{children:`/functions/`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const funcs = GitRead.getFunctionsList()
/**
 * [
 *   {
 *     path: 'functions/myFunction.ts',
 *     pathByOS: ['functions', 'myFunction.ts'],
 *     pathFull: 'packages/scripts/src/functions/myFunction.ts',
 *     date: '2024-03-20 15:00:00',
 *     status: undefined
 *   }
 * ]
 */
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfilespath`,children:(0,c.jsx)(n.code,{children:`getFilesPath`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về một mảng chứa tất cả các đường dẫn tệp được theo dõi trong kho lưu trữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const paths = GitRead.getFilesPath()
// ['src/index.ts', 'package.json', ...]
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfilesporcelain`,children:(0,c.jsx)(n.code,{children:`getFilesPorcelain`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về đầu ra thô của `,(0,c.jsx)(n.code,{children:`git status --porcelain`}),` dưới dạng một mảng các chuỗi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const porcelain = GitRead.getFilesPorcelain()
// [' M src/index.ts', '?? new-file.txt']
`})}),`
`,(0,c.jsx)(n.h3,{id:`getfiledate`,children:(0,c.jsx)(n.code,{children:`getFileDate`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về ngày cam kết cuối cùng cho một tệp cụ thể.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filePath: string`}),` — Đường dẫn đến tệp đích.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const date = GitRead.getFileDate('src/index.ts')
// '2024-03-20 12:00:00 +0300'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdirprefix`,children:(0,c.jsx)(n.code,{children:`getDirPrefix`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về tiền tố của thư mục hiện tại trong kho lưu trữ Git.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const prefix = GitRead.getDirPrefix()
// 'packages/scripts/'
`})}),`
`,(0,c.jsx)(n.h3,{id:`getdate`,children:(0,c.jsx)(n.code,{children:`getDate`})}),`
`,(0,c.jsx)(n.p,{children:`Định dạng một chuỗi ngày thành định dạng đầy đủ chuẩn hóa.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date?: string`}),` — Chuỗi ngày cần định dạng (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const formatted = GitRead.getDate('2024-03-20')
// '2024-03-20 00:00:00'
`})}),`
`,(0,c.jsx)(n.h3,{id:`filterbydirectory`,children:(0,c.jsx)(n.code,{children:`filterByDirectory`})}),`
`,(0,c.jsxs)(n.p,{children:[`Lọc một `,(0,c.jsx)(n.code,{children:`GitFileList`}),` để chỉ bao gồm các mục thuộc về tiền tố thư mục hiện tại.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: GitFileList`}),` — Danh sách các tệp cần lọc.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const filtered = GitRead.filterByDirectory(myList)
`})}),`
`,(0,c.jsx)(n.h3,{id:`mergeunique`,children:(0,c.jsx)(n.code,{children:`mergeUnique`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hợp nhất hai mảng `,(0,c.jsx)(n.code,{children:`GitFileList`}),`, đảm bảo mỗi đường dẫn tệp là duy nhất.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listA: GitFileList`}),` — Danh sách thứ nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listB: GitFileList`}),` — Danh sách thứ hai.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const merged = GitRead.mergeUnique(list1, list2)
`})}),`
`,(0,c.jsx)(n.h3,{id:`splitpath`,children:(0,c.jsx)(n.code,{children:`splitPath`})}),`
`,(0,c.jsx)(n.p,{children:`Tách một chuỗi đường dẫn tệp thành một mảng các phân đoạn đường dẫn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn cần tách.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const parts = GitRead.splitPath('src/classes/GitRead.ts')
// ['src', 'classes', 'GitRead.ts']
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-dữ-liệu`,children:`Cấu trúc dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:(0,c.jsx)(n.code,{children:`GitFileItem`})}),`
`,(0,c.jsx)(n.p,{children:`Đối tượng chính đại diện cho trạng thái của một tệp trong Git:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn tương đối đến tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string[]`}),` — Đường dẫn tệp được chia thành các phân đoạn không phụ thuộc vào hệ điều hành.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathFull: string`}),` — Đường dẫn đầy đủ bao gồm mọi tiền tố thư mục trên toàn bộ kho lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — Ngày sửa đổi cuối cùng (đã được chuẩn hóa).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`status?: GitStatus`}),` — Mã trạng thái Git (ví dụ: `,(0,c.jsx)(n.code,{children:`'M'`}),`, `,(0,c.jsx)(n.code,{children:`'A'`}),`, `,(0,c.jsx)(n.code,{children:`'??'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`gitstatus`,children:(0,c.jsx)(n.code,{children:`GitStatus`})}),`
`,(0,c.jsx)(n.p,{children:`Enum đại diện cho các mã trạng thái Git phổ biến:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`MODIFIED`}),` (`,(0,c.jsx)(n.code,{children:`'M'`}),`) — Tệp hiện có đã bị thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ADDED`}),` (`,(0,c.jsx)(n.code,{children:`'A'`}),`) — Tệp mới đã được thêm vào chỉ mục (index).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DELETED`}),` (`,(0,c.jsx)(n.code,{children:`'D'`}),`) — Tệp đã bị xóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`UNTRACKED`}),` (`,(0,c.jsx)(n.code,{children:`'??'`}),`) — Tệp mới chưa được Git theo dõi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`RENAMED`}),` (`,(0,c.jsx)(n.code,{children:`'R'`}),`) — Tệp đã bị di chuyển hoặc đổi tên.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`lấy-các-tệp-đã-sửa-đổi`,children:`Lấy các tệp đã sửa đổi`}),`
`,(0,c.jsx)(n.p,{children:`Lấy danh sách các tệp đã được sửa đổi hoặc thêm vào kho lưu trữ.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,(0,c.jsx)(n.h3,{id:`lọc-các-lớp`,children:`Lọc các lớp`}),`
`,(0,c.jsx)(n.p,{children:`Chỉ lấy các tệp lớp cho một mô-đun cụ thể.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};