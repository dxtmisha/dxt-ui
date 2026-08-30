import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useSearchRef - Tìm kiếm danh sách`}),`
`,(0,c.jsx)(t.h1,{id:`usesearchref`,children:(0,c.jsx)(t.code,{children:`useSearchRef`})}),`
`,(0,c.jsx)(t.p,{children:`Một composable để triển khai logic tìm kiếm và lọc trên danh sách dữ liệu với hỗ trợ tính phản ứng (reactivity) và làm nổi bật kết quả khớp.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: SearchListInput<T>`}),` — danh sách dữ liệu nguồn (Mảng, Ref hoặc một hàm trả về mảng/Ref).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`columns?: SearchColumnsInput<T, K>`}),` — danh sách các cột (key của đối tượng) để tìm kiếm (Mảng, Ref hoặc một hàm trả về mảng/Ref).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — ref chuỗi tìm kiếm phản ứng từ bên ngoài. Sẽ được tạo nội bộ nếu không được cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: SearchOptions`}),` — cài đặt tìm kiếm:`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — giới hạn ký tự tối thiểu để kích hoạt tìm kiếm. Mặc định: `,(0,c.jsx)(t.code,{children:`2`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`delay?: number`}),` — thời gian chờ (debounce) trước khi tìm kiếm tính bằng ms. Mặc định: `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findExactMatch?: boolean`}),` — nếu là `,(0,c.jsx)(t.code,{children:`true`}),`, thực hiện khớp theo cụm từ chính xác. Nếu là `,(0,c.jsx)(t.code,{children:`false`}),` (mặc định), tìm kiếm các mục chứa tất cả các từ theo bất kỳ thứ tự nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`returnEverything?: boolean`}),` — nếu là `,(0,c.jsx)(t.code,{children:`true`}),`, trả về tất cả các mục (các mục không khớp sẽ có `,(0,c.jsx)(t.code,{children:`searchActive: false`}),`). Nếu là `,(0,c.jsx)(t.code,{children:`false`}),`, chỉ trả về các mục khớp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`classSearchName?: string`}),` — lớp CSS để làm nổi bật kết quả khớp. Mặc định: `,(0,c.jsx)(t.code,{children:`sys-search-selection`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSearch: ComputedRef<boolean>`}),` — tìm kiếm có đang hoạt động hay không (kiểm tra giới hạn ký tự tối thiểu).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — chuỗi tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — trạng thái tải (hoạt động trong thời gian `,(0,c.jsx)(t.code,{children:`delay`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listSearch: ComputedRef<SearchFormatList<T, K>>`}),` — danh sách kết quả đã được lọc và định dạng. Mỗi mục sẽ có thêm các trường `,(0,c.jsx)(t.code,{children:`{column}Search`}),` với mã HTML làm nổi bật và cờ `,(0,c.jsx)(t.code,{children:`searchActive`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`kiến-trúc-computed-lazy-getter-động`,children:[`Kiến trúc: `,(0,c.jsx)(t.code,{children:`computed`}),` Lazy (Getter động)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Composable này được thiết kế đặc biệt để trả về `,(0,c.jsx)(t.code,{children:`isSearch`}),` và `,(0,c.jsx)(t.code,{children:`listSearch`}),` dưới dạng native JS getter.
Điều này cho phép bạn gọi `,(0,c.jsx)(t.code,{children:`useSearchRef()`}),` `,(0,c.jsx)(t.strong,{children:`bên ngoài vòng đời của component Vue`}),` (ví dụ: toàn cục trong một service hoặc trong Store).
Các đối tượng `,(0,c.jsx)(t.code,{children:`ComputedRef`}),` thực tế được tạo (và liên kết với component) chính xác tại thời điểm mà component truy cập chúng trong quá trình destructuring:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Các getter sẽ chạy một lần trong quá trình destructuring ở setup(), Vue sẽ cache ComputedRef
const { search, listSearch, isSearch } = useSearchRef(items, ['name'])
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Quan trọng`}),`: Vì kiến trúc này, hãy tránh truy cập các getter thông qua "dấu chấm" nhiều lần. Luôn phân rã (destructure) kết quả một lần ở cấp độ `,(0,c.jsx)(t.code,{children:`setup`}),` để tránh tạo ra nhiều phiên bản `,(0,c.jsx)(t.code,{children:`computed`}),` trùng lặp.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSearchRef } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};