import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Trạng thái (state)`}),`
`,(0,c.jsx)(n.h1,{id:`trạng-thái-state`,children:`Trạng thái (state)`}),`
`,(0,c.jsxs)(n.p,{children:[`Type cấu trúc `,(0,c.jsx)(n.code,{children:`state`}),` được sinh ra để đặc tả các luồng biến thể, chế độ tương tác phụ trợ, hoặc lưới modifier đa dạng (như size grid). Phân bổ Type này sẽ ấn định cỗ máy Compiler gen dòng mã class CSS modifier tuân thủ nguyên lý BEM đính trực tiếp vào block cha (Ví dụ: `,(0,c.jsx)(n.code,{children:`&--primary`}),` hoặc chuỗi phức hợp `,(0,c.jsx)(n.code,{children:`&--size-sm`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Lập trình viên có thể khởi tạo state bằng mã phím tắt rút gọn `,(0,c.jsx)(n.code,{children:`~`}),` hoặc ghim cứng bằng lệnh qua định danh tham số `,(0,c.jsx)(n.code,{children:`_type: "state"`}),`. Trong lõi `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`, mọi state khởi tạo sẽ tự động rễ bám sâu vào lớp type (`,(0,c.jsx)(n.code,{children:`props.ts`}),`) lẫn luồng chốt class binding reactive của Vue.`]}),`
`,(0,c.jsx)(n.p,{children:`Bên trong hệ sinh thái của compiler, chúng ta phân tách làm hai thủ pháp chủ đạo:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái đơn lẻ:`}),` Được trưng dụng cho các cờ boolean cơ sở (Ví dụ: thiết lập `,(0,c.jsx)(n.code,{children:`~primary`}),`). Compiler sẽ đúc thẳng tắp ra class modifier gốc (`,(0,c.jsx)(n.code,{children:`&--primary`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái gom nhóm đa cực:`}),` Được trưng dụng cho bộ thông số nhiều lớp giá trị (Ví dụ: scale `,(0,c.jsx)(n.code,{children:`~size`}),`). Các nhánh lồng bên trong sẽ ép dính thành chuỗi modifier ghép nối tiếp (`,(0,c.jsx)(n.code,{children:`&--size-sm`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Khóa `,(0,c.jsx)(n.code,{children:`_default`}),` xác định giá trị cơ sở mặc định trong quá trình khởi tạo component. Cờ Boolean nhận trạng thái `,(0,c.jsx)(n.code,{children:`true`}),`, trong khi các tham số nhóm yêu cầu chuỗi định danh của node mục tiêu (ví dụ: `,(0,c.jsx)(n.code,{children:`"md"`}),`). Compiler sẽ tự động dịch chuyển thiết lập này thành giá trị ẩn định trong cấu hình `,(0,c.jsx)(n.code,{children:`props.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px",
    
    "~primary": {                // Trạng thái cục bộ (lối tắt ~)
      "background-color": "blue",
      "_default": true           // Cấu hình cờ boolean mặc định
    },
    
    "disabled": {                // Khai báo explicit state
      "_type": "state",
      "opacity": "0.5"
    },
    
    "~size": {                   // Gom nhóm trạng thái đa cực
      "sm": { "height": "32px" },
      "md": { "height": "40px" },
      "_default": "md"           // Cấu hình string mặc định
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &--primary { background-color: blue; }
  &--disabled { opacity: 0.5; }
  &--size-sm { height: 32px; }
  &--size-md { height: 40px; }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`Đồng bộ Tích hợp Vue (`,(0,c.jsx)(n.code,{children:`props.ts`}),` và `,(0,c.jsx)(n.code,{children:`Component.vue`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// --- props.ts ---
primary?: boolean
disabled?: boolean
size?: 'sm' | 'md'

// --- Component.vue (dynamic class bindings) ---
'd1-button--primary': props.primary,
'd1-button--disabled': props.disabled,
[\`d1-button--size--\${props.size}\`]: inArray(propsValues.size, props.size)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};