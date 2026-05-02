import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/# Tạo và quản lý thành phần`}),`
`,(0,c.jsx)(n.h1,{id:`tạo-và-quản-lý-thành-phần`,children:`Tạo và quản lý thành phần`}),`
`,(0,c.jsxs)(n.p,{children:[`Quy trình phát triển trong hệ thống `,(0,c.jsx)(n.strong,{children:`DXT UI`}),` được tự động hóa tối đa bằng các mã lệnh tạo mã. Ý tưởng cốt lõi là nhà phát triển mô tả siêu dữ liệu của thành phần, và hệ thống sẽ tự động tạo và cập nhật các tệp cần thiết (props, styles, templates).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
npm run ui [ComponentName]
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Lệnh `,(0,c.jsx)(n.code,{children:`npm run ui`}),` là công cụ chính để làm việc với các thành phần. Nó tự động quét các thư mục, tìm các thư mục mới hoặc bị thay đổi và đồng bộ hóa tất cả các tệp liên quan (`,(0,c.jsx)(n.code,{children:`props.ts`}),`, `,(0,c.jsx)(n.code,{children:`styleToken.scss`}),`, `,(0,c.jsx)(n.code,{children:`.vue`}),`) dựa trên dữ liệu trong `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Để tạo hoặc cập nhật một thành phần cụ thể, chỉ cần chạy lệnh sau khi thực hiện thay đổi đối với thư mục của nó.`}),`
`,(0,c.jsx)(n.li,{children:`Để xây dựng lại hoàn toàn thư viện và cập nhật tất cả các xuất bản (exports), hãy chạy lệnh mà không có tham số.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tạo-một-thành-phần-mới`,children:`Tạo một thành phần mới`}),`
`,(0,c.jsx)(n.p,{children:`Để tạo một thành phần mới từ đầu, hãy làm theo các bước sau:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo thư mục`}),`: Trong thư mục `,(0,c.jsx)(n.code,{children:`src/components/Ui/`}),` (hoặc trong dự án của bạn), hãy tạo một thư mục mới với tên của thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`MyButton`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo thành phần`}),`: Thực thi lệnh `,(0,c.jsx)(n.code,{children:`ui`}),` (hoặc `,(0,c.jsx)(n.code,{children:`npm run ui`}),`). Mã lệnh sẽ tự động phát hiện thư mục mới và tạo các tệp cần thiết bên trong đó.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hệ thống sẽ tạo tệp `,(0,c.jsx)(n.code,{children:`properties.json`}),` với cấu trúc cơ bản, cùng với tất cả các tệp hỗ trợ (props, styles, vue).`]}),`
`,(0,c.jsxs)(n.ol,{start:`3`,children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điền các thuộc tính`}),`: Chỉnh sửa tệp `,(0,c.jsx)(n.code,{children:`properties.json`}),` đã tạo bằng cách thêm các bộ sửa đổi và token.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa các thay đổi`}),`: Chạy lại lệnh `,(0,c.jsx)(n.code,{children:`ui`}),` để cập nhật tất cả các tệp liên quan dựa trên các thay đổi của bạn.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})}),`
`,(0,c.jsx)(n.h3,{id:`kết-quả-tạo-mã`,children:`Kết quả tạo mã`}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống sẽ tự động tạo các tệp sau dựa trên siêu dữ liệu của bạn và constructor đã chọn:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — các thuộc tính được định kiểu mở rộng từ constructor và xác định các giá trị mặc định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — các SCSS token và mixin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`DesignComponent.vue`}),` — thành phần Vue chính với logic khởi tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),`, `,(0,c.jsx)(n.code,{children:`wiki.ts`}),`, `,(0,c.jsx)(n.code,{children:`stories.ts`}),` — các tệp xuất bản, tài liệu và câu chuyện (stories).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Trong tệp `,(0,c.jsx)(n.code,{children:`.vue`}),` được tạo, khi khởi tạo lớp `,(0,c.jsx)(n.code,{children:`Design`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`BarsDesign`}),`), bạn có thể truyền một đối tượng `,(0,c.jsx)(n.code,{children:`components`}),`. Điều này cho phép bạn kết nối các thành phần con cần thiết để thành phần hiện tại hoạt động (ví dụ: các biểu tượng hoặc chỉ báo tiến trình).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Chỉ kết nối các thành phần thực sự được sử dụng. Nếu một thành phần phụ thuộc (ví dụ: `,(0,c.jsx)(n.code,{children:`ripple`}),`) không cần thiết trong việc triển khai của bạn, nó có thể được bỏ qua khỏi đối tượng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Để quản lý các thuộc tính của thành phần con, hãy sử dụng tham số `,(0,c.jsx)(n.code,{children:`compMod`}),`. Điều này cho phép bạn truyền các giá trị mặc định cho các pro của các phần tử bên trong (ví dụ: đặt kích thước hoặc kiểu nút bên trong một bảng điều khiển điều hướng).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const design = new BarsDesign('my.bars', props, {
  emits,
  classes: classesToken,
  components: {
    button: MyButton
  },
  compMod: {
    button: {
      text: true,
      size: 'xs',
      inverse: true
    }
  }
})

### Làm việc với Props và các giá trị mặc định

Tệp \`props.ts\` chứa một đối tượng \`defaults\` kết hợp các giá trị tiêu chuẩn từ constructor với các cài đặt cụ thể cho thành phần của bạn.

Ví dụ trong tệp \`props.ts\`:
\`\`\`typescript
export const defaults: object = {
  ...defaultsBars,
  iconBack: 'arrow_back',
  paddingByIndent: true
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`cập-nhật-một-thành-phần`,children:`Cập nhật một thành phần`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn cần thay đổi các thuộc tính của thành phần (thêm một bộ sửa đổi, thay đổi một token hoặc giá trị CSS), hãy tuân theo quy tắc `,(0,c.jsx)(n.strong,{children:`"Nguồn dữ liệu duy nhất" (Source of Truth)`}),`:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Chỉnh sửa tệp `,(0,c.jsx)(n.code,{children:`properties.json`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Chạy lại lệnh:`,`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui MyButton
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Mã lệnh sẽ tự động cập nhật `,(0,c.jsx)(n.code,{children:`props.ts`}),` (thêm các kiểu mới), `,(0,c.jsx)(n.code,{children:`styleToken.scss`}),` (cập nhật biến) và các bản mẫu trong khi vẫn duy trì tính toàn vẹn của kiến trúc.`]}),`
`,(0,c.jsx)(n.h2,{id:`xây-dựng-lại-toàn-bộ-thư-viện`,children:`Xây dựng lại toàn bộ thư viện`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi làm việc đồng thời trên nhiều thành phần hoặc nếu bạn muốn cập nhật các xuất bản thư viện toàn cầu (media, plugin, type), hãy sử dụng lệnh `,(0,c.jsx)(n.code,{children:`ui`}),` mà không cần đối số:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-bash`,children:`npm run ui
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};