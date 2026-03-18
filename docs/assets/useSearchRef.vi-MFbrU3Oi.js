import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Composables/useSearchRef - Tìm kiếm danh sách"}),`
`,n.jsx(e.h1,{id:"usesearchref",children:n.jsx(e.code,{children:"useSearchRef"})}),`
`,n.jsx(e.p,{children:"Một composable để triển khai logic tìm kiếm và lọc trên danh sách dữ liệu với hỗ trợ tính phản ứng (reactivity) và làm nổi bật kết quả khớp."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: SearchListInput<T>"})," — danh sách dữ liệu nguồn (Mảng, Ref hoặc một hàm trả về mảng)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"columns: K"})," — danh sách các cột (key của đối tượng) để tìm kiếm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: Ref<string>"})," — ref chuỗi tìm kiếm phản ứng từ bên ngoài. Sẽ được tạo nội bộ nếu không được cung cấp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"options?: SearchOptions"})," — cài đặt tìm kiếm:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"limit?: number"})," — giới hạn ký tự tối thiểu để kích hoạt tìm kiếm. Mặc định: ",n.jsx(e.code,{children:"2"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"delay?: number"})," — thời gian chờ (debounce) trước khi tìm kiếm tính bằng ms. Mặc định: ",n.jsx(e.code,{children:"0"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"findExactMatch?: boolean"})," — nếu là ",n.jsx(e.code,{children:"true"}),", thực hiện khớp theo cụm từ chính xác. Nếu là ",n.jsx(e.code,{children:"false"})," (mặc định), tìm kiếm các mục chứa tất cả các từ theo bất kỳ thứ tự nào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"returnEverything?: boolean"})," — nếu là ",n.jsx(e.code,{children:"true"}),", trả về tất cả các mục (các mục không khớp sẽ có ",n.jsx(e.code,{children:"searchActive: false"}),"). Nếu là ",n.jsx(e.code,{children:"false"}),", chỉ trả về các mục khớp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"classSearchName?: string"})," — lớp CSS để làm nổi bật kết quả khớp. Mặc định: ",n.jsx(e.code,{children:"sys-search-selection"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSearch: ComputedRef<boolean>"})," — tìm kiếm có đang hoạt động hay không (kiểm tra giới hạn ký tự tối thiểu)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"search: Ref<string>"})," — chuỗi tìm kiếm hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: Ref<boolean>"})," — trạng thái tải (hoạt động trong thời gian ",n.jsx(e.code,{children:"delay"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listSearch: ComputedRef<SearchFormatList<T, K>>"})," — danh sách kết quả đã được lọc và định dạng. Mỗi mục sẽ có thêm các trường ",n.jsx(e.code,{children:"{column}Search"})," với mã HTML làm nổi bật và cờ ",n.jsx(e.code,{children:"searchActive"}),"."]}),`
`]}),`
`,n.jsxs(e.h2,{id:"kiến-trúc-computed-lazy-getter-động",children:["Kiến trúc: ",n.jsx(e.code,{children:"computed"})," Lazy (Getter động)"]}),`
`,n.jsxs(e.p,{children:["Composable này được thiết kế đặc biệt để trả về ",n.jsx(e.code,{children:"isSearch"})," và ",n.jsx(e.code,{children:"listSearch"}),` dưới dạng native JS getter.
Điều này cho phép bạn gọi `,n.jsx(e.code,{children:"useSearchRef()"})," ",n.jsx(e.strong,{children:"bên ngoài vòng đời của component Vue"}),` (ví dụ: toàn cục trong một service hoặc trong Store).
Các đối tượng `,n.jsx(e.code,{children:"ComputedRef"})," thực tế được tạo (và liên kết với component) chính xác tại thời điểm mà component truy cập chúng trong quá trình destructuring:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Các getter sẽ chạy một lần trong quá trình destructuring ở setup(), Vue sẽ cache ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Quan trọng"}),': Vì kiến trúc này, hãy tránh truy cập các getter thông qua "dấu chấm" nhiều lần. Luôn phân rã (destructure) kết quả một lần ở cấp độ ',n.jsx(e.code,{children:"setup"})," để tránh tạo ra nhiều phiên bản ",n.jsx(e.code,{children:"computed"})," trùng lặp."]}),`
`]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useSearchRef } from '@dxtmisha/functional'

const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Banana', category: 'Fruit' },
  { id: 3, name: 'Carrot', category: 'Vegetable' }
]

const { 
  search, 
  listSearch, 
  loading 
} = useSearchRef(items, ['name', 'category'], undefined, {
  delay: 300,
  limit: 2
})

// Khi "app" được nhập vào search.value:
// listSearch.value sẽ chứa { ..., nameSearch: '<span...>App</span>le', searchActive: true }
`})})]})}function m(c={}){const{wrapper:e}={...i(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{m as default};
