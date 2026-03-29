import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/styles/color/# Sử dụng Thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`sử-dụng-thuộc-tính-cơ-bản`,children:`Sử dụng Thuộc tính Cơ bản`}),`
`,(0,c.jsxs)(n.p,{children:[`Các mixin thuộc tính cơ bản là công cụ chính của bạn để áp dụng màu sắc cho các thành phần (components) UI. Thay vì viết thuộc tính CSS thông thường như `,(0,c.jsx)(n.code,{children:`color: black;`}),`, bạn sẽ gọi:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`@use '@dxtmisha/styles';

.my-text {
  @include styles.color(#000000);
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Cách tiếp cận này đảm bảo rằng màu sắc được phân tích chính xác thành các kênh RGB và các biến độ mờ hệ thống cần thiết được tạo cũng như áp dụng định dạng cho thành phần.`}),`
`,(0,c.jsx)(n.h2,{id:`các-base-mixin-hiện-có`,children:`Các Base Mixin hiện có`}),`
`,(0,c.jsx)(n.p,{children:`Các mixin chính hoạt động theo cùng một cơ chế. Tất cả các mixin này đều chấp nhận các tham số chung (màu sắc và độ mờ) được mô tả chi tiết dưới đây:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`color()`}),` — dành cho màu văn bản (`,(0,c.jsx)(n.code,{children:`color`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-color`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`backgroundColor()`}),` — dành cho màu nền (`,(0,c.jsx)(n.code,{children:`background-color`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-background`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`borderColor()`}),` — dành cho màu viền ngoài (`,(0,c.jsx)(n.code,{children:`border-color`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-border`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`outlineColor()`}),` — dành cho màu viền bao (`,(0,c.jsx)(n.code,{children:`outline-color`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-outline`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fill()`}),` — dành cho màu tô của các phần tử vector (`,(0,c.jsx)(n.code,{children:`fill`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-fill`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`stroke()`}),` — dành cho nét vẽ của các phần tử vector (`,(0,c.jsx)(n.code,{children:`stroke`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-stroke`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`gradient()`}),` — dành cho màu rắn áp dụng cho các thuộc tính yêu cầu hình ảnh (`,(0,c.jsx)(n.code,{children:`background-image`}),`). Biến hệ thống: `,(0,c.jsx)(n.code,{children:`--sys-gradient`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`tham-số-color`,children:[`Tham số `,(0,c.jsx)(n.code,{children:`$color`})]}),`
`,(0,c.jsx)(n.p,{children:`Tất cả các mixin này đều chấp nhận một biến màu làm tham số đầu tiên, có thể thuộc một trong ba loại sau:`}),`
`,(0,c.jsx)(n.h4,{id:`1-màu-cụ-thể-hex-rgb-hoặc-biến-css`,children:`1. Màu cụ thể (HEX, RGB hoặc Biến CSS)`}),`
`,(0,c.jsxs)(n.p,{children:[`Thường xuyên nhất, bạn sẽ truyền vào màu từ hệ thống thiết kế của chúng ta bằng hàm `,(0,c.jsx)(n.code,{children:`styles.getColor('color-name')`}),`, các giá trị HEX cơ bản hoặc biến CSS tuỳ chỉnh `,(0,c.jsx)(n.code,{children:`var(--my-color)`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  @include styles.backgroundColor(styles.getColor('surface'));
  @include styles.color(#333333);
}
`})}),`
`,(0,c.jsxs)(n.h4,{id:`2-giá-trị-đặc-biệt-as-color`,children:[`2. Giá trị Đặc biệt `,(0,c.jsx)(n.code,{children:`'as-color'`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Điều gì xảy ra nếu bạn cần viền, đường bao hoặc màu nền khớp chính xác với màu văn bản hệ thống hiện tại (`,(0,c.jsx)(n.code,{children:`--sys-color`}),`)? Bạn có thể truyền vào chuỗi `,(0,c.jsx)(n.code,{children:`'as-color'`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button-outline {
  // Văn bản trở thành màu xanh lam
  @include styles.color(styles.getColor('primary'));
  
  // Viền sẽ tự động đổi màu xanh lam từ --sys-color
  @include styles.borderColor('as-color');
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đây là một công cụ mạnh mẽ để tạo các thành phần thay đổi toàn bộ tông màu của chúng (văn bản + viền + biểu tượng) chỉ bằng cách sửa đổi biến `,(0,c.jsx)(n.code,{children:`--sys-color`}),`.`]}),`
`,(0,c.jsxs)(n.h4,{id:`3-giá-trị-đặc-biệt-init`,children:[`3. Giá trị Đặc biệt `,(0,c.jsx)(n.code,{children:`'init'`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Truyền `,(0,c.jsx)(n.code,{children:`'init'`}),` được sử dụng khi bạn cần `,(0,c.jsx)(n.strong,{children:`ép cập nhật`}),` thuộc tính mà không thay đổi màu cơ bản. Ví dụ, nếu độ mờ (`,(0,c.jsx)(n.code,{children:`--sys-color-opacity`}),`) đã được thay đổi trực tiếp qua CSS và bạn muốn trình duyệt áp dụng lại thuộc tính `,(0,c.jsx)(n.code,{children:`color`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text-reset {
  @include styles.color('init');
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`quản-lý-độ-mờ-opacity`,children:[`Quản lý Độ mờ (`,(0,c.jsx)(n.code,{children:`$opacity`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Tham số thứ hai của các mixin là `,(0,c.jsx)(n.code,{children:`$opacity`}),`. Nó cho phép bạn kiểm soát độ mờ lúc ban đầu của thành phần.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.text-faded {
  // Văn bản có độ mờ 50%
  @include styles.color(#000000, 0.5);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn truyền `,(0,c.jsx)(n.code,{children:`null`}),` (hoặc không truyền), độ mờ mặc định sẽ được lấy từ biến hệ thống tiêu chuẩn.
Bạn cũng có thể chèn một biến CSS nếu độ mờ cần thay đổi động:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.dynamic-fade {
  @include styles.backgroundColor(#ff0000, var(--custom-opacity));
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`làm-việc-với-biến-cục-bộ-colorsys`,children:[`Làm việc với Biến Cục bộ: `,(0,c.jsx)(n.code,{children:`colorSys`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Đôi khi, bạn cần lưu trữ một màu vào một biến mà không áp dụng nó trực tiếp vào một thuộc tính (ví dụ, để chuyển màu cho một thành phần con). Bạn có thể dùng `,(0,c.jsx)(n.code,{children:`colorSys`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.parent {
  // Đặt giá trị --sys-color và --sys-color-opacity: 0.8
  @include styles.colorSys('color', #ff0000, 0.8);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tham số đầu tiên là "tên thuộc tính", sẽ trở thành số đuôi trong biến `,(0,c.jsx)(n.code,{children:`--sys-[name]`}),`. Màu này sau đó có thể được áp dụng với các thành phần dạng nút con bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`color('init')`}),` hoặc đưa vào dưới định dạng CSS như `,(0,c.jsx)(n.code,{children:`rgba(var(--sys-color), 1)`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};