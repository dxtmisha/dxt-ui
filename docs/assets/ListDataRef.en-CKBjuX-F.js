import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional/Classes/ListDataRef - Data List Management"}),`
`,e.jsx(i.h1,{id:"listdataref-class",children:"ListDataRef Class"}),`
`,e.jsx(i.p,{children:"A reactive class for managing data lists of any complexity. It supports filtering, selection, focus, and nested structures (groups and menus). The class transforms input data into a standardized format and provides an extensive set of methods for navigation, search, and element state management."}),`
`,e.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Reactivity"})," — automatic update of computed properties when source data (Vue ref) or control parameters change."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Standardization"})," — converts any input format (array of strings, objects) to a unified ",e.jsx(i.code,{children:"ListDataItem"})," interface."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Deep Nesting"})," — supports tree-like structures with automatic sub-list management via ",e.jsx(i.code,{children:"getSubList"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Smart Navigation"})," — built-in methods for list movement, considering filtering and element types."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Lite Mode"})," — optimizes rendering for large lists using ",e.jsx(i.code,{children:"liteData"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Selection Management"})," — controls the number of selected items (min/max) and their states."]}),`
`]}),`
`,e.jsx(i.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(i.p,{children:["Creates a new ",e.jsx(i.code,{children:"ListDataRef"})," instance for managing list data. The class provides input data standardization, focus management, selection, and search. It supports reactive updates when the source list or control parameters change."]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Parameters:"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"list: RefOrNormal<ListListInput | undefined>"})," — reactive or regular data list."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"focus?: RefType<ListSelectedItem | undefined>"})," — focused item identifier (Vue ref)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"highlight?: RefType<string | undefined>"})," — search text for highlighting (Vue ref)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"highlightLengthStart?: RefType<number | undefined>"})," — minimum characters to start searching (Vue ref)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"filterMode?: RefType<boolean | undefined>"})," — filter mode (Vue ref)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selected?: RefType<ListSelectedList | undefined>"})," — list of selected identifiers (Vue ref)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"keyValue?: RefType<string | undefined>"})," — field name for the value (defaults to ",e.jsx(i.code,{children:"'value'"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"keyLabel?: RefType<string | undefined>"})," — field name for the label (defaults to ",e.jsx(i.code,{children:"'label'"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"lite?: RefType<number | undefined>"})," — number of elements threshold for enabling Lite mode (Vue ref)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"min: RefOrNormal<number | string | undefined> = 0"})," — minimum allowed number of selections."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"max: RefOrNormal<number | string | undefined> = 9_999_999"})," — maximum allowed number of selections."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"parent?: string"})," — parent identifier (used for sub-lists)."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`import { ListDataRef } from '@dxtmisha/functional'
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
`,e.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(i.h3,{id:"data",children:"Data"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"data: Computed<ListList>"})," — core standardized data list for the current level."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"liteData: Computed<ListList>"})," — simplified list version for fast rendering (Lite mode)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"fullData: Computed<ListDataFull>"})," — extended data list with ",e.jsx(i.code,{children:"focus"}),", ",e.jsx(i.code,{children:"selected"}),", ",e.jsx(i.code,{children:"disabled"}),", and ",e.jsx(i.code,{children:"highlight"})," flags."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"map: Computed<ListList>"})," — flat list of all elements in the tree (including containers)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mapItems: Computed<ListList>"})," — flat list of terminal selectable items (",e.jsx(i.code,{children:"item"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"items: Computed<ListList>"})," — flat list of interactive elements (",e.jsx(i.code,{children:"item"}),", ",e.jsx(i.code,{children:"group"}),", ",e.jsx(i.code,{children:"menu"}),")."]}),`
`]}),`
`,e.jsx(i.h3,{id:"selection-and-state",children:"Selection and State"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isSelected: Computed<boolean>"})," — returns ",e.jsx(i.code,{children:"true"})," if at least one item is selected in the entire tree."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isSelectedMin: Computed<boolean>"})," — ",e.jsx(i.code,{children:"true"})," if the number of selected items in the group reached ",e.jsx(i.code,{children:"min"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isSelectedMax: Computed<boolean>"})," — ",e.jsx(i.code,{children:"true"})," if the number of selected items in the group reached ",e.jsx(i.code,{children:"max"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selectedList: Computed<ListList>"})," — list of all selected objects across the entire tree."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selectedListInGroup: Computed<ListList>"})," — list of objects selected at the current level."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selectedNames: Computed<ListNames>"})," — array of labels (",e.jsx(i.code,{children:"label"}),") for all selected items."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selectedValues: Computed<any[]>"})," — array of values (",e.jsx(i.code,{children:"value"}),") for all selected items."]}),`
`]}),`
`,e.jsx(i.h3,{id:"search",children:"Search"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"highlightFirstItem: Computed<number>"})," — index of the first matched element in ",e.jsx(i.code,{children:"map"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"methods",children:"Methods"}),`
`,e.jsx(i.h3,{id:"status-and-checks",children:"Status and Checks"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isLite(): boolean"})," — returns ",e.jsx(i.code,{children:"true"})," if optimization mode is active."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isFocus(): boolean"})," — checks if focus exists in the current ",e.jsx(i.code,{children:"map"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isHighlight(): boolean"})," — returns ",e.jsx(i.code,{children:"true"})," if search found matches."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isHighlightActive(): boolean"})," — checks if search process is active."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getLength(): number"})," — number of elements at the current level."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getLengthByMap(): number"})," — total count of elements in the tree."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getLengthByItems(): number"})," — number of terminal elements in the tree."]}),`
`]}),`
`,e.jsx(i.h3,{id:"retrieving-values",children:"Retrieving Values"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getFocus(): ListSelectedItem | undefined"})," — current focused identifier."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getHighlight(): string | undefined"})," — current search string."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getHighlightLengthStart(): number"})," — minimum length for search (defaults to ",e.jsx(i.code,{children:"2"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getSelected(): ListSelectedList | undefined"})," — list of selected identifiers."]}),`
`]}),`
`,e.jsx(i.h3,{id:"navigation-and-search",children:"Navigation and Search"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getSelectedByStep(step): ListSelectedItem | undefined"})," — finds neighbor relative to selection."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getSelectedNext(): ListSelectedItem | undefined"})," — next element from selection."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getSelectedPrev(): ListSelectedItem | undefined"})," — previous element from selection."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getItemByStep(item, step): ListDataItem | undefined"})," — finds neighbor relative to item."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getItemNext(item): ListDataItem | undefined"})," — next from item."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getItemPrev(item): ListDataItem | undefined"})," — previous from item."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getIndexByStep(index, step): ListDataItem | undefined"})," — finds neighbor relative to index."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getIndexNext(index): ListDataItem | undefined"})," — next from index."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getIndexPrev(index): ListDataItem | undefined"})," — previous from index."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getItemByIndex(index): { key, item } | undefined"})," — finds item by index."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getItemByKey(key): ListDataItem | undefined"})," — returns item by map key."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getFirstItemByParent(parent): ListDataItem | undefined"})," — first interactive element of parent."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getLastItemByParent(parent): ListDataItem | undefined"})," — last interactive element of parent."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"getSubList(item): ListDataRef"})," — creates/returns sub-list instance."]}),`
`]}),`
`,e.jsx(i.h2,{id:"data-types",children:"Data Types"}),`
`,e.jsx(i.p,{children:"The class uses standardized structures to ensure predictable behavior with any input data format."}),`
`,e.jsx(i.h3,{id:"listtype",children:e.jsx(i.code,{children:"ListType"})}),`
`,e.jsx(i.p,{children:"Defines the functional role of an item in the list:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"item"})," — the primary interactive element available for selection and focus."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"group"})," / ",e.jsx(i.code,{children:"menu"})," — containers holding nested lists (",e.jsx(i.code,{children:"value"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"subtitle"})," — a text header within the list."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"html"})," — an element for inserting arbitrary HTML code."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"line"})," / ",e.jsx(i.code,{children:"space"})," — visual dividers and spacers."]}),`
`]}),`
`,e.jsx(i.h3,{id:"listdataitem",children:e.jsx(i.code,{children:"ListDataItem"})}),`
`,e.jsx(i.p,{children:"The object that all input data is converted to after standardization:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"index: string"})," — a unique identifier (automatically generated if not provided)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"type: ListType"})," — the item type (defaults to ",e.jsx(i.code,{children:"item"}),")."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"label?: string | number"})," — the text displayed in the interface."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"value?: any"})," — an arbitrary value associated with the item."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"parent?: string"})," — the identifier of the parent item (for nested structures)."]}),`
`]}),`
`,e.jsx(i.h3,{id:"listdatafullitem",children:e.jsx(i.code,{children:"ListDataFullItem"})}),`
`,e.jsxs(i.p,{children:["An extended version of ",e.jsx(i.code,{children:"ListDataItem"})," used in the ",e.jsx(i.code,{children:"fullData"})," property. Includes calculated state flags:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"focus: boolean"})," — ",e.jsx(i.code,{children:"true"})," if the item is currently focused."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selected: boolean"})," — ",e.jsx(i.code,{children:"true"})," if the item is selected."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"disabled: boolean"})," — ",e.jsx(i.code,{children:"true"})," if the item is disabled (e.g., when the ",e.jsx(i.code,{children:"max"})," selection limit is reached)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"highlight?: string"})," — the current search string if it matches the item's text."]}),`
`]}),`
`,e.jsx(i.h3,{id:"listlistinput",children:e.jsx(i.code,{children:"ListListInput"})}),`
`,e.jsx(i.p,{children:"Supported data formats for the constructor and nested groups:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"string[]"})," — a simple array of strings (used as labels)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"Record<string, string>"})," — an object where the key is the technical value and the property is the text label."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ListDataBasic[]"})," — an array of objects with fields like ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"value"}),", ",e.jsx(i.code,{children:"type"}),", etc."]}),`
`]}),`
`,e.jsx(i.h2,{id:"selection-management",children:"Selection Management"}),`
`,e.jsx(i.p,{children:"The class provides powerful tools for controlling the selection state in the list, supporting single and multiple selections with constraints."}),`
`,e.jsx(i.h3,{id:"core-selection-parameters",children:"Core Selection Parameters"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"selected"})," — a reactive variable (Vue ",e.jsx(i.code,{children:"ref"}),") storing an array of identifiers for the selected items."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"min"})," / ",e.jsx(i.code,{children:"max"})," — constraints on the number of selected items ",e.jsx(i.strong,{children:"at the current nesting level"})," (within a group)."]}),`
`]}),`
`,e.jsx(i.h3,{id:"global-vs-group-level-selection",children:"Global vs Group-Level Selection"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"selectedList"})," (Global) — returns all selected items of type ",e.jsx(i.code,{children:"item"})," from the entire data tree."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"selectedListInGroup"})," (Group-level) — returns selected items only from the current level (",e.jsx(i.code,{children:"data"}),"). The ",e.jsx(i.code,{children:"min"})," and ",e.jsx(i.code,{children:"max"})," constraints are calculated based on this list."]}),`
`]}),`
`,e.jsx(i.h3,{id:"automatic-disabled-state",children:"Automatic disabled state"}),`
`,e.jsxs(i.p,{children:["When the ",e.jsx(i.code,{children:"max"})," limit is reached (the ",e.jsx(i.code,{children:"isSelectedMax"})," property becomes ",e.jsx(i.code,{children:"true"}),"), the class automatically marks the remaining unselected items in ",e.jsx(i.code,{children:"fullData"})," as ",e.jsx(i.code,{children:"disabled: true"}),". This allows UI components to visually block further selections."]}),`
`,e.jsx(i.h3,{id:"retrieving-data",children:"Retrieving Data"}),`
`,e.jsxs(i.p,{children:["For convenience, the properties ",e.jsx(i.code,{children:"selectedNames"})," (array of ",e.jsx(i.code,{children:"label"})," strings) and ",e.jsx(i.code,{children:"selectedValues"})," (array of ",e.jsx(i.code,{children:"value"})," values) aggregate data across all selected items in the tree."]}),`
`,e.jsx(i.h2,{id:"focus-management",children:"Focus Management"}),`
`,e.jsxs(i.p,{children:["Focus state in ",e.jsx(i.code,{children:"ListDataRef"})," is implemented via an external reactive variable (typically a Vue ",e.jsx(i.code,{children:"ref"}),") passed to the constructor."]}),`
`,e.jsx(i.h3,{id:"key-focus-features",children:"Key Focus Features"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Shared Global State"})," — when sub-lists are created via ",e.jsx(i.code,{children:"getSubList"}),", the same focus ",e.jsx(i.code,{children:"ref"})," is passed to all child instances. This ensures that in a complex data tree, only one element can be focused at any given time."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Reactivity via fullData"})," — the ",e.jsx(i.code,{children:"fullData"})," property automatically recalculates the ",e.jsx(i.code,{children:"focus: true"})," flag for the specific item whose ",e.jsx(i.code,{children:"index"})," matches the current focus value."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Manual Control"})," — the ",e.jsx(i.code,{children:"ListDataRef"})," class ",e.jsx(i.strong,{children:"does not modify"})," the focus state itself. Navigation methods (like ",e.jsx(i.code,{children:"getItemNext"}),") only return the target object. The developer must manually assign the new index to the focus ref."]}),`
`]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`// Example: setting focus to the next item
const next = listData.getItemNext(currentItem)
if (next) {
    focus.value = next.index // Reactive focus update
}
`})}),`
`,e.jsx(i.h3,{id:"checking-focus-presence",children:"Checking Focus Presence"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"isFocus()"})," method allows you to quickly determine if any element within the current instance (including all nested levels in ",e.jsx(i.code,{children:"map"}),") is focused. This is useful for visual indicators of list activity (e.g., adding a border or shadow to the entire component)."]}),`
`,e.jsx(i.h2,{id:"search-and-highlighting",children:"Search and Highlighting"}),`
`,e.jsx(i.p,{children:"The search mechanism allows for filtering or visually highlighting items based on text input."}),`
`,e.jsx(i.h3,{id:"core-search-parameters",children:"Core Search Parameters"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"highlight"})," — a reactive string containing the search query."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"highlightLengthStart"})," — activation threshold (defaults to ",e.jsx(i.code,{children:"2"}),"). Searching does not begin until the string length reaches this value."]}),`
`]}),`
`,e.jsx(i.h3,{id:"how-search-works",children:"How Search Works"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Regex Generation"})," — when the search string changes, the class automatically generates a case-insensitive regular expression."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Search Fields"})," — the search is performed across three item fields: ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"index"}),", and the special ",e.jsx(i.code,{children:"search"})," field (if defined in the source data)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Integration in fullData"})," — during an active search, every item in the ",e.jsx(i.code,{children:"fullData"})," property receives the current ",e.jsx(i.code,{children:"highlight"})," value. This allows UI components to highlight matched substrings."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"First Match"})," — the ",e.jsx(i.code,{children:"highlightFirstItem"})," property always returns the sequence index of the first found item in the ",e.jsx(i.code,{children:"map"})," array. This is useful for auto-scrolling to the first result."]}),`
`]}),`
`,e.jsx(i.h3,{id:"status-checks",children:"Status Checks"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isHighlight()"})," — returns ",e.jsx(i.code,{children:"true"})," if at least one item matches the query."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isHighlightActive()"})," — returns ",e.jsx(i.code,{children:"true"})," if the search string has reached the required length, ",e.jsx(i.strong,{children:"regardless"}),' of whether results were found. This helps distinguish between "no input" and "no results found" states.']}),`
`]}),`
`,e.jsx(i.h3,{id:"filtering-mode-filtermode",children:"Filtering Mode (filterMode)"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"filterMode"})," parameter is a state flag that instructs UI components whether to physically hide items that do not match the search query."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Propagation"})," — the ",e.jsx(i.code,{children:"filterMode"})," value is automatically injected into every ",e.jsx(i.code,{children:"ListDataItem"})," object within ",e.jsx(i.code,{children:"fullData"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Inheritance"})," — when sub-lists are created via ",e.jsx(i.code,{children:"getSubList"}),", the filtering flag is inherited by child instances."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Logical Impact"})," — the ",e.jsx(i.code,{children:"ListDataRef"})," class itself does not remove items from the ",e.jsx(i.code,{children:"data"})," or ",e.jsx(i.code,{children:"map"})," arrays when ",e.jsx(i.code,{children:"filterMode"})," is active. This allows the UI layer to decide exactly how to animate or hide the filtered rows."]}),`
`]}),`
`,e.jsx(i.h2,{id:"lite-mode",children:"Lite Mode"}),`
`,e.jsx(i.p,{children:"Lite Mode is designed to optimize performance when working with very large data lists. It avoids deep calculation of all properties for every item when it's not required for initial rendering."}),`
`,e.jsx(i.h3,{id:"how-it-works",children:"How It Works"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Activation Threshold"})," — the ",e.jsx(i.code,{children:"lite"})," parameter in the constructor defines the maximum number of elements for normal mode. If the element count in ",e.jsx(i.code,{children:"data"})," exceeds this threshold, Lite Mode is automatically activated."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"liteData Property"})," — in this mode, the ",e.jsx(i.code,{children:"liteData"})," property contains a simplified structure of elements, minimizing memory and CPU load during rendering."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"isLite() Method"})," — allows you to programmatically check if the optimization mode is currently active."]}),`
`]}),`
`,e.jsx(i.p,{children:"This is extremely useful for dropdowns or tables with thousands of rows, where full reactivity for every off-screen item could slow down the interface."}),`
`,e.jsx(i.h2,{id:"working-with-navigation",children:"Working with Navigation"}),`
`,e.jsxs(i.p,{children:["Navigation in ",e.jsx(i.code,{children:"ListDataRef"})," is built on a deep understanding of the data structure. The class distinguishes between containers (",e.jsx(i.code,{children:"group"}),", ",e.jsx(i.code,{children:"menu"}),") and terminal selection elements (",e.jsx(i.code,{children:"item"}),")."]}),`
`,e.jsx(i.h3,{id:"flat-cyclic-navigation",children:"Flat Cyclic Navigation"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"getItemNext"}),", ",e.jsx(i.code,{children:"getItemPrev"}),", ",e.jsx(i.code,{children:"getIndexNext"}),", and ",e.jsx(i.code,{children:"getIndexPrev"})," methods operate via the ",e.jsx(i.code,{children:"mapItems"})," property. This means:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Structure Agnostic"}),": Movement occurs only through elements of type ",e.jsx(i.code,{children:"item"}),", skipping group headers and menus."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Global Search"}),": Navigation traverses the entire data tree (Flat Map), even if items are located in different groups."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Cyclic Behavior"}),": If you are on the last item and call ",e.jsx(i.code,{children:"Next"}),", the method will return the ",e.jsx(i.strong,{children:"first"})," item in the list. Similarly, ",e.jsx(i.code,{children:"Prev"})," from the first item will return the ",e.jsx(i.strong,{children:"last"})," one."]}),`
`]}),`
`,e.jsx(i.h3,{id:"selection-based-navigation",children:"Selection-Based Navigation"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"getSelectedNext"})," and ",e.jsx(i.code,{children:"getSelectedPrev"})," methods automatically find the first selected item in the list and return its neighbor. If nothing is selected, navigation starts from the first item in the list."]}),`
`,e.jsx(i.h3,{id:"contextual-navigation-parent",children:"Contextual Navigation (Parent)"}),`
`,e.jsxs(i.p,{children:["To restrict movement within a single group, use the ",e.jsx(i.code,{children:"getFirstItemByParent"})," and ",e.jsx(i.code,{children:"getLastItemByParent"})," methods. These allow you to quickly find the boundaries of the current nesting level using the parent identifier."]}),`
`,e.jsx(i.h3,{id:"example-implementing-focus-movement",children:"Example: Implementing Focus Movement"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`import { ListDataRef } from '@dxtmisha/functional'
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
`,e.jsx(i.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(i.h3,{id:"rendering-a-group-tree",children:"Rendering a Group Tree"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-vue",children:`<template>
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
`})})]})}function x(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
