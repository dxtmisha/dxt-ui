import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesTypes - Các kiểu thuộc tính`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestypes`,children:`Lớp PropertiesTypes`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` đóng vai trò là một danh mục hệ thống và bộ phân tích cho các kiểu thuộc tính trong hệ thống thiết kế. Nhiệm vụ chính của nó là xác định danh mục thuộc tính (biến, bộ chọn, trạng thái, truy vấn truyền thông, v.v.) dựa trên các biểu tượng tiền tố đặc biệt hoặc các quy ước đặt tên khóa.`]}),`
`,(0,c.jsx)(t.h2,{id:`ánh-xạ-biểu-tượng-và-kiểu`,children:`Ánh xạ Biểu tượng và Kiểu`}),`
`,(0,c.jsx)(t.p,{children:`Hệ thống sử dụng các ánh xạ biểu tượng sang kiểu như sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`$`}),` — `,(0,c.jsx)(t.strong,{children:`var`}),` (biến CSS)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`::`}),` — `,(0,c.jsx)(t.strong,{children:`virtual`}),` (phần tử ảo)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`:`}),` — `,(0,c.jsx)(t.strong,{children:`selector`}),` (bộ chọn SCSS)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`~`}),` — `,(0,c.jsx)(t.strong,{children:`state`}),` (trạng thái, ví dụ: :hover)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`#`}),` — `,(0,c.jsx)(t.strong,{children:`subclass`}),` (lớp con)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@@`}),` — `,(0,c.jsx)(t.strong,{children:`linkClass`}),` (liên kết đến một lớp)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@`}),` — `,(0,c.jsx)(t.strong,{children:`link`}),` (liên kết đến một token)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&&`}),` — `,(0,c.jsx)(t.strong,{children:`root`}),` (SCSS @at-root)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`&`}),` — `,(0,c.jsx)(t.strong,{children:`scss`}),` (bộ chọn SCSS)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`--`}),` — `,(0,c.jsx)(t.strong,{children:`none`}),` (thuộc tính bị bỏ qua)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này chỉ chứa các phương thức tĩnh và không yêu cầu khởi tạo thông qua `,(0,c.jsx)(t.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

// Sử dụng các phương thức tĩnh
const type = PropertiesTypes.getTypeInName('$primary-color')
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`isintype`,children:(0,c.jsx)(t.code,{children:`isInType`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem kiểu thuộc tính hiện tại có nằm trong danh sách các kiểu được cho phép hay không. Được sử dụng để lọc các thuộc tính trong quá trình tạo các khối cụ thể (ví dụ: chỉ các truy vấn truyền thông).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: PropertyItem['_type']`}),` — kiểu thuộc tính cần xác minh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: PropertyType[]`}),` — một mảng các kiểu được cho phép.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu kiểu khớp với một kiểu trong danh sách.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const isMedia = PropertiesTypes.isInType(type, ['media', 'media-max']);
`})}),`
`,(0,c.jsx)(t.h3,{id:`istypeinname`,children:(0,c.jsx)(t.code,{children:`isTypeInName`})}),`
`,(0,c.jsx)(t.p,{children:`Xác định xem chuỗi tên (khóa) được cung cấp có chứa bất kỳ biểu tượng kiểu dành riêng nào ở đầu hay không.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên khóa thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu xác định được biểu tượng kiểu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const hasSymbol = PropertiesTypes.isTypeInName('$myVar');
// Kết quả: true
`})}),`
`,(0,c.jsx)(t.h3,{id:`iscontainertype-propertyitem_type-boolean`,children:(0,c.jsx)(t.code,{children:`isContainer(type: PropertyItem['_type']): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem kiểu thuộc tính có thuộc kiểu container query hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`isscssname-string-boolean`,children:(0,c.jsx)(t.code,{children:`isScss(name: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem tên thuộc tính có phải là biến SCSS đặc biệt hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`isrootname-string-boolean`,children:(0,c.jsx)(t.code,{children:`isRoot(name: string): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem thuộc tính có áp dụng cho cấp gốc (:root) hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`ismedia`,children:(0,c.jsx)(t.code,{children:`isMedia`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một kiểm tra chuyên biệt để xác định xem kiểu thuộc tính có liên quan đến các truy vấn truyền thông hay không (`,(0,c.jsx)(t.code,{children:`media`}),` hoặc `,(0,c.jsx)(t.code,{children:`media-max`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: PropertyItem['_type']`}),` — kiểu thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu đó là kiểu truyền thông.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`if (PropertiesTypes.isMedia(item.type)) { /* ... */ }
`})}),`
`,(0,c.jsx)(t.h3,{id:`gettypeinname`,children:(0,c.jsx)(t.code,{children:`getTypeInName`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức chính để trích xuất kiểu từ một tên khóa. Nếu tìm thấy một biểu tượng đặc biệt ở đầu khóa, phương thức sẽ trả về kiểu tương ứng của nó. Nếu không tìm thấy biểu tượng nhưng khóa chứa dấu phân cách `,(0,c.jsx)(t.code,{children:`|`}),`, phần trước dấu phân cách sẽ được chuyển đổi sang kebab-case và được trả về làm kiểu.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên khóa thuộc tính.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`PropertyItem['_type']`}),` — ID kiểu đã xác định hoặc `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const type1 = PropertiesTypes.getTypeInName('$color'); // 'var'
const type2 = PropertiesTypes.getTypeInName('custom|value'); // 'custom'
`})}),`
`,(0,c.jsx)(t.h3,{id:`getbysymbol`,children:(0,c.jsx)(t.code,{children:`getBySymbol`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về tên kiểu được gán cho một biểu tượng hoặc chuỗi cụ thể.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — biểu tượng (ví dụ: `,(0,c.jsx)(t.code,{children:`$`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — tên kiểu (ví dụ: `,(0,c.jsx)(t.code,{children:`var`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const typeName = PropertiesTypes.getBySymbol('$'); // 'var'
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`cơ-chế-nhận-dạng-qua-regexp`,children:`Cơ chế nhận dạng qua RegExp`}),`
`,(0,c.jsxs)(t.p,{children:[`Việc tìm kiếm biểu tượng trong `,(0,c.jsx)(t.code,{children:`PropertiesTypes`}),` được thực hiện thông qua một biểu thức chính quy động được tạo từ các khóa từ điển `,(0,c.jsx)(t.code,{children:`SYMBOLS`}),`. Phương thức `,(0,c.jsx)(t.code,{children:`getExpSymbols`}),` tạo ra một biểu thức để:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Tìm kiếm các biểu tượng dành riêng ở đầu chuỗi (ví dụ: `,(0,c.jsx)(t.code,{children:`@`}),`, `,(0,c.jsx)(t.code,{children:`&&`}),`, `,(0,c.jsx)(t.code,{children:`~`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tìm kiếm các kiểu tự định nghĩa được đặt tên trước một dấu gạch đứng (ví dụ: `,(0,c.jsx)(t.code,{children:`media|...`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nhóm các kết quả để trích xuất kiểu hiệu quả bằng phương thức `,(0,c.jsx)(t.code,{children:`getTypeInName`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(t.h3,{id:`xác-định-các-kiểu-trong-quá-trình-phân-tích-token`,children:`Xác định các kiểu trong quá trình phân tích Token`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesTypes } from '@dxtmisha/scripts'

const keys = ['$primary', ':hover', '@link'];

keys.forEach(key => {
  console.log(\`\${key} is type: \${PropertiesTypes.getTypeInName(key)}\`);
});
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};