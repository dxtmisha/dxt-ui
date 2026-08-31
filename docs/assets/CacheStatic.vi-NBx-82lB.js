import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/CacheStatic - Bộ nhớ đệm tĩnh (Global)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-cachestatic`,children:`Lớp CacheStatic`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`⚠️ Đã lỗi thời`}),` — Lớp này đã lỗi thời và không nên được sử dụng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Một lớp định dạng lớp bọc ngoài (wrapper class) đóng vai trò xây dựng lớp giao tiếp toàn cục sử dụng bộ nhớ cache tĩnh (static cache instance). Với `,(0,c.jsx)(t.code,{children:`CacheStatic`}),`, cơ chế hoạt động giúp bộ nhớ có tính linh hoạt xuyên suốt đoạn code ở mọi nơi trong phân lớp code được thực thi, thay thế và loại bỏ hoàn toàn quá trình tạo đối tượng object `,(0,c.jsx)(t.code,{children:`Cache`}),` chuyên biệt như cấu trúc gốc.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu Cục Bộ Toàn Phân (Global Accessibility)`}),` — mô hình kết nối hoạt động giống singleton thông qua thiết kế pattern là stactic method. Code định dạng luôn chung vùng bộ nhớ, đảm bảo kết nối giữa nhiều lớp dữ liệu đồng thời suốt hệ thống ứng dụng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cơ Chế Phân Định Ngầm`}),` — phần cốt lõi bên trong lớp bọc được nạp một phương thức tham chiếu kế thừa thẳng cấu trúc từ đối tượng `,(0,c.jsx)(t.code,{children:`Cache`}),` tiêu chuẩn. Toàn bộ hiệu ứng phụ của `,(0,c.jsx)(t.code,{children:`Cache`}),` bao gồm: Cập nhật dependency, lazy loading/lazy evulation,... đều hoạt động trơn tru.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính Tiện Dụng`}),` — tiện lợi tuyệt đối, phù hợp với hệ module/chia sẻ component liên kết đơn giản mà không sinh ra phụ thuộc hay tính kế thừa vòng lặp phức tạp trong cây component.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Về cấu trúc class, tất cả hàm nội bộ gắn định danh `,(0,c.jsx)(t.code,{children:`static`}),`. Hệ quả là hệ thống sẽ chặn không cho sử dụng trình khởi tạo `,(0,c.jsx)(t.code,{children:`new CacheStatic()`}),`. Người code sử dụng những hàm này theo cấu trúc thực thi trực tiếp từ class gốc thông qua dấu châm (`,(0,c.jsx)(t.code,{children:`.`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`lưu-trữ-cache-toàn-cục`,children:`Lưu trữ cache toàn cục`}),`
`,(0,c.jsx)(t.h3,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm chức năng `,(0,c.jsx)(t.code,{children:`get()`}),` có vai trò lặp tìm phần tử hiện có từ bộ đệm, nếu đối chiếu ra null hoặc undefined nó tự động chạy logic tải và sinh phần tử cache mới thay vào vị trí truy vấn hiện tại.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — biến gán để tạo lập index/luồng đối chiếu cho bộ nhớ định tuyến global hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T`}),` — các khối lệnh đóng trong tham chiếu được xử lý thông qua biến này.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — danh sách các đối tượng thay đổi, hay dependency list. Khi chạy hàm, node `,(0,c.jsx)(t.code,{children:`CacheItem`}),` sẽ đánh mất tình trạng (invalidation) nếu phát hiện bất kì thông số phụ bị sửa bằng biến mảng thay thế (`,(0,c.jsx)(t.code,{children:`comparison`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`T`}),` — biến được gọi là static cache block.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { CacheStatic } from '@dxtmisha/functional'

// Mảng A.js
function calculateHeavyData(id) {
  return CacheStatic.get(
    \`heavy_data_\${id}\`,
    () => {
      console.log('Calculating...')
      return id * 100
    },
    [id] // Biến phụ thuộc (Dependency)
  )
}

// Báo lệnh 'Calculating...' sinh kết quả 500
const res1 = calculateHeavyData(5) 

// Mảng B.js
// Trỏ vào chung dữ liệu id 5, chạy tiếp xúc trực tiếp global cache
// Không thực thi lại callback 'Calculating...', kết xuất liền giá trị 500.
const res2 = calculateHeavyData(5) 
`})}),`
`,(0,c.jsx)(t.h3,{id:`getasync`,children:(0,c.jsx)(t.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Phiên bản bất đồng bộ của phương thức `,(0,c.jsx)(t.code,{children:`get()`}),`. Hữu ích khi hàm callback trả về một `,(0,c.jsx)(t.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — định danh duy nhất cho mục nhập cache toàn cục cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => Promise<T> | T`}),` — hàm bất đồng bộ thực hiện tính toán giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — mảng phụ thuộc tùy chọn. Việc truyền một mảng mới (nơi các giá trị hoặc độ dài khác nhau) sẽ vô hiệu hóa bộ nhớ đệm và buộc tính toán lại.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — một promise trả về giá trị đã lưu trong bộ nhớ đệm hoặc giá trị vừa được tính toán.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};