import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/Icons - Quản lý Biểu tượng`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-icons`,children:`Lớp Icons`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp tĩnh để quản lý registry biểu tượng (icon) của ứng dụng. Cung cấp cơ chế đăng ký, tải chậm (lazy loading) và truy xuất SVG icon. Các icon được lưu trữ trong đối tượng `,(0,c.jsx)(n.code,{children:`window`}),` toàn cục để có thể truy cập từ nhiều phiên bản của thư viện.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Registry toàn cục`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`window.__UI_ICON`}),` để lưu trữ icon, đảm bảo registry duy nhất dù có nhiều phiên bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tải chậm (Lazy Loading)`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`addLoad`}),` đánh dấu icon là "đang tải"; `,(0,c.jsx)(n.code,{children:`get`}),` sẽ chờ cho đến khi nó xuất hiện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểu linh hoạt`}),` — Một icon có thể là chuỗi, `,(0,c.jsx)(n.code,{children:`Promise`}),`, hoặc hàm trả về `,(0,c.jsx)(n.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`URL tự động`}),` — Icon có tiền tố `,(0,c.jsx)(n.code,{children:`@`}),` được chuyển thành URL đầy đủ dựa trên `,(0,c.jsx)(n.code,{children:`url`}),` cơ sở.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này là tĩnh và không yêu cầu khởi tạo đối tượng. URL cơ sở được cấu hình qua `,(0,c.jsx)(n.code,{children:`setUrl`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// Thay đổi đường dẫn cơ sở đến icon
Icons.setUrl('/assets/svg/')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-icon`,children:`Đăng ký icon`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(index: string, file: IconsItem): void`}),` — Đăng ký icon theo tên. `,(0,c.jsx)(n.code,{children:`file`}),` có thể là chuỗi đường dẫn, `,(0,c.jsx)(n.code,{children:`Promise`}),`, hoặc hàm factory.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addLoad(index: string): void`}),` — Đánh dấu icon là "đang tải" (marker `,(0,c.jsx)(n.code,{children:`--LOAD--`}),`). `,(0,c.jsx)(n.code,{children:`get`}),` sẽ chờ cho đến khi icon có mặt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addGlobal(index: string, file: string): void`}),` — Đăng ký icon với URL toàn cục (URL cơ sở + `,(0,c.jsx)(n.code,{children:`file`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addByList(list: Record<string, IconsItem>): void`}),` — Đăng ký hàng loạt icon từ một đối tượng.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-icon`,children:`Truy xuất icon`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(index: string, url?: string, wait?: number): Promise<string>`}),` — Trả về nội dung hoặc đường dẫn của icon theo tên. Nếu icon đang "tải", sẽ chờ cho đến khi xuất hiện (mặc định 3 phút).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(index: string): boolean`}),` — Kiểm tra xem icon đã được đăng ký chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNameList(): string[]`}),` — Trả về danh sách tên của tất cả icon đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrlGlobal(): string`}),` — Trả về URL cơ sở hiện tại của icon.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): void`}),` — Thay đổi đường dẫn cơ sở để lưu trữ icon.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config: IconsConfig): void`}),` — Cập nhật cấu hình biểu tượng (URL và/hoặc danh sách biểu tượng).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hệ-thống-tải`,children:`Hệ thống tải`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Icons`}),` hỗ trợ cơ chế chờ bất đồng bộ. Điều này cho phép bạn yêu cầu một biểu tượng trước khi nó thực sự được tải hoặc đăng ký trong hệ thống.`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký chờ`}),`: Sử dụng phương thức `,(0,c.jsx)(n.code,{children:`addLoad(name)`}),`, một biểu tượng được đánh dấu bằng ký hiệu đặc biệt `,(0,c.jsx)(n.code,{children:`--LOAD--`}),`. Điều này thông báo cho hệ thống biết rằng biểu tượng sẽ có sẵn sau đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quá trình chờ`}),`: Nếu gọi `,(0,c.jsx)(n.code,{children:`get(name)`}),` cho một biểu tượng đang ở trạng thái tải, phương thức sẽ không trả về lỗi mà thay vào đó sẽ chuyển sang chế độ chờ. Nó sẽ kiểm tra registry sau mỗi 320 ms.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hoàn tất`}),`: Ngay khi biểu tượng được thêm qua `,(0,c.jsx)(n.code,{children:`add(name, ...)`}),`, tất cả các lệnh gọi `,(0,c.jsx)(n.code,{children:`get`}),` đang chờ sẽ tự động hoàn tất và trả về nội dung của biểu tượng đó.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Cơ chế này rất quan trọng đối với các hệ thống phân tán, nơi các thành phần có thể yêu cầu tài nguyên trước khi cơ sở dữ liệu truyền thông hoàn tất quá trình khởi tạo.`}),`
`,(0,c.jsx)(n.h2,{id:`các-loại-dữ-liệu-types`,children:`Các loại dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`iconsitem`,children:(0,c.jsx)(n.code,{children:`IconsItem`})}),`
`,(0,c.jsx)(n.p,{children:`Định nghĩa của một biểu tượng (icon). Có thể là:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string`}),` — Nội dung SVG thô hoặc đường dẫn đến tệp SVG.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Promise<string>`}),` — Một promise giải quyết thành nội dung SVG (hữu ích cho việc import động).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`() => Promise<string>`}),` — Một hàm factory trả về một promise (hữu ích cho việc tải lười khi cần thiết).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`iconsconfig`,children:(0,c.jsx)(n.code,{children:`IconsConfig`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đối tượng cấu hình cho phương thức `,(0,c.jsx)(n.code,{children:`setConfig`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`url?: string`}),` — URL cơ sở để lưu trữ biểu tượng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list?: Record<string, IconsItem>`}),` — Danh sách các biểu tượng cần đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-và-sử-dụng-biểu-tượng`,children:`Đăng ký và sử dụng biểu tượng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Icons } from '@dxtmisha/functional-basic'

// Đăng ký dưới dạng chuỗi
Icons.add('arrow', '<svg>...</svg>')

// Đăng ký qua Promise (import động)
Icons.add('user', import('./icons/user.svg'))

// Đăng ký qua hàm factory
Icons.add('star', () => import('./icons/star.svg'))

// Lấy dữ liệu
const svgContent = await Icons.get('arrow')

// Cấu hình hàng loạt qua setConfig
Icons.setConfig({
  url: '/custom-icons/',
  list: {
    check: '<svg>...</svg>',
    error: () => import('./icons/error.svg')
  }
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`đăng-ký-hàng-loạt`,children:`Đăng ký hàng loạt`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`tải-lười-lazy-loading`,children:`Tải lười (Lazy Loading)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Đánh dấu là đang tải
Icons.addLoad('dynamic-icon')

// Tải và đăng ký sau đó
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() sẽ đợi cho đến khi biểu tượng xuất hiện trong sổ đăng ký
const svg = await Icons.get('dynamic-icon')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};