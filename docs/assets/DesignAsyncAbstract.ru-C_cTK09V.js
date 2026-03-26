import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional/Classes/DesignAsyncAbstract - Базовый асинхронный класс дизайна`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designasyncabstract`,children:`Класс DesignAsyncAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Асинхронный абстрактный базовый класс для управления свойствами конструктора и изменениями состояния. Расширяет `,(0,c.jsx)(n.code,{children:`DesignAbstract`}),` поддержкой асинхронной инициализации событий, что делает его идеальным для случаев, требующих загрузки данных или асинхронных вычислений.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронная инициализация`}),` — поддержка инициализации событий на основе `,(0,c.jsx)(n.code,{children:`Promise`}),` через метод `,(0,c.jsx)(n.code,{children:`initEvent`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Управление свойствами`}),` — наследует структурированную обработку входных данных (`,(0,c.jsx)(n.code,{children:`props`}),`) и хранилища событий (`,(0,c.jsx)(n.code,{children:`event`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронный рабочий процесс`}),` — гарантирует, что обратные вызовы запускаются только после завершения асинхронной подготовки состояния.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignAsyncAbstract`}),` является абстрактным классом и не может быть инициализирован напрямую. Он предназначен для расширения другими классами, которые должны реализовать метод `,(0,c.jsx)(n.code,{children:`initEvent`}),` для асинхронной подготовки данных.`]}),`
`,(0,c.jsx)(n.h3,{id:`ограничения-дженериков-generic-constraints`,children:`Ограничения дженериков (Generic Constraints)`}),`
`,(0,c.jsx)(n.p,{children:`Класс использует два типа дженериков для обеспечения строгой типизации:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T extends Record<string, any>`}),` — Тип для входных свойств (`,(0,c.jsx)(n.code,{children:`props`}),`). Определяет структуру данных, передаваемых в конструктор.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`C extends Record<string, any>`}),` — Тип для внутреннего состояния или кэша (`,(0,c.jsx)(n.code,{children:`event`}),`). Определяет структуру данных, которая будет доступна в обратных вызовах после асинхронной инициализации.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры конструктора:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props: T`}),` — объект с исходными данными.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: C) => void`}),` — функция обратного вызова, которая будет вызываться после каждого успешного обновления (включая асинхронное).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`changed?: string[]`}),` — необязательный список ключей из `,(0,c.jsx)(n.code,{children:`props`}),`, за которыми нужно следить. Если не передан, отслеживаются все ключи `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Внутренние свойства:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected readonly event: C`}),` — объект состояния. Именно его следует наполнять данными в `,(0,c.jsx)(n.code,{children:`initEvent`}),`. Он будет передан в `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Обязательный метод для реализации:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`protected abstract initEvent(): Promise<void>`}),` — асинхронный метод, вызываемый при изменении отслеживаемых свойств. Здесь должна происходить подготовка данных `,(0,c.jsx)(n.code,{children:`this.event`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignAsyncAbstract } from '@dxtmisha/functional'

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
`,(0,c.jsx)(n.h2,{id:`методы-управления-данными`,children:`Методы управления данными`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Инициирует асинхронный процесс обновления. Вызывает `,(0,c.jsx)(n.code,{children:`makeCallback`}),` (не дожидаясь завершения) и возвращает экземпляр для цепочки вызовов.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — если `,(0,c.jsx)(n.code,{children:`true`}),`, принудительно обновляет данные независимо от наличия изменений.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallback`,children:(0,c.jsx)(n.code,{children:`makeCallback`})}),`
`,(0,c.jsxs)(n.p,{children:[`Основная асинхронная логика выполнения для обновления состояния. Дожидается завершения `,(0,c.jsx)(n.code,{children:`initEvent`}),` перед запуском обратных вызовов и обновлением трекера изменений.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`compelled?: boolean`}),` — принудительно обновляет данные.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.h2,{id:`защищенные-методы-для-наследников`,children:`Защищенные методы (для наследников)`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет наличие ключа в объекте `,(0,c.jsx)(n.code,{children:`props`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof T`}),` — имя свойства.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`ischanged`,children:(0,c.jsx)(n.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(n.p,{children:[`Проверяет, изменилось ли значение указанного свойства по сравнению с предыдущим состоянием. Полезно внутри `,(0,c.jsx)(n.code,{children:`initEvent`}),` для оптимизации запросов (выполнять действие, только если конкретный ID изменился).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: keyof C`}),` — имя свойства в состоянии.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nameProp?: keyof T | (keyof T)[]`}),` — имя или список имен свойств в `,(0,c.jsx)(n.code,{children:`props`}),`, на основе которых рассчитывается изменение. По умолчанию совпадает с `,(0,c.jsx)(n.code,{children:`name`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`boolean`})]}),`
`,(0,c.jsx)(n.h3,{id:`makecallbackitem`,children:(0,c.jsx)(n.code,{children:`makeCallbackItem`})}),`
`,(0,c.jsx)(n.p,{children:`Выполняет вызов функции обратного вызова, переданной в конструктор.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsxs)(n.h3,{id:`initevent-абстрактный`,children:[(0,c.jsx)(n.code,{children:`initEvent`}),` (абстрактный)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Асинхронный метод, который должен быть реализован в подклассе. В нем происходит заполнение объекта `,(0,c.jsx)(n.code,{children:`this.event`}),` на основе `,(0,c.jsx)(n.code,{children:`this.props`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};