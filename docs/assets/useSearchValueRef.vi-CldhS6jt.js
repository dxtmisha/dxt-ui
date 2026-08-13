import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Composables/useSearchValueRef - Trạng thái và logic tìm kiếm`}),`
`,(0,c.jsx)(t.h1,{id:`usesearchvalueref`,children:(0,c.jsx)(t.code,{children:`useSearchValueRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable cấp thấp để quản lý trạng thái truy vấn tìm kiếm, xử lý độ trễ (debounce) và tạo các biểu thức chính quy (RegExp) để khớp dữ liệu. Thường được sử dụng bên trong `,(0,c.jsx)(t.code,{children:`useSearchRef`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: SearchList<T, K>`}),` — một phiên bản đã được cấu hình của `,(0,c.jsx)(t.code,{children:`SearchList`}),`, dùng để quản lý các tùy chọn và giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: Ref<string>`}),` — tham chiếu phản hồi (Ref) tìm kiếm từ bên ngoài. Nếu không được cung cấp, một Ref nội bộ sẽ được tạo.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: Ref<string>`}),` — giá trị tìm kiếm hiện tại (cập nhật ngay lập tức).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`searchDelay: Ref<string>`}),` — giá trị tìm kiếm sau khi áp dụng độ trễ (nếu độ trễ được thiết lập).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`loading: Ref<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` trong thời gian chờ độ trễ `,(0,c.jsx)(t.code,{children:`delay`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kiến-trúc-và-cách-thức-hoạt-động`,children:`Kiến trúc và cách thức hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useSearchValueRef`}),` cô lập logic độ trễ (`,(0,c.jsx)(t.code,{children:`debounce delay`}),`) khỏi quá trình lọc dữ liệu thực tế.
Khi người dùng nhập vào `,(0,c.jsx)(t.code,{children:`search.value`}),`, composable sẽ:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Ngay lập tức đặt `,(0,c.jsx)(t.code,{children:`loading.value = true`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Chờ trong khoảng thời gian `,(0,c.jsx)(t.code,{children:`delay`}),` (tính bằng mili giây) được chỉ định.`]}),`
`,(0,c.jsx)(t.li,{children:`Nếu người dùng tiếp tục nhập trong khoảng thời gian chờ, bộ hẹn giờ sẽ đặt lại.`}),`
`,(0,c.jsxs)(t.li,{children:[`Khi bộ đếm thời gian hoàn thành, nó sao chép `,(0,c.jsx)(t.code,{children:`search.value`}),` vào `,(0,c.jsx)(t.code,{children:`searchDelay.value`}),` và đặt `,(0,c.jsx)(t.code,{children:`loading.value = false`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`searchDelay.value`}),` thay vì `,(0,c.jsx)(t.code,{children:`search.value`}),` trong danh sách đã lọc, bạn đảm bảo rằng các thao tác dữ liệu phức tạp chỉ xảy ra sau khi người dùng ngừng nhập, cải thiện đáng kể hiệu suất trên các tập dữ liệu lớn.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value trở thành true
// Sau 300ms searchDelay.value sẽ là 'app' và loading.value trở về false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};