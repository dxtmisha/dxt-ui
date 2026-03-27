import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/# Управление списками`}),`
`,(0,c.jsx)(n.h1,{id:`управление-списками`,children:`Управление списками`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.strong,{children:`ListDataRef`}),` — это контроллер для управления сложными списками данных, выпадающими меню и деревьями в экосистеме `,(0,c.jsx)(n.strong,{children:`Vue 3`}),`. Он автоматизирует рутинные задачи по фильтрации, выделению элементов, управлению фокусом и работе со вложенными структурами.`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация-и-данные`,children:`Инициализация и Данные`}),`
`,(0,c.jsx)(n.p,{children:`Контроллер принимает реактивные источники данных и предоставляет оптимизированные наборы свойств для отрисовки компонентов.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ref } from 'vue'
import { ListDataRef } from '@dxtmisha/functional'

const items = ref([{ value: 1, label: 'Пункт' }, ...])
const controller = new ListDataRef(items)

// 1. Полный набор данных для отрисовки (с состоянием focus/selected/disabled)
const list = controller.fullData 

// 2. Оптимизированный список (liteData)
// Автоматически упрощает структуру при очень больших объемах данных
const fastList = controller.liteData 

// 3. Плоская карта всех элементов (включая вложенные)
const flatMap = controller.map
`})}),`
`,(0,c.jsx)(n.h2,{id:`выделение-и-состояние`,children:`Выделение и Состояние`}),`
`,(0,c.jsx)(n.p,{children:`Автоматическое управление множественным или одиночным выбором с учетом лимитов и текущего состояния локали.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const selected = ref([1])
// Чтобы пропустить необязательные аргументы, используйте undefined
const controller = new ListDataRef(items, undefined, undefined, undefined, undefined, selected)

// 1. Получение выбранных значений и названий
controller.selectedValues // ComputedRef<[1]>
controller.selectedNames  // ComputedRef<['Пункт']>

// 2. Проверка лимитов (min/max)
controller.isSelectedMax  // True, если выбрано максимально допустимое кол-во
`})}),`
`,(0,c.jsx)(n.h2,{id:`навигация-и-фокус`,children:`Навигация и Фокус`}),`
`,(0,c.jsx)(n.p,{children:`Контроллер предоставляет систему методов для «умного» перемещения по списку. Навигация автоматически пропускает неактивные элементы и заголовки групп, работая только с доступными для выбора пунктами.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const focus = ref(1)
const controller = new ListDataRef(items, focus)

// 1. Состояния фокуса и поиска
controller.isFocus()        // Проверка корректности текущего фокуса
controller.isHighlight()    // Есть ли совпадения при поиске
controller.highlightFirstItem // Индекс первого найденного элемента

// 2. Относительная навигация (от выделенного элемента)
const next = controller.getSelectedNext() // Индекс следующего доступного пункта
const prev = controller.getSelectedPrev() // Индекс предыдущего доступного пункта

// 3. Свободная навигация (по шагам или объектам)
const item = controller.getItemByStep(currentItem, 2) // Через 2 пункта от текущего
const firstInGroup = controller.getFirstItemByParent('group-id') // Первый в группе
`})}),`
`,(0,c.jsx)(n.h2,{id:`работа-с-вложенностью`,children:`Работа с вложенностью`}),`
`,(0,c.jsxs)(n.p,{children:[`Для работы с группами или древовидными структурами используется метод `,(0,c.jsx)(n.code,{children:`getSubList()`}),`. Он создает новый экземпляр контроллера для вложенных данных, сохраняя общую связь с глобальным состоянием фокуса и выделения.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Внутри компонента группы или выпадающего меню:
const subController = controller.getSubList(groupItem)

// subController будет автоматически следить за изменениями в родительском списке
const subItems = subController.fullData
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};