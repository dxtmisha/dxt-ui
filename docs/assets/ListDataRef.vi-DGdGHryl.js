import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional/Classes/ListDataRef - Quản Lý Danh Sách Dữ Liệu"}),`
`,n.jsx(e.h1,{id:"lớp-listdataref",children:"Lớp ListDataRef"}),`
`,n.jsx(e.p,{children:"Một lớp phản ứng (reactive) để quản lý danh sách dữ liệu với bất kỳ độ phức tạp nào. Hỗ trợ lọc, lựa chọn (selection), tiêu điểm (focus) và cấu trúc lồng nhau (nhóm và menu). Lớp này chuyển đổi dữ liệu đầu vào thành định dạng chuẩn hóa và cung cấp một bộ phương thức phong phú để điều hướng, tìm kiếm và quản lý trạng thái của các phần tử."}),`
`,n.jsx(e.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính phản ứng (Reactivity)"})," — tự động cập nhật các thuộc tính tính toán (computed properties) khi dữ liệu nguồn (Vue ref) hoặc tham số điều khiển thay đổi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chuẩn hóa"})," — chuyển đổi bất kỳ định dạng đầu vào nào (mảng chuỗi, đối tượng) thành một giao diện ",n.jsx(e.code,{children:"ListDataItem"})," thống nhất."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lồng nhau sâu"})," — hỗ trợ cấu trúc dạng cây với việc quản lý danh sách con tự động thông qua ",n.jsx(e.code,{children:"getSubList"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Điều hướng thông minh"})," — các phương thức tích hợp sẵn để di chuyển trong danh sách, có tính đến việc lọc và loại phần tử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chế độ Lite"})," — tối ưu hóa việc hiển thị cho danh sách lớn bằng cách sử dụng ",n.jsx(e.code,{children:"liteData"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Quản lý lựa chọn"})," — kiểm soát số lượng phần tử được chọn (tối thiểu/tối đa) và trạng thái của chúng."]}),`
`]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(e.p,{children:["Tạo một thực thực thể ",n.jsx(e.code,{children:"ListDataRef"})," mới để quản lý dữ liệu danh sách. Lớp này cung cấp khả năng chuẩn hóa dữ liệu đầu vào, quản lý tiêu điểm, lựa chọn và tìm kiếm. Hỗ trợ cập nhật phản ứng khi danh sách nguồn hoặc các tham số điều khiển thay đổi."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"list: RefOrNormal<ListListInput | undefined>"})," — danh sách dữ liệu phản ứng hoặc thông thường."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"focus?: RefType<ListSelectedItem | undefined>"})," — mã định danh phần tử đang được lấy tiêu điểm (Vue ref)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlight?: RefType<string | undefined>"})," — văn bản tìm kiếm để làm nổi bật (Vue ref)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlightLengthStart?: RefType<number | undefined>"})," — số ký tự tối thiểu để bắt đầu tìm kiếm (Vue ref)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"filterMode?: RefType<boolean | undefined>"})," — chế độ lọc (Vue ref)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected?: RefType<ListSelectedList | undefined>"})," — danh sách các mã định danh đã chọn (Vue ref)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keyValue?: RefType<string | undefined>"})," — tên trường cho giá trị (mặc định là ",n.jsx(e.code,{children:"'value'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"keyLabel?: RefType<string | undefined>"})," — tên trường cho nhãn (mặc định là ",n.jsx(e.code,{children:"'label'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lite?: RefType<number | undefined>"})," — ngưỡng số lượng phần tử để kích hoạt chế độ Lite (Vue ref)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min: RefOrNormal<number | string | undefined> = 0"})," — số lượng lựa chọn tối thiểu được phép."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max: RefOrNormal<number | string | undefined> = 9_999_999"})," — số lượng lựa chọn tối đa được phép."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"parent?: string"})," — mã định danh cha (được sử dụng cho danh sách con)."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ListDataRef } from '@dxtmisha/functional'
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
`,n.jsx(e.h2,{id:"thuộc-tính",children:"Thuộc tính"}),`
`,n.jsx(e.h3,{id:"dữ-liệu",children:"Dữ liệu"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: Computed<ListList>"})," — danh sách dữ liệu chuẩn hóa cốt lõi cho cấp độ hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"liteData: Computed<ListList>"})," — phiên bản danh sách đơn giản hóa để hiển thị nhanh (chế độ Lite)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fullData: Computed<ListDataFull>"})," — danh sách dữ liệu mở rộng với các cờ ",n.jsx(e.code,{children:"focus"}),", ",n.jsx(e.code,{children:"selected"}),", ",n.jsx(e.code,{children:"disabled"})," và ",n.jsx(e.code,{children:"highlight"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"map: Computed<ListList>"})," — danh sách phẳng của tất cả các phần tử trong cây (bao gồm cả vùng chứa)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"mapItems: Computed<ListList>"})," — danh sách phẳng chỉ chứa các phần tử được chọn cuối cùng (",n.jsx(e.code,{children:"item"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"items: Computed<ListList>"})," — danh sách phẳng các phần tử tương tác (",n.jsx(e.code,{children:"item"}),", ",n.jsx(e.code,{children:"group"}),", ",n.jsx(e.code,{children:"menu"}),")."]}),`
`]}),`
`,n.jsx(e.h3,{id:"lựa-chọn-và-trạng-thái",children:"Lựa chọn và Trạng thái"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSelected: Computed<boolean>"})," — trả về ",n.jsx(e.code,{children:"true"})," nếu có ít nhất một mục được chọn trong toàn bộ cây."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSelectedMin: Computed<boolean>"})," — ",n.jsx(e.code,{children:"true"})," nếu số lượng mục được chọn đạt mức tối thiểu ",n.jsx(e.code,{children:"min"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isSelectedMax: Computed<boolean>"})," — ",n.jsx(e.code,{children:"true"})," nếu số lượng mục được chọn đạt ngưỡng ",n.jsx(e.code,{children:"max"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectedList: Computed<ListList>"})," — danh sách tất cả các đối tượng được chọn trên toàn bộ cây."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectedListInGroup: Computed<ListList>"})," — danh sách các đối tượng được chọn ở cấp độ hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectedNames: Computed<ListNames>"})," — mảng các nhãn (",n.jsx(e.code,{children:"label"}),") cho tất cả các mục được chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectedValues: Computed<any[]>"})," — mảng các giá trị (",n.jsx(e.code,{children:"value"}),") cho tất cả các mục được chọn."]}),`
`]}),`
`,n.jsx(e.h3,{id:"tìm-kiếm",children:"Tìm kiếm"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlightFirstItem: Computed<number>"})," — chỉ số của phần tử đầu tiên khớp với tìm kiếm trong ",n.jsx(e.code,{children:"map"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(e.h3,{id:"trạng-thái-và-kiểm-tra",children:"Trạng thái và Kiểm tra"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isLite(): boolean"})," — trả về ",n.jsx(e.code,{children:"true"})," nếu chế độ tối ưu hóa đang hoạt động."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isFocus(): boolean"})," — kiểm tra xem có tiêu điểm trong ",n.jsx(e.code,{children:"map"})," hiện tại hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isHighlight(): boolean"})," — trả về ",n.jsx(e.code,{children:"true"})," nếu tìm kiếm thấy kết quả khớp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isHighlightActive(): boolean"})," — kiểm tra xem quá trình tìm kiếm có đang hoạt động hay không."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLength(): number"})," — tổng số phần tử ở cấp độ hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLengthByMap(): number"})," — tổng số phần tử trong toàn bộ cây."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLengthByItems(): number"})," — số lượng phần tử cuối cùng trong toàn bộ cây."]}),`
`]}),`
`,n.jsx(e.h3,{id:"lấy-giá-trị",children:"Lấy giá trị"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFocus(): ListSelectedItem | undefined"})," — mã định danh đang được lấy tiêu điểm hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHighlight(): string | undefined"})," — chuỗi tìm kiếm hiện tại."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getHighlightLengthStart(): number"})," — độ dài chuỗi tối thiểu để kích hoạt tìm kiếm (mặc định là ",n.jsx(e.code,{children:"2"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSelected(): ListSelectedList | undefined"})," — danh sách các mã định danh đã chọn hiện tại."]}),`
`]}),`
`,n.jsx(e.h3,{id:"điều-hướng-và-tìm-kiếm",children:"Điều hướng và Tìm kiếm"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSelectedByStep(step): ListSelectedItem | undefined"})," — tìm phần tử lân cận so với lựa chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSelectedNext(): ListSelectedItem | undefined"})," — tiếp theo từ lựa chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSelectedPrev(): ListSelectedItem | undefined"})," — trước đó từ lựa chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItemByStep(item, step): ListDataItem | undefined"})," — tìm phần tử lân cận so với phần tử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItemNext(item): ListDataItem | undefined"})," — tiếp theo từ phần tử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItemPrev(item): ListDataItem | undefined"})," — trước đó từ phần tử."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getIndexByStep(index, step): ListDataItem | undefined"})," — tìm phần tử lân cận so với chỉ số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getIndexNext(index): ListDataItem | undefined"})," — tiếp theo từ chỉ số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getIndexPrev(index): ListDataItem | undefined"})," — trước đó từ chỉ số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItemByIndex(index): { key, item } | undefined"})," — tìm phần tử theo chỉ số."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItemByKey(key): ListDataItem | undefined"})," — trả về phần tử theo khóa trong map."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getFirstItemByParent(parent): ListDataItem | undefined"})," — phần tử tương tác đầu tiên của cha."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getLastItemByParent(parent): ListDataItem | undefined"})," — phần tử tương tác cuối cùng của cha."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSubList(item): ListDataRef"})," — tạo/trả về thực thể danh sách con."]}),`
`]}),`
`,n.jsx(e.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(e.p,{children:"Lớp sử dụng các cấu trúc chuẩn hóa để đảm bảo hành vi có thể dự đoán được với bất kỳ định dạng dữ liệu đầu vào nào."}),`
`,n.jsx(e.h3,{id:"listtype",children:n.jsx(e.code,{children:"ListType"})}),`
`,n.jsx(e.p,{children:"Xác định vai trò chức năng của một mục trong danh sách:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item"})," — phần tử tương tác chính có sẵn để lựa chọn và lấy tiêu điểm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"group"})," / ",n.jsx(e.code,{children:"menu"})," — các vùng chứa các danh sách lồng nhau (",n.jsx(e.code,{children:"value"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"subtitle"})," — một tiêu đề văn bản trong danh sách."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"html"})," — phần tử để chèn mã HTML tùy ý."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"line"})," / ",n.jsx(e.code,{children:"space"})," — các vạch ngăn cách và khoảng cách trực quan."]}),`
`]}),`
`,n.jsx(e.h3,{id:"listdataitem",children:n.jsx(e.code,{children:"ListDataItem"})}),`
`,n.jsx(e.p,{children:"Đối tượng mà tất cả dữ liệu đầu vào được chuyển đổi sau khi chuẩn hóa:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index: string"})," — mã định danh duy nhất (tự động tạo nếu không được cung cấp)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: ListType"})," — loại mục (mặc định là ",n.jsx(e.code,{children:"item"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"label?: string | number"})," — văn bản hiển thị trong giao diện."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: any"})," — một giá trị tùy ý được liên kết với mục."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"parent?: string"})," — mã định danh của mục cha."]}),`
`]}),`
`,n.jsx(e.h3,{id:"listdatafullitem",children:n.jsx(e.code,{children:"ListDataFullItem"})}),`
`,n.jsxs(e.p,{children:["Phiên bản mở rộng của ",n.jsx(e.code,{children:"ListDataItem"})," cho ",n.jsx(e.code,{children:"fullData"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"focus: boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu mục đang được lấy tiêu điểm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected: boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu mục được chọn."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disabled: boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu mục bị vô hiệu hóa (ví dụ: khi đạt đến giới hạn ",n.jsx(e.code,{children:"max"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlight?: string"})," — chuỗi tìm kiếm hiện tại nếu nó khớp với văn bản của mục."]}),`
`]}),`
`,n.jsx(e.h3,{id:"listlistinput",children:n.jsx(e.code,{children:"ListListInput"})}),`
`,n.jsx(e.p,{children:"Các định dạng dữ liệu được hỗ trợ cho hàm khởi tạo:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"string[]"})," — mảng chuỗi đơn giản (nhãn)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Record<string, string>"})," — đối tượng ",n.jsx(e.code,{children:"value: label"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ListDataBasic[]"})," — mảng các đối tượng với các trường như ",n.jsx(e.code,{children:"label"}),", ",n.jsx(e.code,{children:"value"}),", ",n.jsx(e.code,{children:"type"}),", v.v."]}),`
`]}),`
`,n.jsx(e.h2,{id:"quản-lý-lựa-chọn-selection",children:"Quản lý lựa chọn (Selection)"}),`
`,n.jsx(e.p,{children:"Lớp cung cấp các công cụ mạnh mẽ để kiểm soát trạng thái lựa chọn trong danh sách, hỗ trợ lựa chọn đơn và nhiều lựa chọn với các ràng buộc."}),`
`,n.jsx(e.h3,{id:"các-tham-số-lựa-chọn-cốt-lõi",children:"Các tham số lựa chọn cốt lõi"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selected"})," — biến phản ứng (Vue ",n.jsx(e.code,{children:"ref"}),") lưu trữ một mảng các mã định danh."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"min"})," / ",n.jsx(e.code,{children:"max"})," — các ràng buộc về số lượng mục được chọn trên cấp độ hiện tại."]}),`
`]}),`
`,n.jsx(e.h3,{id:"lựa-chọn-toàn-cầu-vs-cấp-độ-nhóm",children:"Lựa chọn Toàn cầu vs Cấp độ Nhóm"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"selectedList"})," — trả về tất cả các mục đã chọn loại ",n.jsx(e.code,{children:"item"})," từ toàn bộ cây."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"selectedListInGroup"})," — trả về các mục đã chọn chỉ từ cấp độ hiện tại (",n.jsx(e.code,{children:"data"}),"). Các ràng buộc ",n.jsx(e.code,{children:"min"})," và ",n.jsx(e.code,{children:"max"})," làm việc dựa trên danh sách này."]}),`
`]}),`
`,n.jsx(e.h3,{id:"trạng-thái-disabled-tự-động",children:"Trạng thái disabled tự động"}),`
`,n.jsxs(e.p,{children:["Khi đạt đến giới hạn ",n.jsx(e.code,{children:"max"})," (",n.jsx(e.code,{children:"isSelectedMax"}),"), lớp sẽ tự động đánh dấu các mục chưa được chọn còn lại trong ",n.jsx(e.code,{children:"fullData"})," là ",n.jsx(e.code,{children:"disabled: true"}),"."]}),`
`,n.jsx(e.h2,{id:"quản-lý-tiêu-điểm-focus",children:"Quản lý tiêu điểm (Focus)"}),`
`,n.jsxs(e.p,{children:["Trạng thái tiêu điểm được triển khai thông qua một biến phản ứng bên ngoài (Vue ",n.jsx(e.code,{children:"ref"}),")."]}),`
`,n.jsx(e.h3,{id:"các-tính-năng-chính-1",children:"Các tính năng chính"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Trạng thái dùng chung"})," — các danh sách con sử dụng cùng một ",n.jsx(e.code,{children:"ref"})," tiêu điểm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tính phản ứng"})," — ",n.jsx(e.code,{children:"fullData"})," tự động tính toán ",n.jsx(e.code,{children:"focus: true"})," bằng cách so sánh ",n.jsx(e.code,{children:"index"})," với biến tiêu điểm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Điều khiển thủ công"})," — lớp không tự thay đổi trạng thái tiêu điểm. Các phương thức điều hướng chỉ trả về đối tượng đích."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const next = listData.getItemNext(currentItem)
if (next) {
    focus.value = next.index 
}
`})}),`
`,n.jsx(e.h2,{id:"tìm-kiếm-và-làm-nổi-bật-highlight",children:"Tìm kiếm và Làm nổi bật (Highlight)"}),`
`,n.jsx(e.h3,{id:"các-tham-số-cốt-lõi",children:"Các tham số cốt lõi"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlight"})," — chuỗi phản ứng chứa truy vấn tìm kiếm."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"highlightLengthStart"})," — ngưỡng kích hoạt (mặc định là ",n.jsx(e.code,{children:"2"}),")."]}),`
`]}),`
`,n.jsx(e.h3,{id:"cách-thức-hoạt-động",children:"Cách thức hoạt động"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Regex"})," — tự động tạo biểu thức chính quy khi chuỗi tìm kiếm thay đổi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Các trường"})," — tìm kiếm trên ",n.jsx(e.code,{children:"label"}),", ",n.jsx(e.code,{children:"index"})," và trường ",n.jsx(e.code,{children:"search"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"fullData"})," — mỗi mục nhận giá trị ",n.jsx(e.code,{children:"highlight"})," để hiển thị trong UI."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Kết quả khớp đầu tiên"})," — ",n.jsx(e.code,{children:"highlightFirstItem"})," trả về chỉ số của mục đầu tiên tìm thấy trong mảng ",n.jsx(e.code,{children:"map"}),"."]}),`
`]}),`
`,n.jsx(e.h3,{id:"kiểm-tra-trạng-thái",children:"Kiểm tra trạng thái"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isHighlight()"})," — có ít nhất một mục khớp."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isHighlightActive()"})," — chuỗi tìm kiếm đã đạt đến độ dài yêu cầu."]}),`
`]}),`
`,n.jsx(e.h2,{id:"chế-độ-lọc-filtermode",children:"Chế độ lọc (filterMode)"}),`
`,n.jsxs(e.p,{children:["Tham số ",n.jsx(e.code,{children:"filterMode"})," là một cờ trạng thái hướng dẫn UI có nên ẩn các mục không khớp hay không. Cờ này được kế thừa bởi các danh sách con."]}),`
`,n.jsx(e.h2,{id:"chế-độ-lite-lite-mode",children:"Chế độ Lite (Lite Mode)"}),`
`,n.jsxs(e.p,{children:["Tối ưu hóa hiệu suất cho danh sách lớn. Nếu số lượng phần tử > ",n.jsx(e.code,{children:"lite"}),", thuộc tính ",n.jsx(e.code,{children:"liteData"})," với cấu trúc đơn giản sẽ được kích hoạt."]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.h3,{id:"hiển-thị-cây-nhóm",children:"Hiển thị cây nhóm"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<template>
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
`,n.jsx(e.h2,{id:"làm-việc-với-điều-hướng",children:"Làm việc với điều hướng"}),`
`,n.jsx(e.h3,{id:"điều-hướng-phẳng-vòng-lặp",children:"Điều hướng phẳng vòng lặp"}),`
`,n.jsxs(e.p,{children:["Các phương thức ",n.jsx(e.code,{children:"getItemNext/Prev"})," và ",n.jsx(e.code,{children:"getIndexNext/Prev"})," hoạt động thông qua ",n.jsx(e.code,{children:"mapItems"})," (chỉ các phần tử loại ",n.jsx(e.code,{children:"item"}),"). Điều hướng xuyên suốt cây dữ liệu và có tính vòng lặp."]}),`
`,n.jsx(e.h3,{id:"điều-hướng-dựa-trên-lựa-chọn",children:"Điều hướng dựa trên lựa chọn"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getSelectedNext/Prev"})," tìm phần tử lân cận so với phần tử được chọn đầu tiên."]}),`
`,n.jsx(e.h3,{id:"điều-hướng-theo-ngữ-cảnh-parent",children:"Điều hướng theo ngữ cảnh (Parent)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getFirstItemByParent"})," và ",n.jsx(e.code,{children:"getLastItemByParent"})," tìm ranh giới của cấp độ lồng nhau hiện tại bằng mã định danh cha."]})]})}function a(i={}){const{wrapper:e}={...h(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{a as default};
