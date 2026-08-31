import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/properties/types/Trạng thái (state)`}),`
`,(0,c.jsx)(t.h1,{id:`trạng-thái-state`,children:`Trạng thái (state)`}),`
`,(0,c.jsxs)(t.p,{children:[`Type cấu trúc `,(0,c.jsx)(t.code,{children:`state`}),` được sinh ra để đặc tả các luồng biến thể, chế độ tương tác phụ trợ, hoặc lưới modifier đa dạng (như size grid). Phân bổ Type này sẽ ấn định cỗ máy Compiler gen dòng mã class CSS modifier tuân thủ nguyên lý BEM đính trực tiếp vào block cha (Ví dụ: `,(0,c.jsx)(t.code,{children:`&--primary`}),` hoặc chuỗi phức hợp `,(0,c.jsx)(t.code,{children:`&--size-sm`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lập trình viên có thể khởi tạo state bằng mã phím tắt rút gọn `,(0,c.jsx)(t.code,{children:`~`}),` hoặc ghim cứng bằng lệnh qua định danh tham số `,(0,c.jsx)(t.code,{children:`_type: "state"`}),`. Trong lõi `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, mọi state khởi tạo sẽ tự động rễ bám sâu vào lớp type (`,(0,c.jsx)(t.code,{children:`props.ts`}),`) lẫn luồng chốt class binding reactive của Vue.`]}),`
`,(0,c.jsx)(t.p,{children:`Bên trong hệ sinh thái của compiler, chúng ta phân tách làm hai thủ pháp chủ đạo:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trạng thái đơn lẻ:`}),` Được trưng dụng cho các cờ boolean cơ sở (Ví dụ: thiết lập `,(0,c.jsx)(t.code,{children:`~primary`}),`). Compiler sẽ đúc thẳng tắp ra class modifier gốc (`,(0,c.jsx)(t.code,{children:`&--primary`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trạng thái gom nhóm đa cực:`}),` Được trưng dụng cho bộ thông số nhiều lớp giá trị (Ví dụ: scale `,(0,c.jsx)(t.code,{children:`~size`}),`). Các nhánh lồng bên trong sẽ ép dính thành chuỗi modifier ghép nối tiếp (`,(0,c.jsx)(t.code,{children:`&--size-sm`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Khóa `,(0,c.jsx)(t.code,{children:`_default`}),` xác định giá trị cơ sở mặc định trong quá trình khởi tạo component. Cờ Boolean nhận trạng thái `,(0,c.jsx)(t.code,{children:`true`}),`, trong khi các tham số nhóm yêu cầu chuỗi định danh của node mục tiêu (ví dụ: `,(0,c.jsx)(t.code,{children:`"md"`}),`). Compiler sẽ tự động dịch chuyển thiết lập này thành giá trị ẩn định trong cấu hình `,(0,c.jsx)(t.code,{children:`props.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(t.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
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
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-scss`,children:`.button {
  padding: 12px;

  &--primary { background-color: blue; }
  &--disabled { opacity: 0.5; }
  &--size-sm { height: 32px; }
  &--size-md { height: 40px; }
}
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsxs)(t.strong,{children:[`Đồng bộ Tích hợp Vue (`,(0,c.jsx)(t.code,{children:`props.ts`}),` và `,(0,c.jsx)(t.code,{children:`Component.vue`}),`):`]})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// --- props.ts ---
primary?: boolean
disabled?: boolean
size?: 'sm' | 'md'

// --- Component.vue (dynamic class bindings) ---
'd1-button--primary': props.primary,
'd1-button--disabled': props.disabled,
[\`d1-button--size--\${props.size}\`]: inArray(propsValues.size, props.size)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};