import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/DesignComponents - Базовый менеджер компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-designcomponents`,children:`Класс DesignComponents`}),`
`,(0,c.jsx)(t.p,{children:`Базовый класс для работы с подключенными компонентами и управления логикой их рендеринга в рамках дизайн-системы. Позволяет регистрировать компоненты, модифицировать их свойства по умолчанию и гибко генерировать VNode.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Управление компонентами`}),` — централизованная регистрация и получение Vue-компонентов.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамические модификации`}),` — поддержка применения глобальных или специфических модификаций свойств к компонентам перед рендерингом.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Гибкий рендеринг`}),` — предоставляет несколько методов (`,(0,c.jsx)(t.code,{children:`render`}),`, `,(0,c.jsx)(t.code,{children:`renderOne`}),`, `,(0,c.jsx)(t.code,{children:`renderAdd`}),`) для генерации Vue VNode с автоматической привязкой свойств.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оптимизация производительности`}),` — использует внутреннее кэширование с помощью вычисляемых свойств Vue (`,(0,c.jsx)(t.code,{children:`computed`}),`) для модификаций свойств.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Создает новый экземпляр `,(0,c.jsx)(t.code,{children:`DesignComponents`}),`. Класс позволяет объединять компоненты и их модификации в единый механизм управления рендерингом.`]}),`
`,(0,c.jsx)(t.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(t.p,{children:`Класс использует дженерики для обеспечения гибкой настройки типов рендеринга:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`COMP extends ConstrComponent`}),` — Объект со списком доступных компонентов. Определяет структуру, по которой `,(0,c.jsx)(t.code,{children:`DesignComponents`}),` будет искать и возвращать компоненты для рендеринга.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`P extends ConstrItem`}),` — Тип свойств (props), который используется для типизации модификаций и передаваемых данных при рендеринге.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`components: COMP = {}`}),` — список подключаемых компонентов (объект, где ключи — названия, а значения — Vue-компоненты).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`modification?: ConstrComponentMod<P>`}),` — объект модификаций, позволяющий переопределять свойства (props) для каждого компонента.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignComponents } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`методы-рендеринга`,children:`Методы рендеринга`}),`
`,(0,c.jsx)(t.h3,{id:`render`,children:(0,c.jsx)(t.code,{children:`render`})}),`
`,(0,c.jsxs)(t.p,{children:[`Рендерит компонент по его имени и возвращает массив, содержащий один `,(0,c.jsx)(t.code,{children:`VNode`}),`. Это полезно для Vue, где часто требуются массивы узлов.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Название зарегистрированного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: object`}),` — Свойства, передаваемые компоненту.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children: any`}),` — Дочерние элементы или слоты.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Ключ (key) для VNode.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`VNode[]`}),` — Массив, содержащий сгенерированный VNode.`]}),`
`,(0,c.jsx)(t.h3,{id:`renderone`,children:(0,c.jsx)(t.code,{children:`renderOne`})}),`
`,(0,c.jsxs)(t.p,{children:[`Рендерит один компонент и возвращает объект `,(0,c.jsx)(t.code,{children:`VNode`}),` напрямую. Если компонент не найден, возвращает `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Название зарегистрированного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: object`}),` — Свойства для компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children: any`}),` — Дочерние элементы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Ключ (key) для VNode.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`VNode | undefined`}),` — Объект VNode или `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`renderadd`,children:(0,c.jsx)(t.code,{children:`renderAdd`})}),`
`,(0,c.jsxs)(t.p,{children:[`Рендерит компонент и добавляет полученный `,(0,c.jsx)(t.code,{children:`VNode`}),` в предоставленный массив. Позволяет собирать список узлов в один проход.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any[]`}),` — Массив, в который будет добавлен результат рендеринга.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Название компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: object`}),` — Свойства для компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`children: any`}),` — Дочерние элементы.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index: string`}),` — Ключ (key) для VNode.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`this`}),` — Ссылка на текущий экземпляр для цепочки вызовов.`]}),`
`,(0,c.jsx)(t.h2,{id:`дополнительные-методы`,children:`Дополнительные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(name: string): boolean`}),` — Проверяет наличие зарегистрированного компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(name: string): COMP[K]`}),` — Возвращает объект зарегистрированного компонента по его имени.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getModification(index?: string, props?: object): object | undefined`}),` — Возвращает модифицированные входные данные для подключенных компонентов.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};