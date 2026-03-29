import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/SearchList - Quản lý Danh sách Tìm kiếm Nâng cao`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-searchlist`,children:`Lớp SearchList`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`SearchList`}),` là điểm truy cập chính để triển khai các danh sách có thể tìm kiếm. Nó điều phối giữa việc lưu trữ dữ liệu, trạng thái thành phần tìm kiếm, logic so khớp và các tùy chọn cấu hình để cung cấp trải nghiệm tìm kiếm liền mạch.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tìm kiếm được điều phối`}),` — tự động cập nhật trình so khớp và tạo lại kết quả khi giá trị tìm kiếm hoặc dữ liệu thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả linh hoạt`}),` — cung cấp phương thức `,(0,c.jsx)(n.code,{children:`to()`}),` trả về toàn bộ danh sách hoặc các kết quả đã được lọc với các phần làm nổi bật HTML tùy chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp dễ dàng`}),` — API đơn giản để thiết lập dữ liệu, cột và giá trị tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ "Trả về tất cả" (Return Everything)`}),` — có thể được cấu hình để hiển thị toàn bộ danh sách với các phần nổi bật tại các điểm khớp, hoặc chỉ các thành phần khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hiệu suất tối ưu`}),` — sử dụng tiện ích `,(0,c.jsx)(n.code,{children:`forEach`}),` toàn cục để xử lý nhanh khi tìm kiếm không hoạt động, bỏ qua việc tạo bộ nhớ đệm để đạt hiệu quả tối đa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`SearchList(list, columns, value, options)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: T[]`}),` — mảng dữ liệu ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns?: string[]`}),` — các đường dẫn thuộc tính để tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: string`}),` — giá trị tìm kiếm ban đầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — cấu hình tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Lấy kết quả đã được lọc và làm nổi bật
const results = search.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-dữ-liệu`,children:`Quản lý dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`to()`}),` xử lý danh sách dữ liệu hiện tại dựa trên truy vấn tìm kiếm và trả về một mảng kết quả đã được định dạng.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`SearchFormatList<T, K>`}),` — một danh sách các mục trong đó mỗi trường có thể tìm kiếm được bổ sung thêm thuộc tính `,(0,c.jsx)(n.code,{children:`...Search`}),` chứa các phần làm nổi bật HTML.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Hành vi:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tìm kiếm đang hoạt động`}),`: Nếu độ dài chuỗi tìm kiếm lớn hơn hoặc bằng `,(0,c.jsx)(n.code,{children:`limit`}),`, nó sẽ lọc danh sách (trừ khi `,(0,c.jsx)(n.code,{children:`returnEverything`}),` là true) và áp dụng các thẻ làm nổi bật cho văn bản khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tìm kiếm không hoạt động`}),`: Nếu chuỗi tìm kiếm trống hoặc quá ngắn, nó sẽ trả về các mục danh sách ban đầu được định dạng với các thuộc tính tìm kiếm của chúng, nhưng không có bất kỳ phần làm nổi bật nào và với `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Đã tìm thấy mục khớp: \${item.nameSearch}\`)
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin-getters`,children:`Thông tin (Getters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getData(): SearchListData`}),` — Trả về thực thể quản lý dữ liệu nội bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): T[]`}),` — Trả về danh sách dữ liệu nguồn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getColumns(): string[] | undefined`}),` — Trả về các cột tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): SearchListItem`}),` — Trả về thực thể trạng thái thành phần tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getValue(): string | undefined`}),` — Trả về chuỗi tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getOptions(): SearchListOptions`}),` — Trả về thực thể quản lý tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setList(list: T[]): this`}),` — Thiết lập danh sách dữ liệu mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setColumns(columns?: string[]): this`}),` — Thiết lập các cột tìm kiếm mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setValue(value?: string): this`}),` — Thiết lập giá trị tìm kiếm mới và kích hoạt cập nhật trình so khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setOptions(options: SearchOptions): this`}),` — Thiết lập các tùy chọn tìm kiếm mới.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(n.h3,{id:`searchoptions`,children:`SearchOptions`}),`
`,(0,c.jsxs)(n.p,{children:[`Đối tượng cấu hình cho hành vi của `,(0,c.jsx)(n.code,{children:`SearchList`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — độ dài ký tự tối thiểu để kích hoạt tìm kiếm (mặc định: `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, trả về tất cả các mục thay vì lọc; các mục không khớp sẽ có `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — độ trễ debounce tính bằng mili giây (được sử dụng bởi các thành phần cấp cao hơn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, sử dụng chế độ "Phân đoạn chính xác"; nếu không sẽ sử dụng "Chứa tất cả các từ".`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — lớp CSS tùy chỉnh cho các thẻ làm nổi bật `,(0,c.jsx)(n.code,{children:`<span />`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchformatitem`,children:`SearchFormatItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Cấu trúc của một mục được trả về bởi phương thức `,(0,c.jsx)(n.code,{children:`to()`}),`. Nó bao gồm tất cả các trường ban đầu từ mục dữ liệu cộng với các trường liên quan đến tìm kiếm động:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key]Search: string`}),` — (Động) giá trị của cột tương ứng, có thể chứa các thẻ `,(0,c.jsx)(n.code,{children:`<span />`}),` cho các phần khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`searchActive?: boolean`}),` — cờ boolean cho biết mục đó có khớp với tiêu chí tìm kiếm hiện tại hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`searchformatlist`,children:`SearchFormatList`}),`
`,(0,c.jsxs)(n.p,{children:[`Danh sách các mục tìm kiếm đã được định dạng:
`,(0,c.jsx)(n.code,{children:`type SearchFormatList<T, K> = SearchFormatItem<T, K>[]`})]}),`
`,(0,c.jsx)(n.h3,{id:`searchitem`,children:`SearchItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Một đối tượng chung có thể được tìm kiếm:
`,(0,c.jsx)(n.code,{children:`type SearchItem = Record<string, any>`})]}),`
`,(0,c.jsx)(n.h3,{id:`searchlistvalue`,children:`SearchListValue`}),`
`,(0,c.jsxs)(n.p,{children:[`Giá trị danh sách đầu vào:
`,(0,c.jsx)(n.code,{children:`type SearchListValue<T> = T[] | undefined`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};