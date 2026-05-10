import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaFrame - Phân tích cấu trúc Figma`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmaframe`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaFrame`})]}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích để phân tích và tương tác với cấu trúc của các trang hoặc các vùng lựa chọn trong Figma. Nó quét đệ quy cây node, lọc các phần tử theo loại và cung cấp các phương thức hỗ trợ để trích xuất văn bản và tạo ảnh chụp màn hình.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quét đệ quy`}),` — Tự động lập chỉ mục cho tất cả các phần tử lồng nhau bên trong ngữ cảnh được cung cấp (trang hoặc vùng lựa chọn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ lựa chọn`}),` — Có thể được khởi tạo để nhắm mục tiêu vào toàn bộ trang tài liệu hoặc chỉ vùng lựa chọn hiện tại của người dùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp văn bản`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`getTexts()`}),` nhóm các chuỗi văn bản giống hệt nhau lại với nhau, cung cấp danh sách các giá trị duy nhất và các ID node liên kết với chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất dữ liệu tự động`}),` — Đơn giản hóa quá trình tạo ảnh chụp màn hình cho các phần tử chính bên trong frame.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Tạo một thực thể mới bằng cách cung cấp một node bắt đầu (thường là một trang) và chỉ định xem nó có nên tập trung vào vùng lựa chọn hay không.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFrame } from '@dxtmisha/figma-code'

// Phân tích toàn bộ trang hiện tại
const frameAnalyzer = new FigmaFrame(figma.currentPage)

// Chỉ phân tích các mục được chọn
const selectionAnalyzer = new FigmaFrame(figma.currentPage, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`trạng-thái-và-điều-hướng`,children:`Trạng thái và Điều hướng`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelection(): boolean`}),` — Kiểm tra xem trình phân tích có được khởi tạo để làm việc với vùng chọn hiện tại của người dùng hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getMainFrames(): FigmaItem[]`}),` — Trích xuất các frame hoặc section chính từ gốc của ngữ cảnh hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lọc-và-lựa-chọn`,children:`Lọc và Lựa chọn`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsFrame(): FigmaItem<FrameNode>[]`}),` — Trả về danh sách tất cả các node lồng nhau là frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsSection(): FigmaItem<SectionNode>[]`}),` — Trả về danh sách tất cả các node lồng nhau là section.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemsText(): FigmaItem<TextNode>[]`}),` — Trả về danh sách tất cả các node văn bản lồng nhau.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nội-dung-và-thông-tin`,children:`Nội dung và Thông tin`}),`
`,(0,c.jsx)(n.h4,{id:`getitemsinfo`,children:(0,c.jsx)(n.code,{children:`getItemsInfo`})}),`
`,(0,c.jsx)(n.p,{children:`Thu thập thông tin chi tiết (tên, ID, ảnh chụp màn hình) một cách không đồng bộ cho tất cả các mục trong frame.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — Một promise chứa danh sách thông tin các mục.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const infoList: UiFigmaFramesList = await frame.getItemsInfo()
/*
[
  { id: '1:10', name: 'Button', image: Uint8Array[...] },
  { id: '1:25', name: 'Card', image: 'data:image/png;base64...' }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getmainitemsinfo`,children:(0,c.jsx)(n.code,{children:`getMainItemsInfo`})}),`
`,(0,c.jsx)(n.p,{children:`Thu thập thông tin chi tiết một cách không đồng bộ chỉ cho các mục chính (cấp cao nhất).`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFramesList>`}),` — Một promise chứa danh sách thông tin các mục chính.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const mainInfoList: UiFigmaFramesList = await frame.getMainItemsInfo()
/*
[
  { id: '1:10', name: 'Login Screen', image: Uint8Array[...] }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`gettexts`,children:(0,c.jsx)(n.code,{children:`getTexts`})}),`
`,(0,c.jsx)(n.p,{children:`Nhóm các node văn bản theo nội dung của chúng, trả về các chuỗi duy nhất và danh sách các ID node tương ứng.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`UiFigmaItemText[]`}),` — Một mảng các mục văn bản đã được nhóm.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const groupedTexts: UiFigmaItemText[] = frame.getTexts()
/*
[
  { id: ['1:10', '1:15'], text: 'Submit' },
  { id: ['1:20'], text: 'Cancel' }
]
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`phân-tích-style`,children:`Phân tích Style`}),`
`,(0,c.jsx)(n.h4,{id:`getitemscss`,children:(0,c.jsx)(n.code,{children:`getItemsCss`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một bản đồ các style CSS cho tất cả các mục trong frame.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesCssList>`}),` — Một promise chứa bản đồ style được lập chỉ mục theo ID node.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const cssStyles: UiFigmaFrameStylesCssList = await frame.getItemsCss()
/*
{
  '1:10': { 'color': '#ff0000', 'font-size': '14px' },
  '1:12': { 'background': '#ffffff', 'padding': '10px' }
}
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getitemsstyles`,children:(0,c.jsx)(n.code,{children:`getItemsStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất dữ liệu style đầy đủ (cấu trúc JSON của tài liệu, văn bản, CSS) cho tất cả các mục.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesList>`}),` — Một promise chứa danh sách dữ liệu style mở rộng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const stylesList: UiFigmaFrameStylesList = await frame.getItemsStyles()
/*
[
  { 
    id: '1:10', 
    name: 'Label', 
    text: 'Username', 
    styles: { 'color': '#333' },
    json: { document: {...}, styles: {...} }
  }
]
*/
`})}),`
`,(0,c.jsx)(n.h4,{id:`getmainitemsstyles`,children:(0,c.jsx)(n.code,{children:`getMainItemsStyles`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất dữ liệu style đầy đủ chỉ cho các mục chính, bao gồm cả style của các phần tử con của chúng.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<UiFigmaFrameStylesList>`}),` — Một promise chứa danh sách dữ liệu style mở rộng cho các mục chính.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const mainStylesList: UiFigmaFrameStylesList = await frame.getMainItemsStyles()
/*
[
  { 
    id: '1:10', 
    name: 'Login Form', 
    childrenStyles: {
       '1:11': { 'color': '#000' },
       '1:12': { 'margin-top': '20px' }
    }
  }
]
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`hành-động-và-xuất-dữ-liệu`,children:`Hành động và Xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot(): Promise<Uint8Array[]>`}),` — Tạo ảnh chụp màn hình dưới định dạng JPG cho tất cả các mục chính.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmanode`,children:(0,c.jsx)(n.code,{children:`UiFigmaNode`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểu cơ sở cho các node Figma. Nó đại diện cho một sự kết hợp của các node (`,(0,c.jsx)(n.code,{children:`SceneNode | DocumentNode | PageNode | FrameNode`}),`, v.v.) hỗ trợ lồng nhau và các thuộc tính tiêu chuẩn của Figma API.`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaitemtext`,children:(0,c.jsx)(n.code,{children:`UiFigmaItemText`})}),`
`,(0,c.jsx)(n.p,{children:`Kết quả của việc nhóm các lớp văn bản theo nội dung của chúng.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string[]`}),` — Một mảng các định danh node duy nhất có cùng văn bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Chuỗi văn bản thực tế.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmamessagetexts`,children:(0,c.jsx)(n.code,{children:`UiFigmaMessageTexts`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc dữ liệu để truyền kết quả phân tích văn bản.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frame: FigmaFrame`}),` — Một thực thể của lớp trình phân tích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`texts: UiFigmaItemText[]`}),` — Danh sách các mục văn bản được tìm thấy và nhóm lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`screenshot: Uint8Array[]`}),` — Một mảng các ảnh chụp màn hình cho các phần tử chính.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`})}),`
`,(0,c.jsx)(n.p,{children:`Thông tin đơn giản hóa về một phần tử để hiển thị trong giao diện.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của phần tử trong Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — Ảnh chụp màn hình của phần tử (dữ liệu nhị phân hoặc base64).`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesitem`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Thông tin mở rộng về một phần tử, bao gồm style của nó. Kế thừa tất cả các trường từ `,(0,c.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — Cấu trúc dữ liệu node và style dưới định dạng JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text?: string`}),` — Nội dung văn bản (nếu node là một node văn bản).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles?: Record<string, string>`}),` — Một đối tượng chứa các thuộc tính CSS của chính phần tử đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`childrenStyles?: Record<string, Record<string, string>>`}),` — Bản đồ các style CSS cho tất cả các phần tử con, được lập chỉ mục theo ID của chúng.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylesdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesData`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`document: UiFigmaFrameStylesJson`}),` — Cây node dưới định dạng nén.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styles: Record<string, any>`}),` — Một từ điển các định nghĩa style của tài liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestyleslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một mảng các đối tượng `,(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesItem`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframestylescsslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFrameStylesCssList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một đối tượng (`,(0,c.jsx)(n.code,{children:`Record<string, Record<string, string>>`}),`) trong đó khóa là ID node và giá trị là tập hợp các style CSS của nó.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};