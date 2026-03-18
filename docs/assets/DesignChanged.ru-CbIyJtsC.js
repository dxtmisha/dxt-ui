import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional/Classes/DesignChanged - Утилита отслеживания изменений"}),`
`,n.jsx(e.h1,{id:"класс-designchanged",children:"Класс DesignChanged"}),`
`,n.jsx(e.p,{children:"Утилитарный класс, предназначенный для отслеживания изменений в свойствах объекта. Он хранит кэш предыдущих значений и предоставляет методы для обнаружения различий между текущим состоянием и состоянием на момент последнего обновления."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Эффективное сравнение"})," — сравнивает текущие значения свойств с локальным кэшем для выявления изменений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Выборочное отслеживание"})," — поддерживает отслеживание определенного подмножества свойств через параметр ",n.jsx(e.code,{children:"watch"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Пакетное обновление"})," — предоставляет способ синхронизации всего кэша с текущим состоянием свойств."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Создает новый экземпляр ",n.jsx(e.code,{children:"DesignChanged"}),". Класс предназначен для отслеживания изменений в свойствах объекта путем сравнения их с внутренним кэшем (состоянием на момент последнего обновления)."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: T"})," — объект с данными, свойства которого необходимо отслеживать."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"watch: string[] = Object.keys(props)"})," — массив имен свойств (ключей), за которыми нужно следить. По умолчанию отслеживаются все свойства объекта ",n.jsx(e.code,{children:"props"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Отслеживание всех свойств по умолчанию
const props = { title: 'Привет', count: 1 }
const tracker = new DesignChanged(props)

// 2. Отслеживание конкретных свойств (подмножества)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,n.jsx(e.h2,{id:"обнаружение-изменений",children:"Обнаружение изменений"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsx(e.p,{children:"Проверяет, были ли изменены определенные свойства с момента последнего обновления."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string | string[]"})," — имя одного свойства или массив имен свойств для проверки."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если любое из указанных свойств изменилось."]}),`
`,n.jsx(e.h3,{id:"ischanged",children:n.jsx(e.code,{children:"isChanged"})}),`
`,n.jsxs(e.p,{children:["Проверяет, изменилось ли любое из отслеживаемых свойств (определенных в списке ",n.jsx(e.code,{children:"watch"}),")."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если хотя бы одно отслеживаемое свойство имеет другое значение."]}),`
`,n.jsx(e.h2,{id:"синхронизация-данных",children:"Синхронизация данных"}),`
`,n.jsx(e.h3,{id:"update",children:n.jsx(e.code,{children:"update"})}),`
`,n.jsxs(e.p,{children:["Синхронизирует внутренний кэш с текущими значениями всех отслеживаемых свойств. После вызова этого метода ",n.jsx(e.code,{children:"isChanged()"})," будет возвращать ",n.jsx(e.code,{children:"false"})," до тех пор, пока свойства не будут изменены снова."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]})]})}function j(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
