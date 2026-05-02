import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/# Cấu trúc`}),`
`,(0,c.jsx)(n.h1,{id:`cấu-trúc`,children:`Cấu trúc`}),`
`,(0,c.jsxs)(n.p,{children:[`Cấu hình `,(0,c.jsx)(n.code,{children:`properties.json`}),` thiết lập chuẩn dạng nhánh cây, bao gồm hệ thống module các khóa làm phân tử lựa chọn và thuộc tính setup cấu trúc thông số đối tượng `,(0,c.jsx)(n.code,{children:`PropertyItem`}),`. Mọi thuộc tính CSS được khai báo dưới dạng khóa sẽ tự động kết xuất ra mã CSS tương ứng.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Cấu trúc cơ bản sau đây minh họa cách khai báo giao diện CSS gốc, kết hợp trạng thái tương tác (`,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`disabled`}),`), và bộ biến thể động tự động kết xuất qua Vue Props.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "var(--sys-height) * {sys.spacing.adaptive.md}",
  
  "hover": {
    "gradient-opacity": "{sys.opacity.hover}"
  },

  "disabled": {
    "color": "{sys.palette.onSurface}",
    "color-opacity": "{sys.opacity.surface.disabled}"
  },

  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "palette-background": "{sys.palette.primary}",
    "active": {
      "box-shadow": "{sys.shadow.lg}"
    },
    "_category": "style",
    "_default": true
  },

  "~size": {
    "sm": {
      "height": "{ref.spacing.10}"
    },
    "md": {
      "height": "{ref.spacing.12}"
    },
    "_default": "md"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Trình phân tích properties (Generator) xử lý file JSON theo bộ quy tắc biên dịch cụ thể:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Thông số thuộc tính thuần CSS (ví dụ `,(0,c.jsx)(n.code,{children:`padding`}),`) xuất thẳng vào class `,(0,c.jsx)(n.code,{children:`.component`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Giá trị tham chiếu Design Tokens dạng ngoặc `,(0,c.jsx)(n.code,{children:`{...}`}),` được truy xuất qua biến chuẩn CSS định nghĩa sẵn theo hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Nhóm biến thể sử dụng chỉ dấu tiền tố `,(0,c.jsx)(n.code,{children:`~`}),` trực tiếp sinh mảng modifier của SCSS class (như `,(0,c.jsx)(n.code,{children:`--primary`}),`), đồng hành trích xuất thành thuộc tính Component (props TypeScript).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`Kết xuất chuỗi mã SCSS:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  padding: calc(var(--sys-height) * var(--sys-spacing-adaptive-md));

  /* Pseudo-classes states */
  &:hover {
    --component-gradient-opacity: var(--sys-opacity-hover);
  }
  &:disabled {
    color: var(--sys-palette-onSurface);
    --component-color-opacity: var(--sys-opacity-surface-disabled);
  }

  /* Modifiers danh mục "style": --primary */
  &--primary {
    color: var(--sys-palette-onPrimary);
    background-color: var(--sys-palette-primary);
    
    &:active {
      box-shadow: var(--sys-shadow-lg);
    }
  }

  /* Các modifiers chuỗi kích cỡ "size" */
  &--size-sm { height: var(--ref-spacing-10); }
  &--size-md { height: var(--ref-spacing-12); }
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kết xuất Vue Props interface (`,(0,c.jsx)(n.code,{children:`props.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  // :type [!] System label / Системная метка
  primary?: boolean
  size?: 'sm' | 'md'
  // :type [!] System label / Системная метка
}

export const defaults: object = {
  // :default [!] System label / Системная метка
  primary: true,
  size: 'md'
  // :default [!] System label / Системная метка
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Kết xuất logic gán class động Vue:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'component': true,
    'component--primary': props.primary,
    [\`component--size--\${props.size}\`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
`})}),`
`,(0,c.jsx)(n.h2,{id:`khởi-xướng-phân-nhánh-cấu-hình`,children:`Khởi xướng phân nhánh cấu hình`}),`
`,(0,c.jsx)(n.p,{children:`Bố cục thứ bậc thiết đặt thường làm theo cú pháp chuẩn:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Thẻ Gốc — `,(0,c.jsx)(n.code,{children:`[Tên Domain gốc hay Group]`}),` (như `,(0,c.jsx)(n.code,{children:`ui`}),`, `,(0,c.jsx)(n.code,{children:`d1`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Thẻ Cấp Độ Con — `,(0,c.jsx)(n.code,{children:`[Tên thành phần Component UI]`}),` (như `,(0,c.jsx)(n.code,{children:`component`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[`Thông số xử lý — `,(0,c.jsx)(n.code,{children:`[Thuộc tính thành phần, CSS rules, hay state]`}),` (như `,(0,c.jsx)(n.code,{children:`background`}),`, `,(0,c.jsx)(n.code,{children:`size`}),`, `,(0,c.jsx)(n.code,{children:`hover`}),`, `,(0,c.jsx)(n.code,{children:`--padding`}),`)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ràng-buộc-tham-chiếu-links`,children:`Ràng buộc tham chiếu (Links)`}),`
`,(0,c.jsxs)(n.p,{children:[`Các giá trị được bọc trong các dấu ngoặc nhọn (ví dụ: `,(0,c.jsx)(n.code,{children:`"{sys.palette.primary}"`}),` hay `,(0,c.jsx)(n.code,{children:`"{ref.spacing.10}"`}),`) cho phép bạn tham chiếu động đến các token của design system. Khi build, chúng tự động chuyển đổi thành CSS variable hoặc mã màu gốc tương ứng từ hệ thống.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tuỳ-chọn-cờ-flags`,children:`Các tuỳ chọn cờ (Flags)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tất cả thẻ thuộc thông số khai báo đóng vai trò quyết định đến cách framework làm việc với node đều bắt đầu nhờ một gạch dưới `,(0,c.jsx)(n.code,{children:`_`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`thẻ-phân-loại-chính`,children:`Thẻ phân loại chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_type: string`}),` — Quy định phương thức framework biến đổi code (`,(0,c.jsx)(n.code,{children:`var`}),`, `,(0,c.jsx)(n.code,{children:`state`}),`, `,(0,c.jsx)(n.code,{children:`subclass`}),`, `,(0,c.jsx)(n.code,{children:`media`}),` v.v..).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_category: string`}),` — Cung cấp tuỳ chọn sắp xếp lọc bộ xử lý phân cấp.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`thuộc-tính-hành-vi`,children:`Thuộc tính hành vi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_var: boolean`}),` — Ép hệ thống tạo riêng cho node một variable kiểu dạng `,(0,c.jsx)(n.code,{children:`--name: value`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_state: boolean`}),` — Định thẻ cho giao diện làm component theo chuẩn logic rendering của State format nội bộ (như kiểu `,(0,c.jsx)(n.code,{children:`_type: "state"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_subclass: boolean`}),` — Quy ước thẻ như phân nhánh phân cấp nhánh con phụ subclass nội tạng layout render logic module nội tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_prop: boolean`}),` — Lấy nhánh này cho luồng tự tạo code `,(0,c.jsx)(n.code,{children:`props.ts`}),` áp dụng Vue/React props truyền dữ liệu lập trình thông số xử lý code logic thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_theme: string`}),` — Cột bộ layout tương đương giao diện phân nhóm cho việc đổi màu Theme format động.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`override-thay-thế-giá-trị-tên-gọi`,children:`Override thay thế giá trị tên gọi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_rename: string`}),` — Ép class khi xuất có một tên khác (ví dụ khoá `,(0,c.jsx)(n.code,{children:`backgroundItem`}),` thêm thuộc tính flag `,(0,c.jsx)(n.code,{children:`_rename: "bg"`}),` sẽ cho ra css `,(0,c.jsx)(n.code,{children:`.component__bg`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_replace: string`}),` — Tính năng ghi đè qua bộ lệnh Pattern match biểu thức regex text tuỳ biến thông qua kịch bản cho thuộc tính code logic text tuỳ chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullName: string`}),` — Định nghĩa tên cuối cố định không màng ngữ cảnh JSON tree path logic.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullValue: string`}),` — Giá trị thuần tuyệt đối bỏ qua khả năng tự gán hậu tố px của JS plugin CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_default: any`}),` — Giá trị dùng để backup cấu trúc cho component lỡ không mang biến khai báo chuẩn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-trị-hoạt-động-và-cấu-trúc`,children:`Quản trị hoạt động và cấu trúc`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_important: boolean`}),` — CSS `,(0,c.jsx)(n.code,{children:`!important`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_modification: boolean`}),` — Quản lý logic class component modifier áp dụng mã tuỳ chỉnh form module class render output component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_drag: string`}),` — Gắp cả cụm nội dung tree path nhét qua ngách khác của chuỗi quá trình build (giống Alias).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_dragSetting: boolean`}),` — Đẩy thiết lập nội bộ hoặc cấu trúc thừa kế truyền cập nhật xuống các node con tự động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_settingClone: boolean`}),` — Dùng để copy lặp toàn bộ thuộc tính cấu hình từ node cha tới trực tiếp node con lồng chép dữ liệu nhanh lẹ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_style: boolean`}),` — Gen cấu trúc làm inline style format biến inline layout thay vì render CSS file class riêng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_remove: boolean`}),` — Ra lệnh bộ máy SCSS xoá bỏ nhánh cấu hình không gán xuất ra CSS document.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};