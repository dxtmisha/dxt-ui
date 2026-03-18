import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function d(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional/Classes/DesignComponents - Базовый менеджер компонентов"}),`
`,n.jsx(e.h1,{id:"класс-designcomponents",children:"Класс DesignComponents"}),`
`,n.jsx(e.p,{children:"Базовый класс для работы с подключенными компонентами и управления логикой их рендеринга в рамках дизайн-системы. Позволяет регистрировать компоненты, модифицировать их свойства по умолчанию и гибко генерировать VNode."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление компонентами"})," — централизованная регистрация и получение Vue-компонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамические модификации"})," — поддержка применения глобальных или специфических модификаций свойств к компонентам перед рендерингом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкий рендеринг"})," — предоставляет несколько методов (",n.jsx(e.code,{children:"render"}),", ",n.jsx(e.code,{children:"renderOne"}),", ",n.jsx(e.code,{children:"renderAdd"}),") для генерации Vue VNode с автоматической привязкой свойств."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Оптимизация производительности"})," — использует внутреннее кэширование с помощью вычисляемых свойств Vue (",n.jsx(e.code,{children:"computed"}),") для модификаций свойств."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Создает новый экземпляр ",n.jsx(e.code,{children:"DesignComponents"}),". Класс позволяет объединять компоненты и их модификации в единый механизм управления рендерингом."]}),`
`,n.jsx(e.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,n.jsx(e.p,{children:"Класс использует дженерики для обеспечения гибкой настройки типов рендеринга:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"COMP extends ConstrComponent"})," — Объект со списком доступных компонентов. Определяет структуру, по которой ",n.jsx(e.code,{children:"DesignComponents"})," будет искать и возвращать компоненты для рендеринга."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"P extends ConstrItem"})," — Тип свойств (props), который используется для типизации модификаций и передаваемых данных при рендеринге."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"components: COMP = {}"})," — список подключаемых компонентов (объект, где ключи — названия, а значения — Vue-компоненты)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"modification?: ConstrComponentMod<P>"})," — объект модификаций, позволяющий переопределять свойства (props) для каждого компонента."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignComponents } from '@dxtmisha/functional'
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
`,n.jsx(e.h2,{id:"методы-рендеринга",children:"Методы рендеринга"}),`
`,n.jsx(e.h3,{id:"render",children:n.jsx(e.code,{children:"render"})}),`
`,n.jsxs(e.p,{children:["Рендерит компонент по его имени и возвращает массив, содержащий один ",n.jsx(e.code,{children:"VNode"}),". Это полезно для Vue, где часто требуются массивы узлов."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Название зарегистрированного компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: object"})," — Свойства, передаваемые компоненту."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"children: any"})," — Дочерние элементы или слоты."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index: string"})," — Ключ (key) для VNode."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"VNode[]"})," — Массив, содержащий сгенерированный VNode."]}),`
`,n.jsx(e.h3,{id:"renderone",children:n.jsx(e.code,{children:"renderOne"})}),`
`,n.jsxs(e.p,{children:["Рендерит один компонент и возвращает объект ",n.jsx(e.code,{children:"VNode"})," напрямую. Если компонент не найден, возвращает ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Название зарегистрированного компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: object"})," — Свойства для компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"children: any"})," — Дочерние элементы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index: string"})," — Ключ (key) для VNode."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"VNode | undefined"})," — Объект VNode или ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.h3,{id:"renderadd",children:n.jsx(e.code,{children:"renderAdd"})}),`
`,n.jsxs(e.p,{children:["Рендерит компонент и добавляет полученный ",n.jsx(e.code,{children:"VNode"})," в предоставленный массив. Позволяет собирать список узлов в один проход."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: any[]"})," — Массив, в который будет добавлен результат рендеринга."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — Название компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: object"})," — Свойства для компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"children: any"})," — Дочерние элементы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index: string"})," — Ключ (key) для VNode."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})," — Ссылка на текущий экземпляр для цепочки вызовов."]}),`
`,n.jsx(e.h2,{id:"дополнительные-методы",children:"Дополнительные методы"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"is(name: string): boolean"})," — Проверяет наличие зарегистрированного компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(name: string): COMP[K]"})," — Возвращает объект зарегистрированного компонента по его имени."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getModification(index?: string, props?: object): object | undefined"})," — Возвращает модифицированные входные данные для подключенных компонентов."]}),`
`]})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{j as default};
