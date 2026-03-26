import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/figma-ref/Composables/useFigmaUiFrames - Danh sách các frame cấp cao nhất`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(n.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(n.p,{children:`Composable để quản lý và theo dõi danh sách các frame cấp cao nhất trong Figma UI. Nó đơn giản hóa quy trình lấy và truy cập dữ liệu frame với trạng thái đang tải được tích hợp sẵn.`}),`
`,(0,c.jsx)(n.h2,{id:`trả-về`,children:`Trả về`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — một danh sách reactivity chứa các frame cấp cao nhất. Tự động cập nhật khi nhận được dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ShallowRef<boolean>`}),` — một biến boolean reactivity cho biết các frame có đang được lấy từ plugin Figma hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` quản lý vòng đời của việc lấy dữ liệu frame:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo lười biếng (Lazy Initialization)`}),`: Composable kiểm tra xem các frame đã được tải vào bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`item`}),` toàn cục hay chưa. Nếu chưa, nó sẽ tự động bắt đầu quy trình lấy dữ liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý trạng thái đang tải`}),`: Trong khi quy trình lấy dữ liệu đang diễn ra, thuộc tính `,(0,c.jsx)(n.code,{children:`loading`}),` được đặt thành `,(0,c.jsx)(n.code,{children:`true`}),`. Điều này cho phép giao diện người dùng hiển thị vòng quay tải hoặc màn hình skeleton.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cập nhật reactivity`}),`: Sau khi `,(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`}),` hoàn tất, bộ nhớ đệm nội bộ được cập nhật, `,(0,c.jsx)(n.code,{children:`loading`}),` trở lại thành `,(0,c.jsx)(n.code,{children:`false`}),`, và thuộc tính computed `,(0,c.jsx)(n.code,{children:`frames`}),` thông báo cho tất cả các thành phần đang sử dụng dữ liệu mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm toàn cục`}),`: Các frame được lưu trữ trong một biến cấp module, nghĩa là các lần gọi `,(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` tiếp theo ở các component khác nhau sẽ chia sẻ cùng một dữ liệu và không kích hoạt lại các yêu cầu lấy dữ liệu dư thừa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`kiến-trúc-cốt-lõi`,children:`Kiến trúc cốt lõi`}),`
`,(0,c.jsxs)(n.p,{children:[`Composable này đóng vai trò là một lớp vỏ bọc reactivity quanh tiện ích `,(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`}),`. Nó quản lý trạng thái của các frame theo kiểu singleton, đảm bảo dữ liệu nhất quán trong toàn bộ ứng dụng đồng thời cung cấp tính reactivity cục bộ cho các trạng thái đang tải.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// Sử dụng loading để hiển thị chỉ báo tiến trình
if (loading.value) {
  console.log('Đang lấy danh sách frame...')
}

// Sử dụng frames để hiển thị danh sách
console.log('Danh sách frame:', frames.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};