import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/DesignWikiStormItem - Bộ phân giải siêu dữ liệu IDE cho thành phần`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designwikistormitem`,children:`Lớp DesignWikiStormItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),` là một bộ phân giải chi tiết (granular resolver) chịu trách nhiệm trích xuất, phân tích và định dạng siêu dữ liệu cho một thành phần UI duy nhất. Nó đóng vai trò là cầu nối giữa tài liệu nội bộ hướng đến Storybook và định dạng `,(0,c.jsx)(n.code,{children:`web-types.json`}),`, đảm bảo rằng mọi thuộc tính và mô tả đều được ánh xạ chính xác cho IntelliSense trong IDE.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ Storybook sang WebTypes`}),` — Tự động chuyển đổi các đối tượng `,(0,c.jsx)(n.code,{children:`WikiStorybook`}),` thành các định nghĩa thẻ (tags) tương thích với JetBrains.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải Module động`}),` — Tính toán chính xác các đường dẫn module cho các thành phần để hỗ trợ tính năng "Jump to Definition" trong các IDE.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tài liệu theo ngữ cảnh`}),` — Bảo tồn và định dạng các mô tả thành phần, kiểu dữ liệu thuộc tính và các giá trị mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Truy xuất dữ liệu theo chương trình`}),` — Nhập (import) và phân tích các tệp `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` theo chương trình để lấy siêu dữ liệu thực tế của thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp thuộc tính`}),` — Xây dựng danh sách các thuộc tính bằng cách phân giải các kiểu dữ liệu phức tạp thành các chuỗi IDE dễ đọc cho con người.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo bộ phân giải bằng cách cung cấp ngữ cảnh dự án, đường dẫn cấu trúc và siêu dữ liệu thư viện của thành phần.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`project: string`}),` — Tên của dự án (ví dụ: `,(0,c.jsx)(n.code,{children:`'@dxtmisha/ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[]`}),` — Các đoạn đường dẫn trong hệ thống tệp dẫn đến thư mục thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: LibraryData`}),` — Siêu dữ liệu cốt lõi của thành phần (tên, bí danh, thư mục).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWikiStormItem } from '@dxtmisha/scripts'

const resolver = new DesignWikiStormItem(
  '@dxtmisha/ui',
  ['packages', 'core', 'src', 'components'],
  componentData
)
await resolver.init()
const tagMetadata = resolver.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thu-thập-thông-tin`,children:`Thu thập thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): WebTypesTagItem | undefined`}),` — Trả về định nghĩa thẻ đã hợp nhất chứa tên, mô tả, nguồn và các thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttribute(item: WikiStorybookProp): WebTypesAttributeItem`}),` — Chuyển đổi một thuộc tính Storybook duy nhất thành định nghĩa thuộc tính Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttributes(): WebTypesAttributes`}),` — Biên soạn danh sách đầy đủ các thuộc tính cho thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): Promise<this>`}),` — Khởi tạo bất đồng bộ instance `,(0,c.jsx)(n.code,{children:`WikiStorybook`}),` nội bộ bằng cách tải dữ liệu tài liệu của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-trích-xuất-siêu-dữ-liệu`,children:`Quy trình trích xuất siêu dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Khi bộ phân giải được khởi tạo và truy vấn, nó tuân theo một quy trình dữ liệu có cấu trúc:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Tải dữ liệu Wiki (`,(0,c.jsx)(n.code,{children:`initWiki`}),`)`]}),`: Nó phân giải đường dẫn tệp đến `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` của thành phần và thực hiện import động để lấy siêu dữ liệu thực tế (props, defaults, design tokens).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Tổng hợp thẻ (`,(0,c.jsx)(n.code,{children:`get`}),`)`]}),`: Nó xây dựng tên thẻ IDE bằng cách kết hợp bí danh của hệ thống thiết kế với tên thành phần nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ánh xạ nguồn (Source Mapping)`}),`: Nó xác định các thuộc tính `,(0,c.jsx)(n.code,{children:`module`}),` và `,(0,c.jsx)(n.code,{children:`symbol`}),`, cho phép các IDE liên kết siêu dữ liệu ngược lại mã nguồn thực tế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Biên soạn thuộc tính (`,(0,c.jsx)(n.code,{children:`getAttributes`}),`)`]}),`: Nó duyệt qua mọi thuộc tính được định nghĩa trong wiki, phân giải chú thích tài liệu, kiểu dữ liệu TypeScript và giá trị mặc định của nó thành một cấu trúc JSON chuẩn hóa.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`vai-trò-trong-động-cơ-ide`,children:`Vai trò trong Động cơ IDE`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),` là "ngựa thồ" (workhorse) của bộ công cụ tạo siêu dữ liệu. Trong khi `,(0,c.jsx)(n.code,{children:`DesignWikiStorm`}),` quản lý cấu trúc tệp tổng thể, lớp này xử lý sự phức tạp của việc phân tích từng thành phần riêng lẻ, đảm bảo rằng logic UI chuyên biệt được biểu diễn chính xác dưới định dạng mà các công cụ phát triển có thể hiểu được.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};