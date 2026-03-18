import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/DesignWikiStormItem - Bộ phân giải siêu dữ liệu IDE cho thành phần"}),`
`,n.jsx(h.h1,{id:"lớp-designwikistormitem",children:"Lớp DesignWikiStormItem"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"DesignWikiStormItem"})," là một bộ phân giải chi tiết (granular resolver) chịu trách nhiệm trích xuất, phân tích và định dạng siêu dữ liệu cho một thành phần UI duy nhất. Nó đóng vai trò là cầu nối giữa tài liệu nội bộ hướng đến Storybook và định dạng ",n.jsx(h.code,{children:"web-types.json"}),", đảm bảo rằng mọi thuộc tính và mô tả đều được ánh xạ chính xác cho IntelliSense trong IDE."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Ánh xạ Storybook sang WebTypes"})," — Tự động chuyển đổi các đối tượng ",n.jsx(h.code,{children:"WikiStorybook"})," thành các định nghĩa thẻ (tags) tương thích với JetBrains."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phân giải Module động"}),' — Tính toán chính xác các đường dẫn module cho các thành phần để hỗ trợ tính năng "Jump to Definition" trong các IDE.']}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tài liệu theo ngữ cảnh"})," — Bảo tồn và định dạng các mô tả thành phần, kiểu dữ liệu thuộc tính và các giá trị mặc định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Truy xuất dữ liệu theo chương trình"})," — Nhập (import) và phân tích các tệp ",n.jsx(h.code,{children:"wikiData.ts"})," theo chương trình để lấy siêu dữ liệu thực tế của thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp thuộc tính"})," — Xây dựng danh sách các thuộc tính bằng cách phân giải các kiểu dữ liệu phức tạp thành các chuỗi IDE dễ đọc cho con người."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(h.p,{children:"Khởi tạo bộ phân giải bằng cách cung cấp ngữ cảnh dự án, đường dẫn cấu trúc và siêu dữ liệu thư viện của thành phần."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"project: string"})," — Tên của dự án (ví dụ: ",n.jsx(h.code,{children:"'@dxtmisha/ui'"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"path: string[]"})," — Các đoạn đường dẫn trong hệ thống tệp dẫn đến thư mục thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"data: LibraryData"})," — Siêu dữ liệu cốt lõi của thành phần (tên, bí danh, thư mục)."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignWikiStormItem } from '@dxtmisha/scripts'

const resolver = new DesignWikiStormItem(
  '@dxtmisha/ui',
  ['packages', 'core', 'src', 'components'],
  componentData
)
await resolver.init()
const tagMetadata = resolver.get()
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"thu-thập-thông-tin",children:"Thu thập thông tin"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"get(): WebTypesTagItem | undefined"})," — Trả về định nghĩa thẻ đã hợp nhất chứa tên, mô tả, nguồn và các thuộc tính."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getAttribute(item: WikiStorybookProp): WebTypesAttributeItem"})," — Chuyển đổi một thuộc tính Storybook duy nhất thành định nghĩa thuộc tính Web-Types."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getAttributes(): WebTypesAttributes"})," — Biên soạn danh sách đầy đủ các thuộc tính cho thành phần."]}),`
`]}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"init(): Promise<this>"})," — Khởi tạo bất đồng bộ instance ",n.jsx(h.code,{children:"WikiStorybook"})," nội bộ bằng cách tải dữ liệu tài liệu của thành phần."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(h.h3,{id:"quy-trình-trích-xuất-siêu-dữ-liệu",children:"Quy trình trích xuất siêu dữ liệu"}),`
`,n.jsx(h.p,{children:"Khi bộ phân giải được khởi tạo và truy vấn, nó tuân theo một quy trình dữ liệu có cấu trúc:"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsxs(h.strong,{children:["Tải dữ liệu Wiki (",n.jsx(h.code,{children:"initWiki"}),")"]}),": Nó phân giải đường dẫn tệp đến ",n.jsx(h.code,{children:"wikiData.ts"})," của thành phần và thực hiện import động để lấy siêu dữ liệu thực tế (props, defaults, design tokens)."]}),`
`,n.jsxs(h.li,{children:[n.jsxs(h.strong,{children:["Tổng hợp thẻ (",n.jsx(h.code,{children:"get"}),")"]}),": Nó xây dựng tên thẻ IDE bằng cách kết hợp bí danh của hệ thống thiết kế với tên thành phần nội bộ."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Ánh xạ nguồn (Source Mapping)"}),": Nó xác định các thuộc tính ",n.jsx(h.code,{children:"module"})," và ",n.jsx(h.code,{children:"symbol"}),", cho phép các IDE liên kết siêu dữ liệu ngược lại mã nguồn thực tế."]}),`
`,n.jsxs(h.li,{children:[n.jsxs(h.strong,{children:["Biên soạn thuộc tính (",n.jsx(h.code,{children:"getAttributes"}),")"]}),": Nó duyệt qua mọi thuộc tính được định nghĩa trong wiki, phân giải chú thích tài liệu, kiểu dữ liệu TypeScript và giá trị mặc định của nó thành một cấu trúc JSON chuẩn hóa."]}),`
`]}),`
`,n.jsx(h.h3,{id:"vai-trò-trong-động-cơ-ide",children:"Vai trò trong Động cơ IDE"}),`
`,n.jsxs(h.p,{children:[n.jsx(h.code,{children:"DesignWikiStormItem"}),' là "ngựa thồ" (workhorse) của bộ công cụ tạo siêu dữ liệu. Trong khi ',n.jsx(h.code,{children:"DesignWikiStorm"})," quản lý cấu trúc tệp tổng thể, lớp này xử lý sự phức tạp của việc phân tích từng thành phần riêng lẻ, đảm bảo rằng logic UI chuyên biệt được biểu diễn chính xác dưới định dạng mà các công cụ phát triển có thể hiểu được."]})]})}function u(i={}){const{wrapper:h}={...c(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(t,{...i})}):t(i)}export{u as default};
