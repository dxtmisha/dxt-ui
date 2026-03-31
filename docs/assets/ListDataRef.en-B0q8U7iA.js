import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Classes/ListDataRef - Data List Management`}),`
`,(0,c.jsx)(n.h1,{id:`listdataref-class`,children:`ListDataRef Class`}),`
`,(0,c.jsx)(n.p,{children:`A reactive class for managing data lists of any complexity. It supports filtering, selection, focus, and nested structures (groups and menus). The class transforms input data into a standardized format and provides an extensive set of methods for navigation, search, and element state management.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity`}),` — automatic update of computed properties when source data (Vue ref) or control parameters change.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Standardization`}),` — converts any input format (array of strings, objects) to a unified `,(0,c.jsx)(n.code,{children:`ListDataItem`}),` interface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Deep Nesting`}),` — supports tree-like structures with automatic sub-list management via `,(0,c.jsx)(n.code,{children:`getSubList`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Smart Navigation`}),` — built-in methods for list movement, considering filtering and element types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lite Mode`}),` — optimizes rendering for large lists using `,(0,c.jsx)(n.code,{children:`liteData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Selection Management`}),` — controls the number of selected items (min/max) and their states.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` instance for managing list data. The class provides input data standardization, focus management, selection, and search. It supports reactive updates when the source list or control parameters change.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefOrNormal<ListListInput | undefined>`}),` — reactive or regular data list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus?: RefType<ListSelectedItem | undefined>`}),` — focused item identifier (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight?: RefType<string | undefined>`}),` — search text for highlighting (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightLengthStart?: RefType<number | undefined>`}),` — minimum characters to start searching (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filterMode?: RefType<boolean | undefined>`}),` — filter mode (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected?: RefType<ListSelectedList | undefined>`}),` — list of selected identifiers (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyValue?: RefType<string | undefined>`}),` — field name for the value (defaults to `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyLabel?: RefType<string | undefined>`}),` — field name for the label (defaults to `,(0,c.jsx)(n.code,{children:`'label'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lite?: RefType<number | undefined>`}),` — number of elements threshold for enabling Lite mode (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: RefOrNormal<number | string | undefined> = 0`}),` — minimum allowed number of selections.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: RefOrNormal<number | string | undefined> = 9_999_999`}),` — maximum allowed number of selections.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: string`}),` — parent identifier (used for sub-lists).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const list = ref([
  { label: 'Item 1', value: 'item-1' },
  { label: 'Group 1', type: 'group', value: [
    { label: 'Sub-item 1.1', value: 'sub-1.1' }
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
`,(0,c.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsx)(n.h3,{id:`data`,children:`Data`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: Computed<ListList>`}),` — core standardized data list for the current level.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`liteData: Computed<ListList>`}),` — simplified list version for fast rendering (Lite mode).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullData: Computed<ListDataFull>`}),` — extended data list with `,(0,c.jsx)(n.code,{children:`focus`}),`, `,(0,c.jsx)(n.code,{children:`selected`}),`, `,(0,c.jsx)(n.code,{children:`disabled`}),`, and `,(0,c.jsx)(n.code,{children:`highlight`}),` flags.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`map: Computed<ListList>`}),` — flat list of all elements in the tree (including containers).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mapItems: Computed<ListList>`}),` — flat list of terminal selectable items (`,(0,c.jsx)(n.code,{children:`item`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: Computed<ListList>`}),` — flat list of interactive elements (`,(0,c.jsx)(n.code,{children:`item`}),`, `,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`menu`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`selection-and-state`,children:`Selection and State`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected: Computed<boolean>`}),` — returns `,(0,c.jsx)(n.code,{children:`true`}),` if at least one item is selected in the entire tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelectedMin: Computed<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the number of selected items in the group reached `,(0,c.jsx)(n.code,{children:`min`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelectedMax: Computed<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the number of selected items in the group reached `,(0,c.jsx)(n.code,{children:`max`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedList: Computed<ListList>`}),` — list of all selected objects across the entire tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedListInGroup: Computed<ListList>`}),` — list of objects selected at the current level.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedNames: Computed<ListNames>`}),` — array of labels (`,(0,c.jsx)(n.code,{children:`label`}),`) for all selected items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedValues: Computed<any[]>`}),` — array of values (`,(0,c.jsx)(n.code,{children:`value`}),`) for all selected items.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`search`,children:`Search`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightFirstItem: Computed<number>`}),` — index of the first matched element in `,(0,c.jsx)(n.code,{children:`map`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`status-and-checks`,children:`Status and Checks`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLite(): boolean`}),` — returns `,(0,c.jsx)(n.code,{children:`true`}),` if optimization mode is active.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFocus(): boolean`}),` — checks if focus exists in the current `,(0,c.jsx)(n.code,{children:`map`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlight(): boolean`}),` — returns `,(0,c.jsx)(n.code,{children:`true`}),` if search found matches.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlightActive(): boolean`}),` — checks if search process is active.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLength(): number`}),` — number of elements at the current level.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLengthByMap(): number`}),` — total count of elements in the tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLengthByItems(): number`}),` — number of terminal elements in the tree.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`retrieving-values`,children:`Retrieving Values`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFocus(): ListSelectedItem | undefined`}),` — current focused identifier.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHighlight(): string | undefined`}),` — current search string.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHighlightLengthStart(): number`}),` — minimum length for search (defaults to `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelected(): ListSelectedList | undefined`}),` — list of selected identifiers.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`navigation-and-search`,children:`Navigation and Search`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedByStep(step): ListSelectedItem | undefined`}),` — finds neighbor relative to selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedNext(): ListSelectedItem | undefined`}),` — next element from selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedPrev(): ListSelectedItem | undefined`}),` — previous element from selection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByStep(item, step): ListDataItem | undefined`}),` — finds neighbor relative to item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemNext(item): ListDataItem | undefined`}),` — next from item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemPrev(item): ListDataItem | undefined`}),` — previous from item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexByStep(index, step): ListDataItem | undefined`}),` — finds neighbor relative to index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexNext(index): ListDataItem | undefined`}),` — next from index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexPrev(index): ListDataItem | undefined`}),` — previous from index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByIndex(index): { key, item } | undefined`}),` — finds item by index.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByKey(key): ListDataItem | undefined`}),` — returns item by map key.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstItemByParent(parent): ListDataItem | undefined`}),` — first interactive element of parent.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLastItemByParent(parent): ListDataItem | undefined`}),` — last interactive element of parent.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSubList(item): ListDataRef`}),` — creates/returns sub-list instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-types`,children:`Data Types`}),`
`,(0,c.jsx)(n.p,{children:`The class uses standardized structures to ensure predictable behavior with any input data format.`}),`
`,(0,c.jsx)(n.h3,{id:`listtype`,children:(0,c.jsx)(n.code,{children:`ListType`})}),`
`,(0,c.jsx)(n.p,{children:`Defines the functional role of an item in the list:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item`}),` — the primary interactive element available for selection and focus.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group`}),` / `,(0,c.jsx)(n.code,{children:`menu`}),` — containers holding nested lists (`,(0,c.jsx)(n.code,{children:`value`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subtitle`}),` — a text header within the list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`html`}),` — an element for inserting arbitrary HTML code.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`line`}),` / `,(0,c.jsx)(n.code,{children:`space`}),` — visual dividers and spacers.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listdataitem`,children:(0,c.jsx)(n.code,{children:`ListDataItem`})}),`
`,(0,c.jsx)(n.p,{children:`The object that all input data is converted to after standardization:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — a unique identifier (automatically generated if not provided).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ListType`}),` — the item type (defaults to `,(0,c.jsx)(n.code,{children:`item`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string | number`}),` — the text displayed in the interface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: any`}),` — an arbitrary value associated with the item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: string`}),` — the identifier of the parent item (for nested structures).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listdatafullitem`,children:(0,c.jsx)(n.code,{children:`ListDataFullItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`An extended version of `,(0,c.jsx)(n.code,{children:`ListDataItem`}),` used in the `,(0,c.jsx)(n.code,{children:`fullData`}),` property. Includes calculated state flags:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the item is currently focused.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the item is selected.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disabled: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` if the item is disabled (e.g., when the `,(0,c.jsx)(n.code,{children:`max`}),` selection limit is reached).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight?: string`}),` — the current search string if it matches the item's text.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listlistinput`,children:(0,c.jsx)(n.code,{children:`ListListInput`})}),`
`,(0,c.jsx)(n.p,{children:`Supported data formats for the constructor and nested groups:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — a simple array of strings (used as labels).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Record<string, string>`}),` — an object where the key is the technical value and the property is the text label.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ListDataBasic[]`}),` — an array of objects with fields like `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),`, etc.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`selection-management`,children:`Selection Management`}),`
`,(0,c.jsx)(n.p,{children:`The class provides powerful tools for controlling the selection state in the list, supporting single and multiple selections with constraints.`}),`
`,(0,c.jsx)(n.h3,{id:`core-selection-parameters`,children:`Core Selection Parameters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected`}),` — a reactive variable (Vue `,(0,c.jsx)(n.code,{children:`ref`}),`) storing an array of identifiers for the selected items.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min`}),` / `,(0,c.jsx)(n.code,{children:`max`}),` — constraints on the number of selected items `,(0,c.jsx)(n.strong,{children:`at the current nesting level`}),` (within a group).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`global-vs-group-level-selection`,children:`Global vs Group-Level Selection`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`selectedList`}),` (Global) — returns all selected items of type `,(0,c.jsx)(n.code,{children:`item`}),` from the entire data tree.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`selectedListInGroup`}),` (Group-level) — returns selected items only from the current level (`,(0,c.jsx)(n.code,{children:`data`}),`). The `,(0,c.jsx)(n.code,{children:`min`}),` and `,(0,c.jsx)(n.code,{children:`max`}),` constraints are calculated based on this list.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`automatic-disabled-state`,children:`Automatic disabled state`}),`
`,(0,c.jsxs)(n.p,{children:[`When the `,(0,c.jsx)(n.code,{children:`max`}),` limit is reached (the `,(0,c.jsx)(n.code,{children:`isSelectedMax`}),` property becomes `,(0,c.jsx)(n.code,{children:`true`}),`), the class automatically marks the remaining unselected items in `,(0,c.jsx)(n.code,{children:`fullData`}),` as `,(0,c.jsx)(n.code,{children:`disabled: true`}),`. This allows UI components to visually block further selections.`]}),`
`,(0,c.jsx)(n.h3,{id:`retrieving-data`,children:`Retrieving Data`}),`
`,(0,c.jsxs)(n.p,{children:[`For convenience, the properties `,(0,c.jsx)(n.code,{children:`selectedNames`}),` (array of `,(0,c.jsx)(n.code,{children:`label`}),` strings) and `,(0,c.jsx)(n.code,{children:`selectedValues`}),` (array of `,(0,c.jsx)(n.code,{children:`value`}),` values) aggregate data across all selected items in the tree.`]}),`
`,(0,c.jsx)(n.h2,{id:`focus-management`,children:`Focus Management`}),`
`,(0,c.jsxs)(n.p,{children:[`Focus state in `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` is implemented via an external reactive variable (typically a Vue `,(0,c.jsx)(n.code,{children:`ref`}),`) passed to the constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`key-focus-features`,children:`Key Focus Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Shared Global State`}),` — when sub-lists are created via `,(0,c.jsx)(n.code,{children:`getSubList`}),`, the same focus `,(0,c.jsx)(n.code,{children:`ref`}),` is passed to all child instances. This ensures that in a complex data tree, only one element can be focused at any given time.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity via fullData`}),` — the `,(0,c.jsx)(n.code,{children:`fullData`}),` property automatically recalculates the `,(0,c.jsx)(n.code,{children:`focus: true`}),` flag for the specific item whose `,(0,c.jsx)(n.code,{children:`index`}),` matches the current focus value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Manual Control`}),` — the `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` class `,(0,c.jsx)(n.strong,{children:`does not modify`}),` the focus state itself. Navigation methods (like `,(0,c.jsx)(n.code,{children:`getItemNext`}),`) only return the target object. The developer must manually assign the new index to the focus ref.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Example: setting focus to the next item
const next = listData.getItemNext(currentItem)
if (next) {
    focus.value = next.index // Reactive focus update
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`checking-focus-presence`,children:`Checking Focus Presence`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`isFocus()`}),` method allows you to quickly determine if any element within the current instance (including all nested levels in `,(0,c.jsx)(n.code,{children:`map`}),`) is focused. This is useful for visual indicators of list activity (e.g., adding a border or shadow to the entire component).`]}),`
`,(0,c.jsx)(n.h2,{id:`search-and-highlighting`,children:`Search and Highlighting`}),`
`,(0,c.jsx)(n.p,{children:`The search mechanism allows for filtering or visually highlighting items based on text input.`}),`
`,(0,c.jsx)(n.h3,{id:`core-search-parameters`,children:`Core Search Parameters`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight`}),` — a reactive string containing the search query.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightLengthStart`}),` — activation threshold (defaults to `,(0,c.jsx)(n.code,{children:`2`}),`). Searching does not begin until the string length reaches this value.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`how-search-works`,children:`How Search Works`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Regex Generation`}),` — when the search string changes, the class automatically generates a case-insensitive regular expression.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Search Fields`}),` — the search is performed across three item fields: `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`index`}),`, and the special `,(0,c.jsx)(n.code,{children:`search`}),` field (if defined in the source data).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integration in fullData`}),` — during an active search, every item in the `,(0,c.jsx)(n.code,{children:`fullData`}),` property receives the current `,(0,c.jsx)(n.code,{children:`highlight`}),` value. This allows UI components to highlight matched substrings.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`First Match`}),` — the `,(0,c.jsx)(n.code,{children:`highlightFirstItem`}),` property always returns the sequence index of the first found item in the `,(0,c.jsx)(n.code,{children:`map`}),` array. This is useful for auto-scrolling to the first result.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`status-checks`,children:`Status Checks`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlight()`}),` — returns `,(0,c.jsx)(n.code,{children:`true`}),` if at least one item matches the query.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlightActive()`}),` — returns `,(0,c.jsx)(n.code,{children:`true`}),` if the search string has reached the required length, `,(0,c.jsx)(n.strong,{children:`regardless`}),` of whether results were found. This helps distinguish between "no input" and "no results found" states.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`filtering-mode-filtermode`,children:`Filtering Mode (filterMode)`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`filterMode`}),` parameter is a state flag that instructs UI components whether to physically hide items that do not match the search query.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Propagation`}),` — the `,(0,c.jsx)(n.code,{children:`filterMode`}),` value is automatically injected into every `,(0,c.jsx)(n.code,{children:`ListDataItem`}),` object within `,(0,c.jsx)(n.code,{children:`fullData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Inheritance`}),` — when sub-lists are created via `,(0,c.jsx)(n.code,{children:`getSubList`}),`, the filtering flag is inherited by child instances.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Logical Impact`}),` — the `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` class itself does not remove items from the `,(0,c.jsx)(n.code,{children:`data`}),` or `,(0,c.jsx)(n.code,{children:`map`}),` arrays when `,(0,c.jsx)(n.code,{children:`filterMode`}),` is active. This allows the UI layer to decide exactly how to animate or hide the filtered rows.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`lite-mode`,children:`Lite Mode`}),`
`,(0,c.jsx)(n.p,{children:`Lite Mode is designed to optimize performance when working with very large data lists. It avoids deep calculation of all properties for every item when it's not required for initial rendering.`}),`
`,(0,c.jsx)(n.h3,{id:`how-it-works`,children:`How It Works`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Activation Threshold`}),` — the `,(0,c.jsx)(n.code,{children:`lite`}),` parameter in the constructor defines the maximum number of elements for normal mode. If the element count in `,(0,c.jsx)(n.code,{children:`data`}),` exceeds this threshold, Lite Mode is automatically activated.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`liteData Property`}),` — in this mode, the `,(0,c.jsx)(n.code,{children:`liteData`}),` property contains a simplified structure of elements, minimizing memory and CPU load during rendering.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`isLite() Method`}),` — allows you to programmatically check if the optimization mode is currently active.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:`This is extremely useful for dropdowns or tables with thousands of rows, where full reactivity for every off-screen item could slow down the interface.`}),`
`,(0,c.jsx)(n.h2,{id:`working-with-navigation`,children:`Working with Navigation`}),`
`,(0,c.jsxs)(n.p,{children:[`Navigation in `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` is built on a deep understanding of the data structure. The class distinguishes between containers (`,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`menu`}),`) and terminal selection elements (`,(0,c.jsx)(n.code,{children:`item`}),`).`]}),`
`,(0,c.jsx)(n.h3,{id:`flat-cyclic-navigation`,children:`Flat Cyclic Navigation`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`getItemNext`}),`, `,(0,c.jsx)(n.code,{children:`getItemPrev`}),`, `,(0,c.jsx)(n.code,{children:`getIndexNext`}),`, and `,(0,c.jsx)(n.code,{children:`getIndexPrev`}),` methods operate via the `,(0,c.jsx)(n.code,{children:`mapItems`}),` property. This means:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Structure Agnostic`}),`: Movement occurs only through elements of type `,(0,c.jsx)(n.code,{children:`item`}),`, skipping group headers and menus.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Search`}),`: Navigation traverses the entire data tree (Flat Map), even if items are located in different groups.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cyclic Behavior`}),`: If you are on the last item and call `,(0,c.jsx)(n.code,{children:`Next`}),`, the method will return the `,(0,c.jsx)(n.strong,{children:`first`}),` item in the list. Similarly, `,(0,c.jsx)(n.code,{children:`Prev`}),` from the first item will return the `,(0,c.jsx)(n.strong,{children:`last`}),` one.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`selection-based-navigation`,children:`Selection-Based Navigation`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`getSelectedNext`}),` and `,(0,c.jsx)(n.code,{children:`getSelectedPrev`}),` methods automatically find the first selected item in the list and return its neighbor. If nothing is selected, navigation starts from the first item in the list.`]}),`
`,(0,c.jsx)(n.h3,{id:`contextual-navigation-parent`,children:`Contextual Navigation (Parent)`}),`
`,(0,c.jsxs)(n.p,{children:[`To restrict movement within a single group, use the `,(0,c.jsx)(n.code,{children:`getFirstItemByParent`}),` and `,(0,c.jsx)(n.code,{children:`getLastItemByParent`}),` methods. These allow you to quickly find the boundaries of the current nesting level using the parent identifier.`]}),`
`,(0,c.jsx)(n.h3,{id:`example-implementing-focus-movement`,children:`Example: Implementing Focus Movement`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const list = ref([
    { label: 'Group 1', type: 'group', value: [ { label: 'Item 1.1' } ] },
    { label: 'Item 2' }
])
const focus = ref(undefined)
const listData = new ListDataRef(list, focus)

/**
 * Method to handle ArrowDown key press
 */
const onArrowDown = () => {
    // Get the current item from focus
    const current = listData.getItemByIndex(focus.value)?.item
    
    // Get the next terminal item across the entire map (mapItems)
    // If focus is empty or the item is the last one — it returns the first item (cyclic)
    const next = current ? listData.getItemNext(current) : listData.mapItems.value[0]
    
    if (next) {
        focus.value = next.index
    }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsx)(n.h3,{id:`rendering-a-group-tree`,children:`Rendering a Group Tree`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<template>
  <ul>
    <li v-for="item in listData.data.value" :key="item.index">
      {{ item.label }}
      
      <!-- If it's a group, recursively render the sub-list -->
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};