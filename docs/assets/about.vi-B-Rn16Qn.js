import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/! Giới thiệu`}),`
`,(0,c.jsx)(n.h1,{id:`dxtmishafunctional-basic`,children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional-basic`,rel:`nofollow`,children:`@dxtmisha/functional-basic`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`@dxtmisha/functional-basic`}),` là một tập hợp các hàm và lớp tiện ích nhỏ cho phát triển web hàng ngày. Thư viện không phụ thuộc vào framework và có thể sử dụng trong bất kỳ dự án TypeScript nào — từ Vue, React cho đến code trình duyệt thuần.`]}),`
`,(0,c.jsx)(n.h2,{id:`cài-đặt`,children:`Cài đặt`}),`
`,(0,c.jsx)(n.p,{children:`Để bắt đầu sử dụng thư viện trong dự án của bạn, hãy cài đặt qua npm:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm i @dxtmisha/functional-basic
`})}),`
`,(0,c.jsx)(n.h2,{id:`tại-sao-cần-thư-viện-này`,children:`Tại sao cần thư viện này?`}),`
`,(0,c.jsx)(n.p,{children:`Hầu hết các dự án web đều gặp các tác vụ tương tự nhau: yêu cầu API, xử lý ngày tháng, cookie hoặc trạng thái tải. Thay vì sao chép các hàm này giữa các dự án, chúng tôi tập hợp chúng lại ở đây để dễ dàng tái sử dụng.`}),`
`,(0,c.jsx)(n.p,{children:`Đây không phải là một framework phức tạp, mà chỉ là một tập hợp các công cụ đơn giản: bạn có thể chọn chỉ những gì cần thiết cho tác vụ cụ thể của mình.`}),`
`,(0,c.jsx)(n.h2,{id:`thư-viện-làm-được-gì`,children:`Thư viện làm được gì?`}),`
`,(0,c.jsx)(n.p,{children:`Thư viện hỗ trợ các tác vụ phổ biến trong quá trình phát triển:`}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`mạng`}),` — một HTTP client cơ bản hỗ trợ hook, bộ nhớ đệm và chỉ báo tải. Điều này cho phép bạn xử lý các yêu cầu mà không cần thêm các dependency bên ngoài nặng nề.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`bản địa hóa và địa lý`}),` — phát hiện quốc gia và ngôn ngữ người dùng, mã điện thoại, cờ quốc gia và định dạng dữ liệu qua API `,(0,c.jsx)(n.code,{children:`Intl`}),`. Nó cũng bao gồm các công cụ dịch thuật giao diện.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`quản lý trạng thái`}),` — các wrapper đơn giản cho `,(0,c.jsx)(n.code,{children:`localStorage`}),`, `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`, `,(0,c.jsx)(n.code,{children:`cookie`}),` và URL hash. Chúng giúp lưu trữ dữ liệu giữa các phiên làm việc với hỗ trợ của TypeScript.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`SEO`}),` — công cụ quản lý thẻ `,(0,c.jsx)(n.code,{children:`<title>`}),`, Open Graph và Twitter Card. Giúp cập nhật các thẻ meta trong cả môi trường trình duyệt và SSR.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`xử lý dữ liệu`}),` — các tiện ích để sao chép sâu đối tượng, xử lý mảng, chuyển đổi kiểu an toàn và định dạng chuỗi.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`tìm kiếm và lọc`}),` — các hàm để khớp văn bản và tìm kiếm dễ dàng qua các danh sách dữ liệu phức tạp.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`sự kiện và phát tin`}),` — các công cụ để giao tiếp giữa các thành phần hoặc các tab trình duyệt (qua `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về `,(0,c.jsx)(n.strong,{children:`DOM và UI`}),` — các hàm helper để làm việc với phần tử, thuộc tính, hình ảnh, clipboard và cuộn trang.`]}),`
`,(0,c.jsx)(n.h2,{id:`dành-cho-ai`,children:`Dành cho ai?`}),`
`,(0,c.jsx)(n.p,{children:`Thư viện dành cho các nhà phát triển muốn sử dụng các giải pháp phổ biến cho các tác vụ đơn giản thay vì phải viết lại từ đầu mỗi lần. Nó hoạt động tốt cho cả các script nhỏ và các ứng dụng lớn hơn.`}),`
`,(0,c.jsxs)(n.p,{children:[`Mặc dù là một phần của hệ sinh thái `,(0,c.jsx)(n.code,{children:`@dxtmisha`}),`, nó có thể được sử dụng độc lập trong bất kỳ dự án nào.`]}),`
`,(0,c.jsx)(n.h2,{id:`nguyên-tắc`,children:`Nguyên tắc`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối giản`}),` — thư viện không sử dụng dependency bên ngoài, giúp việc bảo trì dễ dàng hơn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ TypeScript`}),` — tất cả các công cụ đều được định nghĩa kiểu dữ liệu để cải thiện trải nghiệm lập trình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`API rõ ràng`}),` — tên phương thức và hành vi của chúng được thiết kế để dễ dự đoán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Được kiểm thử`}),` — các chức năng chính được kiểm thử đầy đủ để đảm bảo tính ổn định cơ bản.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional-basic`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional-basic`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};