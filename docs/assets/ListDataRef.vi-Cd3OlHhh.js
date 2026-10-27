import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/ListDataRef - Quản Lý Danh Sách Dữ Liệu`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-listdataref`,children:`Lớp ListDataRef`}),`
`,(0,c.jsx)(t.p,{children:`Mô hình danh sách phản ứng để chuẩn hóa, xử lý nhóm lồng, lựa chọn, tiêu điểm và tìm kiếm. Cung cấp các dạng computed cấp trên và phẳng mà không kết xuất giao diện hoặc sửa lựa chọn đầu vào.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa`}),` — nhận mảng nhãn, mảng đối tượng và bản ghi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nhóm lồng`}),` — `,(0,c.jsx)(t.code,{children:`group`}),` và `,(0,c.jsx)(t.code,{children:`menu`}),` duyệt đệ quy qua danh sách con đã lưu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trạng thái phản ứng`}),` — ref điều khiển lựa chọn, tiêu điểm, tìm kiếm và giới hạn.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined>, highlight?: RefType<string | undefined>, highlightLengthStart?: RefType<number | undefined>, filterMode?: RefType<boolean | undefined>, selected?: RefType<ListSelectedList | undefined>, keyValue?: RefType<string | undefined>, keyLabel?: RefType<string | undefined>, lite?: RefType<number | undefined>, min: RefOrNormal<number | string | undefined> = 0, max: RefOrNormal<number | string | undefined> = 9_999_999, parent?: string )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefOrNormal<ListListInput | undefined>`}),` — Danh sách hoặc bản ghi đầu vào, có thể phản ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`focus?: RefType<ListSelectedItem | undefined>`}),` — Ref chỉ mục tiêu điểm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlight?: RefType<string | undefined>`}),` — Ref truy vấn tìm kiếm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightLengthStart?: RefType<number | undefined>`}),` — Ref độ dài tìm kiếm tối thiểu; bỏ qua thì mặc định 2.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filterMode?: RefType<boolean | undefined>`}),` — Ref chế độ lọc, được sao vào fullData.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: RefType<ListSelectedList | undefined>`}),` — Ref chứa mã được chọn đơn hoặc mảng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyValue?: RefType<string | undefined>`}),` — Ref tên trường giá trị; mặc định value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyLabel?: RefType<string | undefined>`}),` — Ref tên trường nhãn; mặc định label.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lite?: RefType<number | undefined>`}),` — Ref ngưỡng danh sách rút gọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: RefOrNormal<number | string | undefined> = 0`}),` — Mức lựa chọn tối thiểu; mặc định 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: RefOrNormal<number | string | undefined> = 9_999_999`}),` — Mức lựa chọn tối đa; mặc định 9_999_999.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parent?: string`}),` — Chỉ mục cha hoặc undefined ở cấp gốc.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hành-vi-và-vòng-đời`,children:`Hành vi và vòng đời`}),`
`,(0,c.jsxs)(t.p,{children:[`Chỉ `,(0,c.jsx)(t.code,{children:`list`}),`, `,(0,c.jsx)(t.code,{children:`min`}),` và `,(0,c.jsx)(t.code,{children:`max`}),` nhận giá trị thường hoặc ref; tiêu điểm, tìm kiếm, lựa chọn, tên khóa, ngưỡng lite và chế độ lọc nhận ref. Mảng nhãn dùng vị trí chuỗi làm chỉ mục, vị trí số làm giá trị. Mục đối tượng ưu tiên `,(0,c.jsx)(t.code,{children:`index`}),` trực tiếp rồi `,(0,c.jsx)(t.code,{children:`value`}),` nguyên thủy. `,(0,c.jsx)(t.code,{children:`map`}),` làm phẳng `,(0,c.jsx)(t.code,{children:`item`}),`, `,(0,c.jsx)(t.code,{children:`group`}),`, `,(0,c.jsx)(t.code,{children:`menu`}),`; `,(0,c.jsx)(t.code,{children:`mapItems`}),` chỉ chứa mục lá. Điều hướng vượt biên trở về mục đầu hoặc cuối. Giới hạn ảnh hưởng trạng thái computed; lớp không sửa lựa chọn. Cờ tối thiểu cho biết đã đạt mức tối thiểu. `,(0,c.jsx)(t.code,{children:`getFocusItem()`}),` chỉ tìm ở cấp hiện tại. Thay ref danh sách xóa bộ nhớ đệm danh sách con; thay nguồn nhóm tạo lại danh sách con đã lưu. Dùng phạm vi hiệu ứng để dọn watcher danh sách.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-dùng`,children:`Cách dùng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const selected = /*#__PURE__*/ ref(['a'])
const focus = /*#__PURE__*/ ref('a')
const highlight = /*#__PURE__*/ ref('Ap')
const list = /*#__PURE__*/ new ListDataRef(
  [{ label: 'Apple', value: 'a' }, { label: 'Banana', value: 'b' }],
  focus, highlight, ref(2), ref(false), selected
)
list.selectedNames.value // ['Apple']
list.getSelectedNext() // 'b'
selected.value = ['b']
`})}),`
`,(0,c.jsx)(t.h2,{id:`thuộc-tính`,children:`Thuộc tính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ListList>`}),` — Mục đã chuẩn hóa ở cấp hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`liteData: ComputedRef<ListList>`}),` — Mục rút gọn khi vượt ngưỡng lite; ngược lại là dữ liệu chuẩn hóa đầy đủ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fullData: ComputedRef<ListDataFull>`}),` — Mục cấp hiện tại thêm focus, highlight, filterMode, selected và disabled. Giá trị disabled trực tiếp được ưu tiên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`map: ComputedRef<ListList>`}),` — Mục item/group/menu phẳng, giữ tiêu đề nhóm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mapItems: ComputedRef<ListList>`}),` — Mục lá item từ bản đồ phẳng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: ComputedRef<ListList>`}),` — Mục item/group/menu từ bản đồ phẳng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightFirstItem: ComputedRef<number>`}),` — Vị trí khớp đầu trong bản đồ, hoặc -1 khi không khớp hay truy vấn dưới ngưỡng. Tìm trong label, index hoặc search.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — Có ít nhất một lá khớp lựa chọn đầu vào hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelectedMin: ComputedRef<boolean>`}),` — Đúng khi số lựa chọn nhóm hiện tại đạt mức tối thiểu dương.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelectedMax: ComputedRef<boolean>`}),` — Đúng khi số lựa chọn nhóm hiện tại đạt mức tối đa dương. Giá trị tối đa falsy dùng giới hạn mặc định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedList: ComputedRef<ListList>`}),` — Lá được chọn trên toàn bản đồ phẳng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedListInGroup: ComputedRef<ListList>`}),` — Mục được chọn ở cấp hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedNames: ComputedRef<ListNames>`}),` — Nhãn của lá được chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedValues: ComputedRef<Array<ListDataItem['value']>>`}),` — Giá trị của lá được chọn, giữ 0 và false.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra-trạng-thái`,children:`Kiểm tra trạng thái`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isLite(): boolean`}),` — Đúng khi số mục cấp hiện tại vượt ngưỡng lite khác 0.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isFocus(): boolean`}),` — Kiểm tra chỉ mục tiêu điểm trong bản đồ phẳng.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isHighlight(): boolean`}),` — Cho biết tìm kiếm có khớp mục trong bản đồ hay không.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isHighlightActive(): boolean`}),` — Đúng khi truy vấn ngắn hơn ngưỡng hoặc có ít nhất một kết quả khớp.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`số-lượng-và-giá-trị-trạng-thái`,children:`Số lượng và giá trị trạng thái`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLength(): number`}),` — Trả số mục ở cấp hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLengthByMap(): number`}),` — Trả số mục bản đồ phẳng, gồm nhóm và menu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLengthByItems(): number`}),` — Trả số item/group/menu trong bản đồ phẳng.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFocus(): ListSelectedItem | undefined`}),` — Trả giá trị tiêu điểm đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFocusItem(): ListDataItem | undefined`}),` — Chỉ tìm mục tiêu điểm ở cấp hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHighlight(): string | undefined`}),` — Trả văn bản tìm kiếm.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHighlightLengthStart(): number`}),` — Trả ngưỡng độ dài tìm kiếm, mặc định 2.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSelected(): ListSelectedList | undefined`}),` — Trả lựa chọn đơn hoặc mảng lựa chọn đầu vào.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tra-cứu`,children:`Tra cứu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItemByIndex(index?: string): { key: number, item: ListDataItem } | undefined`}),` — Tra mục trong bản đồ phẳng và trả khóa bản đồ cùng mục.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItemByKey(key: number): ListDataItem | undefined`}),` — Trả mục tại vị trí bản đồ phẳng hoặc undefined.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstItemByParent(parent: string | undefined): ListDataItem | undefined`}),` — Trả mục item/group/menu đầu tiên có cha được truyền.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLastItemByParent(parent: string | undefined): ListDataItem | undefined`}),` — Trả mục item/group/menu cuối cùng có cha được truyền.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`điều-hướng`,children:`Điều hướng`}),`
`,(0,c.jsx)(t.h4,{id:`getselectedbystep`,children:(0,c.jsx)(t.code,{children:`getSelectedByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedByStep(step: number): ListSelectedItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Di chuyển từ lá được chọn đầu tiên theo bước truyền vào. Nếu chưa chọn lá, trả chỉ mục lá đầu. Danh sách rỗng trả `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Bước điều hướng có dấu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const index = /*#__PURE__*/ list.getSelectedByStep(1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getselectednext`,children:(0,c.jsx)(t.code,{children:`getSelectedNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedNext(): ListSelectedItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Trả chỉ mục lá kế tiếp so với lựa chọn, có quay vòng ở biên.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getSelectedNext()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getselectedprev`,children:(0,c.jsx)(t.code,{children:`getSelectedPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedPrev(): ListSelectedItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Trả chỉ mục lá trước so với lựa chọn, có quay vòng ở biên.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getSelectedPrev()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitembystep`,children:(0,c.jsx)(t.code,{children:`getItemByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Di chuyển trong bản đồ chỉ chứa lá. Bước dương vượt biên trả lá đầu; bước âm trả lá cuối. Bước 0 giữ mục đã tìm thấy.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Mục danh sách hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Bước điều hướng có dấu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const current = /*#__PURE__*/ list.getItemByIndex('a')
const next = current && list.getItemByStep(current.item, 1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitemnext`,children:(0,c.jsx)(t.code,{children:`getItemNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemNext(item: ListDataItem): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Trả mục lá sau một mục, quay về mục đầu khi cần.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Mục hoặc mảng đầu ra theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getItemNext(list.data.value[0]!)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitemprev`,children:(0,c.jsx)(t.code,{children:`getItemPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemPrev(item: ListDataItem): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Trả mục lá trước một mục, quay về mục cuối khi cần.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Mục hoặc mảng đầu ra theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getItemPrev(list.data.value[0]!)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexbystep`,children:(0,c.jsx)(t.code,{children:`getIndexByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexByStep(index: string, step: number): ListDataItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tra chỉ mục trong bản đồ rồi điều hướng qua lá. Chỉ mục không tồn tại trả `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Bước điều hướng có dấu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const next = /*#__PURE__*/ list.getIndexByStep('a', 1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexnext`,children:(0,c.jsx)(t.code,{children:`getIndexNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexNext(index: string): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Tra chỉ mục rồi trả mục lá kế tiếp.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getIndexNext('a')
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexprev`,children:(0,c.jsx)(t.code,{children:`getIndexPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexPrev(index: string): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Tra chỉ mục rồi trả mục lá trước.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Chỉ mục mục hoặc hiệu chỉnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Giá trị hoặc đối tượng được yêu cầu theo chữ ký.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getIndexPrev('a')
`})}),`
`,(0,c.jsx)(t.h3,{id:`danh-sách-lồng`,children:`Danh sách lồng`}),`
`,(0,c.jsx)(t.h4,{id:`getsublist`,children:(0,c.jsx)(t.code,{children:`getSubList`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSubList(item: ListDataItem): ListDataRef`})}),`
`,(0,c.jsx)(t.p,{children:`Trả mô hình con đã lưu, dùng chung ref trạng thái và giới hạn. Tạo lại khi nguồn nhóm thay đổi; cha là chỉ mục nhóm.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Mục hoặc mảng đầu ra theo chữ ký.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ListDataRef`}),` — Mô hình danh sách con đã lưu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const grouped = /*#__PURE__*/ new ListDataRef([{ type: 'group', index: 'fruit', label: 'Fruit', value: ['Apple'] }])
const group = grouped.data.value[0]
const children = group && grouped.getSubList(group)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};