import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Zkkrlp1B.js";import{M as t}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/ru/Classes/Ref/ListDataRef"}),`
`,e.jsx(n.h1,{id:"класс-listdataref",children:"Класс ListDataRef"}),`
`,e.jsx(n.p,{children:"Vue-ориентированный класс для управления списками данных с реактивными computed свойствами. Обеспечивает фокус, выделение, выбор элементов, работу с подсписками и поддержку облегченного режима для больших списков."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue Reactivity"})," — использует computed свойства и ref/watch для реактивности"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Облегченный режим"})," — автоматическое переключение на упрощенный список для больших данных"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поддержка подсписков"})," — иерархические списки с группами и меню"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поиск с выделением"})," — настраиваемое выделение найденного текста"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Фокус и выбор"})," — управление состоянием фокуса и выбранных элементов"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Гибкие ключи"})," — настраиваемые ключи для value и label"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Карта элементов"})," — плоское представление иерархических данных"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Фильтрация по типам"})," — отдельные списки для items, groups, menu"]}),`
`]}),`
`,e.jsx(n.h2,{id:"конструктор",children:"Конструктор"}),`
`,e.jsx(n.h3,{id:"constructor",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Создаёт экземпляр ListDataRef с реактивными параметрами."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: RefOrNormal<ListListInput | undefined>"})," — данные списка (ref или обычное значение)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focus?: RefType<ListSelectedItem | undefined>"})," — элемент в фокусе"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight?: RefType<string | undefined>"})," — текст для выделения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightLengthStart?: RefType<number | undefined>"})," — минимальная длина для начала выделения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected?: RefType<ListSelectedList | undefined>"})," — выбранные элементы"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyValue?: RefType<string | undefined>"})," — ключ для получения значения"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyLabel?: RefType<string | undefined>"})," — ключ для получения метки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lite?: RefType<number | undefined>"})," — порог для облегченного режима"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent?: string"})," — идентификатор родителя"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

// С ref данными
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

// С обычными данными
const staticList = new ListDataRef([
  { label: 'Главная', value: 'home', type: 'item' },
  { label: 'Продукты', value: 'products', type: 'group' }
])
`})}),`
`,e.jsx(n.h2,{id:"реактивные-computed-свойства",children:"Реактивные computed свойства"}),`
`,e.jsx(n.h3,{id:"data",children:e.jsx(n.code,{children:"data"})}),`
`,e.jsx(n.p,{children:"Основной список элементов с обработанными данными."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})," — обработанный список"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const items = listData.data.value
// Каждый элемент содержит: parent, index, type, label, value
`})}),`
`,e.jsx(n.h3,{id:"litedata",children:e.jsx(n.code,{children:"liteData"})}),`
`,e.jsx(n.p,{children:"Упрощенный список для быстрой загрузки больших данных."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})," — упрощенный или полный список"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Автоматически переключается на lite режим при превышении порога
const displayItems = listData.liteData.value
`})}),`
`,e.jsx(n.h3,{id:"fulldata",children:e.jsx(n.code,{children:"fullData"})}),`
`,e.jsx(n.p,{children:"Список с полными данными состояния (фокус, выделение, выбор)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListDataFull>"})," — список с состоянием"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const fullItems = listData.fullData.value
// Каждый элемент дополнительно содержит: focus, highlight, selected
`})}),`
`,e.jsx(n.h3,{id:"map",children:e.jsx(n.code,{children:"map"})}),`
`,e.jsx(n.p,{children:"Плоское представление иерархического списка."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})," — плоский список всех элементов"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const flatList = listData.map.value
// Включает элементы из подгрупп
`})}),`
`,e.jsx(n.h3,{id:"mapitems",children:e.jsx(n.code,{children:"mapItems"})}),`
`,e.jsx(n.p,{children:"Только элементы типа 'item' из плоского списка."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const onlyItems = listData.mapItems.value
`})}),`
`,e.jsx(n.h3,{id:"items",children:e.jsx(n.code,{children:"items"})}),`
`,e.jsx(n.p,{children:"Элементы для выбора (item, group, menu)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectableItems = listData.items.value
`})}),`
`,e.jsx(n.h3,{id:"highlightfirstitem",children:e.jsx(n.code,{children:"highlightFirstItem"})}),`
`,e.jsx(n.p,{children:"Индекс первого элемента, соответствующего условиям поиска."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<number>"})," — индекс найденного элемента или -1"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const searchIndex = listData.highlightFirstItem.value
if (searchIndex !== -1) {
  console.log('Найден элемент на позиции:', searchIndex)
}
`})}),`
`,e.jsx(n.h3,{id:"isselected",children:e.jsx(n.code,{children:"isSelected"})}),`
`,e.jsx(n.p,{children:"Проверяет наличие выбранных элементов в списке."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<boolean>"})," — true если есть выбранные элементы"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hasSelected = listData.isSelected.value
`})}),`
`,e.jsx(n.h3,{id:"selectedlist",children:e.jsx(n.code,{children:"selectedList"})}),`
`,e.jsx(n.p,{children:"Список выбранных элементов с полными данными."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListList>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selected = listData.selectedList.value
`})}),`
`,e.jsx(n.h3,{id:"selectednames",children:e.jsx(n.code,{children:"selectedNames"})}),`
`,e.jsx(n.p,{children:"Имена (labels) выбранных элементов."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<ListNames>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const names = listData.selectedNames.value // ['Яблоко', 'Банан']
`})}),`
`,e.jsx(n.h3,{id:"selectedvalues",children:e.jsx(n.code,{children:"selectedValues"})}),`
`,e.jsx(n.p,{children:"Значения выбранных элементов."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ComputedRef<any[]>"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const values = listData.selectedValues.value // ['apple', 'banana']
`})}),`
`,e.jsx(n.h2,{id:"методы-проверки-состояния",children:"Методы проверки состояния"}),`
`,e.jsx(n.h3,{id:"islite",children:e.jsx(n.code,{children:"isLite"})}),`
`,e.jsx(n.p,{children:"Проверяет необходимость облегченного режима."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`if (listData.isLite()) {
  // используется упрощенный список
}
`})}),`
`,e.jsx(n.h3,{id:"isfocus",children:e.jsx(n.code,{children:"isFocus"})}),`
`,e.jsx(n.p,{children:"Проверяет наличие элемента в фокусе."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hasFocus = listData.isFocus()
`})}),`
`,e.jsx(n.h3,{id:"ishighlight",children:e.jsx(n.code,{children:"isHighlight"})}),`
`,e.jsx(n.p,{children:"Проверяет наличие выделенного элемента при поиске."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const hasHighlight = listData.isHighlight()
`})}),`
`,e.jsx(n.h2,{id:"методы-получения-данных",children:"Методы получения данных"}),`
`,e.jsx(n.h3,{id:"getlength",children:e.jsx(n.code,{children:"getLength"})}),`
`,e.jsx(n.p,{children:"Возвращает количество основных записей."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const count = listData.getLength()
`})}),`
`,e.jsx(n.h3,{id:"getlengthbymap",children:e.jsx(n.code,{children:"getLengthByMap"})}),`
`,e.jsx(n.p,{children:"Возвращает количество всех доступных записей (включая подгруппы)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const totalCount = listData.getLengthByMap()
`})}),`
`,e.jsx(n.h3,{id:"getlengthbyitems",children:e.jsx(n.code,{children:"getLengthByItems"})}),`
`,e.jsx(n.p,{children:"Возвращает количество элементов доступных для выбора."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectableCount = listData.getLengthByItems()
`})}),`
`,e.jsx(n.h3,{id:"getfocus",children:e.jsx(n.code,{children:"getFocus"})}),`
`,e.jsx(n.p,{children:"Возвращает значение элемента в фокусе."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ListSelectedItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const focusedValue = listData.getFocus()
`})}),`
`,e.jsx(n.h3,{id:"gethighlight",children:e.jsx(n.code,{children:"getHighlight"})}),`
`,e.jsx(n.p,{children:"Возвращает текст для выделения при поиске."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"string | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const searchText = listData.getHighlight()
`})}),`
`,e.jsx(n.h3,{id:"gethighlightlengthstart",children:e.jsx(n.code,{children:"getHighlightLengthStart"})}),`
`,e.jsx(n.p,{children:"Возвращает минимальную длину для начала выделения."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const minLength = listData.getHighlightLengthStart() // по умолчанию 2
`})}),`
`,e.jsx(n.h3,{id:"getselected",children:e.jsx(n.code,{children:"getSelected"})}),`
`,e.jsx(n.p,{children:"Возвращает выбранные значения."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ListSelectedList | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectedValues = listData.getSelected()
`})}),`
`,e.jsx(n.h3,{id:"getitembykey",children:e.jsx(n.code,{children:"getItemByKey"})}),`
`,e.jsx(n.p,{children:"Возвращает элемент по ключу."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key: number"})," — ключ элемента"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ListDataItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const item = listData.getItemByKey(0)
console.log(item?.label)
`})}),`
`,e.jsx(n.h3,{id:"getfirstitembyparent",children:e.jsx(n.code,{children:"getFirstItemByParent"})}),`
`,e.jsx(n.p,{children:"Возвращает первый элемент с указанным родителем."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent: string"})," — идентификатор родителя"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ListDataItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const firstChild = listData.getFirstItemByParent('group1')
`})}),`
`,e.jsx(n.h3,{id:"getlastitembyparent",children:e.jsx(n.code,{children:"getLastItemByParent"})}),`
`,e.jsx(n.p,{children:"Возвращает последний элемент с указанным родителем."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent: string"})," — идентификатор родителя"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ListDataItem | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const lastChild = listData.getLastItemByParent('group1')
`})}),`
`,e.jsx(n.h3,{id:"getitembyindex",children:e.jsx(n.code,{children:"getItemByIndex"})}),`
`,e.jsx(n.p,{children:"Возвращает элемент по индексу."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index?: string"})," — индекс элемента"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"{ key: number, item: ListDataItem } | undefined"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const result = listData.getItemByIndex('apple')
if (result) {
  console.log(result.key, result.item)
}
`})}),`
`,e.jsx(n.h3,{id:"getsublist",children:e.jsx(n.code,{children:"getSubList"})}),`
`,e.jsx(n.p,{children:"Возвращает подсписок для группового элемента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item: ListDataItem"})," — элемент группы"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ListData"})," — экземпляр подсписка"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const groupItem = listData.data.value.find(item => item.type === 'group')
if (groupItem) {
  const subList = listData.getSubList(groupItem)
  const subItems = subList.data.value
}
`})}),`
`,e.jsx(n.h2,{id:"практические-примеры",children:"Практические примеры"}),`
`,e.jsx(n.h3,{id:"vue-компонент-с-реактивными-данными",children:"Vue компонент с реактивными данными"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Composable для списка
export function useListData(initialData) {
  const list = ref(initialData)
  const focus = ref(null)
  const selected = ref([])
  const highlight = ref('')

  const listData = new ListDataRef(
    list,
    focus,
    highlight,
    ref(2), // минимум 2 символа для поиска
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
`,e.jsx(n.h3,{id:"компонент-выпадающего-списка",children:"Компонент выпадающего списка"}),`
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
`,e.jsx(n.h3,{id:"иерархический-список-с-группами",children:"Иерархический список с группами"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Данные с группами
const hierarchicalData = [
  {
    label: 'Фрукты',
    type: 'group',
    value: [
      { label: 'Яблоко', value: 'apple' },
      { label: 'Банан', value: 'banana' }
    ]
  },
  {
    label: 'Овощи',
    type: 'group',
    value: [
      { label: 'Морковь', value: 'carrot' },
      { label: 'Картофель', value: 'potato' }
    ]
  }
]

const listData = new ListDataRef(hierarchicalData)

// Получение всех элементов (включая из групп)
const allItems = listData.map.value

// Работа с подгруппами
const fruitGroup = listData.data.value[0]
const fruitSubList = listData.getSubList(fruitGroup)
const fruits = fruitSubList.data.value
`})}),`
`,e.jsx(n.p,{children:"Класс ListDataRef предоставляет мощную реактивную систему управления списками для Vue приложений с поддержкой иерархии, состояния и оптимизации производительности."})]})}function o(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default};
