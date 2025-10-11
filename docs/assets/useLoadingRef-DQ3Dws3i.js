import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-Dqnce8mp.js";import{M as a}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"@dxtmisha/functional/ru/Composables/useLoadingRef"}),`
`,n.jsx(i.h1,{id:"композабл-useloadingref",children:"Композабл useLoadingRef"}),`
`,n.jsx(i.p,{children:"Композабл для отслеживания глобального статуса загрузки приложения. Предоставляет реактивную переменную, которая автоматически обновляется при изменении состояния загрузки через класс Loading. Идеально подходит для отображения глобальных индикаторов загрузки, блокировки интерфейса во время асинхронных операций и координации множественных загрузочных процессов."}),`
`,n.jsx(i.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Глобальный статус загрузки"})," — единое место для управления состоянием загрузки всего приложения"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Реактивность"})," — автоматическое обновление при изменении статуса загрузки"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Счётчик загрузок"})," — поддержка множественных одновременных операций загрузки"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматическая подписка"})," — композабл автоматически подписывается на события Loading"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Простая интеграция"})," — легко интегрируется с любыми компонентами Vue"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Централизованное управление"})," — все компоненты используют один источник истины"]}),`
`]}),`
`,n.jsx(i.h2,{id:"функция",children:"Функция"}),`
`,n.jsx(i.h3,{id:"useloadingref",children:n.jsx(i.code,{children:"useLoadingRef"})}),`
`,n.jsx(i.p,{children:"Создаёт реактивную переменную, отслеживающую глобальный статус загрузки."}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Возвращает:"})," ",n.jsx(i.code,{children:"ShallowRef<boolean>"})," — реактивная переменная со статусом загрузки"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { useLoadingRef } from '@dxtmisha/functional'

// Создание реактивной переменной
const isLoading = useLoadingRef()

// isLoading.value === true когда есть активные загрузки
// isLoading.value === false когда загрузок нет
`})}),`
`,n.jsx(i.h2,{id:"основное-использование",children:"Основное использование"}),`
`,n.jsx(i.h3,{id:"базовое-отслеживание-загрузки",children:"Базовое отслеживание загрузки"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { useLoadingRef } from '@dxtmisha/functional'
import { Loading } from '@dxtmisha/functional'

// В компоненте
const isLoading = useLoadingRef()

// Показать загрузчик
Loading.show()
console.log(isLoading.value) // true

// Скрыть загрузчик
Loading.hide()
console.log(isLoading.value) // false
`})}),`
`,n.jsx(i.h3,{id:"работа-с-множественными-загрузками",children:"Работа с множественными загрузками"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { useLoadingRef, Loading } from '@dxtmisha/functional'

const isLoading = useLoadingRef()

// Первая операция загрузки
Loading.show()
console.log(isLoading.value) // true (счётчик = 1)

// Вторая операция загрузки
Loading.show()
console.log(isLoading.value) // true (счётчик = 2)

// Завершение первой операции
Loading.hide()
console.log(isLoading.value) // true (счётчик = 1)

// Завершение второй операции
Loading.hide()
console.log(isLoading.value) // false (счётчик = 0)
`})}),`
`,n.jsx(i.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,n.jsx(i.h3,{id:"глобальный-индикатор-загрузки",children:"Глобальный индикатор загрузки"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { useLoadingRef } from '@dxtmisha/functional'

export default {
  setup() {
    const isLoading = useLoadingRef()

    return { isLoading }
  }
}

// Template:
// <div v-if="isLoading" class="global-loader">
//   <div class="spinner"></div>
//   <p>Загрузка...</p>
// </div>
`})}),`
`,n.jsx(i.h3,{id:"интеграция-с-api-запросами",children:"Интеграция с API запросами"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'
import { useLoadingRef } from '@dxtmisha/functional'

export default {
  setup() {
    const isLoading = useLoadingRef()

    const fetchUserData = async () => {
      Loading.show()

      try {
        const response = await fetch('/api/user')
        const data = await response.json()
      } catch (error) {
        console.error('Ошибка:', error)
      } finally {
        Loading.hide()
      }
    }

    return { isLoading, fetchUserData }
  }
}

// Template:
// <button @click="fetchUserData" :disabled="isLoading">
//   Загрузить данные
// </button>
`})}),`
`,n.jsx(i.h2,{id:"интеграция-с-классом-loading",children:"Интеграция с классом Loading"}),`
`,n.jsxs(i.p,{children:["Композабл тесно интегрирован с классом ",n.jsx(i.code,{children:"Loading"}),":"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-javascript",children:`import { Loading } from '@dxtmisha/functional'
import { useLoadingRef } from '@dxtmisha/functional'

// В компоненте A
const isLoading = useLoadingRef()

// В любом месте приложения
Loading.show() // isLoading.value автоматически станет true

// В другом компоненте B
Loading.hide() // isLoading.value в компоненте A автоматически обновится

// Проверка статуса
console.log(Loading.is()) // true/false

// Все компоненты с useLoadingRef() будут синхронизированы
`})})]})}function g(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{g as default};
