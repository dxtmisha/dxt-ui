import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/# Hệ thống thiết kế (Design System)`}),`
`,(0,c.jsx)(n.h1,{id:`làm-việc-với-hệ-thống-thiết-kế`,children:`Làm việc với Hệ thống thiết kế`}),`
`,(0,c.jsxs)(n.p,{children:[`Package `,(0,c.jsx)(n.code,{children:`@dxtmisha/scripts`}),` là một công cụ mạnh mẽ và là "bộ não" tự động hóa của toàn bộ hệ thống thiết kế `,(0,c.jsx)(n.strong,{children:`DXT UI`}),`. Đây là một tập hợp các tiện ích và lệnh CLI, đảm nhận công việc lặp đi lặp lại của việc tạo mới, liên kết, kiểm thử và viết tài liệu cho các component.`]}),`
`,(0,c.jsx)(n.p,{children:`Mục tiêu chính của package này là cung cấp cho các nhà phát triển và bộ phận kinh doanh một quy trình phát triển UI kit thống nhất, tự động hóa, nơi yếu tố con người và các lỗi khi viết mã chuẩn (boilerplate) được giảm xuống mức 0.`}),`
`,(0,c.jsxs)(n.p,{children:[`Giá trị đặc biệt của package này nằm ở vai trò là `,(0,c.jsx)(n.strong,{children:`cầu nối giữa logic nghiệp vụ trừu tượng và thiết kế hình ảnh`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`phân-tách-giữa-logic-và-thiết-kế`,children:`Phân tách giữa Logic và Thiết kế`}),`
`,(0,c.jsx)(n.p,{children:`Kiến trúc của DXT UI được xây dựng dựa trên sự phân tách nghiêm ngặt:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logic trừu tượng (Constructor)`}),` — các lớp độc lập quản lý thuộc tính ARIA, sự kiện, focus và trạng thái, nhưng không biết gì về màu sắc, kích thước hoặc CSS class.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thiết kế hình ảnh (Visual Design)`}),` — sự triển khai cụ thể (tokens, khoảng cách, bảng màu).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Package `,(0,c.jsx)(n.code,{children:`scripts`}),` đảm nhận nhiệm vụ tự động và "khâu" hai thế giới này lại với nhau một cách hoàn hảo.`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-thức-hoạt-động`,children:`Cách thức hoạt động:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` là Nguồn chân lý duy nhất (Single Source of Truth):`]}),`
Nhà phát triển hoặc nhà thiết kế chỉ mô tả các thuộc tính hình ảnh của component (tokens, màu sắc, kích thước, trạng thái `,(0,c.jsx)(n.code,{children:`:hover`}),`/`,(0,c.jsx)(n.code,{children:`:active`}),`, modifiers) trong một file cấu hình duy nhất `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Phân tích và Tạo mã (Scaffolding):`}),`
Package `,(0,c.jsx)(n.code,{children:`scripts`}),` đọc file cấu hình này và tự động tạo ra toàn bộ cơ sở hạ tầng liên kết:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — TypeScript interface mở rộng các thuộc tính cơ bản từ Constructor, thêm các kiểu dữ liệu chính xác cho thiết kế (ví dụ: `,(0,c.jsx)(n.code,{children:`size: 'sm' | 'md'`}),`) và giá trị mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — các mixin SCSS có sẵn và biến CSS (design tokens).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DesignComponent.vue`}),` — Vue template nơi điều kỳ diệu xảy ra: script tạo ra các BEM class được tính toán dựa trên các thuộc tính và truyền chúng vào lớp `,(0,c.jsx)(n.code,{children:`Design`}),` trừu tượng từ Constructor (tiêm phụ thuộc - dependency injection).`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`Điều phối Kiểu dữ liệu (`,(0,c.jsx)(n.code,{children:`dxt-constructor`}),`):`]}),`
Việc thêm một thuộc tính mới vào `,(0,c.jsx)(n.code,{children:`properties.json`}),` sẽ tự động cập nhật các interface toàn cục của dự án. IDE ngay lập tức bắt đầu gợi ý mã cho các thuộc tính mới khi sử dụng component (ví dụ: qua `,(0,c.jsx)(n.code,{children:`web-types.json`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Tạo tài liệu bằng AI (AI-Docs):`}),`
Tích hợp với trí tuệ nhân tạo (Google Gemini / Anthropic Claude) cho phép package tự động tạo tài liệu tham khảo, mô tả prop và các ví dụ mã nguồn trực tiếp dựa trên `,(0,c.jsx)(n.code,{children:`properties.json`}),` và TypeScript.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`lợi-ích-mang-lại-cho-kinh-doanh-và-nhóm-phát-triển-là-gì`,children:`Lợi ích mang lại cho kinh doanh và nhóm phát triển là gì?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tốc độ phát triển cao:`}),` Trọng tâm chuyển từ việc viết mã boilerplate sang việc tạo ra sản phẩm thực tế. Việc tạo một component hoặc modifier mới chỉ mất vài giây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đảm bảo tính nhất quán:`}),` Loại bỏ các trường hợp quên export, lỗi đánh máy trong tên CSS class hoặc sai lệch giữa TypeScript và SCSS. Logic (ví dụ: khả năng truy cập ARIA) luôn hoạt động hoàn hảo vì nó được kế thừa từ Constructor, trong khi phần hình ảnh khớp 100% với các token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dễ dàng bảo trì và mở rộng:`}),` Để thay đổi logic tạo CSS class hoặc cấu trúc thư mục trong toàn bộ thư viện, bạn chỉ cần sửa đổi logic của package `,(0,c.jsx)(n.code,{children:`scripts`}),`, sau đó toàn bộ thư viện UI sẽ được biên dịch lại chỉ bằng một lệnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp với Thiết kế (Figma):`}),` Các Figma API client tích hợp sẵn cho phép trích xuất cấu trúc frame, design token và styles trực tiếp từ bản thiết kế, tự động chuyển đổi chúng thành mã nguồn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-lệnh-chính-cli`,children:`Các lệnh chính (CLI)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-ui [ComponentName]`})}),`
Bộ điều phối chính. Quét các file `,(0,c.jsx)(n.code,{children:`properties.json`}),`, tạo ra template, "khâu" chúng với các lớp Constructor, và cập nhật props cũng như styles.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-constructor`})}),`
Biên dịch lại các class và kiểu dữ liệu toàn cục của logic constructor, đảm bảo tất cả các kiểu thuộc tính luôn được cập nhật.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-component-wiki`})}),` / `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-wiki-storm`})}),`
Khởi chạy việc tạo tài liệu component bằng AI cho Storybook/MDX và định dạng dữ liệu cho tự động hoàn thành trong IDE (WebStorm).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-library`})}),`
Quét cây thư mục và tự động tạo các file export `,(0,c.jsx)(n.code,{children:`index.ts`}),` trong tất cả các package của không gian làm việc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`dxt-screenshot`})}),`
Môi trường kiểm thử hồi quy trực quan sử dụng Puppeteer.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tích-hợp-sâu-các-styles-và-design-tokens`,children:`Tích hợp sâu các styles và design tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`Mô-đun phân tích cú pháp design token (các lớp `,(0,c.jsx)(n.code,{children:`Properties*`}),`) là trái tim của bộ tạo mã. Script nhận diện nhiều loại thuộc tính từ JSON:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`type-var`}),` / `,(0,c.jsx)(n.code,{children:`flag-var`})]}),`: Các thuộc tính được biên dịch trực tiếp thành các biến CSS (quản lý padding động, border-radius).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`type-state`})}),`: Các trạng thái component trực quan động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`flag-theme`}),` / Bảng màu (Palettes)`]}),`: Quản lý màu sắc và hỗ trợ theme tối/sáng mà không cần nhân bản CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`flag-subclass`}),` / `,(0,c.jsx)(n.code,{children:`flag-replace`})]}),`: Quản lý CSS class thông minh bằng BEM, chỉ thêm các modifier class khi flag được kích hoạt.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống script tự động dịch tất cả các mối quan hệ này thành mã SCSS tối ưu và TypeScript nghiêm ngặt, tạo thành một cầu nối hoàn hảo giữa thiết kế trực quan và lõi logic của các component.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};