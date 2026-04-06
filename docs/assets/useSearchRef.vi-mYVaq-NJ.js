import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Composables/useSearchRef - Tìm kiếm danh sách`}),`
`,(0,c.jsx)(n.h1,{id:`usesearchref`,children:(0,c.jsx)(n.code,{children:`useSearchRef`})}),`
`,(0,c.jsx)(n.p,{children:`Một composable để triển khai logic tìm kiếm và lọc trên danh sách dữ liệu với hỗ trợ tính phản ứng (reactivity) và làm nổi bật kết quả khớp.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: SearchListInput<T>`}),` — danh sách dữ liệu nguồn (Mảng, Ref hoặc một hàm trả về mảng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`columns: K`}),` — danh sách các cột (key của đối tượng) để tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: Ref<string>`}),` — ref chuỗi tìm kiếm phản ứng từ bên ngoài. Sẽ được tạo nội bộ nếu không được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: SearchOptions`}),` — cài đặt tìm kiếm:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — giới hạn ký tự tối thiểu để kích hoạt tìm kiếm. Mặc định: `,(0,c.jsx)(n.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`delay?: number`}),` — thời gian chờ (debounce) trước khi tìm kiếm tính bằng ms. Mặc định: `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findExactMatch?: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, thực hiện khớp theo cụm từ chính xác. Nếu là `,(0,c.jsx)(n.code,{children:`false`}),` (mặc định), tìm kiếm các mục chứa tất cả các từ theo bất kỳ thứ tự nào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`returnEverything?: boolean`}),` — nếu là `,(0,c.jsx)(n.code,{children:`true`}),`, trả về tất cả các mục (các mục không khớp sẽ có `,(0,c.jsx)(n.code,{children:`searchActive: false`}),`). Nếu là `,(0,c.jsx)(n.code,{children:`false`}),`, chỉ trả về các mục khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classSearchName?: string`}),` — lớp CSS để làm nổi bật kết quả khớp. Mặc định: `,(0,c.jsx)(n.code,{children:`sys-search-selection`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSearch: ComputedRef<boolean>`}),` — tìm kiếm có đang hoạt động hay không (kiểm tra giới hạn ký tự tối thiểu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: Ref<string>`}),` — chuỗi tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: Ref<boolean>`}),` — trạng thái tải (hoạt động trong thời gian `,(0,c.jsx)(n.code,{children:`delay`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listSearch: ComputedRef<SearchFormatList<T, K>>`}),` — danh sách kết quả đã được lọc và định dạng. Mỗi mục sẽ có thêm các trường `,(0,c.jsx)(n.code,{children:`{column}Search`}),` với mã HTML làm nổi bật và cờ `,(0,c.jsx)(n.code,{children:`searchActive`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.h2,{id:`kiến-trúc-computed-lazy-getter-động`,children:[`Kiến trúc: `,(0,c.jsx)(n.code,{children:`computed`}),` Lazy (Getter động)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Composable này được thiết kế đặc biệt để trả về `,(0,c.jsx)(n.code,{children:`isSearch`}),` và `,(0,c.jsx)(n.code,{children:`listSearch`}),` dưới dạng native JS getter.
Điều này cho phép bạn gọi `,(0,c.jsx)(n.code,{children:`useSearchRef()`}),` `,(0,c.jsx)(n.strong,{children:`bên ngoài vòng đời của component Vue`}),` (ví dụ: toàn cục trong một service hoặc trong Store).
Các đối tượng `,(0,c.jsx)(n.code,{children:`ComputedRef`}),` thực tế được tạo (và liên kết với component) chính xác tại thời điểm mà component truy cập chúng trong quá trình destructuring:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Các getter sẽ chạy một lần trong quá trình destructuring ở setup(), Vue sẽ cache ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Quan trọng`}),`: Vì kiến trúc này, hãy tránh truy cập các getter thông qua "dấu chấm" nhiều lần. Luôn phân rã (destructure) kết quả một lần ở cấp độ `,(0,c.jsx)(n.code,{children:`setup`}),` để tránh tạo ra nhiều phiên bản `,(0,c.jsx)(n.code,{children:`computed`}),` trùng lặp.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useSearchRef } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};