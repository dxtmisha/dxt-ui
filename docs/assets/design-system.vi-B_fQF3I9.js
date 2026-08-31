import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/1. Hệ thống thiết kế (Design System)`}),`
`,(0,c.jsx)(t.h1,{id:`kiến-trúc-và-ưu-điểm-của-hệ-thống-thiết-kế`,children:`Kiến trúc và Ưu điểm của Hệ thống thiết kế`}),`
`,(0,c.jsxs)(t.p,{children:[`Package `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),` là hạt nhân hạ tầng và bộ sinh mã (code generator) của hệ thống thiết kế `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`. Nó triển khai mô hình kiến trúc tiên tiến phân tách triệt để logic hành vi trừu tượng và giao diện trực quan, tự động hóa toàn bộ quy trình khởi tạo, liên kết, định kiểu dữ liệu (typing) và tạo tài liệu cho tất cả component trong thư viện.`]}),`
`,(0,c.jsx)(t.p,{children:`Mục tiêu cốt lõi của hệ thống là cung cấp cho các nhà phát triển một quy trình tự động hóa hoàn chỉnh, loại bỏ hoàn toàn mã lặp lại (boilerplate), ngăn ngừa lỗi do con người và đảm bảo tính nhất quán xuyên suốt giữa thiết kế, kiểu dáng SCSS, logic component và TypeScript types.`}),`
`,(0,c.jsx)(t.h2,{id:`sơ-đồ-kiến-trúc`,children:`Sơ đồ Kiến trúc`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`​
 ┌──────────────────────────────────────────────┐
 │ @dxtmisha/constructor (Lõi Headless)         │
 │ • Logic, WAI-ARIA truy cập, state, focus     │
 └──────────────────────┬───────────────────────┘
                        │
                        │ + properties.json (Design tokens)
                        ▼
 ┌──────────────────────────────────────────────┐
 │ @dxtmisha/scripts (CLI: dxt-ui)              │
 │ • Phân tích token & tự động sinh mã          │
 └──────────────────────┬───────────────────────┘
                        │
      ┌─────────────────┼─────────────────┐
      ▼                 ▼                 ▼
 ┌──────────┐     ┌───────────┐     ┌───────────┐
 │ props.ts │     │styleToken │     │ D1*.vue   │
 │ TS Types │     │CSS Tokens │     │ Bản đồ BEM│
 └────┬─────┘     └─────┬─────┘     └─────┬─────┘
      │                 │                 │
      └─────────────────┼─────────────────┘
                        ▼
 ┌──────────────────────────────────────────────┐
 │ UI Component Hoàn chỉnh                      │
 │ • 100% Type-Safe & Gợi ý IDE thông minh      │
 │ • Chuẩn WAI-ARIA & Zero-Boilerplate          │
 └──────────────────────────────────────────────┘
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-ưu-điểm-triển-khai-vượt-trội`,children:`Các Ưu điểm Triển khai Vượt trội`}),`
`,(0,c.jsx)(t.h3,{id:`1-phân-tách-triệt-để-logic-và-giao-diện-headless--design-system`,children:`1. Phân tách Triệt để Logic và Giao diện (Headless + Design System)`}),`
`,(0,c.jsxs)(t.p,{children:[`Toàn bộ logic hành vi (xử lý bàn phím, bẫy focus, thuật toán vị trí, khả năng truy cập ARIA, đồng bộ trạng thái) được đóng gói hoàn toàn trong `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dễ dàng tạo mới các UI kit:`}),` Để xây dựng một bộ giao diện mới (ví dụ `,(0,c.jsx)(t.code,{children:`d2`}),` hoặc giao diện thương hiệu riêng), bạn không cần viết lại bất kỳ dòng logic phức tạp nào — chỉ cần khai báo file `,(0,c.jsx)(t.code,{children:`properties.json`}),` và file styles mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độ tin cậy được đảm bảo:`}),` Việc sửa lỗi trong constructor sẽ tự động cập nhật và sửa lỗi cho tất cả các hệ thống thiết kế đang sử dụng constructor đó.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`2-không-còn-mã-rập-khuôn-và-tăng-tốc-độ-phát-triển-gấp-10-lần-zero-boilerplate`,children:`2. Không còn mã rập khuôn và Tăng tốc độ phát triển gấp 10 lần (Zero-Boilerplate)`}),`
`,(0,c.jsx)(t.p,{children:`Trong cách tiếp cận truyền thống, việc thêm một prop mới đòi hỏi phải chỉnh sửa thủ công ở 5–7 vị trí khác nhau (types, Vue props, validators, template classes, SCSS selectors, tài liệu).`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Trong DXT UI, lập trình viên chỉ cần thêm `,(0,c.jsx)(t.strong,{children:`một dòng`}),` vào `,(0,c.jsx)(t.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` chỉ trong vài giây sẽ tự động cập nhật `,(0,c.jsx)(t.code,{children:`props.ts`}),`, mapping BEM trong `,(0,c.jsx)(t.code,{children:`.vue`}),`, biến SCSS trong `,(0,c.jsx)(t.code,{children:`styleToken.scss`}),` và metadata cho IDE.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`3-nguồn-chân-lý-duy-nhất--an-toàn-kiểu-dữ-liệu-100-100-type-safety`,children:`3. Nguồn Chân lý Duy nhất & An toàn Kiểu dữ liệu 100% (100% Type Safety)`}),`
`,(0,c.jsxs)(t.p,{children:[`File `,(0,c.jsx)(t.code,{children:`properties.json`}),` đóng vai trò là nguồn chân lý duy nhất cho toàn bộ không gian làm việc:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`TypeScript`}),`: Định kiểu nghiêm ngặt cho tất cả các giá trị prop hợp lệ (`,(0,c.jsx)(t.code,{children:`size: 'sm' | 'md' | 'lg'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra Runtime`}),`: Tự động sinh mảng giá trị hợp lệ (`,(0,c.jsx)(t.code,{children:`propsValues`}),`) để kiểm tra nhanh bằng các helper `,(0,c.jsx)(t.code,{children:`inArray`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động hoàn thành mã trong IDE`}),`: Tự động cập nhật `,(0,c.jsx)(t.code,{children:`web-types.json`}),`, cung cấp trải nghiệm IntelliSense mạnh mẽ trong WebStorm và VS Code.`]}),`
`,(0,c.jsx)(t.li,{children:`Loại bỏ hoàn toàn lỗi con người: không còn lỗi chính tả trong tên class BEM, không lệch giữa styles và types, không quên export.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`4-tái-cấu-trúc-toàn-cục-tức-thì-cho-toàn-bộ-hệ-thống-thiết-kế`,children:`4. Tái cấu trúc Toàn cục Tức thì cho Toàn bộ Hệ thống Thiết kế`}),`
`,(0,c.jsx)(t.p,{children:`Khi bạn cần đổi tiền tố class BEM, điều chỉnh quy tắc sinh biến CSS hoặc hỗ trợ chuẩn trình duyệt mới trên hơn 100 component:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Chỉ cần sửa đổi logic generator trong `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Chạy lệnh build sẽ tự động biên dịch lại toàn bộ các component trong monorepo chỉ trong vài giây.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`5-quản-lý-bảng-màu-và-theme-khai-báo-không-làm-phình-to-css`,children:`5. Quản lý Bảng màu và Theme Khai báo Không làm Phình to CSS`}),`
`,(0,c.jsx)(t.p,{children:`Bộ phân tích cú pháp token hỗ trợ các mô hình styling nâng cao:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`flag-theme`}),` & Bảng màu`]}),`: Chuyển đổi theme sáng/tối và thay đổi bảng màu động mà không cần nhân bản mã CSS, thông qua các biến CSS cấp bảng màu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tách rời Màu sắc và Độ mờ (Opacity)`}),`: Hỗ trợ tự nhiên các token với độ mờ độc lập (`,(0,c.jsx)(t.code,{children:`backgroundOpacity`}),`, `,(0,c.jsx)(t.code,{children:`colorOpacity`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`BEM Modifiers thông minh (`,(0,c.jsx)(t.code,{children:`flag-subclass`}),`, `,(0,c.jsx)(t.code,{children:`flag-replace`}),`)`]}),`: Các class modifier chỉ được thêm vào DOM khi các flag tương ứng được kích hoạt.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`6-tự-động-tiêm-phụ-thuộc-dependency-injection-cho-subcomponent`,children:`6. Tự động Tiêm Phụ thuộc (Dependency Injection) cho Subcomponent`}),`
`,(0,c.jsxs)(t.p,{children:[`Component `,(0,c.jsx)(t.code,{children:`.vue`}),` được sinh ra tự động liên kết và truyền các thành phần phụ trợ (icon `,(0,c.jsx)(t.code,{children:`D1Icon`}),`, loader `,(0,c.jsx)(t.code,{children:`D1Progress`}),`, hiệu ứng ripple `,(0,c.jsx)(t.code,{children:`D1Ripple`}),`) trực tiếp vào lớp `,(0,c.jsx)(t.code,{children:`Design`}),`. Template component giữ được sự gọn gàng và tối giản tuyệt đối:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup lang="ts">
// Liên kết được sinh tự động
const design = new ButtonDesign('d1.button', props, {
  emits,
  classes: classesToken,
  styles: stylesToken,
  components: { icon: D1Icon, progress: D1Progress, ripple: D1Ripple }
})
const render = design.render()
<\/script>

<template>
  <render/>
</template>
`})}),`
`,(0,c.jsx)(t.h3,{id:`7-hệ-sinh-thái-ai-native-và-tự-động-hóa-tài-liệu`,children:`7. Hệ sinh thái AI-Native và Tự động hóa Tài liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sinh `,(0,c.jsx)(t.code,{children:`ai-types.md`})]}),`: Biên dịch các tài liệu tham khảo kiểu dữ liệu siêu gọn, cho phép các mô hình LLM nhanh chóng hiểu toàn bộ API mà không cần quét hàng ngàn dòng mã nguồn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`AI Docs & Storybook MDX`}),`: Tự động tạo mô tả thuộc tính và ví dụ sử dụng tương tác phong phú.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ Figma API`}),`: Trực tiếp trích xuất frames, design tokens và styles từ Figma vào mã nguồn dự án.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động-bên-dưới`,children:`Cơ chế Hoạt động Bên dưới`}),`
`,(0,c.jsxs)(t.h3,{id:`1-khai-báo-hợp-đồng-giao-diện-propertiesjson`,children:[`1. Khai báo Hợp đồng Giao diện (`,(0,c.jsx)(t.code,{children:`properties.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Các thuộc tính hình ảnh của component được khai báo dưới định dạng JSON rõ ràng:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "size": {
    "type": "type-var",
    "value": ["sm", "md", "lg"],
    "default": "md"
  },
  "palette": {
    "type": "flag-theme",
    "value": ["primary", "secondary", "tertiary", "error"]
  },
  "outline": {
    "type": "flag-subclass"
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`2-tự-động-sinh-mã-nguồn`,children:`2. Tự động Sinh Mã Nguồn`}),`
`,(0,c.jsxs)(t.p,{children:[`Công cụ `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` biên dịch cấu hình JSON thành các tài nguyên đồng bộ:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`props.ts`})}),`: Kết hợp props từ constructor logic và tokens hình ảnh với các giá trị mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`styleToken.scss`})}),`: Sinh ra các mixin SCSS và biến CSS cho từng trạng thái token.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1[Component].vue`})}),`: Thiết lập bản đồ BEM phản ứng (`,(0,c.jsx)(t.code,{children:`classesToken`}),`) và khởi tạo instance `,(0,c.jsx)(t.code,{children:`Design`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`index.ts`})}),`: Đóng gói và export component cùng với tất cả các types liên quan.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-lệnh-cli-chính-trong-hệ-sinh-thái`,children:`Các Lệnh CLI Chính trong Hệ sinh thái`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-ui [--name NAME]`})}),` — Bộ điều phối chính xây dựng UI. Quét `,(0,c.jsx)(t.code,{children:`properties.json`}),`, sinh template, bản đồ BEM, typed props và liên kết với lớp Constructor.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-constructor`})}),` — Biên dịch lại các class và interface toàn cục cho logic constructor, giữ cho các types luôn đồng bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-library`})}),` — Quét cây thư mục và tự động cập nhật các file export trong toàn bộ monorepo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-screenshot`})}),` — Môi trường kiểm thử hồi quy trực quan tự động dựa trên Puppeteer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`dxt-types-save`})}),` — Tạo tài liệu tham khảo `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` tối ưu hóa cho AI và các công cụ LLM.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};