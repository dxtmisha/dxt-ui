import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as d}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(c){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/vi/functional-basic/Classes/Icons - Quản lý Biểu tượng"}),`
`,n.jsx(i.h1,{id:"lớp-icons",children:"Lớp Icons"}),`
`,n.jsxs(i.p,{children:["Một lớp tĩnh để quản lý registry biểu tượng (icon) của ứng dụng. Cung cấp cơ chế đăng ký, tải chậm (lazy loading) và truy xuất SVG icon. Các icon được lưu trữ trong đối tượng ",n.jsx(i.code,{children:"window"})," toàn cục để có thể truy cập từ nhiều phiên bản của thư viện."]}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Registry toàn cục"})," — Sử dụng ",n.jsx(i.code,{children:"window.__UI_ICON"})," để lưu trữ icon, đảm bảo registry duy nhất dù có nhiều phiên bản."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tải chậm (Lazy Loading)"})," — Phương thức ",n.jsx(i.code,{children:"addLoad"}),' đánh dấu icon là "đang tải"; ',n.jsx(i.code,{children:"get"})," sẽ chờ cho đến khi nó xuất hiện."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Kiểu linh hoạt"})," — Một icon có thể là chuỗi, ",n.jsx(i.code,{children:"Promise"}),", hoặc hàm trả về ",n.jsx(i.code,{children:"Promise"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"URL tự động"})," — Icon có tiền tố ",n.jsx(i.code,{children:"@"})," được chuyển thành URL đầy đủ dựa trên ",n.jsx(i.code,{children:"url"})," cơ sở."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Lớp này là tĩnh và không yêu cầu khởi tạo đối tượng. URL cơ sở được cấu hình qua ",n.jsx(i.code,{children:"setUrl"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Thay đổi đường dẫn cơ sở đến icon
Icons.setUrl('/assets/svg/')
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"đăng-ký-icon",children:"Đăng ký icon"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"add(index: string, file: IconsItem): void"})," — Đăng ký icon theo tên. ",n.jsx(i.code,{children:"file"})," có thể là chuỗi đường dẫn, ",n.jsx(i.code,{children:"Promise"}),", hoặc hàm factory."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addLoad(index: string): void"}),' — Đánh dấu icon là "đang tải" (marker ',n.jsx(i.code,{children:"--LOAD--"}),"). ",n.jsx(i.code,{children:"get"})," sẽ chờ cho đến khi icon có mặt."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addGlobal(index: string, file: string): void"})," — Đăng ký icon với URL toàn cục (URL cơ sở + ",n.jsx(i.code,{children:"file"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addByList(list: Record<string, IconsItem>): void"})," — Đăng ký hàng loạt icon từ một đối tượng."]}),`
`]}),`
`,n.jsx(i.h3,{id:"truy-xuất-icon",children:"Truy xuất icon"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"async get(index: string, url?: string, wait?: number): Promise<string>"}),' — Trả về nội dung hoặc đường dẫn của icon theo tên. Nếu icon đang "tải", sẽ chờ cho đến khi xuất hiện (mặc định 3 phút).']}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"is(index: string): boolean"})," — Kiểm tra xem icon đã được đăng ký chưa."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getNameList(): string[]"})," — Trả về danh sách tên của tất cả icon đã đăng ký."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getUrlGlobal(): string"})," — Trả về URL cơ sở hiện tại của icon."]}),`
`]}),`
`,n.jsx(i.h3,{id:"cấu-hình",children:"Cấu hình"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setUrl(url: string): void"})," — Thay đổi đường dẫn cơ sở cho lưu trữ icon."]}),`
`]}),`
`,n.jsx(i.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(i.h3,{id:"đăng-ký-và-sử-dụng-icon",children:"Đăng ký và sử dụng icon"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Đăng ký bằng chuỗi
Icons.add('arrow', '<svg>...</svg>')

// Đăng ký qua Promise (dynamic import)
Icons.add('user', import('./icons/user.svg'))

// Đăng ký qua hàm factory
Icons.add('star', () => import('./icons/star.svg'))

// Truy xuất
const svgContent = await Icons.get('arrow')
`})}),`
`,n.jsx(i.h3,{id:"đăng-ký-hàng-loạt",children:"Đăng ký hàng loạt"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,n.jsx(i.h3,{id:"tải-chậm-lazy-loading",children:"Tải chậm (Lazy Loading)"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`// Đánh dấu là đang tải
Icons.addLoad('dynamic-icon')

// Tải và đăng ký sau
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() sẽ chờ cho đến khi icon xuất hiện trong registry
const svg = await Icons.get('dynamic-icon')
`})})]})}function g(c={}){const{wrapper:i}={...e(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(s,{...c})}):s(c)}export{g as default};
