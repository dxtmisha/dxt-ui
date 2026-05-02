import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/# Kiểu`}),`
`,(0,c.jsx)(n.h1,{id:`kiểu-_type`,children:`Kiểu (_type)`}),`
`,(0,c.jsxs)(n.p,{children:[`Cờ `,(0,c.jsx)(n.code,{children:`_type`}),` là một tham số siêu dữ liệu (meta-parameter) cốt lõi định nghĩa mô hình xử lý kiến trúc của một node. Nó chỉ lệnh cho Engine biên dịch cách ứng xử với node hiện hành (đóng vai trò là chuỗi CSS biến variable, media query, pseudo-element, hay trạng thái BEM...). Việc xác định chuẩn xác type là nhân tố quan trọng để thiết lập mã nguồn SCSS-mixins hay TypeScript interfaces an toàn.`]}),`
`,(0,c.jsx)(n.h2,{id:`hành-vi-mặc-định--trình-tự-động-nhận-diện`,children:`Hành vi Mặc định & Trình Tự động nhận diện`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi tham số `,(0,c.jsx)(n.code,{children:`_type`}),` không được gán, hệ thống sẽ tự động kích hoạt tiến trình rà soát logic ngầm định (Automatcher):`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bóc tách Prefix:`}),` Engine quét tên khóa (key) để tìm kiếm các Alias (ký hiệu tắt) hoặc cấu trúc chỉ định loại cú pháp `,(0,c.jsx)(n.code,{children:`[type]|[tên_thuộc_tính]`}),`. Khi nhận diện trùng khớp, node sẽ được cài đặt tự động giá trị type tương ứng vào thuộc tính ẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sự kiện Bị Bypass (Pass-through):`}),` Cụm node nào không kèm ký hiệu định danh, giá trị tham số `,(0,c.jsx)(n.code,{children:`_type`}),` của nó được thiết lập tại mức `,(0,c.jsx)(n.code,{children:`undefined`}),`. Chúng được máy TypeScript miễn trừ xử lý cấu trúc và được bảo lưu cấu hình lọt xuyên luồng nhúng thành CSS "key-value" Properties thô đơn giản dưới nền tảng cấu hình mảng Data SCSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`mảng-thông-số-types-propertytype`,children:`Mảng Thông Số Types (PropertyType)`}),`
`,(0,c.jsxs)(n.p,{children:[`Hệ thống cung cấp sẵn một chuỗi phân bộ loại thiết lập (`,(0,c.jsx)(n.code,{children:`_type`}),`) bao quát toàn diện các điểm rơi biên dịch SCSS/TS:`]}),`
`,(0,c.jsx)(n.h3,{id:`thuộc-tính-cơ-sở--biến-số`,children:`Thuộc tính Cơ Sở & Biến số`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property`}),` — Định danh tham số sẽ sinh ra là một thuộc tính vật lý CSS thông thường.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`var`}),` — Cưỡng chế node phải được dịch mã chuyên biệt thành cụm biến CSS (Custom Variable).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`khung-cấu-trúc-node`,children:`Khung Cấu trúc Node`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`design`}),` — Đặt tên hệ thống thiết kế cho khối dự án (nằm tại cấp độ cấu hình khung đầu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`component`}),` — Xác định tên gốc rễ của Component UI để làm khung sinh đối tượng mảng cây SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`class`}),` — Gán áp đặt cứng một cụm tên class CSS tùy biến dành riêng cho Node đang được trỏ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`theme`}),` — Quyết định phần nhánh cây properties đảm đương vai trò biên dịch ra nhóm Classes riêng của Theme hiện hành.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phân-mảng-thành-phần--modifiers-bem`,children:`Phân mảng Thành phần & Modifiers (BEM)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subclass`}),` — Đại diện cho phân vùng Class con cấp dưới (BEM element) bọc lồng tịnh tiến vào trong Block chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`state`}),` — Xác định các biến thể và trạng thái phụ của phần tử (như các BEM modifiers).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`virtual`}),` — Gọi tên khai báo kết xuất chuẩn ra cấp độ Pseudo-element ảo (`,(0,c.jsx)(n.code,{children:`::before`}),`, `,(0,c.jsx)(n.code,{children:`::after`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selector`}),` — Định nghĩa các thuộc tính con và pseudo-class của phần tử (ví dụ: `,(0,c.jsx)(n.code,{children:`:hover`}),`, `,(0,c.jsx)(n.code,{children:`:focus`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`responsive--container-quy-mô`,children:`Responsive & Container Quy mô`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`media`}),` / `,(0,c.jsx)(n.code,{children:`media-max`}),` — Ràng buộc đóng khung chỉ số cấu hình CSS bọc ngay bên trong câu truy vấn `,(0,c.jsx)(n.code,{children:`@media`}),` màn hình (theo viền min-width / max-width).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`media-group`}),` / `,(0,c.jsx)(n.code,{children:`media-max-group`}),` — Group logic túm gom quy nạp hệ số dữ liệu quy mô lớn trải qua các truy vấn Media queries.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`container`}),` / `,(0,c.jsx)(n.code,{children:`container-max`}),`... — Tính năng tái thiết giao diện tương đương nhóm Media, nhưng quy chiếu theo mảng theo dõi thuộc tính khung `,(0,c.jsx)(n.code,{children:`@container`}),` gốc.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lập-đồ-animation`,children:`Lập đồ Animation`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`animate`}),` — Gọi lệnh biên dịch trỏ node làm gốc cài quy chuẩn hệ thuộc tính CSS Animation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`animate-frame`}),` — Đặc định node thiết lập khung frame nhỏ cấu trúc cho bảng thông báo khung bên trong lõi `,(0,c.jsx)(n.code,{children:`@keyframes`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xử-lý-logic--link-kế-thừa`,children:`Xử lý Logic & Link kế thừa`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`link`}),` — Gắn chỉ thị bóc tách dữ liệu và hợp nhất sao chép toàn bộ Properties nhắm mốc từ một element/node ngầm định khác.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`link-class`}),` — Ràng buộc đường truyền móc nối element khác nhắm vào việc duy nhất để mượn vay tên CSS Class của bên đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`file`}),` — Chèn địa chỉ nhúng tham kiến cấu trúc từ một file gốc Properties `,(0,c.jsx)(n.code,{children:`.json`}),` ngoại lai để hợp nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mixin`}),` — Đi kèm vai trò block hỗ trợ dùng một lần (mixin module). Tham số sẽ không lọt cửa biên dịch vào nội lực CSS vật lý xuất ra sau cùng.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`scss-thâm-nhập--exclusions`,children:`SCSS Thâm nhập & Exclusions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`scss`}),` — Định danh khối node thuần gen mảng phục vụ trực tiếp thư viện code SCSS thuần trong cấu trúc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`root`}),` — Định vị bắt chuỗi node mang đặc quyền Global, phá vỡ mọi cấp lồng ngầm tự bốc hơi bay thẳng lên Root thông qua `,(0,c.jsx)(n.code,{children:`@at-root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`none`}),` — Phá bỏ toàn diện dữ liệu. Node bị đóng băng, cấm vĩnh viễn lọt vào tiến trình biên dịch file hệ thống output cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`other`}),` — Mã hệ thống không phân giải nội bộ, bắt theo quy trình chém file y như Type `,(0,c.jsx)(n.code,{children:`none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cú-pháp-rút-gọn-aliases`,children:`Cú pháp Rút Gọn (Aliases)`}),`
`,(0,c.jsxs)(n.p,{children:[`Nhằm triệt tiêu việc phải code lồng khối quá sâu hoặc trùng lặp rườm rà chuỗi khai báo `,(0,c.jsx)(n.code,{children:`{"_type": "..."}`}),` ở mỗi node, hệ thống cung cấp lối tắt cấu hình bằng cơ chế tiền tố khóa (prefix). Trình biên dịch sẽ tự động nhận diện tiền tố và gắn chuẩn `,(0,c.jsx)(n.code,{children:`_type`}),` tương ứng cho node.`]}),`
`,(0,c.jsx)(n.h3,{id:`1-phím-tắt-tiền-tố-ký-tự-symbols`,children:`1. Phím tắt Tiền tố Ký tự (SYMBOLS)`}),`
`,(0,c.jsx)(n.p,{children:`Các kiến trúc Type trọng yếu được gắn liền cùng khoá mật danh Symbol. Phép màu bắt đầu chỉ bằng cách đặt chốt ký tự này ở đầu Node String:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`var`}),`)`]}),` — Biến hệ thống (Ví dụ: `,(0,c.jsx)(n.code,{children:`"$border"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`subclass`}),`)`]}),` — Module Class con chuẩn BEM (Ví dụ: `,(0,c.jsx)(n.code,{children:`"#icon"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`~`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`state`}),`)`]}),` — Các biến thể và trạng thái phụ của phần tử (Ví dụ: `,(0,c.jsx)(n.code,{children:`"~primary"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`:`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`selector`}),`)`]}),` — Thuộc tính con và pseudo-class (Ví dụ: `,(0,c.jsx)(n.code,{children:`":hover"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`::`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`virtual`}),`)`]}),` — Phân hóa thực thể ảo Pseudo-element (Ví dụ: `,(0,c.jsx)(n.code,{children:`"::after"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`link`}),`)`]}),` — Liên kết vòng mạng dữ liệu nội tại hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`@@`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`link-class`}),`)`]}),` — Trỏ cấp độ kế thừa Class kiến trúc rễ lưới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`&`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`scss`}),`)`]}),` — Vòng quy chiếu bọc ghép mảng gốc SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`&&`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`root`}),`)`]}),` — Trích ly đóng khung nẩy khỏi mạng lồng tiến cấp về `,(0,c.jsx)(n.code,{children:`@at-root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`--`}),` `,(0,c.jsxs)(n.em,{children:[`(tương đương `,(0,c.jsx)(n.code,{children:`none`}),`)`]}),` — Khoá vô hiệu loại triệt để Node String tránh lọt vào chu trình Build compile mã CSS Output.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`2-cú-pháp-phân-cách-dọc-dạng-thanh-`,children:[`2. Cú pháp Phân cách Dọc dạng Thanh (`,(0,c.jsx)(n.code,{children:`|`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Với các cụm tính năng không đi kèm phím tắt cứng gán sẵn (như `,(0,c.jsx)(n.code,{children:`media`}),`, `,(0,c.jsx)(n.code,{children:`container-group`}),`), Parser quét đáp ứng thông qua cú pháp vách ngăn đứng: `,(0,c.jsx)(n.code,{children:`[type]|[tên_thuộc_tính]`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Tiền tố trái vách ranh giới thanh `,(0,c.jsx)(n.code,{children:`|`}),` được càn quét trực diện làm tham số `,(0,c.jsx)(n.code,{children:`_type`}),` duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ví dụ:`}),` Vòng khóa cấu trúc `,(0,c.jsx)(n.code,{children:`"media-group|adaptive-block"`}),` sẽ nhận lệnh xác lập ngay lập tức Type thiết đặt hệ thống là `,(0,c.jsx)(n.code,{children:`media-group`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`minh-hoạ-code-mẫu--phiên-dịch-scss`,children:`Minh Hoạ Code Mẫu / Phiên dịch SCSS`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "12px",             // Kiểu mặc định (thuộc tính CSS tĩnh)
  
  "sm": {                        // Khai báo thủ công Type (media)
    "_type": "media",
    "padding": "16px"
  },

  "$border": "8px",              // Lối tắt: var
  
  "#icon": {                     // Lối tắt: subclass
    "width": "24px"
  },
  
  ":hover": {                    // Lối tắt: selector
    "background-color": "#aaaaaa"
  },
  
  "~primary": {                  // Lối tắt: state
    "color": "#ff0000"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component-name {
  padding: 12px;
  --sys-[component]-border: 8px;

  @media (min-width: 576px) {  /* Nhánh sm (media) */
    padding: 16px;
  }

  &__icon {                    /* Nhánh #icon (subclass) */
    width: 24px;
  }

  &:hover {                    /* Nhánh :hover (selector) */
    background-color: #aaaaaa;
  }

  &--primary {                 /* Nhánh ~primary (state) */
    color: #ff0000;
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};