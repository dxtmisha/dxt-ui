import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/constructor/properties/types/Biến (var)`}),`
`,(0,c.jsx)(t.h1,{id:`biến-var`,children:`Biến (var)`}),`
`,(0,c.jsxs)(t.p,{children:[`Engine phân giải và xuất code properties cung cấp hai cơ chế chủ đạo nhằm thao tác Mảng CSS Custom Properties (biến hệ thống): khai báo biến minh bạch qua định danh kiểu `,(0,c.jsx)(t.code,{children:`var`}),`, và kết xuất song song mã thuộc tính CSS đi kèm cùng biến ẩn qua thiết lập cờ `,(0,c.jsx)(t.code,{children:`_var: true`}),`.`]}),`
`,(0,c.jsxs)(t.h2,{id:`khai-báo-cấu-hình-tiêu-chuẩn-type-var`,children:[`Khai báo Cấu hình Tiêu chuẩn (Type `,(0,c.jsx)(t.code,{children:`var`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh gọi thiết lập Type `,(0,c.jsx)(t.code,{children:`var`}),` (hoặc thông qua phím tắt ký tự `,(0,c.jsx)(t.code,{children:`$`}),`) trực tiếp ra lệnh cho compiler loại bỏ hoàn toàn tiến trình sinh thành thuộc tính CSS tĩnh phổ thông. Node mục tiêu sẽ được ép khung đúc toàn diện thuần túy thành CSS variable, khu biệt gọn trong Scope Module Component sở hữu.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Kế thừa Di truyền:`}),` Đặc tính Type `,(0,c.jsx)(t.code,{children:`var`}),` có khả năng lan truyền. Nếu bạn cấu hình định danh node cấp cha là `,(0,c.jsx)(t.code,{children:`var`}),` (hoặc thông qua phím tắt tiền tố `,(0,c.jsx)(t.code,{children:`$`}),`), toàn bộ các node con lồng bên trong sẽ tự động kế thừa di truyền hệ Type tương ứng. Bạn không cần thiết lập thủ công lại cụm `,(0,c.jsx)(t.code,{children:`var`}),` cho từng nhánh con cấp dưới.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "card": {
    "padding": {
      "_type": "var",
      "value": "16px"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.em,{children:[`(Sử dụng lối tắt `,(0,c.jsx)(t.code,{children:`$padding: "16px"`}),` trả về kết quả mảng y hệt mà không cần khai báo type cụ thể).`]})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.card {
  --card-padding: 16px;
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`khai-báo-luồng-song-song-cờ-_var`,children:[`Khai báo Luồng Song song (Cờ `,(0,c.jsx)(t.code,{children:`_var`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Kiến trúc UI Component thường xuyên đòi hỏi phải định hình giao diện theo quy chuẩn CSS properties thông thường nhưng lại phải nối sâu các thông số vào một bộ khung chứa CSS variable để tiện tùy biến (nhúng giao diện Theme hoặc thay đổi trạng thái động ở Vue).`}),`
`,(0,c.jsxs)(t.p,{children:[`Giải pháp là cờ cấu hình `,(0,c.jsx)(t.code,{children:`_var: true`}),`. Tham số này bảo lưu loại hình định danh kiến trúc gốc của node (mặc định thuộc base `,(0,c.jsx)(t.code,{children:`property`}),`), đồng thời bắt buộc compiler chạy lệnh phân giải thành hai khâu kết xuất:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Sinh biên dịch một biến Custom CSS lưu giữ chuỗi giá trị (literal string/value).`}),`
`,(0,c.jsxs)(t.li,{children:[`Dựng thiết lập Property thuộc tính CSS tĩnh nhưng được trỏ thẳng hàm để lấy dữ liệu cấp phát từ hàm `,(0,c.jsx)(t.code,{children:`var()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "button": {
    "background": {
      "_var": true,
      "value": "blue"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  --button-background: blue;
  background: var(--button-background);
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Triển khai cấu trúc cờ `,(0,c.jsx)(t.code,{children:`_var: true`}),` loại trừ sự lặp đi lặp lại quy trình sao chép code cứng rườm rà. Chốt chặn thiết lập đảm bảo quá trình đồng bộ code tự động khi xử lý Property tĩnh và vòng lặp gán biến nội vi ngay trong quy trình Properties.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};