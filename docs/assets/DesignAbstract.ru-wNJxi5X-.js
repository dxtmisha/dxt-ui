import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as d}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/ru/functional/Classes/DesignAbstract - Базовый класс конструктора"}),`
`,n.jsx(e.h1,{id:"класс-designabstract",children:"Класс DesignAbstract"}),`
`,n.jsx(e.p,{children:"Абстрактный базовый класс, предназначенный для управления свойствами конструктора и изменениями состояния. Он предоставляет структурированный способ обработки входных свойств, отслеживания изменений и выполнения обратных вызовов при обновлении данных."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление свойствами"})," — структурированная обработка входных данных (",n.jsx(e.code,{children:"props"}),") и хранилища событий (",n.jsx(e.code,{children:"event"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отслеживание изменений"})," — интеграция с ",n.jsx(e.code,{children:"DesignChanged"})," для эффективного мониторинга и обновления изменений свойств."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление жизненным циклом"})," — автоматическое выполнение ",n.jsx(e.code,{children:"makeCallback"})," и ",n.jsx(e.code,{children:"initEvent"})," при обновлении данных."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"DesignAbstract"})," является абстрактным базовым классом и не может быть инициализирован напрямую. Он служит основой для создания классов дизайна, которые управляют состоянием на основе входных свойств (",n.jsx(e.code,{children:"props"}),")."]}),`
`,n.jsx(e.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,n.jsx(e.p,{children:"Класс использует два типа дженериков для обеспечения строгой типизации:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"T extends Record<string, any>"})," — Тип для входных свойств (",n.jsx(e.code,{children:"props"}),"). Определяет структуру данных, передаваемых в конструктор и используемых для отслеживания изменений."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"C extends Record<string, any>"})," — Тип для выходных данных или состояния (",n.jsx(e.code,{children:"event"}),"). Определяет структуру объекта, который формируется в ",n.jsx(e.code,{children:"initEvent"})," и передается в обратные вызовы."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры конструктора:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: T"})," — объект с исходными данными для инициализации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback?: (event: C) => void"})," — дополнительная функция обратного вызова, которая выполняется после каждого обновления данных."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"changed?: string[]"})," — список имен свойств из ",n.jsx(e.code,{children:"props"}),", за которыми нужно следить. Если не указано, отслеживаются все ключи ",n.jsx(e.code,{children:"props"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Обязательный метод для реализации:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"protected abstract initEvent(): void"})," — метод, в котором описывается логика преобразования или фильтрации ",n.jsx(e.code,{children:"props"})," в объект состояния ",n.jsx(e.code,{children:"event"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignAbstract } from '@dxtmisha/functional'

// 1. Определение структур
interface MyProps { label: string; value: number }
interface MyState { display: string }

// 2. Реализация конкретного класса
class MyDesign extends DesignAbstract<MyProps, MyState> {
  protected initEvent(): void {
    this.event.display = \`\${this.props.label}: \${this.props.value}\`
  }
}

// 3. Создание экземпляра
const design = new MyDesign(
  { label: 'Счётчик', value: 10 }, 
  (state) => console.log('Новое состояние:', state.display)
)
`})}),`
`,n.jsx(e.h2,{id:"методы-управления-данными",children:"Методы управления данными"}),`
`,n.jsx(e.h3,{id:"make",children:n.jsx(e.code,{children:"make"})}),`
`,n.jsxs(e.p,{children:["Инициирует процесс обновления обратного вызова. Вызывает ",n.jsx(e.code,{children:"makeCallback"})," и возвращает экземпляр для цепочки вызовов."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compelled?: boolean"})," — если ",n.jsx(e.code,{children:"true"}),", принудительно обновляет данные независимо от наличия изменений."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})]}),`
`,n.jsx(e.h3,{id:"makecallback",children:n.jsx(e.code,{children:"makeCallback"})}),`
`,n.jsx(e.p,{children:"Основная логика выполнения для обновления состояния. Проверяет наличие изменений или принудительное обновление, затем инициализирует событие и запускает обратные вызовы."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compelled: boolean"})," — принудительно обновляет данные. По умолчанию: ",n.jsx(e.code,{children:"false"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.h2,{id:"защищенные-методы-для-наследников",children:"Защищенные методы (для наследников)"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsxs(e.p,{children:["Проверяет наличие значения в свойствах ",n.jsx(e.code,{children:"props"})," по имени."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: keyof T"})," — имя свойства."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.h3,{id:"ischanged",children:n.jsx(e.code,{children:"isChanged"})}),`
`,n.jsx(e.p,{children:"Проверяет, было ли изменено значение свойства. Используется для предотвращения лишних вычислений."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: keyof C"})," — имя свойства в событии."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nameProp?: keyof T | (keyof T)[]"})," — имя или список имен свойств в ",n.jsx(e.code,{children:"props"}),", от которых зависит данное значение. Если не указано, используется ",n.jsx(e.code,{children:"name"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.h3,{id:"makecallbackitem",children:n.jsx(e.code,{children:"makeCallbackItem"})}),`
`,n.jsx(e.p,{children:"Выполняет вызов функции обратного вызова, переданной в конструктор."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsxs(e.h3,{id:"initevent-абстрактный",children:[n.jsx(e.code,{children:"initEvent"})," (абстрактный)"]}),`
`,n.jsxs(e.p,{children:["Абстрактный метод, который должен быть реализован в подклассе. В нем происходит заполнение объекта ",n.jsx(e.code,{children:"this.event"})," на основе ",n.jsx(e.code,{children:"this.props"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]})]})}function t(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default};
