import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/CacheStatic - Bộ nhớ đệm tĩnh (Global)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cachestatic`,children:`Lớp CacheStatic`}),`
`,(0,c.jsxs)(n.p,{children:[`Một lớp định dạng lớp bọc ngoài (wrapper class) đóng vai trò xây dựng lớp giao tiếp toàn cục sử dụng bộ nhớ cache tĩnh (static cache instance). Với `,(0,c.jsx)(n.code,{children:`CacheStatic`}),`, cơ chế hoạt động giúp bộ nhớ có tính linh hoạt xuyên suốt đoạn code ở mọi nơi trong phân lớp code được thực thi, thay thế và loại bỏ hoàn toàn quá trình tạo đối tượng object `,(0,c.jsx)(n.code,{children:`Cache`}),` chuyên biệt như cấu trúc gốc.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu Cục Bộ Toàn Phân (Global Accessibility)`}),` — mô hình kết nối hoạt động giống singleton thông qua thiết kế pattern là stactic method. Code định dạng luôn chung vùng bộ nhớ, đảm bảo kết nối giữa nhiều lớp dữ liệu đồng thời suốt hệ thống ứng dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cơ Chế Phân Định Ngầm`}),` — phần cốt lõi bên trong lớp bọc được nạp một phương thức tham chiếu kế thừa thẳng cấu trúc từ đối tượng `,(0,c.jsx)(n.code,{children:`Cache`}),` tiêu chuẩn. Toàn bộ hiệu ứng phụ của `,(0,c.jsx)(n.code,{children:`Cache`}),` bao gồm: Cập nhật dependency, lazy loading/lazy evulation,... đều hoạt động trơn tru.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính Tiện Dụng`}),` — tiện lợi tuyệt đối, phù hợp với hệ module/chia sẻ component liên kết đơn giản mà không sinh ra phụ thuộc hay tính kế thừa vòng lặp phức tạp trong cây component.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Về cấu trúc class, tất cả hàm nội bộ gắn định danh `,(0,c.jsx)(n.code,{children:`static`}),`. Hệ quả là hệ thống sẽ chặn không cho sử dụng trình khởi tạo `,(0,c.jsx)(n.code,{children:`new CacheStatic()`}),`. Người code sử dụng những hàm này theo cấu trúc thực thi trực tiếp từ class gốc thông qua dấu châm (`,(0,c.jsx)(n.code,{children:`.`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`lưu-trữ-cache-toàn-cục`,children:`Lưu trữ cache toàn cục`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm chức năng `,(0,c.jsx)(n.code,{children:`get()`}),` có vai trò lặp tìm phần tử hiện có từ bộ đệm, nếu đối chiếu ra null hoặc undefined nó tự động chạy logic tải và sinh phần tử cache mới thay vào vị trí truy vấn hiện tại.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — biến gán để tạo lập index/luồng đối chiếu cho bộ nhớ định tuyến global hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — các khối lệnh đóng trong tham chiếu được xử lý thông qua biến này.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — danh sách các đối tượng thay đổi, hay dependency list. Khi chạy hàm, node `,(0,c.jsx)(n.code,{children:`CacheItem`}),` sẽ đánh mất tình trạng (invalidation) nếu phát hiện bất kì thông số phụ bị sửa bằng biến mảng thay thế (`,(0,c.jsx)(n.code,{children:`comparison`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — biến được gọi là static cache block.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CacheStatic } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};