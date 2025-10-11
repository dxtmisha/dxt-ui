import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dqnce8mp.js";import{M as i}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/ru/Composables/useSessionRef"}),`
`,e.jsx(n.h1,{id:"композабл-usesessionref",children:"Композабл useSessionRef"}),`
`,e.jsx(n.p,{children:"Композабл для создания реактивной переменной, синхронизированной с sessionStorage. Автоматически управляет чтением и записью значений в хранилище сессии браузера с singleton паттерном. Данные сохраняются только в рамках текущей вкладки/окна браузера и удаляются при его закрытии."}),`
`,e.jsx(n.h2,{id:"основные-возможности",children:"Основные возможности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Двусторонняя синхронизация"})," — автоматическая синхронизация между ref и sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Автоматическое сохранение"})," — изменения ref автоматически сохраняются в sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Изоляция по вкладкам"})," — данные не синхронизируются между вкладками (в отличие от localStorage)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Временное хранение"})," — данные удаляются при закрытии вкладки/браузера"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton паттерн"})," — переиспользование ref для одинаковых ключей"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Типобезопасность"})," — полная поддержка TypeScript с дженериками"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Значения по умолчанию"})," — поддержка начальных значений и функций-фабрик"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Интеграция с DataStorage"})," — использует класс DataStorage для управления хранилищем"]}),`
`]}),`
`,e.jsx(n.h2,{id:"функция",children:"Функция"}),`
`,e.jsx(n.h3,{id:"usesessionref",children:e.jsx(n.code,{children:"useSessionRef"})}),`
`,e.jsx(n.p,{children:"Создаёт реактивную переменную, синхронизированную с sessionStorage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — имя ключа в sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — значение по умолчанию или функция для его генерации (опционально)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"Ref<T | undefined>"})," — реактивная переменная Vue, связанная с sessionStorage"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

// Простое использование
const wizardStep = useSessionRef('wizard-step')

// С значением по умолчанию
const currentStep = useSessionRef('current-step', 1)

// С функцией по умолчанию
const sessionId = useSessionRef('session-id', () => Math.random().toString(36))
`})}),`
`,e.jsx(n.h2,{id:"основное-использование",children:"Основное использование"}),`
`,e.jsx(n.h3,{id:"базовая-синхронизация",children:"Базовая синхронизация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

// Создание ref, синхронизированного с sessionStorage
const wizardProgress = useSessionRef('wizard-progress', { step: 1 })

// При изменении ref - sessionStorage автоматически обновляется
wizardProgress.value = { step: 2, data: { name: 'Иван' } }

// При перезагрузке страницы (в той же вкладке) значение восстанавливается
console.log(wizardProgress.value) // { step: 2, data: { name: 'Иван' } }

// При закрытии вкладки данные удаляются
`})}),`
`,e.jsx(n.h3,{id:"singleton-паттерн",children:"Singleton паттерн"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// При повторном вызове с тем же именем возвращается существующий ref
const step1 = useSessionRef('wizard-step', 1)
const step2 = useSessionRef('wizard-step', 2)

console.log(step1 === step2) // true - тот же ref

step1.value = 3
console.log(step2.value) // 3 - оба указывают на один ref
`})}),`
`,e.jsx(n.h2,{id:"использование-в-компонентах",children:"Использование в компонентах"}),`
`,e.jsx(n.h3,{id:"многошаговый-мастер",children:"Многошаговый мастер"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

export default {
  setup() {
    const currentStep = useSessionRef('wizard-step', 1)
    const formData = useSessionRef('wizard-data', {
      name: '',
      email: '',
      phone: ''
    })

    const nextStep = () => {
      currentStep.value++
    }

    const prevStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--
      }
    }

    return {
      currentStep,
      formData,
      nextStep,
      prevStep
    }
  }
}

// Template:
// <div>
//   <div v-if="currentStep === 1">
//     <input v-model="formData.name" placeholder="Имя" />
//   </div>
//   <div v-if="currentStep === 2">
//     <input v-model="formData.email" placeholder="Email" />
//   </div>
//   <button @click="prevStep">Назад</button>
//   <button @click="nextStep">Далее</button>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"временное-состояние-фильтров",children:"Временное состояние фильтров"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useSessionRef } from '@dxtmisha/functional'

export default {
  setup() {
    const filters = useSessionRef('search-filters', {
      category: 'all',
      priceMin: 0,
      priceMax: 10000,
      sortBy: 'name'
    })

    const resetFilters = () => {
      filters.value = {
        category: 'all',
        priceMin: 0,
        priceMax: 10000,
        sortBy: 'name'
      }
    }

    return { filters, resetFilters }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"отличия-от-usestorageref",children:"Отличия от useStorageRef"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// useStorageRef - данные сохраняются между сессиями браузера
const persistentTheme = useStorageRef('theme', 'light')
// Данные остаются даже после закрытия браузера

// useSessionRef - данные удаляются при закрытии вкладки
const temporaryFilters = useSessionRef('filters', {})
// Данные удаляются при закрытии вкладки/браузера

// useStorageRef синхронизируется между вкладками
// useSessionRef изолирован для каждой вкладки
`})}),`
`,e.jsx(n.h2,{id:"работа-с-типами-данных",children:"Работа с типами данных"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Числа
const step = useSessionRef<number>('step', 1)
step.value = 2

// Булевы значения
const isCompleted = useSessionRef<boolean>('completed', false)
isCompleted.value = true

// Объекты
const wizardData = useSessionRef('wizard-data', {
  step: 1,
  userData: {},
  timestamp: Date.now()
})

// Массивы
const selectedItems = useSessionRef<number[]>('selected', [])
selectedItems.value.push(42)
`})}),`
`,e.jsx(n.h2,{id:"примеры-использования",children:"Примеры использования"}),`
`,e.jsx(n.h3,{id:"сохранение-прогресса-формы",children:"Сохранение прогресса формы"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const registrationForm = useSessionRef('registration', {
  step: 1,
  personal: { name: '', email: '' },
  address: { street: '', city: '' },
  completed: false
})

// При заполнении данные сохраняются
registrationForm.value.personal.name = 'Иван'
registrationForm.value.step = 2

// При перезагрузке страницы (F5) данные восстанавливаются
// При закрытии вкладки - всё удаляется
`})}),`
`,e.jsx(n.h3,{id:"временное-состояние-модального-окна",children:"Временное состояние модального окна"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const modalState = useSessionRef('modal', {
  isOpen: false,
  activeTab: 'details',
  scrollPosition: 0
})

const openModal = () => {
  modalState.value.isOpen = true
}

const closeModal = () => {
  modalState.value.isOpen = false
}
`})}),`
`,e.jsx(n.h3,{id:"корзина-покупок-временная",children:"Корзина покупок (временная)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cart = useSessionRef<CartItem[]>('temp-cart', [])

const addToCart = (item: CartItem) => {
  cart.value = [...cart.value, item]
}

const removeFromCart = (itemId: number) => {
  cart.value = cart.value.filter(item => item.id !== itemId)
}

const clearCart = () => {
  cart.value = []
}

// При закрытии вкладки корзина очищается автоматически
`})})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{p as default};
