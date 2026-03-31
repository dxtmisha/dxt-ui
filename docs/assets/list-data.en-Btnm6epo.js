import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/# List Management`}),`
`,(0,c.jsx)(n.h1,{id:`list-management`,children:`List Management`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.strong,{children:`ListDataRef`}),` class is a controller for managing complex data lists, dropdown menus, and trees within the `,(0,c.jsx)(n.strong,{children:`Vue 3`}),` ecosystem. It automates routine tasks such as filtering, item selection, focus management, and working with nested structures.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization-and-data`,children:`Initialization and Data`}),`
`,(0,c.jsx)(n.p,{children:`The controller takes reactive data sources and provides optimized property sets for rendering components.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { ListDataRef } from '@dxtmisha/functional'

const items = ref([{ value: 1, label: 'Item' }, ...])
const controller = new ListDataRef(items)

// 1. Full data set for rendering (with focus/selected/disabled states)
const list = controller.fullData 

// 2. Optimized list (liteData)
// Automatically simplifies structure for very large data volumes
const fastList = controller.liteData 

// 3. Flat map of all items (including nested ones)
const flatMap = controller.map
`})}),`
`,(0,c.jsx)(n.h2,{id:`selection-and-state`,children:`Selection and State`}),`
`,(0,c.jsx)(n.p,{children:`Automatic management of multiple or single selection, taking into account limits and the current locale state.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const selected = ref([1])
// Use undefined to skip optional arguments and trigger default values
const controller = new ListDataRef(items, undefined, undefined, undefined, undefined, selected)

// 1. Retrieving selected values and names
controller.selectedValues // ComputedRef<[1]>
controller.selectedNames  // ComputedRef<['Item']>

// 2. Checking limits (min/max)
controller.isSelectedMax  // True if the maximum allowed quantity is selected
`})}),`
`,(0,c.jsx)(n.h2,{id:`navigation-and-focus`,children:`Navigation and Focus`}),`
`,(0,c.jsx)(n.p,{children:`The controller provides a system of methods for "smart" movement through the list. Navigation automatically skips inactive elements and group headers, working only with items available for selection.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const focus = ref(1)
const controller = new ListDataRef(items, focus)

// 1. Focus and Search states
controller.isFocus()        // Verification of current focus correctness
controller.isHighlight()    // Check if there are search matches
controller.highlightFirstItem // Index of the first matching item

// 2. Relative navigation (from selected item)
const next = controller.getSelectedNext() // Index of the next available item
const prev = controller.getSelectedPrev() // Index of the previous available item

// 3. Free navigation (by steps or objects)
const item = controller.getItemByStep(currentItem, 2) // Jump 2 items from current
const firstInGroup = controller.getFirstItemByParent('group-id') // First in group
`})}),`
`,(0,c.jsx)(n.h2,{id:`working-with-nesting`,children:`Working with Nesting`}),`
`,(0,c.jsxs)(n.p,{children:[`To handle groups or tree-like structures, the `,(0,c.jsx)(n.code,{children:`getSubList()`}),` method is used. It creates a new controller instance for the nested data while maintaining a global link to focus and selection states.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Inside a group component or dropdown menu:
const subController = controller.getSubList(groupItem)

// subController will automatically monitor changes in the parent list
const subItems = subController.fullData
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};