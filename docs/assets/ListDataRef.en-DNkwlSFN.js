import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/ListDataRef - Data List Management`}),`
`,(0,c.jsx)(t.h1,{id:`listdataref-class`,children:`ListDataRef Class`}),`
`,(0,c.jsx)(t.p,{children:`Reactive list model for normalization, nested groups, selection, focus and search matching. It exposes computed top-level and flattened views without rendering UI or mutating the selected input.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Normalization`}),` — accepts arrays of labels, object arrays and records.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nested groups`}),` — `,(0,c.jsx)(t.code,{children:`group`}),` and `,(0,c.jsx)(t.code,{children:`menu`}),` recurse through cached sublists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Reactive state`}),` — refs control selection, focus, search and limits.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined>, highlight?: RefType<string | undefined>, highlightLengthStart?: RefType<number | undefined>, filterMode?: RefType<boolean | undefined>, selected?: RefType<ListSelectedList | undefined>, keyValue?: RefType<string | undefined>, keyLabel?: RefType<string | undefined>, lite?: RefType<number | undefined>, min: RefOrNormal<number | string | undefined> = 0, max: RefOrNormal<number | string | undefined> = 9_999_999, parent?: string )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefOrNormal<ListListInput | undefined>`}),` — Input list or record, optionally reactive.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`focus?: RefType<ListSelectedItem | undefined>`}),` — Focused index ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlight?: RefType<string | undefined>`}),` — Search query ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightLengthStart?: RefType<number | undefined>`}),` — Minimum search-length ref; defaults to 2 when omitted.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filterMode?: RefType<boolean | undefined>`}),` — Filter-mode ref copied into fullData.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: RefType<ListSelectedList | undefined>`}),` — Ref with a single selected identifier or an array.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyValue?: RefType<string | undefined>`}),` — Value-field name ref; defaults to value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyLabel?: RefType<string | undefined>`}),` — Label-field name ref; defaults to label.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lite?: RefType<number | undefined>`}),` — Ref for the simplified-list threshold.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: RefOrNormal<number | string | undefined> = 0`}),` — Selection minimum; defaults to 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: RefOrNormal<number | string | undefined> = 9_999_999`}),` — Selection maximum; defaults to 9_999_999.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parent?: string`}),` — Parent index, or undefined for the root level.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[`Only `,(0,c.jsx)(t.code,{children:`list`}),`, `,(0,c.jsx)(t.code,{children:`min`}),` and `,(0,c.jsx)(t.code,{children:`max`}),` accept ordinary values or refs; focus, highlight, selected, key names, lite threshold and filter mode are ref parameters. Simple label arrays use string positions as indexes and numeric positions as values. Object items prefer explicit `,(0,c.jsx)(t.code,{children:`index`}),`, then a primitive `,(0,c.jsx)(t.code,{children:`value`}),`. `,(0,c.jsx)(t.code,{children:`map`}),` flattens `,(0,c.jsx)(t.code,{children:`item`}),`, `,(0,c.jsx)(t.code,{children:`group`}),` and `,(0,c.jsx)(t.code,{children:`menu`}),`; `,(0,c.jsx)(t.code,{children:`mapItems`}),` includes only leaf items. Navigation wraps to the first or last item when a step goes out of range. Limits affect computed state; this class does not enforce selection mutations. The minimum flag means the minimum has been reached. `,(0,c.jsx)(t.code,{children:`getFocusItem()`}),` searches only the current level. Replacing a list ref clears sublist caches; replacing a group source recreates its cached sublist. Use an owning effect scope to dispose the list-ref watcher.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
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
`,(0,c.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ListList>`}),` — Normalized entries at the current level.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`liteData: ComputedRef<ListList>`}),` — Reduced entries only when the lite threshold is exceeded; otherwise the full normalized data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fullData: ComputedRef<ListDataFull>`}),` — Current-level entries enriched with focus, highlight, filterMode, selected and disabled. An explicit disabled value takes precedence.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`map: ComputedRef<ListList>`}),` — Flattened item/group/menu entries, retaining group headers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mapItems: ComputedRef<ListList>`}),` — Leaf item entries from the flattened map.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: ComputedRef<ListList>`}),` — Item/group/menu entries from the flattened map.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightFirstItem: ComputedRef<number>`}),` — First matching map position, or -1 for no match or a query below the threshold. Matches label, index or search.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — Whether at least one leaf matches the selected input.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelectedMin: ComputedRef<boolean>`}),` — True when a positive minimum is reached by current-group selections.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelectedMax: ComputedRef<boolean>`}),` — True when a positive maximum is reached by current-group selections. A falsy maximum uses the default limit.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedList: ComputedRef<ListList>`}),` — Selected leaves across the flattened map.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedListInGroup: ComputedRef<ListList>`}),` — Selected entries at the current level.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedNames: ComputedRef<ListNames>`}),` — Labels of selected leaves.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedValues: ComputedRef<Array<ListDataItem['value']>>`}),` — Values of selected leaves, preserving zero and false.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`state-checks`,children:`State checks`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isLite(): boolean`}),` — True when the nonzero lite threshold is exceeded by the current-level length.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isFocus(): boolean`}),` — Checks the focused index against the flattened map.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isHighlight(): boolean`}),` — Reports whether search found a map entry.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isHighlightActive(): boolean`}),` — True when the query is below the minimum length or at least one match exists.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`counts-and-state-values`,children:`Counts and state values`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLength(): number`}),` — Returns the current-level item count.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLengthByMap(): number`}),` — Returns the flattened map count, including group and menu entries.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLengthByItems(): number`}),` — Returns the item/group/menu count from the flattened map.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFocus(): ListSelectedItem | undefined`}),` — Returns the supplied focus value.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFocusItem(): ListDataItem | undefined`}),` — Finds the focused entry at the current level only.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHighlight(): string | undefined`}),` — Returns the search text.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHighlightLengthStart(): number`}),` — Returns the search-length threshold, defaulting to 2.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSelected(): ListSelectedList | undefined`}),` — Returns the single selection or selection array supplied to the model.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`lookup`,children:`Lookup`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItemByIndex(index?: string): { key: number, item: ListDataItem } | undefined`}),` — Looks up an entry in the flattened map and returns its map key and item.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItemByKey(key: number): ListDataItem | undefined`}),` — Returns the entry at a flattened-map position, or undefined.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstItemByParent(parent: string | undefined): ListDataItem | undefined`}),` — Returns the first item/group/menu entry with the supplied parent.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLastItemByParent(parent: string | undefined): ListDataItem | undefined`}),` — Returns the last item/group/menu entry with the supplied parent.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`navigation`,children:`Navigation`}),`
`,(0,c.jsx)(t.h4,{id:`getselectedbystep`,children:(0,c.jsx)(t.code,{children:`getSelectedByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedByStep(step: number): ListSelectedItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Moves from the first selected leaf by the supplied step. Without a selected leaf, returns the first leaf index. An empty list returns `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Signed navigation step.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const index = /*#__PURE__*/ list.getSelectedByStep(1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getselectednext`,children:(0,c.jsx)(t.code,{children:`getSelectedNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedNext(): ListSelectedItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the next selected-relative leaf index, with boundary wrapping.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getSelectedNext()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getselectedprev`,children:(0,c.jsx)(t.code,{children:`getSelectedPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedPrev(): ListSelectedItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the previous selected-relative leaf index, with boundary wrapping.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getSelectedPrev()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitembystep`,children:(0,c.jsx)(t.code,{children:`getItemByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Moves in the leaf-only map. An out-of-range positive step returns the first leaf; a negative step returns the last. A zero step keeps a known item.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Current list entry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Signed navigation step.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const current = /*#__PURE__*/ list.getItemByIndex('a')
const next = current && list.getItemByStep(current.item, 1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitemnext`,children:(0,c.jsx)(t.code,{children:`getItemNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemNext(item: ListDataItem): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the next leaf after an item, wrapping to the first.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Item or output array as specified by the signature.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getItemNext(list.data.value[0]!)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitemprev`,children:(0,c.jsx)(t.code,{children:`getItemPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemPrev(item: ListDataItem): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Returns the previous leaf before an item, wrapping to the last.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Item or output array as specified by the signature.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getItemPrev(list.data.value[0]!)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexbystep`,children:(0,c.jsx)(t.code,{children:`getIndexByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexByStep(index: string, step: number): ListDataItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Looks up an index in the map, then applies leaf navigation. An unknown index returns `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Entry or modification index.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Signed navigation step.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const next = /*#__PURE__*/ list.getIndexByStep('a', 1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexnext`,children:(0,c.jsx)(t.code,{children:`getIndexNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexNext(index: string): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Resolves an index and returns its next leaf.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Entry or modification index.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getIndexNext('a')
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexprev`,children:(0,c.jsx)(t.code,{children:`getIndexPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexPrev(index: string): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Resolves an index and returns its previous leaf.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Entry or modification index.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getIndexPrev('a')
`})}),`
`,(0,c.jsx)(t.h3,{id:`nested-lists`,children:`Nested lists`}),`
`,(0,c.jsx)(t.h4,{id:`getsublist`,children:(0,c.jsx)(t.code,{children:`getSubList`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSubList(item: ListDataItem): ListDataRef`})}),`
`,(0,c.jsx)(t.p,{children:`Returns a cached child model sharing state refs and limits. Recreates it when the group’s source identity changes; the parent is the group index.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Item or output array as specified by the signature.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ListDataRef`}),` — Cached child list model.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const grouped = /*#__PURE__*/ new ListDataRef([{ type: 'group', index: 'fruit', label: 'Fruit', value: ['Apple'] }])
const group = grouped.data.value[0]
const children = group && grouped.getSubList(group)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};