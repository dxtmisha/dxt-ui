import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/SearchList - Quản lý Danh sách Tìm kiếm Nâng cao"}),`
`,n.jsx(c.h1,{id:"lớp-searchlist",children:"Lớp SearchList"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"SearchList"})," là điểm truy cập chính để triển khai các danh sách có thể tìm kiếm. Nó điều phối giữa việc lưu trữ dữ liệu, trạng thái thành phần tìm kiếm, logic so khớp và các tùy chọn cấu hình để cung cấp trải nghiệm tìm kiếm liền mạch."]}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tìm kiếm được điều phối"})," — tự động cập nhật trình so khớp và tạo lại kết quả khi giá trị tìm kiếm hoặc dữ liệu thay đổi."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Kết quả linh hoạt"})," — cung cấp phương thức ",n.jsx(c.code,{children:"to()"})," trả về toàn bộ danh sách hoặc các kết quả đã được lọc với các phần làm nổi bật HTML tùy chọn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp dễ dàng"})," — API đơn giản để thiết lập dữ liệu, cột và giá trị tìm kiếm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:'Hỗ trợ "Trả về tất cả" (Return Everything)'})," — có thể được cấu hình để hiển thị toàn bộ danh sách với các phần nổi bật tại các điểm khớp, hoặc chỉ các thành phần khớp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hiệu suất tối ưu"})," — sử dụng tiện ích ",n.jsx(c.code,{children:"forEach"})," toàn cục để xử lý nhanh khi tìm kiếm không hoạt động, bỏ qua việc tạo bộ nhớ đệm để đạt hiệu quả tối đa."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"SearchList(list, columns, value, options)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"list: T[]"})," — mảng dữ liệu ban đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"columns?: string[]"})," — các đường dẫn thuộc tính để tìm kiếm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value?: string"})," — giá trị tìm kiếm ban đầu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options?: SearchOptions"})," — cấu hình tìm kiếm."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { SearchList } from '@dxtmisha/functional'

const mockData = [
  { id: 1, name: 'Search Engine', category: 'Web' },
  { id: 2, name: 'List Manager', category: 'Utility' }
]

const search = new SearchList(mockData, ['name', 'category'], 'engine')

// Lấy kết quả đã được lọc và làm nổi bật
const results = search.to()
`})}),`
`,n.jsx(c.h2,{id:"quản-lý-dữ-liệu",children:"Quản lý dữ liệu"}),`
`,n.jsx(c.h3,{id:"to",children:n.jsx(c.code,{children:"to"})}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"to()"})," xử lý danh sách dữ liệu hiện tại dựa trên truy vấn tìm kiếm và trả về một mảng kết quả đã được định dạng."]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"SearchFormatList<T, K>"})," — một danh sách các mục trong đó mỗi trường có thể tìm kiếm được bổ sung thêm thuộc tính ",n.jsx(c.code,{children:"...Search"})," chứa các phần làm nổi bật HTML."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Hành vi:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tìm kiếm đang hoạt động"}),": Nếu độ dài chuỗi tìm kiếm lớn hơn hoặc bằng ",n.jsx(c.code,{children:"limit"}),", nó sẽ lọc danh sách (trừ khi ",n.jsx(c.code,{children:"returnEverything"})," là true) và áp dụng các thẻ làm nổi bật cho văn bản khớp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tìm kiếm không hoạt động"}),": Nếu chuỗi tìm kiếm trống hoặc quá ngắn, nó sẽ trả về các mục danh sách ban đầu được định dạng với các thuộc tính tìm kiếm của chúng, nhưng không có bất kỳ phần làm nổi bật nào và với ",n.jsx(c.code,{children:"searchActive: false"}),"."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`const results = search.to()

results.forEach(item => {
  if (item.searchActive) {
    console.log(\`Đã tìm thấy mục khớp: \${item.nameSearch}\`)
  }
})
`})}),`
`,n.jsx(c.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(c.h3,{id:"thông-tin-getters",children:"Thông tin (Getters)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getData(): SearchListData"})," — Trả về thực thể quản lý dữ liệu nội bộ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getList(): T[]"})," — Trả về danh sách dữ liệu nguồn."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getColumns(): string[] | undefined"})," — Trả về các cột tìm kiếm hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getItem(): SearchListItem"})," — Trả về thực thể trạng thái thành phần tìm kiếm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getValue(): string | undefined"})," — Trả về chuỗi tìm kiếm hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getOptions(): SearchListOptions"})," — Trả về thực thể quản lý tùy chọn."]}),`
`]}),`
`,n.jsx(c.h3,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setList(list: T[]): this"})," — Thiết lập danh sách dữ liệu mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setColumns(columns?: string[]): this"})," — Thiết lập các cột tìm kiếm mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setValue(value?: string): this"})," — Thiết lập giá trị tìm kiếm mới và kích hoạt cập nhật trình so khớp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setOptions(options: SearchOptions): this"})," — Thiết lập các tùy chọn tìm kiếm mới."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-kiểu-dữ-liệu-types",children:"Các kiểu dữ liệu (Types)"}),`
`,n.jsx(c.h3,{id:"searchoptions",children:"SearchOptions"}),`
`,n.jsxs(c.p,{children:["Đối tượng cấu hình cho hành vi của ",n.jsx(c.code,{children:"SearchList"}),":"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"limit?: number"})," — độ dài ký tự tối thiểu để kích hoạt tìm kiếm (mặc định: ",n.jsx(c.code,{children:"2"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"returnEverything?: boolean"})," — nếu là ",n.jsx(c.code,{children:"true"}),", trả về tất cả các mục thay vì lọc; các mục không khớp sẽ có ",n.jsx(c.code,{children:"searchActive: false"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"delay?: number"})," — độ trễ debounce tính bằng mili giây (được sử dụng bởi các thành phần cấp cao hơn)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"findExactMatch?: boolean"})," — nếu là ",n.jsx(c.code,{children:"true"}),', sử dụng chế độ "Phân đoạn chính xác"; nếu không sẽ sử dụng "Chứa tất cả các từ".']}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"classSearchName?: string"})," — lớp CSS tùy chỉnh cho các thẻ làm nổi bật ",n.jsx(c.code,{children:"<span />"}),"."]}),`
`]}),`
`,n.jsx(c.h3,{id:"searchformatitem",children:"SearchFormatItem"}),`
`,n.jsxs(c.p,{children:["Cấu trúc của một mục được trả về bởi phương thức ",n.jsx(c.code,{children:"to()"}),". Nó bao gồm tất cả các trường ban đầu từ mục dữ liệu cộng với các trường liên quan đến tìm kiếm động:"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"[key]Search: string"})," — (Động) giá trị của cột tương ứng, có thể chứa các thẻ ",n.jsx(c.code,{children:"<span />"})," cho các phần khớp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"searchActive?: boolean"})," — cờ boolean cho biết mục đó có khớp với tiêu chí tìm kiếm hiện tại hay không."]}),`
`]}),`
`,n.jsx(c.h3,{id:"searchformatlist",children:"SearchFormatList"}),`
`,n.jsxs(c.p,{children:[`Danh sách các mục tìm kiếm đã được định dạng:
`,n.jsx(c.code,{children:"type SearchFormatList<T, K> = SearchFormatItem<T, K>[]"})]}),`
`,n.jsx(c.h3,{id:"searchitem",children:"SearchItem"}),`
`,n.jsxs(c.p,{children:[`Một đối tượng chung có thể được tìm kiếm:
`,n.jsx(c.code,{children:"type SearchItem = Record<string, any>"})]}),`
`,n.jsx(c.h3,{id:"searchlistvalue",children:"SearchListValue"}),`
`,n.jsxs(c.p,{children:[`Giá trị danh sách đầu vào:
`,n.jsx(c.code,{children:"type SearchListValue<T> = T[] | undefined"})]})]})}function m(i={}){const{wrapper:c}={...t(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(h,{...i})}):h(i)}export{m as default};
