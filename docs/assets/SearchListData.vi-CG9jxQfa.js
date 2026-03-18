import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/SearchListData - Quản lý Dữ liệu Tìm kiếm"}),`
`,n.jsx(h.h1,{id:"lớp-searchlistdata",children:"Lớp SearchListData"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"SearchListData"})," quản lý danh sách dữ liệu nguồn và bộ nhớ đệm (cache) tìm kiếm liên quan. Nó xử lý việc định dạng các thành phần, trích xuất các giá trị từ các đường dẫn lồng nhau và áp dụng các thẻ làm nổi bật (highlight tags) cho các chuỗi khớp."]}),`
`,n.jsx(h.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khởi tạo trễ (Lazy Initialization)"})," — thực hiện tạo bộ nhớ đệm theo yêu cầu, đảm bảo chi phí hiệu suất chỉ xảy ra khi tìm kiếm đang được thực hiện tích cực."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bộ nhớ đệm tìm kiếm"})," — tạo ra một biểu diễn chuỗi phẳng của các cột được chỉ định cho mỗi thành phần để cho phép tìm kiếm nhanh chóng."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Hỗ trợ đường dẫn lồng nhau"})," — khả năng trích xuất dữ liệu từ các cấu trúc đối tượng sâu (ví dụ: ",n.jsx(h.code,{children:"'user.profile.name'"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Làm nổi bật tự động"})," — bao quanh các phần khớp của chuỗi trong các thẻ HTML để phản hồi trực quan."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Định dạng CamelCase"})," — biến đổi các đường dẫn cột thành các tên thuộc tính tiện lợi (ví dụ: ",n.jsx(h.code,{children:"'user.name'"})," trở thành ",n.jsx(h.code,{children:"'userNameSearch'"}),")."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(h.code,{children:"SearchListData(list, columns, item, options)"}),"."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"list: T[]"})," — mảng ban đầu của các thành phần dữ liệu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"columns?: string[]"})," — một mảng các đường dẫn thuộc tính để tìm kiếm."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"item: SearchListItem"})," — trạng thái thành phần tìm kiếm."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"options: SearchListOptions"})," — các tùy chọn cấu hình."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { SearchListData, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

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
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(h.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"is(): boolean"})," — Kiểm tra xem cả danh sách và các cột đã được khởi tạo hay chưa."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"isList(): boolean"})," — Kiểm tra xem danh sách nguồn có được cung cấp hay không."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getList(): T[]"})," — Trả về danh sách dữ liệu ban đầu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getColumns(): string[] | undefined"})," — Trả về các cột tìm kiếm hiện tại."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"findCacheItem(item: T)"})," — Tìm thành phần tìm kiếm đã lưu trong bộ nhớ đệm cho một thành phần gốc cụ thể."]}),`
`]}),`
`,n.jsx(h.h3,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setList(list: T[]): this"})," — Cập nhật danh sách dữ liệu và tạo lại bộ nhớ đệm."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setColumns(columns?: string[]): this"})," — Cập nhật các cột tìm kiếm và tạo lại bộ nhớ đệm."]}),`
`]}),`
`,n.jsx(h.h3,{id:"xử-lý",children:"Xử lý"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"toFormatItem(item: T, selection: boolean): object"})," — Chuyển đổi một thành phần gốc thành một thành phần đã định dạng với các thẻ làm nổi bật."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"forEach(callback: Function): Array"})," — Lặp qua bộ nhớ đệm và trả về danh sách các thành phần được định dạng thông qua hàm gọi lại (callback)."]}),`
`]}),`
`,n.jsx(h.h2,{id:"quá-trình-tạo-bộ-nhớ-đệm",children:"Quá trình tạo bộ nhớ đệm"}),`
`,n.jsx(h.p,{children:"Hệ thống tìm kiếm sử dụng chiến lược khởi tạo trễ (lazy initialization) để tối ưu hóa hiệu suất khi làm việc với các danh sách lớn:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tạo theo yêu cầu"}),": Bộ nhớ đệm không được xây dựng khi lớp được khởi tạo. Thay vào đó, nó chỉ được tạo ra vào lần đầu tiên một thao tác tìm kiếm yêu cầu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Vô hiệu hóa bộ nhớ đệm"}),": Gọi ",n.jsx(h.code,{children:"setList()"})," hoặc ",n.jsx(h.code,{children:"setColumns()"})," sẽ tự động phá hủy bộ nhớ đệm hiện tại. Nó sẽ được xây dựng lại một cách liền mạch trong lần tìm kiếm tiếp theo."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Biểu diễn phẳng"}),": Để tạo bộ nhớ đệm, lớp sẽ lặp qua danh sách ban đầu và trích xuất các giá trị từ các ",n.jsx(h.code,{children:"columns"})," (bao gồm cả các đường dẫn sâu). Các giá trị này được chuyển đổi thành chuỗi và nối thành một chuỗi duy nhất, cách nhau bằng dấu cách. Chuỗi tổng hợp này được lưu trong ",n.jsx(h.code,{children:"SearchCacheItem.value"})," и được sử dụng cho tất cả các kiểm tra biểu thức chính quy tốc độ cao tiếp theo. Phương pháp này loại bỏ hoàn toàn việc duyệt đối tượng phức tạp trong quá trình người dùng đang gõ phím."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-kiểu-dữ-liệu-types",children:"Các kiểu dữ liệu (Types)"}),`
`,n.jsx(h.h3,{id:"searchcacheitem",children:"SearchCacheItem"}),`
`,n.jsx(h.p,{children:"Đối tượng đại diện cho một mục duy nhất trong bộ nhớ đệm tìm kiếm:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"item: T"})," — tham chiếu đến thành phần dữ liệu gốc."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"value: string"})," — biểu diễn chuỗi phẳng của các cột có thể tìm kiếm."]}),`
`]}),`
`,n.jsx(h.h3,{id:"searchcache",children:"SearchCache"}),`
`,n.jsxs(h.p,{children:["Một tập hợp các đối tượng ",n.jsx(h.code,{children:"SearchCacheItem"}),` được sử dụng để tìm kiếm hiệu quả:
`,n.jsx(h.code,{children:"type SearchCache<T> = SearchCacheItem<T>[]"})]})]})}function m(c={}){const{wrapper:h}={...t(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(i,{...c})}):i(c)}export{m as default};
