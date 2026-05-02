import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToAbstract - Lớp chuyển đổi cơ sở`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoabstract`,children:`Lớp PropertiesToAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),` đóng vai trò là nền tảng cho tất cả các quy trình chuyển đổi thuộc tính (token) trong hệ thống. Nó xác định một vòng đời chuyển đổi chung, từ khởi tạo dữ liệu đến duy trì bộ nhớ đệm (cache).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêu chuẩn hóa vòng đời`}),` — đảm bảo thứ tự thực hiện nhất quán (`,(0,c.jsx)(n.code,{children:`init`}),` -> `,(0,c.jsx)(n.code,{children:`write`}),`) trên tất cả các lớp con.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp PropertiesItems`}),` — cung cấp khả năng quản lý tập trung các mục thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý bộ nhớ đệm`}),` — tự động hóa quá trình ghi các kết quả trung gian vào một tệp được chỉ định.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Vì đây là một lớp trừu tượng (abstract class), nó không thể được khởi tạo trực tiếp. Nó được thiết kế để được kế thừa bởi các lớp chuyển đổi cụ thể (ví dụ: để tạo SCSS hoặc JSON).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ về triển khai lớp con:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

class MyPropertiesTransformer extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'my-cache-file.json'

  protected init(): void {
    // Logic khởi tạo và chuyển đổi
    console.log('Transforming data...')
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Thực hiện chu kỳ chuyển đổi đầy đủ. Phương thức này là điểm vào công khai (public entry point) và đảm bảo một trình tự hành động nghiêm ngặt: khởi tạo dữ liệu và sau đó là ghi dữ liệu.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const transformer = new MyPropertiesTransformer(items);
transformer.to(); // Bắt đầu quy trình
`})}),`
`,(0,c.jsxs)(n.h3,{id:`init-trừu-tượng`,children:[(0,c.jsx)(n.code,{children:`init`}),` (trừu tượng)`]}),`
`,(0,c.jsx)(n.p,{children:`Một phương thức trừu tượng được bảo vệ (protected) phải được triển khai bởi các lớp con. Logic xử lý dữ liệu chính nên được tập trung trong phương thức này.`}),`
`,(0,c.jsxs)(n.h3,{id:`write-được-bảo-vệ`,children:[(0,c.jsx)(n.code,{children:`write`}),` (được bảo vệ)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Ghi trạng thái hiện tại của các mục thuộc tính (`,(0,c.jsx)(n.code,{children:`PropertiesItems`}),`) vào một tệp được xác định bởi đường dẫn `,(0,c.jsx)(n.code,{children:`FILE_CACHE`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`các-thuộc-tính`,children:`Các thuộc tính`}),`
`,(0,c.jsxs)(n.h3,{id:`file_cache-trừu-tượng`,children:[(0,c.jsx)(n.code,{children:`FILE_CACHE`}),` (trừu tượng)`]}),`
`,(0,c.jsx)(n.p,{children:`Một thuộc tính trừu tượng xác định đường dẫn tệp nơi lưu kết quả chuyển đổi. Nó phải được ghi đè (overridden) trong mọi lớp con cụ thể.`}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-một-bộ-chuyển-đổi-tùy-chỉnh-custom-transformer`,children:`Tạo một bộ chuyển đổi tùy chỉnh (Custom Transformer)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

export class PropertiesToCustom extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'custom-tokens.json'

  protected init(): void {
    // Ví dụ về sửa đổi dữ liệu trước khi ghi
    forEach(this.items, (item) => {
      item.myData = 'processed'
    })
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};