import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function d(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/ru/functional/Classes/ListDataRef - Управление Списками Данных"}),`
`,e.jsx(n.h1,{id:"класс-listdataref",children:"Класс ListDataRef"}),`
`,e.jsx(n.p,{children:"Реактивный класс для управления списками данных любой сложности. Поддерживает фильтрацию, выделение (selection), фокус и вложенные структуры (группы и меню). Класс преобразует входные данные в стандартизированный формат и предоставляет обширный набор методов для навигации, поиска и управления состоянием элементов."}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность"})," — автоматическое обновление вычисляемых свойств при изменении исходных данных (Vue ref) или параметров управления."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Стандартизация"})," — приведение любых входных форматов (массив строк, объектов) к единому интерфейсу ",e.jsx(n.code,{children:"ListDataItem"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Глубокая вложенность"})," — поддержка древовидных структур с автоматическим управлением подписками через ",e.jsx(n.code,{children:"getSubList"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Умная навигация"})," — встроенные методы для перемещения по списку с учетом фильтрации и типа элементов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Облегченный режим"})," — оптимизация отрисовки больших списков через ",e.jsx(n.code,{children:"liteData"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Управление выбором"})," — контроль за количеством выбранных элементов (min/max) и их состоянием."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsxs(n.p,{children:["Создает новый экземпляр ",e.jsx(n.code,{children:"ListDataRef"})," для управления данными списка. Класс обеспечивает стандартизацию входных данных, управление фокусом, выделением и поиском. Поддерживает реактивное обновление при изменении исходного списка или параметров управления."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"list: RefOrNormal<ListListInput | undefined>"})," — реактивный или обычный список данных."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focus?: RefType<ListSelectedItem | undefined>"})," — идентификатор элемента в фокусе (Vue ref)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight?: RefType<string | undefined>"})," — текст для поиска и выделения (Vue ref)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightLengthStart?: RefType<number | undefined>"})," — минимальное количество символов для начала поиска (Vue ref)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filterMode?: RefType<boolean | undefined>"})," — режим фильтрации (Vue ref)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected?: RefType<ListSelectedList | undefined>"})," — список выбранных идентификаторов (Vue ref)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyValue?: RefType<string | undefined>"})," — название поля для значения (по умолчанию ",e.jsx(n.code,{children:"'value'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyLabel?: RefType<string | undefined>"})," — название поля для метки (по умолчанию ",e.jsx(n.code,{children:"'label'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lite?: RefType<number | undefined>"})," — порог количества элементов для включения режима Lite (Vue ref)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min: RefOrNormal<number | string | undefined> = 0"})," — минимально допустимое количество выделений."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max: RefOrNormal<number | string | undefined> = 9_999_999"})," — максимально допустимое количество выделений."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent?: string"})," — идентификатор родительского элемента (используется для подсписков)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { ListDataRef } from '@dxtmisha/functional'
import { ref } from 'vue'

const list = ref([
  { label: 'Пункт 1', value: 'item-1' },
  { label: 'Группа 1', type: 'group', value: [
    { label: 'Подпункт 1.1', value: 'sub-1.1' }
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
`,e.jsx(n.h2,{id:"свойства",children:"Свойства"}),`
`,e.jsx(n.h3,{id:"данные",children:"Данные"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: Computed<ListList>"})," — Основной стандартизированный список данных текущего уровня."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"liteData: Computed<ListList>"})," — Упрощенная версия списка для быстрой отрисовки (активируется, если длина ",e.jsx(n.code,{children:"data"})," превышает порог ",e.jsx(n.code,{children:"lite"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fullData: Computed<ListDataFull>"})," — Расширенный список данных, где для каждого элемента рассчитаны флаги ",e.jsx(n.code,{children:"focus"}),", ",e.jsx(n.code,{children:"selected"}),", ",e.jsx(n.code,{children:"disabled"})," и активный ",e.jsx(n.code,{children:"highlight"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"map: Computed<ListList>"})," — Плоский список абсолютно всех элементов дерева (включая группы и меню), развернутый в один массив."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mapItems: Computed<ListList>"})," — Плоский список только конечных выбираемых элементов (тип ",e.jsx(n.code,{children:"item"}),"). Используется для основной навигации."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"items: Computed<ListList>"})," — Плоский список элементов, которые могут иметь интерактивное состояние (типы ",e.jsx(n.code,{children:"item"}),", ",e.jsx(n.code,{children:"group"}),", ",e.jsx(n.code,{children:"menu"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"выбор-и-состояние",children:"Выбор и Состояние"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSelected: Computed<boolean>"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если в дереве ",e.jsx(n.code,{children:"mapItems"})," выбран хотя бы один элемент."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSelectedMin: Computed<boolean>"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если количество выбранных элементов в текущей группе достигло или превысило ",e.jsx(n.code,{children:"min"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSelectedMax: Computed<boolean>"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если количество выбранных элементов в текущей группе достигло порога ",e.jsx(n.code,{children:"max"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectedList: Computed<ListList>"})," — Список всех объектов ",e.jsx(n.code,{children:"ListDataItem"}),", выбранных во всем дереве (на основе ",e.jsx(n.code,{children:"mapItems"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectedListInGroup: Computed<ListList>"})," — Список объектов, выбранных только на текущем уровне вложенности (",e.jsx(n.code,{children:"data"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectedNames: Computed<ListNames>"})," — Массив строк с метками (",e.jsx(n.code,{children:"label"}),") всех выбранных элементов дерева."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectedValues: Computed<any[]>"})," — Массив значений (",e.jsx(n.code,{children:"value"}),") всех выбранных элементов дерева."]}),`
`]}),`
`,e.jsx(n.h3,{id:"поиск",children:"Поиск"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightFirstItem: Computed<number>"})," — Индекс первого элемента в ",e.jsx(n.code,{children:"map"}),", текст которого совпадает с ",e.jsx(n.code,{children:"highlight"})," (с учетом ",e.jsx(n.code,{children:"highlightLengthStart"}),"). Возвращает ",e.jsx(n.code,{children:"-1"}),", если совпадений нет."]}),`
`]}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"статус-и-проверки",children:"Статус и Проверки"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isLite(): boolean"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если включен режим оптимизации (длина списка > ",e.jsx(n.code,{children:"lite"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isFocus(): boolean"})," — Проверяет, совпадает ли значение ",e.jsx(n.code,{children:"focus"})," с каким-либо элементом в текущем ",e.jsx(n.code,{children:"map"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isHighlight(): boolean"})," — Возвращает ",e.jsx(n.code,{children:"true"}),", если поиск нашел хотя бы одно совпадение."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isHighlightActive(): boolean"})," — Проверяет, активен ли процесс поиска (длина строки достаточна и есть результаты)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLength(): number"})," — Общее количество элементов на текущем уровне (",e.jsx(n.code,{children:"data"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLengthByMap(): number"})," — Общее количество всех элементов в дереве (",e.jsx(n.code,{children:"map"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLengthByItems(): number"})," — Количество конечных элементов во всем дереве (",e.jsx(n.code,{children:"mapItems"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"получение-значений",children:"Получение значений"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFocus(): ListSelectedItem | undefined"})," — Текущее значение идентификатора в фокусе."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHighlight(): string | undefined"})," — Текущая строка поиска."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getHighlightLengthStart(): number"})," — Минимальная длина строки для срабатывания поиска (по умолчанию ",e.jsx(n.code,{children:"2"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSelected(): ListSelectedList | undefined"})," — текущий список выбранных идентификаторов."]}),`
`]}),`
`,e.jsx(n.h3,{id:"навигация-и-поиск",children:"Навигация и Поиск"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSelectedByStep(step): ListSelectedItem | undefined"})," — поиск соседа относительно выделения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSelectedNext(): ListSelectedItem | undefined"})," — следующий элемент от выделения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSelectedPrev(): ListSelectedItem | undefined"})," — предыдущий элемент от выделения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemByStep(item, step): ListDataItem | undefined"})," — поиск соседа относительно элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemNext(item): ListDataItem | undefined"})," — следующий от элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemPrev(item): ListDataItem | undefined"})," — предыдущий от элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getIndexByStep(index, step): ListDataItem | undefined"})," — поиск соседа относительно индекса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getIndexNext(index): ListDataItem | undefined"})," — следующий от индекса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getIndexPrev(index): ListDataItem | undefined"})," — предыдущий от индекса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemByIndex(index): { key, item } | undefined"})," — поиск элемента по индексу."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getItemByKey(key): ListDataItem | undefined"})," — возвращает элемент по ключу в map."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getFirstItemByParent(parent): ListDataItem | undefined"})," — первый интерактивный элемент родителя."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getLastItemByParent(parent): ListDataItem | undefined"})," — последний интерактивный элемент родителя."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getSubList(item): ListDataRef"})," — создает/возвращает инстанс подсписка."]}),`
`]}),`
`,e.jsx(n.h2,{id:"типы-данных",children:"Типы данных"}),`
`,e.jsx(n.p,{children:"Класс использует стандартизированные структуры для предсказуемой работы с любыми форматами данных."}),`
`,e.jsx(n.h3,{id:"listtype",children:e.jsx(n.code,{children:"ListType"})}),`
`,e.jsx(n.p,{children:"Определяет роль элемента:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item"})," — основной интерактивный элемент для выбора и фокуса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"group"})," / ",e.jsx(n.code,{children:"menu"})," — контейнеры для вложенных списков (",e.jsx(n.code,{children:"value"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subtitle"})," — текстовый заголовок внутри списка."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"html"})," — элемент для вставки произвольного HTML."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"line"})," / ",e.jsx(n.code,{children:"space"})," — визуальные разделители."]}),`
`]}),`
`,e.jsx(n.h3,{id:"listdataitem",children:e.jsx(n.code,{children:"ListDataItem"})}),`
`,e.jsx(n.p,{children:"Объект, в который преобразуются все входные данные:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: string"})," — уникальный идентификатор (генерируется автоматически)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ListType"})," — тип элемента (по умолчанию ",e.jsx(n.code,{children:"item"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label?: string | number"})," — текст в интерфейсе."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: any"})," — значение элемента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parent?: string"})," — идентификатор родителя."]}),`
`]}),`
`,e.jsx(n.h3,{id:"listdatafullitem",children:e.jsx(n.code,{children:"ListDataFullItem"})}),`
`,e.jsxs(n.p,{children:["Расширенная версия ",e.jsx(n.code,{children:"ListDataItem"})," для ",e.jsx(n.code,{children:"fullData"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"focus: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если в фокусе."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если выбран."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled: boolean"})," — ",e.jsx(n.code,{children:"true"}),", если выбор заблокирован (лимит ",e.jsx(n.code,{children:"max"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight?: string"})," — строка поиска, если есть совпадение."]}),`
`]}),`
`,e.jsx(n.h3,{id:"listlistinput",children:e.jsx(n.code,{children:"ListListInput"})}),`
`,e.jsx(n.p,{children:"Форматы данных для конструктора:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"string[]"})," — массив строк (метки)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Record<string, string>"})," — объект ",e.jsx(n.code,{children:"value: label"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ListDataBasic[]"})," — массив объектов с полями ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"value"}),", ",e.jsx(n.code,{children:"type"})," и др."]}),`
`]}),`
`,e.jsx(n.h2,{id:"управление-выбором-selection",children:"Управление выбором (Selection)"}),`
`,e.jsx(n.p,{children:"Класс поддерживает одиночный и множественный выбор с ограничениями."}),`
`,e.jsx(n.h3,{id:"ключевые-параметры",children:"Ключевые параметры"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selected"})," — Vue ",e.jsx(n.code,{children:"ref"})," с массивом идентификаторов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"min"})," / ",e.jsx(n.code,{children:"max"})," — лимиты выбора на текущем уровне."]}),`
`]}),`
`,e.jsx(n.h3,{id:"глобальный-vs-групповой-выбор",children:"Глобальный vs Групповой выбор"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"selectedList"})," — все выбранные ",e.jsx(n.code,{children:"item"})," во всем дереве."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"selectedListInGroup"})," — выбранные элементы только в текущей группе (",e.jsx(n.code,{children:"data"}),"). На основе этого списка работают ",e.jsx(n.code,{children:"min"})," и ",e.jsx(n.code,{children:"max"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"автоматическое-состояние-disabled",children:"Автоматическое состояние disabled"}),`
`,e.jsxs(n.p,{children:["При достижении ",e.jsx(n.code,{children:"max"})," (",e.jsx(n.code,{children:"isSelectedMax"}),"), остальные невыбранные элементы в ",e.jsx(n.code,{children:"fullData"})," получают ",e.jsx(n.code,{children:"disabled: true"}),"."]}),`
`,e.jsx(n.h2,{id:"управление-фокусом",children:"Управление фокусом"}),`
`,e.jsxs(n.p,{children:["Реализовано через внешнюю переменную ",e.jsx(n.code,{children:"ref"}),", общую для всего дерева."]}),`
`,e.jsx(n.h3,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Общее состояние"})," — подсписки используют тот же ",e.jsx(n.code,{children:"ref"})," фокуса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Реактивность"})," — ",e.jsx(n.code,{children:"fullData"})," рассчитывает ",e.jsx(n.code,{children:"focus: true"})," по совпадению ",e.jsx(n.code,{children:"index"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ручное управление"})," — класс не меняет фокус сам. Навигация лишь возвращает объект."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const next = listData.getItemNext(currentItem)
if (next) {
    focus.value = next.index
}
`})}),`
`,e.jsx(n.h2,{id:"поиск-и-подсветка-highlight",children:"Поиск и Подсветка (Highlight)"}),`
`,e.jsx(n.h3,{id:"параметры",children:"Параметры"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlight"})," — строка запроса."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"highlightLengthStart"})," — порог активации (по умолчанию ",e.jsx(n.code,{children:"2"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"механика",children:"Механика"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Regex"})," — автоматическое создание регулярного выражения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Поля"})," — поиск по ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"index"})," и ",e.jsx(n.code,{children:"search"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"fullData"})," — передача ",e.jsx(n.code,{children:"highlight"})," в элементы для подсветки в UI."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Результат"})," — ",e.jsx(n.code,{children:"highlightFirstItem"})," возвращает индекс первого совпадения в ",e.jsx(n.code,{children:"map"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"состояния",children:"Состояния"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isHighlight()"})," — есть совпадения."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isHighlightActive()"})," — длина строки достигла порога."]}),`
`]}),`
`,e.jsx(n.h2,{id:"режим-фильтрации-filtermode",children:"Режим фильтрации (filterMode)"}),`
`,e.jsx(n.p,{children:"Флаг для UI о необходимости скрыть не подходящие под поиск элементы. Значение наследуется подсписками."}),`
`,e.jsx(n.h2,{id:"облегченный-режим-lite-mode",children:"Облегченный режим (Lite Mode)"}),`
`,e.jsxs(n.p,{children:["Оптимизация производительности для больших списков. Если количество элементов в ",e.jsx(n.code,{children:"data"})," > ",e.jsx(n.code,{children:"lite"}),", активируется ",e.jsx(n.code,{children:"liteData"})," с упрощенной структурой."]}),`
`,e.jsx(n.h2,{id:"примеры",children:"Примеры"}),`
`,e.jsx(n.h3,{id:"рендеринг-дерева",children:"Рендеринг дерева"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
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
`,e.jsx(n.h2,{id:"работа-с-навигацией",children:"Работа с навигацией"}),`
`,e.jsx(n.h3,{id:"плоская-циклическая-навигация",children:"Плоская циклическая навигация"}),`
`,e.jsxs(n.p,{children:["Методы ",e.jsx(n.code,{children:"getItemNext/Prev"})," и ",e.jsx(n.code,{children:"getIndexNext/Prev"})," работают через ",e.jsx(n.code,{children:"mapItems"})," (только ",e.jsx(n.code,{children:"item"}),"). Навигация сквозная по всему дереву и циклическая."]}),`
`,e.jsx(n.h3,{id:"навигация-по-выделению",children:"Навигация по выделению"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getSelectedNext/Prev"})," ищут соседа относительно первого выбранного элемента."]}),`
`,e.jsx(n.h3,{id:"контекстная-навигация",children:"Контекстная навигация"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getFirstItemByParent"})," и ",e.jsx(n.code,{children:"getLastItemByParent"})," ищут границы текущей группы."]})]})}function o(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{o as default};
