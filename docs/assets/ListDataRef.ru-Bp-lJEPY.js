import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/ListDataRef - Управление Списками Данных`}),`
`,(0,c.jsx)(t.h1,{id:`класс-listdataref`,children:`Класс ListDataRef`}),`
`,(0,c.jsx)(t.p,{children:`Реактивная модель списка: нормализация, вложенные группы, выбор, фокус и поиск. Предоставляет вычисляемые верхнеуровневые и плоские представления, не рисуя UI и не изменяя входное выделение.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Нормализация`}),` — принимает массивы названий, массивы объектов и словари.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Вложенные группы`}),` — `,(0,c.jsx)(t.code,{children:`group`}),` и `,(0,c.jsx)(t.code,{children:`menu`}),` раскрываются через кэшированные подсписки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Реактивное состояние`}),` — ссылки управляют выбором, фокусом, поиском и лимитами.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor( list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined>, highlight?: RefType<string | undefined>, highlightLengthStart?: RefType<number | undefined>, filterMode?: RefType<boolean | undefined>, selected?: RefType<ListSelectedList | undefined>, keyValue?: RefType<string | undefined>, keyLabel?: RefType<string | undefined>, lite?: RefType<number | undefined>, min: RefOrNormal<number | string | undefined> = 0, max: RefOrNormal<number | string | undefined> = 9_999_999, parent?: string )`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`list: RefOrNormal<ListListInput | undefined>`}),` — Входной список либо словарь, может быть реактивным.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`focus?: RefType<ListSelectedItem | undefined>`}),` — Ссылка на индекс фокуса.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlight?: RefType<string | undefined>`}),` — Ссылка на поисковый запрос.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightLengthStart?: RefType<number | undefined>`}),` — Ссылка на минимальную длину поиска; при отсутствии 2.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`filterMode?: RefType<boolean | undefined>`}),` — Ссылка на режим фильтра, копируемый в fullData.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: RefType<ListSelectedList | undefined>`}),` — Ссылка на один выбранный идентификатор либо массив.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyValue?: RefType<string | undefined>`}),` — Ссылка на имя поля значения; по умолчанию value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`keyLabel?: RefType<string | undefined>`}),` — Ссылка на имя поля метки; по умолчанию label.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`lite?: RefType<number | undefined>`}),` — Ссылка на порог упрощённого списка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: RefOrNormal<number | string | undefined> = 0`}),` — Минимум выбора; по умолчанию 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: RefOrNormal<number | string | undefined> = 9_999_999`}),` — Максимум выбора; по умолчанию 9_999_999.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parent?: string`}),` — Индекс родителя либо undefined для корневого уровня.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[`Только `,(0,c.jsx)(t.code,{children:`list`}),`, `,(0,c.jsx)(t.code,{children:`min`}),` и `,(0,c.jsx)(t.code,{children:`max`}),` принимают обычные значения либо ссылки; фокус, поиск, выбор, имена ключей, порог lite и режим фильтра передаются ссылками. Массивы названий используют строковые позиции как индексы и числовые позиции как значения. Объекты предпочитают явный `,(0,c.jsx)(t.code,{children:`index`}),`, затем примитивное `,(0,c.jsx)(t.code,{children:`value`}),`. `,(0,c.jsx)(t.code,{children:`map`}),` раскрывает `,(0,c.jsx)(t.code,{children:`item`}),`, `,(0,c.jsx)(t.code,{children:`group`}),` и `,(0,c.jsx)(t.code,{children:`menu`}),`; `,(0,c.jsx)(t.code,{children:`mapItems`}),` содержит только конечные элементы. Навигация за границу возвращает первый или последний элемент. Лимиты влияют на вычисляемое состояние; класс не изменяет выбор. Флаг минимума означает достижение минимума. `,(0,c.jsx)(t.code,{children:`getFocusItem()`}),` ищет только на текущем уровне. Замена ссылки списка очищает кэш подсписков; замена источника группы пересоздаёт её подсписок. Для очистки наблюдателя списка используйте область эффектов.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
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
`,(0,c.jsx)(t.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ComputedRef<ListList>`}),` — Нормализованные записи текущего уровня.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`liteData: ComputedRef<ListList>`}),` — Сокращённые записи при превышении порога lite; иначе нормализованные данные целиком.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fullData: ComputedRef<ListDataFull>`}),` — Записи текущего уровня с focus, highlight, filterMode, selected и disabled. Явное disabled имеет приоритет.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`map: ComputedRef<ListList>`}),` — Плоские записи item/group/menu с сохранением заголовков групп.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mapItems: ComputedRef<ListList>`}),` — Конечные item из плоской карты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: ComputedRef<ListList>`}),` — Записи item/group/menu из плоской карты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`highlightFirstItem: ComputedRef<number>`}),` — Позиция первого совпадения в карте либо -1 при отсутствии совпадения или коротком запросе. Проверяет label, index и search.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelected: ComputedRef<boolean>`}),` — Совпадает ли хотя бы один конечный элемент с входным выбором.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelectedMin: ComputedRef<boolean>`}),` — Истина при достижении положительного минимума выбранными элементами текущей группы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isSelectedMax: ComputedRef<boolean>`}),` — Истина при достижении положительного максимума выбранными элементами текущей группы. Ложное значение максимума использует лимит по умолчанию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedList: ComputedRef<ListList>`}),` — Выбранные конечные элементы всей плоской карты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedListInGroup: ComputedRef<ListList>`}),` — Выбранные записи текущего уровня.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedNames: ComputedRef<ListNames>`}),` — Метки выбранных конечных элементов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectedValues: ComputedRef<Array<ListDataItem['value']>>`}),` — Значения выбранных конечных элементов с сохранением нуля и false.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`проверки-состояния`,children:`Проверки состояния`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isLite(): boolean`}),` — Истина, если длина текущего уровня превышает ненулевой порог lite.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isFocus(): boolean`}),` — Проверяет индекс фокуса в плоской карте.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isHighlight(): boolean`}),` — Сообщает, найдено ли совпадение в карте.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`isHighlightActive(): boolean`}),` — Истина, если запрос короче порога либо найдено хотя бы одно совпадение.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`количество-и-значения-состояния`,children:`Количество и значения состояния`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLength(): number`}),` — Возвращает количество записей текущего уровня.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLengthByMap(): number`}),` — Возвращает размер плоской карты, включая группы и меню.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLengthByItems(): number`}),` — Возвращает количество item/group/menu в плоской карте.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFocus(): ListSelectedItem | undefined`}),` — Возвращает переданное значение фокуса.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFocusItem(): ListDataItem | undefined`}),` — Ищет запись в фокусе только на текущем уровне.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHighlight(): string | undefined`}),` — Возвращает текст поиска.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getHighlightLengthStart(): number`}),` — Возвращает минимальную длину поиска, по умолчанию 2.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getSelected(): ListSelectedList | undefined`}),` — Возвращает переданное одиночное выделение либо массив выделений.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`поиск-элементов`,children:`Поиск элементов`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItemByIndex(index?: string): { key: number, item: ListDataItem } | undefined`}),` — Ищет запись в плоской карте и возвращает ключ карты и элемент.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getItemByKey(key: number): ListDataItem | undefined`}),` — Возвращает запись по позиции плоской карты либо undefined.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getFirstItemByParent(parent: string | undefined): ListDataItem | undefined`}),` — Возвращает первую запись item/group/menu с указанным родителем.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`getLastItemByParent(parent: string | undefined): ListDataItem | undefined`}),` — Возвращает последнюю запись item/group/menu с указанным родителем.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`навигация`,children:`Навигация`}),`
`,(0,c.jsx)(t.h4,{id:`getselectedbystep`,children:(0,c.jsx)(t.code,{children:`getSelectedByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedByStep(step: number): ListSelectedItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Перемещается от первого выделенного конечного элемента на указанный шаг. Без выделенного элемента возвращает индекс первого. Для пустого списка возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Шаг навигации со знаком.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const index = /*#__PURE__*/ list.getSelectedByStep(1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getselectednext`,children:(0,c.jsx)(t.code,{children:`getSelectedNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedNext(): ListSelectedItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает следующий индекс конечного элемента относительно выбора с переходом через границу.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getSelectedNext()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getselectedprev`,children:(0,c.jsx)(t.code,{children:`getSelectedPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSelectedPrev(): ListSelectedItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает предыдущий индекс конечного элемента относительно выбора с переходом через границу.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListSelectedItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getSelectedPrev()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitembystep`,children:(0,c.jsx)(t.code,{children:`getItemByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Перемещается по карте конечных элементов. Положительный шаг за границу возвращает первый, отрицательный — последний элемент. Нулевой шаг сохраняет найденный элемент.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Текущая запись списка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Шаг навигации со знаком.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const current = /*#__PURE__*/ list.getItemByIndex('a')
const next = current && list.getItemByStep(current.item, 1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitemnext`,children:(0,c.jsx)(t.code,{children:`getItemNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemNext(item: ListDataItem): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает следующий конечный элемент, с переходом к первому.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Элемент либо выходной массив согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getItemNext(list.data.value[0]!)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getitemprev`,children:(0,c.jsx)(t.code,{children:`getItemPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getItemPrev(item: ListDataItem): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает предыдущий конечный элемент, с переходом к последнему.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Элемент либо выходной массив согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getItemPrev(list.data.value[0]!)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexbystep`,children:(0,c.jsx)(t.code,{children:`getIndexByStep`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexByStep(index: string, step: number): ListDataItem | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Находит индекс в карте, затем выполняет навигацию по конечным элементам. Неизвестный индекс возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Индекс записи либо модификации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`step: number`}),` — Шаг навигации со знаком.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const next = /*#__PURE__*/ list.getIndexByStep('a', 1)
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexnext`,children:(0,c.jsx)(t.code,{children:`getIndexNext`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexNext(index: string): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Находит индекс и возвращает следующий конечный элемент.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Индекс записи либо модификации.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getIndexNext('a')
`})}),`
`,(0,c.jsx)(t.h4,{id:`getindexprev`,children:(0,c.jsx)(t.code,{children:`getIndexPrev`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getIndexPrev(index: string): ListDataItem | undefined`})}),`
`,(0,c.jsx)(t.p,{children:`Находит индекс и возвращает предыдущий конечный элемент.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Индекс записи либо модификации.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataItem | undefined`}),` — Запрошенное значение либо объект согласно сигнатуре.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const result = /*#__PURE__*/ list.getIndexPrev('a')
`})}),`
`,(0,c.jsx)(t.h3,{id:`вложенные-списки`,children:`Вложенные списки`}),`
`,(0,c.jsx)(t.h4,{id:`getsublist`,children:(0,c.jsx)(t.code,{children:`getSubList`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getSubList(item: ListDataItem): ListDataRef`})}),`
`,(0,c.jsx)(t.p,{children:`Возвращает кэшированную дочернюю модель с общими ссылками состояния и лимитами. Пересоздаёт её при замене источника группы; родитель — индекс группы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: ListDataItem`}),` — Элемент либо выходной массив согласно сигнатуре.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`ListDataRef`}),` — Кэшированная дочерняя модель списка.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const grouped = /*#__PURE__*/ new ListDataRef([{ type: 'group', index: 'fruit', label: 'Fruit', value: ['Apple'] }])
const group = grouped.data.value[0]
const children = group && grouped.getSubList(group)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};