import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/styles/color/# Sử dụng Palette`}),`
`,(0,c.jsx)(n.h1,{id:`sử-dụng-bảng-màu-palette`,children:`Sử dụng Bảng màu (Palette)`}),`
`,(0,c.jsxs)(n.p,{children:[`Các mixin Palette là vũ khí trọng tâm để làm việc với các hệ màu sắc ngữ nghĩa và màu hệ thống trong DxtUI. Mục tiêu tối thượng của chúng là `,(0,c.jsx)(n.strong,{children:`tự động hóa khả năng định tuyến chuỗi Biến CSS (CSS variable routing)`}),`. Vai trò cung cấp khả năng hoán đổi theme giao diện màu sắc của component ngay tức thì mà không hề làm phá vỡ đi tỷ lệ tương phản sắc độ ban đầu.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Khi xây dựng component thuộc hệ thống thiết kế này, thay vì gọi hàm CSS thụ động `,(0,c.jsx)(n.code,{children:`backgroundColor()`}),` thông thường, bạn mang vào trong SCSS Mixin dòng định dạng gốc thuộc họ Palette:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-button {
  // Áp dụng gán màu 'primary' của hệ thống
  @include styles.paletteBackgroundColor('--d1-sys-palette-primary');
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sức mạnh của tiền tố mixin hệ `,(0,c.jsx)(n.code,{children:`palette`}),` là để cấp chứng chỉ bảo hiểm cho việc Component này sẽ biết tự động điều hướng màu sắc theo mọi can thiệp ngoại vi - điển hình như khi bạn gán class đổi bảng màu tổng từ cấu trúc Xanh Blue sang Vàng Yellow trên một div ở ngoài.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-mixin-palette-thường-trực`,children:`Các Mixin Palette Thường trực`}),`
`,(0,c.jsxs)(n.p,{children:[`Bên dưới là danh mục các hàm Mixin trung tâm có chung cấu trúc nguyên lý vận hành giống hệt nhau. Lệnh sẽ thu nạp tham số duy nhất là `,(0,c.jsx)(n.strong,{children:`một chuỗi ký tự diễn tả đích danh Biến Hệ thống CSS`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteColor()`}),` — Kéo mã màu vào Text dòng chữ (`,(0,c.jsx)(n.code,{children:`color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteBackgroundColor()`}),` — Trát màu vào khối phông Nền (`,(0,c.jsx)(n.code,{children:`background-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteBorderColor()`}),` — Trát màu vào Đường viền khung (`,(0,c.jsx)(n.code,{children:`border-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteOutlineColor()`}),` — Trát màu viền khung highlight báo nét (`,(0,c.jsx)(n.code,{children:`outline-color`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteFill()`}),` — Đổ màu kín vector lõi SVG (`,(0,c.jsx)(n.code,{children:`fill`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paletteStroke()`}),` — Viền chỉ dệt đường theo vector SVG dẻo (`,(0,c.jsx)(n.code,{children:`stroke`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`ví-dụ-mixin-gọi-hội-đồng`,children:`Ví dụ Mixin gọi hội đồng:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card-alert {
  // Nét chữ hấp thụ gam màu 'cảnh báo Lỗi' từ hệ thống
  @include styles.paletteColor('--d1-sys-palette-error');
  
  // Khối nền tảng lót đáy thụ hưởng màu mặt phẳng (Surface)
  @include styles.paletteBackgroundColor('--d1-sys-palette-surface');
  
  // Viền biên tự nhận màu khung chìm tự nhiên
  @include styles.paletteBorderColor('--d1-sys-palette-outline');
}
`})}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`luồng-giao-thông-chạy-ngầm-bằng-cách-nào-cơ-chế-rooting`,children:`Luồng Giao thông Chạy Ngầm Bằng Cách Nào? (Cơ Chế Rooting)`}),`
`,(0,c.jsxs)(n.p,{children:[`Để thông được não khi áp dụng mixin `,(0,c.jsx)(n.code,{children:`palette`}),` trong ứng dụng của mình, bạn bắt buộc cần theo dõi cách SCSS compiler đọc mảng chữ chuỗi (string) như một cỗ máy thông minh ở phần biên dịch Code ra sao. Kiến trúc được gọt giũa tỉ mỉ có nghĩa bạn tuyệt đối không phải hì hục cắm đầu gõ thêm cả thúng code CSS để Override bắt giao diện chuyển bóng.`]}),`
`,(0,c.jsx)(n.h3,{id:`bước-1-khai-báo-biến-hệ-thống-và-trị-số-trọng-lực-sángtối-shade-weights`,children:`Bước 1: Khai báo Biến Hệ thống và Trị số Trọng lực Sáng/Tối (Shade Weights)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tiền đề, cuốn sổ config (`,(0,c.jsx)(n.code,{children:`properties.scss`}),`) tuyên bố các Cụm từ ngữ nghĩa (như `,(0,c.jsx)(n.code,{children:`primary`}),`) ứng với một Trị số Đo lường độ Tương phản chuẩn xác giữa màn sáng/tối.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Ví dụ, ngữ nghĩa mã `,(0,c.jsx)(n.code,{children:`primary`}),` của ánh sáng trắng mặc định bám rễ vĩnh viễn ở cấp cường độ `,(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`600`})}),`. Do chưa đổi màu mới, cấp cường độ này đương nhiên đổ bóng sang màu Xanh Lam Basic (`,(0,c.jsx)(n.code,{children:`--d1-ref-palette-blue-600`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`bước-2-build-hàm-trình-biên-dịch`,children:`Bước 2: Build Hàm Trình Biên Dịch`}),`
`,(0,c.jsxs)(n.p,{children:[`Đúng khoảnh khắc bạn nhập lệnh gõ `,(0,c.jsx)(n.code,{children:`paletteBackgroundColor('--d1-sys-palette-primary')`}),`, trạm gác SCSS preprocessor chẹn đứng chuỗi String này để móc ra chiếu với Danh bạ nội quy.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Thay vì trả ra luôn luôn mã HEX màu Xanh Lam trơ trụi. Nó vặn vẹo dòng biến xuất ra `,(0,c.jsx)(n.strong,{children:`một cụm mã chuỗi CSS biến Fallback tầng tầng lớp lớp`}),`. Lòng cốt để Móc lốp nối cứng cường độ background của mảng đó luôn phải chĩa chính diện về chốt cường tráng `,(0,c.jsx)(n.code,{children:`600`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`/* Tóm gọn lại cho bạn dễ hình dung đoạn code cuối cùng sau compiler: */
background-color: var(--d1-palette-basic600, var(--d1-sys-palette-primary));
`})}),`
`,(0,c.jsx)(n.h3,{id:`bước-3-đánh-chặn-bẻ-lái-ngay-trong-html-dom-override`,children:`Bước 3: Đánh Chặn Bẻ Lái ngay trong HTML (DOM Override)`}),`
`,(0,c.jsx)(n.p,{children:`Thử hình dung đoạn Button bọc trên được lọt gọn vào một mảng DOM Container to đùng treo nhãn báo bảng MÀU VÀNG:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<div class="d1-palette--yellow">
  <button class="my-button">Nhấn Vô</button>
</div>
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chính cái bộ Thẻ Class `,(0,c.jsx)(n.code,{children:`.d1-palette--yellow`}),` sinh ra để vặn nọc cục biến cơ sở bơ vơ mang tên `,(0,c.jsx)(n.code,{children:`--d1-palette-basic600`}),`. Giờ phút này, `,(0,c.jsx)(n.code,{children:`basic600`}),` chệch bánh ray, chạy vào tông Vàng cấp độ `,(0,c.jsx)(n.code,{children:`600`}),` (`,(0,c.jsx)(n.code,{children:`--d1-ref-palette-yellow-600`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Chỉ nhờ cái phím còi mà cục Component đã tự quấn thân với đầu trỏ lưới liên lạc `,(0,c.jsx)(n.code,{children:`basic600`}),` thông qua dòng Mixin gốc, nền Button lập tức bơi ngay trong sắc Vàng Hoàng Gia Yellow-600.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Đẳng Cấp Của Hệ Thống:`}),`
Cường độ Màu (Shade) ghim chặt ở neo cấp `,(0,c.jsx)(n.code,{children:`600`}),`. Ngụ ý rằng bài toán mâu thuẫn Trắng-Vàng, Trắng-Xanh lam không hề bị méo hay chói mắt, khoảng trống độ Tương phải của màu đã được máy toán tự thân khắc chế cân xứng tuyệt phẩm tinh tế mọi góc độ. Coder thảnh thơi nhàn nhã tay mà không cần viết lệnh củ chuối đại loại như `,(0,c.jsx)(n.code,{children:`.d1-palette--yellow .my-button { ... }`}),` bẻ màu thủ công rườm rà - Vì đã có Auto Routing chèo lái con tàu DxtUI.`]}),`
`,(0,c.jsx)(n.h2,{id:`sự-khác-biệt-giữa-mixin-cơ-bản-và-palette`,children:`Sự khác biệt giữa Mixin cơ bản và Palette`}),`
`,(0,c.jsx)(n.p,{children:`Điều quan trọng là phải hiểu sự khác biệt cơ bản trong logic của chúng:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`Mixin cơ bản (`,(0,c.jsx)(n.code,{children:`backgroundColor`}),`, `,(0,c.jsx)(n.code,{children:`color`}),`, v.v.)`]}),`
Chúng chấp nhận một `,(0,c.jsx)(n.strong,{children:`giá trị cụ thể`}),` (HEX, RGB hoặc kết quả của hàm `,(0,c.jsx)(n.code,{children:`getColor`}),`). Các mixin này thiết lập màu "nguyên trạng". Mặc dù chúng hỗ trợ độ mờ hệ thống, bản thân màu sắc vẫn ở trạng thái tĩnh. Nếu bạn truyền màu xanh lam qua `,(0,c.jsx)(n.code,{children:`getColor ('primary')`}),`, nó sẽ vẫn là màu xanh lam ngay cả khi bạn thêm lớp bảng màu vàng vào thẻ cha.`]}),`
`]}),`
`,(0,c.jsxs)(n.li,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsxs)(n.strong,{children:[`Mixin Palette (`,(0,c.jsx)(n.code,{children:`paletteBackgroundColor`}),`, `,(0,c.jsx)(n.code,{children:`paletteColor`}),`, v.v.)`]}),`
Chúng chấp nhận một `,(0,c.jsx)(n.strong,{children:`khóa chuỗi`}),` (tên của biến hệ thống, ví dụ: `,(0,c.jsx)(n.code,{children:`'--d1-sys-palette-primary'`}),`). Các mixin này không thiết lập màu trực tiếp; thay vào đó, chúng tạo ra một `,(0,c.jsx)(n.strong,{children:`lộ trình động`}),` tới các biến bảng màu (cấp độ `,(0,c.jsx)(n.code,{children:`basic`}),`). Đây chính xác là những gì cho phép thành phần ngay lập tức "tự đổi màu" khi lớp bảng màu được thay đổi trong DOM, trong khi vẫn duy trì mức độ tương phản cần thiết.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};