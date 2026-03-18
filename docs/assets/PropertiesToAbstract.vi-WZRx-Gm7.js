import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PropertiesToAbstract - Lớp chuyển đổi cơ sở"}),`
`,n.jsx(t.h1,{id:"lớp-propertiestoabstract",children:"Lớp PropertiesToAbstract"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"PropertiesToAbstract"})," đóng vai trò là nền tảng cho tất cả các quy trình chuyển đổi thuộc tính (token) trong hệ thống. Nó xác định một vòng đời chuyển đổi chung, từ khởi tạo dữ liệu đến duy trì bộ nhớ đệm (cache)."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tiêu chuẩn hóa vòng đời"})," — đảm bảo thứ tự thực hiện nhất quán (",n.jsx(t.code,{children:"init"})," -> ",n.jsx(t.code,{children:"write"}),") trên tất cả các lớp con."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tích hợp PropertiesItems"})," — cung cấp khả năng quản lý tập trung các mục thuộc tính."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Quản lý bộ nhớ đệm"})," — tự động hóa quá trình ghi các kết quả trung gian vào một tệp được chỉ định."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(t.p,{children:"Vì đây là một lớp trừu tượng (abstract class), nó không thể được khởi tạo trực tiếp. Nó được thiết kế để được kế thừa bởi các lớp chuyển đổi cụ thể (ví dụ: để tạo SCSS hoặc JSON)."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Ví dụ về triển khai lớp con:"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

class MyPropertiesTransformer extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'my-cache-file.json'

  protected init(): void {
    // Logic khởi tạo và chuyển đổi
    console.log('Transforming data...')
  }
}
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"to",children:n.jsx(t.code,{children:"to"})}),`
`,n.jsx(t.p,{children:"Thực hiện chu kỳ chuyển đổi đầy đủ. Phương thức này là điểm vào công khai (public entry point) và đảm bảo một trình tự hành động nghiêm ngặt: khởi tạo dữ liệu và sau đó là ghi dữ liệu."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`const transformer = new MyPropertiesTransformer(items);
transformer.to(); // Bắt đầu quy trình
`})}),`
`,n.jsxs(t.h3,{id:"init-trừu-tượng",children:[n.jsx(t.code,{children:"init"})," (trừu tượng)"]}),`
`,n.jsx(t.p,{children:"Một phương thức trừu tượng được bảo vệ (protected) phải được triển khai bởi các lớp con. Logic xử lý dữ liệu chính nên được tập trung trong phương thức này."}),`
`,n.jsxs(t.h3,{id:"write-được-bảo-vệ",children:[n.jsx(t.code,{children:"write"})," (được bảo vệ)"]}),`
`,n.jsxs(t.p,{children:["Ghi trạng thái hiện tại của các mục thuộc tính (",n.jsx(t.code,{children:"PropertiesItems"}),") vào một tệp được xác định bởi đường dẫn ",n.jsx(t.code,{children:"FILE_CACHE"}),"."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"})," ",n.jsx(t.code,{children:"void"})]}),`
`,n.jsx(t.h2,{id:"các-thuộc-tính",children:"Các thuộc tính"}),`
`,n.jsxs(t.h3,{id:"file_cache-trừu-tượng",children:[n.jsx(t.code,{children:"FILE_CACHE"})," (trừu tượng)"]}),`
`,n.jsx(t.p,{children:"Một thuộc tính trừu tượng xác định đường dẫn tệp nơi lưu kết quả chuyển đổi. Nó phải được ghi đè (overridden) trong mọi lớp con cụ thể."}),`
`,n.jsx(t.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(t.h3,{id:"tạo-một-bộ-chuyển-đổi-tùy-chỉnh-custom-transformer",children:"Tạo một bộ chuyển đổi tùy chỉnh (Custom Transformer)"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { PropertiesToAbstract, PropertiesItems } from '@dxtmisha/scripts'

export class PropertiesToCustom extends PropertiesToAbstract {
  protected readonly FILE_CACHE = 'custom-tokens.json'

  protected init(): void {
    // Ví dụ về sửa đổi dữ liệu trước khi ghi
    forEach(this.items, (item) => {
      item.myData = 'processed'
    })
  }
}
`})})]})}function a(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(r,{...c})}):r(c)}export{a as default};
