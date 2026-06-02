import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/FigmaApi - Figma REST API Client`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmaapi`,children:`Lớp FigmaApi`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaApi`}),` là một lớp bọc hoàn chỉnh được thiết kế để tương tác trực tiếp với `,(0,c.jsx)(n.strong,{children:`Figma REST API`}),`. Lớp này đơn giản hóa quy trình gửi yêu cầu HTTP để lấy thông tin tệp, các nút (layer) cụ thể trên canvas, xuất hình ảnh, kiểu dáng (styles) cũng như các tài nguyên thư mục dùng chung của nhóm.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định tuyến Yêu cầu API Thống nhất`}),` — tự động xây dựng các điểm cuối (endpoints) yêu cầu an toàn theo đúng cấu trúc của Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trích xuất Cấu trúc Lớp & Thành phần`}),` — lấy dữ liệu chi tiết của nút (metadata), khung bao giới hạn (bounding boxes) và kiểu dáng của các lớp canvas cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất Tài nguyên Hình ảnh`}),` — tích hợp với công cụ kết xuất của Figma để lấy các URL tạm thời của hình ảnh kết xuất từ các nút canvas ở nhiều định dạng khác nhau (SVG, PNG, JPG, PDF).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Kiểu dáng`}),` — lấy danh mục các kiểu dáng được định nghĩa trong tệp hoặc các kiểu dáng cụ thể theo khóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giao diện Fluent linh hoạt`}),` — các phương thức thiết lập (setters) hỗ trợ nối chuỗi (chaining) để thay đổi động các ngữ cảnh về token, tệp hoặc nút đích.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`FigmaApi`}),` yêu cầu một token truy cập cá nhân và một khóa tệp Figma đích khi khởi tạo.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`token: string`}),` — Token truy cập cá nhân Figma Personal Access Token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileKey: string`}),` — Khóa của tệp Figma đích (được tìm thấy trong URL của tệp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nodeId?: string`}),` — (Tùy chọn) ID của lớp/nút canvas đích.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaApi } from '@dxtmisha/scripts'

const api = new FigmaApi(
  'figd_xxxxxxxxxxxxxxxxxxxxx',
  'abcde12345XYZ'
)
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-gửi-yêu-cầu-điểm-cuối`,children:`Phương thức Gửi yêu cầu Điểm cuối`}),`
`,(0,c.jsx)(n.h4,{id:`files`,children:(0,c.jsx)(n.code,{children:`files`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy siêu dữ liệu tài liệu và cây cấu trúc JSON đầy đủ của tệp Figma đích.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parameters: FigmaFilesParams`}),` — (Tùy chọn) Các tham số truy vấn bổ sung như độ sâu, phiên bản hoặc thông số hình học.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFilesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const fileData = await api.files({ depth: 2 })
`})}),`
`,(0,c.jsx)(n.h4,{id:`filenodes`,children:(0,c.jsx)(n.code,{children:`fileNodes`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy cây cấu trúc của một hoặc nhiều nút canvas cụ thể bên trong tệp.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parameters: FigmaFileNodesParams`}),` — Danh sách các ID nút đích cùng với các bộ sửa đổi phiên bản hoặc hình học.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFileNodesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const nodes = await api.fileNodes({ ids: '0:1' })
`})}),`
`,(0,c.jsx)(n.h4,{id:`fileimages`,children:(0,c.jsx)(n.code,{children:`fileImages`})}),`
`,(0,c.jsx)(n.p,{children:`Kích hoạt kết xuất các nút canvas đích và trả về danh sách các URL của các tệp hình ảnh được tạo ra.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parameters: FigmaFileImagesParams`}),` — Danh sách ID các nút, tỉ lệ và định dạng ảnh xuất ra (ví dụ: `,(0,c.jsx)(n.code,{children:`'svg'`}),`, `,(0,c.jsx)(n.code,{children:`'png'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFileImagesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const images = await api.fileImages({
  ids: '12:34',
  format: 'svg'
})
`})}),`
`,(0,c.jsx)(n.h4,{id:`filestyles`,children:(0,c.jsx)(n.code,{children:`fileStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy danh sách các kiểu dáng được định nghĩa trực tiếp bên trong tệp Figma đích.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaFileStylesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const stylesList = await api.fileStyles()
`})}),`
`,(0,c.jsx)(n.h4,{id:`styles`,children:(0,c.jsx)(n.code,{children:`styles`})}),`
`,(0,c.jsx)(n.p,{children:`Lấy siêu dữ liệu chi tiết của một kiểu dáng cụ thể bằng khóa kiểu dáng duy nhất của nó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — Khóa duy nhất của kiểu dáng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<FigmaStylesResult | undefined>`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const styleMeta = await api.styles('1234abcd5678')
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`thiết-lập-cấu-hình`,children:`Thiết lập Cấu hình`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả các phương thức thiết lập đều hỗ trợ nối chuỗi (chaining) và trả về `,(0,c.jsx)(n.code,{children:`this`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setToken(token: string): this`}),` — Thay đổi token truy cập đang hoạt động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setFileKey(fileKey: string): this`}),` — Thay đổi khóa tệp Figma đích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setNodeId(nodeId?: string): this`}),` — Thay đổi ID nút canvas đích mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getUrl(method: FigmaApiEndpoint, parameters?: Record<string, any>, key?: string): string`}),` — Xây dựng URL yêu cầu API tuyệt đối.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`kiểu-dữ-liệu`,children:`Kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`figmaapiendpoint`,children:`FigmaApiEndpoint`}),`
`,(0,c.jsx)(n.p,{children:`Xác định các điểm cuối REST API của Figma được nhắm tới:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`files`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/files/:file_key"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileNodes`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/files/:file_key/nodes"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileImages`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/images/:file_key"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fileStyles`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/files/:file_key/styles"`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles`}),` — `,(0,c.jsx)(n.code,{children:`"/v1/styles/:key"`})]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};