import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToLink - Bộ giải quyết liên kết tham chiếu giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestolink`,children:`Lớp PropertiesToLink`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToLink`}),` giải quyết các tham chiếu nội bộ trong dấu ngoặc nhọn (như `,(0,c.jsx)(n.code,{children:`{design.component.property}`}),`) trong cây cấu hình thiết kế và thay thế chúng bằng giá trị thực tế. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết liên kết đệ quy`}),` — Giải quyết các tham chiếu lồng nhau nhiều cấp bằng cách duyệt qua cây token thiết kế một cách lặp đi lặp lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bảo vệ chống tham chiếu chéo (vòng lặp)`}),` — Giới hạn độ sâu duyệt và đánh dấu các tham chiếu đã xử lý để tránh vòng lặp vô hạn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khớp cú pháp ngoặc nhọn`}),` — Xác thực các token tham chiếu liên kết khớp với mẫu `,(0,c.jsx)(n.code,{children:`^{...}$`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu cấu trúc thuộc tính đã được giải quyết vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`004-link`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToLink, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToLink(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-giải-quyết-liên-kết`,children:`Thao tác giải quyết liên kết`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để chạy tối đa 32 lượt giải quyết tham chiếu cho đến khi không tìm thấy thay đổi nào nữa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(design?: string, component?: string, properties?, parent?: string[]): boolean`}),` — Quét đệ quy các thuộc tính, phát hiện liên kết, giải quyết các mục nguồn và xếp hàng để tiêm giá trị (splice).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isType(item: PropertyItem): boolean`}),` — Kiểm tra xem thuộc tính có khớp với các kiểu có thể liên kết hay không (ví dụ: `,(0,c.jsx)(n.code,{children:`link`}),`, `,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`property`}),`, `,(0,c.jsx)(n.code,{children:`selector`}),`, `,(0,c.jsx)(n.code,{children:`virtual`}),`, `,(0,c.jsx)(n.code,{children:`scss`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isValue(value: PropertyItem['value']): value is string`}),` — Kiểm tra xem giá trị có phải là chuỗi tham chiếu hợp lệ khớp với mẫu ngoặc nhọn hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isIgnore(value: string): boolean`}),` — Kiểm tra xem tham chiếu có bị đánh dấu bỏ qua hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLink(value: string): boolean`}),` — Kiểm tra xem liên kết tham chiếu đã được giải quyết chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isData(value: PropertyItem['value']): value is PropertyList`}),` — Xác định xem tham chiếu có trỏ đến một nút đối tượng phức tạp hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(parent: string[], items: PropertyLinkItem[]): void`}),` — Ghép các giá trị đã giải quyết trở lại vào các nút cha tham chiếu của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addIgnore(value: string): void`}),` — Thêm một giá trị vào mảng bỏ qua.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addLink(value: string): void`}),` — Đăng ký một liên kết là đã xử lý.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};