import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/1. UI/4. Cấu hình dữ liệu Wiki`}),`
`,(0,c.jsx)(t.h1,{id:`cấu-hình-dữ-liệu-wiki`,children:`Cấu hình dữ liệu Wiki`}),`
`,(0,c.jsxs)(t.p,{children:[`Để quản lý dữ liệu demo và các đối số Storybook trong một dự án cụ thể (ví dụ: `,(0,c.jsx)(t.code,{children:`d1`}),`), tệp `,(0,c.jsx)(t.code,{children:`src/wiki/wiki.ts`}),` được sử dụng. Tệp này cho phép bạn bổ sung hoặc ghi đè các cài đặt Wiki toàn cầu được định nghĩa trong gói chính `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`tại-sao-điều-này-lại-cần-thiết`,children:`Tại sao điều này lại cần thiết?`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`wiki.ts`}),` phục vụ như một điểm cấu hình trung tâm cho:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Ghi đè các giá trị mặc định toàn cầu cho các đối số Storybook (ví dụ: văn bản nút hoặc biểu tượng).`}),`
`,(0,c.jsx)(t.li,{children:`Cấu hình danh sách lựa chọn (options) cho các tài nguyên cụ thể của dự án.`}),`
`,(0,c.jsx)(t.li,{children:`Thêm dữ liệu demo độc nhất không có trong thư viện cơ sở.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cách-làm-việc-với-tệp`,children:`Cách làm việc với tệp`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong mỗi gói thành phần (ví dụ: `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`), tệp `,(0,c.jsx)(t.code,{children:`src/wiki/wiki.ts`}),` xuất bản một đối tượng kiểu `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),`. Đối tượng này nhập dữ liệu `,(0,c.jsx)(t.code,{children:`wiki`}),` cơ sở và sửa đổi chúng khi cần thiết.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StorybookControl, StorybookCategory, type StorybookArgsToList } from '@dxtmisha/wiki'
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
`,(0,c.jsx)(t.h2,{id:`nguyên-tắc-đặt-tên-khóa`,children:`Nguyên tắc đặt tên khóa`}),`
`,(0,c.jsxs)(t.p,{children:[`Việc lựa chọn tên khóa trong đối tượng `,(0,c.jsx)(t.code,{children:`wiki`}),` xác định phạm vi áp dụng của các cài đặt:`]}),`
`,(0,c.jsx)(t.h4,{id:`thuộc-tính-toàn-cầu`,children:`Thuộc tính toàn cầu`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu khóa chỉ bao gồm tên thuộc tính (ví dụ: `,(0,c.jsx)(t.code,{children:`value`}),`, `,(0,c.jsx)(t.code,{children:`size`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`), các cài đặt được coi là `,(0,c.jsx)(t.strong,{children:`toàn cầu`}),` (global). Chúng được tự động áp dụng cho tất cả các thành phần trong hệ thống có thuộc tính đó. Điều này hữu ích để xác định các mô tả hoặc kiểu điều khiển đồng nhất cho toàn bộ thư viện.`]}),`
`,(0,c.jsx)(t.h4,{id:`thuộc-tính-cụ-thể`,children:`Thuộc tính cụ thể`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu khóa chứa dấu chấm, nó được hiểu là `,(0,c.jsx)(t.code,{children:`[TênThànhPhần].[TênThuộcTính]`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`button.size`}),`, `,(0,c.jsx)(t.code,{children:`input.value`}),`).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Các cài đặt `,(0,c.jsx)(t.strong,{children:`chỉ được áp dụng cho thành phần được chỉ định`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Các giá trị này được ưu tiên hơn các cài đặt toàn cầu.`}),`
`,(0,c.jsx)(t.li,{children:`Cho phép xác định hành vi hoặc giá trị mặc định duy nhất cho một phần tử cụ thể mà không ảnh hưởng đến các phần tử khác.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-kiểu-dữ-liệu`,children:`Cấu trúc kiểu dữ liệu`}),`
`,(0,c.jsxs)(t.p,{children:[`Để cấu hình chính xác tệp `,(0,c.jsx)(t.code,{children:`wiki.ts`}),`, điều quan trọng là phải hiểu cấu trúc của các kiểu dữ liệu được sử dụng. Dưới đây là mô tả chi tiết về kiểu `,(0,c.jsx)(t.code,{children:`StorybookArgsToList`}),` chính và các thành phần của nó.`]}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstolist`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Đây là một kiểu bản ghi (`,(0,c.jsx)(t.code,{children:`Record`}),`) được sử dụng để cấu hình các đối số.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khóa (Key)`}),`: Tên đối số (chuỗi).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giá trị (Value)`}),`: Một đối tượng kiểu `,(0,c.jsx)(t.code,{children:`StorybookArgsToItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstoitem`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToItem`})}),`
`,(0,c.jsx)(t.p,{children:`Mô tả cấu hình của một điều khiển Storybook cụ thể.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: StorybookControl`}),` — xác định kiểu giao diện để điều khiển giá trị (trường văn bản, hộp kiểm, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: StorybookArgsToOptionsByType`}),` — đối tượng cho các cài đặt hành vi và hiển thị nâng cao.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDemo?: boolean`}),` — chỉ ra rằng tham số này chỉ dành cho mục đích demo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`demo?: any`}),` — dữ liệu demo sẽ được thay thế trong các ví dụ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`demoOptions?: Record<string, any>`}),` — các tùy chọn demo bổ sung cho phần tử.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hide?: boolean`}),` — cho phép ẩn tham số khỏi bảng đối số nếu nó thuần túy mang tính kỹ thuật.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`storybookargstooptionsbytype`,children:(0,c.jsx)(t.code,{children:`StorybookArgsToOptionsByType`})}),`
`,(0,c.jsx)(t.p,{children:`Một đối tượng để cấu hình siêu dữ liệu và các ràng buộc của đối số.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: StorybookCategory`}),` — tên danh mục để nhóm trong bảng (sử dụng các giá trị từ enum `,(0,c.jsx)(t.code,{children:`StorybookCategory`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type?: StorybookControl | string | string[]`}),` — kiểu dữ liệu hoặc kiểu điều khiển đích (ví dụ: `,(0,c.jsx)(t.code,{children:`'string'`}),`, `,(0,c.jsx)(t.code,{children:`['string', 'File']`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue?: string | number | boolean`}),` — giá trị sẽ được hiển thị là "mặc định" trong tài liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: any`}),` — giá trị hiện tại của đối số.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`description?: StorybookArgsToDescription`}),` (`,(0,c.jsx)(t.code,{children:`string | Record<string, string>`}),`) — mô tả của thuộc tính. Có thể là một chuỗi hoặc một đối tượng có bản dịch theo ngôn ngữ (`,(0,c.jsx)(t.code,{children:`en`}),`, `,(0,c.jsx)(t.code,{children:`ru`}),`, `,(0,c.jsx)(t.code,{children:`vi`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: (string | number)[] | Record<string, string>`}),` — danh sách các tùy chọn có sẵn để lựa chọn (có liên quan đến kiểu `,(0,c.jsx)(t.code,{children:`select`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min?: number`}),` / `,(0,c.jsx)(t.code,{children:`max?: number`}),` — giá trị tối thiểu và tối đa cho các điều khiển số.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`order?: number`}),` — chỉ số số để sắp xếp các đối số trong danh sách.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`các-enum`,children:`Các Enum`}),`
`,(0,c.jsx)(t.h4,{id:`storybookcontrol`,children:(0,c.jsx)(t.code,{children:`StorybookControl`})}),`
`,(0,c.jsx)(t.p,{children:`Xác định kiểu hiển thị của điều khiển:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text`}),` — trường văn bản.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string`}),` — trường nhập chuỗi ký tự.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`number`}),` — nhập số.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`boolean`}),` — hộp kiểm (true/false).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`select`}),` — danh sách thả xuống (yêu cầu điền `,(0,c.jsx)(t.code,{children:`options`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array`}),` — nhập mảng giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`object`}),` — trình chỉnh sửa cho các đối tượng JSON.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`storybookcategory`,children:(0,c.jsx)(t.code,{children:`StorybookCategory`})}),`
`,(0,c.jsx)(t.p,{children:`Được sử dụng để nhóm các thuộc tính vào các khối logic:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`actions`}),` (`,(0,c.jsx)(t.code,{children:`'Actions'`}),`) — hành động và sự kiện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`adaptive`}),` (`,(0,c.jsx)(t.code,{children:`'Adaptive'`}),`) — các tham số về khả năng đáp ứng và căn chỉnh thích ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`aria`}),` (`,(0,c.jsx)(t.code,{children:`'ARIA'`}),`) — các thuộc tính trợ năng (ARIA).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`arrow`}),` (`,(0,c.jsx)(t.code,{children:`'Arrow'`}),`) — các tham số mũi tên và chỉ hướng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`attributes`}),` (`,(0,c.jsx)(t.code,{children:`'Attributes'`}),`) — các thuộc tính HTML và thuộc tính hệ thống.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`bars`}),` (`,(0,c.jsx)(t.code,{children:`'Bars'`}),`) — các tham số thanh, bảng điều khiển và chỉ báo tiến trình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`counter`}),` (`,(0,c.jsx)(t.code,{children:`'Counter'`}),`) — các tham số bộ đếm và huy hiệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`form`}),` (`,(0,c.jsx)(t.code,{children:`'Form'`}),`) — các thuộc tính biểu mẫu và phần tử nhập liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hook`}),` (`,(0,c.jsx)(t.code,{children:`'Hook'`}),`) — các tham số hook và hàm composable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon`}),` (`,(0,c.jsx)(t.code,{children:`'Icon'`}),`) — các tham số biểu tượng (icon).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`information`}),` (`,(0,c.jsx)(t.code,{children:`'Information'`}),`) — các thuộc tính thông tin và chú thích.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask`}),` (`,(0,c.jsx)(t.code,{children:`'Mask'`}),`) — các tham số mặt nạ nhập liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`option`}),` (`,(0,c.jsx)(t.code,{children:`'Options'`}),`) — các tùy chọn và danh sách lựa chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search`}),` (`,(0,c.jsx)(t.code,{children:`'Search'`}),`) — các tham số tìm kiếm và bộ lọc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`sort`}),` (`,(0,c.jsx)(t.code,{children:`'Sort'`}),`) — các tham số sắp xếp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`status`}),` (`,(0,c.jsx)(t.code,{children:`'Status'`}),`) — các trạng thái thành phần (đang tải, lỗi, hoạt động, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`style`}),` (`,(0,c.jsx)(t.code,{children:`'Styles'`}),`) — các tham số ngoại hình và phong cách.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`technical`}),` (`,(0,c.jsx)(t.code,{children:`'Technical'`}),`) — các cài đặt kỹ thuật và nội bộ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text`}),` (`,(0,c.jsx)(t.code,{children:`'Text'`}),`) — các tham số văn bản và kiểu chữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value`}),` (`,(0,c.jsx)(t.code,{children:`'Values'`}),`) — các giá trị chính của thành phần.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};