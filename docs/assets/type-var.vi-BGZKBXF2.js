import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Biến (var)`}),`
`,(0,c.jsx)(n.h1,{id:`biến-var`,children:`Biến (var)`}),`
`,(0,c.jsxs)(n.p,{children:[`Engine phân giải và xuất code properties cung cấp hai cơ chế chủ đạo nhằm thao tác Mảng CSS Custom Properties (biến hệ thống): khai báo biến minh bạch qua định danh kiểu `,(0,c.jsx)(n.code,{children:`var`}),`, và kết xuất song song mã thuộc tính CSS đi kèm cùng biến ẩn qua thiết lập cờ `,(0,c.jsx)(n.code,{children:`_var: true`}),`.`]}),`
`,(0,c.jsxs)(n.h2,{id:`khai-báo-cấu-hình-tiêu-chuẩn-type-var`,children:[`Khai báo Cấu hình Tiêu chuẩn (Type `,(0,c.jsx)(n.code,{children:`var`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh gọi thiết lập Type `,(0,c.jsx)(n.code,{children:`var`}),` (hoặc thông qua phím tắt ký tự `,(0,c.jsx)(n.code,{children:`$`}),`) trực tiếp ra lệnh cho compiler loại bỏ hoàn toàn tiến trình sinh thành thuộc tính CSS tĩnh phổ thông. Node mục tiêu sẽ được ép khung đúc toàn diện thuần túy thành CSS variable, khu biệt gọn trong Scope Module Component sở hữu.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Kế thừa Di truyền:`}),` Đặc tính Type `,(0,c.jsx)(n.code,{children:`var`}),` có khả năng lan truyền. Nếu bạn cấu hình định danh node cấp cha là `,(0,c.jsx)(n.code,{children:`var`}),` (hoặc thông qua phím tắt tiền tố `,(0,c.jsx)(n.code,{children:`$`}),`), toàn bộ các node con lồng bên trong sẽ tự động kế thừa di truyền hệ Type tương ứng. Bạn không cần thiết lập thủ công lại cụm `,(0,c.jsx)(n.code,{children:`var`}),` cho từng nhánh con cấp dưới.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "card": {
    "padding": {
      "_type": "var",
      "value": "16px"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.em,{children:[`(Sử dụng lối tắt `,(0,c.jsx)(n.code,{children:`$padding: "16px"`}),` trả về kết quả mảng y hệt mà không cần khai báo type cụ thể).`]})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.card {
  --card-padding: 16px;
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`khai-báo-luồng-song-song-cờ-_var`,children:[`Khai báo Luồng Song song (Cờ `,(0,c.jsx)(n.code,{children:`_var`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Kiến trúc UI Component thường xuyên đòi hỏi phải định hình giao diện theo quy chuẩn CSS properties thông thường nhưng lại phải nối sâu các thông số vào một bộ khung chứa CSS variable để tiện tùy biến (nhúng giao diện Theme hoặc thay đổi trạng thái động ở Vue).`}),`
`,(0,c.jsxs)(n.p,{children:[`Giải pháp là cờ cấu hình `,(0,c.jsx)(n.code,{children:`_var: true`}),`. Tham số này bảo lưu loại hình định danh kiến trúc gốc của node (mặc định thuộc base `,(0,c.jsx)(n.code,{children:`property`}),`), đồng thời bắt buộc compiler chạy lệnh phân giải thành hai khâu kết xuất:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Sinh biên dịch một biến Custom CSS lưu giữ chuỗi giá trị (literal string/value).`}),`
`,(0,c.jsxs)(n.li,{children:[`Dựng thiết lập Property thuộc tính CSS tĩnh nhưng được trỏ thẳng hàm để lấy dữ liệu cấp phát từ hàm `,(0,c.jsx)(n.code,{children:`var()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "background": {
      "_var": true,
      "value": "blue"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  --button-background: blue;
  background: var(--button-background);
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Triển khai cấu trúc cờ `,(0,c.jsx)(n.code,{children:`_var: true`}),` loại trừ sự lặp đi lặp lại quy trình sao chép code cứng rườm rà. Chốt chặn thiết lập đảm bảo quá trình đồng bộ code tự động khi xử lý Property tĩnh và vòng lặp gán biến nội vi ngay trong quy trình Properties.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};