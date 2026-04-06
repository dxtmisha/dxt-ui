import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional/Classes/DesignComponents - Базовый менеджер компонентов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designcomponents`,children:`Класс DesignComponents`}),`
`,(0,c.jsx)(n.p,{children:`Базовый класс для работы с подключенными компонентами и управления логикой их рендеринга в рамках дизайн-системы. Позволяет регистрировать компоненты, модифицировать их свойства по умолчанию и гибко генерировать VNode.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление компонентами`}),` — централизованная регистрация и получение Vue-компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамические модификации`}),` — поддержка применения глобальных или специфических модификаций свойств к компонентам перед рендерингом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкий рендеринг`}),` — предоставляет несколько методов (`,(0,c.jsx)(n.code,{children:`render`}),`, `,(0,c.jsx)(n.code,{children:`renderOne`}),`, `,(0,c.jsx)(n.code,{children:`renderAdd`}),`) для генерации Vue VNode с автоматической привязкой свойств.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оптимизация производительности`}),` — использует внутреннее кэширование с помощью вычисляемых свойств Vue (`,(0,c.jsx)(n.code,{children:`computed`}),`) для модификаций свойств.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(n.code,{children:`DesignComponents`}),`. Класс позволяет объединять компоненты и их модификации в единый механизм управления рендерингом.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Класс использует дженерики для обеспечения гибкой настройки типов рендеринга:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`COMP extends ConstrComponent`}),` — Объект со списком доступных компонентов. Определяет структуру, по которой `,(0,c.jsx)(n.code,{children:`DesignComponents`}),` будет искать и возвращать компоненты для рендеринга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`P extends ConstrItem`}),` — Тип свойств (props), который используется для типизации модификаций и передаваемых данных при рендеринге.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`components: COMP = {}`}),` — список подключаемых компонентов (объект, где ключи — названия, а значения — Vue-компоненты).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`modification?: ConstrComponentMod<P>`}),` — объект модификаций, позволяющий переопределять свойства (props) для каждого компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignComponents } from '@dxtmisha/functional'
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

// 1. Регистрация компонентов
const components = {
  button: MyButton,
  input: MyInput
}

// 2. Определение модификаций (props по умолчанию)
const modification = {
  button: { size: 'large', color: 'primary' },
  input: { focus: true }
}

const design = new DesignComponents(components, modification)
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы-рендеринга`,children:`Методы рендеринга`}),`
`,(0,c.jsx)(n.h3,{id:`render`,children:(0,c.jsx)(n.code,{children:`render`})}),`
`,(0,c.jsxs)(n.p,{children:[`Рендерит компонент по его имени и возвращает массив, содержащий один `,(0,c.jsx)(n.code,{children:`VNode`}),`. Это полезно для Vue, где часто требуются массивы узлов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название зарегистрированного компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Свойства, передаваемые компоненту.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Дочерние элементы или слоты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — Ключ (key) для VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`VNode[]`}),` — Массив, содержащий сгенерированный VNode.`]}),`
`,(0,c.jsx)(n.h3,{id:`renderone`,children:(0,c.jsx)(n.code,{children:`renderOne`})}),`
`,(0,c.jsxs)(n.p,{children:[`Рендерит один компонент и возвращает объект `,(0,c.jsx)(n.code,{children:`VNode`}),` напрямую. Если компонент не найден, возвращает `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название зарегистрированного компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Свойства для компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Дочерние элементы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — Ключ (key) для VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`VNode | undefined`}),` — Объект VNode или `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`renderadd`,children:(0,c.jsx)(n.code,{children:`renderAdd`})}),`
`,(0,c.jsxs)(n.p,{children:[`Рендерит компонент и добавляет полученный `,(0,c.jsx)(n.code,{children:`VNode`}),` в предоставленный массив. Позволяет собирать список узлов в один проход.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any[]`}),` — Массив, в который будет добавлен результат рендеринга.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Название компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: object`}),` — Свойства для компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`children: any`}),` — Дочерние элементы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index: string`}),` — Ключ (key) для VNode.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`}),` — Ссылка на текущий экземпляр для цепочки вызовов.`]}),`
`,(0,c.jsx)(n.h2,{id:`дополнительные-методы`,children:`Дополнительные методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(name: string): boolean`}),` — Проверяет наличие зарегистрированного компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(name: string): COMP[K]`}),` — Возвращает объект зарегистрированного компонента по его имени.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getModification(index?: string, props?: object): object | undefined`}),` — Возвращает модифицированные входные данные для подключенных компонентов.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};