import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Quản lý danh sách`}),`
`,(0,c.jsx)(n.h1,{id:`quản-lý-danh-sách`,children:`Quản lý danh sách`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.strong,{children:`ListDataRef`}),` là một trình điều khiển để quản lý các danh sách dữ liệu phức tạp, menu thả xuống và cây trong hệ sinh thái `,(0,c.jsx)(n.strong,{children:`Vue 3`}),`. Nó tự động hóa các tác vụ định kỳ như lọc, chọn mục, quản lý tiêu điểm và làm việc với các cấu trúc lồng nhau.`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo-và-dữ-liệu`,children:`Khởi tạo và Dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Trình điều khiển chấp nhận các nguồn dữ liệu phản hồi và cung cấp các bộ thuộc tính được tối ưu hóa để kết xuất các thành phần.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { ListDataRef } from '@dxtmisha/functional'

const items = ref([{ value: 1, label: 'Mục' }, ...])
const controller = new ListDataRef(items)

// 1. Bộ dữ liệu đầy đủ để kết xuất (với các trạng thái focus/selected/disabled)
const list = controller.fullData 

// 2. Danh sách tối ưu hóa (liteData)
// Tự động đơn giản hóa cấu trúc cho khối lượng dữ liệu rất lớn
const fastList = controller.liteData 

// 3. Bản đồ phẳng của tất cả các mục (bao gồm cả các mục lồng nhau)
const flatMap = controller.map
`})}),`
`,(0,c.jsx)(n.h2,{id:`lựa-chọn-và-trạng-thái`,children:`Lựa chọn và Trạng thái`}),`
`,(0,c.jsx)(n.p,{children:`Tự động quản lý lựa chọn nhiều hoặc một mục, có tính đến các giới hạn và trạng thái địa phương hiện tại.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const selected = ref([1])
// Sử dụng undefined để bỏ qua các đối số tùy chọn và kích hoạt các giá trị mặc định
const controller = new ListDataRef(items, undefined, undefined, undefined, undefined, selected)

// 1. Truy xuất các giá trị và tên đã chọn
controller.selectedValues // ComputedRef<[1]>
controller.selectedNames  // ComputedRef<['Mục']>

// 2. Kiểm tra các giới hạn (min/max)
controller.isSelectedMax  // True nếu số lượng tối đa cho phép được chọn
`})}),`
`,(0,c.jsx)(n.h2,{id:`điều-hướng-và-tiêu-điểm`,children:`Điều hướng và Tiêu điểm`}),`
`,(0,c.jsx)(n.p,{children:`Trình điều khiển cung cấp một hệ thống các phương thức để di chuyển "thông minh" qua danh sách. Điều hướng tự động bỏ qua các phần tử không hoạt động và các tiêu đề nhóm, chỉ làm việc với các mục có sẵn để lựa chọn.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const focus = ref(1)
const controller = new ListDataRef(items, focus)

// 1. Trạng thái tiêu điểm và tìm kiếm
controller.isFocus()        // Xác minh tính chính xác của tiêu điểm hiện tại
controller.isHighlight()    // Kiểm tra xem có kết quả tìm kiếm trùng khớp hay không
controller.highlightFirstItem // Chỉ số của mục trùng khớp đầu tiên

// 2. Điều hướng tương đối (từ mục đã chọn)
const next = controller.getSelectedNext() // Chỉ số của mục khả dụng tiếp theo
const prev = controller.getSelectedPrev() // Chỉ số của mục khả dụng trước đó

// 3. Điều hướng tự do (theo các bước hoặc đối tượng)
const item = controller.getItemByStep(currentItem, 2) // Nhảy qua 2 mục từ vị trí hiện tại
const firstInGroup = controller.getFirstItemByParent('group-id') // Mục đầu tiên trong nhóm
`})}),`
`,(0,c.jsx)(n.h2,{id:`làm-việc-với-các-cấu-trúc-lồng-nhau`,children:`Làm việc với các cấu trúc lồng nhau`}),`
`,(0,c.jsxs)(n.p,{children:[`Để xử lý các nhóm hoặc cấu trúc dạng cây, phương thức `,(0,c.jsx)(n.code,{children:`getSubList()`}),` được sử dụng. Nó tạo ra một phiên bản trình điều khiển mới cho dữ liệu lồng nhau trong khi vẫn duy trì liên kết toàn cầu với các trạng thái tiêu điểm và lựa chọn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Bên trong một thành phần nhóm hoặc menu thả xuống:
const subController = controller.getSubList(groupItem)

// subController sẽ tự động theo dõi các thay đổi trong danh sách cha
const subItems = subController.fullData
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};