import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/scripts/Classes/PropertiesFile - Bộ điều phối đường dẫn hệ thống tệp"}),`
`,n.jsx(e.h1,{id:"lớp-propertiesfile",children:"Lớp PropertiesFile"}),`
`,n.jsxs(e.p,{children:["Lớp ",n.jsx(e.code,{children:"PropertiesFile"})," là một tiện ích tĩnh toàn diện được thiết kế để điều phối tất cả các tác vụ liên quan đến hệ thống tệp trong bộ công cụ hệ thống thiết kế. Nó cung cấp một giao diện không phụ thuộc vào nền tảng để thao tác đường dẫn, IO đồng bộ và quản lý thư mục đệ quy, đảm bảo rằng việc khám phá tệp và lưu trữ dữ liệu luôn nhất quán trên các hệ điều hành và môi trường phát triển khác nhau."]}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chuẩn hóa đường dẫn"})," — Tự động phân giải các ký tự phân tách đường dẫn cụ thể của hệ điều hành và hợp nhất các phân đoạn thành các chuỗi tiêu chuẩn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Duyệt đệ quy"})," — Cung cấp các phương thức chuyên biệt để khám phá sâu các cấu trúc thư mục với tính năng lập chỉ mục tùy chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"IO đồng bộ"})," — Xử lý việc đọc tệp (JSON/Văn bản) và ghi tệp với tính năng tự động tổng hợp thư mục."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Khám phá siêu dữ liệu"})," — Truy xuất dấu thời gian của tệp và dữ liệu thống kê cho logic vô hiệu hóa bộ nhớ đệm (cache invalidation)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hoạt động an toàn"})," — Bao gồm các kiểm tra tích hợp về sự tồn tại của mục nhập, loại (tệp so với thư mục) và trạng thái mô-đun."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Là một lớp tĩnh, ",n.jsx(e.code,{children:"PropertiesFile"})," tự khởi tạo và sẵn sàng sử dụng ngay khi import."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesFile } from '@dxtmisha/scripts'

// Kiểm tra xem cấu hình có tồn tại không
if (PropertiesFile.is('design-ui.json')) {
  const config = PropertiesFile.readFile('design-ui.json')
}

// Hợp nhất các đường dẫn một cách an toàn
const fullPath = PropertiesFile.joinPath(['src', 'tokens', 'colors.json'])
`})}),`
`,n.jsx(e.h2,{id:"các-phương-thức-kiểm-tra",children:"Các phương thức kiểm tra"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(path): boolean"})," — Kiểm tra đồng bộ sự tồn tại của tệp hoặc thư mục."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isDir(path): boolean"})," — Xác định xem đường dẫn có trỏ đến một thư mục hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isModule(): boolean"})," — Xác định xem gói hiện tại có được kết nối dưới dạng mô-đun ngoài hay không."]}),`
`]}),`
`,n.jsx(e.h2,{id:"các-phương-thức-quản-lý-đường-dẫn",children:"Các phương thức quản lý đường dẫn"}),`
`,n.jsx(e.h3,{id:"joinpath",children:n.jsx(e.code,{children:"joinPath"})}),`
`,n.jsx(e.p,{children:"Hợp nhất nhiều phân đoạn đường dẫn thành một chuỗi đường dẫn chuẩn hóa duy nhất bằng cách sử dụng ký tự phân tách của hệ điều hành hiện tại."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — mảng các phân đoạn hoặc chuỗi đường dẫn."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const path = PropertiesFile.joinPath(['src', 'styles', 'main.css'])
// Trả về: "src/styles/main.css" (trên Mac/Linux) hoặc "src\\styles\\main.css" (trên Windows)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})," — đường dẫn đã hợp nhất và chuẩn hóa."]}),`
`,n.jsx(e.h3,{id:"joinpathbyname",children:n.jsx(e.code,{children:"joinPathByName"})}),`
`,n.jsx(e.p,{children:"Tạo đường dẫn đầy đủ đến tệp bằng cách hợp nhất đường dẫn thư mục, tên tệp và phần mở rộng."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn thư mục."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên tệp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extension: string"})," — phần mở rộng tệp (mặc định là ",n.jsx(e.code,{children:"json"}),")."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const filePath = PropertiesFile.joinPathByName('data', 'user-profile', 'json')
// Trả về: "data/user-profile.json"
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"getpathdir",children:n.jsx(e.code,{children:"getPathDir"})}),`
`,n.jsx(e.p,{children:"Trích xuất đường dẫn thư mục từ một đường dẫn đầy đủ. Nếu đường dẫn thư mục được truyền vào, nó sẽ trả về nguyên vẹn."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến tệp hoặc thư mục."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const dirOnly = PropertiesFile.getPathDir('src/classes/App.ts')
// Trả về: "src/classes"
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"getpathfile",children:n.jsx(e.code,{children:"getPathFile"})}),`
`,n.jsx(e.p,{children:"Tạo một mảng các phân đoạn đường dẫn đến tệp."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn cơ sở."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên tệp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extension: string"})," — phần mở rộng (mặc định là ",n.jsx(e.code,{children:"json"}),")."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const segments = PropertiesFile.getPathFile('dist', 'manifest')
// Trả về: ["dist", "manifest.json"]
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string[]"})]}),`
`,n.jsx(e.h3,{id:"getroot",children:n.jsx(e.code,{children:"getRoot"})}),`
`,n.jsxs(e.p,{children:["Trả về đường dẫn gốc hiện tại của dự án (",n.jsx(e.code,{children:"process.cwd()"}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const root = PropertiesFile.getRoot()
// Trả về: "/Users/user/project"
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"getfilename",children:n.jsx(e.code,{children:"getFileName"})}),`
`,n.jsx(e.p,{children:"Chuyển đổi tên sang kebab-case và thêm phần mở rộng được chỉ định."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên phần tử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extension: string"})," — phần mở rộng (mặc định là ",n.jsx(e.code,{children:"json"}),")."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const name = PropertiesFile.getFileName('UserProfile', 'ts')
// Trả về: "user-profile.ts"
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h3,{id:"sep",children:n.jsx(e.code,{children:"sep"})}),`
`,n.jsxs(e.p,{children:["Trả về ký tự phân tách thư mục cụ thể của hệ thống (",n.jsx(e.code,{children:"/"})," hoặc ",n.jsx(e.code,{children:"\\"}),")."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const s = PropertiesFile.sep()
// Trả về: "/"
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string"})]}),`
`,n.jsx(e.h2,{id:"các-phương-thức-đọc",children:"Các phương thức đọc"}),`
`,n.jsx(e.h3,{id:"readfile",children:n.jsx(e.code,{children:"readFile"})}),`
`,n.jsx(e.p,{children:"Đọc đồng bộ và tự động phân giải nội dung tệp. Trả về một đối tượng nếu là JSON, ngược lại là một chuỗi."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến tệp."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const data = PropertiesFile.readFile<{ name: string }>('config.json')
// Trả về: { name: "DXT" } (đối tượng)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"R | undefined"})," — dữ liệu đã phân giải hoặc ",n.jsx(e.code,{children:"undefined"})," nếu không tìm thấy tệp."]}),`
`,n.jsx(e.h3,{id:"readfileonly",children:n.jsx(e.code,{children:"readFileOnly"})}),`
`,n.jsx(e.p,{children:"Đọc nội dung tệp dưới dạng chuỗi thô mà không có bất kỳ chuyển đổi nào."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến tệp."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const text = PropertiesFile.readFileOnly('README.md')
// Trả về: "# Project Title..." (chuỗi)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string | undefined"})]}),`
`,n.jsx(e.h3,{id:"readdir",children:n.jsx(e.code,{children:"readDir"})}),`
`,n.jsx(e.p,{children:"Đọc nội dung của một thư mục (danh sách tên các mục con)."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến thư mục."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const items = PropertiesFile.readDir('src')
// Trả về: ["index.ts", "classes", "types"]
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string[]"})]}),`
`,n.jsx(e.h3,{id:"readdirrecursive",children:n.jsx(e.code,{children:"readDirRecursive"})}),`
`,n.jsx(e.p,{children:"Đọc đệ quy tất cả các tệp trong một thư mục và các thư mục con của nó."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến thư mục."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const allFiles = PropertiesFile.readDirRecursive('src')
// Trả về: ["index.ts", "classes/App.ts", "classes/DB.ts", ...]
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"string[]"})," — danh sách đường dẫn đến tất cả các tệp được tìm thấy."]}),`
`,n.jsx(e.h2,{id:"các-phương-thức-chỉnh-sửa",children:"Các phương thức chỉnh sửa"}),`
`,n.jsx(e.h3,{id:"write",children:n.jsx(e.code,{children:"write"})}),`
`,n.jsx(e.p,{children:"Lưu dữ liệu vào một tệp, tự động tạo bất kỳ thư mục cha nào còn thiếu."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn thư mục."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — tên tệp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — dữ liệu cần ghi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extension: string"})," — phần mở rộng (mặc định là ",n.jsx(e.code,{children:"json"}),")."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`PropertiesFile.write('dist/cache', 'data', { id: 1 })
// Tạo dist/cache/data.json với nội dung JSON
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h3,{id:"writebypath",children:n.jsx(e.code,{children:"writeByPath"})}),`
`,n.jsx(e.p,{children:"Ghi dữ liệu vào một đường dẫn tệp chính xác."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đầy đủ đến tệp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: T"})," — dữ liệu."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"transform: boolean"})," — có chuyển đổi đối tượng thành JSON hay không (mặc định là ",n.jsx(e.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`PropertiesFile.writeByPath('logs/error.log', 'Critical error', false)
// Ghi chuỗi thô vào tệp mà không chuyển đổi JSON
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h3,{id:"createdir",children:n.jsx(e.code,{children:"createDir"})}),`
`,n.jsx(e.p,{children:"Tạo đệ quy một thư mục nếu nó chưa tồn tại."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn cần tạo."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`PropertiesFile.createDir('storage/images/2024')
// Tạo toàn bộ cây thư mục
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h3,{id:"copy",children:n.jsx(e.code,{children:"copy"})}),`
`,n.jsx(e.p,{children:"Sao chép một tệp từ đường dẫn nguồn đến đường dẫn đích."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đích."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pathsSrc: PropertiesFilePath"})," — đường dẫn nguồn."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`PropertiesFile.copy('backup/config.json', 'config.json')
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h3,{id:"removefile",children:n.jsx(e.code,{children:"removeFile"})}),`
`,n.jsx(e.p,{children:"Xóa tệp được chỉ định."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến tệp."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`PropertiesFile.removeFile('temp.tmp')
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h3,{id:"removedir",children:n.jsx(e.code,{children:"removeDir"})}),`
`,n.jsx(e.p,{children:"Xóa đệ quy một thư mục và tất cả nội dung của nó."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: PropertiesFilePath"})," — đường dẫn đến thư mục."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Ví dụ:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`PropertiesFile.removeDir('dist/old-version')
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(e.h3,{id:"luồng-đồng-bộ-hóa-đường-dẫn--io-the-paths--io-synchronization-flow",children:"Luồng đồng bộ hóa Đường dẫn & IO (The Paths & IO Synchronization Flow)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"PropertiesFile"})," đóng vai trò là lớp đồng bộ hóa cấp thấp cho toàn bộ thư viện:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chuẩn hóa đường dẫn"}),": Mọi phương thức đều gọi nội bộ ",n.jsx(e.code,{children:"joinPath"})," и ",n.jsx(e.code,{children:"toSep"}),", chuyển đổi tất cả các dấu gạch chéo xuôi thành ký tự phân tách cụ thể của hệ điều hành (ví dụ: ",n.jsx(e.code,{children:"\\"})," trên Windows)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ghi nguyên tử"}),": Khi ",n.jsx(e.code,{children:"write()"})," được gọi, lớp trước tiên sẽ xác định thư mục đích và thực thi ",n.jsx(e.code,{children:"createDir()"}),", lệnh này sẽ xây dựng đệ quy bất kỳ thư mục nào còn thiếu trước khi ghi nội dung thông qua ",n.jsx(e.code,{children:"fs.writeFileSync"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ngữ cảnh đệ quy"}),": Các phương thức đệ quy chuyên biệt (",n.jsx(e.code,{children:"readDirRecursive"}),", v.v.) cho phép các công cụ tài liệu và token khám phá mọi tệp trong cây thành phần mà không cần quản lý thủ công độ sâu hoặc giới hạn đệ quy."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Phân giải gốc (Root Resolution)"}),": Nó duy trì một ",n.jsx(e.code,{children:"root"})," nội bộ (dựa trên ",n.jsx(e.code,{children:"process.cwd()"}),") để đảm bảo các phân đoạn đường dẫn tương đối luôn được phân giải từ thư mục gốc của dự án."]}),`
`]})]})}function x(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(i,{...c})}):i(c)}export{x as default};
