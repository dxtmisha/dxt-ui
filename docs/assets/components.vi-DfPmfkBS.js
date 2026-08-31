import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/4. Tạo thành phần (Component Creation)`}),`
`,(0,c.jsx)(t.h1,{id:`hướng-dẫn-khởi-tạo-và-phát-triển-thành-phần-component-creation`,children:`Hướng dẫn Khởi tạo và Phát triển Thành phần (Component Creation)`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong hệ thống thiết kế `,(0,c.jsx)(t.strong,{children:`DXT UI`}),`, quy trình tạo các thành phần (component) mới được tự động hóa hoàn toàn thông qua công cụ CLI `,(0,c.jsx)(t.code,{children:`dxt-component`}),`. Lập trình viên không còn phải tạo thư mục thủ công, cấu hình tệp khung sườn lặp đi lặp lại, quản lý điểm xuất tệp hay thiết lập Storybook một cách phức tạp.`]}),`
`,(0,c.jsx)(t.p,{children:`Công cụ giải quyết toàn bộ công việc mang tính lặp lại và thiết lập kiến trúc tiêu chuẩn cho mỗi thành phần mới chỉ trong chưa đầy một giây.`}),`
`,(0,c.jsx)(t.h2,{id:`các-ưu-điểm-vượt-trội`,children:`Các ưu điểm vượt trội`}),`
`,(0,c.jsx)(t.h3,{id:`1-kiến-trúc-chuẩn-hóa-loại-bỏ-công-việc-lặp-lại-zero-boilerplate`,children:`1. Kiến trúc chuẩn hóa loại bỏ công việc lặp lại (Zero Boilerplate)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thay vì phải tự tay viết nhiều tệp với các liên kết và câu lệnh import phức tạp, lập trình viên chỉ cần tạo duy nhất một thư mục trống. Lệnh `,(0,c.jsx)(t.code,{children:`dxt-component`}),` tự động tạo toàn bộ cấu trúc tệp tiêu chuẩn, loại bỏ hoàn toàn các lỗi chính tả trong tên lớp BEM, đường dẫn và giao diện kiểu dữ liệu.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-định-kiểu-chặt-chẽ-thông-qua-definesetupfncomponent`,children:[`2. Định kiểu chặt chẽ thông qua `,(0,c.jsx)(t.code,{children:`DefineSetupFnComponent`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Điểm xuất `,(0,c.jsx)(t.code,{children:`index.ts`}),` được tạo tự động sử dụng các kiểu tiện ích của Vue 3, mang lại khả năng gợi ý mã (IntelliSense) hoàn hảo và kiểm tra nghiêm ngặt props, slots, emits trong template của các dự án.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-tích-hợp-sẵn-với-storybook-và-trợ-lý-ai`,children:`3. Tích hợp sẵn với Storybook và Trợ lý AI`}),`
`,(0,c.jsxs)(t.p,{children:[`Mỗi thành phần mới đều sẵn sàng chạy ngay trong Storybook và tích hợp sẵn các tệp hướng dẫn `,(0,c.jsx)(t.code,{children:`prompt.md`}),` dành riêng cho quy trình phát triển cùng trợ lý AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`quy-trình-từng-bước-những-việc-cần-làm`,children:`Quy trình từng bước (Những việc cần làm)`}),`
`,(0,c.jsx)(t.h3,{id:`bước-1-tạo-thư-mục-trống-cho-thành-phần`,children:`Bước 1. Tạo thư mục trống cho thành phần`}),`
`,(0,c.jsxs)(t.p,{children:[`Bên trong thư mục `,(0,c.jsx)(t.code,{children:`src/components/`}),`, tạo một thư mục trống mới với tên thành phần theo chuẩn PascalCase (ví dụ: `,(0,c.jsx)(t.code,{children:`Badge`}),` hoặc `,(0,c.jsx)(t.code,{children:`UserAvatar`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`mkdir src/components/Badge
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-2-khởi-chạy-lệnh-tạo-khung-sườn`,children:`Bước 2. Khởi chạy lệnh tạo khung sườn`}),`
`,(0,c.jsxs)(t.p,{children:[`Chạy lệnh `,(0,c.jsx)(t.code,{children:`dxt-component`}),` trong terminal của bạn:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(t.p,{children:`Trình tạo sẽ tự động phát hiện thư mục trống và giải nén toàn bộ các tệp cần thiết:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`Component create: Badge
path: Badge
end
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-3-kiểm-tra-cấu-trúc-tệp-được-tạo`,children:`Bước 3. Kiểm tra cấu trúc tệp được tạo`}),`
`,(0,c.jsx)(t.p,{children:`Bên trong thư mục thành phần, 8 tệp tiêu chuẩn sẽ xuất hiện:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`src/components/Badge/
├── Badge.vue                  # Thành phần Vue 3 SFC (<script setup>, types, styles)
├── index.ts                   # Điểm xuất với định kiểu DefineSetupFnComponent
├── types.ts                   # Định nghĩa giao diện Props, Emits, Slots và Defaults
├── materials/
│   └── prompt.md              # Gợi ý AI cho tài liệu thiết kế & triển khai
├── subcomponents/
│   └── .gitignore             # Cô lập các thành phần con cục bộ
└── wiki/
    ├── Badge.mdx              # Tài liệu Storybook định dạng MDX
    ├── Badge.stories.ts       # Câu chuyện tương tác Storybook Vue 3
    └── prompt.md              # Gợi ý AI cho viết tài liệu Wiki
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-4-định-nghĩa-các-thuộc-tính-và-kiểu-của-thành-phần`,children:`Bước 4. Định nghĩa các thuộc tính và kiểu của thành phần`}),`
`,(0,c.jsxs)(t.p,{children:[`Mở tệp `,(0,c.jsx)(t.code,{children:`types.ts`}),` và định nghĩa các thuộc tính đầu vào (`,(0,c.jsx)(t.code,{children:`Props`}),`), sự kiện (`,(0,c.jsx)(t.code,{children:`Emits`}),`) và các ô chứa (`,(0,c.jsx)(t.code,{children:`Slots`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`export type BadgeEmits = {
  click: [event: MouseEvent]
}

export interface BadgeSlots {
  default? (props: any): any
  icon? (props: any): any
}

export interface BadgeProps {
  label?: string
  color?: string
  outline?: boolean
}

export const BadgeDefaults: BadgeProps = {
  color: 'primary',
  outline: false
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-5-triển-khai-giao-diện-và-kiểu-dáng-scss`,children:`Bước 5. Triển khai giao diện và kiểu dáng SCSS`}),`
`,(0,c.jsxs)(t.p,{children:[`Mở tệp `,(0,c.jsx)(t.code,{children:`Badge.vue`}),` và thêm logic thành phần cùng kiểu dáng SCSS:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<script setup lang="ts">
import {
  BadgeDefaults,
  type BadgeEmits,
  type BadgeProps,
  type BadgeSlots
} from './types'

defineOptions({
  name: 'Badge'
})

withDefaults(defineProps<BadgeProps>(), BadgeDefaults)
defineEmits<BadgeEmits>()
defineSlots<BadgeSlots>()
<\/script>

<template>
  <div class="badge">
    <slot name="icon" />
    <slot>{{ label }}</slot>
  </div>
</template>

<style lang="scss">
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
`})}),`
`,(0,c.jsx)(t.h3,{id:`bước-6-cấu-hình-tài-liệu-và-xem-trước-trong-storybook`,children:`Bước 6. Cấu hình tài liệu và xem trước trong Storybook`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Để tự động tạo câu chuyện và tài liệu, kéo và thả tệp `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` vào cửa sổ chat với AI và yêu cầu thực hiện nhiệm vụ (nếu trong ô chat nút gửi đã kích hoạt sẵn, bạn có thể không cần viết gì thêm).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Trong tệp `,(0,c.jsx)(t.code,{children:`wiki/Badge.stories.ts`}),`, thiết lập các kịch bản sử dụng thực tế cho thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Trong tệp `,(0,c.jsx)(t.code,{children:`wiki/Badge.mdx`}),`, bổ sung mô tả văn bản, bảng thuộc tính và bản demo trực quan.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Chạy Storybook (`,(0,c.jsx)(t.code,{children:`npm run storybook`}),`) để kiểm tra hiển thị trực tiếp của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`làm-việc-với-thư-mục-materials-tài-liệu-thiết-kế`,children:`Làm việc với thư mục materials (Tài liệu thiết kế)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư mục `,(0,c.jsx)(t.code,{children:`materials/`}),` là không gian làm việc độc lập của thành phần dùng để thu thập tài liệu thiết kế gốc, đặc tả kỹ thuật và ngữ cảnh phát triển:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`prompt.md`})]}),`: Tệp hướng dẫn hệ thống cho trợ lý AI, tự động liên kết với tiêu chuẩn thiết kế (`,(0,c.jsx)(t.code,{children:`componentMaterials.md`}),`). Lập trình viên sẽ ghi liên kết Figma, mô tả trạng thái, props và các yêu cầu — tất cả những gì AI cần biết trước khi tạo mã.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tài nguyên thiết kế và ảnh chụp màn hình`}),`: Lưu trữ ảnh chụp từ Figma, tệp vector SVG, bản vẽ và sơ đồ trạng thái tại đây.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phát triển cùng AI`}),`: Kéo và thả tệp `,(0,c.jsx)(t.code,{children:`materials/prompt.md`}),` vào cửa sổ chat với AI và yêu cầu thực hiện nhiệm vụ (nếu nút gửi đã kích hoạt sẵn, bạn không cần viết gì thêm). AI sẽ tạo mã nguồn chuẩn xác theo yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu giữ ngữ cảnh dự án`}),`: Thư mục được lưu lại trong kho mã nguồn như một nguồn chân lý duy nhất cho các quyết định thiết kế của thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`làm-việc-với-thư-mục-wiki-tài-liệu-và-storybook`,children:`Làm việc với thư mục wiki (Tài liệu và Storybook)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư mục `,(0,c.jsx)(t.code,{children:`wiki/`}),` là không gian dành riêng cho các câu chuyện Storybook tương tác và tài liệu kỹ thuật của thành phần:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`[ComponentName].mdx`})]}),`: Bài viết tài liệu chính định dạng MDX tích hợp thành phần `,(0,c.jsx)(t.code,{children:`<StorybookMain />`}),` từ `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki/storybook`}),`, mô tả props và các bản demo tương tác.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`[ComponentName].stories.ts`})]}),`: Các câu chuyện Storybook Vue 3 có thể chạy được, minh họa các trạng thái, props và kịch bản sử dụng thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`prompt.md`})]}),`: Tệp hướng dẫn hệ thống dành cho trợ lý AI, tự động liên kết với tiêu chuẩn tài liệu (`,(0,c.jsx)(t.code,{children:`componentWiki.md`}),`). Lập trình viên có thể bổ sung các lưu ý, ví dụ và yêu cầu đặc thù về tài liệu tại đây.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo tài liệu cùng AI`}),`: Kéo và thả tệp `,(0,c.jsx)(t.code,{children:`wiki/prompt.md`}),` vào cửa sổ chat với AI và yêu cầu thực hiện nhiệm vụ (nếu nút gửi đã kích hoạt sẵn, bạn không cần viết gì thêm). AI sẽ phân tích mã nguồn, kiểu dữ liệu để tự động tạo câu chuyện Storybook và tài liệu hoàn chỉnh.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ưu-điểm-so-với-tạo-thủ-công`,children:`Ưu điểm so với tạo thủ công`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tốc độ vượt trội`}),`: Tạo toàn bộ 8 tệp trong chưa đầy 1 giây thay vì mất 5–10 phút làm thủ công.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính toàn vẹn kiến trúc`}),`: Tự động sinh đầy đủ các tệp cần thiết, bao gồm câu chuyện Storybook, kiểu dữ liệu và hướng dẫn cho AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độ chính xác 100%`}),`: Loại bỏ hoàn toàn lỗi chính tả trong tên lớp BEM, đường dẫn tương đối và tên kiểu dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sẵn sàng phát triển ngay`}),`: Thành phần có thể được mở và xem trước trong Storybook ngay sau khi lệnh hoàn tất.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};