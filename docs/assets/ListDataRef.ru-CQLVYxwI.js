import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Classes/ListDataRef - Управление Списками Данных`}),`
`,(0,c.jsx)(n.h1,{id:`класс-listdataref`,children:`Класс ListDataRef`}),`
`,(0,c.jsx)(n.p,{children:`Реактивный класс для управления списками данных любой сложности. Поддерживает фильтрацию, выделение (selection), фокус и вложенные структуры (группы и меню). Класс преобразует входные данные в стандартизированный формат и предоставляет обширный набор методов для навигации, поиска и управления состоянием элементов.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность`}),` — автоматическое обновление вычисляемых свойств при изменении исходных данных (Vue ref) или параметров управления.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Стандартизация`}),` — приведение любых входных форматов (массив строк, объектов) к единому интерфейсу `,(0,c.jsx)(n.code,{children:`ListDataItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Глубокая вложенность`}),` — поддержка древовидных структур с автоматическим управлением подписками через `,(0,c.jsx)(n.code,{children:`getSubList`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умная навигация`}),` — встроенные методы для перемещения по списку с учетом фильтрации и типа элементов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Облегченный режим`}),` — оптимизация отрисовки больших списков через `,(0,c.jsx)(n.code,{children:`liteData`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление выбором`}),` — контроль за количеством выбранных элементов (min/max) и их состоянием.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`ListDataRef`}),` для управления данными списка. Класс обеспечивает стандартизацию входных данных, управление фокусом, выделением и поиском. Поддерживает реактивное обновление при изменении исходного списка или параметров управления.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`list: RefOrNormal<ListListInput | undefined>`}),` — реактивный или обычный список данных.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus?: RefType<ListSelectedItem | undefined>`}),` — идентификатор элемента в фокусе (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight?: RefType<string | undefined>`}),` — текст для поиска и выделения (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightLengthStart?: RefType<number | undefined>`}),` — минимальное количество символов для начала поиска (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`filterMode?: RefType<boolean | undefined>`}),` — режим фильтрации (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected?: RefType<ListSelectedList | undefined>`}),` — список выбранных идентификаторов (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyValue?: RefType<string | undefined>`}),` — название поля для значения (по умолчанию `,(0,c.jsx)(n.code,{children:`'value'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`keyLabel?: RefType<string | undefined>`}),` — название поля для метки (по умолчанию `,(0,c.jsx)(n.code,{children:`'label'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`lite?: RefType<number | undefined>`}),` — порог количества элементов для включения режима Lite (Vue ref).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: RefOrNormal<number | string | undefined> = 0`}),` — минимально допустимое количество выделений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: RefOrNormal<number | string | undefined> = 9_999_999`}),` — максимально допустимое количество выделений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: string`}),` — идентификатор родительского элемента (используется для подсписков).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ListDataRef } from '@dxtmisha/functional'
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
`,(0,c.jsx)(n.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsx)(n.h3,{id:`данные`,children:`Данные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: Computed<ListList>`}),` — Основной стандартизированный список данных текущего уровня.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`liteData: Computed<ListList>`}),` — Упрощенная версия списка для быстрой отрисовки (активируется, если длина `,(0,c.jsx)(n.code,{children:`data`}),` превышает порог `,(0,c.jsx)(n.code,{children:`lite`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`fullData: Computed<ListDataFull>`}),` — Расширенный список данных, где для каждого элемента рассчитаны флаги `,(0,c.jsx)(n.code,{children:`focus`}),`, `,(0,c.jsx)(n.code,{children:`selected`}),`, `,(0,c.jsx)(n.code,{children:`disabled`}),` и активный `,(0,c.jsx)(n.code,{children:`highlight`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`map: Computed<ListList>`}),` — Плоский список абсолютно всех элементов дерева (включая группы и меню), развернутый в один массив.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mapItems: Computed<ListList>`}),` — Плоский список только конечных выбираемых элементов (тип `,(0,c.jsx)(n.code,{children:`item`}),`). Используется для основной навигации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: Computed<ListList>`}),` — Плоский список элементов, которые могут иметь интерактивное состояние (типы `,(0,c.jsx)(n.code,{children:`item`}),`, `,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`menu`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`выбор-и-состояние`,children:`Выбор и Состояние`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelected: Computed<boolean>`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если в дереве `,(0,c.jsx)(n.code,{children:`mapItems`}),` выбран хотя бы один элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelectedMin: Computed<boolean>`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если количество выбранных элементов в текущей группе достигло или превысило `,(0,c.jsx)(n.code,{children:`min`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSelectedMax: Computed<boolean>`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если количество выбранных элементов в текущей группе достигло порога `,(0,c.jsx)(n.code,{children:`max`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedList: Computed<ListList>`}),` — Список всех объектов `,(0,c.jsx)(n.code,{children:`ListDataItem`}),`, выбранных во всем дереве (на основе `,(0,c.jsx)(n.code,{children:`mapItems`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedListInGroup: Computed<ListList>`}),` — Список объектов, выбранных только на текущем уровне вложенности (`,(0,c.jsx)(n.code,{children:`data`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedNames: Computed<ListNames>`}),` — Массив строк с метками (`,(0,c.jsx)(n.code,{children:`label`}),`) всех выбранных элементов дерева.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectedValues: Computed<any[]>`}),` — Массив значений (`,(0,c.jsx)(n.code,{children:`value`}),`) всех выбранных элементов дерева.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`поиск`,children:`Поиск`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightFirstItem: Computed<number>`}),` — Индекс первого элемента в `,(0,c.jsx)(n.code,{children:`map`}),`, текст которого совпадает с `,(0,c.jsx)(n.code,{children:`highlight`}),` (с учетом `,(0,c.jsx)(n.code,{children:`highlightLengthStart`}),`). Возвращает `,(0,c.jsx)(n.code,{children:`-1`}),`, если совпадений нет.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`статус-и-проверки`,children:`Статус и Проверки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLite(): boolean`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если включен режим оптимизации (длина списка > `,(0,c.jsx)(n.code,{children:`lite`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFocus(): boolean`}),` — Проверяет, совпадает ли значение `,(0,c.jsx)(n.code,{children:`focus`}),` с каким-либо элементом в текущем `,(0,c.jsx)(n.code,{children:`map`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlight(): boolean`}),` — Возвращает `,(0,c.jsx)(n.code,{children:`true`}),`, если поиск нашел хотя бы одно совпадение.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlightActive(): boolean`}),` — Проверяет, активен ли процесс поиска (длина строки достаточна и есть результаты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLength(): number`}),` — Общее количество элементов на текущем уровне (`,(0,c.jsx)(n.code,{children:`data`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLengthByMap(): number`}),` — Общее количество всех элементов в дереве (`,(0,c.jsx)(n.code,{children:`map`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLengthByItems(): number`}),` — Количество конечных элементов во всем дереве (`,(0,c.jsx)(n.code,{children:`mapItems`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`получение-значений`,children:`Получение значений`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFocus(): ListSelectedItem | undefined`}),` — Текущее значение идентификатора в фокусе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHighlight(): string | undefined`}),` — Текущая строка поиска.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getHighlightLengthStart(): number`}),` — Минимальная длина строки для срабатывания поиска (по умолчанию `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelected(): ListSelectedList | undefined`}),` — текущий список выбранных идентификаторов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`навигация-и-поиск`,children:`Навигация и Поиск`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedByStep(step): ListSelectedItem | undefined`}),` — поиск соседа относительно выделения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedNext(): ListSelectedItem | undefined`}),` — следующий элемент от выделения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSelectedPrev(): ListSelectedItem | undefined`}),` — предыдущий элемент от выделения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByStep(item, step): ListDataItem | undefined`}),` — поиск соседа относительно элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemNext(item): ListDataItem | undefined`}),` — следующий от элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemPrev(item): ListDataItem | undefined`}),` — предыдущий от элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexByStep(index, step): ListDataItem | undefined`}),` — поиск соседа относительно индекса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexNext(index): ListDataItem | undefined`}),` — следующий от индекса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getIndexPrev(index): ListDataItem | undefined`}),` — предыдущий от индекса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByIndex(index): { key, item } | undefined`}),` — поиск элемента по индексу.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemByKey(key): ListDataItem | undefined`}),` — возвращает элемент по ключу в map.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFirstItemByParent(parent): ListDataItem | undefined`}),` — первый интерактивный элемент родителя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLastItemByParent(parent): ListDataItem | undefined`}),` — последний интерактивный элемент родителя.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSubList(item): ListDataRef`}),` — создает/возвращает инстанс подсписка.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы-данных`,children:`Типы данных`}),`
`,(0,c.jsx)(n.p,{children:`Класс использует стандартизированные структуры для предсказуемой работы с любыми форматами данных.`}),`
`,(0,c.jsx)(n.h3,{id:`listtype`,children:(0,c.jsx)(n.code,{children:`ListType`})}),`
`,(0,c.jsx)(n.p,{children:`Определяет роль элемента:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item`}),` — основной интерактивный элемент для выбора и фокуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group`}),` / `,(0,c.jsx)(n.code,{children:`menu`}),` — контейнеры для вложенных списков (`,(0,c.jsx)(n.code,{children:`value`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`subtitle`}),` — текстовый заголовок внутри списка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`html`}),` — элемент для вставки произвольного HTML.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`line`}),` / `,(0,c.jsx)(n.code,{children:`space`}),` — визуальные разделители.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listdataitem`,children:(0,c.jsx)(n.code,{children:`ListDataItem`})}),`
`,(0,c.jsx)(n.p,{children:`Объект, в который преобразуются все входные данные:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — уникальный идентификатор (генерируется автоматически).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ListType`}),` — тип элемента (по умолчанию `,(0,c.jsx)(n.code,{children:`item`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string | number`}),` — текст в интерфейсе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: any`}),` — значение элемента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: string`}),` — идентификатор родителя.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listdatafullitem`,children:(0,c.jsx)(n.code,{children:`ListDataFullItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Расширенная версия `,(0,c.jsx)(n.code,{children:`ListDataItem`}),` для `,(0,c.jsx)(n.code,{children:`fullData`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`focus: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если в фокусе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если выбран.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`disabled: boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),`, если выбор заблокирован (лимит `,(0,c.jsx)(n.code,{children:`max`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight?: string`}),` — строка поиска, если есть совпадение.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`listlistinput`,children:(0,c.jsx)(n.code,{children:`ListListInput`})}),`
`,(0,c.jsx)(n.p,{children:`Форматы данных для конструктора:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — массив строк (метки).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Record<string, string>`}),` — объект `,(0,c.jsx)(n.code,{children:`value: label`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ListDataBasic[]`}),` — массив объектов с полями `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`value`}),`, `,(0,c.jsx)(n.code,{children:`type`}),` и др.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`управление-выбором-selection`,children:`Управление выбором (Selection)`}),`
`,(0,c.jsx)(n.p,{children:`Класс поддерживает одиночный и множественный выбор с ограничениями.`}),`
`,(0,c.jsx)(n.h3,{id:`ключевые-параметры`,children:`Ключевые параметры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selected`}),` — Vue `,(0,c.jsx)(n.code,{children:`ref`}),` с массивом идентификаторов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min`}),` / `,(0,c.jsx)(n.code,{children:`max`}),` — лимиты выбора на текущем уровне.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`глобальный-vs-групповой-выбор`,children:`Глобальный vs Групповой выбор`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`selectedList`}),` — все выбранные `,(0,c.jsx)(n.code,{children:`item`}),` во всем дереве.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`selectedListInGroup`}),` — выбранные элементы только в текущей группе (`,(0,c.jsx)(n.code,{children:`data`}),`). На основе этого списка работают `,(0,c.jsx)(n.code,{children:`min`}),` и `,(0,c.jsx)(n.code,{children:`max`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`автоматическое-состояние-disabled`,children:`Автоматическое состояние disabled`}),`
`,(0,c.jsxs)(n.p,{children:[`При достижении `,(0,c.jsx)(n.code,{children:`max`}),` (`,(0,c.jsx)(n.code,{children:`isSelectedMax`}),`), остальные невыбранные элементы в `,(0,c.jsx)(n.code,{children:`fullData`}),` получают `,(0,c.jsx)(n.code,{children:`disabled: true`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`управление-фокусом`,children:`Управление фокусом`}),`
`,(0,c.jsxs)(n.p,{children:[`Реализовано через внешнюю переменную `,(0,c.jsx)(n.code,{children:`ref`}),`, общую для всего дерева.`]}),`
`,(0,c.jsx)(n.h3,{id:`особенности`,children:`Особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Общее состояние`}),` — подсписки используют тот же `,(0,c.jsx)(n.code,{children:`ref`}),` фокуса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Реактивность`}),` — `,(0,c.jsx)(n.code,{children:`fullData`}),` рассчитывает `,(0,c.jsx)(n.code,{children:`focus: true`}),` по совпадению `,(0,c.jsx)(n.code,{children:`index`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ручное управление`}),` — класс не меняет фокус сам. Навигация лишь возвращает объект.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const next = listData.getItemNext(currentItem)
if (next) {
    focus.value = next.index
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`поиск-и-подсветка-highlight`,children:`Поиск и Подсветка (Highlight)`}),`
`,(0,c.jsx)(n.h3,{id:`параметры`,children:`Параметры`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlight`}),` — строка запроса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`highlightLengthStart`}),` — порог активации (по умолчанию `,(0,c.jsx)(n.code,{children:`2`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`механика`,children:`Механика`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Regex`}),` — автоматическое создание регулярного выражения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поля`}),` — поиск по `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`index`}),` и `,(0,c.jsx)(n.code,{children:`search`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`fullData`}),` — передача `,(0,c.jsx)(n.code,{children:`highlight`}),` в элементы для подсветки в UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Результат`}),` — `,(0,c.jsx)(n.code,{children:`highlightFirstItem`}),` возвращает индекс первого совпадения в `,(0,c.jsx)(n.code,{children:`map`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`состояния`,children:`Состояния`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlight()`}),` — есть совпадения.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isHighlightActive()`}),` — длина строки достигла порога.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`режим-фильтрации-filtermode`,children:`Режим фильтрации (filterMode)`}),`
`,(0,c.jsx)(n.p,{children:`Флаг для UI о необходимости скрыть не подходящие под поиск элементы. Значение наследуется подсписками.`}),`
`,(0,c.jsx)(n.h2,{id:`облегченный-режим-lite-mode`,children:`Облегченный режим (Lite Mode)`}),`
`,(0,c.jsxs)(n.p,{children:[`Оптимизация производительности для больших списков. Если количество элементов в `,(0,c.jsx)(n.code,{children:`data`}),` > `,(0,c.jsx)(n.code,{children:`lite`}),`, активируется `,(0,c.jsx)(n.code,{children:`liteData`}),` с упрощенной структурой.`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`рендеринг-дерева`,children:`Рендеринг дерева`}),`
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
`,(0,c.jsx)(n.h2,{id:`работа-с-навигацией`,children:`Работа с навигацией`}),`
`,(0,c.jsx)(n.h3,{id:`плоская-циклическая-навигация`,children:`Плоская циклическая навигация`}),`
`,(0,c.jsxs)(n.p,{children:[`Методы `,(0,c.jsx)(n.code,{children:`getItemNext/Prev`}),` и `,(0,c.jsx)(n.code,{children:`getIndexNext/Prev`}),` работают через `,(0,c.jsx)(n.code,{children:`mapItems`}),` (только `,(0,c.jsx)(n.code,{children:`item`}),`). Навигация сквозная по всему дереву и циклическая.`]}),`
`,(0,c.jsx)(n.h3,{id:`навигация-по-выделению`,children:`Навигация по выделению`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`getSelectedNext/Prev`}),` ищут соседа относительно первого выбранного элемента.`]}),`
`,(0,c.jsx)(n.h3,{id:`контекстная-навигация`,children:`Контекстная навигация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`getFirstItemByParent`}),` и `,(0,c.jsx)(n.code,{children:`getLastItemByParent`}),` ищут границы текущей группы.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};