import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesFile - Bộ điều phối đường dẫn hệ thống tệp`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesfile`,children:`Lớp PropertiesFile`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` là một tiện ích tĩnh toàn diện được thiết kế để điều phối tất cả các tác vụ liên quan đến hệ thống tệp trong bộ công cụ hệ thống thiết kế. Nó cung cấp một giao diện không phụ thuộc vào nền tảng để thao tác đường dẫn, IO đồng bộ và quản lý thư mục đệ quy, đảm bảo rằng việc khám phá tệp và lưu trữ dữ liệu luôn nhất quán trên các hệ điều hành và môi trường phát triển khác nhau.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa đường dẫn`}),` — Tự động phân giải các ký tự phân tách đường dẫn cụ thể của hệ điều hành và hợp nhất các phân đoạn thành các chuỗi tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duyệt đệ quy`}),` — Cung cấp các phương thức chuyên biệt để khám phá sâu các cấu trúc thư mục với tính năng lập chỉ mục tùy chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`IO đồng bộ`}),` — Xử lý việc đọc tệp (JSON/Văn bản) và ghi tệp với tính năng tự động tổng hợp thư mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khám phá siêu dữ liệu`}),` — Truy xuất dấu thời gian của tệp và dữ liệu thống kê cho logic vô hiệu hóa bộ nhớ đệm (cache invalidation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hoạt động an toàn`}),` — Bao gồm các kiểm tra tích hợp về sự tồn tại của mục nhập, loại (tệp so với thư mục) và trạng thái mô-đun.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp tĩnh, `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` tự khởi tạo và sẵn sàng sử dụng ngay khi import.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesFile } from '@dxtmisha/scripts'

// Kiểm tra xem cấu hình có tồn tại không
if (PropertiesFile.is('design-ui.json')) {
  const config = PropertiesFile.readFile('design-ui.json')
}

// Hợp nhất các đường dẫn một cách an toàn
const fullPath = PropertiesFile.joinPath(['src', 'tokens', 'colors.json'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-kiểm-tra`,children:`Các phương thức kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(path): boolean`}),` — Kiểm tra đồng bộ sự tồn tại của tệp hoặc thư mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDir(path): boolean`}),` — Xác định xem đường dẫn có trỏ đến một thư mục hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isModule(): boolean`}),` — Xác định xem gói hiện tại có được kết nối dưới dạng mô-đun ngoài hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-quản-lý-đường-dẫn`,children:`Các phương thức quản lý đường dẫn`}),`
`,(0,c.jsx)(n.h3,{id:`joinpath`,children:(0,c.jsx)(n.code,{children:`joinPath`})}),`
`,(0,c.jsx)(n.p,{children:`Hợp nhất nhiều phân đoạn đường dẫn thành một chuỗi đường dẫn chuẩn hóa duy nhất bằng cách sử dụng ký tự phân tách của hệ điều hành hiện tại.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — mảng các phân đoạn hoặc chuỗi đường dẫn.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const path = PropertiesFile.joinPath(['src', 'styles', 'main.css'])
// Trả về: "src/styles/main.css" (trên Mac/Linux) hoặc "src\\styles\\main.css" (trên Windows)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`}),` — đường dẫn đã hợp nhất và chuẩn hóa.`]}),`
`,(0,c.jsx)(n.h3,{id:`joinpathbyname`,children:(0,c.jsx)(n.code,{children:`joinPathByName`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo đường dẫn đầy đủ đến tệp bằng cách hợp nhất đường dẫn thư mục, tên tệp và phần mở rộng.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn thư mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — phần mở rộng tệp (mặc định là `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const filePath = PropertiesFile.joinPathByName('data', 'user-profile', 'json')
// Trả về: "data/user-profile.json"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getpathdir`,children:(0,c.jsx)(n.code,{children:`getPathDir`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất đường dẫn thư mục từ một đường dẫn đầy đủ. Nếu đường dẫn thư mục được truyền vào, nó sẽ trả về nguyên vẹn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến tệp hoặc thư mục.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const dirOnly = PropertiesFile.getPathDir('src/classes/App.ts')
// Trả về: "src/classes"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getpathfile`,children:(0,c.jsx)(n.code,{children:`getPathFile`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một mảng các phân đoạn đường dẫn đến tệp.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn cơ sở.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — phần mở rộng (mặc định là `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const segments = PropertiesFile.getPathFile('dist', 'manifest')
// Trả về: ["dist", "manifest.json"]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`getroot`,children:(0,c.jsx)(n.code,{children:`getRoot`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về đường dẫn gốc hiện tại của dự án (`,(0,c.jsx)(n.code,{children:`process.cwd()`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const root = PropertiesFile.getRoot()
// Trả về: "/Users/user/project"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`getfilename`,children:(0,c.jsx)(n.code,{children:`getFileName`})}),`
`,(0,c.jsx)(n.p,{children:`Chuyển đổi tên sang kebab-case và thêm phần mở rộng được chỉ định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — phần mở rộng (mặc định là `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const name = PropertiesFile.getFileName('UserProfile', 'ts')
// Trả về: "user-profile.ts"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h3,{id:`sep`,children:(0,c.jsx)(n.code,{children:`sep`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về ký tự phân tách thư mục cụ thể của hệ thống (`,(0,c.jsx)(n.code,{children:`/`}),` hoặc `,(0,c.jsx)(n.code,{children:`\\`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const s = PropertiesFile.sep()
// Trả về: "/"
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-đọc`,children:`Các phương thức đọc`}),`
`,(0,c.jsx)(n.h3,{id:`readfile`,children:(0,c.jsx)(n.code,{children:`readFile`})}),`
`,(0,c.jsx)(n.p,{children:`Đọc đồng bộ và tự động phân giải nội dung tệp. Trả về một đối tượng nếu là JSON, ngược lại là một chuỗi.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const data = PropertiesFile.readFile<{ name: string }>('config.json')
// Trả về: { name: "DXT" } (đối tượng)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`R | undefined`}),` — dữ liệu đã phân giải hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy tệp.`]}),`
`,(0,c.jsx)(n.h3,{id:`readfileonly`,children:(0,c.jsx)(n.code,{children:`readFileOnly`})}),`
`,(0,c.jsx)(n.p,{children:`Đọc nội dung tệp dưới dạng chuỗi thô mà không có bất kỳ chuyển đổi nào.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const text = PropertiesFile.readFileOnly('README.md')
// Trả về: "# Project Title..." (chuỗi)
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string | undefined`})]}),`
`,(0,c.jsx)(n.h3,{id:`readdir`,children:(0,c.jsx)(n.code,{children:`readDir`})}),`
`,(0,c.jsx)(n.p,{children:`Đọc nội dung của một thư mục (danh sách tên các mục con).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến thư mục.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const items = PropertiesFile.readDir('src')
// Trả về: ["index.ts", "classes", "types"]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`readdirrecursive`,children:(0,c.jsx)(n.code,{children:`readDirRecursive`})}),`
`,(0,c.jsx)(n.p,{children:`Đọc đệ quy tất cả các tệp trong một thư mục và các thư mục con của nó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến thư mục.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const allFiles = PropertiesFile.readDirRecursive('src')
// Trả về: ["index.ts", "classes/App.ts", "classes/DB.ts", ...]
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`string[]`}),` — danh sách đường dẫn đến tất cả các tệp được tìm thấy.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-chỉnh-sửa`,children:`Các phương thức chỉnh sửa`}),`
`,(0,c.jsx)(n.h3,{id:`write`,children:(0,c.jsx)(n.code,{children:`write`})}),`
`,(0,c.jsx)(n.p,{children:`Lưu dữ liệu vào một tệp, tự động tạo bất kỳ thư mục cha nào còn thiếu.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn thư mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — dữ liệu cần ghi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string`}),` — phần mở rộng (mặc định là `,(0,c.jsx)(n.code,{children:`json`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.write('dist/cache', 'data', { id: 1 })
// Tạo dist/cache/data.json với nội dung JSON
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`writebypath`,children:(0,c.jsx)(n.code,{children:`writeByPath`})}),`
`,(0,c.jsx)(n.p,{children:`Ghi dữ liệu vào một đường dẫn tệp chính xác.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đầy đủ đến tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`transform: boolean`}),` — có chuyển đổi đối tượng thành JSON hay không (mặc định là `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.writeByPath('logs/error.log', 'Critical error', false)
// Ghi chuỗi thô vào tệp mà không chuyển đổi JSON
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`createdir`,children:(0,c.jsx)(n.code,{children:`createDir`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo đệ quy một thư mục nếu nó chưa tồn tại.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn cần tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.createDir('storage/images/2024')
// Tạo toàn bộ cây thư mục
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`copy`,children:(0,c.jsx)(n.code,{children:`copy`})}),`
`,(0,c.jsx)(n.p,{children:`Sao chép một tệp từ đường dẫn nguồn đến đường dẫn đích.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathsSrc: PropertiesFilePath`}),` — đường dẫn nguồn.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.copy('backup/config.json', 'config.json')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`removefile`,children:(0,c.jsx)(n.code,{children:`removeFile`})}),`
`,(0,c.jsx)(n.p,{children:`Xóa tệp được chỉ định.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.removeFile('temp.tmp')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h3,{id:`removedir`,children:(0,c.jsx)(n.code,{children:`removeDir`})}),`
`,(0,c.jsx)(n.p,{children:`Xóa đệ quy một thư mục và tất cả nội dung của nó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: PropertiesFilePath`}),` — đường dẫn đến thư mục.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`PropertiesFile.removeDir('dist/old-version')
`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`luồng-đồng-bộ-hóa-đường-dẫn--io-the-paths--io-synchronization-flow`,children:`Luồng đồng bộ hóa Đường dẫn & IO (The Paths & IO Synchronization Flow)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`PropertiesFile`}),` đóng vai trò là lớp đồng bộ hóa cấp thấp cho toàn bộ thư viện:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa đường dẫn`}),`: Mọi phương thức đều gọi nội bộ `,(0,c.jsx)(n.code,{children:`joinPath`}),` и `,(0,c.jsx)(n.code,{children:`toSep`}),`, chuyển đổi tất cả các dấu gạch chéo xuôi thành ký tự phân tách cụ thể của hệ điều hành (ví dụ: `,(0,c.jsx)(n.code,{children:`\\`}),` trên Windows).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi nguyên tử`}),`: Khi `,(0,c.jsx)(n.code,{children:`write()`}),` được gọi, lớp trước tiên sẽ xác định thư mục đích và thực thi `,(0,c.jsx)(n.code,{children:`createDir()`}),`, lệnh này sẽ xây dựng đệ quy bất kỳ thư mục nào còn thiếu trước khi ghi nội dung thông qua `,(0,c.jsx)(n.code,{children:`fs.writeFileSync`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ngữ cảnh đệ quy`}),`: Các phương thức đệ quy chuyên biệt (`,(0,c.jsx)(n.code,{children:`readDirRecursive`}),`, v.v.) cho phép các công cụ tài liệu và token khám phá mọi tệp trong cây thành phần mà không cần quản lý thủ công độ sâu hoặc giới hạn đệ quy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải gốc (Root Resolution)`}),`: Nó duy trì một `,(0,c.jsx)(n.code,{children:`root`}),` nội bộ (dựa trên `,(0,c.jsx)(n.code,{children:`process.cwd()`}),`) để đảm bảo các phân đoạn đường dẫn tương đối luôn được phân giải từ thư mục gốc của dự án.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};