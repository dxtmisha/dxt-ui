import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/# Cấu hình dữ liệu Wiki`}),`
`,(0,c.jsx)(n.h1,{id:`cấu-hình-dữ-liệu-wiki`,children:`Cấu hình dữ liệu Wiki`}),`
`,(0,c.jsxs)(n.p,{children:[`Để quản lý dữ liệu demo và các đối số Storybook trong một dự án cụ thể (ví dụ: `,(0,c.jsx)(n.code,{children:`d1`}),`), tệp `,(0,c.jsx)(n.code,{children:`src/wiki/wiki.ts`}),` được sử dụng. Tệp này cho phép bạn bổ sung hoặc ghi đè các cài đặt Wiki toàn cầu được định nghĩa trong gói chính `,(0,c.jsx)(n.code,{children:`@dxtmisha/wiki`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`tại-sao-điều-này-lại-cần-thiết`,children:`Tại sao điều này lại cần thiết?`}),`
`,(0,c.jsxs)(n.p,{children:[`Tệp `,(0,c.jsx)(n.code,{children:`wiki.ts`}),` phục vụ như một điểm cấu hình trung tâm cho:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Ghi đè các giá trị mặc định toàn cầu cho các đối số Storybook (ví dụ: văn bản nút hoặc biểu tượng).`}),`
`,(0,c.jsx)(n.li,{children:`Cấu hình danh sách lựa chọn (options) cho các tài nguyên cụ thể của dự án.`}),`
`,(0,c.jsx)(n.li,{children:`Thêm dữ liệu demo độc nhất không có trong thư viện cơ sở.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cách-làm-việc-với-tệp`,children:`Cách làm việc với tệp`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong mỗi gói thành phần (ví dụ: `,(0,c.jsx)(n.code,{children:`@dxtmisha/d1`}),`), tệp `,(0,c.jsx)(n.code,{children:`src/wiki/wiki.ts`}),` xuất bản một đối tượng kiểu `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),`. Đối tượng này nhập dữ liệu `,(0,c.jsx)(n.code,{children:`wiki`}),` cơ sở và sửa đổi chúng khi cần thiết.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StorybookControl, StorybookCategory, type StorybookArgsToList } from '@dxtmisha/wiki'
import { wiki } from '@dxtmisha/wiki/media'

export const wikiD1: StorybookArgsToList = {
  // 1. Kế thừa: Ghi đè đối số hiện có 'image.value'
  'image.value': {
    ...wiki['image.value'],
    options: {
      ...wiki['image.value']?.options,
      value: 'mail-01'
    }
  },

  // 2. Tham số mới: Tạo một thuộc tính hoàn toàn mới
  'my.new.parameter': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.technical,
      description: 'Mô tả của một tham số hoàn toàn mới không có trong cơ sở',
      value: 'Giá trị mặc định'
    }
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`nguyên-tắc-đặt-tên-khóa`,children:`Nguyên tắc đặt tên khóa`}),`
`,(0,c.jsxs)(n.p,{children:[`Việc lựa chọn tên khóa trong đối tượng `,(0,c.jsx)(n.code,{children:`wiki`}),` xác định phạm vi áp dụng của các cài đặt:`]}),`
`,(0,c.jsx)(n.h4,{id:`thuộc-tính-toàn-cầu`,children:`Thuộc tính toàn cầu`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu khóa chỉ bao gồm tên thuộc tính (ví dụ: `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`size`}),`, `,(0,c.jsx)(n.code,{children:`text`}),`), các cài đặt được coi là `,(0,c.jsx)(n.strong,{children:`toàn cầu`}),` (global). Chúng được tự động áp dụng cho tất cả các thành phần trong hệ thống có thuộc tính đó. Điều này hữu ích để xác định các mô tả hoặc kiểu điều khiển đồng nhất cho toàn bộ thư viện.`]}),`
`,(0,c.jsx)(n.h4,{id:`thuộc-tính-cụ-thể`,children:`Thuộc tính cụ thể`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu khóa chứa dấu chấm, nó được hiểu là `,(0,c.jsx)(n.code,{children:`[TênThànhPhần].[TênThuộcTính]`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`button.size`}),`, `,(0,c.jsx)(n.code,{children:`input.value`}),`).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Các cài đặt `,(0,c.jsx)(n.strong,{children:`chỉ được áp dụng cho thành phần được chỉ định`}),`.`]}),`
`,(0,c.jsx)(n.li,{children:`Các giá trị này được ưu tiên hơn các cài đặt toàn cầu.`}),`
`,(0,c.jsx)(n.li,{children:`Cho phép xác định hành vi hoặc giá trị mặc định duy nhất cho một phần tử cụ thể mà không ảnh hưởng đến các phần tử khác.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-kiểu-dữ-liệu`,children:`Cấu trúc kiểu dữ liệu`}),`
`,(0,c.jsxs)(n.p,{children:[`Để cấu hình chính xác tệp `,(0,c.jsx)(n.code,{children:`wiki.ts`}),`, điều quan trọng là phải hiểu cấu trúc của các kiểu dữ liệu được sử dụng. Dưới đây là mô tả chi tiết về kiểu `,(0,c.jsx)(n.code,{children:`StorybookArgsToList`}),` chính và các thành phần của nó.`]}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstolist`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đây là một kiểu bản ghi (`,(0,c.jsx)(n.code,{children:`Record`}),`) được sử dụng để cấu hình các đối số.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khóa (Key)`}),`: Tên đối số (chuỗi).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giá trị (Value)`}),`: Một đối tượng kiểu `,(0,c.jsx)(n.code,{children:`StorybookArgsToItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstoitem`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToItem`})}),`
`,(0,c.jsx)(n.p,{children:`Mô tả cấu hình của một điều khiển Storybook cụ thể.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: StorybookControl`}),` — xác định kiểu giao diện để điều khiển giá trị (trường văn bản, hộp kiểm, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: StorybookArgsToOptionsByType`}),` — một đối tượng cho các cài đặt hành vi và hiển thị nâng cao.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDemo?: boolean`}),` — chỉ ra rằng tham số này chỉ dành cho mục đích demo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`demo?: any`}),` — dữ liệu demo sẽ được thay thế trong các ví dụ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hide?: boolean`}),` — cho phép ẩn tham số khỏi bảng đối số nếu nó thuần túy mang tính kỹ thuật.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`storybookargstooptionsbytype`,children:(0,c.jsx)(n.code,{children:`StorybookArgsToOptionsByType`})}),`
`,(0,c.jsx)(n.p,{children:`Một đối tượng để cấu hình siêu dữ liệu và các ràng buộc của đối số.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`category?: StorybookCategory`}),` — tên danh mục để nhóm trong bảng (sử dụng các giá trị từ enum `,(0,c.jsx)(n.code,{children:`StorybookCategory`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: any`}),` — giá trị hiện tại của đối số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: string | number | boolean`}),` — giá trị sẽ được hiển thị là "mặc định" trong tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description?: string | Record<string, string>`}),` — mô tả của thuộc tính. Có thể là một chuỗi hoặc một đối tượng cho các ngôn ngữ khác nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: string[] | Record<string, string>`}),` — danh sách các tùy chọn có sẵn để lựa chọn (có liên quan đến các kiểu `,(0,c.jsx)(n.code,{children:`select`}),` hoặc `,(0,c.jsx)(n.code,{children:`radio`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min?: number`}),` / `,(0,c.jsx)(n.code,{children:`max?: number`}),` — giá trị tối thiểu và tối đa cho các điều khiển số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`order?: number`}),` — chỉ số số để sắp xếp các đối số trong danh sách.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h3,{id:`các-enum`,children:`Các Enum`}),`
`,(0,c.jsx)(n.h4,{id:`storybookcontrol`,children:(0,c.jsx)(n.code,{children:`StorybookControl`})}),`
`,(0,c.jsx)(n.p,{children:`Xác định kiểu hiển thị của điều khiển:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text`}),` — trường văn bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`boolean`}),` — hộp kiểm (true/false).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`number`}),` — nhập số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`select`}),` — danh sách thả xuống (yêu cầu điền `,(0,c.jsx)(n.code,{children:`options`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`object`}),` — trình chỉnh sửa cho các đối tượng JSON.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`storybookcategory`,children:(0,c.jsx)(n.code,{children:`StorybookCategory`})}),`
`,(0,c.jsx)(n.p,{children:`Được sử dụng để nhóm các thuộc tính vào các khối logic:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Values`}),` — các giá trị chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Styles`}),` — các tham số ngoại hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Technical`}),` — các cài đặt kỹ thuật và nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Adaptive`}),` — các tham số về khả năng đáp ứng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Status`}),` — các trạng thái của thành phần.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};