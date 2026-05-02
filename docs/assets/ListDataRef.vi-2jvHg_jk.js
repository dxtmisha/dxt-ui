import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Classes/ListDataRef - Quản Lý Danh Sách Dữ Liệu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-listdataref`,children:`Lớp ListDataRef`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp phản ứng (reactive) để quản lý danh sách dữ liệu với bất kỳ độ phức tạp nào. Hỗ trợ lọc, lựa chọn (selection), tiêu điểm (focus) và cấu trúc lồng nhau (nhóm và menu). Lớp này chuyển đổi dữ liệu đầu vào thành định dạng chuẩn hóa và cung cấp một bộ phương thức phong phú để điều hướng, tìm kiếm và quản lý trạng thái của các phần tử.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính phản ứng (Reactivity)`}),` — tự động cập nhật các thuộc tính tính toán (computed properties) khi dữ liệu nguồn (Vue ref) hoặc tham số điều khiển thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa`}),` — chuyển đổi bất kỳ định dạng đầu vào nào (mảng chuỗi, đối tượng) thành một giao diện `,(0,c.jsx)(n.code,{children:`ListDataItem`}),` thống nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lồng nhau sâu`}),` — hỗ trợ cấu trúc dạng cây với việc quản lý danh sách con tự động thông qua `,(0,c.jsx)(n.code,{children:`getSubList`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều hướng thông minh`}),` — các phương thức tích hợp sẵn để di chuyển trong danh sách, có tính đến việc lọc và loại phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chế độ Lite`}),` — tối ưu hóa việc hiển thị cho danh sách lớn bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`liteData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý lựa chọn`}),` — kiểm soát số lượng phần tử được chọn (tối thiểu/tối đa) và trạng thái của chúng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một thực thực thể `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` mới để quản lý dữ liệu danh sách. Lớp này cung cấp khả năng chuẩn hóa dữ liệu đầu vào, quản lý tiêu điểm, lựa chọn và tìm kiếm. Hỗ trợ cập nhật phản ứng khi danh sách nguồn hoặc các tham số điều khiển thay đổi.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefOrNormal<ListListInput | undefined>`}),` — danh sách dữ liệu phản ứng hoặc thông thường.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus?: RefType<ListSelectedItem | undefined>`}),` — mã định danh phần tử đang được lấy tiêu điểm (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight?: RefType<string | undefined>`}),` — văn bản tìm kiếm để làm nổi bật (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightLengthStart?: RefType<number | undefined>`}),` — số ký tự tối thiểu để bắt đầu tìm kiếm (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filterMode?: RefType<boolean | undefined>`}),` — chế độ lọc (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected?: RefType<ListSelectedList | undefined>`}),` — danh sách các mã định danh đã chọn (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyValue?: RefType<string | undefined>`}),` — tên trường cho giá trị (mặc định là `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyLabel?: RefType<string | undefined>`}),` — tên trường cho nhãn (mặc định là `,(0,c.jsx)(n.code,{children:`'label'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lite?: RefType<number | undefined>`}),` — ngưỡng số lượng phần tử để kích hoạt chế độ Lite (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: RefOrNormal<number | string | undefined> = 0`}),` — số lượng lựa chọn tối thiểu được phép.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: RefOrNormal<number | string | undefined> = 9_999_999`}),` — số lượng lựa chọn tối đa được phép.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: string`}),` — mã định danh cha (được sử dụng cho danh sách con).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const list = ref([
  { label: 'Mục 1', value: 'item-1' },
  { label: 'Nhóm 1', type: 'group', value: [
    { label: 'Mục con 1.1', value: 'sub-1.1' }
  ]}
])

const focus = ref(undefined)
const selected = ref(['item-1'])

const listData = new ListDataRef(
  list, 
  focus, 
  undefined, // highlight
  undefined, // highlightLengthStart
  undefined, // filterMode
  selected
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`thuộc-tính`,children:`Thuộc tính`}),`
`,(0,c.jsx)(n.h3,{id:`dữ-liệu`,children:`Dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: Computed<ListList>`}),` — danh sách dữ liệu chuẩn hóa cốt lõi cho cấp độ hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`liteData: Computed<ListList>`}),` — phiên bản danh sách đơn giản hóa để hiển thị nhanh (chế độ Lite).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullData: Computed<ListDataFull>`}),` — danh sách dữ liệu mở rộng với các cờ `,(0,c.jsx)(n.code,{children:`focus`}),`, `,(0,c.jsx)(n.code,{children:`selected`}),`, `,(0,c.jsx)(n.code,{children:`disabled`}),` và `,(0,c.jsx)(n.code,{children:`highlight`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`map: Computed<ListList>`}),` — danh sách phẳng của tất cả các phần tử trong cây (bao gồm cả vùng chứa).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mapItems: Computed<ListList>`}),` — danh sách phẳng chỉ chứa các phần tử được chọn cuối cùng (`,(0,c.jsx)(n.code,{children:`item`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: Computed<ListList>`}),` — danh sách phẳng các phần tử tương tác (`,(0,c.jsx)(n.code,{children:`item`}),`, `,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`menu`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lựa-chọn-và-trạng-thái`,children:`Lựa chọn và Trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected: Computed<boolean>`}),` — trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu có ít nhất một mục được chọn trong toàn bộ cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelectedMin: Computed<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu số lượng mục được chọn đạt mức tối thiểu `,(0,c.jsx)(n.code,{children:`min`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelectedMax: Computed<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu số lượng mục được chọn đạt ngưỡng `,(0,c.jsx)(n.code,{children:`max`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedList: Computed<ListList>`}),` — danh sách tất cả các đối tượng được chọn trên toàn bộ cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedListInGroup: Computed<ListList>`}),` — danh sách các đối tượng được chọn ở cấp độ hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedNames: Computed<ListNames>`}),` — mảng các nhãn (`,(0,c.jsx)(n.code,{children:`label`}),`) cho tất cả các mục được chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedValues: Computed<any[]>`}),` — mảng các giá trị (`,(0,c.jsx)(n.code,{children:`value`}),`) cho tất cả các mục được chọn.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`tìm-kiếm`,children:`Tìm kiếm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightFirstItem: Computed<number>`}),` — chỉ số của phần tử đầu tiên khớp với tìm kiếm trong `,(0,c.jsx)(n.code,{children:`map`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`trạng-thái-và-kiểm-tra`,children:`Trạng thái và Kiểm tra`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLite(): boolean`}),` — trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu chế độ tối ưu hóa đang hoạt động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFocus(): boolean`}),` — kiểm tra xem có tiêu điểm trong `,(0,c.jsx)(n.code,{children:`map`}),` hiện tại hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlight(): boolean`}),` — trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu tìm kiếm thấy kết quả khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlightActive(): boolean`}),` — kiểm tra xem quá trình tìm kiếm có đang hoạt động hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLength(): number`}),` — tổng số phần tử ở cấp độ hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLengthByMap(): number`}),` — tổng số phần tử trong toàn bộ cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLengthByItems(): number`}),` — số lượng phần tử cuối cùng trong toàn bộ cây.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lấy-giá-trị`,children:`Lấy giá trị`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFocus(): ListSelectedItem | undefined`}),` — mã định danh đang được lấy tiêu điểm hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHighlight(): string | undefined`}),` — chuỗi tìm kiếm hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHighlightLengthStart(): number`}),` — độ dài chuỗi tối thiểu để kích hoạt tìm kiếm (mặc định là `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelected(): ListSelectedList | undefined`}),` — danh sách các mã định danh đã chọn hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-hướng-và-tìm-kiếm`,children:`Điều hướng và Tìm kiếm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedByStep(step): ListSelectedItem | undefined`}),` — tìm phần tử lân cận so với lựa chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedNext(): ListSelectedItem | undefined`}),` — tiếp theo từ lựa chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedPrev(): ListSelectedItem | undefined`}),` — trước đó từ lựa chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByStep(item, step): ListDataItem | undefined`}),` — tìm phần tử lân cận so với phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemNext(item): ListDataItem | undefined`}),` — tiếp theo từ phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemPrev(item): ListDataItem | undefined`}),` — trước đó từ phần tử.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexByStep(index, step): ListDataItem | undefined`}),` — tìm phần tử lân cận so với chỉ số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexNext(index): ListDataItem | undefined`}),` — tiếp theo từ chỉ số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexPrev(index): ListDataItem | undefined`}),` — trước đó từ chỉ số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByIndex(index): { key, item } | undefined`}),` — tìm phần tử theo chỉ số.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByKey(key): ListDataItem | undefined`}),` — trả về phần tử theo khóa trong map.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstItemByParent(parent): ListDataItem | undefined`}),` — phần tử tương tác đầu tiên của cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLastItemByParent(parent): ListDataItem | undefined`}),` — phần tử tương tác cuối cùng của cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSubList(item): ListDataRef`}),` — tạo/trả về thực thể danh sách con.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Lớp sử dụng các cấu trúc chuẩn hóa để đảm bảo hành vi có thể dự đoán được với bất kỳ định dạng dữ liệu đầu vào nào.`}),`
`,(0,c.jsx)(n.h3,{id:`listtype`,children:(0,c.jsx)(n.code,{children:`ListType`})}),`
`,(0,c.jsx)(n.p,{children:`Xác định vai trò chức năng của một mục trong danh sách:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item`}),` — phần tử tương tác chính có sẵn để lựa chọn và lấy tiêu điểm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group`}),` / `,(0,c.jsx)(n.code,{children:`menu`}),` — các vùng chứa các danh sách lồng nhau (`,(0,c.jsx)(n.code,{children:`value`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subtitle`}),` — một tiêu đề văn bản trong danh sách.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`html`}),` — phần tử để chèn mã HTML tùy ý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`line`}),` / `,(0,c.jsx)(n.code,{children:`space`}),` — các vạch ngăn cách và khoảng cách trực quan.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listdataitem`,children:(0,c.jsx)(n.code,{children:`ListDataItem`})}),`
`,(0,c.jsx)(n.p,{children:`Đối tượng mà tất cả dữ liệu đầu vào được chuyển đổi sau khi chuẩn hóa:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — mã định danh duy nhất (tự động tạo nếu không được cung cấp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ListType`}),` — loại mục (mặc định là `,(0,c.jsx)(n.code,{children:`item`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string | number`}),` — văn bản hiển thị trong giao diện.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: any`}),` — một giá trị tùy ý được liên kết với mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: string`}),` — mã định danh của mục cha.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listdatafullitem`,children:(0,c.jsx)(n.code,{children:`ListDataFullItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Phiên bản mở rộng của `,(0,c.jsx)(n.code,{children:`ListDataItem`}),` cho `,(0,c.jsx)(n.code,{children:`fullData`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu mục đang được lấy tiêu điểm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu mục được chọn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disabled: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu mục bị vô hiệu hóa (ví dụ: khi đạt đến giới hạn `,(0,c.jsx)(n.code,{children:`max`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight?: string`}),` — chuỗi tìm kiếm hiện tại nếu nó khớp với văn bản của mục.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listlistinput`,children:(0,c.jsx)(n.code,{children:`ListListInput`})}),`
`,(0,c.jsx)(n.p,{children:`Các định dạng dữ liệu được hỗ trợ cho hàm khởi tạo:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — mảng chuỗi đơn giản (nhãn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Record<string, string>`}),` — đối tượng `,(0,c.jsx)(n.code,{children:`value: label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ListDataBasic[]`}),` — mảng các đối tượng với các trường như `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),`, v.v.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-lựa-chọn-selection`,children:`Quản lý lựa chọn (Selection)`}),`
`,(0,c.jsx)(n.p,{children:`Lớp cung cấp các công cụ mạnh mẽ để kiểm soát trạng thái lựa chọn trong danh sách, hỗ trợ lựa chọn đơn và nhiều lựa chọn với các ràng buộc.`}),`
`,(0,c.jsx)(n.h3,{id:`các-tham-số-lựa-chọn-cốt-lõi`,children:`Các tham số lựa chọn cốt lõi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected`}),` — biến phản ứng (Vue `,(0,c.jsx)(n.code,{children:`ref`}),`) lưu trữ một mảng các mã định danh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min`}),` / `,(0,c.jsx)(n.code,{children:`max`}),` — các ràng buộc về số lượng mục được chọn trên cấp độ hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`lựa-chọn-toàn-cầu-vs-cấp-độ-nhóm`,children:`Lựa chọn Toàn cầu vs Cấp độ Nhóm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`selectedList`}),` — trả về tất cả các mục đã chọn loại `,(0,c.jsx)(n.code,{children:`item`}),` từ toàn bộ cây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`selectedListInGroup`}),` — trả về các mục đã chọn chỉ từ cấp độ hiện tại (`,(0,c.jsx)(n.code,{children:`data`}),`). Các ràng buộc `,(0,c.jsx)(n.code,{children:`min`}),` và `,(0,c.jsx)(n.code,{children:`max`}),` làm việc dựa trên danh sách này.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`trạng-thái-disabled-tự-động`,children:`Trạng thái disabled tự động`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi đạt đến giới hạn `,(0,c.jsx)(n.code,{children:`max`}),` (`,(0,c.jsx)(n.code,{children:`isSelectedMax`}),`), lớp sẽ tự động đánh dấu các mục chưa được chọn còn lại trong `,(0,c.jsx)(n.code,{children:`fullData`}),` là `,(0,c.jsx)(n.code,{children:`disabled: true`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-tiêu-điểm-focus`,children:`Quản lý tiêu điểm (Focus)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trạng thái tiêu điểm được triển khai thông qua một biến phản ứng bên ngoài (Vue `,(0,c.jsx)(n.code,{children:`ref`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`các-tính-năng-chính-1`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trạng thái dùng chung`}),` — các danh sách con sử dụng cùng một `,(0,c.jsx)(n.code,{children:`ref`}),` tiêu điểm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính phản ứng`}),` — `,(0,c.jsx)(n.code,{children:`fullData`}),` tự động tính toán `,(0,c.jsx)(n.code,{children:`focus: true`}),` bằng cách so sánh `,(0,c.jsx)(n.code,{children:`index`}),` với biến tiêu điểm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều khiển thủ công`}),` — lớp không tự thay đổi trạng thái tiêu điểm. Các phương thức điều hướng chỉ trả về đối tượng đích.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const next = listData.getItemNext(currentItem)
if (next) {
    focus.value = next.index 
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`tìm-kiếm-và-làm-nổi-bật-highlight`,children:`Tìm kiếm và Làm nổi bật (Highlight)`}),`
`,(0,c.jsx)(n.h3,{id:`các-tham-số-cốt-lõi`,children:`Các tham số cốt lõi`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight`}),` — chuỗi phản ứng chứa truy vấn tìm kiếm.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightLengthStart`}),` — ngưỡng kích hoạt (mặc định là `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cách-thức-hoạt-động`,children:`Cách thức hoạt động`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Regex`}),` — tự động tạo biểu thức chính quy khi chuỗi tìm kiếm thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Các trường`}),` — tìm kiếm trên `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`index`}),` và trường `,(0,c.jsx)(n.code,{children:`search`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`fullData`}),` — mỗi mục nhận giá trị `,(0,c.jsx)(n.code,{children:`highlight`}),` để hiển thị trong UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết quả khớp đầu tiên`}),` — `,(0,c.jsx)(n.code,{children:`highlightFirstItem`}),` trả về chỉ số của mục đầu tiên tìm thấy trong mảng `,(0,c.jsx)(n.code,{children:`map`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-tra-trạng-thái`,children:`Kiểm tra trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlight()`}),` — có ít nhất một mục khớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlightActive()`}),` — chuỗi tìm kiếm đã đạt đến độ dài yêu cầu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`chế-độ-lọc-filtermode`,children:`Chế độ lọc (filterMode)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tham số `,(0,c.jsx)(n.code,{children:`filterMode`}),` là một cờ trạng thái hướng dẫn UI có nên ẩn các mục không khớp hay không. Cờ này được kế thừa bởi các danh sách con.`]}),`
`,(0,c.jsx)(n.h2,{id:`chế-độ-lite-lite-mode`,children:`Chế độ Lite (Lite Mode)`}),`
`,(0,c.jsxs)(n.p,{children:[`Tối ưu hóa hiệu suất cho danh sách lớn. Nếu số lượng phần tử > `,(0,c.jsx)(n.code,{children:`lite`}),`, thuộc tính `,(0,c.jsx)(n.code,{children:`liteData`}),` với cấu trúc đơn giản sẽ được kích hoạt.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.h3,{id:`hiển-thị-cây-nhóm`,children:`Hiển thị cây nhóm`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<template>
  <ul>
    <li v-for="item in listData.data.value" :key="item.index">
      {{ item.label }}
      <ul v-if="item.type === 'group'">
        <li v-for="sub in listData.getSubList(item).data.value" :key="sub.index">
           {{ sub.label }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const listData = new ListDataRef(props.list)
<\/script>
`})}),`
`,(0,c.jsx)(n.h2,{id:`làm-việc-với-điều-hướng`,children:`Làm việc với điều hướng`}),`
`,(0,c.jsx)(n.h3,{id:`điều-hướng-phẳng-vòng-lặp`,children:`Điều hướng phẳng vòng lặp`}),`
`,(0,c.jsxs)(n.p,{children:[`Các phương thức `,(0,c.jsx)(n.code,{children:`getItemNext/Prev`}),` và `,(0,c.jsx)(n.code,{children:`getIndexNext/Prev`}),` hoạt động thông qua `,(0,c.jsx)(n.code,{children:`mapItems`}),` (chỉ các phần tử loại `,(0,c.jsx)(n.code,{children:`item`}),`). Điều hướng xuyên suốt cây dữ liệu và có tính vòng lặp.`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-hướng-dựa-trên-lựa-chọn`,children:`Điều hướng dựa trên lựa chọn`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`getSelectedNext/Prev`}),` tìm phần tử lân cận so với phần tử được chọn đầu tiên.`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-hướng-theo-ngữ-cảnh-parent`,children:`Điều hướng theo ngữ cảnh (Parent)`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`getFirstItemByParent`}),` và `,(0,c.jsx)(n.code,{children:`getLastItemByParent`}),` tìm ranh giới của cấp độ lồng nhau hiện tại bằng mã định danh cha.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};