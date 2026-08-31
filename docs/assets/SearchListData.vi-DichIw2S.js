import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/SearchListData - Quản lý Dữ liệu Tìm kiếm`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-searchlistdata`,children:`Lớp SearchListData`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`SearchListData`}),` quản lý danh sách dữ liệu nguồn và bộ nhớ đệm (cache) tìm kiếm liên quan. Nó xử lý việc định dạng các thành phần, trích xuất các giá trị từ các đường dẫn lồng nhau và áp dụng các thẻ làm nổi bật (highlight tags) cho các chuỗi khớp.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khởi tạo trễ (Lazy Initialization)`}),` — thực hiện tạo bộ nhớ đệm theo yêu cầu, đảm bảo chi phí hiệu suất chỉ xảy ra khi tìm kiếm đang được thực hiện tích cực.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm tìm kiếm`}),` — tạo ra một biểu diễn chuỗi phẳng của các cột được chỉ định cho mỗi thành phần để cho phép tìm kiếm nhanh chóng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ đường dẫn lồng nhau`}),` — khả năng trích xuất dữ liệu từ các cấu trúc đối tượng sâu (ví dụ: `,(0,c.jsx)(t.code,{children:`'user.profile.name'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Làm nổi bật tự động`}),` — bao quanh các phần khớp của chuỗi trong các thẻ HTML để phản hồi trực quan.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng CamelCase`}),` — biến đổi các đường dẫn cột thành các tên thuộc tính tiện lợi (ví dụ: `,(0,c.jsx)(t.code,{children:`'user.name'`}),` trở thành `,(0,c.jsx)(t.code,{children:`'userNameSearch'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`SearchListData(list, columns, item, options)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: T[]`}),` — mảng ban đầu của các thành phần dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns?: string[]`}),` — một mảng các đường dẫn thuộc tính để tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SearchListItem`}),` — trạng thái thành phần tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: SearchListOptions`}),` — các tùy chọn cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { SearchListData, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions()
const item = new SearchListItem('alice', options)
const data = new SearchListData(
  [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
  ['name'],
  item,
  options
)

const results = data.forEach((origItem, value) => {
  return data.toFormatItem(origItem, true)
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): boolean`}),` — Kiểm tra xem cả danh sách và các cột đã được khởi tạo hay chưa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isList(): boolean`}),` — Kiểm tra xem danh sách nguồn có được cung cấp hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): T[]`}),` — Trả về danh sách dữ liệu ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getColumns(): string[] | undefined`}),` — Trả về các cột tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findCacheItem(item: T)`}),` — Tìm thành phần tìm kiếm đã lưu trong bộ nhớ đệm cho một thành phần gốc cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setList(list: T[]): this`}),` — Cập nhật danh sách dữ liệu và tạo lại bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setColumns(columns?: string[]): this`}),` — Cập nhật các cột tìm kiếm và tạo lại bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xử-lý`,children:`Xử lý`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toFormatItem(item: T, selection: boolean): object`}),` — Chuyển đổi một thành phần gốc thành một thành phần đã định dạng với các thẻ làm nổi bật.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`forEach(callback: Function): Array`}),` — Lặp qua bộ nhớ đệm và trả về danh sách các thành phần được định dạng thông qua hàm gọi lại (callback).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`quá-trình-tạo-bộ-nhớ-đệm`,children:`Quá trình tạo bộ nhớ đệm`}),`
`,(0,c.jsx)(t.p,{children:`Hệ thống tìm kiếm sử dụng chiến lược khởi tạo trễ (lazy initialization) để tối ưu hóa hiệu suất khi làm việc với các danh sách lớn:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo theo yêu cầu`}),`: Bộ nhớ đệm không được xây dựng khi lớp được khởi tạo. Thay vào đó, nó chỉ được tạo ra vào lần đầu tiên một thao tác tìm kiếm yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vô hiệu hóa bộ nhớ đệm`}),`: Gọi `,(0,c.jsx)(t.code,{children:`setList()`}),` hoặc `,(0,c.jsx)(t.code,{children:`setColumns()`}),` sẽ tự động phá hủy bộ nhớ đệm hiện tại. Nó sẽ được xây dựng lại một cách liền mạch trong lần tìm kiếm tiếp theo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biểu diễn phẳng`}),`: Để tạo bộ nhớ đệm, lớp sẽ lặp qua danh sách ban đầu và trích xuất các giá trị từ các `,(0,c.jsx)(t.code,{children:`columns`}),` (bao gồm cả các đường dẫn sâu). Các giá trị này được chuyển đổi thành chuỗi và nối thành một chuỗi duy nhất, cách nhau bằng dấu cách. Chuỗi tổng hợp này được lưu trong `,(0,c.jsx)(t.code,{children:`SearchCacheItem.value`}),` и được sử dụng cho tất cả các kiểm tra biểu thức chính quy tốc độ cao tiếp theo. Phương pháp này loại bỏ hoàn toàn việc duyệt đối tượng phức tạp trong quá trình người dùng đang gõ phím.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu-types`,children:`Các kiểu dữ liệu (Types)`}),`
`,(0,c.jsx)(t.h3,{id:`searchcacheitem`,children:`SearchCacheItem`}),`
`,(0,c.jsx)(t.p,{children:`Đối tượng đại diện cho một mục duy nhất trong bộ nhớ đệm tìm kiếm:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: T`}),` — tham chiếu đến thành phần dữ liệu gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — biểu diễn chuỗi phẳng của các cột có thể tìm kiếm.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`searchcache`,children:`SearchCache`}),`
`,(0,c.jsxs)(t.p,{children:[`Một tập hợp các đối tượng `,(0,c.jsx)(t.code,{children:`SearchCacheItem`}),` được sử dụng để tìm kiếm hiệu quả:
`,(0,c.jsx)(t.code,{children:`type SearchCache<T> = SearchCacheItem<T>[]`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};