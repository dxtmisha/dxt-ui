import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/scripts/Classes/GitRead - Trình đọc kho lưu trữ Git"}),`
`,n.jsx(c.h1,{id:"lớp-gitread",children:"Lớp GitRead"}),`
`,n.jsx(c.p,{children:"Một lớp tiện ích mạnh mẽ để tương tác với kho lưu trữ Git. Nó cung cấp các phương pháp cấp cao để lấy danh sách tệp, ngày cam kết, thông tin trạng thái ở định dạng sứ và hơn thế thế."}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khám phá tệp"})," — lấy tất cả các tệp được theo dõi trong kho lưu trữ hiện tại hoặc được lọc theo các thư mục cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Báo cáo trạng thái"})," — phân tích cú pháp ",n.jsx(c.code,{children:"git status --porcelain"})," để xác định các tệp đã sửa đổi, được thêm vào hoặc không được theo dõi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lịch sử cam kết"})," — trích xuất ngày sửa đổi cuối cùng cho các tệp riêng lẻ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý đường dẫn"})," — xử lý các đường dẫn tương đối và tiền tố thư mục trong cấu trúc kho lưu trữ."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-phương-thức-chính",children:"Các phương thức chính"}),`
`,n.jsx(c.h3,{id:"getlist",children:n.jsx(c.code,{children:"getList"})}),`
`,n.jsx(c.p,{children:"Truy xuất danh sách rút gọn của tất cả các tệp được theo dõi trong HEAD của kho lưu trữ, bao gồm các siêu dữ liệu cơ bản như ngày sửa đổi."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"filter?: (file: string) => boolean"})," — Một hàm callback để chỉ bao gồm các tệp khớp với các tiêu chí cụ thể."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GitFileList"})," — Một mảng các đối tượng ",n.jsx(c.code,{children:"GitFileItem"})," đại diện cho các tệp được theo dõi."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const files = GitRead.getList((f) => f.endsWith('.ts'))
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
`,n.jsx(c.h3,{id:"getlistporcelain",children:n.jsx(c.code,{children:"getListPorcelain"})}),`
`,n.jsxs(c.p,{children:["Truy xuất trạng thái hiện tại của các tệp trong kho lưu trữ bằng định dạng ",n.jsx(c.code,{children:"--porcelain"}),". Điều này bao gồm các thay đổi trong cây làm việc và chỉ mục (index)."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"filter?: (file: string) => boolean"})," — Một hàm callback để lọc danh sách trạng thái kết quả."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GitFileList"})," — Một mảng các đối tượng ",n.jsx(c.code,{children:"GitFileItem"}),", mỗi đối tượng chứa một trường ",n.jsx(c.code,{children:"status"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const status = GitRead.getListPorcelain()
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
`,n.jsx(c.h3,{id:"getlistunique",children:n.jsx(c.code,{children:"getListUnique"})}),`
`,n.jsxs(c.p,{children:["Điều phối việc hợp nhất giữa các tệp được theo dõi (",n.jsx(c.code,{children:"getList"}),") và trạng thái hiện tại (",n.jsx(c.code,{children:"getListPorcelain"}),"). Nó đảm bảo mỗi tệp chỉ được đại diện một lần, ưu tiên thông tin trạng thái nếu có."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"filter: (file: string) => boolean"})," — Hàm callback bắt buộc để lọc danh sách thống nhất."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GitFileList"})," — Một danh sách các tệp đã được loại bỏ trùng lặp, kết hợp trạng thái cơ bản và trạng thái thay đổi."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const unique = GitRead.getListUnique((f) => f.includes('src/'))
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
`,n.jsx(c.h3,{id:"getlistbydirectory",children:n.jsx(c.code,{children:"getListByDirectory"})}),`
`,n.jsxs(c.p,{children:["Một phương thức thuận tiện để truy xuất danh sách tệp duy nhất cụ thể từ một thư mục nhất định, được lọc để chỉ bao gồm các tệp ",n.jsx(c.code,{children:".ts"})," và loại trừ các tệp ",n.jsx(c.code,{children:".test.ts"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"directory: string | RegExp"})," — Đường dẫn thư mục đích hoặc một mẫu để khớp với đường dẫn tệp."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"GitFileList"})]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const classes = GitRead.getListByDirectory('/classes/')
/**
 * [
 *   {
 *     path: 'classes/GitRead.ts',
 *     ...
 *   }
 * ]
 */
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức-tiện-ích",children:"Các phương thức tiện ích"}),`
`,n.jsx(c.h3,{id:"getclasseslist",children:n.jsx(c.code,{children:"getClassesList"})}),`
`,n.jsxs(c.p,{children:["Lấy tất cả các tệp TypeScript (trừ test) trong thư mục ",n.jsx(c.code,{children:"/classes/"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const classes = GitRead.getClassesList()
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
`,n.jsx(c.h3,{id:"getfunctionslist",children:n.jsx(c.code,{children:"getFunctionsList"})}),`
`,n.jsxs(c.p,{children:["Lấy tất cả các tệp TypeScript (trừ test) trong thư mục ",n.jsx(c.code,{children:"/functions/"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const funcs = GitRead.getFunctionsList()
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
`,n.jsx(c.h3,{id:"getfilespath",children:n.jsx(c.code,{children:"getFilesPath"})}),`
`,n.jsx(c.p,{children:"Trả về một mảng chứa tất cả các đường dẫn tệp được theo dõi trong kho lưu trữ."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const paths = GitRead.getFilesPath()
// ['src/index.ts', 'package.json', ...]
`})}),`
`,n.jsx(c.h3,{id:"getfilesporcelain",children:n.jsx(c.code,{children:"getFilesPorcelain"})}),`
`,n.jsxs(c.p,{children:["Trả về đầu ra thô của ",n.jsx(c.code,{children:"git status --porcelain"})," dưới dạng một mảng các chuỗi."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const porcelain = GitRead.getFilesPorcelain()
// [' M src/index.ts', '?? new-file.txt']
`})}),`
`,n.jsx(c.h3,{id:"getfiledate",children:n.jsx(c.code,{children:"getFileDate"})}),`
`,n.jsx(c.p,{children:"Trả về ngày cam kết cuối cùng cho một tệp cụ thể."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"filePath: string"})," — Đường dẫn đến tệp đích."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const date = GitRead.getFileDate('src/index.ts')
// '2024-03-20 12:00:00 +0300'
`})}),`
`,n.jsx(c.h3,{id:"getdirprefix",children:n.jsx(c.code,{children:"getDirPrefix"})}),`
`,n.jsx(c.p,{children:"Trả về tiền tố của thư mục hiện tại trong kho lưu trữ Git."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const prefix = GitRead.getDirPrefix()
// 'packages/scripts/'
`})}),`
`,n.jsx(c.h3,{id:"getdate",children:n.jsx(c.code,{children:"getDate"})}),`
`,n.jsx(c.p,{children:"Định dạng một chuỗi ngày thành định dạng đầy đủ chuẩn hóa."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"date?: string"})," — Chuỗi ngày cần định dạng (tùy chọn)."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const formatted = GitRead.getDate('2024-03-20')
// '2024-03-20 00:00:00'
`})}),`
`,n.jsx(c.h3,{id:"filterbydirectory",children:n.jsx(c.code,{children:"filterByDirectory"})}),`
`,n.jsxs(c.p,{children:["Lọc một ",n.jsx(c.code,{children:"GitFileList"})," để chỉ bao gồm các mục thuộc về tiền tố thư mục hiện tại."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"list: GitFileList"})," — Danh sách các tệp cần lọc."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const filtered = GitRead.filterByDirectory(myList)
`})}),`
`,n.jsx(c.h3,{id:"mergeunique",children:n.jsx(c.code,{children:"mergeUnique"})}),`
`,n.jsxs(c.p,{children:["Hợp nhất hai mảng ",n.jsx(c.code,{children:"GitFileList"}),", đảm bảo mỗi đường dẫn tệp là duy nhất."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"listA: GitFileList"})," — Danh sách thứ nhất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"listB: GitFileList"})," — Danh sách thứ hai."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const merged = GitRead.mergeUnique(list1, list2)
`})}),`
`,n.jsx(c.h3,{id:"splitpath",children:n.jsx(c.code,{children:"splitPath"})}),`
`,n.jsx(c.p,{children:"Tách một chuỗi đường dẫn tệp thành một mảng các phân đoạn đường dẫn."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path: string"})," — Đường dẫn cần tách."]}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Ví dụ:"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const parts = GitRead.splitPath('src/classes/GitRead.ts')
// ['src', 'classes', 'GitRead.ts']
`})}),`
`,n.jsx(c.h2,{id:"cấu-trúc-dữ-liệu",children:"Cấu trúc dữ liệu"}),`
`,n.jsx(c.h3,{id:"gitfileitem",children:n.jsx(c.code,{children:"GitFileItem"})}),`
`,n.jsx(c.p,{children:"Đối tượng chính đại diện cho trạng thái của một tệp trong Git:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"path: string"})," — Đường dẫn tương đối đến tệp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"pathByOS: string[]"})," — Đường dẫn tệp được chia thành các phân đoạn không phụ thuộc vào hệ điều hành."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"pathFull: string"})," — Đường dẫn đầy đủ bao gồm mọi tiền tố thư mục trên toàn bộ kho lưu trữ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"date: string"})," — Ngày sửa đổi cuối cùng (đã được chuẩn hóa)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"status?: GitStatus"})," — Mã trạng thái Git (ví dụ: ",n.jsx(c.code,{children:"'M'"}),", ",n.jsx(c.code,{children:"'A'"}),", ",n.jsx(c.code,{children:"'??'"}),")."]}),`
`]}),`
`,n.jsx(c.h3,{id:"gitstatus",children:n.jsx(c.code,{children:"GitStatus"})}),`
`,n.jsx(c.p,{children:"Enum đại diện cho các mã trạng thái Git phổ biến:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"MODIFIED"})," (",n.jsx(c.code,{children:"'M'"}),") — Tệp hiện có đã bị thay đổi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"ADDED"})," (",n.jsx(c.code,{children:"'A'"}),") — Tệp mới đã được thêm vào chỉ mục (index)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"DELETED"})," (",n.jsx(c.code,{children:"'D'"}),") — Tệp đã bị xóa."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"UNTRACKED"})," (",n.jsx(c.code,{children:"'??'"}),") — Tệp mới chưa được Git theo dõi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"RENAMED"})," (",n.jsx(c.code,{children:"'R'"}),") — Tệp đã bị di chuyển hoặc đổi tên."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(c.h3,{id:"lấy-các-tệp-đã-sửa-đổi",children:"Lấy các tệp đã sửa đổi"}),`
`,n.jsx(c.p,{children:"Lấy danh sách các tệp đã được sửa đổi hoặc thêm vào kho lưu trữ."}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { GitRead } from '@dxtmisha/scripts'

const modifiedFiles = GitRead.getListPorcelain()
console.log(modifiedFiles)
`})}),`
`,n.jsx(c.h3,{id:"lọc-các-lớp",children:"Lọc các lớp"}),`
`,n.jsx(c.p,{children:"Chỉ lấy các tệp lớp cho một mô-đun cụ thể."}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const componentClasses = GitRead.getListUnique(
  (file) => file.includes('packages/ui/src/classes/')
)
`})})]})}function o(s={}){const{wrapper:c}={...e(),...s.components};return c?n.jsx(c,{...s,children:n.jsx(i,{...s})}):i(s)}export{o as default};
