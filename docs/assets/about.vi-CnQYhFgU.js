import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/constructor/# Giới thiệu`}),`
`,(0,c.jsx)(t.h1,{id:`giới-thiệu-về-thư-viện`,children:`Giới thiệu về thư viện`}),`
`,(0,c.jsxs)(t.p,{children:[`Gói `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`})}),` là lõi logic và động cơ công nghệ của hệ thống thiết kế, cung cấp hơn 110 constructor thành phần có sẵn cho Vue 3 và TypeScript.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Thư viện được xây dựng theo kiến trúc `,(0,c.jsx)(t.strong,{children:`Headless UI`}),`: toàn bộ logic nghiệp vụ, quản lý trạng thái phản hồi, xử lý sự kiện, khả năng tiếp cận (WAI-ARIA) và điều hướng bàn phím đều được đóng gói độc lập bên trong các lớp constructor, hoàn toàn tách biệt khỏi kiểu dáng trực quan.`]}),`
`,(0,c.jsx)(t.h2,{id:`kiến-trúc-tương-tác-với-hệ-thống-thiết-kế`,children:`Kiến trúc tương tác với hệ thống thiết kế`}),`
`,(0,c.jsxs)(t.p,{children:[`Gói `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),` đóng vai trò là nền tảng cốt lõi để tạo ra các thư viện thành phần hoàn chỉnh (như `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`┌─────────────────────────────────────────────────────────────────────────┐
│                 1. Động cơ logic (@dxtmisha/constructor)                │
│  • 110+ lớp trừu tượng (Button, Modal, Input, Table, Select...)         │
│  • Khả năng tiếp cận WAI-ARIA, điều hướng bàn phím & Focus Trap         │
│  • Trạng thái phản hồi (:focus, :active, :hover, loading, disabled)     │
│  • Quản lý nhập dữ liệu, xác thực và mặt nạ nhập liệu                   │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                   2. Công cụ hỗ trợ (@dxtmisha/scripts)                 │
│  • Trình tạo dxt-ui: liên kết constructor với các design token          │
│  • Tự động tạo props.ts, styleToken.scss và xuất bản module             │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│               3. Hệ thống thiết kế (Ví dụ từ @dxtmisha/d1)              │
│  • Cấu hình design token trong src/media/ (màu sắc, phông chữ, lưới)    │
│  • Thành phần D1*.vue: sử dụng constructor và các lớp BEM               │
│  • Định kiểu SCSS: áp dụng token qua mixin của @dxtmisha/styles         │
└─────────────────────────────────────────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-cốt-lõi-khi-sử-dụng-constructor`,children:`Ưu điểm cốt lõi khi sử dụng Constructor`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khả năng mở rộng Đa thiết kế (Multi-Design)`}),`: Trên cùng một lõi Constructor, bạn có thể phát triển song song nhiều bộ UI kit khác nhau (như `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, chủ đề doanh nghiệp, giao diện di động). Việc tạo thiết kế mới không cần viết lại logic cho hơn 110 thành phần — chỉ cần định nghĩa token và mã mẫu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điểm sửa lỗi tập trung (Single Point of Fix)`}),`: Mọi bản vá lỗi (giữ tiêu điểm, lỗi trên trình duyệt di động iOS/Android, phím tắt hoặc mặt nạ nhập liệu) chỉ cần sửa một lần tại lõi Constructor và tự động cập nhật đến tất cả các hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiến hóa an toàn không lỗi hồi quy (Zero Regression)`}),`: Bổ sung tính năng mới vào Constructor giúp mở rộng khả năng của toàn bộ UI kit mà không làm hỏng giao diện. Ngược lại, việc tái thiết kế kiểu dáng hoặc đổi token không thể làm hỏng logic hành vi bên dưới (a11y, modal, xác thực).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đảm bảo khả năng tiếp cận (a11y)`}),`: Mỗi constructor đều tuân thủ đầy đủ chuẩn WAI-ARIA ngay khi khởi tạo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiết kiệm chi phí bảo trì (TCO)`}),`: Logic nghiệp vụ chỉ cần kiểm thử một lần ở cấp độ Constructor. Việc kiểm thử UI kit chỉ tập trung vào giao diện và token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mã nguồn tinh gọn và phát triển thần tốc`}),`: Loại bỏ hoàn toàn mã lặp và các hàm xử lý sự kiện phức tạp — thành phần mới được tạo nhanh chóng chỉ bằng việc kết nối lớp constructor có sẵn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng--khả-năng-của-dxtmishaconstructor`,children:`Các tính năng & Khả năng của @dxtmisha/constructor`}),`
`,(0,c.jsx)(t.p,{children:`Constructor đáp ứng mọi yêu cầu cốt lõi của quá trình phát triển frontend hiện đại:`}),`
`,(0,c.jsx)(t.h3,{id:`1-biểu-mẫu-và-nhập-dữ-liệu`,children:`1. Biểu mẫu và Nhập dữ liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trường văn bản và Mặt nạ`}),`: `,(0,c.jsx)(t.code,{children:`Input`}),`, `,(0,c.jsx)(t.code,{children:`InputPhone`}),` (với mã quốc gia quốc tế và tự động định dạng), `,(0,c.jsx)(t.code,{children:`InputCode`}),` (xác thực SMS/2FA), `,(0,c.jsx)(t.code,{children:`InputImage`}),` và `,(0,c.jsx)(t.code,{children:`ImageCrop`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thành phần lựa chọn`}),`: `,(0,c.jsx)(t.code,{children:`Checkbox`}),`, `,(0,c.jsx)(t.code,{children:`Radio`}),`, `,(0,c.jsx)(t.code,{children:`Switch`}),`, `,(0,c.jsx)(t.code,{children:`SegmentControl`}),`, `,(0,c.jsx)(t.code,{children:`Chip`}),`, `,(0,c.jsx)(t.code,{children:`ChipGroup`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hộp chọn và Menu thả xuống`}),`: `,(0,c.jsx)(t.code,{children:`Select`}),`, `,(0,c.jsx)(t.code,{children:`SelectValue`}),`, `,(0,c.jsx)(t.code,{children:`SelectableArea`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiện ích biểu mẫu`}),`: Bộ đếm ký tự tự động (`,(0,c.jsx)(t.code,{children:`FieldCounter`}),`), thông báo xác thực (`,(0,c.jsx)(t.code,{children:`FieldMessage`}),`), nhãn thích ứng (`,(0,c.jsx)(t.code,{children:`FieldLabel`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-lớp-phủ-hộp-thoại-và-cửa-sổ-nổi`,children:`2. Lớp phủ, Hộp thoại và Cửa sổ nổi`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giao diện Modal`}),`: `,(0,c.jsx)(t.code,{children:`Modal`}),`, `,(0,c.jsx)(t.code,{children:`Dialog`}),`, `,(0,c.jsx)(t.code,{children:`Window`}),`, `,(0,c.jsx)(t.code,{children:`ActionSheet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cửa sổ nổi & Menu`}),`: `,(0,c.jsx)(t.code,{children:`Tooltip`}),`, `,(0,c.jsx)(t.code,{children:`Menu`}),`, `,(0,c.jsx)(t.code,{children:`MenuButton`}),`, `,(0,c.jsx)(t.code,{children:`MenuCountry`}),`, `,(0,c.jsx)(t.code,{children:`MenuLanguage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thông báo nổi`}),`: `,(0,c.jsx)(t.code,{children:`Snackbar`}),`, `,(0,c.jsx)(t.code,{children:`SnackbarItem`}),` với hệ thống quản lý hàng đợi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cơ chế lớp phủ tích hợp`}),`: Tự động giữ tiêu điểm (Focus Trap), khóa cuộn trang nền khi mở, đóng bằng phím `,(0,c.jsx)(t.code,{children:`Escape`}),` và bấm ra ngoài (Click Outside), định vị theo điểm neo (`,(0,c.jsx)(t.code,{children:`Anchor`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-điều-hướng-và-danh-sách`,children:`3. Điều hướng và Danh sách`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu trúc điều hướng`}),`: `,(0,c.jsx)(t.code,{children:`NavigationRail`}),`, `,(0,c.jsx)(t.code,{children:`Tabs`}),`, `,(0,c.jsx)(t.code,{children:`TabsNavigation`}),`, `,(0,c.jsx)(t.code,{children:`Breadcrumbs`}),`, `,(0,c.jsx)(t.code,{children:`Pagination`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Danh sách và Khối xếp gọn`}),`: `,(0,c.jsx)(t.code,{children:`Accordion`}),`, `,(0,c.jsx)(t.code,{children:`List`}),`, `,(0,c.jsx)(t.code,{children:`ListMenu`}),`, `,(0,c.jsx)(t.code,{children:`ListGroup`}),`, `,(0,c.jsx)(t.code,{children:`ListItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`4-hiển-thị-dữ-liệu-và-nội-dung`,children:`4. Hiển thị dữ liệu và Nội dung`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảng dữ liệu`}),`: `,(0,c.jsx)(t.code,{children:`Table`}),`, `,(0,c.jsx)(t.code,{children:`TableFlex`}),`, `,(0,c.jsx)(t.code,{children:`TableHeaderItem`}),`, `,(0,c.jsx)(t.code,{children:`TableRecord`}),` (hỗ trợ sắp xếp, chọn hàng, cột thích ứng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chỉ báo và Khung chờ`}),`: `,(0,c.jsx)(t.code,{children:`Skeleton`}),`, `,(0,c.jsx)(t.code,{children:`Progress`}),`, `,(0,c.jsx)(t.code,{children:`ProgressBar`}),`, `,(0,c.jsx)(t.code,{children:`Badge`}),`, `,(0,c.jsx)(t.code,{children:`Avatar`}),`, `,(0,c.jsx)(t.code,{children:`Bullet`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng dữ liệu`}),`: `,(0,c.jsx)(t.code,{children:`FormattedNumber`}),`, `,(0,c.jsx)(t.code,{children:`FormattedUnit`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-hoạt-ảnh-cuộn-trang-và-tương-tác`,children:`5. Hoạt ảnh, Cuộn trang và Tương tác`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý cuộn`}),`: `,(0,c.jsx)(t.code,{children:`Headroom`}),`, `,(0,c.jsx)(t.code,{children:`ScrollSticky`}),`, `,(0,c.jsx)(t.code,{children:`HorizontalScroll`}),`, `,(0,c.jsx)(t.code,{children:`Scrollbar`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hoạt ảnh chuyển động`}),`: `,(0,c.jsx)(t.code,{children:`MotionAxis`}),`, `,(0,c.jsx)(t.code,{children:`MotionFlip`}),`, `,(0,c.jsx)(t.code,{children:`MotionTransform`}),`, `,(0,c.jsx)(t.code,{children:`MotionSticky`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hiệu ứng tương tác`}),`: `,(0,c.jsx)(t.code,{children:`Ripple`}),`, `,(0,c.jsx)(t.code,{children:`DraggableWrapper`}),`, `,(0,c.jsx)(t.code,{children:`Dropzone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-gói-hỗ-trợ-trong-hệ-sinh-thái`,children:`Các gói hỗ trợ trong hệ sinh thái`}),`
`,(0,c.jsx)(t.p,{children:`Để hỗ trợ quy trình làm việc với constructor, hệ sinh thái cung cấp các gói chuyên biệt:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/styles`})}),` — Khung SCSS với kiến trúc token, độ mờ 2 tầng, mixin đáp ứng và bảng màu động (`,(0,c.jsx)(t.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(t.code,{children:`paletteColor`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/functional`})}),` — Các composable cho Vue 3 Composition API, cách ly SSR (`,(0,c.jsx)(t.code,{children:`ServerStorage`}),`), quốc tế hóa (i18n) và trình quản lý biểu tượng vector (`,(0,c.jsx)(t.code,{children:`Icons`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`})}),` — Công cụ CLI để scaffolding thành phần (`,(0,c.jsx)(t.code,{children:`dxt-ui`}),`), đóng gói thư viện (`,(0,c.jsx)(t.code,{children:`dxt-library`}),`) và tạo tài liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kho-lưu-trữ-dự-án`,children:`Kho lưu trữ dự án`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};