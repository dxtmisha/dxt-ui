import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI Figma/! Giới thiệu về thư viện`}),`
`,(0,c.jsx)(n.h1,{id:`hệ-sinh-thái-ui-figma`,children:`Hệ sinh thái UI Figma`}),`
`,(0,c.jsxs)(n.p,{children:[`Hệ thống `,(0,c.jsx)(n.code,{children:`UI Figma`}),` là một cơ sở hạ tầng toàn diện để phát triển các plugin Figma. Nó được thiết kế để xóa bỏ rào cản giữa "phía Mã" (backend của plugin) và "phía UI" (frontend), cung cấp khả năng tương tác liền mạch, quản lý dữ liệu phản hồi và định kiểu dữ liệu đầy đủ.`]}),`
`,(0,c.jsx)(n.p,{children:`Hệ sinh thái được xây dựng trên kiến trúc ba tầng, trong đó mỗi lớp xử lý một phần cụ thể trong vòng đời của plugin.`}),`
`,(0,c.jsx)(n.h2,{id:`ba-tầng-tương-tác`,children:`Ba tầng tương tác`}),`
`,(0,c.jsx)(n.h3,{id:`1-cốt-lõi-giao-tiếp-dxtmishafigma`,children:`1. Cốt lõi giao tiếp (@dxtmisha/figma)`}),`
`,(0,c.jsx)(n.p,{children:`Gói cơ bản xác định các giao thức tương tác. Nó bao gồm:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Các hằng số loại tin nhắn.`}),`
`,(0,c.jsx)(n.li,{children:`Các kiểu dữ liệu và giao diện dùng chung.`}),`
`,(0,c.jsx)(n.li,{children:`Các lớp trình nhắn tin trừu tượng để tiêu chuẩn hóa việc trao đổi dữ liệu.`}),`
`,(0,c.jsx)(n.li,{children:`Các tiện ích để định tuyến tin nhắn giữa UI và sandbox của Figma.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-logic-plugin-dxtmishafigma-code`,children:`2. Logic Plugin (@dxtmisha/figma-code)`}),`
`,(0,c.jsx)(n.p,{children:`Một gói chạy trong môi trường thực thi của Figma (Sandbox). Đây là "bộ não" của plugin, có quyền truy cập trực tiếp vào Figma API:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích phần tử`}),`: Các lớp `,(0,c.jsx)(n.code,{children:`FigmaItem`}),` và `,(0,c.jsx)(n.code,{children:`FigmaFrame`}),` để khám phá sâu cấu trúc tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ dữ liệu`}),`: `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),` để làm việc với PluginData (lưu trữ dữ liệu trực tiếp trong tệp `,(0,c.jsx)(n.code,{children:`.fig`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xuất dữ liệu`}),`: Các công cụ để tự động tạo ảnh chụp màn hình và xuất tài sản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa`}),`: Các lớp `,(0,c.jsx)(n.code,{children:`FigmaTopLevelFrames`}),` và `,(0,c.jsx)(n.code,{children:`FigmaFramesSelected`}),` để chuyển trạng thái tài liệu hiện tại sang UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`3-giao-diện-phản-hồi-dxtmishafigma-ref`,children:`3. Giao diện phản hồi (@dxtmisha/figma-ref)`}),`
`,(0,c.jsx)(n.p,{children:`Một gói để phát triển giao diện người dùng bằng Vue 3. Nó chuyển đổi các phản hồi bất đồng bộ từ plugin thành các tham chiếu phản hồi (composables) thuận tiện:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kho lưu trữ phản hồi`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaStorage`}),` và `,(0,c.jsx)(n.code,{children:`useFigmaClientStorage`}),` để liên kết dữ liệu tức thì giữa UI và bộ nhớ Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trình quan sát`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` để tự động cập nhật danh sách các frame có sẵn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý lựa chọn`}),`: `,(0,c.jsx)(n.code,{children:`useFigmaUiSelected`}),` để liên kết các phần tử được chọn trong UI với vùng lựa chọn hoạt động trong Figma.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-của-hệ-thống`,children:`Các tính năng của hệ thống`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Tương tác liền mạch`}),`
Các nhà phát triển không còn cần phải quản lý thủ công các lệnh gọi `,(0,c.jsx)(n.code,{children:`postMessage`}),` và trình lắng nghe sự kiện. Hệ thống tự động xử lý việc định tuyến và xác thực kiểu dữ liệu.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Tính phản hồi có sẵn`}),`
Sử dụng Vue Composition API cho phép bạn xây dựng giao diện plugin dễ dàng như các ứng dụng web tiêu chuẩn, với dữ liệu tự động được lưu trữ bền vững trong tài liệu Figma.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`An toàn kiểu dữ liệu`}),`
Tất cả các tin nhắn và cấu trúc dữ liệu đều được định kiểu nghiêm ngặt, loại bỏ lỗi khi chuyển dữ liệu giữa các môi trường biệt lập (UI và Sandbox).`]}),`
`,(0,c.jsx)(n.h2,{id:`tại-sao-nên-sử-dụng-hệ-sinh-thái-này`,children:`Tại sao nên sử dụng hệ sinh thái này?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tốc độ phát triển`}),`: Nền tảng có sẵn cho các tác vụ điển hình (lựa chọn, cài đặt, ảnh chụp màn hình).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiến trúc sạch`}),`: Phân tách rõ ràng các mối quan tâm giữa logic nghiệp vụ và giao diện người dùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khả năng mở rộng`}),`: Dễ dàng thêm các tính năng mới nhờ cấu trúc mô-đun và mô hình Messenger.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/figma`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};