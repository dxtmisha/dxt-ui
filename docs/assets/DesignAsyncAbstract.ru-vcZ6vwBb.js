import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/ru/functional/Classes/DesignAsyncAbstract - Базовый асинхронный класс дизайна"}),`
`,n.jsx(e.h1,{id:"класс-designasyncabstract",children:"Класс DesignAsyncAbstract"}),`
`,n.jsxs(e.p,{children:["Асинхронный абстрактный базовый класс для управления свойствами конструктора и изменениями состояния. Расширяет ",n.jsx(e.code,{children:"DesignAbstract"})," поддержкой асинхронной инициализации событий, что делает его идеальным для случаев, требующих загрузки данных или асинхронных вычислений."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Асинхронная инициализация"})," — поддержка инициализации событий на основе ",n.jsx(e.code,{children:"Promise"})," через метод ",n.jsx(e.code,{children:"initEvent"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление свойствами"})," — наследует структурированную обработку входных данных (",n.jsx(e.code,{children:"props"}),") и хранилища событий (",n.jsx(e.code,{children:"event"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Асинхронный рабочий процесс"})," — гарантирует, что обратные вызовы запускаются только после завершения асинхронной подготовки состояния."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"DesignAsyncAbstract"})," является абстрактным классом и не может быть инициализирован напрямую. Он предназначен для расширения другими классами, которые должны реализовать метод ",n.jsx(e.code,{children:"initEvent"})," для асинхронной подготовки данных."]}),`
`,n.jsx(e.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,n.jsx(e.p,{children:"Класс использует два типа дженериков для обеспечения строгой типизации:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"T extends Record<string, any>"})," — Тип для входных свойств (",n.jsx(e.code,{children:"props"}),"). Определяет структуру данных, передаваемых в конструктор."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"C extends Record<string, any>"})," — Тип для внутреннего состояния или кэша (",n.jsx(e.code,{children:"event"}),"). Определяет структуру данных, которая будет доступна в обратных вызовах после асинхронной инициализации."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры конструктора:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"props: T"})," — объект с исходными данными."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"callback?: (event: C) => void"})," — функция обратного вызова, которая будет вызываться после каждого успешного обновления (включая асинхронное)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"changed?: string[]"})," — необязательный список ключей из ",n.jsx(e.code,{children:"props"}),", за которыми нужно следить. Если не передан, отслеживаются все ключи ",n.jsx(e.code,{children:"props"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Внутренние свойства:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"protected readonly event: C"})," — объект состояния. Именно его следует наполнять данными в ",n.jsx(e.code,{children:"initEvent"}),". Он будет передан в ",n.jsx(e.code,{children:"callback"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Обязательный метод для реализации:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"protected abstract initEvent(): Promise<void>"})," — асинхронный метод, вызываемый при изменении отслеживаемых свойств. Здесь должна происходить подготовка данных ",n.jsx(e.code,{children:"this.event"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { DesignAsyncAbstract } from '@dxtmisha/functional'

// 1. Определение интерфейсов
interface MyProps { userId: number }
interface MyState { userName: string; avatar: string }

// 2. Реализация конкретного класса
class UserDesign extends DesignAsyncAbstract<MyProps, MyState> {
  protected async initEvent(): Promise<void> {
    const response = await fetch(\`https://api.example.com/users/\${this.props.userId}\`)
    const data = await response.json()
    
    this.event.userName = data.name
    this.event.avatar = data.image
  }
}

// 3. Использование
const user = new UserDesign(
  { userId: 1 }, 
  (state) => {
    console.log('Данные пользователя загружены:', state.userName)
  },
  ['userId'] // Следить только за изменением userId
)
`})}),`
`,n.jsx(e.h2,{id:"методы-управления-данными",children:"Методы управления данными"}),`
`,n.jsx(e.h3,{id:"make",children:n.jsx(e.code,{children:"make"})}),`
`,n.jsxs(e.p,{children:["Инициирует асинхронный процесс обновления. Вызывает ",n.jsx(e.code,{children:"makeCallback"})," (не дожидаясь завершения) и возвращает экземпляр для цепочки вызовов."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compelled?: boolean"})," — если ",n.jsx(e.code,{children:"true"}),", принудительно обновляет данные независимо от наличия изменений."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"this"})]}),`
`,n.jsx(e.h3,{id:"makecallback",children:n.jsx(e.code,{children:"makeCallback"})}),`
`,n.jsxs(e.p,{children:["Основная асинхронная логика выполнения для обновления состояния. Дожидается завершения ",n.jsx(e.code,{children:"initEvent"})," перед запуском обратных вызовов и обновлением трекера изменений."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"compelled?: boolean"})," — принудительно обновляет данные."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<void>"})]}),`
`,n.jsx(e.h2,{id:"защищенные-методы-для-наследников",children:"Защищенные методы (для наследников)"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsxs(e.p,{children:["Проверяет наличие ключа в объекте ",n.jsx(e.code,{children:"props"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: keyof T"})," — имя свойства."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.h3,{id:"ischanged",children:n.jsx(e.code,{children:"isChanged"})}),`
`,n.jsxs(e.p,{children:["Проверяет, изменилось ли значение указанного свойства по сравнению с предыдущим состоянием. Полезно внутри ",n.jsx(e.code,{children:"initEvent"})," для оптимизации запросов (выполнять действие, только если конкретный ID изменился)."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: keyof C"})," — имя свойства в состоянии."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"nameProp?: keyof T | (keyof T)[]"})," — имя или список имен свойств в ",n.jsx(e.code,{children:"props"}),", на основе которых рассчитывается изменение. По умолчанию совпадает с ",n.jsx(e.code,{children:"name"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.h3,{id:"makecallbackitem",children:n.jsx(e.code,{children:"makeCallbackItem"})}),`
`,n.jsx(e.p,{children:"Выполняет вызов функции обратного вызова, переданной в конструктор."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsxs(e.h3,{id:"initevent-абстрактный",children:[n.jsx(e.code,{children:"initEvent"})," (абстрактный)"]}),`
`,n.jsxs(e.p,{children:["Асинхронный метод, который должен быть реализован в подклассе. В нем происходит заполнение объекта ",n.jsx(e.code,{children:"this.event"})," на основе ",n.jsx(e.code,{children:"this.props"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"Promise<void>"})]})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
