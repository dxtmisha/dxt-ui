import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/functional/en/Classes/Ref/ListDataRef"}),`
`,e.jsx(n.h1,{id:"listdataref-class",children:"ListDataRef Class"}),`
`,e.jsx(n.p,{children:"Vue-oriented class for managing list data with reactive computed properties. Provides focus, highlighting, element selection, sublist support, and lite mode for large lists."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — uses computed properties and ref/watch for reactivity"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lite Mode"})," — automatic switching to simplified list for large data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sublist Support"})," — hierarchical lists with groups and menus"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search with Highlighting"})," — customizable highlighting of found text"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus and Selection"})," — focus state and selected elements management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexible Keys"})," — customizable keys for value and label"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Element Map"})," — flat representation of hierarchical data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Filtering"})," — separate lists for items, groups, menu"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates ListData instance with reactive parameters."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: RefOrNormal<ListListInput | undefined>"})," — list data (ref or normal value)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focus?: RefType<ListSelectedItem | undefined>"})," — focused element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight?: RefType<string | undefined>"})," — text for highlighting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightLengthStart?: RefType<number | undefined>"})," — minimum length to start highlighting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected?: RefType<ListSelectedList | undefined>"})," — selected elements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyValue?: RefType<string | undefined>"})," — key for getting value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyLabel?: RefType<string | undefined>"})," — key for getting label"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lite?: RefType<number | undefined>"})," — threshold for lite mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent?: string"})," — parent identifier"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// With ref data
const listRef = ref(['Apple', 'Banana', 'Cherry'])
const focusRef = ref('Apple')
const selectedRef = ref(['Apple'])

const listData = new ListDataRef(
  listRef,
  focusRef,
  undefined, // highlight
  undefined, // highlightLengthStart
  selectedRef
)

// With static data
const staticList = new ListDataRef([
  { label: 'Home', value: 'home', type: 'item' },
  { label: 'Products', value: 'products', type: 'group' }
])
`})}),`
`,e.jsx(n.h2,{id:"reactive-computed-properties",children:"Reactive Computed Properties"}),`
`,e.jsx(n.h3,{id:"data",children:e.jsx(n.code,{children:"data"})}),`
`,e.jsx(n.p,{children:"Main list of elements with processed data."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})," — processed list"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const items = listData.data.value
// Each element contains: parent, index, type, label, value
`})}),`
`,e.jsx(n.h3,{id:"litedata",children:e.jsx(n.code,{children:"liteData"})}),`
`,e.jsx(n.p,{children:"Simplified list for fast loading of large data."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})," — simplified or full list"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Automatically switches to lite mode when threshold exceeded
const displayItems = listData.liteData.value
`})}),`
`,e.jsx(n.h3,{id:"fulldata",children:e.jsx(n.code,{children:"fullData"})}),`
`,e.jsx(n.p,{children:"List with full state data (focus, highlighting, selection)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListDataFull>"})," — list with state"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const fullItems = listData.fullData.value
// Each element additionally contains: focus, highlight, selected
`})}),`
`,e.jsx(n.h3,{id:"map",children:e.jsx(n.code,{children:"map"})}),`
`,e.jsx(n.p,{children:"Flat representation of hierarchical list."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})," — flat list of all elements"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const flatList = listData.map.value
// Includes elements from subgroups
`})}),`
`,e.jsx(n.h3,{id:"mapitems",children:e.jsx(n.code,{children:"mapItems"})}),`
`,e.jsx(n.p,{children:"Only 'item' type elements from flat list."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const onlyItems = listData.mapItems.value
`})}),`
`,e.jsx(n.h3,{id:"items",children:e.jsx(n.code,{children:"items"})}),`
`,e.jsx(n.p,{children:"Elements for selection (item, group, menu)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectableItems = listData.items.value
`})}),`
`,e.jsx(n.h3,{id:"highlightfirstitem",children:e.jsx(n.code,{children:"highlightFirstItem"})}),`
`,e.jsx(n.p,{children:"Index of the first element matching search conditions."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — index of found element or -1"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const searchIndex = listData.highlightFirstItem.value
if (searchIndex !== -1) {
  console.log('Found element at position:', searchIndex)
}
`})}),`
`,e.jsx(n.h3,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsx(n.p,{children:"Checks if there are selected elements in the list."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — true if there are selected elements"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hasSelected = listData.isSelected.value
`})}),`
`,e.jsx(n.h3,{id:"selectedlist",children:e.jsx(n.code,{children:"selectedList"})}),`
`,e.jsx(n.p,{children:"List of selected elements with full data."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selected = listData.selectedList.value
`})}),`
`,e.jsx(n.h3,{id:"selectednames",children:e.jsx(n.code,{children:"selectedNames"})}),`
`,e.jsx(n.p,{children:"Names (labels) of selected elements."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<ListNames>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const names = listData.selectedNames.value // ['Apple', 'Banana']
`})}),`
`,e.jsx(n.h3,{id:"selectedvalues",children:e.jsx(n.code,{children:"selectedValues"})}),`
`,e.jsx(n.p,{children:"Values of selected elements."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ComputedRef<any[]>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const values = listData.selectedValues.value // ['apple', 'banana']
`})}),`
`,e.jsx(n.h2,{id:"state-check-methods",children:"State Check Methods"}),`
`,e.jsx(n.h3,{id:"islite",children:e.jsx(n.code,{children:"isLite"})}),`
`,e.jsx(n.p,{children:"Checks if lite mode is needed."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`if (listData.isLite()) {
  // simplified list is used
}
`})}),`
`,e.jsx(n.h3,{id:"isfocus",children:e.jsx(n.code,{children:"isFocus"})}),`
`,e.jsx(n.p,{children:"Checks if there's an element in focus."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hasFocus = listData.isFocus()
`})}),`
`,e.jsx(n.h3,{id:"ishighlight",children:e.jsx(n.code,{children:"isHighlight"})}),`
`,e.jsx(n.p,{children:"Checks if there's a highlighted element during search."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hasHighlight = listData.isHighlight()
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"getlength",children:e.jsx(n.code,{children:"getLength"})}),`
`,e.jsx(n.p,{children:"Returns count of main records."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const count = listData.getLength()
`})}),`
`,e.jsx(n.h3,{id:"getlengthbymap",children:e.jsx(n.code,{children:"getLengthByMap"})}),`
`,e.jsx(n.p,{children:"Returns count of all available records (including subgroups)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const totalCount = listData.getLengthByMap()
`})}),`
`,e.jsx(n.h3,{id:"getfocus",children:e.jsx(n.code,{children:"getFocus"})}),`
`,e.jsx(n.p,{children:"Returns focused element value."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ListSelectedItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const focusedValue = listData.getFocus()
`})}),`
`,e.jsx(n.h3,{id:"getlengthbyitems",children:e.jsx(n.code,{children:"getLengthByItems"})}),`
`,e.jsx(n.p,{children:"Returns count of elements available for selection."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectableCount = listData.getLengthByItems()
`})}),`
`,e.jsx(n.h3,{id:"gethighlight",children:e.jsx(n.code,{children:"getHighlight"})}),`
`,e.jsx(n.p,{children:"Returns text for highlighting during search."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const searchText = listData.getHighlight()
`})}),`
`,e.jsx(n.h3,{id:"gethighlightlengthstart",children:e.jsx(n.code,{children:"getHighlightLengthStart"})}),`
`,e.jsx(n.p,{children:"Returns minimum length to start highlighting."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const minLength = listData.getHighlightLengthStart() // default 2
`})}),`
`,e.jsx(n.h3,{id:"getselected",children:e.jsx(n.code,{children:"getSelected"})}),`
`,e.jsx(n.p,{children:"Returns selected values."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ListSelectedList | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectedValues = listData.getSelected()
`})}),`
`,e.jsx(n.h3,{id:"getitembykey",children:e.jsx(n.code,{children:"getItemByKey"})}),`
`,e.jsx(n.p,{children:"Returns element by key."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key: number"})," — element key"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ListDataItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const item = listData.getItemByKey(0)
console.log(item?.label)
`})}),`
`,e.jsx(n.h3,{id:"getfirstitembyparent",children:e.jsx(n.code,{children:"getFirstItemByParent"})}),`
`,e.jsx(n.p,{children:"Returns first element with specified parent."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent: string"})," — parent identifier"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ListDataItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const firstChild = listData.getFirstItemByParent('group1')
`})}),`
`,e.jsx(n.h3,{id:"getlastitembyparent",children:e.jsx(n.code,{children:"getLastItemByParent"})}),`
`,e.jsx(n.p,{children:"Returns last element with specified parent."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent: string"})," — parent identifier"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ListDataItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const lastChild = listData.getLastItemByParent('group1')
`})}),`
`,e.jsx(n.h3,{id:"getitembyindex",children:e.jsx(n.code,{children:"getItemByIndex"})}),`
`,e.jsx(n.p,{children:"Returns element by index."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index?: string"})," — element index"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"{ key: number, item: ListDataItem } | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const result = listData.getItemByIndex('apple')
if (result) {
  console.log(result.key, result.item)
}
`})}),`
`,e.jsx(n.h3,{id:"getsublist",children:e.jsx(n.code,{children:"getSubList"})}),`
`,e.jsx(n.p,{children:"Returns sublist for group element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: ListDataItem"})," — group element"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ListData"})," — sublist instance"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const groupItem = listData.data.value.find(item => item.type === 'group')
if (groupItem) {
  const subList = listData.getSubList(groupItem)
  const subItems = subList.data.value
}
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"vue-component-with-reactive-data",children:"Vue component with reactive data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Composable for list
export function useListData(initialData) {
  const list = ref(initialData)
  const focus = ref(null)
  const selected = ref([])
  const highlight = ref('')

  const listData = new ListDataRef(
    list,
    focus,
    highlight,
    ref(2), // minimum 2 characters for search
    selected
  )

  return {
    list,
    focus,
    selected,
    highlight,
    data: listData.fullData,
    selectedItems: listData.selectedList
  }
}
`})}),`
`,e.jsx(n.h3,{id:"dropdown-component",children:"Dropdown component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <div class="dropdown">
    <div class="dropdown-items">
      <div
        v-for="item in displayData"
        :key="item.index"
        :class="{
          'focused': item.focus,
          'selected': item.selected,
          'highlighted': item.highlight
        }"
        @click="toggleSelection(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ListDataRef } from '@dxtmisha/functional'

const props = defineProps(['items'])
const focus = ref(null)
const selected = ref([])

const listData = new ListDataRef(
  computed(() => props.items),
  focus,
  undefined,
  undefined,
  selected
)

const displayData = listData.fullData

function toggleSelection(item) {
  const currentSelected = selected.value || []
  const index = currentSelected.indexOf(item.value)

  if (index === -1) {
    selected.value = [...currentSelected, item.value]
  } else {
    selected.value = currentSelected.filter(v => v !== item.value)
  }
}
<\/script>
`})}),`
`,e.jsx(n.h3,{id:"hierarchical-list-with-groups",children:"Hierarchical list with groups"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Data with groups
const hierarchicalData = [
  {
    label: 'Fruits',
    type: 'group',
    value: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' }
    ]
  },
  {
    label: 'Vegetables',
    type: 'group',
    value: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Potato', value: 'potato' }
    ]
  }
]

const listData = new ListDataRef(hierarchicalData)

// Get all elements (including from groups)
const allItems = listData.map.value

// Work with subgroups
const fruitGroup = listData.data.value[0]
const fruitSubList = listData.getSubList(fruitGroup)
const fruits = fruitSubList.data.value
`})}),`
`,e.jsx(n.p,{children:"The ListDataRef class provides a powerful reactive system for managing lists in Vue applications with support for hierarchy, state, and performance optimization."})]})}function x(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{x as default};
